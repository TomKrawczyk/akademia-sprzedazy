/* ===== AKADEMIA SPRZEDAZY - CZESC: 03_anatomia_rozmowy ===== */

CONTENT.struktura = `
<span class="eyebrow">Moduł 9 · Anatomia rozmowy</span>
<h2>Struktura rozmowy: 8 faz i wybór metody</h2>
<p class="lede">Rozmowa w call center jest szybsza i bardziej ustrukturyzowana niż spotkanie handlowca. Poznaj szkielet, na którym zbudujesz każdą rozmowę.</p>

<div class="tbl-wrap"><table class="tbl">
<tr><th>#</th><th>Faza</th><th>Cel</th><th>Źródło psychologiczne</th></tr>
<tr><td>1</td><td>Otwarcie + hak</td><td>Nie zostać rozłączonym</td><td>Wundt (bodziec), Cialdini (sympatia)</td></tr>
<tr><td>2</td><td>Zgoda na rozmowę</td><td>Legalność + mikro-tak</td><td>PKE, Cialdini (konsekwencja)</td></tr>
<tr><td>3</td><td>Kwalifikacja</td><td>Czy to w ogóle lead?</td><td>BANT</td></tr>
<tr><td>4</td><td>Badanie potrzeb</td><td>Znaleźć ból i poziom motywacji</td><td>Rogers, Maslow</td></tr>
<tr><td>5</td><td>Prezentacja / Teach</td><td>Zmienić perspektywę, pokazać korzyść</td><td>Challenger, Tracy, Gitomer</td></tr>
<tr><td>6</td><td>Obiekcje</td><td>Rozbroić obrony</td><td>Freud, Cardone</td></tr>
<tr><td>7</td><td>Finalizacja</td><td>Umówić audyt</td><td>Cardone, Belfort, Tracy</td></tr>
<tr><td>8</td><td>Potwierdzenie</td><td>Zabezpieczyć i otagować</td><td>—</td></tr>
</table></div>

<h3>Dwie ścieżki, jeden szkielet</h3>
<p>Nie każda rozmowa wygląda tak samo. Rozpoznaj, którą ścieżkę wybrać:</p>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Ścieżka klasyczna — większość rozmów OZE <span class="ico">+</span></div>
  <div class="acc-b"><p>Hak na uwagę → badanie potrzeb → prezentacja korzyści → obiekcje → zamknięcie. Szybka, transakcyjna. Sprawdza się przy leadach ciepłych, prostych, gdzie klient nie ma jeszcze ugruntowanej opinii.</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Ścieżka Challenger — klient świadomy lub sceptyczny <span class="ico">+</span></div>
  <div class="acc-b"><p>Zamiast pytać "co Pana boli", TY uczysz klienta czegoś nowego o jego własnej sytuacji. Używasz jej, gdy klasyczne badanie potrzeb odbija się od ściany "nie jestem zainteresowany" albo "już się w tym orientuję". Pełny opis w module 14.</p></div>
</div>

<div class="quote"><b>Cel każdej rozmowy OZE:</b> umówiony audyt lub gorący lead przekazany do handlowca. Nie sprzedajesz instalacji przez telefon — sprzedajesz następny, konkretny krok.</div>
`;

