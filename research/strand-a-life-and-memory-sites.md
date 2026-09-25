# cristo — Strand A: life of Jesus chronology and earliest memory-sites
Research report (research only; no repo edits). Compiled 2026-09-25.
Status: complete — see section 5 for gaps

## 0. Fetch log (primary texts; all fetched 2026-09-25 via the session proxy, curl with desktop UA)

| id (proposed) | URL | result |
|---|---|---|
| usccb-luke-2 | https://bible.usccb.org/bible/luke/2 | 200, content (NABRE text + notes) |
| usccb-luke-3 | https://bible.usccb.org/bible/luke/3 | 200, content |
| usccb-matthew-2 | https://bible.usccb.org/bible/matthew/2 | 200, content |
| usccb-matthew-28 | https://bible.usccb.org/bible/matthew/28 | 200, content |
| usccb-acts-1 | https://bible.usccb.org/bible/acts/1 | 200, content |
| usccb-acts-9 | https://bible.usccb.org/bible/acts/9 | 200, content |
| usccb-1cor-15 | https://bible.usccb.org/bible/1corinthians/15 | 200, content |
| (USCCB John 19, John 18, Mark 14, Galatians 1) | bible.usccb.org/bible/john/19 etc. | **403** (bot filter/rate limit after ~8 requests; inconclusive, not dead). Used vatican.va NAB instead. |
| vatican-nab-john-19 | https://www.vatican.va/archive/ENG0839/__PXR.HTM | 200, content (NAB 2002, "John Chapter 19") |
| vatican-nab-mark-14 | https://www.vatican.va/archive/ENG0839/__PWG.HTM | 200, content (Mark 14) |
| vatican-nab-mark-15 | https://www.vatican.va/archive/ENG0839/__PWH.HTM | 200, content (Mark 15) |
| vatican-nab-mark-16 | https://www.vatican.va/archive/ENG0839/__PWI.HTM | 200, content (Mark 16) |
| josephus-ant-whiston | https://www.gutenberg.org/files/2848/2848-h/2848-h.htm | 200, content (Whiston tr., Antiquities, full) |
| tacitus-annals-15 | https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Tacitus/Annals/15B*.html | 200, content (LacusCurtius, Loeb/Jackson tr., Annals 15.44 present) |
| suetonius-claudius | https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Suetonius/12Caesars/Claudius*.html | 200, content (LacusCurtius, Loeb/Rolfe tr.) |
| pliny-letters-melmoth | https://www.gutenberg.org/files/2811/2811-h/2811-h.htm | 200, content (Melmoth tr.; the Christians letter is numbered **XCVII** in this edition = standard **Ep. 10.96**) |
| eusebius-vc-3 | https://www.newadvent.org/fathers/25023.htm | 200, content (Life of Constantine, Book III, NPNF tr.) |
| unesco-1433 | https://whc.unesco.org/en/list/1433/ | **403** first try (see later retry below) |

### Exact wording captured (load-bearing quotes)

