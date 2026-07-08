/* ===== AKADEMIA SPRZEDAZY - CZESC: 01_wstep_i_psychologia ===== */
const CONTENT = {};

CONTENT.intro = `
<div class="hero">
  <span class="eyebrow" style="background:rgba(34,197,94,.18);color:#bbf7d0;border-color:rgba(34,197,94,.3)">Wersja interaktywna</span>
  <h1>Akademia Sprzedaży Telefonicznej — Call Center</h1>
  <p>Kompletny, interaktywny program dla konsultanta 4ECO. Fundament psychologiczny (Wundt, Freud, Maslow, Rogers, Cialdini) połączony z metodami najlepszych trenerów sprzedaży świata (Tracy, Belfort, Gitomer, Cardone) i modelem Challenger Sale. Każdy moduł ma przykłady z życia, gotowe skrypty i quiz sprawdzający.</p>
  <div class="stat-row">
    <div class="stat"><b>22</b><span>moduły</span></div>
    <div class="stat"><b>5</b><span>szkół psychologii</span></div>
    <div class="stat"><b>5</b><span>gotowych skryptów OZE</span></div>
    <div class="stat"><b>40+</b><span>scenek z życia</span></div>
  </div>
  <div class="chips">
    <span class="chip">Wundt</span><span class="chip">Freud</span><span class="chip">Maslow</span>
    <span class="chip">Rogers</span><span class="chip">Cialdini</span><span class="chip">Tracy</span>
    <span class="chip">Belfort</span><span class="chip">Gitomer</span><span class="chip">Cardone</span>
    <span class="chip">Challenger Sale</span>
  </div>
</div>
<h3>Jak korzystać z Akademii</h3>
<p>Menu po lewej prowadzi Cię przez 5 części kursu. Najpierw poznajesz <b>fundament psychologiczny</b> — dlaczego klient reaguje tak, a nie inaczej. Potem <b>realia pracy i prawo</b>. Następnie <b>anatomię rozmowy</b> krok po kroku, z konkretnymi zdaniami do powiedzenia. Na końcu <b>domykanie i system pracy</b> — obiekcje, finalizacja, KPI.</p>
<p>W każdym module znajdziesz: rozwijane sekcje (kliknij, by rozwinąć), przykładowe rozmowy „z życia" (dymki jak na czacie) oraz pytanie sprawdzające na końcu. Twój postęp jest zapisywany automatycznie — możesz wrócić w dowolnym momencie.</p>
<div class="quote"><b>Zasada numer jeden:</b> „Ludzie nie lubią, gdy im się sprzedaje, ale uwielbiają kupować" — Jeffrey Gitomer. Cały ten kurs uczy Cię tworzyć warunki, w których klient SAM chce powiedzieć „tak", bo to naprawdę mu się opłaca. Nie manipulujesz — pomagasz mu zobaczyć wartość, która tam realnie jest.</div>
<h3>Case z życia — dlaczego to działa</h3>
<div class="card">
<p><b>Marek, 34 lata, 3 lata w call center energetycznym.</b> Przez pierwszy rok czytał skrypt słowo w słowo, miał konwersję 4%. Klienci mówili „nie" po 10 sekundach. Po przejściu szkolenia opartego na psychologii (rozpoznawanie typu klienta, badanie potrzeb metodą Rogersa, domykanie Cardone'a) jego konwersja skoczyła do 14% w ciągu trzech miesięcy — bez zmiany produktu, bez zmiany bazy leadów. Zmieniło się tylko to, jak rozumiał rozmówcę.</p>
<p>To nie magia. To zrozumienie, że telefon to nie „wygłoszenie oferty" — to żywa interakcja dwóch psychik, które można poznać i którymi można się posługiwać etycznie.</p>
</div>
`;

