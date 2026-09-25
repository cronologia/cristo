# Context — cronologia/cristo

## What this repo is

A source-referenced chronology of Jesus of Nazareth, of the objects venerated
as his relics, and of where those objects are kept today. One of the
Cronologia family of projects; it follows the shared sourcing discipline in
`.claude/skills/sourcing-rules/SKILL.md`.

Three declared lanes (`meta.threads`): **life** (what the Gospels narrate and
scholars date), **witnesses** (non-Christian writers, archaeology and the first
memory-churches) and **relics** (each object's history). Left out on purpose:
the history of doctrine and of the Church.

## Domain background an agent needs

- **Two registers.** The "Jesus of history" is what historical method
  reconstructs; the "Christ of faith" is what the Church professes. Write "the
  Gospels narrate", "Christians profess", and name the historian — never let
  one register settle the other.
- **Dating anchors.** Matthew sets the birth "in the days of King Herod", who
  died in 4 BCE by the majority reckoning (1 BCE is a minority view); Luke sets
  it at Quirinius's census, 6–7 CE — a conflict the Catholic bishops' own Bible
  notes call unresolved. The crucifixion falls on Friday 7 April 30 or Friday
  3 April 33 (Julian); Humphreys and Waddington favour 33 without ruling out
  30. The Synoptics and John differ on 14 vs 15 Nisan.
- **BCE years are negative in the data** (`-4` = 4 BCE; no year 0), rendered
  "4 BCE" / "4 a. C." / "4 a.C." by `yearLabel()` (core#100). Ancient events
  carry no ISO `date`; days go in `dateNote`.
- **Relics are not authenticated by acts of cult.** ADR-0007 applied to
  objects: an exposition, feast, indulgence, jubilee, basilica title, papal
  mass or visit honours or regulates veneration — it is recorded, as what it
  is, and never promoted to a verdict. John Paul II (Turin, 1998): the Church
  "has no specific competence to pronounce" on the Shroud. The Holy See's 2017
  instruction on relics concerns relics of the Blessed and the Saints.
- **Every "the Vatican declared it authentic" claim must be traced to a
  document.** None was located for any object here. The mirror error — reading
  a sceptical act as a condemnation — is equally wrong.
- **Laboratory results are dated samples, not verdicts on traditions**:
  Shroud 1260–1390 (Nature, 1989) with published critiques; Titulus 980–1146
  (Radiocarbon, 2002); Argenteuil tunic 530–650 (per the parish); Vienna lance
  8th century (University of Vienna). The Sudarium's reported dates have no
  primary publication located.

## Disambiguations (also in the dataset)

Shroud ≠ Sudarium; Veronica ≠ Manoppello ≠ Mandylion; Titulus ≠ True Cross;
at least four Holy Lances; two Columns of the Flagellation of different stone;
Valencia's agate cup ≠ Genoa's glass dish; three Herods; prefect ≠ procurator.

## Places

The places map resolves each event's `place` through the vendored gazetteer
(`data/places.json`, canonical in `cronologia/core`). Judea, the Jordan River
and Bithynia are deliberately non-geographic: a point would invent a location
the sources don't claim. To add a place, add it to core's gazetteer with
`tools/places.py --propose`, read the display name, then `node
scripts/sync-places.js`.

## Open work

The deep-investigation epic lists every flagged date and every open source.
