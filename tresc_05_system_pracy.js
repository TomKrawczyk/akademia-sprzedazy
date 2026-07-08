/* ===== AKADEMIA SPRZEDAZY - CZESC: 05_system_pracy ===== */

CONTENT.skrypty = `
<span class="eyebrow">Moduł 20 · System pracy</span>
<h2>Gotowe skrypty rozmów OZE</h2>
<p class="lede">Skrypt to drogowskaz, nie elementarz do wyuczenia na pamięć (Rogers: autentyczność). Poznaj strukturę, mów naturalnie, dopasuj słowa do siebie.</p>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Skrypt A — Fotowoltaika, dom, lead ciepły (klasyczna ścieżka) <span class="ico">+</span></div>
  <div class="acc-b">
    <div class="scene">
      <div class="bubble c"><span class="who">Otwarcie</span>Dzień dobry! [Imię] z [firma]. Dzwonię, bo wypełniał Pan u nas ankietę w sprawie fotowoltaiki. Mam chwilę, żeby powiedzieć, ile realnie da się u Państwa zaoszczędzić — pasuje?</div>
      <div class="bubble c"><span class="who">Badanie</span>Żeby nie mówić ogólników — ile z grubsza wychodzi Państwu miesięcznie za prąd? Dom jest Państwa własnością? Dach bardziej od południa czy wschód-zachód?</div>
      <div class="bubble c"><span class="who">Korzyść</span>To macie idealny profil. Przy takim rachunku fotowoltaika pokryłaby większość zużycia — zamiast [X] złotych płacilibyście koło [Y]. Do tego są aktualne dopłaty, które skracają zwrot do kilku lat.</div>
      <div class="bubble c"><span class="who">Finalizacja</span>Proponuję bezpłatny audyt — doradca przyjedzie, zrobi pomiar, da dokładną kwotę oszczędności. Zero zobowiązań. Pasuje bardziej wtorek przed południem czy czwartek po piętnastej?</div>
      <div class="bubble c"><span class="who">Potwierdzenie</span>Świetnie, zapisuję: czwartek 15:30, doradca [imię]. Wyślę SMS z potwierdzeniem i przypomnę dzień wcześniej. Miłego dnia!</div>
    </div>
  </div>
</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Skrypt B — Pompa ciepła, dom (hak przez dotację) <span class="ico">+</span></div>
  <div class="acc-b">
    <div class="scene">
      <div class="bubble c"><span class="who">Otwarcie</span>Dzień dobry! [Imię], [firma]. Dzwonię w sprawie aktualnych dopłat do pomp ciepła — nie każdy wie, że wciąż można z nich skorzystać. Mogę w skrócie powiedzieć, ile to u Państwa może oznaczać?</div>
      <div class="bubble c"><span class="who">Badanie</span>Czym Państwo teraz ogrzewają dom — węgiel, gaz? Ile schodzi na ogrzewanie przez cały sezon?</div>
      <div class="bubble c"><span class="who">Korzyść</span>Pompa ciepła obcięłaby ten koszt jakieś 3-4 razy — bez dymu, bez noszenia węgla, bez pilnowania pieca. A z dopłatą wejście jest sporo tańsze, niż większość osób myśli.</div>
      <div class="bubble c"><span class="who">Finalizacja</span>Umówię bezpłatny audyt — doradca policzy dokładnie pod Wasz dom. Rano czy popołudniu wygodniej?</div>
    </div>
  </div>
</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Skrypt C — Magazyn energii (klient już ma fotowoltaikę) <span class="ico">+</span></div>
  <div class="acc-b">
    <div class="scene">
      <div class="bubble c"><span class="who">Otwarcie</span>Dzień dobry! [Imię], [firma]. Dzwonię, bo widzę, że mają Państwo już fotowoltaikę — i właśnie do takich osób dzwonię najchętniej. Da się często dołożyć magazyn energii i wycisnąć dużo więcej z tego, co już macie. Mogę wyjaśnić w skrócie?</div>
      <div class="bubble c"><span class="who">Korzyść</span>Teraz nadwyżkę z dnia oddajecie do sieci za grosze, a wieczorem odkupujecie drożej. Magazyn to zatrzymuje — prąd z dnia zużywacie u siebie wieczorem. To realnie kolejne kilkaset złotych oszczędności rocznie.</div>
      <div class="bubble c"><span class="who">Finalizacja</span>Zróbmy bezpłatny audyt — sprawdzę, czy u Państwa magazyn się opłaca i w ile się zwróci. Wtorek czy czwartek?</div>
    </div>
  </div>
</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Skrypt D — Metoda Challenger (klient sceptyczny, "już się zna") <span class="ico">+</span></div>
  <div class="acc-b">
    <div class="scene">
      <div class="bubble c"><span class="who">Teach</span>Dzień dobry! [Imię], [firma]. Zanim cokolwiek — jedna rzecz, o której mało kto wie: w rachunku za prąd nawet 40% to opłaty dystrybucyjne, które i tak rosną co roku. I to je fotowoltaika tnie najmocniej. Sprawdzał Pan kiedyś, ile u Państwa to konkretnie?</div>
      <div class="bubble c"><span class="who">Tailor</span>[dopasuj do profilu: emeryt → bezpieczeństwo budżetu / firma → marża i przewaga nad konkurencją]</div>
      <div class="bubble c"><span class="who">Take Control</span>Nie ma sensu zgadywać. Bezpłatny audyt da twarde liczby — logiczny następny krok. Wtorek czy czwartek?</div>
    </div>
  </div>
</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Skrypt E — Neutralne otwarcie, lead zimny (zgodny z PKE) <span class="ico">+</span></div>
  <div class="acc-b">
    <div class="scene">
      <div class="bubble c"><span class="who">Konsultant</span>Dzień dobry, [Imię], [firma]. Dzwonię w sprawie kosztów energii — zanim cokolwiek powiem, chcę spytać: czy mogę Panu przedstawić w skrócie, o co chodzi?</div>
      <div class="note">Jeśli TAK → masz zgodę na rozmowę, przechodzisz do haka i badania potrzeb. Jeśli NIE → "Rozumiem, przepraszam za kłopot, miłego dnia" + otaguj kontakt.</div>
    </div>
  </div>
</div>
`;