CONTENT.wundt = `
<span class="eyebrow">Moduł 1 · Fundament psychologiczny</span>
<h2>Wilhelm Wundt: umysł jako mierzalny proces</h2>
<p class="lede">Ojciec psychologii jako nauki. Zanim nauczysz się technik, zrozum najprostszą, a najczęściej ignorowaną prawdę: umysł klienta ma ograniczoną przepustowość.</p>

<h3>Kim był i co odkrył</h3>
<p>Wilhelm Wundt (1832–1920) założył w 1879 roku w Lipsku pierwsze na świecie laboratorium psychologii eksperymentalnej. Do tego momentu umysł był domeną filozofów — Wundt jako pierwszy zaczął go <b>mierzyć</b>: badał czas reakcji, pojemność uwagi, sposób, w jaki świadomość przetwarza bodźce metodą introspekcji (systematycznej samoobserwacji w kontrolowanych warunkach). Udowodnił, że procesy umysłowe mają realne, mierzalne granice — tak jak mięsień ma granicę siły, umysł ma granicę przepustowości.</p>

<h3>Co to znaczy dla Ciebie na słuchawce</h3>
<div class="tiles">
  <div class="tile"><div class="big">~4</div><div class="lbl">porcje informacji, które przeciętny umysł ogarnia naraz zanim zacznie „gubić wątek"</div></div>
  <div class="tile"><div class="big">0,3–0,8s</div><div class="lbl">typowy czas reakcji na pytanie — tyle potrzebuje mózg, zanim odpowie</div></div>
  <div class="tile"><div class="big">3 sek</div><div class="lbl">tyle trwa, zanim klient „wyczuje", że czytasz z kartki, nie mówisz naturalnie</div></div>
</div>

<h4>Zasada 1: Jedna myśl na raz</h4>
<p>Gdy w jednym zdaniu podajesz moc instalacji, cenę, czas zwrotu, listę dotacji i jeszcze gwarancję — umysł klienta się przeciąża. Nie zapamiętuje nic, bo próbuje przetworzyć wszystko naraz. To jak próba nalania pięciu szklanek wody z jednego dzbanka jednocześnie — rozlewa się wszystko.</p>

<div class="scene">
  <div class="scene-title">Źle — przeciążenie</div>
  <div class="bubble c"><span class="who">Konsultant</span>Mamy instalację 10 kilowat z falownikiem hybrydowym, magazynem 10 kWh, dofinansowaniem Mój Prąd do 6 tysięcy, gwarancją 25 lat na panele i 10 na falownik, montaż w 6 tygodni, no i jeszcze...</div>
  <div class="bubble k"><span class="who">Klient</span>Przepraszam, ale ja już się w tym pogubiłem. Może innym razem.</div>
  <div class="scene-title">Dobrze — jedna myśl</div>
  <div class="bubble c"><span class="who">Konsultant</span>Powiem najprościej: teraz płaci Pan około 800 złotych miesięcznie za prąd. Po instalacji — koło 150. Dobrze to brzmi?</div>
  <div class="bubble k"><span class="who">Klient</span>No, brzmi nieźle. Ale jak to możliwe?</div>
  <div class="note">Klient sam prosi o więcej informacji — bo dostał jedną, przetrawialną myśl, nie lawinę danych.</div>
</div>

<h4>Zasada 2: Pauza to nie pustka — to czas na przetworzenie</h4>
<p>Wielu konsultantów boi się ciszy po pytaniu i zaraz je uzupełnia kolejnym zdaniem. To błąd — zabierasz klientowi czas potrzebny mózgowi na sformułowanie odpowiedzi. Zadaj pytanie i naprawdę zamilcz, nawet jeśli cisza trwa 3-4 sekundy. To czuje się długo tylko dla Ciebie.</p>

<h4>Zasada 3: Bodziec wyprzedza treść</h4>
<p>Zanim klient świadomie przetworzy SŁOWA, jego mózg już zareagował na TON głosu. Zmęczone „yyy, dzień dobry" i energiczne „Dzień dobry!" to dwa zupełnie różne bodźce — i wywołują różne reakcje, zanim jeszcze padnie jedno sensowne zdanie.</p>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Przykład z życia — konsultantka Ania i „efekt przeciążenia" <span class="ico">+</span></div>
  <div class="acc-b"><p>Ania, pracująca w contact center od pół roku, miała nawyk „dorzucania" argumentów — im dłużej klient milczał, tym bardziej się bała, że straciła jego uwagę, i mówiła szybciej, więcej, gęściej. Wynik: klienci masowo kończyli rozmowę słowami „proszę wysłać mailem" — czyli grzecznym uciekaniem przed przeciążeniem. Gdy nauczyła się robić pauzy po każdym pytaniu i ograniczać się do jednej myśli na zdanie, jej rozmowy stały się krótsze, ale odsetek umówionych audytów wzrósł ponad dwukrotnie.</p></div>
</div>

<div class="quiz">
  <div class="q">Klient milczy 4 sekundy po Twoim pytaniu o rachunek za prąd. Co robisz?</div>
  <button class="opt" data-ok="0" onclick="quizPick(this,false,'','Zbyt szybkie dogadywanie zabiera klientowi czas na sformułowanie myśli i przerywa proces decyzyjny.')">Zaraz dogadzam kolejne zdanie, żeby wypełnić ciszę</button>
  <button class="opt" data-ok="1" onclick="quizPick(this,true,'Dokładnie — pauza to czas na przetworzenie (Wundt). Milczenie po pytaniu to Twoje najlepsze narzędzie, nie porażka.','')">Czekam spokojnie — to naturalny czas na przemyślenie odpowiedzi</button>
  <div class="fb"></div>
</div>
`;

