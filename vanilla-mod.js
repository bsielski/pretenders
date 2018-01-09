const setupVanillaPretenders = () => {
    const vanilla_pretenders_data = {
	"109": {"name": "Twój Stary", "pointcost": 270, "pathcost": 60, "startdom": 3, "W": 1, "E": 2, "realm1": 9,   },    
	"120": {"name": "Moloch", "pointcost": 260, "pathcost": 80, "startdom": 2, "F": 2, "B": 1, "realm1": 5,   },    
	"138": {"name": "Gorgon", "pointcost": 250, "pathcost": 80, "startdom": 2, "E": 2, "N": 1, "realm1": 3,   },    
	"156": {"name": "Cyclops", "pointcost": 250, "pathcost": 60, "startdom": 3, "E": 3, "realm1": 3,   },    
	"157": {"name": "Mother of Monsters", "pointcost": 190, "pathcost": 60, "startdom": 3, "D": 1, "N": 1, "B": 1, "realm1": 3,   },    
	"158": {"name": "Oracle", "pointcost": 190, "pathcost": 40, "startdom": 4, "W": 1, "S": 2, "realm1": 10,   },    
	"159": {"name": "Monument", "pointcost": 150, "pathcost": 40, "startdom": 4, "E": 2, "S": 1, "realm1": 7,   },    
	"179": {"name": "Master Lich", "pointcost": 230, "pathcost": 40, "startdom": 2, "D": 3, "realm1": 10,   },    
	"180": {"name": "Demilich", "pointcost": 130, "pathcost": 20, "startdom": 3, "D": 3, "realm1": 10,   },    
	"215": {"name": "Virtue", "pointcost": 240, "pathcost": 80, "startdom": 2, "F": 1, "A": 2,   },    
	"216": {"name": "Dragon", "pointcost": 220, "pathcost": 80, "startdom": 2, "F": 2, "shapechange": 226, "realm1": 10,   },    
	"226": {"name": "Arch Mage", "pointcost": undefined, "pathcost": 80, "startdom": 2, "F": 2, "shapechange": 216, "realm1": 10,   },    
	"244": {"name": "Arch Mage", "pointcost": 80, "startdom": 1, "F": 1, "realm1": 10,   },    
	"245": {"name": "Master Enchanter", "pointcost": 80, "startdom": 1, "N": 1, "realm1": 10,   },    
	"246": {"name": "Freak Lord", "pointcost": 90, "startdom": 1, "B": 1, "realm1": 10,   },    
	"248": {"name": "Arch Mage", "pointcost": 70, "startdom": 1, "W": 1, "realm1": 9,   },    
	"249": {"name": "Crone", "pointcost": 80, "startdom": 1, "D": 1, "realm1": 10,   },    
	"250": {"name": "Frost Father", "pointcost": 90, "startdom": 1, "A": 1, "W": 1, "realm1": 10, "realm2": 1,   },    
	"251": {"name": "Great Sage", "pointcost": 110, "startdom": 1, "S": 1, "realm1": 10,   },    
	"265": {"name": "Dragon", "pointcost": 220, "pathcost": 80, "startdom": 2, "W": 2, "shapechange": 267, "realm1": 10,   },    
	"266": {"name": "Dragon", "pointcost": 220, "pathcost": 80, "startdom": 2, "N": 2, "shapechange": 268, "realm1": 10,   },    
	"267": {"name": "Frost Father", "pointcost": undefined, "pathcost": 80, "startdom": 2, "W": 2, "shapechange": 265, "realm1": 10,   },    
	"268": {"name": "Master Enchanter", "pointcost": undefined, "pathcost": 80, "startdom": 2, "N": 2, "shapechange": 266, "realm1": 10,   },    
	"269": {"name": "Wyrm", "pointcost": 120, "pathcost": 80, "startdom": 2, "W": 1, "E": 1, "realm1": 1,   },    
	"270": {"name": "Arch Druid", "pointcost": 90, "startdom": 1, "N": 1, "realm1": 2,   },    
	"294": {"name": "Nerid", "pointcost": 150, "pathcost": 60, "startdom": 3, "W": 1, "N": 2, "realm1": 9,   },    
	"320": {"name": "Saurolich", "pointcost": 230, "pathcost": 40, "startdom": 2, "D": 3,   },    
	"383": {"name": "Prince of Death", "pointcost": 250, "pathcost": 80, "startdom": 2, "D": 3, "realm1": 3,   },    
	"384": {"name": "Neter of Crafts", "pointcost": 220, "pathcost": 60, "startdom": 3, "E": 2, "S": 1, "realm1": 7,   },    
	"385": {"name": "Neteret of Joy", "pointcost": 210, "pathcost": 60, "startdom": 3, "E": 2, "N": 1, "realm1": 7,   },    
	"386": {"name": "Neter of the Sun", "pointcost": 250, "pathcost": 60, "startdom": 3, "F": 2, "S": 1, "realm1": 7,   },    
	"387": {"name": "Neteret of Many Names", "pointcost": 240, "pathcost": 20, "startdom": 3, "S": 1, "realm1": 7,   },    
	"388": {"name": "Neter of Chaos", "pointcost": 220, "pathcost": 60, "startdom": 3, "F": 1, "A": 1, "D": 1, "realm1": 7,   },    
	"395": {"name": "Lich Queen", "pointcost": 160, "pathcost": 40, "startdom": 2, "D": 3, "realm1": 7,   },    
	"401": {"name": "Bitch Queen", "pointcost": 130, "startdom": 1, "N": 1, "shapechange": 402, "realm1": 1,   },    
	"402": {"name": "Crone", "pointcost": undefined, "startdom": 1, "N": 1, "shapechange": 401,   },    
	"472": {"name": "Statue of Order", "pointcost": 170, "pathcost": 40, "startdom": 4, "E": 1, "S": 2, "realm1": 3,   },    
	"485": {"name": "Great Enchantress", "pointcost": 90, "startdom": 1, "S": 1, "realm1": 10,   },    
	"486": {"name": "Great Warlock", "pointcost": 80, "pathcost": 10, "startdom": 1, "B": 1,   },    
	"499": {"name": "Nataraja", "pointcost": 240, "pathcost": 60, "startdom": 3, "F": 1, "E": 1, "S": 1, "realm1": 8,   },    
	"500": {"name": "Skratti", "pointcost": 100, "pathcost": 10, "startdom": 1, "B": 1,   },    
	"501": {"name": "Allfather", "pointcost": 270, "pathcost": 40, "startdom": 3, "A": 1, "S": 1, "D": 1, "realm1": 1,   },    
	"509": {"name": "Arch Seraph", "pointcost": 90, "pathcost": 10, "startdom": 1, "A": 1,   },    
	"546": {"name": "Void Lurker", "pointcost": 170, "pathcost": 20, "startdom": 4, "S": 3,   },    
	"550": {"name": "Master Alchemist", "pointcost": 80, "pathcost": 10, "startdom": 1, "E": 1,   },    
	"600": {"name": "Titan of War and Wisdom", "pointcost": 260, "pathcost": 60, "startdom": 3, "A": 1, "E": 1, "S": 1, "realm1": 3,   },    
	"601": {"name": "Devi of Fortunes", "pointcost": undefined, "pathcost": 60, "startdom": 3, "W": 2, "S": 1,   },    
	"602": {"name": "Titan of Heaven", "pointcost": 230, "pathcost": 60, "startdom": 3, "A": 2, "E": 1, "realm1": 3,   },    
	"603": {"name": "Teotl of Rain", "pointcost": 240, "pathcost": 60, "startdom": 3, "W": 1, "N": 1, "B": 1, "realm1": 6,   },    
	"604": {"name": "Teotl of the Night", "pointcost": 270, "pathcost": 60, "startdom": 3, "D": 1, "B": 2, "realm1": 6,   },    
	"605": {"name": "Son of Niefel", "pointcost": 230, "pathcost": 60, "startdom": 3, "W": 2, "D": 1,   },    
	"606": {"name": "Great Mother", "pointcost": 220, "pathcost": 60, "startdom": 3, "E": 1, "N": 2, "realm1": 2,   },    
	"607": {"name": "Baphomet", "pointcost": 180, "pathcost": 40, "startdom": 4, "F": 2, "S": 1, "B": 1,   },    
	"608": {"name": "Phoenix", "pointcost": 90, "pathcost": 80, "startdom": 2, "F": 1, "A": 1, "realm1": 7,   },    
	"643": {"name": "Bog Mummy", "pointcost": 180, "pathcost": 40, "startdom": 2, "D": 1, "B": 1,   },    
	"644": {"name": "Dracolich", "pointcost": 180, "pathcost": 80, "startdom": 2, "D": 2, "shapechange": 645,   },    
	"645": {"name": "Bog Mummy", "pointcost": undefined, "pathcost": 80, "startdom": 2, "D": 2, "shapechange": 644,   },    
	"652": {"name": "Void Lord", "pointcost": 220, "pathcost": 60, "startdom": 3, "W": 1, "S": 2,   },    
	"653": {"name": "Serpent King", "pointcost": 80, "startdom": 1, "N": 1, "shapechange": 654, "realm1": 7,   },    
	"654": {"name": "Serpent King", "pointcost": undefined, "startdom": 1, "N": 1, "shapechange": 653, "realm1": 7,   },    
	"655": {"name": "Scorpion King", "pointcost": 110, "pathcost": 60, "startdom": 2, "F": 1, "E": 1, "realm1": 5,   },    
	"656": {"name": "Fountain of Blood", "pointcost": 200, "pathcost": 40, "startdom": 4, "B": 3, "realm1": 10,   },    
	"657": {"name": "Monolith", "pointcost": 160, "pathcost": 40, "startdom": 4, "E": 1, "S": 1, "N": 1, "realm1": 2, "realm2": 1,   },    
	"661": {"name": "Shedu", "pointcost": 100, "pathcost": 80, "startdom": 2, "E": 1, "S": 1, "realm1": 5,   },    
	"779": {"name": "Rams-Headed Serpent", "pointcost": 90, "pathcost": 80, "startdom": 2, "N": 2, "realm1": 2,   },    
	"812": {"name": "Lord of the Wild", "pointcost": 250, "pathcost": 60, "startdom": 3, "N": 2, "B": 1, "realm1": 3,   },    
	"857": {"name": "Smoking Mirror", "pointcost": 100, "pathcost": 20, "startdom": 1, "F": 1, "D": 1, "B": 1, "shapechange": 858,   },    
	"858": {"name": "Jaguar", "pointcost": undefined, "pathcost": 20, "startdom": 1, "F": 1, "D": 1, "B": 1, "shapechange": 857,   },    
	"862": {"name": "Vampire Queen", "pointcost": 250, "pathcost": 40, "startdom": 1, "D": 1, "B": 2,   },    
	"872": {"name": "Ghost King", "pointcost": 200, "pathcost": 20, "startdom": 2, "D": 1, "realm1": 10,   },    
	"873": {"name": "Great Seer of the Deeps", "pointcost": 90, "startdom": 1, "S": 1,   },    
	"874": {"name": "Divine Emperor", "pointcost": 100, "startdom": 2, "S": 1,   },    
	"905": {"name": "Jade Emperor", "pointcost": 200, "pathcost": 60, "startdom": 3, "A": 1, "W": 1, "S": 1, "realm1": 4,   },    
	"956": {"name": "Mother of Tuathas", "pointcost": undefined, "pathcost": 60, "startdom": 3, "A": 2, "N": 1,   },    
	"957": {"name": "Lord of The Desert Sun", "pointcost": 240, "pathcost": 60, "startdom": 3, "F": 2, "N": 1, "realm1": 5,   },    
	"958": {"name": "Colossal Head", "pointcost": 160, "pathcost": 40, "startdom": 4, "E": 1, "B": 2, "realm1": 6,   },    
	"961": {"name": "Titan of the Sea", "pointcost": 230, "pathcost": 60, "startdom": 3, "W": 2, "E": 1, "realm1": 3,   },    
	"964": {"name": "Lord of Fertility", "pointcost": undefined, "pathcost": 60, "startdom": 3, "E": 1, "N": 2,   },    
	"973": {"name": "Ancient Kraken", "pointcost": 110, "pathcost": 80, "startdom": 2, "E": 1, "S": 1, "realm1": 9,   },    
	"978": {"name": "Great Black Bull", "pointcost": 90, "pathcost": 80, "startdom": 2, "N": 1, "B": 1, "realm1": 3,   },    
	"979": {"name": "Great White Bull", "pointcost": 90, "pathcost": 80, "startdom": 2, "E": 1, "N": 1, "realm1": 3,   },    
	"1025": {"name": "Divine Glyph", "pointcost": 140, "pathcost": 40, "startdom": 4, "F": 1, "S": 2,   },    
	"1026": {"name": "Carrion Dragon", "pointcost": 150, "pathcost": 80, "startdom": 2, "D": 1, "N": 1, "shapechange": 1027,   },    
	"1027": {"name": "Carrion Lord", "pointcost": undefined, "pathcost": 80, "startdom": 2, "D": 1, "N": 1, "shapechange": 1026,   },    
	"1096": {"name": "Destroyer of Worlds", "pointcost": 230, "pathcost": 60, "startdom": 3, "A": 2, "D": 1, "realm1": 8,   },    
	"1097": {"name": "Lord of The Summer Plague", "pointcost": 230, "pathcost": 60, "startdom": 3, "F": 1, "D": 2, "realm1": 5,   },    
	"1098": {"name": "Asynja", "pointcost": 250, "pathcost": 60, "startdom": 3, "A": 2, "E": 1, "realm1": 1,   },    
	"1229": {"name": "Son of Fenrer", "pointcost": 90, "pathcost": 80, "startdom": 2, "W": 1, "N": 1, "realm1": 1,   },    
	"1230": {"name": "Forge Lord", "pointcost": 240, "pathcost": 60, "startdom": 3, "F": 1, "E": 2, "realm1": 3,   },    
	"1231": {"name": "Drakaina", "pointcost": 240, "pathcost": 60, "startdom": 3, "W": 1, "D": 1, "N": 1, "realm1": 9,   },    
	"1232": {"name": "Old Man of the Sea", "pointcost": 260, "pathcost": 30, "startdom": 3, "W": 2, "S": 1, "realm1": 9,   },    
	"1233": {"name": "Lord of the Waves", "pointcost": 220, "pathcost": 60, "startdom": 3, "A": 1, "W": 1, "N": 1, "realm1": 9,   },    
	"1339": {"name": "Nyorai", "pointcost": 200, "pathcost": 60, "startdom": 3, "E": 2, "S": 1, "realm1": 4,   },    
	"1340": {"name": "Tiwaz of War", "pointcost": 230, "pathcost": 60, "startdom": 3, "F": 1, "A": 1, "E": 1,   },    
	"1341": {"name": "Devi of Darkness", "pointcost": 250, "pathcost": 60, "startdom": 3, "E": 1, "B": 2, "realm1": 8,   },    
	"1342": {"name": "Titan of Rivers", "pointcost": 240, "pathcost": 60, "startdom": 3, "W": 2, "S": 1, "realm1": 3,   },    
	"1343": {"name": "Titan of Love", "pointcost": 250, "pathcost": 60, "startdom": 3, "W": 1, "N": 2, "realm1": 3,   },    
	"1344": {"name": "Devi of Good Fortunes", "pointcost": 240, "pathcost": 60, "startdom": 3, "W": 1, "S": 2, "realm1": 8,   },    
	"1345": {"name": "Celestial General", "pointcost": 230, "pathcost": 60, "startdom": 3, "A": 1, "E": 1, "S": 1, "realm1": 4,   },    
	"1346": {"name": "Colossal Fetish", "pointcost": 240, "pathcost": 40, "startdom": 4, "E": 2, "N": 1,   },    
	"1348": {"name": "Titan of Serpents and Medicine", "pointcost": 250, "pathcost": 60, "startdom": 3, "D": 1, "N": 2, "realm1": 3,   },    
	"1349": {"name": "Devourer of Souls", "pointcost": 70, "pathcost": 80, "startdom": 2, "E": 1, "D": 1,   },    
	"1370": {"name": "Volla of the Bountiful Forest", "pointcost": 200, "pathcost": 60, "startdom": 3, "W": 2, "N": 1,   },    
	"1371": {"name": "Titan of Death and Rebirth", "pointcost": 220, "pathcost": 60, "startdom": 3, "E": 1, "D": 1, "N": 1, "realm1": 3,   },    
	"1372": {"name": "Annunaki of the Sky", "pointcost": 270, "pathcost": 60, "startdom": 3, "A": 3, "realm1": 5,   },    
	"1373": {"name": "Annunaki of Sweet Waters", "pointcost": 240, "pathcost": 60, "startdom": 3, "W": 2, "E": 1, "realm1": 5,   },    
	"1374": {"name": "Annunaki of the Morning Star", "pointcost": 230, "pathcost": 60, "startdom": 3, "A": 1, "E": 1, "S": 1, "realm1": 5,   },    
	"1378": {"name": "Lord of the Forest", "pointcost": 200, "pathcost": 60, "startdom": 3, "E": 1, "N": 2, "realm1": 2,   },    
	"1379": {"name": "Keeper of the Bridge", "pointcost": 200, "pathcost": 60, "startdom": 3, "A": 1, "E": 1, "N": 1, "realm1": 1,   },    
	"1384": {"name": "Solar Disc", "pointcost": 230, "pathcost": 60, "startdom": 3, "F": 3, "realm1": 5,   },    
	"1402": {"name": "Polypal Queen", "pointcost": 180, "pathcost": 20, "startdom": 4, "W": 1, "S": 2,   },    
	"1428": {"name": "Bakemono Kunshu", "pointcost": 110, "pathcost": 40, "startdom": 1, "F": 1, "D": 1,   },    
	"1561": {"name": "Father of Winters", "pointcost": 220, "pathcost": 60, "startdom": 3, "A": 1, "W": 2, "realm1": 1,   },    
	"1581": {"name": "Risen Oracle", "pointcost": 180, "pathcost": 60, "startdom": 2, "E": 1, "D": 1,   },    
	"1590": {"name": "Ageless Olm", "pointcost": 90, "pathcost": 60, "startdom": 2, "W": 1, "E": 1,   },    
	"1896": {"name": "Lawgiver", "pointcost": 90, "pathcost": 40, "startdom": 1, "A": 1, "S": 1, "N": 1, "shapechange": 1897,   },    
	"1897": {"name": "Feathered Serpent", "pointcost": undefined, "pathcost": 40, "startdom": 1, "A": 1, "S": 1, "N": 1, "shapechange": 1896,   },    
	"1898": {"name": "Fomorian Sorcerer", "pointcost": 90, "pathcost": 20, "startdom": 1, "A": 1, "D": 1,   },    
	"1899": {"name": "Fomorian God King", "pointcost": 260, "pathcost": 60, "startdom": 3, "W": 1, "D": 2,   },    
	"1905": {"name": "Great Sorceress", "pointcost": 100, "pathcost": 10, "startdom": 1, "A": 1, "D": 1,   },    
	"2082": {"name": "Son of the Fallen", "pointcost": 240, "pathcost": 60, "startdom": 3, "B": 3,   },    
	"2137": {"name": "Urmahullu", "pointcost": 120, "pathcost": 60, "startdom": 2, "A": 1, "S": 1, "realm1": 5,   },    
	"2138": {"name": "Sphinx", "pointcost": 120, "pathcost": 60, "startdom": 2, "S": 1, "D": 1, "realm1": 5,   },    
	"2202": {"name": "Great Siddha", "pointcost": 200, "pathcost": 80, "startdom": 2, "A": 1, "S": 2, "realm1": 8,   },    
	"2203": {"name": "Oni Kunshu", "pointcost": 220, "pathcost": 60, "startdom": 3, "F": 1, "E": 1, "D": 1,   },    
	"2205": {"name": "Great Sauromancer", "pointcost": 90, "startdom": 1, "D": 2,   },    
	"2206": {"name": "Eldest Dwarf", "pointcost": 80, "pathcost": 20, "startdom": 1, "E": 1, "realm1": 1,   },    
	"2207": {"name": "Great Sorcerer", "pointcost": 80, "pathcost": 10, "startdom": 1, "D": 1,   },    
	"2234": {"name": "Irminsul", "pointcost": 180, "pathcost": 60, "startdom": 4, "N": 3, "realm1": 1,   },    
	"2239": {"name": "Asynja", "pointcost": 230, "pathcost": 60, "startdom": 3, "A": 1, "N": 2, "realm1": 1,   },    
	"2315": {"name": "Melqart", "pointcost": 210, "pathcost": 60, "startdom": 2, "B": 3,   },    
	"2316": {"name": "Dragon King", "pointcost": 200, "pathcost": 60, "startdom": 2, "W": 2, "shapechange": 2317, "realm1": 4,   },    
	"2317": {"name": "Celestial Bureaucrat", "pointcost": undefined, "pathcost": 60, "startdom": 2, "W": 2, "shapechange": 2316,   },    
	"2318": {"name": "Celestial Dragon", "pointcost": 200, "pathcost": 60, "startdom": 2, "A": 1, "S": 1, "shapechange": 2319, "realm1": 4,   },    
	"2319": {"name": "Celestial Bureaucrat", "pointcost": undefined, "pathcost": 60, "startdom": 2, "A": 1, "S": 1, "shapechange": 2318,   },    
	"2426": {"name": "Bouda Father", "pointcost": 110, "pathcost": 20, "startdom": 1, "F": 1, "E": 1, "D": 1, "shapechange": 2427,   },    
	"2427": {"name": "Werehyena", "pointcost": undefined, "pathcost": 20, "startdom": 1, "F": 1, "E": 1, "D": 1, "shapechange": 2426,   },    
	"2431": {"name": "Titan of the Underworld", "pointcost": 230, "pathcost": 60, "startdom": 3, "E": 1, "D": 2, "realm1": 3,   },    
	"2434": {"name": "Teteo Inan", "pointcost": 250, "pathcost": 60, "startdom": 3, "E": 1, "N": 1, "B": 1, "realm1": 6,   },    
	"2435": {"name": "Annunaki of Love and War", "pointcost": 250, "pathcost": 60, "startdom": 3, "A": 1, "E": 1, "N": 1, "realm1": 5,   },    
	"2436": {"name": "Annunaki of the Moon", "pointcost": 260, "pathcost": 60, "startdom": 3, "A": 1, "S": 2, "realm1": 5,   },    
	"2437": {"name": "Annunaki of Growth and Rebirth", "pointcost": 240, "pathcost": 60, "startdom": 3, "E": 1, "N": 2, "realm1": 5,   },    
	"2438": {"name": "Annunaki of the Underworld", "pointcost": 260, "pathcost": 60, "startdom": 3, "D": 3, "realm1": 5,   },    
	"2440": {"name": "Sea Dragon", "pointcost": 140, "pathcost": 80, "startdom": 2, "W": 2, "shapechange": 2441, "realm1": 9,   },    
	"2441": {"name": "Great Seer of the Deeps", "pointcost": undefined, "pathcost": 80, "startdom": 2, "W": 2, "shapechange": 2440,   },    
	"2442": {"name": "Teotl of War", "pointcost": 240, "pathcost": 60, "startdom": 3, "F": 1, "N": 1, "B": 1, "realm1": 6,   },    
	"2443": {"name": "Teotl of the Sky", "pointcost": 230, "pathcost": 60, "startdom": 3, "F": 1, "A": 1, "N": 1, "realm1": 6,   },    
	"2444": {"name": "Teotl of the Underworld", "pointcost": 250, "pathcost": 60, "startdom": 3, "S": 1, "D": 2, "realm1": 6,   },    
	"2445": {"name": "Neter of the Underworld", "pointcost": 250, "pathcost": 60, "startdom": 3, "D": 3, "realm1": 7,   },    
	"2446": {"name": "Neter of Kings", "pointcost": 230, "pathcost": 60, "startdom": 3, "F": 1, "W": 1, "S": 1, "realm1": 7,   },    
	"2447": {"name": "Idol of Men", "pointcost": 160, "pathcost": 40, "startdom": 4, "F": 1, "A": 1, "N": 1, "realm1": 1,   },    
	"2448": {"name": "Idol of Beasts", "pointcost": 160, "pathcost": 40, "startdom": 4, "A": 1, "N": 2, "realm1": 1,   },    
	"2449": {"name": "Idol of Sorcery", "pointcost": 160, "pathcost": 40, "startdom": 4, "S": 2, "D": 1, "realm1": 1,   },    
	"2450": {"name": "Horned One", "pointcost": 250, "pathcost": 60, "startdom": 3, "N": 3, "realm1": 2,   },    
	"2457": {"name": "Bodhisattva of Mercy", "pointcost": 260, "pathcost": 80, "startdom": 2, "A": 2, "S": 1, "realm1": 4,   },    
	"2460": {"name": "Statue of Fertility", "pointcost": 170, "pathcost": 40, "startdom": 4, "E": 1, "N": 2, "realm1": 3,   },    
	"2461": {"name": "Statue of the Bloody Mother", "pointcost": 160, "pathcost": 40, "startdom": 4, "N": 1, "B": 2, "realm1": 6,   },    
	"2462": {"name": "Golden Idol", "pointcost": 160, "pathcost": 40, "startdom": 4, "E": 2, "B": 1, "realm1": 5,   },    
	"2463": {"name": "Statue of War", "pointcost": 170, "pathcost": 40, "startdom": 4, "F": 2, "E": 1, "realm1": 3,   },    
	"2464": {"name": "Neter of the Moon", "pointcost": 270, "pathcost": 60, "startdom": 3, "S": 3, "realm1": 7,   },    
	"2465": {"name": "Statue of War", "pointcost": 170, "pathcost": 40, "startdom": 4, "F": 2, "E": 1, "realm1": 4,   },    
	"2466": {"name": "Kamadhenu", "pointcost": 110, "pathcost": 80, "startdom": 2, "S": 1, "N": 1, "realm1": 8,   },    
	"2502": {"name": "Earth made Flesh", "pointcost": 270, "pathcost": 60, "startdom": 3, "W": 1, "E": 3,   },    
	"2503": {"name": "Golden Pillar", "pointcost": 200, "pathcost": 40, "startdom": 4, "E": 3,   },    
	"2549": {"name": "Maharishi", "pointcost": 80, "startdom": 1, "S": 1, "realm1": 8,   },    
	"2550": {"name": "Raksharani", "pointcost": 160, "pathcost": 40, "startdom": 2, "D": 1, "N": 1, "B": 1, "shapechange": 2551,   },    
	"2551": {"name": "Manushya Raksharani", "pointcost": undefined, "pathcost": 40, "startdom": 2, "D": 1, "N": 1, "B": 1, "shapechange": 2550,   },    
	"2552": {"name": "Ahura of Wisdom", "pointcost": 280, "pathcost": 60, "startdom": 3, "S": 3,   },    
	"2553": {"name": "Ahura of the Oath", "pointcost": 240, "pathcost": 80, "startdom": 2, "F": 2, "S": 1,   },    
	"2554": {"name": "Ahura of the Waters", "pointcost": 260, "pathcost": 80, "startdom": 2, "W": 2, "S": 1,   },    
	"2555": {"name": "Spenta Mainyu", "pointcost": 250, "pathcost": 80, "startdom": 2, "A": 1, "S": 2,   },    
	"2556": {"name": "Celestial Carp", "pointcost": 230, "pathcost": 60, "startdom": 3, "W": 2, "S": 1, "realm1": 4,   },    
	"2578": {"name": "Yazad King", "pointcost": 240, "pathcost": 40, "startdom": 2, "A": 1, "W": 1, "S": 1,   },    
	"2608": {"name": "Azi", "pointcost": 220, "pathcost": 80, "startdom": 2, "F": 1, "D": 1, "shapechange": 2609,   },    
	"2609": {"name": "Great Warlock", "pointcost": undefined, "pathcost": 80, "startdom": 2, "F": 1, "D": 1, "shapechange": 2608,   },    
	"2610": {"name": "Angra Mainyu", "pointcost": 260, "pathcost": 60, "startdom": 3, "F": 1, "D": 1, "B": 1,   },    
	"2611": {"name": "Gannag Menog", "pointcost": 240, "pathcost": 80, "startdom": 2, "F": 1, "D": 2,   },    
	"2627": {"name": "Daeva of Wrath", "pointcost": 200, "pathcost": 80, "startdom": 2, "F": 2, "B": 1,   },    
	"2685": {"name": "Viracocha", "pointcost": 270, "pathcost": 60, "startdom": 3, "F": 1, "A": 1, "W": 1,   },    
	"2686": {"name": "Apu Inti", "pointcost": 280, "pathcost": 60, "startdom": 3, "F": 3,   },    
	"2693": {"name": "Heavenly Condor", "pointcost": 120, "pathcost": 80, "startdom": 2, "A": 2,   },    
	"2695": {"name": "Sapa Inca", "pointcost": 220, "pathcost": 40, "startdom": 2, "F": 1, "A": 1, "S": 1,   },    
	"2696": {"name": "Stone Huaca", "pointcost": 140, "pathcost": 40, "startdom": 4, "A": 1, "E": 2,   },    
	"2698": {"name": "Apu Illapa", "pointcost": 270, "pathcost": 60, "startdom": 3, "A": 3,   },    
	"2699": {"name": "Ayar", "pointcost": 210, "pathcost": 80, "startdom": 2, "F": 1, "E": 2,   },    
	"2737": {"name": "Immortal Coya", "pointcost": 160, "pathcost": 30, "startdom": 2, "E": 1, "D": 2,   },    
	"2755": {"name": "Hun Came", "pointcost": 280, "pathcost": 60, "startdom": 3, "E": 1, "D": 2, "realm1": 6,   },    
	"2756": {"name": "Bolon-ti-ku", "pointcost": 210, "pathcost": 80, "startdom": 2, "D": 2, "B": 1, "realm1": 6,   },    
	"2764": {"name": "Hun Balam", "pointcost": 90, "pathcost": 80, "startdom": 2, "F": 1, "B": 1, "realm1": 6,   },    
	"2777": {"name": "Demon Macaw", "pointcost": 110, "pathcost": 80, "startdom": 2, "F": 1, "S": 1, "realm1": 6,   },    
	"2783": {"name": "Drakon", "pointcost": 150, "pathcost": 80, "startdom": 2, "E": 1, "N": 1, "realm1": 3,   },    
	"2784": {"name": "Thrice Horned Boar", "pointcost": 80, "pathcost": 80, "startdom": 2, "E": 1, "N": 1, "realm1": 2,   },    
	"2785": {"name": "Solar Eagle", "pointcost": 150, "pathcost": 80, "startdom": 2, "F": 1, "A": 1, "realm1": 10,   },    
	"2786": {"name": "Celestial Gryphon", "pointcost": 110, "pathcost": 80, "startdom": 2, "A": 2, "realm1": 5,   },    
	"2787": {"name": "Celestial Lion", "pointcost": 90, "pathcost": 80, "startdom": 2, "F": 1, "S": 1, "realm1": 5,   },    
	"2788": {"name": "Man-Eater", "pointcost": 100, "pathcost": 80, "startdom": 2, "E": 1, "B": 1, "realm1": 5,   },    
	"2789": {"name": "Raven of the Underworld", "pointcost": 100, "pathcost": 80, "startdom": 2, "D": 2, "realm1": 10,   },    
	"2790": {"name": "Myrmecoleon", "pointcost": 60, "pathcost": 80, "startdom": 2, "F": 1, "E": 1, "realm1": 7,   },    
	"2791": {"name": "Earth Serpent", "pointcost": 130, "pathcost": 80, "startdom": 2, "E": 2, "realm1": 10,   },    
	"2792": {"name": "Solar Serpent", "pointcost": 100, "pathcost": 80, "startdom": 2, "F": 2, "realm1": 7,   },    
	"2793": {"name": "Serpent of Chaos", "pointcost": 110, "pathcost": 80, "startdom": 2, "D": 2, "realm1": 7,   },    
	"2795": {"name": "Dog of the Underworld", "pointcost": 70, "pathcost": 80, "startdom": 2, "W": 1, "D": 1, "realm1": 2,   },    
	"2796": {"name": "Hound of Hades", "pointcost": 80, "pathcost": 80, "startdom": 2, "E": 1, "D": 1, "realm1": 3,   },    
	"2797": {"name": "Hieracosphinx", "pointcost": 110, "pathcost": 80, "startdom": 2, "F": 1, "A": 1, "realm1": 7,   },    
	"2798": {"name": "Criosphinx", "pointcost": 70, "pathcost": 80, "startdom": 2, "A": 1, "N": 1, "realm1": 7,   },    
	"2799": {"name": "Wadjet", "pointcost": 90, "pathcost": 80, "startdom": 2, "W": 1, "N": 1, "realm1": 7,   },    
	"2800": {"name": "Ormr", "pointcost": 80, "pathcost": 80, "startdom": 2, "W": 1, "E": 1, "realm1": 1,   },    
	"2801": {"name": "Linnormr", "pointcost": 120, "pathcost": 80, "startdom": 2, "W": 1, "D": 1, "realm1": 1,   },    
	"2802": {"name": "Svartalf Mastersmith", "pointcost": 200, "pathcost": 20, "startdom": 1, "E": 1, "D": 1, "shapechange": 2803, "realm1": 1,   },    
	"2803": {"name": "Linnormr", "pointcost": undefined, "pathcost": 20, "startdom": 1, "E": 1, "D": 1, "shapechange": 2802, "realm1": 1,   },    
	"2847": {"name": "Protogenos of the Sea", "pointcost": 210, "pathcost": 80, "startdom": 4, "W": 3, "realm1": 9,   },    
	"2848": {"name": "Father of the Sea", "pointcost": 190, "pathcost": 80, "startdom": 4, "W": 3, "realm1": 2,   },    
	"2849": {"name": "Father of Monsters", "pointcost": 230, "pathcost": 60, "startdom": 3, "F": 1, "W": 1, "D": 1, "realm1": 9,   },    
	"2850": {"name": "Statue of the Underworld", "pointcost": 190, "pathcost": 40, "startdom": 4, "D": 3, "realm1": 3,   },    
	"2851": {"name": "Titan of Winds and Waves", "pointcost": 250, "pathcost": 60, "startdom": 3, "A": 2, "W": 1, "realm1": 3,   },    
	"2852": {"name": "King of Frozen Bones", "pointcost": 120, "pathcost": 20, "startdom": 1, "W": 1, "D": 1,   },    
	"2853": {"name": "Ghost King", "pointcost": 200, "pathcost": 20, "startdom": 2, "D": 1,   },    
	"2855": {"name": "Floating Mind", "pointcost": 30, "pathcost": 80, "startdom": 2, "W": 1, "S": 1, "realm1": 9,   },    
	"2856": {"name": "Son of the Sea", "pointcost": 270, "pathcost": 60, "startdom": 3, "A": 1, "W": 1, "D": 1, "realm1": 2,   },    
	"2881": {"name": "Telkhine God-King", "pointcost": 310, "pathcost": 40, "startdom": 2, "A": 1, "W": 1, "E": 1, "shapechange": 2882,   },    
	"2882": {"name": "Telkhine God-King", "pointcost": undefined, "pathcost": 40, "startdom": 2, "A": 1, "W": 1, "E": 1, "shapechange": 2881,   },    
	"2922": {"name": "Morgen High Queen", "pointcost": 110, "pathcost": 10, "startdom": 1, "A": 1, "W": 1,   },    
	"2930": {"name": "Hooded Spirit", "pointcost": 150, "pathcost": 80, "startdom": 2, "W": 1, "E": 1, "N": 1, "realm1": 2,   }
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

