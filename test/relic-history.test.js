'use strict';
/* Relic history strips (cristo#14) - this site's own test. */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { relicSightings, renderRelicStrip, UI } = require('../build.js');
const data = require('../data/chronology.json');

const refs = new Map([['a', 1], ['b', 2]]);
const ev = (year, place, id = 'x') => ({ year, title: `E${year}`, sources: ['a'], relics: [{ id, place }] });
const EVS = [ev(1353, 'Lirey, France'), ev(1390, 'Lirey, France'), ev(1532, 'Chambéry, France'), ev(1578, 'Turin, Italy'), ev(1600, 'Elsewhere', 'other')];

test('sightings are the events that place THIS object, in date order', () => {
  assert.deepEqual(relicSightings('x', EVS.slice().reverse()).map((s) => s.year), [1353, 1390, 1532, 1578]);
});

test('same place joins solid; a change of place is hatched, never a continuous line', () => {
  const html = renderRelicStrip({ id: 'x', site: 'Turin Cathedral, Turin, Italy' }, EVS, refs, UI.en, 2026);
  const bars = [...html.matchAll(/<i class="(rh-stay|rh-move)"/g)].map((m) => m[1]);
  assert.deepEqual(bars, ['rh-stay', 'rh-move', 'rh-move', 'rh-stay'], 'Lirey solid, two undated moves, Turin runs on to today');
  assert.match(html, /<span class="rh-place">Lirey, France<\/span> 1353<sup class="cite">.*?, 1390/);
  assert.match(html, /1353–today/);
});

test('today in another city than the last sighting is a move, not a stay', () => {
  const html = renderRelicStrip({ id: 'x', site: 'Somewhere else' }, EVS, refs, UI.en, 2026);
  assert.match(html, /<i class="rh-move" style="left:[\d.]+%;width:[\d.]+%"><\/i><b/);
});

test('an object no event places has no strip', () => {
  assert.equal(renderRelicStrip({ id: 'none', site: '' }, EVS, refs, UI.en, 2026), '');
});

test("the dataset's sightings all name catalogue items", () => {
  const ids = new Set(data.catalogue.items.map((it) => it.id));
  for (const e of data.events) for (const r of e.relics || []) assert.ok(ids.has(r.id), r.id);
});