CONTENT.kpi = `
<span class="eyebrow">Moduł 21 · System pracy</span>
<h2>KPI konsultanta — Twój panel kontrolny</h2>
<p class="lede">W call center wszystko jest mierzone. Znajomość własnych wskaźników to nie biurokracja — to podstawa świadomego rozwoju i premii.</p>

<div class="tbl-wrap"><table class="tbl">
<tr><th>Wskaźnik</th><th>Co oznacza</th><th>Do czego dążyć</th></tr>
<tr><td>Liczba połączeń dziennie</td><td>Ile numerów wybrał dialer</td><td>Zgodnie z normą zespołu</td></tr>
<tr><td>Rozmowy efektywne</td><td>Realne rozmowy, nie "nie odbiera"</td><td>Im więcej, tym lepiej</td></tr>
<tr><td>Konwersja</td><td>Procent rozmów kończących się sukcesem</td><td>Rośnie z doświadczeniem i praktyką z tego kursu</td></tr>
<tr><td>AHT (śr. czas rozmowy)</td><td>Ile trwa typowa rozmowa</td><td>Nie za krótko (płytkie badanie potrzeb), nie za długo (przegadanie)</td></tr>
<tr><td>Umówienia dziennie</td><td>Kluczowy KPI dla działu OZE</td><td>Główny cel każdej zmiany</td></tr>
<tr><td>Show-rate</td><td>Procent umówionych, którzy dotrwali do audytu</td><td>Jakość umówień ważniejsza niż ich ilość</td></tr>
<tr><td>DNC / skargi</td><td>Odmowy, żądania usunięcia z bazy</td><td>Im mniej, tym lepiej — to też miernik jakości pracy</td></tr>
<tr><td>Occupancy</td><td>Procent czasu spędzonego na słuchawce</td><td>Wysoki wskaźnik = dobra wydajność zmiany</td></tr>
</table></div>

<div class="warn"><b>Ważne ostrzeżenie:</b> nie oszukuj statystyki. Umawianie "na siłę" ludzi, którzy nigdy nie przyjdą na audyt, psuje show-rate i marnuje czas handlowca, który jedzie na pusty adres. Jakość umówienia zawsze ważniejsza niż sama ilość — handlowiec zapamięta konsultanta, który umawia realnie zainteresowanych klientów.</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Przykład z życia — jak jeden wskaźnik zmienił podejście całego zespołu <span class="ico">+</span></div>
  <div class="acc-b"><p>Zespół w jednym z działów OZE przez miesiąc skupiał się wyłącznie na liczbie umówień dziennie, ignorując show-rate. Efekt: dużo umówień, ale handlowcy jeździli na puste adresy, bo klienci "zapominali" o wizycie, której właściwie nie chcieli. Gdy lider zespołu zaczął premiować show-rate zamiast samej liczby umówień, konsultanci zaczęli dokładniej kwalifikować leady i mocniej domykać ZGODĘ na konkretny termin (nie tylko "może kiedyś") — łączna liczba zrealizowanych audytów faktycznie wzrosła, mimo że liczba samych umówień lekko spadła.</p></div>
</div>
`;