CONTENT.otwarcie = `
<span class="eyebrow">Moduł 10 · Anatomia rozmowy</span>
<h2>Pierwsze 20 sekund: reguła 4×20 i haki na uwagę</h2>
<p class="lede">Decyzja "słucham" albo "rozłączam" zapada w kilka sekund — zanim klient świadomie przetworzy Twoje słowa (Wundt: reakcja wyprzedza świadomość).</p>

<h3>Reguła 4×20 (Patryk Jasiński)</h3>
<div class="tiles">
  <div class="tile"><div class="big">20 sek</div><div class="lbl">pierwsze sekundy decydują, czy warto słuchać dalej</div></div>
  <div class="tile"><div class="big">20 słów</div><div class="lbl">muszą nieść realną wartość, nie frazes o ofercie</div></div>
  <div class="tile"><div class="big">20 gestów</div><div class="lbl">postawa ciała słychać nawet przez telefon</div></div>
  <div class="tile"><div class="big">20 cm</div><div class="lbl">uśmiech — słychać go w barwie głosu</div></div>
</div>

<h3>Struktura otwarcia krok po kroku</h3>
<ol>
  <li>Energiczne "Dzień dobry!" — natychmiast, zwłaszcza przy predictive dialerze</li>
  <li>Imię, nazwisko i firma — wyraźnie, buduje autorytet</li>
  <li>Kontekst lub zgoda — powołanie się na źródło leada</li>
  <li>Hak na uwagę</li>
  <li>Mikro-pytanie na "tak" — pierwsza zgoda buduje konsekwencję</li>
</ol>

<h3>5 technik haka — z gotowymi zdaniami</h3>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Hak przez korzyść <span class="ico">+</span></div>
  <div class="acc-b"><div class="scene"><div class="bubble c"><span class="who">Konsultant</span>Dzwonię, bo pomagamy takim domom jak Państwa płacić za prąd nawet o połowę mniej. Mogę powiedzieć, jak to możliwe?</div></div></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Konfuzja — rozbraja obronę <span class="ico">+</span></div>
  <div class="acc-b"><div class="scene"><div class="bubble c"><span class="who">Konsultant</span>Z góry uprzedzam — nie dzwonię, żeby coś Panu wciskać. Dzwonię, żeby sprawdzić jedną rzecz na Państwa rachunku za prąd. Można?</div></div></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Luka informacyjna <span class="ico">+</span></div>
  <div class="acc-b"><div class="scene"><div class="bubble c"><span class="who">Konsultant</span>Dzwonię, bo jest teraz coś, o czym większość ludzi w Państwa okolicy jeszcze nie wie, a realnie obniża rachunek za energię. Mam 30 sekund, żeby powiedzieć?</div></div></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Dowód społeczny / kontekst lokalny <span class="ico">+</span></div>
  <div class="acc-b"><div class="scene"><div class="bubble c"><span class="who">Konsultant</span>Robimy teraz sporo instalacji w Państwa okolicy i dzwonię, bo Państwa dom idealnie pasuje do tego, co się najbardziej opłaca.</div></div></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Niedobór przez dotację <span class="ico">+</span></div>
  <div class="acc-b"><div class="scene"><div class="bubble c"><span class="who">Konsultant</span>Dzwonię w sprawie aktualnych dopłat do fotowoltaiki i pomp ciepła — pula jest ograniczona, a nie każdy wie, że wciąż można z nich skorzystać. Mogę powiedzieć, ile to u Państwa?</div></div></div>
</div>

<div class="warn"><b>Żelazna zasada:</b> nigdy nie zaczynaj od "chciałbym przedstawić ofertę" ani "reprezentuję firmę X i mamy promocję". To natychmiastowy wyzwalacz mechanizmu obronnego i rozłączenia. Zawsze zaczynaj od KORZYŚCI dla klienta albo JEGO problemu.</div>

<div class="quiz">
  <div class="q">Które otwarcie jest zgodne z regułą 4×20 i psychologią pierwszego wrażenia?</div>
  <button class="opt" data-ok="0" onclick="quizPick(this,false,'','To klasyczny wyzwalacz odruchu obronnego \"kolejny telemarketer\" — brak haka, brak korzyści.')">„Dzień dobry, nazywam się Jan Kowalski, dzwonię z firmy 4ECO, chciałbym przedstawić naszą ofertę fotowoltaiki"</button>
  <button class="opt" data-ok="1" onclick="quizPick(this,true,'Tak — energia + hak na korzyść + pytanie na \"tak\" w pierwszych sekundach.','')">„Dzień dobry! Jan Kowalski, 4ECO. Dzwonię, bo pomagamy domom jak Państwa płacić o połowę mniej za prąd — mogę powiedzieć jak?"</button>
  <div class="fb"></div>
</div>
`;

