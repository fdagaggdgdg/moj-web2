# Style guide — vizuálna referencia

Táto referencia opisuje dizajn zachytený na screenshotu webu Univerzity Žilina v Žiline. Slúži ako hlavný vzor pri tvorbe budúcich stránok projektu.

## Zdroj

- Screenshot: `img/Snímka obrazovky 2026-11-26 164226.png`
- Predmetný dizajn: univerzitný, oficiálny a informučný web

## Celkový vizuálny dojem

Dizajn pôsobí dôstojne, modernizovane a akademicky. Základ tvorí čistý biely obsahový priestor kombinovaný s tmavomodrou a svetlomodrou identitou. Obsah je organizačný a vizuálne oddelený do jasných zón.

Hlavné črty:

- veľký kontrast medzi tmavou modrou a bielou
- úzky a takmer minimalistický horný panel sociálnych ikon
- masívny modrý navigačný banner
- čistá, čitateľná typografia bez dekoratívnych prvkov
- výrazné biele tlačidlá na tmavomodrom pozadí
- rovné alebo veľmi mierne zaoblené geometrické tvary
- dostatočný biely okraj a pravidelné odsadenia

## Farebná paleta

| Úloha | Odhadovaná farba | Názov |
| --- | --- | --- |
| Primárna tmavomodrá / hlavná navigácia | `#2E4F86` | Kráľovská modrá |
| Najtmavšia modrá / textové zvýraznenie | `#073F82` | Tmavomodrá |
| Farba logotypu a hlavných odkazov | `#004A99` | Intenzívna univerzitná modrá |
| Svetlomodré podfarbenie menu | `#AFC7E8` | Svetlá modrá |
| Sivobiela plocha | `#F5F7FA` | Svetlá neutrálna |
| Hlavný text | `#28364F` | Tmavá antracitová |
| Sekundárny text | `#64748B` | Stredná sivá |
| Svetlé prvkové okraje | `#D7DEE8` | Svetlosivá |
| Biela | `#FFFFFF` | Čistá biela |

Doplnkové farby:

- tmavohnedý pás vľavo hore: približne `#3E261F`
- svetločervená sekcia pop-upu v dolnej časti: približne `#F2D8D1`
- orámovanie kalendára/oznámenia: približne `#D5A84F` a `#E46A31`
- modrá mapa a časové prvky: približne `#1E63A6`

## Typografia

Vzhľad písma zodpovedá modernému groteskovému bezpätkovému fontu. Text v navigácii aj nadpisoch má ľahko kondenzovanú, univerzitnú charakteristiku.

Odporučené implementačné písmo:

- primárne: `Arial, Helvetica, sans-serif`
- alternatíva: `Inter, system-ui, -apple-system, "Segoe UI", sans-serif`

Typografické pravidlá:

- **Nadpisy:** tučné, veľké, tmavomodré alebo biele
- **Navigácia:** veľká približne 13–15 px, tučná, písané verzálkami alebo výrazným formátom
- **Bežný text:** približne 15–16 px, tmavosivý, riadkovanie 1.5
- **Mikrotext a dátumy:** menšia veľkosť, svetlejšia sivá
- **Odkazy:** tmavomodré, pri hoveri podčiarknuté alebo mierne zosvetlené

Príklad použitia:

```css
body {
  font-family: Inter, system-ui, -apple-system, "Segoe UI", sans-serif;
  color: #28364f;
  line-height: 1.5;
}
```

## Tlačidlá a interaktívne prvky

### Primárne tlačidlo

V hlavnej sekcii dominuje tmavomodré tlačidlo s bielym textom a zaoblenými okrajmi.

Vlastnosti:

- tmavomodré alebo kráľovské modré pozadie
- biely, tučný text
- vyšší stredný kontrast
- zaoblený tvar: približne `999px` pri menších tlačidlách
- šípka doprava ako súčasť textu alebo ikony
- mierny stín nie je nutný
- hover má zosvetliť alebo upraviť pozadie

Príklad:

```css
.button-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.2rem;
  border: 0;
  border-radius: 999px;
  background: #004a99;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
}

.button-primary:hover {
  background: #073f82;
}
```

### Sekundárne prvky

- odkazy nemajú ťažké rámovanie
- menu je čisto textové s malým rozostupom medzi položkami
- ikonové prvky sú kruhové, plnofarebné alebo kontrastne modré
- tlačidlá kalendára používajú biely podklad, sivé čiarové ohraničenie a malý zaoblený okraj
- červenooranžové upozornenia majú biely text a hranatý alebo slabo zaoblený roh

## Rozloženie a štruktúra

Stránka používa trojzónový systém:

1. **Horný úzky pás** — tmavohnedá alebo tmavá informačná lišta s malými aplikáciami a jazykovými voľbami.
2. **Hlavná navigácia** — tmavomodrý banner s logom vľavo a horizontálnym menu vpravo.
3. **Obsahová plocha** — svetlé pozadie s veľkými bielymi sekciami, nadpismi a viacstĺpcovým rozložením.

Odporúčané pravidlá:

- široký obsah, ale s jasnou maximálnou šírkou
- hlavný obsah mať zoskupené do 2–4 stĺpcov
- väčšie vertikálne oddelenie medzi sekciami
- horizontálne horné menu sa pri menšej šírke zmení na hamburgerové menu
- na mobiloch majú byť odkazy a tlačidlá dostatočne veľké na dotyk

## Jemné detaily

- používajte hladké hrany bez silnej rušivej textúry
- mapové a obrázkové sekcie môžu obsahovať svetlo modré čiary alebo geometrické vzory
- výberové sekcie zvýrazňujte modrou farbou a podčiarknutím
- okraje a dekorácie majú byť svetlé a tenké
- nevyhnutné akcenty môžu byť červenooranžové, ale nemajú dominovať nad modrou
- dátumy a numerické značky môžu mať farebný kontrast pre rýchle skenovanie

## Odporúčané CSS tokeny

```css
:root {
  --color-primary: #2e4f86;
  --color-primary-dark: #073f82;
  --color-primary-bright: #004a99;
  --color-primary-pale: #afc7e8;
  --color-text: #28364f;
  --color-text-muted: #64748b;
  --color-border: #d7dee8;
  --color-neutral: #f5f7fa;
  --color-white: #ffffff;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-pill: 999px;
  --shadow-soft: 0 2px 10px rgba(30, 55, 90, 0.12);
}
```

## Použitie tejto referencie

Pri tvorbe ďalších častí webu treba najskôr zachovať:

1. tmavomodrú identitu,
2. vysokú čitateľnosť,
3. čistú bielu alebo svetlosivú plochu,
4. zaoblené primárne akčné tlačidlá,
5. univerzitný a dôveryhodný informačný charakter.
