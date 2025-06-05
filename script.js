const questions = [
  {
    question: "Mi a VPN (Virtuális Privát Hálózat) célja?",
    a: { text: "A:Az internetes kapcsolat titkosítása és a személyes adatok védelme", value: 1 },
    b: { text: "B:Az internet sebességének növelése", value: 2 }
  },
  {
    question: "Mi a VPN (Virtuális Privát Hálózat) célja?",
    a: { text: "A:Az internetes kapcsolat titkosítása és a személyes adatok védelme", value: 1 },
    b: { text: "B:Az internet sebességének növelése", value: 2 }
  },
  {
    question: "Melyik jelszó számít erősnek?",
    a: { text: "A:12345", value: 2 },
    b: { text: "B:Egy nagy- és kisbetűkből, számokból és speciális karakterekből álló kombináció", value: 1 }
  },
  {
    question: "Mi a phishing (adathalászat)?",
    a: { text: "A:Egy internetes horgászat típus", value: 2 },
    b: { text: "B:Olyan csalás, amikor valaki megbízható entitásnak adja ki magát, hogy személyes adatokat szerezzen", value: 1 }
  },
  {
    question: "Mit ad hozzá a 'kétfaktoros hitelesítés' (2FA) az online biztonságodhoz?",
    a: { text: "A:Az adataid titkosítását", value: 2 },
    b: { text: "B:Egy extra védelmi réteget, ami kétféle azonosítót kér", value: 1 }
  },
  {
    question: "Melyik alkalmazásban nőtt gyorsabban a videós tartalmak népszerűsége az elmúlt években?",
    a: { text: "A:Youtube", value: 2 },
    b: { text: "B:Tiktok", value: 1 }
  },
  {
    question: "Mit jelent a 'digitális lábnyom'?",
    a: { text: "A:Az internetes tevékenységed során hátrahagyott adatok", value: 1 },
    b: { text: "B:Az általad birtokolt eszközök számát", value: 2 }
  },
  {
    question: "Melyik eszközt használJÁk a legtöbben a digitális detox céljára?",
    a: { text: "A:Telefonos alkalmazások", value: 1 },
    b: { text: "B:Okosórák", value: 2 }
  },
  {
    question: "Melyik országban fordították a legtöbb figyelmet a digitális jólétre és a képernyőhasználat szabályozására 2023-ban?",
    a: { text: "A:Dánia", value: 2 },
    b: { text: "B:Finország", value: 1 }
  },
  {
    question: "Mi az a malware?",
    a: { text: "A:Olyan rosszindulatú szoftver, amely a készüléket vagy a hálózatot károsítja vagy kihasználja", value: 1 },
    b: { text: "B:Egy internetes protokoll típusa", value: 2 }
  },
  {
    question: "Melyik megoldás nem segít biztonságban tartani az online fiókjaidat?",
    a: { text: "A:Különböző, bonyolult jelszavakat használok minden fiókhoz, és engedélyezem a kétfaktoros hitelesítést", value: 2 },
    b: { text: "B:Ugyanazt a jelszót használom minden fiókhoz", value: 1 }
  },
  {
    question: "Hogyan ismerheted fel a hamis weboldalt?",
    a: { text: "A:Ha az URL NEM 'https' kezdetű, és mellette lakat ikon NEM látható", value: 1 },
    b: { text: "B:Ha egyszerű dizájnja van", value: 2 }
  },
  {
    question: " Mit tegyél, ha egy ismeretlen feladótól kapsz emailt, amely személyes adatokat kér?",
    a: { text: "A:Kattints a linkekre, hogy megbizonyosodj az email hitelességéről", value: 2 },
    b: { text: "B:Töröld az emailt, és ne kattints a linkekre", value: 1 }
  },
  {
    question: "Miért fontos rendszeresen frissíteni a szoftvereidet és az eszközeidet?",
    a: { text: "A:A biztonsági réseket javítja és megvédi a készüléket a kiber támadásoktól", value: 1 },
    b: { text: "B:Hogy új külsőt adjon a készüléknek", value: 2 }
  },
  {
    question: "Mi segíthet megvédeni a magánéletedet online?",
    a: { text: "A:Rendszeresen ellenőrizni és beállítani a közösségi média adatvédelmi beállításait", value: 1 },
    b: { text: "B:Ugyanazt a jelszót használni több weboldalon", value: 2 }
  },
  {
    question: "Mi az a tűzfal (firewall)?",
    a: { text: "A:Egy olyan szoftver, amely gyorsítja az internet kapcsolatot", value: 2 },
    b: { text: "B:Olyan biztonsági rendszer, amely megakadályozza az illetéktelen hozzáférést egy számítógéphez vagy hálózathoz", value: 1 }
  },
  {
    question: "Melyik a legbiztonságosabb gyakorlat, ha nyilvános Wi-Fi-t használsz?",
    a: { text: "A:VPN-t használok, hogy védjem az adataimat, amikor nyilvános Wi-Fi hálózathoz csatlakozom", value: 1 },
    b: { text: "B:Mindig személyes fiókokat nyitok VPN használata nélkül", value: 2 }
  }
  
];

let index = 0;
let score = 0;

function showQuestion() {
  if (index >= questions.length) {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("endScreen").classList.remove("hidden");
    document.getElementById("finalScore").textContent = `Elért pontszámod: ${score} / ${questions.length}`;
    return;
  }
  const q = questions[index];
  document.getElementById("question").textContent = q.question;
  document.getElementById("optionA").textContent = q.a.text;
  document.getElementById("optionB").textContent = q.b.text;
  document.getElementById("score").textContent = `Pontszám: ${score}`;
  document.getElementById("result").textContent = "";
}

function answer(choice) {
  const q = questions[index];
  const correct = (choice === "higher" && q.b.value > q.a.value) ||
                  (choice === "lower" && q.b.value < q.a.value);
  if (correct) {
    score++;
    document.getElementById("result").textContent = "✅ Helyes!";
  } else {
    document.getElementById("result").textContent = "❌ Téves!";
  }
  index++;
  setTimeout(showQuestion, 1000);
}

function restart() {
  index = 0;
  score = 0;
  document.getElementById("endScreen").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  showQuestion();
}

showQuestion();