CONTENT.glos = `
<span class="eyebrow">Moduł 11 · Anatomia rozmowy</span>
<h2>Głos i tonalność: metoda Straight Line Jordana Belforta</h2>
<p class="lede">Klient Cię nie widzi — głos to sto procent Twojego wizerunku. W kilka sekund nieświadomie ocenia, czy jesteś ekspertem i czy Ci zależy.</p>

<h3>6 zasad głosu na słuchawce</h3>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">1. Energia od pierwszej sekundy <span class="ico">+</span></div>
  <div class="acc-b"><p>Przy predictive dialerze musisz wejść z pełną energią, zanim klient zdąży się rozłączyć w ciszy podłączania połączenia.</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">2. Tempo szybkie, ale zrozumiałe <span class="ico">+</span></div>
  <div class="acc-b"><p>Nie strzelaj słowami jak z karabinu (klient się gubi, przeciążenie wg Wundta), ale nie ślimacz się (klient się nudzi i traci uwagę).</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">3. Tonalność zależnie od fazy rozmowy <span class="ico">+</span></div>
  <div class="acc-b">
    <ul>
      <li>Otwarcie → energia, entuzjazm</li>
      <li>Badanie potrzeb → ciepło, troska, ciekawość (Rogers)</li>
      <li>Cena → spokój, pewność, rzeczowość (niepewny głos przy cenie = klient wyczuwa słabość i naciska mocniej)</li>
      <li>Finalizacja → ton oczywistości, jakby decyzja już zapadła</li>
    </ul>
  </div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">4. Uśmiech w głosie <span class="ico">+</span></div>
  <div class="acc-b"><p>Fizycznie się uśmiechaj podczas rozmowy — to naprawdę zmienia barwę głosu na cieplejszą, nawet jeśli klient tego nie widzi. To "20 cm" z reguły 4×20.</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">5. Pauzy to władza <span class="ico">+</span></div>
  <div class="acc-b"><p>Zadaj pytanie i milcz. Cisza jest niekomfortowa dla klienta — wypełni ją mówieniem. Kto pyta i potrafi milczeć, ten prowadzi rozmowę.</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">6. Mirroring — dopasowanie tempa <span class="ico">+</span></div>
  <div class="acc-b"><p>Klient mówi wolno i spokojnie? Zwolnij. Mówi szybko i konkretnie? Przyspiesz. Ludzie ufają bardziej tym, którzy brzmią jak oni — to buduje sympatię i poczucie jedności (Cialdini).</p></div>
</div>

<h3>Straight Line — prowadzenie rozmowy po linii prostej</h3>
<p>Jordan Belfort opisał ideę "linii prostej" — od otwarcia do zamknięcia rozmowa powinna zmierzać w jednym kierunku. Klient naturalnie próbuje zboczyć z tej linii (dygresje, przedwczesne obiekcje, pytania poboczne) — Twoim zadaniem jest grzecznie, ale stanowczo wracać na tor. To też praktyczne "Take Control" ze szkoły Challenger.</p>

<div class="scene">
  <div class="scene-title">Wracanie na Straight Line</div>
  <div class="bubble k"><span class="who">Klient</span>A propos, mój sąsiad miał problem z jakąś firmą od paneli, oszukali go na gwarancji...</div>
  <div class="bubble c"><span class="who">Konsultant</span>Rozumiem tę obawę, dlatego wszystko mamy na piśmie z gwarancją producenta, nie tylko naszą. Wracając do Państwa sytuacji — mówił Pan, że rachunek w zimie dochodzi do 700 złotych, tak?</div>
  <div class="note">Konsultant uznał dygresję, uspokoił obawę jednym zdaniem i wrócił na linię prowadzącą do zamknięcia.</div>
</div>

<div class="quote"><b>Postawa ciała (Jasiński):</b> siedź wyprostowany albo stój podczas rozmowy. Zgarbiona pozycja uciska przeponę, przez co głos brzmi słabiej. Wyprostowana postawa daje więcej powietrza — głos brzmi pewniej i atrakcyjniej, nawet jeśli klient Cię nie widzi.</div>
`;

