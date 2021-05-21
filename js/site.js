let MonsterList = ["Aknosom", "Almudron", "Anjanath", "Apex Azuros", "Arzuros", "Barioth", "Barroth",
    "Bazelgeuse", "Basarios", "Bishaten", "Chameleos", "Apex Diablos", "Diablos", "Goss Harag", "Great Baggi",
    "Great Izuchi", "Great Wroggi", "Jyuratodus", "Khezu", "Kulu-Ya-Ku", "Kushala Daora", "Lagombi", "Magnamalo",
    "Apex Mizutsune", "Mizutsune", "Nargacuga", "Pukei-Pukei", "Rajang", "Rakna-Kadaki", "Apex Rathalos",
    "Rathalos", "Apex Rathian", "Rathian", "Royal Ludroth", "Somnacanth", "Teostra", "Tetranadon", "Tigrex",
    "Tobi-Kadachi", "Volvidon", "Zinogre", "Thunder Serpent Narwa", "Wind Serpent Ibushi"
];
let WeaponsList = ["Bow", "Charge Blade", "Dual Blades", "Great Sword", "Gunlance", "Hammer", "Heavy Bowgun",
    "Hunting Horn", "Insect Glaive", "Lance", "Light Bowgun", "Long Sword", "Switch Axe", "Sword and Shield"
];

let weapons = ["", "", "", ""];
let players = ["playerOne", "playerTwo", "playerThree", "playerFour"];

function GenerateMonster() {
    let index = GetRandomInt(1, (MonsterList.length + 1));

    document.getElementById("chosenOne").textContent = MonsterList[index];
    return MonsterList[index];
}

function WeaponPicker(player) {
    //let weaponOne = document.getElementById("playerOne").textContent;

    let index = GetRandomInt(1, (WeaponsList.length + 1));
    weapons[player] = WeaponsList[index];
    let mem = players[player];

    if (weapons[player] == null) {
        weapons[player] = "Hunting Horn";
    }
    document.getElementById(mem).textContent = WeaponsList[index];
}

function GetRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}