CONTENT.freud = `
<span class="eyebrow">Moduł 2 · Fundament psychologiczny</span>
<h2>Zygmunt Freud: id, ego, superego i mechanizmy obronne klienta</h2>
<p class="lede">Twórca psychoanalizy pokazał, że większość naszych decyzji napędza nieświadomość. Obiekcja klienta rzadko jest tym, na co wygląda — to zwykle mechanizm obronny broniący przed lękiem.</p>

<h3>Trzy siły w głowie klienta</h3>
<p>Freud (1856–1939) opisał osobowość jako grę trzech sił. Każda z nich reaguje inaczej na Twoją ofertę — i dobra rozmowa mówi do wszystkich trzech naraz.</p>

<div class="tbl-wrap">
<table class="tbl">
<tr><th>Instancja</th><th>Czego chce</th><th>Jak do niej mówić w OZE</th></tr>
<tr><td><b>ID</b></td><td>Przyjemności teraz, unikania bólu natychmiast</td><td>„Zamiast martwić się każdym rachunkiem — po prostu przestajecie o tym myśleć"</td></tr>
<tr><td><b>SUPEREGO</b></td><td>Bycia „w porządku", zgodności z normą, aprobaty innych</td><td>„Państwa sąsiedzi już to mają — to teraz standard rozsądnego gospodarza"</td></tr>
<tr><td><b>EGO</b></td><td>Realizmu, bezpiecznej i przemyślanej decyzji</td><td>„Zwrot w 5 lat, gwarancja 25 lat, konkretna kalkulacja na audycie"</td></tr>
</table>
</div>

<p>Dobra oferta karmi wszystkie trzy: przyjemność (id) + słuszność społeczną (superego) + racjonalne bezpieczeństwo (ego). Jeśli mówisz tylko liczbami — trafiasz jedynie w ego i tracisz emocjonalne „chcę" klienta.</p>

<h3>Mechanizmy obronne — Twoje codzienne pole walki</h3>
<p>Gdy klient odczuwa napięcie (a nieoczekiwany telefon zawsze je wywołuje), jego psychika automatycznie sięga po mechanizmy obronne, żeby zredukować lęk. Obiekcja, którą słyszysz, to często maska — nie prawdziwy powód odmowy.</p>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Zaprzeczanie — „mnie to nie dotyczy" <span class="ico">+</span></div>
  <div class="acc-b">
    <p>Klient mówi „płacę mało za prąd, to nie dla mnie" — nawet jeśli rachunek jest wysoki. To nie kłamstwo, to obrona przed konfrontacją z niewygodnym faktem (że mógłby oszczędzać, a nie oszczędza). Nie atakuj wprost faktami — zapytaj łagodnie o konkretną liczbę, niech sam ją wypowie.</p>
    <div class="scene">
      <div class="bubble k"><span class="who">Klient</span>Ja tam mało płacę, u mnie to nie ma sensu.</div>
      <div class="bubble c"><span class="who">Konsultant</span>Rozumiem. Same z ciekawości — ile z grubsza wychodzi u Państwa w zimowym miesiącu?</div>
      <div class="bubble k"><span class="who">Klient</span>No... w styczniu było chyba z 650.</div>
      <div class="note">Klient sam demaskuje własne zaprzeczenie, wypowiadając konkretną liczbę.</div>
    </div>
  </div>
</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Racjonalizacja — „muszę pomyśleć / z żoną" <span class="ico">+</span></div>
  <div class="acc-b"><p>To najczęstsza „grzeczna" obrona. Klient nie chce powiedzieć wprost „boję się wydać te pieniądze" albo „nie ufam Wam jeszcze" — więc racjonalizuje odkładanie decyzji na neutralny powód. Twoje zadanie: delikatnie dotrzeć do prawdziwej obawy, pytając wprost, co konkretnie budzi wątpliwość.</p></div>
</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Projekcja — „wy telemarketerzy tylko wciskacie" <span class="ico">+</span></div>
  <div class="acc-b"><p>Klient przypisuje Tobie własny lęk przed tym, że da się namówić na coś, czego nie chce. To nie jest osąd Ciebie osobiście — to obrona przed własną podatnością na wpływ. Najlepsza odpowiedź to konfuzja: zgódź się z jego niechęcią do wciskania, zanim cokolwiek zaproponujesz.</p></div>
</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Unikanie — „proszę wysłać maila" <span class="ico">+</span></div>
  <div class="acc-b"><p>Chce po prostu zakończyć napięcie rozmowy w sposób społecznie akceptowalny — mail nigdy nie zostanie przeczytany, ale klient „nie odmówił wprost". Odpowiedź: zaakceptuj chęć maila, ale warunkuj go trzema szybkimi pytaniami, które i tak wracają do rozmowy.</p></div>
</div>

<div class="warn"><b>Ważne:</b> nie atakuj mechanizmu obronnego wprost logiką ("ale to nieprawda, że..."). To wzmacnia opór, bo klient czuje się przyparty do muru. Najpierw rozbrój napięcie ciepłem i akceptacją (patrz moduł o Rogersie), dopiero potem wróć do faktów.</div>

<div class="quiz">
  <div class="q">Klient mówi opryskliwie: „wy tylko dzwonicie i coś wciskacie". Co to najczęściej naprawdę oznacza?</div>
  <button class="opt" data-ok="0" onclick="quizPick(this,false,'','To rzadko chodzi realnie o Ciebie personalnie — zwykle to projekcja własnego lęku przed naciskiem.')">Że naprawdę jesteś nachalny i powinieneś przeprosić</button>
  <button class="opt" data-ok="1" onclick="quizPick(this,true,'Właśnie tak — to projekcja (Freud): klient broni się przed własną obawą, że da się namówić.','')">Że to jego mechanizm obronny — boi się, że da się namówić na coś niechcianego</button>
  <div class="fb"></div>
</div>
`;