- **Luke 2:1–2 (NABRE, USCCB):** "In those days a decree went out from Caesar Augustus that the whole world should be enrolled. This was the first enrollment, when Quirinius was governor of Syria."
- **USCCB/NABRE note on Luke 2:1–2 (the Catholic bishops' own edition records the problem):** "there are notorious historical problems connected with Luke's dating the census when Quirinius was governor of Syria, and the various attempts to resolve the difficulties have proved unsuccessful. P. Sulpicius Quirinius became legate of the province of Syria in A.D. 6–7 when Judea was annexed to the province of Syria. At that time, a provincial census of Judea was taken up. If Quirinius had been legate of Syria previously, it would have to have been before 10 B.C. because the various legates of Syria from 10 B.C. to 4 B.C. (the death of Herod) are known…"
- **Matthew 2:1 (NABRE):** "When Jesus was born in Bethlehem of Judea, in the days of King Herod…"; note: "Herod reigned from 37 to 4 B.C."
- **Matthew 2:19:** "When Herod had died, behold, the angel of the Lord appeared in a dream to Joseph in Egypt…"
- **Luke 3:1–2 (NABRE):** "In the fifteenth year of the reign of Tiberius Caesar, when Pontius Pilate was governor of Judea, and Herod was tetrarch of Galilee, … during the high priesthood of Annas and Caiaphas, the word of God came to John the son of Zechariah in the desert."
- **NABRE note on Luke 3:1:** "Tiberius succeeded Augustus as emperor in A.D. 14 and reigned until A.D. 37. The fifteenth year of his reign, depending on the method of calculating his first regnal year, would have fallen between A.D. 27 and 29. Pontius Pilate: prefect of Judea from A.D. 26 to 36."
- **NABRE note on Luke 3:2:** "Annas had been high priest A.D. 6–15. … his son-in-law, Caiaphas, who was high priest A.D. 18–36."
- **Luke 3:23:** Jesus "was about thirty years of age" when he began.
- **Mark 14:12 (NAB, vatican.va):** "On the first day of the Feast of Unleavened Bread, when they sacrificed the Passover lamb, his disciples said to him, 'Where do you want us to go and prepare for you to eat the Passover?'" (Synoptic: Last Supper = Passover meal.)
- **Mark 15:25, 15:42 (NABRE/NAB):** "It was nine o'clock in the morning when they crucified him"; "since it was the day of preparation, the day before the sabbath".
- **John 19:14 (NAB, vatican.va):** "It was preparation day for Passover, and it was about noon." (Johannine: death on the eve of Passover, before the meal.) John 19:17: "the Place of the Skull, in Hebrew, Golgotha"; 19:31 "the sabbath day of that week was a solemn one"; 19:41 "in the garden a new tomb, in which no one had yet been buried".
- **Mark 16:1–2:** "When the sabbath was over, Mary Magdalene, Mary, the mother of James, and Salome bought spices … Very early when the sun had risen, on the first day of the week, they came to the tomb."
- **1 Corinthians 15:3–5 (NABRE):** "For I handed on to you as of first importance what I also received: that Christ died for our sins in accordance with the scriptures; that he was buried; that he was raised on the third day in accordance with the scriptures; that he appeared to Cephas, then to the Twelve."
- **Acts 1:3, 1:9:** "appearing to them during forty days"; "he was lifted up, and a cloud took him from their sight."
- **Acts 9:3–4:** "On his journey, as he was nearing Damascus, a light from the sky suddenly flashed around him. He fell to the ground and heard a voice saying to him, 'Saul, Saul, why are you persecuting me?'"
- **Josephus, Ant. 18.63–64 (Whiston, "Testimonium Flavianum"):** "Now there was about this time Jesus, a wise man, if it be lawful to call him a man; for he was a doer of wonderful works … He was [the] Christ. And when Pilate, at the suggestion of the principal men amongst us, had condemned him to the cross, those that loved him at the first did not forsake him; for he appeared to them alive again the third day … And the tribe of Christians, so named from him, are not extinct at this day."
- **Josephus, Ant. 20.200 (Whiston):** Ananus "assembled the sanhedrim of judges, and brought before them the brother of Jesus, who was called Christ, whose name was James, and some others".
- **Josephus, Ant. 17.191 (Whiston) on Herod's death:** "he died, the fifth day after he had caused Antipater to be slain; having reigned, since he had procured Antigonus to be slain, thirty-four years; but since he had been declared king by the Romans, thirty-seven." Ant. 17.167: "And that very night there was an eclipse of the moon." Whiston's own 18th-c. note: the eclipse "happened March 13th, in the year of the Julian period 4710, and the 4th year before the Christian era" (note by the translator, not Josephus).
- **Josephus, Ant. 18.89 (Whiston) on Pilate:** "So Pilate, when he had tarried ten years in Judea, made haste to Rome, and this in obedience to the orders of Vitellius … but before he could get to Rome Tiberius was dead."
- **Tacitus, Annals 15.44 (Loeb/Jackson, LacusCurtius):** "Nero substituted as culprits … a class of men, loathed for their vices, whom the crowd styled Christians. Christus, the founder of the name, had undergone the death penalty in the reign of Tiberius, by sentence of the procurator Pontius Pilatus, and the pernicious superstition was checked for a moment, only to break out once more…" (Note: Tacitus says "procurator"; the Pilate Stone title is "praefectus" — see event list.)
- **Suetonius, Claudius 25.4 (Loeb/Rolfe, LacusCurtius):** "Since the Jews constantly made disturbances at the instigation of Chrestus, he expelled them from Rome."
- **Pliny, Ep. 10.96 (Melmoth, numbered XCVII):** "IT is my invariable rule, Sir, to refer to you in all matters where I feel doubtful … they met on a stated day before it was light, and addressed a form of prayer to Christ, as to a divinity…"
- **Eusebius, Life of Constantine 3.26:** the site had been covered by "a gloomy shrine of lifeless idols to the impure spirit whom they call Venus"; **3.28:** "contrary to all expectation, the venerable and hollowed monument of our Saviour's resurrection was discovered"; **3.41:** Constantine adorned "two sacred caves" — the scene of the birth and of the ascension on "the mountain top"; **3.43:** Helena "dedicated two churches … one at the grotto which had been the scene of the Saviour's birth; the other on the mount of his ascension." (Eusebius gives no calendar year in these chapters.)


### Secondary fetch log (Catholic Encyclopedia 1907–1914 via New Advent; all 200 with content, 2026-09-25)
- ce-chronology-jesus: https://www.newadvent.org/cathen/08377a.htm — A. Maas, "Chronology of the Life of Jesus Christ" (1910)
- ce-dionysius-exiguus: https://www.newadvent.org/cathen/05010b.htm — J. Gerard (1909)
- ce-helena: https://www.newadvent.org/cathen/07202b.htm
- ce-constantine: https://www.newadvent.org/cathen/04295c.htm
- ce-eusebius: https://www.newadvent.org/cathen/05617b.htm
- ce-pilate: https://www.newadvent.org/cathen/12083c.htm
- ce-herod: https://www.newadvent.org/cathen/07289c.htm
- ce-john-baptist: https://www.newadvent.org/cathen/08486b.htm
- ce-caiaphas: https://www.newadvent.org/cathen/03143b.htm
- ce-josephus: https://www.newadvent.org/cathen/08522a.htm
- ce-holy-sepulchre: https://www.newadvent.org/cathen/07425a.htm
- (tried https://www.newadvent.org/cathen/02533c.htm for Bethlehem — 404, wrong guess; not used)

Key CE quotes:
- Maas 1910 (birth): "we are led to believe that Jesus may have been born A.U.C. 747, 748, 749" (= 7–5 BC); eclipse "from 12 to 13 March, A.U.C. 750, so that Herod must have died before the Passover of that year which fell on 12 April". Public life "about 777-779 A.U.C."
- Maas 1910 (death year, patristic tradition): "Tradition … places the death of Jesus in the fifteenth (or sixteenth) year of Tiberius, in the consulship of the Gemini … the consulship of the Gemini (Fufius and Rubellius) fell in A.U.C. 782; the forty second year before the destruction of Jerusalem is A.D. 29". Day: "Jesus died on Friday, the fifteenth day of Nisan." Maas **harmonizes** John with the Synoptics (argues John's "pasch" in 18:28 means the Chagigah offerings) — a harmonizing reading, recorded as one view.
- Gerard 1909: Dionysius "introduced the use of the Christian Era … according to which dates are reckoned from the Incarnation, which he assigned to 25 March, in the year 754 from the foundation of Rome (A.U.C.)"; he meant "to supersede the 'Era of Diocletian' … being unwilling … that the name of an impious persecutor should be thus kept in memory"; era "during the eighth and ninth centuries … adopted in England"; "not until the tenth century that it was employed in the pap[al chancery]"; he died "before the year 544". **No year 525 in this article** — the Easter-table date comes from another source (see below).
- CE Holy Sepulchre: site identified by "investigations caused to be made in 326 by the Emperor Constantine"; "The edifice built over the Holy Sepulchre by Constantine was dedicated in 336." (**Disagrees** with the usual 335 — see event E-29.)
- CE Pilate: "succeeding Valerius Gratus in A.D. 26 … His unusually long period of office (A.D. 26-36)"; "Pilate owed his appointment to the influence of Sejanus" (CE's claim).
- CE Caiaphas: appointed "by … Valerius Gratus … about A.D. 18 … and removed … by … Vitellius … A.D. 36"; Annas high priest "from A.D. 6 to 15".
- CE Herod: Josephus "fixes the death of Herod in the spring of 750 A.U.C." (= 4 BC).
- CE Josephus: "born A.D. 37, at Jerusalem; died about 101."
- CE Eusebius: "b. about 260; d. before 341"; "Father of Church History".
- CE Helena: born "about the middle of the third century, possibly in Drepanum"; "died about 330"; journey to Palestine "subsequently, therefore, to the year 324"; churches "one … in Bethlehem near the Grotto of the Nativity, the other on the Mount of the Ascension".
- CE Constantine: birth "given as early as 274 and as late as 288"; died "in May, 337, after receiving baptism".

### Further fetch log (2026-09-25)
| id (proposed) | URL | result |
|---|---|---|
| humphreys-waddington-1983 | https://www.nature.com/articles/306743a0 | 200 — **abstract only** (paywall; full text NOT read) |
| humphreys-waddington-1992 | https://www.tyndalebulletin.org/article/30487-the-jewish-calendar-a-lunar-eclipse-and-the-date-of-christ-s-crucifixion.pdf | 200, PDF 21 pp., full text read (Tyndale Bulletin 43.2, 1992) |
| (ADS abstract) | https://ui.adsabs.harvard.edu/abs/1983Natur.306..743H/abstract | 405 human-verification wall; not used |
| cojs-caiaphas-ossuary | https://cojs.org/ossuary_of_the_high_priest_caiaphas-_18-36_ce/ | 200, content |
| imj-cradle-christianity | https://www.imj.org.il/en/exhibitions/cradle-christianity | 200, content (Israel Museum exhibition page, 2000–2001) |
| imj-pilate-inscription | https://www.imj.org.il/en/collections/395572 (and …/395572-0) | 200 but **JS bot-challenge page, no content** (publisher bot-wall; inconclusive). Title per search result: "Latin dedicatory inscription mentioning Pontius Pilate, the procurator of Judea". Needs out-of-band capture. |
| wp-pilate-stone | https://en.wikipedia.org/wiki/Pilate_stone | 200, content (tertiary) |
| wp-caiaphas-ossuary | https://en.wikipedia.org/wiki/Caiaphas_ossuary | 200, content (tertiary) |
| wp-holy-sepulchre | https://en.wikipedia.org/wiki/Church_of_the_Holy_Sepulchre | 200, content (tertiary) |
| wp-anno-domini | https://en.wikipedia.org/wiki/Anno_Domini | 200, content (tertiary) |
| wp-dionysius-easter-table | https://en.wikipedia.org/wiki/Dionysius_Exiguus%27_Easter_table | 200, content (tertiary, stub) |
| bas-church-nativity | https://www.biblicalarchaeology.org/daily/bas-onsite/church-of-the-nativity/ | 200, content |
| eusebius-vc-4 | https://www.newadvent.org/fathers/25024.htm | 200, content (Life of Constantine Book IV) |
| ce-general-chronology | https://www.newadvent.org/cathen/03738a.htm | 200, content |
| ce-paul | https://www.newadvent.org/cathen/11567b.htm | 200, content |
| unesco-1433 | https://whc.unesco.org/en/list/1433/ | **403 Cloudflare "Just a moment…"** to curl and WebFetch (publisher bot-wall; inconclusive). Wayback availability API: snapshot exists `http://web.archive.org/web/20260920102807/https://whc.unesco.org/en/list/1433/` (direct Wayback reads blocked by egress policy — text NOT read). |
| custodia-holy-sepulchre / custodia-nativity | https://www.custodia.org/en/sanctuaries/basilica-of-the-holy-sepulchre/ ; https://www.custodia.org/en/sanctuaries/bethlehem-basilica-of-the-nativity/ ; https://www.custodia.org/en/news/dedication-basilica-holy-sepulchre/ | **connection timeout** (curl 60 s and WebFetch 60 s; even bare https://www.custodia.org/ timed out at 30 s). Inconclusive — possibly geo/transient. Search snippets only (NOT read): one Custody page says Constantine's works were "formally inaugurated on 13 September 335"; another snippet says the complex "was consecrated in September 355" (apparent typo for 335 on custodia.org — verify). Needs retry/out-of-band capture. |
| britannica Jesus / Dionysius | https://www.britannica.com/biography/Jesus ; …/Dionysius-Exiguus | 403 Cloudflare; not used |

Key quotes from this batch:
- **Humphreys & Waddington 1992 (Tyndale Bulletin 43.2):** "The evidence points to Friday 3 April AD 33 as the date of the Crucifixion. This was Nisan 14 in the official Jewish calendar". Table 2 "Calendrically Possible Dates for the Crucifixion" (Julian calendar): Nisan 14 (John's Gospel and Synoptics b,c): "Friday, 11 April AD 27", "Friday, 7 April AD 30", "Friday, 3 April AD 33"; Nisan 15 (Synoptics a): "Friday, 11 April AD 27", "Friday, 23 April AD 34". And: "not all scholars accept that AD 33 is preferable to AD 30, and the date 7 April AD 30 is also strongly supported. Without further evidence it does not seem possible to decide conclusively between these two dates". They call an AD 36 crucifixion (Lane Fox; Kokkinos) "calendrically impossible".
- **Nature 1983 abstract:** "The date of the Crucifixion has been debated for many years, but there has been no agreement on the year nor the day. … The evidence points to Friday 3 April AD 33".
- **COJS:** "In 1990 two burial caves were discovered on a hill immediately south of Jerusalem"; ossuary name "yhwsp br qp' = 'Yoseph bar Qapa'"; "It seems quite possible that this man was Joseph Caiaphas, the high priest in the time of Jesus"; location "Israel Museum, Jerusalem".
- **Israel Museum, Cradle of Christianity (28 Mar 2000 – 30 Jan 2001):** highlights "the burial ossuary of Caiaphas the High Priest who, according to the New Testament, delivered Jesus to the Romans, and an inscription bearing the name of Pontius Pilate. These artifacts represent the only surviving physical testimonies of these two prominent figures."
- **Wikipedia, Pilate stone:** "discovered in June 1961 by Italian archaeologist Maria Teresa Fortuna Canivet during a campaign led by Antonio Frova … in the area of an ancient theatre"; "AE 1963 number 104"; held at the Israel Museum.
- **Wikipedia, Caiaphas ossuary:** "discovered in a burial cave in south Jerusalem in December 1990"; "The chamber tomb was discovered by construction workers in November 1990"; "the identification with Caiaphas has been challenged by some scholars on various grounds, including the spelling of the inscription, the lack of any mention of Caiaphas's status as High Priest…" (cites Zvi Greenhut).
- **BAS (Biblical Archaeology Society):** "The first church built at the site was commissioned by the Roman emperor Constantine in the early fourth century; the church was consecrated on May 31, 339."; "following Empress Helena's trip to the Holy Land in 327 CE, a basilica was constructed above the cave"; church "partly burned down" early 6th c., "reconstructed soon after by Emperor Justinian. It is Justinian's basilica that still stands today"; "added to the list of UNESCO World Heritage sites in 2012."
- **Eusebius VC 4.40, 4.47:** "By this time the thirtieth year of his reign was completed … he dedicated the Church at Jerusalem"; "the Council at Nicæa was held in the Twentieth, the Dedication of the Church at Jerusalem in the Thirtieth, Year of Constantine's Reign". (Constantine proclaimed 25 July 306 per CE → thirtieth year = 335–336, which is why sources split 335/336.)
- **CE General Chronology:** Christian Era "introduced about the year 527 by Dionysius Exiguus … who fixed its starting point in the year 753 from the foundation of Rome"; "It is supposed by many that the calculation of Dionysius was incorrect, and that the birth of Christ really occurred three years earlier … in the year of Rome 750"; Gregory XIII "ordained that ten days in October, 1582, should not be counted … Thursday, 4 October, was followed by Friday, 15 October."
- **CE St Paul (F. Prat, 1911):** "Paul's conversion was not prior to 34"; proposed table "Conversion, 35; first visit to Jerusalem, 37 …".
- **CE Josephus (on Ant. 18.63–64):** "Attempts have been made to refute the objections brought against this passage both for internal and external reasons, but the difficulty has not been definitively settled. The passage seems to suffer from repeated interpolations."
- **Wikipedia Anno Domini / Easter table:** table "constructed in the year 525 … created for the years 532–626"; "Diocletian Anno Martyrium 247, was immediately followed by … Anno Domini 532"; "There is no year zero; the year AD 1 immediately follows the year 1 BC"; Bede used AD in the Ecclesiastical History "completed in AD 731".

---
## 1. Events (31)

Conventions: dates in BCE/CE as given or converted from the source's own notation (source notation kept in quotes). Ancient dates are Julian-calendar dates. "dV" = dateVerified recommendation. ⚑ = disagreement recorded.

**E-01 — Herod the Great named king by the Romans** · 40 BCE (Senate appointment) / reign counted from 37 BCE · Rome / Jerusalem
Josephus counts Herod's reign "since he had been declared king by the Romans, thirty-seven" years and "since he had procured Antigonus to be slain, thirty-four"; the NABRE note gives "Herod reigned from 37 to 4 B.C."
Sources: josephus-ant-whiston (Ant. 17.191), usccb-matthew-2 (note 2:1), ce-herod. dV: true for "37 BCE (effective reign)". dateNote: ⚑ Steinmann (Novum Testamentum 51, 2009 — seen only via search results, not fetched) argues a reign from late 39 BCE to early 1 BCE.

**E-02 — Birth of Jesus (per Matthew): "in the days of King Herod"** · before Herod's death; scholarly range c. 7–4 BCE · Bethlehem of Judea
Matthew narrates that Jesus "was born in Bethlehem of Judea, in the days of King Herod", and that the family returned from Egypt "When Herod had died".
Sources: usccb-matthew-2, ce-chronology-jesus. dV: false (range only). dateNote: ⚑ Maas (CE 1910) derives "A.U.C. 747, 748, 749" (= 7–5 BCE) from Herod's death and Matt 2:16; CE General Chronology reports that "many" place the birth in "the year of Rome 750" (= 4 BCE); Dionysius placed the Incarnation so that AD 1 followed (see E-30). Conflicts with Luke's census (E-03). The requested "c. 6–4 BCE" scholarly range is the common modern formulation but was not found verbatim in a fetched source — cite Maas's 7–5 BCE and CE's 4 BCE as fetched, or add a modern academic source.

**E-03 — Birth of Jesus (per Luke): the census "when Quirinius was governor of Syria"** · Quirinius's census of Judea = 6 CE ("A.D. 6–7") · Bethlehem
Luke narrates that Joseph and Mary went to Bethlehem to be enrolled under a decree of Augustus, "the first enrollment, when Quirinius was governor of Syria".
Sources: usccb-luke-2 (text + note), josephus-ant-whiston (Ant. 18.1–2 on Cyrenius's census; not quoted above). dV: true for the census date (6–7 CE per NABRE note); false for Jesus' birth. dateNote: ⚑ The USCCB/NABRE note itself says "there are notorious historical problems connected with Luke's dating … and the various attempts to resolve the difficulties have proved unsuccessful": Quirinius became legate "in A.D. 6–7", about a decade after Herod's death (Matthew). Harmonizing proposals (earlier Quirinius legateship) are noted by the NABRE as creating "additional problems".

**E-04 — Lunar eclipse reported shortly before Herod's death** · night of 12/13 March 4 BCE (per Whiston note; CE "12 to 13 March, A.U.C. 750") · Judea
Josephus reports "that very night there was an eclipse of the moon" shortly before Herod's death.
Sources: josephus-ant-whiston (Ant. 17.167 + Whiston note), ce-chronology-jesus. dV: true (as the eclipse date assigned by these sources). dateNote: ⚑ identification of which eclipse Josephus meant is itself disputed (1 BCE advocates prefer the 10 January 1 BCE eclipse — not verified in a fetched source).

**E-05 — Death of Herod the Great** · 4 BCE ("spring of 750 A.U.C.", before Passover) · Jericho (per Josephus; place not quoted above — verify)
Josephus places the death "the fifth day after he had caused Antipater to be slain", after the eclipse.
Sources: josephus-ant-whiston (Ant. 17.191), ce-herod, usccb-matthew-2 (note). dV: true for 4 BCE as the majority date. dateNote: ⚑ Minority view: 1 BCE (W. E. Filmer 1966; A. Steinmann, Novum Testamentum 51 (2009) 1–29 "When Did Herod the Great Reign?") — known via search results only; neither article fetched. Flag the 1 BCE view as "attributed, not fetched".

**E-06 — Flight into Egypt and return to Nazareth (as narrated)** · undated; before/after Herod's death · Egypt → Nazareth
Matthew narrates the family's flight to Egypt and return after Herod died.
Sources: usccb-matthew-2. dV: false. dateNote: date inferred from E-05 only.

**E-07 — Tiberius succeeds Augustus** · 19 August 14 CE (per Whiston note: "Tiberius began, as is well known, Aug. 19, A.D. 14") · Rome
Sources: usccb-luke-3 (note: "succeeded Augustus as emperor in A.D. 14 and reigned until A.D. 37"), josephus-ant-whiston (translator's note). dV: true (year); day per Whiston only.

**E-08 — Caiaphas appointed high priest** · c. 18 CE ("about A.D. 18") · Jerusalem
Josephus (per CE) reports Caiaphas appointed by the prefect Valerius Gratus; Annas, his father-in-law, had been high priest "A.D. 6–15".
Sources: ce-caiaphas, usccb-luke-3 (note on 3:2: Caiaphas "high priest A.D. 18–36"). dV: true (as "c. 18"). dateNote: COJS says 36/37 for the end.

**E-09 — Pontius Pilate becomes prefect of Judea** · 26 CE · Caesarea / Judea
Pilate succeeded Valerius Gratus; the NABRE note calls him "prefect of Judea from A.D. 26 to 36".
Sources: usccb-luke-3 (note), ce-pilate, josephus-ant-whiston (Ant. 18.89 "tarried ten years"). dV: true. dateNote: ⚑ title: Tacitus and CE say "procurator"; the Pilate Stone (E-24) reads "praefectus". Some scholars (not fetched here) start the term in 19 CE (D. Schwartz) — omit unless sourced.

**E-10 — John the Baptist begins preaching; "the fifteenth year of Tiberius"** · 28–29 CE (NABRE note: "between A.D. 27 and 29") · Jordan region / Judean desert
Luke synchronizes the start of John's ministry with Tiberius's 15th year, Pilate's governorship, Herod Antipas, Philip, Lysanias, and "Annas and Caiaphas".
Sources: usccb-luke-3, ce-chronology-jesus. dV: true for "c. 27–29 CE". dateNote: ⚑ depends on reckoning: from Tiberius's sole reign (Aug 14 CE → 28/29 CE) or from a co-regency c. 12 CE (→ c. 26/27); Maas (CE) gives "either 778 or 782" A.U.C. (≈ 25/26 or 29).

**E-11 — Baptism of Jesus by John; start of public ministry** · c. 27–29 CE; Jesus "about thirty years of age" (Luke 3:23) · Jordan River
The Gospels narrate that Jesus was baptized by John and then began his public ministry.
Sources: usccb-luke-3, ce-chronology-jesus (public life "about 777-779 A.U.C." ≈ 24–26 CE by Maas's reckoning). dV: false (range). dateNote: ⚑ Maas's range (from a 7–5 BCE birth) is earlier than the NABRE's 27–29 synchronism.

**E-12 — Length of the ministry** · one to three-plus years · Galilee / Judea
The Synoptics can be read as a single year; John mentions three Passovers. Humphreys & Waddington note "Many scholars believe that John omitted mention of a further Passover".
Sources: humphreys-waddington-1992. dV: false (not a point date).

**E-13 — Imprisonment and execution of John the Baptist** · c. 28–29 CE (to verify) · Machaerus (per Josephus, Ant. 18.116–119)
Josephus relates that Herod Antipas imprisoned John "in the fortress of Machaerus" and put him to death; the Gospels narrate his beheading.
Sources: ce-john-baptist (quotes Josephus). dV: false — no fetched source gives a year. dateNote: CE itself doubts the burial site vs Machaerus.

**E-14 — Last Supper** · Thursday evening before the crucifixion · Jerusalem
Mark narrates it as a Passover meal ("On the first day of the Feast of Unleavened Bread, when they sacrificed the Passover lamb"); John places it "before the feast of Passover" (John 13:1).
Sources: vatican-nab-mark-14, ce-chronology-jesus. dV: false. dateNote: ⚑ Synoptic (15 Nisan death, meal = Passover) vs Johannine (14 Nisan death, before Passover). Maas (CE 1910) harmonizes both to 15 Nisan; Humphreys & Waddington read John literally as Nisan 14.

**E-15 — Crucifixion of Jesus under Pontius Pilate** · Friday 7 April 30 CE **or** Friday 3 April 33 CE (Julian) · Golgotha, Jerusalem
The Gospels narrate that Jesus was condemned by Pilate and crucified at "the Place of the Skull, in Hebrew, Golgotha"; John sets it on "preparation day for Passover … about noon", Mark at "nine o'clock in the morning".
Sources: vatican-nab-john-19, vatican-nab-mark-15, humphreys-waddington-1992, humphreys-waddington-1983 (abstract), tacitus-annals-15 (under Tiberius, by Pilate), josephus-ant-whiston (Ant. 18.64). dV: false (two dates live). dateNote: ⚑ Humphreys & Waddington favor 3 April 33 but state "the date 7 April AD 30 is also strongly supported" and "it does not seem possible to decide conclusively"; also calendrically possible 11 April 27, 23 April 34 (Nisan 15). ⚑ Maas (CE 1910) reports patristic tradition for "A.D. 29" (consulship of the Gemini). ⚑ An AD 36 date (Lane Fox, Kokkinos) is called "calendrically impossible" by Humphreys & Waddington. ⚑ Mark's "third hour" vs John's "about noon".

**E-16 — Burial in a new tomb** · same day, before the sabbath · garden near Golgotha
John narrates a garden with "a new tomb, in which no one had yet been buried"; Mark names Joseph of Arimathea.
Sources: vatican-nab-john-19, vatican-nab-mark-15. dV: follows E-15.

**E-17 — The empty tomb and Resurrection (as proclaimed)** · "the first day of the week" after the crucifixion (Sunday 9 April 30 or 5 April 33 if E-15 dates hold) · Jerusalem
The Gospels narrate women finding the tomb open "Very early … on the first day of the week"; Paul transmits the early formula "he was raised on the third day … he appeared to Cephas, then to the Twelve". Christians profess this as the Resurrection; historical-critical scholarship treats it as the earliest disciples' claim.
Sources: vatican-nab-mark-16, usccb-matthew-28, usccb-1cor-15. dV: false (derivative of E-15). dateNote: narrate only.

**E-18 — Appearances and Ascension (as narrated)** · "during forty days" after Easter (Acts 1:3) · Mount of Olives (Acts 1:12)
Acts narrates appearances over forty days and that "he was lifted up, and a cloud took him from their sight." (Luke 24:50–51 places it at Bethany, apparently on Easter day — ⚑ Luke/Acts timing differs; not fetched here.)
Sources: usccb-acts-1. dV: false.

**E-19 — Pentecost (as narrated)** · fifty days after Passover · Jerusalem — Acts 2 (not fetched; add usccb-acts-2 if included). dV: false. OPTIONAL.

**E-20 — Conversion of Paul (Saul) on the Damascus road** · c. 33–36 CE (Prat in CE: "not prior to 34"; proposes 35) · near Damascus
Acts narrates a light from the sky and a voice: "Saul, Saul, why are you persecuting me?"
Sources: usccb-acts-9, ce-paul. dV: false (range). dateNote: ⚑ relative chronology (Gal 1:18 "three years", 2:1 "fourteen years") yields different absolute dates depending on the crucifixion year; CE's 35 is one reckoning.

**E-21 — Pilate recalled to Rome** · 36/37 CE (after "ten years"; Tiberius d. March 37) · Judea → Rome
Josephus: "Pilate, when he had tarried ten years in Judea, made haste to Rome … but before he could get to Rome Tiberius was dead."
Sources: josephus-ant-whiston (Ant. 18.89), ce-pilate. dV: true (36 CE end of office, NABRE note & CE).

**E-22 — Caiaphas removed by Vitellius** · 36 CE (COJS "36/37") · Jerusalem
Sources: ce-caiaphas, usccb-luke-3, cojs-caiaphas-ossuary. dV: true.

**E-23 — Suetonius: Claudius expels Jews from Rome "at the instigation of Chrestus"** · date not given by Suetonius; commonly c. 49 CE (Orosius; cf. Acts 18:2) · Rome
Suetonius: "Since the Jews constantly made disturbances at the instigation of Chrestus, he expelled them from Rome."
Sources: suetonius-claudius (text). dV: false for 49. dateNote: ⚑ whether "Chrestus" refers to Christ is disputed; the 49 CE date rests on Orosius (5th c.), not fetched. CE Paul places Aquila and Priscilla's arrival in Corinth "about 51".

**E-24 — Great Fire of Rome; Nero punishes Christians (Tacitus's account)** · 64 CE (Tacitus dates it by the consulate of Laecanius and Licinius, Ann. 15.33) · Rome
Tacitus writes that Nero blamed "Christians", adding that "Christus, the founder of the name, had undergone the death penalty in the reign of Tiberius, by sentence of the procurator Pontius Pilatus".
Sources: tacitus-annals-15. dV: true for 64 (consular dating; conversion to 64 CE is standard but the fetched page does not print "64"). dateNote: Annals written c. 116 CE (not verified in a fetched source).

**E-25 — Execution of James "the brother of Jesus, who was called Christ"** · 62 CE (between Festus's death and Albinus's arrival) · Jerusalem
Josephus narrates that the high priest Ananus convened the Sanhedrin and had James stoned.
Sources: josephus-ant-whiston (Ant. 20.200). dV: false for the year (62 not stated in fetched text; standard inference from the procurator interregnum). dateNote: Ant. 20.200 is generally regarded as authentic (contrast E-26) — attribute when writing; no fetched modern source states this.

**E-26 — Josephus completes the Jewish Antiquities incl. the Testimonium Flavianum** · 93/94 CE (13th year of Domitian — to verify) · Rome
The Testimonium (Ant. 18.63–64) calls Jesus "a wise man, if it be lawful to call him a man" and says "He was [the] Christ".
Sources: josephus-ant-whiston, ce-josephus. dV: false for 93/94. dateNote: ⚑ authenticity disputed: CE (1910) — "the difficulty has not been definitively settled. The passage seems to suffer from repeated interpolations." Positions range from wholly authentic, to partly interpolated (majority modern view), to wholly interpolated — cite a modern academic source for this spectrum before publishing.

**E-27 — Pliny the Younger's letter to Trajan on Christians** · c. 111–113 CE (to verify) · Bithynia-Pontus
Pliny reports Christians "met on a stated day before it was light, and addressed a form of prayer to Christ, as to a divinity".
Sources: pliny-letters-melmoth (letter XCVII in Melmoth = Ep. 10.96). dV: false (no year in fetched text).

**E-28 — Hadrian's building over the site later venerated as the tomb** · c. 130s CE (to verify) · Aelia Capitolina (Jerusalem)
Eusebius writes that the tomb had been buried and covered with "a gloomy shrine of lifeless idols to the impure spirit whom they call Venus".
Sources: eusebius-vc-3 (3.26), wp-holy-sepulchre (Hadrian, "In AD 130 … Aelia Capitolina"). dV: false (Eusebius gives no year; Hadrian attribution comes from the tertiary source).

**E-29 — Constantine orders the church at the tomb; excavation "discovers" the sepulchre** · 326 CE ("investigations caused to be made in 326", CE) · Jerusalem
Eusebius narrates that, when the ground was cleared, "contrary to all expectation, the venerable and hollowed monument of our Saviour's resurrection was discovered", and reproduces Constantine's letter to bishop Macarius.
Sources: eusebius-vc-3 (3.25–40), ce-holy-sepulchre, wp-holy-sepulchre. dV: true (c. 326 as "begun c. 326"; Eusebius gives no year). dateNote: the identification of the site is the Church's and Eusebius's claim; the CE says "nearly all scholars maintain that the knowledge of the place was handed down by oral tradition".

**E-30 — Dedication of the Holy Sepulchre complex (Anastasis/Martyrium)** · 13 September 335 CE · Jerusalem
Eusebius dates the dedication to Constantine's thirtieth regnal year, when bishops gathered at Jerusalem after the council in Tyre/Phoenicia.
Sources: eusebius-vc-4 (4.40, 4.43, 4.47), wp-holy-sepulchre ("Consecrated 13 September 335"), custodia (snippet only, not fetched). dV: true for 335. dateNote: ⚑ CE Holy Sepulchre says "dedicated in 336"; a custodia.org page (snippet) says "September 355" (likely typo). Eusebius: "Thirtieth Year of Constantine's Reign" (July 335–July 336).

**E-31 — Helena's pilgrimage; churches at Bethlehem and the Mount of Olives** · after 324 CE (CE); "327 CE" (BAS); traditional 326–327 · Bethlehem, Mount of Olives
Eusebius narrates that Helena "dedicated two churches … one at the grotto which had been the scene of the Saviour's birth; the other on the mount of his ascension".
Sources: eusebius-vc-3 (3.41–43), ce-helena, bas-church-nativity. dV: false for exact year. dateNote: ⚑ CE "subsequently … to the year 324"; BAS "327 CE"; Eusebius no year.

**E-32 — Church of the Nativity consecrated** · 31 May 339 CE · Bethlehem
BAS: "the church was consecrated on May 31, 339." Rebuilt by Justinian in the 6th century; "It is Justinian's basilica that still stands today."
Sources: bas-church-nativity, eusebius-vc-3. dV: false pending institutional confirmation (single non-primary source fetched; UNESCO and Custody pages unreachable). dateNote: range "c. 327–339" = Helena's visit to consecration.

**E-33 — Church of the Nativity inscribed as UNESCO World Heritage** · 2012 · Bethlehem
"Birthplace of Jesus: Church of the Nativity and the Pilgrimage Route, Bethlehem" (title per UNESCO — not read; verify).
Sources: bas-church-nativity ("added to the list of UNESCO World Heritage sites in 2012"); unesco-1433 (403, Wayback snapshot 2026-09-20 exists). dV: false until UNESCO page is read. dateNote: UNESCO also placed it on the Danger list in 2012 and removed it in 2019 (from memory — NOT verified; do not publish without the UNESCO page).

**E-34 — Dionysius Exiguus's Easter table introduces Anno Domini** · 525 CE (table for 532–626) · Rome
Dionysius numbered years "from the Incarnation" to replace the Era of Diocletian, "being unwilling … that the name of an impious persecutor should be thus kept in memory".
Sources: ce-dionysius-exiguus, ce-general-chronology, wp-dionysius-easter-table, wp-anno-domini. dV: true for 525 (tertiary + consistent with CE "about 527"?) — recommend dV false until a primary/academic source is fetched. dateNote: ⚑ CE General Chronology: "about the year 527"; Wikipedia: 525. ⚑ Epoch: CE (Gerard) — Incarnation "25 March, in the year 754" A.U.C.; CE General Chronology — birth in "753". ⚑ Error: "many" (CE) hold the true birth was ~3+ years earlier.

**E-35 — Bede popularizes AD dating** · 731 CE · Northumbria — wp-anno-domini ("completed in AD 731"); ce-dionysius-exiguus (adopted in England 8th–9th c.). dV: true (tertiary; flag).

**E-36 — Discovery of the Pilate Stone** · June 1961 · Caesarea Maritima (reused in the theatre)
An Italian expedition led by Antonio Frova found a limestone dedication naming "[Pon]tius Pilatus … [Praef]ectus Iudae[ae]"; now in the Israel Museum.
Sources: wp-pilate-stone, imj-cradle-christianity (Israel Museum: "an inscription bearing the name of Pontius Pilate"), imj-pilate-inscription (bot-walled). dV: true for 1961 (tertiary + museum confirms object; month from tertiary only). dateNote: IMJ object title calls him "procurator" while the stone reads praefectus — record both.

**E-37 — Discovery of the Caiaphas family tomb and ossuary** · November–December 1990 · Peace Forest / North Talpiot, south Jerusalem
Construction work exposed a burial cave; one ornate ossuary reads "Yehosef bar Qayafa" (Joseph son of Caiaphas); now in the Israel Museum.
Sources: cojs-caiaphas-ossuary ("In 1990"), wp-caiaphas-ossuary, imj-cradle-christianity. dV: true for 1990. dateNote: ⚑ identification with the Gospels' Caiaphas "challenged by some scholars" (spelling, no title); COJS: "quite possible".

---
## 2. Figures (11)

| id | name | dates (as sourced) | role | sources | flags |
|---|---|---|---|---|---|
| herod-the-great | Herod the Great | reigned "37 to 4 B.C." (NABRE); d. spring 750 A.U.C. = 4 BCE (CE) | Roman client king of Judea; Matthew's birth narrative is set in his reign | usccb-matthew-2, josephus-ant-whiston, ce-herod | ⚑ 1 BCE death (Filmer; Steinmann 2009 — not fetched) |
| herod-antipas | Herod Antipas | tetrarch of Galilee (Luke 3:1); years not in fetched text (standard 4 BCE–39 CE, to verify) | executed John the Baptist per Josephus and the Gospels | usccb-luke-3, ce-john-baptist | dates unverified |
| john-the-baptist | John the Baptist | ministry began "fifteenth year of Tiberius" (c. 27–29 CE); d. at Machaerus per Josephus | preacher of repentance; baptized Jesus (Gospels) | usccb-luke-3, ce-john-baptist, josephus-ant-whiston | death year unverified |
| pontius-pilate | Pontius Pilate | prefect of Judea "A.D. 26 to 36" | sentenced Jesus (Gospels, Tacitus, Josephus Testimonium) | usccb-luke-3, ce-pilate, tacitus-annals-15, josephus-ant-whiston, wp-pilate-stone | ⚑ title praefectus (stone) vs procurator (Tacitus, CE) |
| caiaphas | Joseph Caiaphas | high priest "A.D. 18–36" (NABRE) / "about A.D. 18" to "A.D. 36" (CE) / "18 CE to 36/37 CE" (COJS) | high priest at Jesus' trial (Gospels) | usccb-luke-3, ce-caiaphas, cojs-caiaphas-ossuary | ossuary identification disputed |
| annas | Annas | high priest "A.D. 6–15" | father-in-law of Caiaphas; influential per Luke 3:2 / John 18:13 | usccb-luke-3, ce-caiaphas | — |
| paul | Paul (Saul) of Tarsus | conversion "35" per Prat (CE) / "not prior to 34" | apostle; 1 Cor 15:3–8 is the earliest written Resurrection formula | usccb-acts-9, usccb-1cor-15, ce-paul | absolute dates reckoned, not recorded |
| josephus | Flavius Josephus | "born A.D. 37, at Jerusalem; died about 101" (CE) | Jewish historian; Ant. 18.63–64 and 20.200 | ce-josephus, josephus-ant-whiston | — |
| tacitus | Cornelius Tacitus | c. 56–c. 120 CE (NOT in a fetched source — to verify) | Roman historian; Annals 15.44 | tacitus-annals-15 | dates unverified; single-source needed |
| pliny-younger | Pliny the Younger | governor of Bithynia-Pontus c. 111–113 (to verify) | letter 10.96 on Christians | pliny-letters-melmoth | dates unverified |
| helena | Helena (St Helena) | b. mid-3rd c., "possibly in Drepanum"; d. "about 330" (CE) | mother of Constantine; pilgrimage to Palestine after 324; churches at Bethlehem and Mount of Olives (Eusebius) | ce-helena, eusebius-vc-3 | ⚑ visit year 326/327 |
| constantine | Constantine I | birth "as early as 274 and as late as 288" (CE); proclaimed 306; d. May 337 "after receiving baptism" | ordered the Holy Sepulchre church; dedication in his 30th year | ce-constantine, eusebius-vc-3, eusebius-vc-4 | ⚑ birth year |
| eusebius | Eusebius of Caesarea | "b. about 260; d. before 341" (CE) | bishop, "Father of Church History"; author of Life of Constantine — an eyewitness-era, panegyrical source | ce-eusebius, eusebius-vc-3 | label VC as panegyric |
| dionysius-exiguus | Dionysius Exiguus | fl. early 6th c., "dying before the year 544" (CE) | Scythian monk in Rome; Easter table 525 introducing AD | ce-dionysius-exiguus, ce-general-chronology, wp-dionysius-easter-table | ⚑ 525 vs "about 527" |

(Suetonius and Humphreys/Waddington are authors cited, not proposed figures.)

---
## 3. Disambiguations

- **"Jesus of history" vs "Christ of faith."** Two registers. The first is what historical method can reconstruct from sources (e.g., that he was executed under Pilate — attested by the Gospels, Tacitus, and, disputedly, Josephus). The second is what the Church professes (Messiah, Son of God, risen). The site should say "the Gospels narrate", "Christians profess", "historians generally accept", and never let either register decide the other. Maas (CE 1910) writes openly from the faith register ("adored by His followers as their God"); label accordingly.
- **Christ / Chrestus / Christus.** "Christ" is a title (Greek *Christos*, "anointed"), not a surname. Tacitus writes "Christus"; Suetonius "Chrestus" (whether he means Jesus is disputed).
- **BCE/CE vs BC/AD.** Same year numbers; BCE/CE is the neutral labeling. Recommend BCE/CE site-wide, keeping sources' "B.C./A.D." inside quotes.
- **The AD epoch's known error.** Dionysius (525) numbered years from the Incarnation; since Herod died in 4 BCE (majority) and Matthew places the birth under Herod, the birth falls "before Christ" by the system's own numbering. CE General Chronology: "It is supposed by many that the calculation of Dionysius was incorrect". Also: **no year zero** (1 BCE → 1 CE), so ranges spanning the epoch subtract one (e.g. 4 BCE → 30 CE = 33 years, not 34). ⚑ Sources differ on Dionysius's epoch year (753 vs 754 A.U.C.; CE contradicts itself between two articles) and on conception (25 March) vs nativity.
- **Julian vs Gregorian.** All ancient dates here (7 April 30, 3 April 33, 13 Sept 335, 31 May 339) are **Julian** (Humphreys & Waddington's table is headed "Date (Julian Calendar)"). Gregorian reform: Thursday 4 October 1582 followed by Friday 15 October 1582 (CE General Chronology). Do not convert ancient dates to proleptic Gregorian.
- **A.U.C.** (ab urbe condita, from Rome's founding) — used by Maas and CE; 750 A.U.C. = 4 BCE, 753/754 A.U.C. ≈ 1 BCE/1 CE.
- **Prefect vs procurator.** Pilate's contemporary title (stone) was *praefectus*; *procurator* (Tacitus, CE, Israel Museum object title) is the later term for the office.
- **Nisan 14 vs Nisan 15; "day of preparation."** John: death on the preparation day of Passover (Nisan 14); Synoptics: Last Supper as Passover meal, death on Nisan 15. Both Fridays. Harmonizations exist (Maas) and are one view.
- **Herod the Great vs Herod Antipas vs Herod Agrippa.** Birth narratives = Herod the Great (d. 4 BCE); Luke 3:1 / the Passion = Antipas; Acts 12 = Agrippa I.
- **Quirinius / Cyrenius** — the same governor (Latin vs Greek-derived spelling; Whiston uses "Cyrenius").
- **Ascension site vs date.** Acts: Mount of Olives after forty days; Luke 24: Bethany, reading as Easter day — a known internal tension.
- **Holy Sepulchre "discovery" vs "True Cross" finding.** In the fetched VC 3.25–47 (NPNF tr.) Eusebius narrates the tomb's discovery and never uses the word "cross"; Constantine's letter (3.30) speaks of "the monument of his most holy Passion, so long ago buried beneath the ground" — a phrase some read as alluding to the Cross (⚑ interpretation; relics strand to handle). Eusebius does not attribute any finding to Helena. The Helena–Cross legend is out of scope here.

---
## 4. References (all URLs below were fetched this session and returned content unless marked)

| id | title | url | publisher | publisherNote | type |
|---|---|---|---|---|---|
| usccb-luke-2 | Luke, chapter 2 (NABRE, with notes) | https://bible.usccb.org/bible/luke/2 | United States Conference of Catholic Bishops | Catholic bishops' official English Bible; notes are critical-scholarly | primary |
| usccb-luke-3 | Luke, chapter 3 (NABRE, with notes) | https://bible.usccb.org/bible/luke/3 | USCCB | as above | primary |
| usccb-matthew-2 | Matthew, chapter 2 (NABRE) | https://bible.usccb.org/bible/matthew/2 | USCCB | as above | primary |
| usccb-matthew-28 | Matthew, chapter 28 (NABRE) | https://bible.usccb.org/bible/matthew/28 | USCCB | as above | primary |
| usccb-acts-1 | Acts of the Apostles, chapter 1 (NABRE) | https://bible.usccb.org/bible/acts/1 | USCCB | as above | primary |
| usccb-acts-9 | Acts of the Apostles, chapter 9 (NABRE) | https://bible.usccb.org/bible/acts/9 | USCCB | as above | primary |
| usccb-1cor-15 | 1 Corinthians, chapter 15 (NABRE) | https://bible.usccb.org/bible/1corinthians/15 | USCCB | as above | primary |
| vatican-nab-john-19 | New American Bible (2002 ed.), John 19 | https://www.vatican.va/archive/ENG0839/__PXR.HTM | Holy See (vatican.va) | official Holy See host of the NAB | primary |
| vatican-nab-mark-14 | New American Bible, Mark 14 | https://www.vatican.va/archive/ENG0839/__PWG.HTM | Holy See | as above | primary |
| vatican-nab-mark-15 | New American Bible, Mark 15 | https://www.vatican.va/archive/ENG0839/__PWH.HTM | Holy See | as above | primary |
| vatican-nab-mark-16 | New American Bible, Mark 16 | https://www.vatican.va/archive/ENG0839/__PWI.HTM | Holy See | as above | primary |
| josephus-ant-whiston | Flavius Josephus, The Antiquities of the Jews, tr. W. Whiston | https://www.gutenberg.org/files/2848/2848-h/2848-h.htm | Project Gutenberg | 1737 translation; Whiston's footnotes are his own (18th-c. Christian apologetic) | primary |
| tacitus-annals-15 | Tacitus, Annals XV (continued, §§33–74), Loeb tr. J. Jackson | https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Tacitus/Annals/15B*.html | LacusCurtius (Bill Thayer, University of Chicago server) | public-domain Loeb text | primary |
| suetonius-claudius | Suetonius, Life of Claudius, Loeb tr. J. C. Rolfe | https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Suetonius/12Caesars/Claudius*.html | LacusCurtius | public-domain Loeb text | primary |
| pliny-letters-melmoth | Letters of Pliny, tr. W. Melmoth (rev. Bosanquet) — letter XCVII = Ep. 10.96 | https://www.gutenberg.org/files/2811/2811-h/2811-h.htm | Project Gutenberg | 18th-c. translation; numbering differs from standard | primary |
| eusebius-vc-3 | Eusebius, Life of Constantine, Book III (NPNF 2nd ser. vol. 1) | https://www.newadvent.org/fathers/25023.htm | New Advent | Catholic website; Eusebius is a panegyrist of Constantine | primary |
| eusebius-vc-4 | Eusebius, Life of Constantine, Book IV | https://www.newadvent.org/fathers/25024.htm | New Advent | as above | primary |
| ce-chronology-jesus | A. Maas, "Chronology of the Life of Jesus Christ", Catholic Encyclopedia vol. 8 (1910) | https://www.newadvent.org/cathen/08377a.htm | New Advent (Robert Appleton Co. 1910 text) | Catholic reference work, 1910; faith perspective; harmonizing | encyclopedia |
| ce-general-chronology | "General Chronology", Catholic Encyclopedia vol. 3 (1908) | https://www.newadvent.org/cathen/03738a.htm | New Advent | Catholic reference, 1908 | encyclopedia |
| ce-dionysius-exiguus | J. Gerard, "Dionysius Exiguus", Catholic Encyclopedia vol. 5 (1909) | https://www.newadvent.org/cathen/05010b.htm | New Advent | Catholic reference, 1909 | encyclopedia |
| ce-herod | "Herod", Catholic Encyclopedia | https://www.newadvent.org/cathen/07289c.htm | New Advent | Catholic reference, 1910 | encyclopedia |
| ce-pilate | "Pontius Pilate", Catholic Encyclopedia | https://www.newadvent.org/cathen/12083c.htm | New Advent | Catholic reference, 1911 | encyclopedia |
| ce-caiaphas | "Joseph Caiphas", Catholic Encyclopedia | https://www.newadvent.org/cathen/03143b.htm | New Advent | Catholic reference, 1908 | encyclopedia |
| ce-john-baptist | "St. John the Baptist", Catholic Encyclopedia | https://www.newadvent.org/cathen/08486b.htm | New Advent | Catholic reference, 1910 | encyclopedia |
| ce-josephus | "Flavius Josephus", Catholic Encyclopedia | https://www.newadvent.org/cathen/08522a.htm | New Advent | Catholic reference, 1910 | encyclopedia |
| ce-paul | F. Prat, "St. Paul", Catholic Encyclopedia | https://www.newadvent.org/cathen/11567b.htm | New Advent | Catholic reference, 1911 | encyclopedia |
| ce-helena | "St. Helena", Catholic Encyclopedia | https://www.newadvent.org/cathen/07202b.htm | New Advent | Catholic reference, 1910 | encyclopedia |
| ce-constantine | "Constantine the Great", Catholic Encyclopedia | https://www.newadvent.org/cathen/04295c.htm | New Advent | Catholic reference, 1908 | encyclopedia |
| ce-eusebius | "Eusebius of Caesarea", Catholic Encyclopedia | https://www.newadvent.org/cathen/05617b.htm | New Advent | Catholic reference, 1909 | encyclopedia |
| ce-holy-sepulchre | "Holy Sepulchre", Catholic Encyclopedia | https://www.newadvent.org/cathen/07425a.htm | New Advent | Catholic reference, 1910 | encyclopedia |
| humphreys-waddington-1992 | C. J. Humphreys & W. G. Waddington, "The Jewish Calendar, a Lunar Eclipse and the Date of Christ's Crucifixion", Tyndale Bulletin 43.2 (1992) | https://www.tyndalebulletin.org/article/30487-the-jewish-calendar-a-lunar-eclipse-and-the-date-of-christ-s-crucifixion.pdf | Tyndale House, Cambridge | evangelical-affiliated academic journal; authors argue for 33 CE | academic |
| humphreys-waddington-1983 | C. J. Humphreys & W. G. Waddington, "Dating the Crucifixion", Nature 306 (1983) 743–746 | https://www.nature.com/articles/306743a0 | Nature (Springer Nature) | peer-reviewed; **abstract only read** (paywall) | academic |
| cojs-caiaphas-ossuary | "Ossuary of the High Priest Caiaphas, 18–36 CE" | https://cojs.org/ossuary_of_the_high_priest_caiaphas-_18-36_ce/ | Center for Online Judaic Studies | Jewish-studies educational site | academic |
| imj-cradle-christianity | "The Cradle of Christianity" (exhibition, 2000–2001) | https://www.imj.org.il/en/exhibitions/cradle-christianity | The Israel Museum, Jerusalem | holding museum of both artifacts | official |
| imj-pilate-inscription | "Latin dedicatory inscription mentioning Pontius Pilate, the procurator of Judea" | https://www.imj.org.il/en/collections/395572 | The Israel Museum | **bot-walled (JS challenge) — content NOT read**; title from search result | official |
| bas-church-nativity | "OnSite: Bethlehem's Church of the Nativity" | https://www.biblicalarchaeology.org/daily/bas-onsite/church-of-the-nativity/ | Biblical Archaeology Society | popular-scholarly archaeology magazine | news |
| wp-pilate-stone | "Pilate stone" | https://en.wikipedia.org/wiki/Pilate_stone | Wikipedia | tertiary; use only with the museum page | encyclopedia |
| wp-caiaphas-ossuary | "Caiaphas ossuary" | https://en.wikipedia.org/wiki/Caiaphas_ossuary | Wikipedia | tertiary | encyclopedia |
| wp-holy-sepulchre | "Church of the Holy Sepulchre" | https://en.wikipedia.org/wiki/Church_of_the_Holy_Sepulchre | Wikipedia | tertiary | encyclopedia |
| wp-anno-domini | "Anno Domini" | https://en.wikipedia.org/wiki/Anno_Domini | Wikipedia | tertiary | encyclopedia |
| wp-dionysius-easter-table | "Dionysius Exiguus' Easter table" | https://en.wikipedia.org/wiki/Dionysius_Exiguus%27_Easter_table | Wikipedia | tertiary (stub) | encyclopedia |
| unesco-1433 | "Birthplace of Jesus: Church of the Nativity and the Pilgrimage Route, Bethlehem" (title to verify) | https://whc.unesco.org/en/list/1433/ | UNESCO World Heritage Centre | **403 Cloudflare — NOT read**; Wayback snapshot 20260920102807 exists | official |
| custodia-holy-sepulchre | "Basilica of the Holy Sepulchre" | https://www.custodia.org/en/sanctuaries/basilica-of-the-holy-sepulchre/ | Custody of the Holy Land (Franciscan) | **connection timeout — NOT read** | official |

## 5. Gaps / to do before ingest
1. **Out-of-band or retry:** Israel Museum object pages (Pilate stone; Caiaphas ossuary object page not located), UNESCO 1433, custodia.org (both basilicas). Until then E-32/E-33 rest on BAS (single, non-institutional) and E-36 month on Wikipedia.
2. **Modern academic sources not fetched:** a mainstream survey for the "c. 6–4 BCE" birth range and the Testimonium spectrum (e.g., J. P. Meier, *A Marginal Jew* vol. 1; Brown, *Birth of the Messiah*) — cite as book without URL, or find an open academic page. Steinmann 2009 and Filmer 1966 (1 BCE Herod) known only through search results.
3. **Unverified dates** (flagged in text): Tacitus's life, Pliny's governorship (c. 111–113), Suetonius's expulsion (49 CE via Orosius), James's death (62), Antiquities completion (93/94), Hadrian's temple (c. 130s), UNESCO Danger list 2012–2019 (from memory — do not publish).
4. USCCB returned 403 after ~8 requests (rate/bot filter) — John 19 etc. came from vatican.va NAB instead; register in ADR-0002 if not already.

Status: COMPLETE (2026-09-25).
