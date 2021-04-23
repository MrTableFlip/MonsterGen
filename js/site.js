let MonsterList = ["Aknosom", "Almudron", "Anjanath", "Arzuros", "Barioth", "Barroth", "Basarios",
    "Bishaten", "Chameleos", "Diablos", "Goss Harag", "Great Baggi", "Great Izuchi", "Great Wroggi",
    "Jyuratodus", "Khezu", "Kulu-Ya-Ku", "Lagombi", "Magnamalo", "Mizutsune", "Nargacuga", "Pukei-Pukei",
    "Rajang", "Rakna-Kadaki", "Rathalos", "Rathian", "Royal Ludroth", "Somnacanth", "Tetranadon", "Tigrex",
    "Tobi-Kadachi", "Volvidon", "Zinogre", "Thunder Serpent Narwa", "Wind Serpent Ibushi"
]

function GenerateMonster() {
    let index = GetRandomInt(1, (MonsterList.length + 1));
    document.getElementById("chosenOne").textContent = MonsterList[index];
}

function GetRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}