CONTENT.maslow = `
<span class="eyebrow">Moduł 3 · Fundament psychologiczny</span>
<h2>Abraham Maslow: piramida potrzeb jako mapa motywacji zakupowej</h2>
<p class="lede">Psychologia humanistyczna. Najprostsza i najskuteczniejsza mapa tego, co naprawdę motywuje człowieka do działania — i do zakupu.</p>

<h3>5 poziomów potrzeb — przełożone na OZE</h3>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">1. Potrzeby fizjologiczne <span class="ico">+</span></div>
  <div class="acc-b"><p>Ciepło, jedzenie, sen, komfort fizyczny. W OZE: „Ciepły dom zimą, bez martwienia się o piec, opał, noszenie węgla." To poziom najbardziej podstawowy — ludzie w trudnej sytuacji finansowej reagują właśnie na to, nie na ekologię.</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">2. Bezpieczeństwo — NAJMOCNIEJSZY poziom w sprzedaży OZE <span class="ico">+</span></div>
  <div class="acc-b">
  <p>Stabilność, przewidywalność, brak zagrożenia. To jest główny silnik decyzji o fotowoltaice czy pompie ciepła. Ludzie boją się nie tego, że prąd jest drogi TERAZ — boją się, że będzie coraz droższy i nieprzewidywalny.</p>
  <div class="scene">
    <div class="bubble c"><span class="who">Konsultant</span>Rozumiem, że teraz rachunek jest do udźwignięcia. Pytanie brzmi: czy chce Pan być zależny od tego, ile zdecyduje dostawca prądu za rok czy dwa lata?</div>
    <div class="bubble k"><span class="who">Klient</span>No... szczerze, te ciągłe podwyżki mnie wykańczają psychicznie, nigdy nie wiadomo ile przyjdzie.</div>
    <div class="note">To zdanie klienta to czysty sygnał: motywuje go potrzeba bezpieczeństwa, nie chwilowa oszczędność.</div>
  </div>
  </div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">3. Przynależność <span class="ico">+</span></div>
  <div class="acc-b"><p>Bycie częścią grupy, robienie tego, co „normalni ludzie w mojej okolicy". Łączy się z zasadą dowodu społecznego Cialdiniego. „Pół ulicy już ma fotowoltaikę" działa, bo nikt nie chce być tym jedynym, który przepłaca, gdy sąsiedzi już nie płacą.</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">4. Szacunek i uznanie <span class="ico">+</span></div>
  <div class="acc-b"><p>Status, duma, poczucie bycia mądrym gospodarzem. Działa mocno u przedsiębiorców i osób ceniących swój wizerunek: „nowoczesny dom", „firma, która nie przepłaca za energię i myśli przyszłościowo".</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">5. Samorealizacja <span class="ico">+</span></div>
  <div class="acc-b"><p>Wartości, sens, wkład w coś większego od siebie — ekologia, świat dla dzieci. To NAJWYŻSZY poziom — działa jako dodatek, „wisienka na torcie", ale prawie nigdy nie jest głównym motywatorem u kogoś, kto martwi się rachunkiem.</p></div>
</div>

<div class="warn"><b>Kluczowa zasada Maslowa:</b> człowiek najpierw zaspokaja potrzeby niższe. Nie zaczynaj rozmowy od ekologii („dbamy o planetę") z klientem, który boi się rachunku — to nie trafi, bo jego umysł jest zajęty niższym piętrem piramidy. Najpierw bezpieczeństwo i oszczędność, ekologię dokładasz na końcu.</div>

<h3>Jak rozpoznać poziom klienta w rozmowie</h3>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Profil klienta</th><th>Dominujący poziom</th><th>Język korzyści</th></tr>
<tr><td>Emeryt, stały niski dochód</td><td>Bezpieczeństwo</td><td>„Przewidywalny, niski rachunek do końca życia"</td></tr>
<tr><td>Młoda rodzina z dziećmi</td><td>Fizjologia + bezpieczeństwo</td><td>„Ciepło dla dzieci, spokój o budżet domowy"</td></tr>
<tr><td>Przedsiębiorca</td><td>Szacunek + ego (racjonalność)</td><td>„Przewaga kosztowa nad konkurencją, nowoczesny wizerunek firmy"</td></tr>
<tr><td>Świadomy ekologicznie</td><td>Samorealizacja (jako dodatek)</td><td>„Czysta energia — plus liczby, które i tak muszą się zgadzać"</td></tr>
</table></div>

<div class="quiz">
  <div class="q">Rozmawiasz z emerytem, który powtarza „boję się tych ciągłych podwyżek". Na jaki poziom piramidy powinieneś celować w pierwszej kolejności?</div>
  <button class="opt" data-ok="0" onclick="quizPick(this,false,'','Samorealizacja to najwyższy poziom — u kogoś zmartwionego rachunkiem to nie zadziała jako pierwszy argument.')">Samorealizacja — pokazać wkład w ekologię</button>
  <button class="opt" data-ok="1" onclick="quizPick(this,true,'Dokładnie — słowo klucz \"boję się\" to czysty sygnał potrzeby bezpieczeństwa (poziom 2). Zacznij od stabilności i przewidywalności kosztów.','')">Bezpieczeństwo — przewidywalność i stabilność kosztów</button>
  <div class="fb"></div>
</div>
`;

