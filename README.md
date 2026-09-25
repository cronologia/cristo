# Cristo — Cronologia

A source-referenced chronology of **Jesus of Nazareth** as the sources date
him, of the **objects venerated as his relics**, and of **where those objects
are kept today**. Part of the [Cronologia](https://cronologia.github.io/)
family; published in English, Spanish and Portuguese at
<https://cronologia.github.io/cristo/>.

## What it covers

- **The life, as the sources date it.** The Gospels are cited as the texts
  that narrate it; Josephus, Tacitus and modern scholars for the dates they
  establish. Where they disagree — the year of the birth, the year and day of
  the crucifixion — the disagreement is recorded, not resolved. Miracles and
  the Resurrection are recorded as what the Gospels narrate and the Church
  believes; the site neither asserts nor denies them.
- **Outside witnesses and memory-sites.** The non-Christian ancient writers,
  the archaeology (the Pilate inscription, the Caiaphas ossuary) and the first
  churches built on the places the Gospels name.
- **The objects venerated as relics** — the Shroud of Turin, the Sudarium of
  Oviedo, the Veronica, the Holy Tunics, the Holy Blood, the True Cross, the
  Titulus, the Nails, the Crown of Thorns, the Holy Lances, the Scala Sancta,
  the Columns, the Holy Chalice — each with its first attestation, its
  custodians, its tests and the acts of Church authorities about it, and the
  place it is kept now, on a map.

## Sourcing posture

Attribute, never assert. For the relics this project applies
[core ADR-0007](https://github.com/cronologia/core/blob/main/adr/0007-approval-is-an-act-about-an-object.md):
a record states one authority's act about one named object. Expositions,
feasts, indulgences, jubilees and papal visits are acts of cult, not rulings
on authenticity; no Church act declaring any of these objects authentic was
located. Laboratory results belong to their laboratories; published critiques
are recorded as critiques.

## How it is built

`data/chronology.json` is the source of truth. `node build.js` compiles it into
the static site in `docs/`, served by GitHub Pages. The gate for any change is

```
node scripts/validate-data.js && node build.js && node --test
```

See `AGENTS.md` and `context.md`. The research of record behind the bootstrap
is in `research/`; its verification log is
[cristo#1](https://github.com/cronologia/cristo/issues/1).