CONTENT.gatekeeper = `
<span class="eyebrow">Moduł 12 · Anatomia rozmowy</span>
<h2>Gatekeeper: jak przejść przez recepcję lub sekretariat</h2>
<p class="lede">W leadach firmowych najpierw zwykle odbiera osoba pierwszego kontaktu. To brama, nie przeszkoda — traktowana z szacunkiem, otwiera drzwi.</p>

<h3>Zasady podejścia do gatekeepera</h3>
<ol>
  <li>Nie traktuj jak przeszkody — buduj relację tak samo jak z decydentem (Rogers: szacunek do każdego rozmówcy)</li>
  <li>Bądź konkretny i pewny — niepewność natychmiast wyzwala "proszę wysłać maila"</li>
  <li>Poproś o pomoc, nie żądaj — ludzie naturalnie lubią pomagać (Cialdini: wzajemność i sympatia)</li>
</ol>

<div class="scene">
  <div class="scene-title">Przejście przez recepcję</div>
  <div class="bubble c"><span class="who">Konsultant</span>Dzień dobry, mam nadzieję, że Pani mi pomoże. Kto u Państwa odpowiada za sprawy związane z kosztami energii?</div>
  <div class="bubble k"><span class="who">Recepcja</span>A w jakiej sprawie dokładnie?</div>
  <div class="bubble c"><span class="who">Konsultant</span>W sprawie obniżenia rachunków za prąd dla firmy — mamy teraz rozwiązania, które realnie tną te koszty. Z kim najlepiej to skonsultować?</div>
  <div class="bubble k"><span class="who">Recepcja</span>Proszę wysłać maila na biuro, przekażę.</div>
  <div class="bubble c"><span class="who">Konsultant</span>Jasne, wyślę — ale żeby to nie był kolejny ogólnik w skrzynce, wolę dopasować ofertę do Państwa. Może Pani przełączyć na dwie minuty do osoby, która się tym zajmuje?</div>
</div>

<div class="quote"><b>Trik długoterminowy:</b> zapamiętaj i zapisz w CRM imię osoby z recepcji. Przy kolejnym telefonie: "Dzień dobry Pani Aniu, rozmawialiśmy w zeszłym tygodniu..." — to naturalnie otwiera drzwi, bo buduje poczucie znajomości (Cialdini: sympatia i jedność).</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Przykład z życia — cierpliwość popłaca <span class="ico">+</span></div>
  <div class="acc-b"><p>Konsultantka Marta dzwoniła do firmy produkcyjnej trzy razy w ciągu dwóch tygodni, za każdym razem trafiając na tę samą osobę na recepcji. Zamiast irytować się kolejną odmową, za każdym razem pytała o jej imię i dziękowała serdecznie. Przy trzecim telefonie recepcjonistka sama zaproponowała: "wie Pani co, akurat teraz kierownik ma chwilę, przełączę". Cierpliwość i budowanie relacji z gatekeeperem opłaciły się bardziej niż nachalność.</p></div>
</div>
`;

