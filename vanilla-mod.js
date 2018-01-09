const setupVanillaPretenders = () => {
    const vanilla_pretenders_data = {
    "1025": {
        "S": "2",
        "name": "Divine Glyph",
        "pathcost": "40",
        "pointcost": 120,
        "startdom": "4"
    },
    "1026": {
        "N": "1",
        "name": "Carrion Dragon",
        "pathcost": "80",
        "pointcost": 150,
        "shapechange": "1027",
        "startdom": "2"
    },
    "1027": {
        "N": "1",
        "name": "Carrion Lord",
        "pathcost": "80",
        "pointcost": null,
        "shapechange": "1026",
        "startdom": "2"
    },
    "109": {
        "E": "2",
        "W": "1",
        "name": "Dagon",
        "pathcost": "60",
        "pointcost": 290,
        "realm1": "9",
        "startdom": "3"
    },
    "1096": {
        "A": "2",
        "name": "Destroyer of Worlds",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "8",
        "startdom": "3"
    },
    "1097": {
        "name": "Lord of The Summer Plague",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "5",
        "startdom": "3"
    },
    "1098": {
        "A": "2",
        "E": "1",
        "name": "Asynja",
        "pathcost": "60",
        "pointcost": 250,
        "realm1": "1",
        "startdom": "3"
    },
    "120": {
        "B": "1",
        "name": "Moloch",
        "pathcost": "80",
        "pointcost": 280,
        "realm1": "5",
        "startdom": "2"
    },
    "1229": {
        "N": "1",
        "W": "1",
        "name": "Son of Fenrer",
        "pathcost": "80",
        "pointcost": 150,
        "realm1": "1",
        "startdom": "2"
    },
    "1230": {
        "E": "2",
        "name": "Forge Lord",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "3",
        "startdom": "3"
    },
    "1231": {
        "N": "1",
        "W": "1",
        "name": "Drakaina",
        "pathcost": "60",
        "pointcost": 260,
        "realm1": "9",
        "startdom": "3"
    },
    "1232": {
        "S": "1",
        "W": "2",
        "name": "Old Man of the Sea",
        "pathcost": "30",
        "pointcost": 270,
        "realm1": "9",
        "startdom": "3"
    },
    "1233": {
        "A": "1",
        "N": "1",
        "W": "1",
        "name": "Lord of the Waves",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "9",
        "startdom": "3"
    },
    "1339": {
        "E": "2",
        "S": "1",
        "name": "Nyorai",
        "pathcost": "60",
        "pointcost": 220,
        "realm1": "4",
        "startdom": "3"
    },
    "1340": {
        "A": "1",
        "E": "1",
        "name": "Tiwaz of War",
        "pathcost": "60",
        "pointcost": 240,
        "startdom": "3"
    },
    "1341": {
        "B": "2",
        "E": "1",
        "name": "Devi of Darkness",
        "pathcost": "60",
        "pointcost": 260,
        "realm1": "8",
        "startdom": "3"
    },
    "1342": {
        "S": "1",
        "W": "2",
        "name": "Titan of Rivers",
        "pathcost": "60",
        "pointcost": 250,
        "realm1": "3",
        "startdom": "3"
    },
    "1343": {
        "N": "2",
        "W": "1",
        "name": "Titan of Love",
        "pathcost": "60",
        "pointcost": 260,
        "realm1": "3",
        "startdom": "3"
    },
    "1344": {
        "S": "2",
        "W": "1",
        "name": "Devi of Good Fortunes",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "8",
        "startdom": "3"
    },
    "1345": {
        "A": "1",
        "E": "1",
        "S": "1",
        "name": "Celestial General",
        "pathcost": "60",
        "pointcost": 250,
        "realm1": "4",
        "startdom": "3"
    },
    "1346": {
        "E": "2",
        "N": "1",
        "name": "Colossal Fetish",
        "pathcost": "40",
        "pointcost": 270,
        "startdom": "4"
    },
    "1348": {
        "N": "2",
        "name": "Titan of Serpents and Medicine",
        "pathcost": "60",
        "pointcost": 260,
        "realm1": "3",
        "startdom": "3"
    },
    "1349": {
        "E": "1",
        "name": "Devourer of Souls",
        "pathcost": "80",
        "pointcost": 140,
        "startdom": "2"
    },
    "1370": {
        "N": "1",
        "W": "2",
        "name": "Volla of the Bountiful Forest",
        "pathcost": "60",
        "pointcost": 210,
        "startdom": "3"
    },
    "1371": {
        "E": "1",
        "N": "1",
        "name": "Titan of Death and Rebirth",
        "pathcost": "60",
        "pointcost": 230,
        "realm1": "3",
        "startdom": "3"
    },
    "1372": {
        "A": "3",
        "name": "Annunaki of the Sky",
        "pathcost": "60",
        "pointcost": 280,
        "realm1": "5",
        "startdom": "3"
    },
    "1373": {
        "E": "1",
        "W": "2",
        "name": "Annunaki of Sweet Waters",
        "pathcost": "60",
        "pointcost": 250,
        "realm1": "5",
        "startdom": "3"
    },
    "1374": {
        "A": "1",
        "E": "1",
        "S": "1",
        "name": "Annunaki of the Morning Star",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "5",
        "startdom": "3"
    },
    "1378": {
        "E": "1",
        "N": "2",
        "name": "Lord of the Forest",
        "pathcost": "60",
        "pointcost": 210,
        "realm1": "2",
        "startdom": "3"
    },
    "1379": {
        "A": "1",
        "E": "1",
        "N": "1",
        "name": "Keeper of the Bridge",
        "pathcost": "60",
        "pointcost": 220,
        "realm1": "1",
        "startdom": "3"
    },
    "138": {
        "E": "2",
        "N": "1",
        "name": "Gorgon",
        "pathcost": "80",
        "pointcost": 240,
        "realm1": "3",
        "startdom": "2"
    },
    "1384": {
        "name": "Solar Disc",
        "pathcost": "60",
        "pointcost": 230,
        "realm1": "5",
        "startdom": "3"
    },
    "1402": {
        "S": "2",
        "W": "1",
        "name": "Polypal Queen",
        "pathcost": "20",
        "pointcost": 170,
        "startdom": "4"
    },
    "1428": {
        "name": "Bakemono Kunshu",
        "pathcost": "40",
        "pointcost": 150,
        "startdom": "1"
    },
    "156": {
        "E": "3",
        "name": "Cyclops",
        "pathcost": "60",
        "pointcost": 280,
        "realm1": "3",
        "startdom": "3"
    },
    "1561": {
        "A": "1",
        "W": "2",
        "name": "Father of Winters",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "1",
        "startdom": "3"
    },
    "157": {
        "B": "1",
        "N": "1",
        "name": "Mother of Monsters",
        "pathcost": "60",
        "pointcost": 220,
        "realm1": "3",
        "startdom": "3"
    },
    "158": {
        "S": "2",
        "W": "1",
        "name": "Oracle",
        "pathcost": "40",
        "pointcost": 150,
        "realm1": "10",
        "startdom": "4"
    },
    "1581": {
        "E": "1",
        "name": "Risen Oracle",
        "pathcost": "60",
        "pointcost": 240,
        "startdom": "2"
    },
    "159": {
        "E": "2",
        "S": "1",
        "name": "Monument",
        "pathcost": "40",
        "pointcost": 140,
        "realm1": "7",
        "startdom": "4"
    },
    "1590": {
        "E": "1",
        "W": "1",
        "name": "Ageless Olm",
        "pathcost": "60",
        "pointcost": 130,
        "startdom": "2"
    },
    "179": {
        "name": "Master Lich",
        "pathcost": "40",
        "pointcost": 240,
        "realm1": "10",
        "startdom": "2"
    },
    "180": {
        "name": "Demilich",
        "pathcost": "20",
        "pointcost": 120,
        "realm1": "10",
        "startdom": "3"
    },
    "1896": {
        "A": "1",
        "N": "1",
        "S": "1",
        "name": "Lawgiver",
        "pathcost": "40",
        "pointcost": 80,
        "shapechange": "1897",
        "startdom": "1"
    },
    "1897": {
        "A": "1",
        "N": "1",
        "S": "1",
        "name": "Feathered Serpent",
        "pathcost": "40",
        "pointcost": null,
        "shapechange": "1896",
        "startdom": "1"
    },
    "1898": {
        "A": "1",
        "name": "Fomorian Sorcerer",
        "pathcost": "20",
        "pointcost": 110,
        "startdom": "1"
    },
    "1899": {
        "W": "1",
        "name": "Fomorian God King",
        "pathcost": "60",
        "pointcost": 290,
        "startdom": "3"
    },
    "1905": {
        "A": "1",
        "name": "Great Sorceress",
        "pathcost": "10",
        "pointcost": 110,
        "startdom": "1"
    },
    "2082": {
        "B": "3",
        "name": "Son of the Fallen",
        "pathcost": "60",
        "pointcost": 260,
        "startdom": "3"
    },
    "2137": {
        "A": "1",
        "S": "1",
        "name": "Urmahlullu",
        "pathcost": "60",
        "pointcost": 180,
        "realm1": "5",
        "startdom": "2"
    },
    "2138": {
        "S": "1",
        "name": "Sphinx",
        "pathcost": "60",
        "pointcost": 190,
        "realm1": "5",
        "startdom": "2"
    },
    "215": {
        "A": "2",
        "name": "Virtue",
        "pathcost": "80",
        "pointcost": 240,
        "startdom": "2"
    },
    "216": {
        "name": "Dragon",
        "pathcost": "80",
        "pointcost": 240,
        "realm1": "10",
        "shapechange": "226",
        "startdom": "2"
    },
    "2202": {
        "A": "1",
        "S": "2",
        "name": "Great Siddha",
        "pathcost": "80",
        "pointcost": 160,
        "realm1": "8",
        "startdom": "2"
    },
    "2203": {
        "E": "1",
        "name": "Oni Kunshu",
        "pathcost": "60",
        "pointcost": 250,
        "startdom": "3"
    },
    "2205": {
        "name": "Great Sauromancer",
        "pointcost": 90,
        "startdom": "1"
    },
    "2206": {
        "E": "1",
        "name": "Eldest Dwarf",
        "pathcost": "20",
        "pointcost": 80,
        "realm1": "1",
        "startdom": "1"
    },
    "2207": {
        "name": "Great Sorcerer",
        "pathcost": "10",
        "pointcost": 80,
        "startdom": "1"
    },
    "2234": {
        "N": "3",
        "name": "Irminsul",
        "pathcost": "60",
        "pointcost": 170,
        "realm1": "1",
        "startdom": "4"
    },
    "2239": {
        "A": "1",
        "N": "2",
        "name": "Asynja",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "1",
        "startdom": "3"
    },
    "226": {
        "name": "Arch Mage",
        "pathcost": "80",
        "pointcost": 90,
        "realm1": "10",
        "shapechange": "216",
        "startdom": "2"
    },
    "2315": {
        "B": "3",
        "name": "Melqart",
        "pathcost": "60",
        "pointcost": 230,
        "startdom": "2"
    },
    "2316": {
        "W": "2",
        "name": "Dragon King",
        "pathcost": "60",
        "pointcost": 200,
        "realm1": "4",
        "shapechange": "2317",
        "startdom": "2"
    },
    "2317": {
        "W": "2",
        "name": "Celestial Bureaucrat",
        "pathcost": "60",
        "pointcost": null,
        "shapechange": "2316",
        "startdom": "2"
    },
    "2318": {
        "A": "1",
        "S": "1",
        "name": "Celestial Dragon",
        "pathcost": "60",
        "pointcost": 200,
        "realm1": "4",
        "shapechange": "2319",
        "startdom": "2"
    },
    "2319": {
        "A": "1",
        "S": "1",
        "name": "Celestial Bureaucrat",
        "pathcost": "60",
        "pointcost": null,
        "shapechange": "2318",
        "startdom": "2"
    },
    "2426": {
        "E": "1",
        "name": "Bouda Father",
        "pathcost": "20",
        "pointcost": 110,
        "shapechange": "2427",
        "startdom": "1"
    },
    "2427": {
        "E": "1",
        "name": "Werehyena",
        "pathcost": "20",
        "pointcost": null,
        "shapechange": "2426",
        "startdom": "1"
    },
    "2431": {
        "E": "1",
        "name": "Titan of the Underworld",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "3",
        "startdom": "3"
    },
    "2434": {
        "B": "1",
        "E": "1",
        "N": "1",
        "name": "Teteo Inan",
        "pathcost": "60",
        "pointcost": 270,
        "realm1": "6",
        "startdom": "3"
    },
    "2435": {
        "A": "1",
        "E": "1",
        "N": "1",
        "name": "Annunaki of Love and War",
        "pathcost": "60",
        "pointcost": 260,
        "realm1": "5",
        "startdom": "3"
    },
    "2436": {
        "A": "1",
        "S": "2",
        "name": "Annunaki of the Moon",
        "pathcost": "60",
        "pointcost": 270,
        "realm1": "5",
        "startdom": "3"
    },
    "2437": {
        "E": "1",
        "N": "2",
        "name": "Annunaki of Growth and Rebirth",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "5",
        "startdom": "3"
    },
    "2438": {
        "name": "Annunaki of the Underworld",
        "pathcost": "60",
        "pointcost": 270,
        "realm1": "5",
        "startdom": "3"
    },
    "244": {
        "name": "Arch Mage",
        "pointcost": 90,
        "realm1": "10",
        "startdom": "1"
    },
    "2440": {
        "W": "2",
        "name": "Sea Dragon",
        "pathcost": "80",
        "pointcost": 140,
        "realm1": "9",
        "shapechange": "2441",
        "startdom": "2"
    },
    "2441": {
        "W": "2",
        "name": "Great Seer of the Deeps",
        "pathcost": "80",
        "pointcost": null,
        "shapechange": "2440",
        "startdom": "2"
    },
    "2442": {
        "B": "1",
        "N": "1",
        "name": "Teotl of War",
        "pathcost": "60",
        "pointcost": 250,
        "realm1": "6",
        "startdom": "3"
    },
    "2443": {
        "A": "1",
        "N": "1",
        "name": "Teotl of the Sky",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "6",
        "startdom": "3"
    },
    "2444": {
        "S": "1",
        "name": "Teotl of the Underworld",
        "pathcost": "60",
        "pointcost": 250,
        "realm1": "6",
        "startdom": "3"
    },
    "2445": {
        "name": "Neter of the Underworld",
        "pathcost": "60",
        "pointcost": 260,
        "realm1": "7",
        "startdom": "3"
    },
    "2446": {
        "S": "1",
        "W": "1",
        "name": "Neter of Kings",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "7",
        "startdom": "3"
    },
    "2447": {
        "A": "1",
        "N": "1",
        "name": "Idol of Men",
        "pathcost": "40",
        "pointcost": 150,
        "realm1": "1",
        "startdom": "4"
    },
    "2448": {
        "A": "1",
        "N": "2",
        "name": "Idol of Beasts",
        "pathcost": "40",
        "pointcost": 150,
        "realm1": "1",
        "startdom": "4"
    },
    "2449": {
        "S": "2",
        "name": "Idol of Sorcery",
        "pathcost": "40",
        "pointcost": 160,
        "realm1": "1",
        "startdom": "4"
    },
    "245": {
        "N": "1",
        "name": "Master Enchanter",
        "pointcost": 100,
        "realm1": "10",
        "startdom": "1"
    },
    "2450": {
        "N": "3",
        "name": "Horned One",
        "pathcost": "60",
        "pointcost": 250,
        "realm1": "2",
        "startdom": "3"
    },
    "2457": {
        "A": "2",
        "S": "1",
        "name": "Bodhisattva of Mercy",
        "pathcost": "80",
        "pointcost": 250,
        "realm1": "4",
        "startdom": "2"
    },
    "246": {
        "B": "1",
        "name": "Freak Lord",
        "pointcost": 100,
        "realm1": "10",
        "startdom": "1"
    },
    "2460": {
        "E": "1",
        "N": "2",
        "name": "Statue of Fertility",
        "pathcost": "40",
        "pointcost": 150,
        "realm1": "3",
        "startdom": "4"
    },
    "2461": {
        "B": "2",
        "N": "1",
        "name": "Statue of the Bloody Mother",
        "pathcost": "40",
        "pointcost": 160,
        "realm1": "6",
        "startdom": "4"
    },
    "2462": {
        "B": "1",
        "E": "2",
        "name": "Golden Idol",
        "pathcost": "40",
        "pointcost": 120,
        "realm1": "5",
        "startdom": "4"
    },
    "2463": {
        "E": "1",
        "name": "Statue of War",
        "pathcost": "40",
        "pointcost": 150,
        "realm1": "3",
        "startdom": "4"
    },
    "2464": {
        "S": "3",
        "name": "Neter of the Moon",
        "pathcost": "60",
        "pointcost": 260,
        "realm1": "7",
        "startdom": "3"
    },
    "2465": {
        "E": "1",
        "name": "Statue of War",
        "pathcost": "40",
        "pointcost": 150,
        "realm1": "4",
        "startdom": "4"
    },
    "2466": {
        "N": "1",
        "S": "1",
        "name": "Kamadhenu",
        "pathcost": "80",
        "pointcost": 240,
        "realm1": "8",
        "startdom": "2"
    },
    "248": {
        "W": "1",
        "name": "Arch Mage",
        "pointcost": 90,
        "realm1": "9",
        "startdom": "1"
    },
    "249": {
        "name": "Crone",
        "pointcost": 90,
        "realm1": "10",
        "startdom": "1"
    },
    "250": {
        "A": "1",
        "W": "1",
        "name": "Frost Father",
        "pointcost": 100,
        "realm1": "1",
        "startdom": "1"
    },
    "2502": {
        "E": "3",
        "W": "1",
        "name": "Earth made Flesh",
        "pathcost": "60",
        "pointcost": 280,
        "startdom": "3"
    },
    "2503": {
        "E": "3",
        "name": "Golden Pillar",
        "pathcost": "40",
        "pointcost": 150,
        "startdom": "4"
    },
    "251": {
        "S": "1",
        "name": "Great Sage",
        "pointcost": 100,
        "realm1": "10",
        "startdom": "1"
    },
    "2549": {
        "S": "1",
        "name": "Maharishi",
        "pointcost": 90,
        "realm1": "8",
        "startdom": "1"
    },
    "2550": {
        "B": "1",
        "N": "1",
        "name": "Raksharani",
        "pathcost": "40",
        "pointcost": 160,
        "shapechange": "2551",
        "startdom": "2"
    },
    "2551": {
        "B": "1",
        "N": "1",
        "name": "Manushya Raksharani",
        "pathcost": "40",
        "pointcost": null,
        "shapechange": "2550",
        "startdom": "2"
    },
    "2552": {
        "S": "3",
        "name": "Ahura of Wisdom",
        "pathcost": "60",
        "pointcost": 290,
        "startdom": "3"
    },
    "2553": {
        "S": "1",
        "name": "Ahura of the Oath",
        "pathcost": "80",
        "pointcost": 260,
        "startdom": "2"
    },
    "2554": {
        "S": "1",
        "W": "2",
        "name": "Ahura of the Waters",
        "pathcost": "80",
        "pointcost": 260,
        "startdom": "2"
    },
    "2555": {
        "A": "1",
        "S": "2",
        "name": "Spenta Mainyu",
        "pathcost": "80",
        "pointcost": 260,
        "startdom": "2"
    },
    "2556": {
        "S": "1",
        "W": "2",
        "name": "Celestial Carp",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "4",
        "startdom": "3"
    },
    "2578": {
        "A": "1",
        "S": "1",
        "W": "1",
        "name": "Yazad King",
        "pathcost": "40",
        "pointcost": 210,
        "startdom": "2"
    },
    "2608": {
        "name": "Azi",
        "pathcost": "80",
        "pointcost": 220,
        "shapechange": "2609",
        "startdom": "2"
    },
    "2609": {
        "name": "Great Warlock",
        "pathcost": "80",
        "pointcost": null,
        "shapechange": "2608",
        "startdom": "2"
    },
    "2610": {
        "B": "1",
        "name": "Angra Mainyu",
        "pathcost": "60",
        "pointcost": 280,
        "startdom": "3"
    },
    "2611": {
        "name": "Gannag Menog",
        "pathcost": "80",
        "pointcost": 250,
        "startdom": "2"
    },
    "2627": {
        "B": "1",
        "name": "Daeva of Wrath",
        "pathcost": "80",
        "pointcost": 240,
        "startdom": "2"
    },
    "265": {
        "W": "2",
        "name": "Dragon",
        "pathcost": "80",
        "pointcost": 220,
        "realm1": "10",
        "shapechange": "267",
        "startdom": "2"
    },
    "266": {
        "N": "2",
        "name": "Dragon",
        "pathcost": "80",
        "pointcost": 220,
        "realm1": "10",
        "shapechange": "268",
        "startdom": "2"
    },
    "267": {
        "W": "2",
        "name": "Frost Father",
        "pathcost": "80",
        "pointcost": null,
        "realm1": "10",
        "shapechange": "265",
        "startdom": "2"
    },
    "268": {
        "N": "2",
        "name": "Master Enchanter",
        "pathcost": "80",
        "pointcost": 100,
        "realm1": "10",
        "shapechange": "266",
        "startdom": "2"
    },
    "2685": {
        "A": "1",
        "W": "1",
        "name": "Viracocha",
        "pathcost": "60",
        "pointcost": 290,
        "startdom": "3"
    },
    "2686": {
        "name": "Apu Inti",
        "pathcost": "60",
        "pointcost": 290,
        "startdom": "3"
    },
    "269": {
        "E": "1",
        "W": "1",
        "name": "Wyrm",
        "pathcost": "80",
        "pointcost": 299,
        "realm1": "1",
        "startdom": "2"
    },
    "2693": {
        "A": "2",
        "name": "Heavenly Condor",
        "pathcost": "80",
        "pointcost": 180,
        "startdom": "2"
    },
    "2695": {
        "A": "1",
        "S": "1",
        "name": "Sapa Inca",
        "pathcost": "40",
        "pointcost": 200,
        "startdom": "2"
    },
    "2696": {
        "A": "1",
        "E": "2",
        "name": "Stone Huaca",
        "pathcost": "40",
        "pointcost": 120,
        "startdom": "4"
    },
    "2698": {
        "A": "3",
        "name": "Apu Illapa",
        "pathcost": "60",
        "pointcost": 280,
        "startdom": "3"
    },
    "2699": {
        "E": "2",
        "name": "Ayar",
        "pathcost": "80",
        "pointcost": 240,
        "startdom": "2"
    },
    "270": {
        "N": "1",
        "name": "Arch Druid",
        "pointcost": 90,
        "realm1": "2",
        "startdom": "1"
    },
    "2737": {
        "E": "1",
        "name": "Immortal Coya",
        "pathcost": "30",
        "pointcost": 160,
        "startdom": "2"
    },
    "2755": {
        "E": "1",
        "name": "Hun Came",
        "pathcost": "60",
        "pointcost": 290,
        "realm1": "6",
        "startdom": "3"
    },
    "2756": {
        "B": "1",
        "name": "Bolon-ti-ku",
        "pathcost": "80",
        "pointcost": 230,
        "realm1": "6",
        "startdom": "2"
    },
    "2764": {
        "B": "1",
        "name": "Hun Balam",
        "pathcost": "80",
        "pointcost": 170,
        "realm1": "6",
        "startdom": "2"
    },
    "2777": {
        "S": "1",
        "name": "Demon Macaw",
        "pathcost": "80",
        "pointcost": 170,
        "realm1": "6",
        "startdom": "2"
    },
    "2783": {
        "E": "1",
        "N": "1",
        "name": "Drakon",
        "pathcost": "80",
        "pointcost": 220,
        "realm1": "3",
        "startdom": "2"
    },
    "2784": {
        "E": "1",
        "N": "1",
        "name": "Thrice Horned Boar",
        "pathcost": "80",
        "pointcost": 150,
        "realm1": "2",
        "startdom": "2"
    },
    "2785": {
        "A": "1",
        "name": "Solar Eagle",
        "pathcost": "80",
        "pointcost": 230,
        "realm1": "10",
        "startdom": "2"
    },
    "2786": {
        "A": "2",
        "name": "Celestial Gryphon",
        "pathcost": "80",
        "pointcost": 180,
        "realm1": "5",
        "startdom": "2"
    },
    "2787": {
        "S": "1",
        "name": "Celestial Lion",
        "pathcost": "80",
        "pointcost": 160,
        "realm1": "5",
        "startdom": "2"
    },
    "2788": {
        "B": "1",
        "E": "1",
        "name": "Man-Eater",
        "pathcost": "80",
        "pointcost": 200,
        "realm1": "5",
        "startdom": "2"
    },
    "2789": {
        "name": "Raven of the Underworld",
        "pathcost": "80",
        "pointcost": 140,
        "realm1": "10",
        "startdom": "2"
    },
    "2790": {
        "E": "1",
        "name": "Myrmecoleon",
        "pathcost": "80",
        "pointcost": 150,
        "realm1": "7",
        "startdom": "2"
    },
    "2791": {
        "E": "2",
        "name": "Earth Serpent",
        "pathcost": "80",
        "pointcost": 240,
        "realm1": "10",
        "startdom": "2"
    },
    "2792": {
        "name": "Solar Serpent",
        "pathcost": "80",
        "pointcost": 180,
        "realm1": "7",
        "startdom": "2"
    },
    "2793": {
        "name": "Serpent of Chaos",
        "pathcost": "80",
        "pointcost": 230,
        "realm1": "7",
        "startdom": "2"
    },
    "2795": {
        "W": "1",
        "name": "Dog of the Underworld",
        "pathcost": "80",
        "pointcost": 120,
        "realm1": "2",
        "startdom": "2"
    },
    "2796": {
        "E": "1",
        "name": "Hound of Hades",
        "pathcost": "80",
        "pointcost": 170,
        "realm1": "3",
        "startdom": "2"
    },
    "2797": {
        "A": "1",
        "name": "Hieracosphinx",
        "pathcost": "80",
        "pointcost": 190,
        "realm1": "7",
        "startdom": "2"
    },
    "2798": {
        "A": "1",
        "N": "1",
        "name": "Criosphinx",
        "pathcost": "80",
        "pointcost": 120,
        "realm1": "7",
        "startdom": "2"
    },
    "2799": {
        "N": "1",
        "W": "1",
        "name": "Wadjet",
        "pathcost": "80",
        "pointcost": 170,
        "realm1": "7",
        "startdom": "2"
    },
    "2800": {
        "E": "1",
        "W": "1",
        "name": "Ormr",
        "pathcost": "80",
        "pointcost": 180,
        "realm1": "1",
        "startdom": "2"
    },
    "2801": {
        "W": "1",
        "name": "Linnormr",
        "pathcost": "80",
        "pointcost": 210,
        "realm1": "1",
        "startdom": "2"
    },
    "2802": {
        "E": "1",
        "name": "Svartalf Mastersmith",
        "pathcost": "20",
        "pointcost": 200,
        "realm1": "1",
        "shapechange": "2803",
        "startdom": "1"
    },
    "2803": {
        "E": "1",
        "name": "Linnormr",
        "pathcost": "20",
        "pointcost": null,
        "realm1": "1",
        "shapechange": "2802",
        "startdom": "1"
    },
    "2847": {
        "W": "3",
        "name": "Protogenos of the Sea",
        "pathcost": "80",
        "pointcost": 230,
        "realm1": "9",
        "startdom": "4"
    },
    "2848": {
        "W": "3",
        "name": "Father of the Sea",
        "pathcost": "80",
        "pointcost": 220,
        "realm1": "2",
        "startdom": "4"
    },
    "2849": {
        "W": "1",
        "name": "Father of Monsters",
        "pathcost": "60",
        "pointcost": 250,
        "realm1": "9",
        "startdom": "3"
    },
    "2850": {
        "name": "Statue of the Underworld",
        "pathcost": "40",
        "pointcost": 170,
        "realm1": "3",
        "startdom": "4"
    },
    "2851": {
        "A": "2",
        "W": "1",
        "name": "Titan of Winds and Waves",
        "pathcost": "60",
        "pointcost": 260,
        "realm1": "3",
        "startdom": "3"
    },
    "2852": {
        "W": "1",
        "name": "King of Frozen Bones",
        "pathcost": "20",
        "pointcost": 140,
        "startdom": "1"
    },
    "2853": {
        "name": "Ghost King",
        "pathcost": "20",
        "pointcost": 240,
        "startdom": "2"
    },
    "2855": {
        "S": "1",
        "W": "1",
        "name": "Floating Mind",
        "pathcost": "80",
        "pointcost": 80,
        "realm1": "9",
        "startdom": "2"
    },
    "2856": {
        "A": "1",
        "W": "1",
        "name": "Son of the Sea",
        "pathcost": "60",
        "pointcost": 280,
        "realm1": "2",
        "startdom": "3"
    },
    "2881": {
        "A": "1",
        "E": "1",
        "W": "1",
        "name": "Telkhine God-King",
        "pathcost": "40",
        "pointcost": 290,
        "shapechange": "2882",
        "startdom": "2"
    },
    "2882": {
        "A": "1",
        "E": "1",
        "W": "1",
        "name": "Telkhine God-King",
        "pathcost": "40",
        "pointcost": null,
        "shapechange": "2881",
        "startdom": "2"
    },
    "2922": {
        "A": "1",
        "W": "1",
        "name": "Morgen High Queen",
        "pathcost": "10",
        "pointcost": 130,
        "startdom": "1"
    },
    "2930": {
        "E": "1",
        "N": "1",
        "W": "1",
        "name": "Hooded Spirit",
        "pathcost": "80",
        "pointcost": 290,
        "realm1": "2",
        "startdom": "2"
    },
    "294": {
        "N": "2",
        "W": "1",
        "name": "Nerid",
        "pathcost": "60",
        "pointcost": 200,
        "realm1": "9",
        "startdom": "3"
    },
    "2955": {
        "E": "1",
        "name": "Leader of the Closed Council",
        "pathcost": "10",
        "pointcost": 140,
        "startdom": "1"
    },
    "2958": {
        "N": "1",
        "name": "Golden Lion",
        "pathcost": "80",
        "pointcost": 160,
        "realm1": "7",
        "startdom": "2"
    },
    "2959": {
        "S": "1",
        "name": "Chiranjivi",
        "pointcost": 190,
        "startdom": "1"
    },
    "2960": {
        "A": "1",
        "E": "1",
        "S": "1",
        "W": "1",
        "name": "Apkallu",
        "pathcost": "80",
        "pointcost": 280,
        "startdom": "2"
    },
    "2961": {
        "N": "1",
        "name": "Centauride Enchantress",
        "pointcost": 120,
        "startdom": "1"
    },
    "2977": {
        "S": "1",
        "name": "Centaur Great Sage",
        "pointcost": 140,
        "startdom": "1"
    },
    "2978": {
        "name": "Master Sorcerer",
        "pointcost": 90,
        "startdom": "1"
    },
    "2979": {
        "S": "1",
        "name": "Onmyo Hakase",
        "pointcost": 100,
        "startdom": "1"
    },
    "2980": {
        "S": "3",
        "name": "Uttervast",
        "pathcost": "80",
        "pointcost": 340,
        "startdom": "3"
    },
    "3053": {
        "S": "1",
        "name": "Grand Hierophant",
        "pointcost": 100,
        "startdom": "1"
    },
    "3054": {
        "S": "2",
        "name": "Firstborn of the Star",
        "pointcost": 130,
        "startdom": "1"
    },
    "3055": {
        "W": "1",
        "name": "Grand Hydromancer",
        "pointcost": 100,
        "realm1": "9",
        "startdom": "1"
    },
    "3056": {
        "N": "1",
        "name": "Aphroi Sage",
        "pointcost": 140,
        "startdom": "1"
    },
    "3057": {
        "N": "1",
        "name": "Aphroi Sage",
        "pointcost": 140,
        "startdom": "1"
    },
    "3058": {
        "S": "1",
        "W": "1",
        "name": "God-King of the Deep",
        "pathcost": "20",
        "pointcost": 130,
        "startdom": "1"
    },
    "3059": {
        "A": "1",
        "name": "Magister Supreme",
        "pointcost": 80,
        "startdom": "1"
    },
    "3060": {
        "S": "1",
        "name": "Master",
        "pointcost": 110,
        "startdom": "1"
    },
    "3072": {
        "S": "1",
        "name": "Kami of the Sun",
        "pathcost": "60",
        "pointcost": 280,
        "realm1": "4",
        "startdom": "3"
    },
    "3073": {
        "S": "2",
        "name": "Kami of the Moon",
        "pathcost": "60",
        "pointcost": 260,
        "realm1": "4",
        "startdom": "3"
    },
    "3074": {
        "A": "2",
        "W": "1",
        "name": "Kami of Storms",
        "pathcost": "60",
        "pointcost": 260,
        "realm1": "4",
        "startdom": "3"
    },
    "3076": {
        "A": "1",
        "S": "1",
        "name": "Morrigna",
        "pathcost": "60",
        "pointcost": 380,
        "realm1": "2",
        "startdom": "3"
    },
    "3079": {
        "A": "1",
        "W": "1",
        "name": "Duiu of Thunder",
        "pathcost": "60",
        "pointcost": 250,
        "realm1": "2",
        "startdom": "3"
    },
    "3080": {
        "N": "2",
        "W": "1",
        "name": "Duiu of Farming",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "2",
        "startdom": "3"
    },
    "3081": {
        "B": "1",
        "N": "1",
        "name": "Duiu of War",
        "pathcost": "60",
        "pointcost": 250,
        "realm1": "2",
        "startdom": "3"
    },
    "3082": {
        "N": "1",
        "S": "1",
        "W": "1",
        "name": "Matrona of the Healing Spring",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "2",
        "startdom": "3"
    },
    "3086": {
        "N": "1",
        "name": "Deives of the Sun",
        "pathcost": "60",
        "pointcost": 220,
        "realm1": "1",
        "startdom": "3"
    },
    "3088": {
        "name": "Dharmapala of the Underworld",
        "pathcost": "60",
        "pointcost": 260,
        "realm1": "4",
        "startdom": "3"
    },
    "3098": {
        "S": "1",
        "W": "1",
        "name": "First Spawn",
        "pathcost": "40",
        "pointcost": 110,
        "startdom": "2"
    },
    "320": {
        "name": "Saurolich",
        "pathcost": "40",
        "pointcost": 240,
        "startdom": "2"
    },
    "383": {
        "name": "Prince of Death",
        "pathcost": "80",
        "pointcost": 270,
        "realm1": "3",
        "startdom": "2"
    },
    "384": {
        "E": "2",
        "S": "1",
        "name": "Neter of Crafts",
        "pathcost": "60",
        "pointcost": 230,
        "realm1": "7",
        "startdom": "3"
    },
    "385": {
        "E": "2",
        "N": "1",
        "name": "Neteret of Joy",
        "pathcost": "60",
        "pointcost": 220,
        "realm1": "7",
        "startdom": "3"
    },
    "386": {
        "S": "1",
        "name": "Neter of the Sun",
        "pathcost": "60",
        "pointcost": 260,
        "realm1": "7",
        "startdom": "3"
    },
    "387": {
        "S": "1",
        "name": "Neteret of Many Names",
        "pathcost": "20",
        "pointcost": 250,
        "realm1": "7",
        "startdom": "3"
    },
    "388": {
        "A": "1",
        "name": "Neter of Chaos",
        "pathcost": "60",
        "pointcost": 230,
        "realm1": "7",
        "startdom": "3"
    },
    "395": {
        "name": "Lich Queen",
        "pathcost": "40",
        "pointcost": 160,
        "realm1": "7",
        "startdom": "2"
    },
    "401": {
        "N": "1",
        "name": "Bitch Queen",
        "pointcost": 160,
        "realm1": "1",
        "shapechange": "402",
        "startdom": "1"
    },
    "402": {
        "N": "1",
        "name": "Crone",
        "pointcost": null,
        "shapechange": "401",
        "startdom": "1"
    },
    "472": {
        "E": "1",
        "S": "2",
        "name": "Statue of Order",
        "pathcost": "40",
        "pointcost": 150,
        "realm1": "3",
        "startdom": "4"
    },
    "485": {
        "S": "1",
        "name": "Great Enchantress",
        "pointcost": 90,
        "realm1": "10",
        "startdom": "1"
    },
    "486": {
        "B": "1",
        "name": "Great Warlock",
        "pathcost": "10",
        "pointcost": 100,
        "startdom": "1"
    },
    "499": {
        "E": "1",
        "S": "1",
        "name": "Nataraja",
        "pathcost": "60",
        "pointcost": 260,
        "realm1": "8",
        "startdom": "3"
    },
    "500": {
        "B": "1",
        "name": "Skratti",
        "pathcost": "10",
        "pointcost": 140,
        "startdom": "1"
    },
    "501": {
        "A": "1",
        "S": "1",
        "name": "Allfather",
        "pathcost": "40",
        "pointcost": 280,
        "realm1": "1",
        "startdom": "3"
    },
    "509": {
        "A": "1",
        "name": "Arch Seraph",
        "pathcost": "10",
        "pointcost": 90,
        "startdom": "1"
    },
    "546": {
        "S": "3",
        "name": "Void Lurker",
        "pathcost": "20",
        "pointcost": 150,
        "startdom": "4"
    },
    "550": {
        "E": "1",
        "name": "Master Alchemist",
        "pathcost": "10",
        "pointcost": 90,
        "startdom": "1"
    },
    "600": {
        "A": "1",
        "E": "1",
        "S": "1",
        "name": "Titan of War and Wisdom",
        "pathcost": "60",
        "pointcost": 260,
        "realm1": "3",
        "startdom": "3"
    },
    "601": {
        "S": "1",
        "W": "2",
        "name": "Devi of Fortunes",
        "pathcost": "60",
        "pointcost": 240,
        "startdom": "3"
    },
    "602": {
        "A": "2",
        "E": "1",
        "name": "Titan of Heaven",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "3",
        "startdom": "3"
    },
    "603": {
        "B": "1",
        "N": "1",
        "W": "1",
        "name": "Teotl of Rain",
        "pathcost": "60",
        "pointcost": 250,
        "realm1": "6",
        "startdom": "3"
    },
    "604": {
        "B": "2",
        "name": "Teotl of the Night",
        "pathcost": "60",
        "pointcost": 290,
        "realm1": "6",
        "startdom": "3"
    },
    "605": {
        "W": "2",
        "name": "Son of Niefel",
        "pathcost": "60",
        "pointcost": 260,
        "startdom": "3"
    },
    "606": {
        "E": "1",
        "N": "2",
        "name": "Great Mother",
        "pathcost": "60",
        "pointcost": 280,
        "realm1": "2",
        "startdom": "3"
    },
    "607": {
        "B": "1",
        "S": "1",
        "name": "Baphomet",
        "pathcost": "40",
        "pointcost": 160,
        "startdom": "4"
    },
    "608": {
        "A": "1",
        "name": "Phoenix",
        "pathcost": "80",
        "pointcost": 110,
        "realm1": "7",
        "startdom": "2"
    },
    "643": {
        "B": "1",
        "name": "Bog Mummy",
        "pathcost": "40",
        "pointcost": 240,
        "startdom": "2"
    },
    "644": {
        "name": "Dracolich",
        "pathcost": "80",
        "pointcost": 180,
        "shapechange": "645",
        "startdom": "2"
    },
    "645": {
        "name": "Bog Mummy",
        "pathcost": "80",
        "pointcost": null,
        "shapechange": "644",
        "startdom": "2"
    },
    "652": {
        "S": "2",
        "W": "1",
        "name": "Void Lord",
        "pathcost": "60",
        "pointcost": 250,
        "startdom": "3"
    },
    "653": {
        "N": "1",
        "name": "Serpent King",
        "pointcost": 80,
        "realm1": "7",
        "shapechange": "654",
        "startdom": "1"
    },
    "654": {
        "N": "1",
        "name": "Serpent King",
        "pointcost": null,
        "realm1": "7",
        "shapechange": "653",
        "startdom": "1"
    },
    "655": {
        "E": "1",
        "name": "Scorpion King",
        "pathcost": "60",
        "pointcost": 160,
        "realm1": "5",
        "startdom": "2"
    },
    "656": {
        "B": "3",
        "name": "Fountain of Blood",
        "pathcost": "40",
        "pointcost": 150,
        "realm1": "10",
        "startdom": "4"
    },
    "657": {
        "E": "1",
        "N": "1",
        "S": "1",
        "name": "Monolith",
        "pathcost": "40",
        "pointcost": 160,
        "realm1": "2",
        "realm2": "1",
        "startdom": "4"
    },
    "661": {
        "E": "1",
        "S": "1",
        "name": "Shedu",
        "pathcost": "80",
        "pointcost": 200,
        "realm1": "5",
        "startdom": "2"
    },
    "779": {
        "N": "2",
        "name": "Rams-Headed Serpent",
        "pathcost": "80",
        "pointcost": 180,
        "realm1": "2",
        "startdom": "2"
    },
    "812": {
        "B": "1",
        "N": "2",
        "name": "Lord of the Wild",
        "pathcost": "60",
        "pointcost": 250,
        "realm1": "3",
        "startdom": "3"
    },
    "857": {
        "B": "1",
        "name": "Smoking Mirror",
        "pathcost": "20",
        "pointcost": 90,
        "shapechange": "858",
        "startdom": "1"
    },
    "858": {
        "B": "1",
        "name": "Jaguar",
        "pathcost": "20",
        "pointcost": null,
        "shapechange": "857",
        "startdom": "1"
    },
    "862": {
        "B": "2",
        "name": "Vampire Queen",
        "pathcost": "40",
        "pointcost": 210,
        "startdom": "1"
    },
    "872": {
        "name": "Ghost King",
        "pathcost": "20",
        "pointcost": 220,
        "realm1": "10",
        "startdom": "2"
    },
    "873": {
        "S": "1",
        "name": "Great Seer of the Deeps",
        "pointcost": 100,
        "startdom": "1"
    },
    "874": {
        "S": "1",
        "name": "Divine Emperor",
        "pointcost": 110,
        "startdom": "2"
    },
    "905": {
        "A": "1",
        "S": "1",
        "W": "1",
        "name": "Jade Emperor",
        "pathcost": "60",
        "pointcost": 220,
        "realm1": "4",
        "startdom": "3"
    },
    "956": {
        "A": "2",
        "N": "1",
        "name": "Mother of Tuathas",
        "pathcost": "60",
        "pointcost": null,
        "startdom": "3"
    },
    "957": {
        "N": "1",
        "name": "Lord of The Desert Sun",
        "pathcost": "60",
        "pointcost": 250,
        "realm1": "5",
        "startdom": "3"
    },
    "958": {
        "B": "2",
        "E": "1",
        "name": "Colossal Head",
        "pathcost": "40",
        "pointcost": 170,
        "realm1": "6",
        "startdom": "4"
    },
    "961": {
        "E": "1",
        "W": "2",
        "name": "Titan of the Sea",
        "pathcost": "60",
        "pointcost": 240,
        "realm1": "3",
        "startdom": "3"
    },
    "964": {
        "E": "1",
        "N": "2",
        "name": "Lord of Fertility",
        "pathcost": "60",
        "pointcost": null,
        "startdom": "3"
    },
    "973": {
        "E": "1",
        "S": "1",
        "name": "Ancient Kraken",
        "pathcost": "80",
        "pointcost": 200,
        "realm1": "9",
        "startdom": "2"
    },
    "978": {
        "B": "1",
        "N": "1",
        "name": "Great Black Bull",
        "pathcost": "80",
        "pointcost": 190,
        "realm1": "3",
        "startdom": "2"
    },
    "979": {
        "E": "1",
        "N": "1",
        "name": "Great White Bull",
        "pathcost": "80",
        "pointcost": 190,
        "realm1": "3",
        "startdom": "2"
    }
}
    let pretenders = new Map()
    Object.keys(vanilla_pretenders_data).forEach(
	key => {
	    if (!vanilla_pretenders_data[key].shapechange) {   
		pretenders.set(key, vanilla_pretenders_data[key])
	    }
	    else {
		if (vanilla_pretenders_data[key].shapechange.toString() > key) {
		    pretenders.set(key, vanilla_pretenders_data[key])
		}
	    }	
	}
    )
    return pretenders
}