CONTENT.rogers = `
<span class="eyebrow">Moduł 4 · Fundament psychologiczny</span>
<h2>Carl Rogers: empatia, autentyczność, aktywne słuchanie</h2>
<p class="lede">Twórca terapii skoncentrowanej na osobie. Odkrył trzy warunki, które budują zaufanie i otwierają człowieka na drugą osobę — fundament KAŻDEJ dobrej rozmowy telefonicznej.</p>

<h3>Trzy warunki Rogersa</h3>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">1. Empatia — naprawdę wejść w sytuację klienta <span class="ico">+</span></div>
  <div class="acc-b"><p>To nie „udawana troska" wypowiedziana tonem z podręcznika. To realne rozpoznanie, że dla tego konkretnego człowieka podwyżki cen prądu to prawdziwy, codzienny stres — nie abstrakcyjny temat. Klient słyszy różnicę między wyuczoną frazą a szczerym zrozumieniem w pierwszych słowach.</p>
  <div class="scene">
    <div class="bubble k"><span class="who">Klient</span>Ostatnia zima to była masakra z rachunkami, ledwo spięliśmy budżet.</div>
    <div class="bubble c"><span class="who">Konsultant</span>To musiało być naprawdę ciężkie — zwłaszcza gdy nie wiadomo, ile przyjdzie w kolejnym miesiącu. Właśnie dlatego wielu ludzi w Państwa sytuacji szuka teraz sposobu, żeby to wreszcie kontrolować.</div>
  </div>
  </div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">2. Autentyczność / spójność — bądź sobą, nie maską <span class="ico">+</span></div>
  <div class="acc-b"><p>Klient w 2-3 sekundy wyczuwa „katarynkę" czytającą skrypt. Rogers nazywał to kongruencją — to, co mówisz, ma się zgadzać z tym, kim naprawdę jesteś w danej chwili. Skrypt to drogowskaz, nie maska do noszenia. Jeśli coś Cię naprawdę zaskoczyło w odpowiedzi klienta — powiedz to szczerze, zamiast wracać sztywno do gałęzi skryptu.</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">3. Bezwarunkowa akceptacja — bez osądzania <span class="ico">+</span></div>
  <div class="acc-b"><p>Nie oceniasz klienta, nawet gdy jest opryskliwy albo mówi coś, z czym się nie zgadzasz. Przyjmujesz jego „nie" bez urazy i bez próby „ukarania" go zmianą tonu. To rozbraja mechanizmy obronne (Freud) szybciej niż jakikolwiek argument logiczny — bo człowiek, który czuje się osądzany, zamyka się jeszcze mocniej.</p></div>
</div>

<h3>Aktywne słuchanie — cztery warstwy</h3>
<ol>
  <li><b>Słyszę słowa</b> — co klient mówi dosłownie.</li>
  <li><b>Słyszę emocję</b> — zmęczenie, irytację, ciekawość ukrytą w tonie głosu.</li>
  <li><b>Parafraza</b> — oddajesz jego myśl własnymi słowami, by upewnić się, że rozumiesz.</li>
  <li><b>Klaryfikacja</b> — dopytujesz, gdy coś jest niejasne, zamiast zgadywać.</li>
</ol>

<div class="scene">
  <div class="scene-title">Parafraza w praktyce</div>
  <div class="bubble k"><span class="who">Klient</span>No wie Pan, płacimy, płacimy, a końca nie widać. Już nawet nie wiem, ile powinniśmy płacić.</div>
  <div class="bubble c"><span class="who">Konsultant</span>Czyli jeśli dobrze rozumiem — najbardziej męczy Pana ta niepewność, że nie wiadomo, ile przyjdzie i czy to w ogóle uczciwa kwota?</div>
  <div class="bubble k"><span class="who">Klient</span>Dokładnie tak, właśnie o to chodzi.</div>
  <div class="note">Parafraza pokazuje klientowi, że został naprawdę usłyszany — to buduje zaufanie szybciej niż jakikolwiek argument sprzedażowy.</div>
</div>

<div class="quote"><b>Zasada 70/30 (Rogers + Jasiński + Gitomer):</b> klient mówi 70% czasu rozmowy, Ty 30% — głównie pytania. Człowiek, który czuje się wysłuchany, obniża swoje obrony i zaczyna ufać. A zaufanie zawsze poprzedza kupowanie.</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Przykład z życia — konsultant, który przestał przerywać <span class="ico">+</span></div>
  <div class="acc-b"><p>Tomek, doświadczony konsultant, miał nawyk kończenia zdań za klienta, żeby „przyspieszyć" rozmowę. Statystycznie miał dobre wyniki, ale wysoki wskaźnik rezygnacji z umówionych audytów (niski show-rate) — klienci umawiali się z grzeczności, nie z przekonania. Gdy zaczął stosować parafrazę i naprawdę czekać, aż klient skończy myśl, jego rozmowy wydłużyły się o minutę-dwie, ale show-rate wzrósł z 55% do 78%. Klienci przychodzili na audyt, bo naprawdę czuli, że ich wysłuchano, nie że „coś im wcisnęło się w słuchawkę".</p></div>
</div>

<div class="quiz">
  <div class="q">Jaka jest właściwa proporcja mówienia w dobrze prowadzonej rozmowie sprzedażowej?</div>
  <button class="opt" data-ok="0" onclick="quizPick(this,false,'','To zbyt dużo z Twojej strony — klient nie czuje się wysłuchany, a Ty tracisz informacje potrzebne do dobrej prezentacji.')">Konsultant 70%, klient 30% — trzeba dużo opowiadać o produkcie</button>
  <button class="opt" data-ok="1" onclick="quizPick(this,true,'Właśnie tak — 70/30 na korzyść klienta. Twoje 30% to głównie dobre pytania, nie monolog o produkcie.','')">Klient 70%, konsultant 30% — głównie pytania i słuchanie</button>
  <div class="fb"></div>
</div>
`;