CONTENT.potrzeby = `
<span class="eyebrow">Moduł 13 · Anatomia rozmowy</span>
<h2>Badanie potrzeb i kwalifikacja leada</h2>
<p class="lede">Najczęstszy błąd konsultanta to "syndrom płytkiego badania potrzeb" — dwa pytania z obowiązku i już prezentacja produktu. Klient natychmiast czuje, że nie chodzi o niego.</p>

<div class="quote"><b>Zasada 70/30 (Rogers, Gitomer, Jasiński):</b> klient mówi 70% czasu, Ty 30% — głównie pytania. Człowiek wysłuchany obniża obrony i zaczyna ufać, a zaufanie poprzedza zakup.</div>

<h3>Szybka kwalifikacja — model BANT</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Litera</th><th>Co sprawdza</th><th>Przykładowe pytanie</th></tr>
<tr><td><b>B</b>udget</td><td>Jaki rachunek, potencjał oszczędności</td><td>"Ile z grubsza wychodzi za prąd miesięcznie?"</td></tr>
<tr><td><b>A</b>uthority</td><td>Czy rozmawiasz z decydentem</td><td>"Dom jest Państwa własnością?" / "Kto podejmuje takie decyzje?"</td></tr>
<tr><td><b>N</b>eed</td><td>Realna potrzeba</td><td>"Co Państwa najbardziej martwi w rachunkach?"</td></tr>
<tr><td><b>T</b>iming</td><td>Czy to dobry moment</td><td>"Myśleli już Państwo o fotowoltaice?"</td></tr>
</table></div>

<div class="warn">Jeśli lead się nie kwalifikuje (np. wynajmuje mieszkanie, brak własnego dachu) — nie trać czasu. Grzecznie zakończ, otaguj w CRM i przejdź do kolejnego kontaktu. Czas to Twój najcenniejszy zasób w call center.</div>

<h3>Technika lejka i aktywne słuchanie w praktyce</h3>
<p>Idziesz od pytań szerokich do coraz bardziej konkretnych, aż klient SAM nazwie swój ból własnymi słowami. Gdy to nastąpi — masz otwarte drzwi do prezentacji zbudowanej dokładnie na jego języku.</p>

<div class="scene">
  <div class="scene-title">Lejek pytań — od ogółu do sedna</div>
  <div class="bubble c"><span class="who">Konsultant</span>Czym Państwo obecnie ogrzewają dom?</div>
  <div class="bubble k"><span class="who">Klient</span>Węglem, jak większość tutaj.</div>
  <div class="bubble c"><span class="who">Konsultant</span>Ile z grubsza wychodzi za sezon grzewczy?</div>
  <div class="bubble k"><span class="who">Klient</span>Ciężko liczyć, ale chyba z 6-7 tysięcy rocznie z węglem, workami, transportem.</div>
  <div class="bubble c"><span class="who">Konsultant</span>A co Pana bardziej męczy — sama ta kwota, czy może coś innego z tym związane?</div>
  <div class="bubble k"><span class="who">Klient</span>Szczerze? Najbardziej mnie wykańcza noszenie tego węgla i pilnowanie pieca codziennie o piątej rano. Mam już swoje lata.</div>
  <div class="note">Konsultant odkrył prawdziwy ból — nie sama kwota, ale fizyczny wysiłek i brak wygody. Prezentacja pompy ciepła powinna teraz mówić właśnie o TYM, nie tylko o oszczędności.</div>
</div>

<h3>Aktywne słuchanie — narzędzia w praktyce</h3>
<ul>
  <li><b>Potwierdzenia dźwiękowe</b> — "mhm", "rozumiem", "jasne" (klient wie, że słuchasz naprawdę)</li>
  <li><b>Parafraza</b> — powtórz jego słowa własnymi, buduje poczucie zrozumienia</li>
  <li><b>Pytania otwarte</b> — "co Pana najbardziej martwi w..." zamiast pytań zamkniętych tak/nie</li>
  <li><b>Cisza</b> — pozwól klientowi dokończyć myśl, nie przerywaj</li>
</ul>

<div class="quote">Notuj szczegóły w CRM na bieżąco. Przy follow-upie odwołanie się do konkretu ("mówił Pan, że najbardziej męczy Pana noszenie węgla") buduje wrażenie, że klient jest ważny, nie kolejny numer w kolejce dialera.</div>
`;