const setupVanillaNations = () => {
    const vanilla_nations_data = {
	"5": {"name": "Arcoscephale","epithet": "Golden Era","abbreviation": "Arc","file_name_base": "early_arcoscephale","era": 1,
	      "realms": [3],
	      "cheapgods20": [600, 602, 1230, 1343, 2783],
	      "cheapgods40": []},
	"6": {"name": "Ermor","epithet": "New Faith","abbreviation": "Er","file_name_base": "early_ermor","era": 1,
	      "realms": [3],
	      "cheapgods20": [874, 1343, 2463, 2850],
	      "cheapgods40": []},
	"7": {"name": "Ulm","epithet": "Enigma of Steel","abbreviation": "Ul","file_name_base": "early_ulm","era": 1,
	      "realms": [1, 2],
	      "cheapgods20": [266, 606, 1230, 1340, 2234],
	      "cheapgods40": [], "idealcold": 1},
	"8": {"name": "Marverni","epithet": "Time of Druids","abbreviation": "Mav","file_name_base": "early_marverni","era": 1,
	      "realms": [2],
	      "cheapgods20": [266, 779, 1378, 2450, 2784, 2930],
	      "cheapgods40": []},
	"9": {"name": "Sauromatia","epithet": "Amazon Queens","abbreviation": "Sa","file_name_base": "early_sauromatia","era": 1,
	      "realms": [3],
	      "cheapgods20": [157, 266],
	      "cheapgods40": []},
	"10": {"name": "T'ien Ch'i","epithet": "Spring and Autumn","abbreviation": "Ti","file_name_base": "early_tienchi","era": 1,
	       "realms": [4],
	       "cheapgods20": [1345, 2457, 2556],
	       "cheapgods40": []},
	"11": {"name": "Machaka","epithet": "Lion Kings","abbreviation": "Mac","file_name_base": "early_machaka","era": 1,
	       "realms": [7],
	       "cheapgods20": [216, 957, 1025, 1346, 2426, 2792],
	       "cheapgods40": [], "idealcold": -2},
	"12": {"name": "Mictlan","epithet": "Reign of Blood","abbreviation": "Mi","file_name_base": "early_mictlan","era": 1,
	       "realms": [6],
	       "cheapgods20": [857, 2442],
	       "cheapgods40": [], "idealcold": -1},
	"13": {"name": "Abysia","epithet": "Children of Flame","abbreviation": "Aby","file_name_base": "early_abysia","era": 1,
	       "realms": [7],
	       "cheapgods20": [216, 486, 655, 1025, 2792],
	       "cheapgods40": [], "idealcold": -3},
	"14": {"name": "Caelum","epithet": "Eagle Kings","abbreviation": "Ca","file_name_base": "early_caelum","era": 1,
	       "realms": [5],
	       "cheapgods20": [2552, 2578, 2785],
	       "cheapgods40": [], "idealcold": 2},
	"15": {"name": "C'tis","epithet": "Lizard Kings","abbreviation": "Ct","file_name_base": "early_ctis","era": 1,
	       "realms": [7],
	       "cheapgods20": [320, 1349, 2205, 2445, 2793, 2799],
	       "cheapgods40": [], "idealcold": -2},
	"16": {"name": "Pangaea","epithet": "Age of Revelry","abbreviation": "Pa","file_name_base": "early_pangaea","era": 1,
	       "realms": [3],
	       "cheapgods20": [138, 812, 978, 979, 1343, 2783],
	       "cheapgods40": []},
	"17": {"name": "Agartha","epithet": "Pale Ones","abbreviation": "Ag","file_name_base": "early_agartha","era": 1,
	       "realms": [10],
	       "cheapgods20": [1590, 2502, 2503, 2791],
	       "cheapgods40": []},
	"18": {"name": "Tir na n'Og","epithet": "Land of the Ever Young","abbreviation": "Tir","file_name_base": "early_tirnanog","era": 1,
	       "realms": [2],
	       "cheapgods20": [266, 1905, 2856],
	       "cheapgods40": []},
	"19": {"name": "Fomoria","epithet": "The Cursed Ones","abbreviation": "Fom","file_name_base": "early_fomoria","era": 1,
	       "realms": [2],
	       "cheapgods20": [1898, 1899, 2789, 2795, 2856],
	       "cheapgods40": []},
	"20": {"name": "Vanheim","epithet": "Age of Vanir","abbreviation": "Va","file_name_base": "early_vanheim","era": 1,
	       "realms": [1],
	       "cheapgods20": [501, 1098, 2206],
	       "cheapgods40": [], "idealcold": 1},
	"21": {"name": "Helheim","epithet": "Dusk and Death","abbreviation": "He","file_name_base": "early_helheim","era": 1,
	       "realms": [1],
	       "cheapgods20": [501, 2789, 2801, 2802],
	       "cheapgods40": [], "idealcold": 1},
	"22": {"name": "Niefelheim","epithet": "Sons of Winter","abbreviation": "Ni","file_name_base": "early_niefelheim","era": 1,
	       "realms": [1],
	       "cheapgods20": [265, 605, 643, 644, 1229, 2801],
	       "cheapgods40": [], "idealcold": 3},
	"25": {"name": "Kailasa","epithet": "Rise of the Ape Kings","abbreviation": "Ka","file_name_base": "early_kailasa","era": 1,
	       "realms": [8],
	       "cheapgods20": [1344, 2202, 2466, 2549],
	       "cheapgods40": [], "idealcold": -2},
	"26": {"name": "Lanka","epithet": "Land of Demons","abbreviation": "La","file_name_base": "early_lanka","era": 1,
	       "realms": [8],
	       "cheapgods20": [1096, 1341, 2550],
	       "cheapgods40": [], "idealcold": -2},
	"27": {"name": "Yomi","epithet": "Oni Kings","abbreviation": "Yom","file_name_base": "early_yomi","era": 1,
	       "realms": [4],
	       "cheapgods20": [2203],
	       "cheapgods40": []},
	"28": {"name": "Hinnom","epithet": "Sons of the Fallen","abbreviation": "Hi","file_name_base": "early_gath","era": 1,
	       "realms": [5],
	       "cheapgods20": [120, 216, 1025, 2082, 2462],
	       "cheapgods40": [], "idealcold": -2},
	"29": {"name": "Ur","epithet": "The First City","abbreviation": "Ur","file_name_base": "early_ur","era": 1,
	       "realms": [5],
	       "cheapgods20": [661, 1372, 1373, 2137, 2435, 2437],
	       "cheapgods40": [], "idealcold": -1},
	"30": {"name": "Berytos","epithet": "The Phoenix Empire","abbreviation": "Be","file_name_base": "early_berytos","era": 1,
	       "realms": [5],
	       "cheapgods20": [120, 2315, 2462, 2792, 2881],
	       "cheapgods40": [], "idealcold": -1},
	"31": {"name": "Xibalba","epithet": "Vigil of the Sun","abbreviation": "Xi","file_name_base": "early_xibalba","era": 1,
	       "realms": [6],
	       "cheapgods20": [604, 2755, 2756],
	       "cheapgods40": [], "idealcold": -1},
	"33": {"name": "Arcoscephale","epithet": "The Old Kingdom","abbreviation": "Arc","file_name_base": "mid_arcoscephale","era": 2,
	       "realms": [3],
	       "cheapgods20": [158, 600, 602, 1230, 1343],
	       "cheapgods40": []},
	"34": {"name": "Ermor","epithet": "Ashen Empire","abbreviation": "Ash","file_name_base": "mid_ermor","era": 2,
	       "realms": [3],
	       "cheapgods20": [],
	       "cheapgods40": []},
	"35": {"name": "Sceleria","epithet": "The Reformed Empire","abbreviation": "Sc","file_name_base": "mid_sceleria","era": 2,
	       "realms": [3],
	       "cheapgods20": [383, 874, 2850],
	       "cheapgods40": []},
	"36": {"name": "Pythium","epithet": "Emerald Empire","abbreviation": "Py","file_name_base": "mid_pythium","era": 2,
	       "realms": [3],
	       "cheapgods20": [158, 874],
	       "cheapgods40": []},
	"37": {"name": "Man","epithet": "Tower of Avalon","abbreviation": "Man","file_name_base": "mid_man","era": 2,
	       "realms": [2],
	       "cheapgods20": [266],
	       "cheapgods40": []},
	"38": {"name": "Eriu","epithet": "Last of the Tuatha","abbreviation": "Er","file_name_base": "mid_eriu","era": 2,
	       "realms": [2],
	       "cheapgods20": [266],
	       "cheapgods40": []},
	"39": {"name": "Ulm","epithet": "Forges of Ulm","abbreviation": "Ul","file_name_base": "mid_ulm","era": 2,
	       "realms": [1, 2],
	       "cheapgods20": [550, 1230, 1340],
	       "cheapgods40": []},
	"40": {"name": "Marignon","epithet": "Fiery Justice","abbreviation": "Mar","file_name_base": "mid_marignon","era": 2,
	       "realms": [2, 3],
	       "cheapgods20": [215, 216],
	       "cheapgods40": []},
	"41": {"name": "Mictlan","epithet": "Reign of the Lawgiver","abbreviation": "Mi","file_name_base": "mid_mictlan","era": 2,
	       "realms": [6],
	       "cheapgods20": [2443],
	       "cheapgods40": [], "idealcold": -1},
	"42": {"name": "T'ien Ch'i","epithet": "Imperial Bureaucracy","abbreviation": "Ti","file_name_base": "mid_tienchi","era": 2,
	       "realms": [4],
	       "cheapgods20": [905, 1345, 2457, 2556],
	       "cheapgods40": []},
	"43": {"name": "Machaka","epithet": "Reign of Sorcerors","abbreviation": "Mac","file_name_base": "mid_machaka","era": 2,
	       "realms": [7],
	       "cheapgods20": [216, 957, 1025, 1346, 2207, 2792, 2793],
	       "cheapgods40": [], "idealcold": -2},
	"44": {"name": "Agartha","epithet": "Golem Cult","abbreviation": "Ag","file_name_base": "mid_agartha","era": 2,
	       "realms": [10],
	       "cheapgods20": [1590, 2503, 2791],
	       "cheapgods40": []},
	"45": {"name": "Abysia","epithet": "Blood and Fire","abbreviation": "Aby","file_name_base": "mid_abysia","era": 2,
	       "realms": [7],
	       "cheapgods20": [120, 216, 486, 1025, 2792],
	       "cheapgods40": [], "idealcold": -3},
	"46": {"name": "Caelum","epithet": "Reign of the Seraphim","abbreviation": "Ca","file_name_base": "mid_caelum","era": 2,
	       "realms": [5],
	       "cheapgods20": [265, 509, 2552, 2578],
	       "cheapgods40": [], "idealcold": 3},
	"47": {"name": "C'tis","epithet": "Miasma","abbreviation": "Ct","file_name_base": "mid_ctis","era": 2,
	       "realms": [7],
	       "cheapgods20": [266, 320, 1349, 2445, 2793, 2799],
	       "cheapgods40": [], "idealcold": -2},
	"48": {"name": "Pangaea","epithet": "Age of Bronze","abbreviation": "Pa","file_name_base": "mid_pangaea","era": 2,
	       "realms": [3],
	       "cheapgods20": [138, 812, 978, 979, 1343, 2783],
	       "cheapgods40": []},
	"49": {"name": "Asphodel","epithet": "Carrion Woods","abbreviation": "CW","file_name_base": "mid_asphodel","era": 2,
	       "realms": [3],
	       "cheapgods20": [1026],
	       "cheapgods40": []},
	"50": {"name": "Vanheim","epithet": "Arrival of Man","abbreviation": "Va","file_name_base": "mid_vanheim","era": 2,
	       "realms": [1],
	       "cheapgods20": [501, 1098, 2206],
	       "cheapgods40": [], "idealcold": 1},
	"51": {"name": "Jotunheim","epithet": "Iron Woods","abbreviation": "Jo","file_name_base": "mid_jotunheim","era": 2,
	       "realms": [1],
	       "cheapgods20": [265, 500, 643, 644, 1229, 2801],
	       "cheapgods40": [], "idealcold": 2},
	"52": {"name": "Vanarus","epithet": "Land of the Chuds","abbreviation": "Rus","file_name_base": "mid_rus","era": 2,
	       "realms": [1],
	       "cheapgods20": [1561],
	       "cheapgods40": [], "idealcold": 2},
	"53": {"name": "Bandar Log","epithet": "Land of the Apes","abbreviation": "Ba","file_name_base": "mid_bandarlog","era": 2,
	       "realms": [8],
	       "cheapgods20": [1344, 2202, 2466, 2549],
	       "cheapgods40": [], "idealcold": -2},
	"54": {"name": "Shinuyama","epithet": "Land of the Bakemono","abbreviation": "shi","file_name_base": "mid_bakemono","era": 2,
	       "realms": [4],
	       "cheapgods20": [1428],
	       "cheapgods40": []},
	"55": {"name": "Ashdod","epithet": "Reign of the Anakim","abbreviation": "As","file_name_base": "mid_gath","era": 2,
	       "realms": [5],
	       "cheapgods20": [1025, 2082],
	       "cheapgods40": [], "idealcold": -2},
	"57": {"name": "Nazca","epithet": "Kingdom of the Sun","abbreviation": "Naz","file_name_base": "mid_nazca","era": 2,
	       "realms": [6],
	       "cheapgods20": [2685, 2686, 2693, 2695, 2696, 2698, 2699, 2737],
	       "cheapgods40": [], "idealcold": 1},
	"58": {"name": "Xibalba","epithet": "Flooded Caves","abbreviation": "Xi","file_name_base": "mid_xibalba","era": 2,
	       "realms": [6],
	       "cheapgods20": [603, 604, 2755, 2756],
	       "cheapgods40": [], "idealcold": -1},
	"60": {"name": "Arcoscephale","epithet": "Sibylline Guidance","abbreviation": "Arc","file_name_base": "late_arcoscephale","era": 3,
	       "realms": [3],
	       "cheapgods20": [158, 600, 602, 1343],
	       "cheapgods40": []},
	"61": {"name": "Pythium","epithet": "Serpent Cult","abbreviation": "Py","file_name_base": "late_pythium","era": 3,
	       "realms": [3],
	       "cheapgods20": [266, 387, 654, 874, 1342, 1371, 2799],
	       "cheapgods40": []},
	"62": {"name": "Lemuria","epithet": "Soul Gates","abbreviation": "Lem","file_name_base": "late_lemur","era": 3,
	       "realms": [3],
	       "cheapgods20": [872, 2850],
	       "cheapgods40": []},
	"63": {"name": "Man","epithet": "Towers of Chelms","abbreviation": "Che","file_name_base": "late_chelms","era": 3,
	       "realms": [2],
	       "cheapgods20": [],
	       "cheapgods40": []},
	"64": {"name": "Ulm","epithet": "Black Forest","abbreviation": "BF","file_name_base": "late_ulm","era": 3,
	       "realms": [1, 2],
	       "cheapgods20": [656, 862],
	       "cheapgods40": []},
	"65": {"name": "Marignon","epithet": "Conquerors of the Sea","abbreviation": "CoS","file_name_base": "late_marignon","era": 3,
	       "realms": [2, 3, 6],
	       "cheapgods20": [215, 216, 607 ],
	       "cheapgods40": []},
	"66": {"name": "Mictlan","epithet": "Blood and Rain","abbreviation": "Mi","file_name_base": "late_mictlan","era": 3,
	       "realms": [6],
	       "cheapgods20": [603],
	       "cheapgods40": [], "idealcold": -1},
	"67": {"name": "T'ien Ch'i","epithet": "Barbarian Kings","abbreviation": "BK","file_name_base": "late_tienchi","era": 3,
	       "realms": [4],
	       "cheapgods20": [1345],
	       "cheapgods40": []},
	"69": {"name": "Jomon","epithet": "Human Daimyos","abbreviation": "Jom","file_name_base": "late_jomon","era": 3,
	       "realms": [4],
	       "cheapgods20": [1339, 1345],
	       "cheapgods40": []},
	"70": {"name": "Agartha","epithet": "Ktonian Dead","abbreviation": "KD","file_name_base": "late_agartha","era": 3,
	       "realms": [10],
	       "cheapgods20": [550, 1581, 2503],
	       "cheapgods40": []},
	"71": {"name": "Abysia","epithet": "Blood of Humans","abbreviation": "BoH","file_name_base": "late_abysia","era": 3,
	       "realms": [7],
	       "cheapgods20": [120, 216, 486, 1025, 2792],
	       "cheapgods40": [], "idealcold": -2},
	"72": {"name": "Caelum","epithet": "Return of the Raptors","abbreviation": "Rap","file_name_base": "late_caelum","era": 3,
	       "realms": [5],
	       "cheapgods20": [509, 2552, 2789],
	       "cheapgods40": [], "idealcold": 1},
	"73": {"name": "C'tis","epithet": "Desert Tombs","abbreviation": "DT","file_name_base": "late_ctis","era": 3,
	       "realms": [7],
	       "cheapgods20": [1349, 2445, 2793],
	       "cheapgods40": [320], "idealcold": -2},
	"74": {"name": "Pangaea","epithet": "New Era","abbreviation": "NE","file_name_base": "late_pangaea","era": 3,
	       "realms": [3],
	       "cheapgods20": [138, 979, 1343, 2783],
	       "cheapgods40": []},
	"75": {"name": "Midgård","epithet": "Age of Men","abbreviation": "Mid","file_name_base": "late_midgard","era": 3,
	       "realms": [1],
	       "cheapgods20": [1098],
	       "cheapgods40": [], "idealcold": 1},
	"76": {"name": "Utgård","epithet": "Well of Urd","abbreviation": "Ut","file_name_base": "late_utgard","era": 3,
	       "realms": [1],
	       "cheapgods20": [500, 643, 644, 1229],
	       "cheapgods40": [], "idealcold": 1},
	"77": {"name": "Bogarus","epithet": "Age of Heroes","abbreviation": "Bog","file_name_base": "late_rus","era": 3,
	       "realms": [1],
	       "cheapgods20": [1561],
	       "cheapgods40": [], "idealcold": 2},
	"78": {"name": "Patala","epithet": "Reign of the Nagas","abbreviation": "Pa","file_name_base": "late_patala","era": 3,
	       "realms": [8],
	       "cheapgods20": [1344, 2202, 2466, 2549],
	       "cheapgods40": [], "idealcold": -2},
	"79": {"name": "Gath","epithet": "Last of the Giants","abbreviation": "Ga","file_name_base": "late_gath","era": 3,
	       "realms": [5],
	       "cheapgods20": [120, 1025, 2082, 2462],
	       "cheapgods40": [], "idealcold": -1},
	"80": {"name": "Ragha","epithet": "Dual Kingdom","abbreviation": "Rag","file_name_base": "late_ragha","era": 3,
	       "realms": [5],
	       "cheapgods20": [486, 509, 2608, 2610, 2611, 2627, 2788],
	       "cheapgods40": []},
	"81": {"name": "Xibalba","epithet": "Return of the Zotz","abbreviation": "Xi","file_name_base": "late_xibalba","era": 3,
	       "realms": [6],
	       "cheapgods20": [604, 2755, 2756],
	       "cheapgods40": [], "idealcold": -1},
	"83": {"name": "Atlantis","epithet": "Emergence of the Deep Ones","abbreviation": "Atl","file_name_base": "early_atlantis","era": 1,
	       "realms": [9],
	       "cheapgods20": [109, 2853],
	       "cheapgods40": []},
	"84": {"name": "R'lyeh","epithet": "Time of Aboleths","abbreviation": "Rl","file_name_base": "early_rlyeh","era": 1,
	       "realms": [9],
	       "cheapgods20": [546, 1402, 2855],
	       "cheapgods40": []},
	"85": {"name": "Pelagia","epithet": "Pearl Kings","abbreviation": "Pe","file_name_base": "early_pelagia","era": 1,
	       "realms": [9],
	       "cheapgods20": [1232, 1233],
	       "cheapgods40": []},
	"86": {"name": "Oceania","epithet": "Coming of the Capricorns","abbreviation": "Oc","file_name_base": "early_oceania","era": 1,
	       "realms": [9],
	       "cheapgods20": [294, 2849],
	       "cheapgods40": []},
	"87": {"name": "Atlantis","epithet": "Kings of the Deep","abbreviation": "Atl","file_name_base": "mid_atlantis","era": 2,
	       "realms": [9],
	       "cheapgods20": [109, 873, 2853],
	       "cheapgods40": []},
	"88": {"name": "R'lyeh","epithet": "Fallen Star","abbreviation": "Rl","file_name_base": "mid_rlyeh","era": 2,
	       "realms": [9],
	       "cheapgods20": [546, 652, 2855],
	       "cheapgods40": []},
	"89": {"name": "Pelagia","epithet": "Triton Kings","abbreviation": "Pe","file_name_base": "mid_pelagia","era": 2,
	       "realms": [9],
	       "cheapgods20": [1232, 1233],
	       "cheapgods40": []},
	"90": {"name": "Oceania","epithet": "Mermidons","abbreviation": "Oc","file_name_base": "mid_oceania","era": 2,
	       "realms": [9],
	       "cheapgods20": [294, 2849],
	       "cheapgods40": []},
	"91": {"name": "Atlantis","epithet": "Frozen Sea","abbreviation": "Atl","file_name_base": "late_atlantis","era": 3,
	       "realms": [10],
	       "cheapgods20": [265, 2852, 2853],
	       "cheapgods40": [], "idealcold": 2},
	"92": {"name": "R'lyeh","epithet": "Dreamlands","abbreviation": "Rl","file_name_base": "late_rlyeh","era": 3,
	       "realms": [9],
	       "cheapgods20": [546, 652, 2855],
	       "cheapgods40": []},
	"95": {"name": "Therodos","epithet": "Telkhine Spectre","abbreviation": "Ther","file_name_base": "early_therodos","era": 1,
	       "realms": [9],
	       "cheapgods20": [872, 2850],
	       "cheapgods40": [2881]},
	"96": {"name": "Ys","epithet": "Morgen Queens","abbreviation": "Ys","file_name_base": "mid_ys","era": 2,
	       "realms": [9],
	       "cheapgods20": [2848, 2856, 2922],
	       "cheapgods40": []}
    }
    let nations = new Map()
    Object.keys(vanilla_nations_data).forEach(
	key => {
	    nations.set(key, vanilla_nations_data[key])
	}
    )
    
    return nations
}