CONTENT.cialdini = `
<span class="eyebrow">Moduł 5 · Fundament psychologiczny</span>
<h2>Robert Cialdini: 7 zasad wpływu</h2>
<p class="lede">Psycholog społeczny, autor „Wywierania wpływu na ludzi". Opisał reguły, które nieświadomie kierują decyzjami „tak" — najpotężniejsze, etyczne narzędzia perswazji, jakie istnieją.</p>

<div class="warn"><b>Zasada etyczna na start:</b> te reguły działają, bo są zakorzenione w prawdziwych mechanizmach psychiki. Używaj ich do przedstawienia REALNEJ wartości oferty. Fałszywy dowód społeczny czy zmyślony niedobór to manipulacja — a manipulacja prędzej czy później wychodzi na jaw i niszczy zaufanie do marki.</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">1. Wzajemność <span class="ico">+</span></div>
  <div class="acc-b">
    <p>Gdy coś dostajemy, czujemy naturalną potrzebę odwzajemnienia. Dawanie wartości NAJPIERW (za darmo, bez warunków) buduje w kliencie poczucie zobowiązania.</p>
    <div class="scene"><div class="bubble c"><span class="who">Konsultant</span>Zróbmy tak: bezpłatny audyt, konkretna kalkulacja oszczędności na piśmie — zero zobowiązań z Państwa strony. Ja przygotuję to za darmo, Państwo zdecydujecie później.</div></div>
  </div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">2. Zaangażowanie i konsekwencja <span class="ico">+</span></div>
  <div class="acc-b">
    <p>Trzymamy się tego, co raz powiedzieliśmy lub zrobiliśmy — nawet drobne „tak" buduje presję wewnętrznej spójności do kolejnych „tak". Dlatego zbierasz mikro-zgody krok po kroku.</p>
    <div class="scene">
      <div class="bubble c"><span class="who">Konsultant</span>Zależy Panu na niższym rachunku za prąd, prawda?</div>
      <div class="bubble k"><span class="who">Klient</span>No jasne, że tak.</div>
      <div class="bubble c"><span class="who">Konsultant</span>To skoro tak, logiczne byłoby sprawdzić, ile realnie dałoby się zaoszczędzić — zgadza się?</div>
      <div class="bubble k"><span class="who">Klient</span>No... zgadza się.</div>
    </div>
  </div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">3. Dowód społeczny <span class="ico">+</span></div>
  <div class="acc-b"><p>Robimy to, co robią inni podobni do nas — szczególnie gdy sytuacja jest niepewna. „W Państwa okolicy zrobiliśmy już kilkanaście instalacji" łączy się z potrzebą przynależności (Maslow) i superego (Freud) — chęcią bycia „w normie".</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">4. Sympatia (lubienie) <span class="ico">+</span></div>
  <div class="acc-b"><p>Kupujemy chętniej od ludzi, których lubimy. Buduje ją: ciepło w głosie, uśmiech, autentyczność (Rogers), znalezienie wspólnego gruntu, szczery komplement. Gitomer podsumował to prosto: „ludzie kupują od przyjaciół, nie od sprzedawców".</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">5. Autorytet <span class="ico">+</span></div>
  <div class="acc-b"><p>Ufamy ekspertom. „Jesteśmy certyfikowanym instalatorem, robimy to od lat" plus pewny, kompetentny ton głosu (Belfort) budują wiarygodność. Ty jesteś doradcą, nie natrętem — mów jak ktoś, kto naprawdę się zna.</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">6. Niedobór / niedostępność <span class="ico">+</span></div>
  <div class="acc-b"><p>Bardziej pożądamy tego, czego może zabraknąć. „Aktualne dopłaty mają ograniczoną pulę" działa silnie — ALE tylko gdy to prawda. Fałszywa presja czasowa wychodzi na jaw i niszczy zaufanie natychmiast, gdy klient to sprawdzi.</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">7. Kontrast i jedność <span class="ico">+</span></div>
  <div class="acc-b"><p>Oceniamy przez porównanie („teraz 900 zł miesięcznie, po instalacji 150 zł" — kontrast robi robotę) i ufamy bardziej „swoim" („my tu lokalnie, z Państwa regionu" — poczucie wspólnoty).</p></div>
</div>

<div class="quiz">
  <div class="q">Klient waha się. Mówisz: „Aktualne dopłaty mają ograniczoną pulę środków, dlatego warto to sprawdzić teraz." Której zasady Cialdiniego to przykład — i jaki jest warunek, by jej używać etycznie?</div>
  <button class="opt" data-ok="1" onclick="quizPick(this,true,'Dokładnie — niedobór. Warunek etyczny: to musi być PRAWDZIWA informacja, nie wymyślona presja czasowa.','')">Niedobór — pod warunkiem, że to prawdziwa, sprawdzalna informacja</button>
  <button class="opt" data-ok="0" onclick="quizPick(this,false,'','To dowód społeczny dotyczy \"inni już to mają\" — tu chodzi o ograniczoną dostępność, czyli niedobór.')">Dowód społeczny — zawsze można to powiedzieć, nawet jeśli nie jest prawdą</button>
  <div class="fb"></div>
</div>
`;