CONTENT.challenger = `
<span class="eyebrow">Moduł 14 · Anatomia rozmowy</span>
<h2>Metoda Challenger: Teach, Tailor, Take Control</h2>
<p class="lede">Badania CEB/Gartner na ponad 6000 handlowców pokazały, że 54% gwiazd sprzedaży to właśnie "Challengerzy" — sprzedawcy, którzy nie tylko pytają, ale uczą klienta czegoś nowego o jego własnej sytuacji.</p>

<div class="warn"><b>Kiedy używać tej metody:</b> gdy klient jest świadomy, sceptyczny, twierdzi że "już wszystko wie", ma już ofertę konkurencji, albo klasyczne badanie potrzeb odbija się od ściany "nie jestem zainteresowany".</div>

<h3>Dlaczego klasyczne podejście czasem zawodzi</h3>
<p>Model Challenger (Matthew Dixon i Brent Adamson, "The Challenger Sale") zauważa, że współczesny klient często już sam sprawdził dużo informacji, zanim odbierze telefon. Pytanie "co Pana najbardziej boli w rachunkach" brzmi wtedy jak coś, na co już zna odpowiedź — i nie buduje żadnej nowej wartości. Trzeba dać mu coś, czego jeszcze nie wie.</p>

<h3>Filar 1: TEACH — ucz, buduj autorytet przez wgląd</h3>
<p>Zamiast pytać, powiedz klientowi coś, czego prawdopodobnie nie wie o jego własnym rachunku czy sytuacji:</p>
<div class="scene">
  <div class="bubble c"><span class="who">Konsultant</span>Większość ludzi nie wie, że w rachunku za prąd nawet 40 procent to opłaty dystrybucyjne, które i tak rosną co roku niezależnie od zużycia — i to właśnie tę część fotowoltaika tnie najmocniej. Sprawdzał Pan kiedyś, ile u Państwa to konkretnie stanowi?</div>
  <div class="bubble k"><span class="who">Klient</span>Szczerze, nie zwracałem na to uwagi, myślałem, że płacę tylko za zużycie.</div>
  <div class="note">Klient mówi "nie myślałem o tym w ten sposób" — to moment, w którym budujesz realną wiarygodność, nie przez pytanie, ale przez wiedzę.</div>
</div>

<h3>Filar 2: TAILOR — dopasuj wgląd do konkretnej osoby</h3>
<p>Ten sam fundamentalny wgląd, ale opakowany innym językiem zależnie od tego, kto słucha:</p>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Profil</th><th>Jak dopasować ten sam wgląd</th></tr>
<tr><td>Emeryt</td><td>"To znaczy, że płaci Pan co miesiąc za coś, co da się mieć praktycznie za darmo. To kwestia bezpieczeństwa Pana budżetu na lata."</td></tr>
<tr><td>Przedsiębiorca</td><td>"To bezpośrednio zjada Państwa marżę co miesiąc. Konkurencja, która to zauważyła, ma dziś realnie niższe koszty operacyjne."</td></tr>
</table></div>

<h3>Filar 3: TAKE CONTROL — przejmij ster pewnie, nie agresywnie</h3>
<p>Nie bój się mówić wprost o pieniądzach i prowadzić klienta do decyzji. Zdrowe napięcie w rozmowie jest w porządku — Challenger nie podąża biernie za klientem, tylko prowadzi.</p>
<div class="scene">
  <div class="bubble c"><span class="who">Konsultant</span>Proszę Pana, nie ma sensu teraz zgadywać dokładnych liczb przez telefon. Zróbmy jedno: bezpłatny audyt da twarde, konkretne liczby dla Państwa domu. To logiczny następny krok, niezależnie od tego, co Pan ostatecznie zdecyduje. Umawiamy wtorek czy czwartek?</div>
</div>

<div class="quote"><b>Klucz całej metody:</b> prowadź DO rozwiązania, nie zaczynaj OD rozwiązania. Nauczenie klienta czegoś nowego i dopasowanie tego do jego sytuacji sprawia, że oferta na końcu wydaje się oczywistym, logicznym wnioskiem — nie "wciskaniem" niczego.</div>

<div class="quiz">
  <div class="q">Klient mówi: "znam się na tym, mam już ofertę od innej firmy, nie potrzebuję rozmowy". Która metoda pasuje najlepiej?</div>
  <button class="opt" data-ok="0" onclick="quizPick(this,false,'','Klasyczne badanie potrzeb odbije się od kogoś, kto uważa, że już wszystko wie — potrzeba czegoś, co go zaskoczy.')">Klasyczna ścieżka — pytam szeroko o jego rachunki i potrzeby</button>
  <button class="opt" data-ok="1" onclick="quizPick(this,true,'Dokładnie — świadomy, sceptyczny klient wymaga metody Challenger: pokaż mu coś, czego jeszcze nie wie o własnej sytuacji.','')">Metoda Challenger — zaskakuję go wglądem, którego jeszcze nie brał pod uwagę</button>
  <div class="fb"></div>
</div>
`;