const setupNationsPretenders = (nations, pretenders) => {
    const vanilla_added_gods_data = {
	"monster_id":[606,1231,1232,1233,2138,2788,215,606,874,1231,1232,1233,2138,2786,2787,1230,1340,1370,2786,138,157,600,602,812,978,979,1340,1343,1370,2786,269,606,608,653,657,862,1231,1370,2138,2234,2447,2448,2449,2450,2786,2788,499,608,1341,1344,269,606,655,657,957,978,979,1025,1097,1346,2138,2426,2786,2787,2788,269,606,653,657,857,120,269,486,655,957,1025,1097,1384,2137,2138,2608,2788,2552,2553,2554,2555,2578,2608,2610,2611,2627,157,269,320,1349,2138,2205,2786,2787,2788,606,657,1026,1231,1370,2138,2234,2449,2450,2786,2788,156,269,606,657,1230,1373,1581,1590,2431,2438,2445,2502,2503,1905,2234,269,979,1898,1899,1905,606,657,606,657,500,605,606,643,644,657,269,657,979,1339,2457,2788,269,657,979,1339,2550,2788,608,657,2203,2447,2448,2449,159,606,978,979,1025,2082,159,1025,2138,2315,2881,269,606,653,657,857,1231,1232,1233,2138,2786,2787,2788,2881,2138,874,2138,2786,2787,2788,215,874,2138,2786,2787,2788,401,657,1340,1370,1905,2234,2786,2787,657,1340,1370,1905,2234,2786,550,1230,1340,1370,2786,2788,215,550,607,608,2786,2787,2788,269,1896,499,608,1341,1344,269,606,655,657,957,978,979,1025,1097,1346,2138,2207,2786,2787,2788,156,269,606,657,1230,1373,1581,1590,2431,2438,2445,2502,2503,120,269,486,655,957,1025,1097,1384,2137,2138,2608,2610,2788,509,2578,2552,2553,2554,2555,2608,2610,2611,2627,157,269,320,1349,2138,2205,2786,606,657,1026,1231,1370,2138,2234,2449,2450,2786,2788,606,657,1026,1231,1370,2138,2449,2786,2788,606,657,500,605,606,643,644,657,606,657,2450,269,657,979,1339,2457,2787,2788,608,657,1428,2447,2448,2449,159,606,978,979,1025,2082,269,606,653,657,2685,2686,2693,2695,2696,2698,2699,2737,109,269,606,653,657,857,2853,1231,1232,1233,2138,2786,2788,215,874,2138,2786,2787,2788,395,2138,401,657,1340,1370,1905,2234,2786,2787,550,862,1230,1340,1370,2786,2787,2788,120,215,550,607,608,862,2786,2787,2788,109,269,606,653,657,857,2853,499,608,1341,1344,156,158,179,180,216,244,246,249,250,251,265,266,269,270,383,485,608,656,872,608,657,2447,2448,156,269,550,606,657,1230,1373,1581,1590,2431,2438,2445,2503,120,269,486,655,957,1025,1097,1384,2137,2138,2608,2610,2788,509,2552,2553,2554,2555,2608,2610,2611,2627,157,269,320,1349,2138,2205,2786,2788,606,657,1026,1231,1370,2138,2234,2449,2450,2786,2788,606,657,500,605,606,643,644,657,215,550,606,862,1340,1370,2786,2787,269,653,657,979,1339,2457,2787,2788,159,606,978,979,1025,2082,486,509,2552,2553,2554,2555,2608,2610,2611,2627,109,269,606,653,657,857,2853,109,179,180,248,269,657,872,961,973,1231,2791,2853,179,180,248,269,546,657,872,961,973,1402,2791,159,179,180,248,269,294,472,657,872,961,973,1232,1233,2460,2463,2791,2850,2851,179,180,248,269,294,472,657,872,961,973,1231,1232,1233,2460,2463,2850,2791,2851,873,179,180,248,269,472,657,872,961,973,1231,1233,2463,2791,2850,2853,179,180,248,269,546,652,657,872,961,973,1231,1232,2791,2850,159,179,180,248,269,294,472,657,872,961,973,1232,1233,2460,2463,2791,2850,2851,2881,179,180,248,269,294,472,657,872,961,973,1231,1232,1233,2460,2463,2791,2850,2851,109,269,383,657,873,961,1229,1231,1232,1233,1561,2444,2448,2449,2850,2852,2853,179,180,248,269,546,652,657,872,961,973,1231,2791,2850,159,472,657,872,2460,2463,2791,2850,2851,2881,179,180,248,269,294,472,657,872,961,973,1232,1233,1899,2791,2848,2849,2856,2922,2930],
	"nation_id":[5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,19,19,19,19,19,20,20,21,21,22,22,22,22,22,22,25,25,25,25,25,25,26,26,26,26,26,26,27,27,27,27,27,27,28,28,28,28,28,28,29,30,30,30,30,31,31,31,31,31,33,33,33,33,33,33,33,33,34,35,35,35,35,35,36,36,36,36,36,36,37,37,37,37,37,37,37,37,38,38,38,38,38,38,39,39,39,39,39,39,40,40,40,40,40,40,40,41,41,42,42,42,42,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,44,44,44,44,44,44,44,44,44,44,44,44,44,45,45,45,45,45,45,45,45,45,45,45,45,45,46,46,46,46,46,46,46,46,46,46,47,47,47,47,47,47,47,48,48,48,48,48,48,48,48,48,48,48,49,49,49,49,49,49,49,49,49,50,50,51,51,51,51,51,51,52,52,52,53,53,53,53,53,53,53,54,54,54,54,54,54,55,55,55,55,55,55,57,57,57,57,57,57,57,57,57,57,57,57,58,58,58,58,58,58,58,60,60,60,60,60,60,61,61,61,61,61,61,62,62,63,63,63,63,63,63,63,63,64,64,64,64,64,64,64,64,65,65,65,65,65,65,65,65,65,66,66,66,66,66,66,66,67,67,67,67,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,69,69,69,69,70,70,70,70,70,70,70,70,70,70,70,70,70,71,71,71,71,71,71,71,71,71,71,71,71,71,72,72,72,72,72,72,72,72,72,73,73,73,73,73,73,73,73,74,74,74,74,74,74,74,74,74,74,74,75,75,76,76,76,76,76,76,77,77,77,77,77,77,77,77,78,78,78,78,78,78,78,78,79,79,79,79,79,79,80,80,80,80,80,80,80,80,80,80,81,81,81,81,81,81,81,83,83,83,83,83,83,83,83,83,83,83,83,84,84,84,84,84,84,84,84,84,84,84,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,88,88,88,88,88,88,88,88,88,88,88,88,88,88,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,92,92,92,92,92,92,92,92,92,92,92,92,92,95,95,95,95,95,95,95,95,95,95,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96]
    }
    const vanilla_deleted_gods_data = {
	"monster_id":[159,269,656,156,961,216,265,266,472,2789,158,250,265,472,2202,2549,179,158,961,2785,2789,158,269,2802,158,269,2206,158,269,501,1098,2206,2239,2802,2202,158,216,265,266,2457,138,812,472,2785,2789,138,385,812,608,978,979,1343,2792,2797,2798,2799,138,812,159,269,656,779,138,157,383,657,779,812,961,978,472,2789,216,265,266,2785,2789,158,250,265,472,2202,2549,179,158,961,158,961,1342,158,269,158,269,501,1098,2206,2239,2802,158,269,158,216,265,266,2457,472,472,872,2785,2789,138,385,812,608,978,979,1343,159,269,779,138,157,383,657,779,812,961,978,472,2789,216,265,266,216,265,266,2785,2789,158,250,265,472,2202,2549,179,961,158,269,158,269,501,1098,2206,2239,2802,269,2202,2549,472,872,2785,2789,294,872,2847,294,2847,109,109,872,294,2847,109,109,472,656,872,294,2847,109,109,2847],
	"nation_id":[7,7,7,9,9,10,10,10,12,12,13,13,13,13,14,14,15,16,16,17,17,20,20,20,21,21,21,22,22,22,22,22,22,22,26,27,27,27,27,27,30,30,31,31,31,34,34,34,34,34,34,34,34,34,34,34,35,35,39,39,39,39,40,40,40,40,40,40,40,40,41,41,42,42,42,44,44,45,45,45,45,46,46,47,48,48,49,49,49,50,50,51,51,51,51,51,51,51,52,52,54,54,54,54,54,57,58,58,58,58,62,62,62,62,62,62,62,64,64,64,65,65,65,65,65,65,65,65,66,66,67,67,67,69,69,69,70,70,71,71,71,71,72,72,73,74,75,75,76,76,76,76,76,76,76,77,80,80,81,81,81,81,83,83,83,84,84,85,86,87,88,88,89,90,91,91,91,92,92,95,96,96]
    }

    // BUGGED inspector fixes
    // delete Father of the sea from EA, MA, LA Ulm
    vanilla_deleted_gods_data.monster_id.push(2848, 2848, 2848)
    vanilla_deleted_gods_data.nation_id.push(7, 39, 64)
    // delete Father of the sea from, MA, LA Man
    vanilla_deleted_gods_data.monster_id.push(2848, 2848)
    vanilla_deleted_gods_data.nation_id.push(37, 63)
    // delete Father of the sea from EA Marverni, MA, LA Marignon
    vanilla_deleted_gods_data.monster_id.push(2848, 2848, 2848)
    vanilla_deleted_gods_data.nation_id.push(8, 40, 65)
    // delete Father of the sea from Fomoria, TNN, Eriu
    vanilla_deleted_gods_data.monster_id.push(2848, 2848, 2848)
    vanilla_deleted_gods_data.nation_id.push(18, 19, 38)

    
    let realmsPretenders = new Map()
    realmsPretenders.set("1", new Array())
    realmsPretenders.set("2", new Array())
    realmsPretenders.set("3", new Array())
    realmsPretenders.set("4", new Array())
    realmsPretenders.set("5", new Array())
    realmsPretenders.set("6", new Array())
    realmsPretenders.set("7", new Array())
    realmsPretenders.set("8", new Array())
    realmsPretenders.set("9", new Array())
    realmsPretenders.set("10", new Array())

    pretenders.forEach(
	(pretender, pretender_id) => {
	    let pretenderRealms = [pretender["realm1"], pretender["realm2"], pretender["realm3"]]
	    pretenderRealms.forEach(realm => {
		if (realm == 10) {
		    realmsPretenders.get("1").push(pretender_id)
		    realmsPretenders.get("2").push(pretender_id)
		    realmsPretenders.get("3").push(pretender_id)
		    realmsPretenders.get("4").push(pretender_id)
		    realmsPretenders.get("5").push(pretender_id)
		    realmsPretenders.get("6").push(pretender_id)
		    realmsPretenders.get("7").push(pretender_id)
		    realmsPretenders.get("8").push(pretender_id)
		    realmsPretenders.get("10").push(pretender_id)
		}
		else if ( realm == 1 || realm ==2 || realm == 3 || realm == 4 || realm == 5 || realm == 6 || realm == 7 || realm == 8 || realm == 9 ) {
		    realmsPretenders.get(realm.toString()).push(pretender_id)
		}
	    })
	}
    )
    
    realmsPretenders.forEach( (pretenders, realm) =>
			      realmsPretenders.set(realm, pretenders.filter( (pret, ind, prets) => prets.indexOf(pret) === ind ))
			    )
    
    let nationsPretenders = new Map()
    nations.forEach(
	(nation, id) => {
	    nationsPretenders.set(id, new Array())
	}
    )
    
    nations.forEach(
	(nation, nation_id) => {
	    nation["realms"].forEach(
		realm => {
		    nationsPretenders.set( nation_id.toString(), nationsPretenders.get(nation_id.toString()).concat(realmsPretenders.get(realm.toString())) )
		}
	    )
	}
    )

    // I need delete duplicates here
    nations.forEach(
	(nation, nation_id) => {
	    let pretendersToFilter = nationsPretenders.get(nation_id.toString())
	    let filteredPretenders = pretendersToFilter.filter(function(elem, index, self) {
		return index == self.indexOf(elem);
	    })
	    nationsPretenders.set( nation_id.toString(), filteredPretenders)
	}
    )
   
    
    vanilla_added_gods_data.monster_id.forEach( (monster_id, index) => {
	if (nations.get(vanilla_added_gods_data.nation_id[index].toString())) {
	    nationsPretenders.get(vanilla_added_gods_data.nation_id[index].toString()).push(monster_id.toString())
	}
    })

    vanilla_deleted_gods_data.monster_id.forEach( (monster_id, index) => {
	if (nations.get(vanilla_deleted_gods_data.nation_id[index].toString())) {
	    let nat_pretenders = nationsPretenders.get(vanilla_deleted_gods_data.nation_id[index].toString())
	    let indexToDelete = nat_pretenders.indexOf(monster_id.toString())
	    if (indexToDelete != -1) {
		nat_pretenders.splice(indexToDelete, 1)
	    }
	}
    })

    nationsPretenders.forEach( (pretenders, nation_id) =>
			       nationsPretenders.set(nation_id, pretenders.filter( (pret, ind, prets) => prets.indexOf(pret) === ind ))
			    )

    return nationsPretenders
}

