# Style guide — vizuálna referencia

Táto referencia vychádza zo screenshotu domovskej stránky Žilinskej univerzity v Žiline. Farby sú vizuálne odhady zo screenshotu, nie oficiálne hodnoty značky. Pri interpretácii sa nezapočítava rám prehliadača.

## Celkový vizuálny dojem

Web pôsobí ako oficiálna univerzitná informačná stránka: dôveryhodne, prakticky a prehľadne. Identitu nesie tmavomodrá navigácia a výrazné modré titulky, ktoré kontrastujú s bielym pozadím. Svetlozelený hero banner prináša jemný farebný akcent bez toho, aby stránka pôsobila prezdobene.

Rozhranie je pomerne husté a obsahovo bohaté, nie minimalistické. Používa viac úrovní navigácie, veľké rozbaľovacie menu, aktuality a kalendár. Pri tvorbe vlastnej stránky možno prevziať farby, typografiu a charakter prvkov, no ponechať viac voľného priestoru.

## Farebná paleta

| Použitie | Odhad farby | Poznámka |
| --- | --- | --- |
| Hlavná navigácia | `#2D3E68` | Tmavá námornícka modrá |
| Primárne odkazy a tlačidlá | `#003D80` | Sýta univerzitná modrá |
| Modré nadpisy a ikony | `#344A7B` | O niečo svetlejšia modrá |
| Hero banner | `#E3F2E5` | Jemná svetlá zelená |
| Plocha rozbaľovacieho menu | `#FFFFFF` | Biela |
| Horný panel s ikonami | `#F4F4F4` | Veľmi svetlá sivá |
| Hlavný text | `#454545` | Tmavosivá |
| Zvýraznený riadok menu | `#F0F1F3` | Svetlosivá |
| Doplnkové akcenty kalendára | `#B51F3A`, `#E96B2C`, `#D5A528` | Červená, oranžová a zlatá; používať striedmo |

## Písmo a typografia

Text je bezpätkový, dobre čitateľný a podobá sa bežným systémovým písmam, napríklad Arial alebo Roboto. Zo screenshotu sa nedá spoľahlivo určiť konkrétna rodina písma, preto ju netreba považovať za presne identifikovanú.

- **Navigácia:** verzálky, stredná veľkosť, výraznejšia hrúbka a mierne zväčšené rozostupy písmen.
- **Nadpisy:** veľké a tučné; hlavný hero titulok je tmavomodrý.
- **Bežný text:** stredná veľkosť, tmavosivá, pohodlné riadkovanie.
- **Nadpisy stĺpcov v rozbaľovacom menu:** verzálky a tučné písmo.
- **Odkazy v menu a článkoch:** sivé, prevažne bez dekorácie; zvýraznenie môže tvoriť podčiarknutie alebo svetlosivý podklad.

Odporúčané písmo pre podobný výsledok:

```css
body {
  font-family: Arial, Roboto, sans-serif;
  color: #454545;
  line-height: 1.5;
}
```

## Navigácia a rozloženie

1. **Horný úžitkový panel:** svetlosivý pás s radom kruhových tmavomodrých ikon vľavo a vyhľadávaním či výberom jazyka vpravo.
2. **Hlavná navigácia:** široký tmavomodrý pás; biele logo je vľavo a vodorovné položky menu vpravo. Položky sú verzálkami a pri niektorých je šípka rozbaľovacieho menu.
3. **Rozbaľovacie mega menu:** veľký biely panel pod navigáciou, rozdelený na tri stĺpce. Každý stĺpec má výrazný nadpis a pod ním zvislý zoznam odkazov. Aktívna položka má svetlosivý podklad.
4. **Hero banner:** široká svetlozelená plocha s veľkým tmavomodrým titulkom, grafikou kampusu a tlačidlom.
5. **Obsah pod hero sekciou:** biele pozadie a viacstĺpcové informačné bloky, napríklad aktuality a kalendár.

## Tlačidlá a interaktívne prvky

- Hlavné CTA v hero sekcii je sýtomodré, nízke a výrazne zaoblené do tvaru kapsuly.
- Text CTA je biely a tučný; na konci je biela šípka smerujúca doprava.
- Navigácia je prevažne tvorená textovými odkazmi, nie samostatnými tlačidlami.
- Ikony horného panelu sú biele symboly v tmavomodrých kruhoch.
- Položka mega menu sa zvýrazňuje svetlosivým vodorovným pásom; odkaz môže byť podčiarknutý.
- Šípky pri navigačných položkách naznačujú, že sa otvára ďalšia úroveň.
- Kalendár používa drobné obdĺžnikové prvky s farebnými pozadiami a bielym textom.

## Detaily a kontext screenshotu

- V dolnej časti screenshotu je viditeľná polopriehľadná tmavosivá vrstva so súhlasom na cookies a tlačidlami. Ide o prekrytie nad stránkou, nie o základnú farbu obsahu.
- Svetlozelený hero banner obsahuje mapovú alebo kampusovú grafiku; túto ilustráciu možno nahradiť vlastným vizuálom.
- Screenshot zachytáva otvorené mega menu, preto zakrýva časť hero sekcie aj obsahu pod ňou.
- Tmavohnedý pás úplne navrchu patrí rozhraniu prehliadača, nie webovej stránke, a nemá sa preberať do dizajnu.

## Odporúčané CSS tokeny

```css
:root {
  --color-nav: #2d3e68;
  --color-primary: #003d80;
  --color-heading: #344a7b;
  --color-hero: #e3f2e5;
  --color-text: #454545;
  --color-muted: #666666;
  --color-surface: #ffffff;
  --color-utility: #f4f4f4;
  --color-hover: #f0f1f3;
  --radius-button: 999px;
}
```

## Zásady pri tvorbe podľa vzoru

- Uprednostniť tmavomodrú, bielu a svetlú zelenú; farebné akcenty používať len na doplnkové informácie.
- Použiť jasnú hierarchiu: horný panel, hlavná navigácia, hero a následne obsahové bloky.
- Nadpisy a hlavné akcie zvýrazniť modrou farbou, bežný text ponechať tmavosivý.
- Primárne CTA spraviť kontrastné, s bielym tučným textom a kapsulovým tvarom.
- Pri mega menu zachovať biely podklad, stĺpcovú štruktúru a nenápadný sivý hover.
- Pre vlastné portfólio zjednodušiť množstvo navigačných a obsahových prvkov a ponechať viac priestoru medzi sekciami.