CONTENT.prezentacja = `
<span class="eyebrow">Moduł 15 · Anatomia rozmowy</span>
<h2>Prezentacja przez korzyść: Brian Tracy i Jeffrey Gitomer</h2>
<p class="lede">Klienta nie interesuje "12 kilowatów mocy i falownik hybrydowy". Interesuje go: "zamiast 900 złotych będę płacił 200 złotych miesięcznie".</p>

<div class="quote"><b>Jeffrey Gitomer:</b> Ludzie nie lubią, gdy im się sprzedaje, ale uwielbiają kupować. Nie prezentuj oferty — pokaż klientowi obraz jego lepszego życia.</div>
<div class="quote"><b>Brian Tracy:</b> Klient nie kupuje produktu — kupuje rozwiązanie problemu i uczucie, jakie da mu ten produkt.</div>

<h3>Formuła: Cecha → Zaleta → Korzyść</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Cecha techniczna</th><th>Źle — sam parametr</th><th>Dobrze — korzyść dla klienta</th></tr>
<tr><td>Instalacja 10 kWp</td><td>"Instalacja 10 kilowat"</td><td>"Pokryje prawie całe Państwa zużycie — z 800 złotych rachunek spadnie do około 150"</td></tr>
<tr><td>Magazyn energii 10 kWh</td><td>"Bateria litowo-żelazowa 10 kWh"</td><td>"Prąd wyprodukowany w dzień zużyjecie wieczorem, zamiast oddawać go do sieci za grosze"</td></tr>
<tr><td>Pompa ciepła COP 4,5</td><td>"Pompa z współczynnikiem COP 4,5"</td><td>"Za ogrzewanie zapłacicie nawet 3-4 razy mniej niż węglem — bez dymu i noszenia opału"</td></tr>
</table></div>

<h3>Zawsze mów o:</h3>
<ul>
  <li>Konkretnej oszczędności w złotówkach — najlepiej odnieś ją do kwoty, którą klient SAM podał w badaniu potrzeb</li>
  <li>Czasie zwrotu inwestycji — "zwróci się w 5-6 lat, a działa 25 lat"</li>
  <li>Dotacjach — element niedoboru (Cialdini), obniża próg wejścia</li>
  <li>Spokoju i bezpieczeństwie — koniec z martwieniem się o kolejne podwyżki cen prądu</li>
</ul>

<h3>Metafory i porównania — obraz silniejszy niż parametr</h3>
<div class="scene">
  <div class="bubble c"><span class="who">Konsultant</span>To trochę jak zamiana wynajmu na własne mieszkanie. Teraz co miesiąc płaci Pan za prąd i te pieniądze bezpowrotnie znikają. Z instalacją te same, dokładnie te same pieniądze zaczynają budować Pana własne źródło energii, które będzie pracować przez kolejne 25 lat.</div>
</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Przykład z życia — dlaczego parametr nie sprzedaje <span class="ico">+</span></div>
  <div class="acc-b"><p>Konsultant Grzegorz przez pierwsze miesiące prezentował ofertę technicznie: moc, sprawność, typ falownika. Klienci kiwali głową, ale rzadko się umawiali — brakowało im emocjonalnego "zaczepienia" o realia ich życia. Gdy zaczął mówić wprost o konkretnej kwocie z rachunku klienta ("Pana 750 złotych spadnie do jakichś 140") zamiast o kilowatach, zauważył natychmiastową zmianę reakcji — klienci zaczęli dopytywać, zamiast grzecznie kończyć rozmowę.</p></div>
</div>

<div class="warn"><b>Zasada Wundta w praktyce:</b> jedna korzyść trafiona dokładnie w ból klienta jest silniejsza niż pięć parametrów technicznych naraz. Mrozowski nazywał to: "siej jedno mocne ziarno, nie zasypuj gradem". Przeciążony informacjami umysł broni się odmową.</div>
`;