CONTENT.cwiczenia = `
<span class="eyebrow">Moduł 22 · System pracy</span>
<h2>Ćwiczenia praktyczne i 15 przykazań mistrza</h2>
<p class="lede">Wiedza bez praktyki nie zmienia wyników. Oto konkretne ćwiczenia do wykonywania regularnie oraz podsumowanie całego kursu w formie łatwych do zapamiętania zasad.</p>

<h3>Checklista przed zmianą</h3>
<ul>
  <li>Woda pod ręką, głos rozgrzany (przeczytaj coś na głos, pomrucz)</li>
  <li>Skrypter, CRM, dialer otwarte i działają poprawnie</li>
  <li>Znam cel zmiany — liczbę rozmów i umówień</li>
  <li>Znam produkt i aktualne dotacje/ceny na dziś</li>
  <li>Postawa wyprostowana, uśmiech gotowy</li>
</ul>

<h3>Checklista w trakcie każdej rozmowy</h3>
<ul>
  <li>Energiczne otwarcie zgodnie z regułą 4×20</li>
  <li>Zgoda na rozmowę zabezpieczona (zgodność z PKE)</li>
  <li>Szybka kwalifikacja BANT — czy to w ogóle lead?</li>
  <li>Słucham 70% czasu, rozpoznaję poziom piramidy Maslowa u klienta</li>
  <li>Prezentacja skupiona na JEGO bólu, jednym mocnym argumencie na raz</li>
  <li>Obiekcje zbijam metodą Feel-Felt-Found, próbuję domknąć 2-3 razy</li>
  <li>Umawiam konkretny termin techniką wyboru pozornego</li>
  <li>Potwierdzam szczegóły i taguję rozmowę w CRM</li>
</ul>

<h3>5 ćwiczeń do wykonywania codziennie</h3>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">1. Odsłuch własnych nagrań <span class="ico">+</span></div>
  <div class="acc-b"><p>Odsłuchaj 3-5 własnych nagrań dziennie. Zwracaj uwagę na: energię w pierwszych sekundach, częstotliwość "yyy" i innych wypełniaczy, pewność głosu przy podawaniu ceny, długość i jakość pauz.</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">2. Roleplay z kolegą z zespołu <span class="ico">+</span></div>
  <div class="acc-b"><p>Jedna osoba gra opryskliwego, trudnego klienta, druga ćwiczy zbijanie obiekcji na żywo. Zamieniajcie się rolami — granie trudnego klienta też uczy, jak myśli druga strona.</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">3. Rozbudowa banku obiekcji <span class="ico">+</span></div>
  <div class="acc-b"><p>Za każdym razem, gdy usłyszysz nową, nietypową obiekcję — zapisz ją razem z odpowiedzią, która zadziałała (albo powinna była zadziałać). Twój osobisty bank obiekcji z czasem staje się potężniejszy niż jakikolwiek gotowy skrypt.</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">4. Trening różnych haków na uwagę <span class="ico">+</span></div>
  <div class="acc-b"><p>Wymyśl 5 różnych otwarć rozmowy na ten sam produkt, korzystając z różnych technik (korzyść, konfuzja, luka informacyjna, dowód społeczny, niedobór). Testuj, które najlepiej pasują do Twojego naturalnego stylu mówienia.</p></div>
</div>
<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">5. Trening wglądów w stylu Challenger <span class="ico">+</span></div>
  <div class="acc-b"><p>Wymyśl 3 "zaskakujące fakty" o rachunkach za energię, którymi możesz nauczyć klienta czegoś nowego w pierwszych sekundach rozmowy metodą Teach.</p></div>
</div>

<h3>15 przykazań mistrza call center</h3>
<div class="card">
<ol>
  <li>Zrozum umysł, zanim otworzysz usta — jedna myśl na raz (Wundt)</li>
  <li>Obiekcja to mechanizm obronny, nie prawda (Freud) — rozbrój napięcie, zanim wejdziesz w argumenty</li>
  <li>Trafiaj w poziom piramidy klienta (Maslow) — w OZE zwykle bezpieczeństwo</li>
  <li>Słuchaj 70% czasu — empatia i autentyczność otwierają człowieka (Rogers)</li>
  <li>Używaj 7 zasad wpływu etycznie (Cialdini) — zawsze z realną wartością w tle</li>
  <li>Legalność najpierw — zgoda, nagranie, DNC to nie formalność, to prawo (PKE/RODO)</li>
  <li>Obraz siebie to Twój sufit wyników (Tracy) — jesteś doradcą, nie żebrakiem</li>
  <li>Działaj dziesięciokrotnie (Cardone) — statystyka nagradza wytrwałych</li>
  <li>Reguła 4×20 — pierwsze sekundy rozmowy decydują o wszystkim</li>
  <li>Głos to wszystko — energia, uśmiech, pauzy, prowadzenie po linii prostej (Belfort)</li>
  <li>Nie pytaj tylko — ucz klienta czegoś nowego (Challenger: Teach, Tailor, Take Control)</li>
  <li>Ludzie nie lubią, gdy im się sprzedaje — uwielbiają kupować (Gitomer)</li>
  <li>Zawsze najpierw zgódź się z klientem, dopiero potem argumentuj (Cardone)</li>
  <li>Dąż do zamknięcia. Domykaj wielokrotnie. To Ty proponujesz termin</li>
  <li>To maraton, nie sprint. Dbaj o głos i głowę. Wracaj z energią po każdym "nie"</li>
</ol>
</div>

<div class="quote" style="text-align:center;font-size:16px">Gratulacje — ukończyłeś pełną Akademię Sprzedaży Telefonicznej 4ECO. Teraz czas przełożyć to na słuchawkę.</div>
`;
