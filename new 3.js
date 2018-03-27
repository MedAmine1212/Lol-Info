T=new Array;
var j=0;
var x={"data":{"Jax":{"id":24,"key":"Jax","name":"Jax","title":"Grandmaster at Arms"},"Sona":{"id":37,"key":"Sona","name":"Sona","title":"Maven of the Strings"},"Tristana":{"id":18,"key":"Tristana","name":"Tristana","title":"the Yordle Gunner"},"Varus":{"id":110,"key":"Varus","name":"Varus","title":"the Arrow of Retribution"},"Kaisa":{"id":145,"key":"Kaisa","name":"Kai'Sa","title":"Daughter of the Void"},"Fiora":{"id":114,"key":"Fiora","name":"Fiora","title":"the Grand Duelist"},"Singed":{"id":27,"key":"Singed","name":"Singed","title":"the Mad Chemist"},"TahmKench":{"id":223,"key":"TahmKench","name":"Tahm Kench","title":"the River King"},"Leblanc":{"id":7,"key":"Leblanc","name":"LeBlanc","title":"the Deceiver"},"Thresh":{"id":412,"key":"Thresh","name":"Thresh","title":"the Chain Warden"},"Karma":{"id":43,"key":"Karma","name":"Karma","title":"the Enlightened One"},"Jhin":{"id":202,"key":"Jhin","name":"Jhin","title":"the Virtuoso"},"Rumble":{"id":68,"key":"Rumble","name":"Rumble","title":"the Mechanized Menace"},"Udyr":{"id":77,"key":"Udyr","name":"Udyr","title":"the Spirit Walker"},"LeeSin":{"id":64,"key":"LeeSin","name":"Lee Sin","title":"the Blind Monk"},"Yorick":{"id":83,"key":"Yorick","name":"Yorick","title":"Shepherd of Souls"},"Ornn":{"id":516,"key":"Ornn","name":"Ornn","title":"The Fire below the Mountain"},"Kayn":{"id":141,"key":"Kayn","name":"Kayn","title":"the Shadow Reaper"},"Kassadin":{"id":38,"key":"Kassadin","name":"Kassadin","title":"the Void Walker"},"Sivir":{"id":15,"key":"Sivir","name":"Sivir","title":"the Battle Mistress"},"MissFortune":{"id":21,"key":"MissFortune","name":"Miss Fortune","title":"the Bounty Hunter"},"Draven":{"id":119,"key":"Draven","name":"Draven","title":"the Glorious Executioner"},"Yasuo":{"id":157,"key":"Yasuo","name":"Yasuo","title":"the Unforgiven"},"Kayle":{"id":10,"key":"Kayle","name":"Kayle","title":"The Judicator"},"Shaco":{"id":35,"key":"Shaco","name":"Shaco","title":"the Demon Jester"},"Renekton":{"id":58,"key":"Renekton","name":"Renekton","title":"the Butcher of the Sands"},"Hecarim":{"id":120,"key":"Hecarim","name":"Hecarim","title":"the Shadow of War"},"Fizz":{"id":105,"key":"Fizz","name":"Fizz","title":"the Tidal Trickster"},"KogMaw":{"id":96,"key":"KogMaw","name":"Kog'Maw","title":"the Mouth of the Abyss"},"Maokai":{"id":57,"key":"Maokai","name":"Maokai","title":"the Twisted Treant"},"Lissandra":{"id":127,"key":"Lissandra","name":"Lissandra","title":"the Ice Witch"},"Jinx":{"id":222,"key":"Jinx","name":"Jinx","title":"the Loose Cannon"},"Urgot":{"id":6,"key":"Urgot","name":"Urgot","title":"the Dreadnought"},"Fiddlesticks":{"id":9,"key":"Fiddlesticks","name":"Fiddlesticks","title":"the Harbinger of Doom"},"Galio":{"id":3,"key":"Galio","name":"Galio","title":"the Colossus"},"Pantheon":{"id":80,"key":"Pantheon","name":"Pantheon","title":"the Artisan of War"},"Talon":{"id":91,"key":"Talon","name":"Talon","title":"the Blade's Shadow"},"Gangplank":{"id":41,"key":"Gangplank","name":"Gangplank","title":"the Saltwater Scourge"},"Ezreal":{"id":81,"key":"Ezreal","name":"Ezreal","title":"the Prodigal Explorer"},"Gnar":{"id":150,"key":"Gnar","name":"Gnar","title":"the Missing Link"},"Teemo":{"id":17,"key":"Teemo","name":"Teemo","title":"the Swift Scout"},"Annie":{"id":1,"key":"Annie","name":"Annie","title":"the Dark Child"},"Mordekaiser":{"id":82,"key":"Mordekaiser","name":"Mordekaiser","title":"the Iron Revenant"},"Azir":{"id":268,"key":"Azir","name":"Azir","title":"the Emperor of the Sands"},"Kennen":{"id":85,"key":"Kennen","name":"Kennen","title":"the Heart of the Tempest"},"Riven":{"id":92,"key":"Riven","name":"Riven","title":"the Exile"},"Chogath":{"id":31,"key":"Chogath","name":"Cho'Gath","title":"the Terror of the Void"},"Aatrox":{"id":266,"key":"Aatrox","name":"Aatrox","title":"the Darkin Blade"},"Poppy":{"id":78,"key":"Poppy","name":"Poppy","title":"Keeper of the Hammer"},"Taliyah":{"id":163,"key":"Taliyah","name":"Taliyah","title":"the Stoneweaver"},"Illaoi":{"id":420,"key":"Illaoi","name":"Illaoi","title":"the Kraken Priestess"},"Heimerdinger":{"id":74,"key":"Heimerdinger","name":"Heimerdinger","title":"the Revered Inventor"},"Alistar":{"id":12,"key":"Alistar","name":"Alistar","title":"the Minotaur"},"XinZhao":{"id":5,"key":"XinZhao","name":"Xin Zhao","title":"the Seneschal of Demacia"},"Lucian":{"id":236,"key":"Lucian","name":"Lucian","title":"the Purifier"},"Volibear":{"id":106,"key":"Volibear","name":"Volibear","title":"the Thunder's Roar"},"Sejuani":{"id":113,"key":"Sejuani","name":"Sejuani","title":"Fury of the North"},"Nidalee":{"id":76,"key":"Nidalee","name":"Nidalee","title":"the Bestial Huntress"},"Garen":{"id":86,"key":"Garen","name":"Garen","title":"The Might of Demacia"},"Leona":{"id":89,"key":"Leona","name":"Leona","title":"the Radiant Dawn"},"Zed":{"id":238,"key":"Zed","name":"Zed","title":"the Master of Shadows"},"Blitzcrank":{"id":53,"key":"Blitzcrank","name":"Blitzcrank","title":"the Great Steam Golem"},"Rammus":{"id":33,"key":"Rammus","name":"Rammus","title":"the Armordillo"},"Velkoz":{"id":161,"key":"Velkoz","name":"Vel'Koz","title":"the Eye of the Void"},"Caitlyn":{"id":51,"key":"Caitlyn","name":"Caitlyn","title":"the Sheriff of Piltover"},"Trundle":{"id":48,"key":"Trundle","name":"Trundle","title":"the Troll King"},"Kindred":{"id":203,"key":"Kindred","name":"Kindred","title":"The Eternal Hunters"},"Quinn":{"id":133,"key":"Quinn","name":"Quinn","title":"Demacia's Wings"},"Ekko":{"id":245,"key":"Ekko","name":"Ekko","title":"the Boy Who Shattered Time"},"Nami":{"id":267,"key":"Nami","name":"Nami","title":"the Tidecaller"},"Swain":{"id":50,"key":"Swain","name":"Swain","title":"the Noxian Grand General"},"Taric":{"id":44,"key":"Taric","name":"Taric","title":"the Shield of Valoran"},"Syndra":{"id":134,"key":"Syndra","name":"Syndra","title":"the Dark Sovereign"},"Rakan":{"id":497,"key":"Rakan","name":"Rakan","title":"The Charmer"},"Skarner":{"id":72,"key":"Skarner","name":"Skarner","title":"the Crystal Vanguard"},"Braum":{"id":201,"key":"Braum","name":"Braum","title":"the Heart of the Freljord"},"Veigar":{"id":45,"key":"Veigar","name":"Veigar","title":"the Tiny Master of Evil"},"Xerath":{"id":101,"key":"Xerath","name":"Xerath","title":"the Magus Ascendant"},"Corki":{"id":42,"key":"Corki","name":"Corki","title":"the Daring Bombardier"},"Nautilus":{"id":111,"key":"Nautilus","name":"Nautilus","title":"the Titan of the Depths"},"Ahri":{"id":103,"key":"Ahri","name":"Ahri","title":"the Nine-Tailed Fox"},"Jayce":{"id":126,"key":"Jayce","name":"Jayce","title":"the Defender of Tomorrow"},"Darius":{"id":122,"key":"Darius","name":"Darius","title":"the Hand of Noxus"},"Tryndamere":{"id":23,"key":"Tryndamere","name":"Tryndamere","title":"the Barbarian King"},"Janna":{"id":40,"key":"Janna","name":"Janna","title":"the Storm's Fury"},"Elise":{"id":60,"key":"Elise","name":"Elise","title":"the Spider Queen"},"Vayne":{"id":67,"key":"Vayne","name":"Vayne","title":"the Night Hunter"},"Brand":{"id":63,"key":"Brand","name":"Brand","title":"the Burning Vengeance"},"Zoe":{"id":142,"key":"Zoe","name":"Zoe","title":"the Aspect of Twilight"},"Graves":{"id":104,"key":"Graves","name":"Graves","title":"the Outlaw"},"Soraka":{"id":16,"key":"Soraka","name":"Soraka","title":"the Starchild"},"Xayah":{"id":498,"key":"Xayah","name":"Xayah","title":"the Rebel"},"Karthus":{"id":30,"key":"Karthus","name":"Karthus","title":"the Deathsinger"},"Vladimir":{"id":8,"key":"Vladimir","name":"Vladimir","title":"the Crimson Reaper"},"Zilean":{"id":26,"key":"Zilean","name":"Zilean","title":"the Chronokeeper"},"Katarina":{"id":55,"key":"Katarina","name":"Katarina","title":"the Sinister Blade"},"Shyvana":{"id":102,"key":"Shyvana","name":"Shyvana","title":"the Half-Dragon"},"Warwick":{"id":19,"key":"Warwick","name":"Warwick","title":"the Uncaged Wrath of Zaun"},"Ziggs":{"id":115,"key":"Ziggs","name":"Ziggs","title":"the Hexplosives Expert"},"Kled":{"id":240,"key":"Kled","name":"Kled","title":"the Cantankerous Cavalier"},"Khazix":{"id":121,"key":"Khazix","name":"Kha'Zix","title":"the Voidreaver"},"Olaf":{"id":2,"key":"Olaf","name":"Olaf","title":"the Berserker"},"TwistedFate":{"id":4,"key":"TwistedFate","name":"Twisted Fate","title":"the Card Master"},"Nunu":{"id":20,"key":"Nunu","name":"Nunu","title":"the Yeti Rider"},"Rengar":{"id":107,"key":"Rengar","name":"Rengar","title":"the Pridestalker"},"Bard":{"id":432,"key":"Bard","name":"Bard","title":"the Wandering Caretaker"},"Irelia":{"id":39,"key":"Irelia","name":"Irelia","title":"the Will of the Blades"},"Ivern":{"id":427,"key":"Ivern","name":"Ivern","title":"the Green Father"},"MonkeyKing":{"id":62,"key":"MonkeyKing","name":"Wukong","title":"the Monkey King"},"Ashe":{"id":22,"key":"Ashe","name":"Ashe","title":"the Frost Archer"},"Kalista":{"id":429,"key":"Kalista","name":"Kalista","title":"the Spear of Vengeance"},"Akali":{"id":84,"key":"Akali","name":"Akali","title":"the Fist of Shadow"},"Vi":{"id":254,"key":"Vi","name":"Vi","title":"the Piltover Enforcer"},"Amumu":{"id":32,"key":"Amumu","name":"Amumu","title":"the Sad Mummy"},"Lulu":{"id":117,"key":"Lulu","name":"Lulu","title":"the Fae Sorceress"},"Morgana":{"id":25,"key":"Morgana","name":"Morgana","title":"Fallen Angel"},"Nocturne":{"id":56,"key":"Nocturne","name":"Nocturne","title":"the Eternal Nightmare"},"Diana":{"id":131,"key":"Diana","name":"Diana","title":"Scorn of the Moon"},"AurelionSol":{"id":136,"key":"AurelionSol","name":"Aurelion Sol","title":"The Star Forger"},"Zyra":{"id":143,"key":"Zyra","name":"Zyra","title":"Rise of the Thorns"},"Viktor":{"id":112,"key":"Viktor","name":"Viktor","title":"the Machine Herald"},"Cassiopeia":{"id":69,"key":"Cassiopeia","name":"Cassiopeia","title":"the Serpent's Embrace"},"Nasus":{"id":75,"key":"Nasus","name":"Nasus","title":"the Curator of the Sands"},"Twitch":{"id":29,"key":"Twitch","name":"Twitch","title":"the Plague Rat"},"DrMundo":{"id":36,"key":"DrMundo","name":"Dr. Mundo","title":"the Madman of Zaun"},"Orianna":{"id":61,"key":"Orianna","name":"Orianna","title":"the Lady of Clockwork"},"Evelynn":{"id":28,"key":"Evelynn","name":"Evelynn","title":"Agony's Embrace"},"RekSai":{"id":421,"key":"RekSai","name":"Rek'Sai","title":"the Void Burrower"},"Lux":{"id":99,"key":"Lux","name":"Lux","title":"the Lady of Luminosity"},"Sion":{"id":14,"key":"Sion","name":"Sion","title":"The Undead Juggernaut"},"Camille":{"id":164,"key":"Camille","name":"Camille","title":"the Steel Shadow"},"MasterYi":{"id":11,"key":"MasterYi","name":"Master Yi","title":"the Wuju Bladesman"},"Ryze":{"id":13,"key":"Ryze","name":"Ryze","title":"the Rune Mage"},"Malphite":{"id":54,"key":"Malphite","name":"Malphite","title":"Shard of the Monolith"},"Anivia":{"id":34,"key":"Anivia","name":"Anivia","title":"the Cryophoenix"},"Shen":{"id":98,"key":"Shen","name":"Shen","title":"the Eye of Twilight"},"JarvanIV":{"id":59,"key":"JarvanIV","name":"Jarvan IV","title":"the Exemplar of Demacia"},"Malzahar":{"id":90,"key":"Malzahar","name":"Malzahar","title":"the Prophet of the Void"},"Zac":{"id":154,"key":"Zac","name":"Zac","title":"the Secret Weapon"},"Gragas":{"id":79,"key":"Gragas","name":"Gragas","title":"the Rabble Rouser"}},"type":"champion","version":"8.6.1"}
var y=[{"playerId":44198741,"championId":222,"championLevel":7,"championPoints":293500,"lastPlayTime":1521615775000,"championPointsSinceLastLevel":271900,"championPointsUntilNextLevel":0,"chestGranted":true,"tokensEarned":0},{"playerId":44198741,"championId":37,"championLevel":7,"championPoints":80079,"lastPlayTime":1521728051000,"championPointsSinceLastLevel":58479,"championPointsUntilNextLevel":0,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":64,"championLevel":6,"championPoints":61549,"lastPlayTime":1521626329000,"championPointsSinceLastLevel":39949,"championPointsUntilNextLevel":0,"chestGranted":true,"tokensEarned":0},{"playerId":44198741,"championId":238,"championLevel":6,"championPoints":58761,"lastPlayTime":1521775331000,"championPointsSinceLastLevel":37161,"championPointsUntilNextLevel":0,"chestGranted":true,"tokensEarned":2},{"playerId":44198741,"championId":51,"championLevel":6,"championPoints":58308,"lastPlayTime":1513881646000,"championPointsSinceLastLevel":36708,"championPointsUntilNextLevel":0,"chestGranted":false,"tokensEarned":1},{"playerId":44198741,"championId":157,"championLevel":5,"championPoints":53011,"lastPlayTime":1520972526000,"championPointsSinceLastLevel":31411,"championPointsUntilNextLevel":0,"chestGranted":false,"tokensEarned":1},{"playerId":44198741,"championId":53,"championLevel":7,"championPoints":52293,"lastPlayTime":1516836769000,"championPointsSinceLastLevel":30693,"championPointsUntilNextLevel":0,"chestGranted":true,"tokensEarned":0},{"playerId":44198741,"championId":254,"championLevel":5,"championPoints":52161,"lastPlayTime":1521773316000,"championPointsSinceLastLevel":30561,"championPointsUntilNextLevel":0,"chestGranted":true,"tokensEarned":1},{"playerId":44198741,"championId":91,"championLevel":5,"championPoints":42502,"lastPlayTime":1520348104000,"championPointsSinceLastLevel":20902,"championPointsUntilNextLevel":0,"chestGranted":false,"tokensEarned":1},{"playerId":44198741,"championId":498,"championLevel":5,"championPoints":31085,"lastPlayTime":1521618854000,"championPointsSinceLastLevel":9485,"championPointsUntilNextLevel":0,"chestGranted":false,"tokensEarned":1},{"playerId":44198741,"championId":99,"championLevel":6,"championPoints":28174,"lastPlayTime":1520785818000,"championPointsSinceLastLevel":6574,"championPointsUntilNextLevel":0,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":55,"championLevel":5,"championPoints":21698,"lastPlayTime":1520530933000,"championPointsSinceLastLevel":98,"championPointsUntilNextLevel":0,"chestGranted":true,"tokensEarned":0},{"playerId":44198741,"championId":412,"championLevel":4,"championPoints":21325,"lastPlayTime":1512167913000,"championPointsSinceLastLevel":8725,"championPointsUntilNextLevel":275,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":13,"championLevel":4,"championPoints":20707,"lastPlayTime":1507482006000,"championPointsSinceLastLevel":8107,"championPointsUntilNextLevel":893,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":17,"championLevel":4,"championPoints":17471,"lastPlayTime":1514067843000,"championPointsSinceLastLevel":4871,"championPointsUntilNextLevel":4129,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":103,"championLevel":4,"championPoints":13441,"lastPlayTime":1516375745000,"championPointsSinceLastLevel":841,"championPointsUntilNextLevel":8159,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":11,"championLevel":3,"championPoints":12450,"lastPlayTime":1521777614000,"championPointsSinceLastLevel":6450,"championPointsUntilNextLevel":150,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":201,"championLevel":3,"championPoints":12011,"lastPlayTime":1505247917000,"championPointsSinceLastLevel":6011,"championPointsUntilNextLevel":589,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":131,"championLevel":3,"championPoints":11229,"lastPlayTime":1502809468000,"championPointsSinceLastLevel":5229,"championPointsUntilNextLevel":1371,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":81,"championLevel":3,"championPoints":10830,"lastPlayTime":1515615050000,"championPointsSinceLastLevel":4830,"championPointsUntilNextLevel":1770,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":78,"championLevel":3,"championPoints":9610,"lastPlayTime":1494513027000,"championPointsSinceLastLevel":3610,"championPointsUntilNextLevel":2990,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":164,"championLevel":3,"championPoints":9340,"lastPlayTime":1517260426000,"championPointsSinceLastLevel":3340,"championPointsUntilNextLevel":3260,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":203,"championLevel":3,"championPoints":9339,"lastPlayTime":1509973073000,"championPointsSinceLastLevel":3339,"championPointsUntilNextLevel":3261,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":236,"championLevel":3,"championPoints":7848,"lastPlayTime":1490390361000,"championPointsSinceLastLevel":1848,"championPointsUntilNextLevel":4752,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":89,"championLevel":3,"championPoints":7809,"lastPlayTime":1521745348000,"championPointsSinceLastLevel":1809,"championPointsUntilNextLevel":4791,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":119,"championLevel":3,"championPoints":7801,"lastPlayTime":1497566044000,"championPointsSinceLastLevel":1801,"championPointsUntilNextLevel":4799,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":23,"championLevel":3,"championPoints":6997,"lastPlayTime":1501120835000,"championPointsSinceLastLevel":997,"championPointsUntilNextLevel":5603,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":32,"championLevel":3,"championPoints":6596,"lastPlayTime":1504456726000,"championPointsSinceLastLevel":596,"championPointsUntilNextLevel":6004,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":22,"championLevel":3,"championPoints":6376,"lastPlayTime":1520975609000,"championPointsSinceLastLevel":376,"championPointsUntilNextLevel":6224,"chestGranted":true,"tokensEarned":0},{"playerId":44198741,"championId":18,"championLevel":2,"championPoints":5764,"lastPlayTime":1514670708000,"championPointsSinceLastLevel":3964,"championPointsUntilNextLevel":236,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":80,"championLevel":2,"championPoints":5522,"lastPlayTime":1503253374000,"championPointsSinceLastLevel":3722,"championPointsUntilNextLevel":478,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":15,"championLevel":2,"championPoints":5467,"lastPlayTime":1514071536000,"championPointsSinceLastLevel":3667,"championPointsUntilNextLevel":533,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":107,"championLevel":2,"championPoints":5324,"lastPlayTime":1490371680000,"championPointsSinceLastLevel":3524,"championPointsUntilNextLevel":676,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":35,"championLevel":2,"championPoints":4917,"lastPlayTime":1514152675000,"championPointsSinceLastLevel":3117,"championPointsUntilNextLevel":1083,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":68,"championLevel":2,"championPoints":4908,"lastPlayTime":1503866247000,"championPointsSinceLastLevel":3108,"championPointsUntilNextLevel":1092,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":29,"championLevel":2,"championPoints":4766,"lastPlayTime":1482938055000,"championPointsSinceLastLevel":2966,"championPointsUntilNextLevel":1234,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":133,"championLevel":2,"championPoints":4257,"lastPlayTime":1503434592000,"championPointsSinceLastLevel":2457,"championPointsUntilNextLevel":1743,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":114,"championLevel":2,"championPoints":4074,"lastPlayTime":1483363998000,"championPointsSinceLastLevel":2274,"championPointsUntilNextLevel":1926,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":67,"championLevel":2,"championPoints":4031,"lastPlayTime":1513609042000,"championPointsSinceLastLevel":2231,"championPointsUntilNextLevel":1969,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":143,"championLevel":2,"championPoints":3917,"lastPlayTime":1516407847000,"championPointsSinceLastLevel":2117,"championPointsUntilNextLevel":2083,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":1,"championLevel":2,"championPoints":3686,"lastPlayTime":1516470538000,"championPointsSinceLastLevel":1886,"championPointsUntilNextLevel":2314,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":134,"championLevel":2,"championPoints":3640,"lastPlayTime":1514270717000,"championPointsSinceLastLevel":1840,"championPointsUntilNextLevel":2360,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":33,"championLevel":2,"championPoints":3467,"lastPlayTime":1505249371000,"championPointsSinceLastLevel":1667,"championPointsUntilNextLevel":2533,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":54,"championLevel":2,"championPoints":3436,"lastPlayTime":1513985986000,"championPointsSinceLastLevel":1636,"championPointsUntilNextLevel":2564,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":429,"championLevel":2,"championPoints":3334,"lastPlayTime":1485341590000,"championPointsSinceLastLevel":1534,"championPointsUntilNextLevel":2666,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":21,"championLevel":2,"championPoints":3311,"lastPlayTime":1514568031000,"championPointsSinceLastLevel":1511,"championPointsUntilNextLevel":2689,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":75,"championLevel":2,"championPoints":2873,"lastPlayTime":1467158731000,"championPointsSinceLastLevel":1073,"championPointsUntilNextLevel":3127,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":56,"championLevel":2,"championPoints":2859,"lastPlayTime":1513987208000,"championPointsSinceLastLevel":1059,"championPointsUntilNextLevel":3141,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":98,"championLevel":2,"championPoints":2847,"lastPlayTime":1504033332000,"championPointsSinceLastLevel":1047,"championPointsUntilNextLevel":3153,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":8,"championLevel":2,"championPoints":2826,"lastPlayTime":1500426442000,"championPointsSinceLastLevel":1026,"championPointsUntilNextLevel":3174,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":142,"championLevel":2,"championPoints":2693,"lastPlayTime":1521394745000,"championPointsSinceLastLevel":893,"championPointsUntilNextLevel":3307,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":28,"championLevel":2,"championPoints":2635,"lastPlayTime":1508871982000,"championPointsSinceLastLevel":835,"championPointsUntilNextLevel":3365,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":5,"championLevel":2,"championPoints":2500,"lastPlayTime":1503251834000,"championPointsSinceLastLevel":700,"championPointsUntilNextLevel":3500,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":121,"championLevel":2,"championPoints":2432,"lastPlayTime":1496595269000,"championPointsSinceLastLevel":632,"championPointsUntilNextLevel":3568,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":25,"championLevel":2,"championPoints":2373,"lastPlayTime":1511660580000,"championPointsSinceLastLevel":573,"championPointsUntilNextLevel":3627,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":27,"championLevel":2,"championPoints":2323,"lastPlayTime":1502826554000,"championPointsSinceLastLevel":523,"championPointsUntilNextLevel":3677,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":76,"championLevel":2,"championPoints":2296,"lastPlayTime":1484084362000,"championPointsSinceLastLevel":496,"championPointsUntilNextLevel":3704,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":38,"championLevel":2,"championPoints":2238,"lastPlayTime":1503436356000,"championPointsSinceLastLevel":438,"championPointsUntilNextLevel":3762,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":77,"championLevel":2,"championPoints":2166,"lastPlayTime":1503344878000,"championPointsSinceLastLevel":366,"championPointsUntilNextLevel":3834,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":34,"championLevel":2,"championPoints":2166,"lastPlayTime":1513883520000,"championPointsSinceLastLevel":366,"championPointsUntilNextLevel":3834,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":122,"championLevel":2,"championPoints":2013,"lastPlayTime":1502829751000,"championPointsSinceLastLevel":213,"championPointsUntilNextLevel":3987,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":4,"championLevel":2,"championPoints":1915,"lastPlayTime":1504453685000,"championPointsSinceLastLevel":115,"championPointsUntilNextLevel":4085,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":41,"championLevel":2,"championPoints":1824,"lastPlayTime":1514496648000,"championPointsSinceLastLevel":24,"championPointsUntilNextLevel":4176,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":101,"championLevel":1,"championPoints":1641,"lastPlayTime":1483546863000,"championPointsSinceLastLevel":1641,"championPointsUntilNextLevel":159,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":45,"championLevel":1,"championPoints":1624,"lastPlayTime":1513968532000,"championPointsSinceLastLevel":1624,"championPointsUntilNextLevel":176,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":120,"championLevel":1,"championPoints":1613,"lastPlayTime":1517346490000,"championPointsSinceLastLevel":1613,"championPointsUntilNextLevel":187,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":24,"championLevel":1,"championPoints":1540,"lastPlayTime":1484509432000,"championPointsSinceLastLevel":1540,"championPointsUntilNextLevel":260,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":154,"championLevel":1,"championPoints":1428,"lastPlayTime":1497224391000,"championPointsSinceLastLevel":1428,"championPointsUntilNextLevel":372,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":40,"championLevel":1,"championPoints":1346,"lastPlayTime":1495797560000,"championPointsSinceLastLevel":1346,"championPointsUntilNextLevel":454,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":104,"championLevel":1,"championPoints":1129,"lastPlayTime":1517265594000,"championPointsSinceLastLevel":1129,"championPointsUntilNextLevel":671,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":74,"championLevel":1,"championPoints":1090,"lastPlayTime":1509047561000,"championPointsSinceLastLevel":1090,"championPointsUntilNextLevel":710,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":26,"championLevel":1,"championPoints":1048,"lastPlayTime":1477334680000,"championPointsSinceLastLevel":1048,"championPointsUntilNextLevel":752,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":117,"championLevel":1,"championPoints":1013,"lastPlayTime":1513988966000,"championPointsSinceLastLevel":1013,"championPointsUntilNextLevel":787,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":61,"championLevel":1,"championPoints":934,"lastPlayTime":1510404384000,"championPointsSinceLastLevel":934,"championPointsUntilNextLevel":866,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":12,"championLevel":1,"championPoints":928,"lastPlayTime":1484049537000,"championPointsSinceLastLevel":928,"championPointsUntilNextLevel":872,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":115,"championLevel":1,"championPoints":904,"lastPlayTime":1485637169000,"championPointsSinceLastLevel":904,"championPointsUntilNextLevel":896,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":102,"championLevel":1,"championPoints":820,"lastPlayTime":1502818854000,"championPointsSinceLastLevel":820,"championPointsUntilNextLevel":980,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":3,"championLevel":1,"championPoints":814,"lastPlayTime":1517263506000,"championPointsSinceLastLevel":814,"championPointsUntilNextLevel":986,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":110,"championLevel":1,"championPoints":779,"lastPlayTime":1487959233000,"championPointsSinceLastLevel":779,"championPointsUntilNextLevel":1021,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":43,"championLevel":1,"championPoints":750,"lastPlayTime":1498764709000,"championPointsSinceLastLevel":750,"championPointsUntilNextLevel":1050,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":10,"championLevel":1,"championPoints":675,"lastPlayTime":1491073315000,"championPointsSinceLastLevel":675,"championPointsUntilNextLevel":1125,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":19,"championLevel":1,"championPoints":643,"lastPlayTime":1480869433000,"championPointsSinceLastLevel":643,"championPointsUntilNextLevel":1157,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":267,"championLevel":1,"championPoints":598,"lastPlayTime":1482601661000,"championPointsSinceLastLevel":598,"championPointsUntilNextLevel":1202,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":7,"championLevel":1,"championPoints":567,"lastPlayTime":1514138728000,"championPointsSinceLastLevel":567,"championPointsUntilNextLevel":1233,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":141,"championLevel":1,"championPoints":565,"lastPlayTime":1502215799000,"championPointsSinceLastLevel":565,"championPointsUntilNextLevel":1235,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":82,"championLevel":1,"championPoints":562,"lastPlayTime":1502315761000,"championPointsSinceLastLevel":562,"championPointsUntilNextLevel":1238,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":79,"championLevel":1,"championPoints":451,"lastPlayTime":1514376068000,"championPointsSinceLastLevel":451,"championPointsUntilNextLevel":1349,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":63,"championLevel":1,"championPoints":442,"lastPlayTime":1502992661000,"championPointsSinceLastLevel":442,"championPointsUntilNextLevel":1358,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":105,"championLevel":1,"championPoints":436,"lastPlayTime":1508780762000,"championPointsSinceLastLevel":436,"championPointsUntilNextLevel":1364,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":150,"championLevel":1,"championPoints":387,"lastPlayTime":1475869380000,"championPointsSinceLastLevel":387,"championPointsUntilNextLevel":1413,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":245,"championLevel":1,"championPoints":362,"lastPlayTime":1511209273000,"championPointsSinceLastLevel":362,"championPointsUntilNextLevel":1438,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":85,"championLevel":1,"championPoints":352,"lastPlayTime":1504317209000,"championPointsSinceLastLevel":352,"championPointsUntilNextLevel":1448,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":36,"championLevel":1,"championPoints":322,"lastPlayTime":1488560128000,"championPointsSinceLastLevel":322,"championPointsUntilNextLevel":1478,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":20,"championLevel":1,"championPoints":316,"lastPlayTime":1514579537000,"championPointsSinceLastLevel":316,"championPointsUntilNextLevel":1484,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":86,"championLevel":1,"championPoints":258,"lastPlayTime":1451766781000,"championPointsSinceLastLevel":258,"championPointsUntilNextLevel":1542,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":16,"championLevel":1,"championPoints":228,"lastPlayTime":1516566662000,"championPointsSinceLastLevel":228,"championPointsUntilNextLevel":1572,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":497,"championLevel":1,"championPoints":159,"lastPlayTime":1511548193000,"championPointsSinceLastLevel":159,"championPointsUntilNextLevel":1641,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":84,"championLevel":1,"championPoints":151,"lastPlayTime":1484416084000,"championPointsSinceLastLevel":151,"championPointsUntilNextLevel":1649,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":39,"championLevel":1,"championPoints":145,"lastPlayTime":1487266868000,"championPointsSinceLastLevel":145,"championPointsUntilNextLevel":1655,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":6,"championLevel":1,"championPoints":134,"lastPlayTime":1487452337000,"championPointsSinceLastLevel":134,"championPointsUntilNextLevel":1666,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":2,"championLevel":1,"championPoints":124,"lastPlayTime":1502801871000,"championPointsSinceLastLevel":124,"championPointsUntilNextLevel":1676,"chestGranted":false,"tokensEarned":0},{"playerId":44198741,"championId":92,"championLevel":1,"championPoints":115,"lastPlayTime":1483372059000,"championPointsSinceLastLevel":115,"championPointsUntilNextLevel":1685,"chestGranted":false,"tokensEarned":0}]
var w={"gameId":3578783531,"mapId":11,"gameMode":"CLASSIC","gameType":"MATCHED_GAME","gameQueueConfigId":430,"participants":[{"teamId":100,"spell1Id":4,"spell2Id":14,"championId":23,"profileIconId":577,"summonerName":"Buttsmellings","bot":false,"summonerId":36754738,"gameCustomizationObjects":[],"perks":{"perkIds":[8112,8126,8120,8135,9111,8014],"perkStyle":8100,"perkSubStyle":8000}},{"teamId":100,"spell1Id":14,"spell2Id":4,"championId":157,"profileIconId":3163,"summonerName":"Tommy46","bot":false,"summonerId":50800831,"gameCustomizationObjects":[],"perks":{"perkIds":[8112,8126,8120,8135,9111,8014],"perkStyle":8100,"perkSubStyle":8000}},{"teamId":100,"spell1Id":4,"spell2Id":7,"championId":99,"profileIconId":3368,"summonerName":"abcinto12345","bot":false,"summonerId":104769272,"gameCustomizationObjects":[],"perks":{"perkIds":[8229,8226,8210,8236,8138,8105],"perkStyle":8200,"perkSubStyle":8100}},{"teamId":100,"spell1Id":4,"spell2Id":11,"championId":131,"profileIconId":3186,"summonerName":"mr3eb allel","bot":false,"summonerId":102887532,"gameCustomizationObjects":[],"perks":{"perkIds":[8112,8143,8138,8135,9104,8014],"perkStyle":8100,"perkSubStyle":8000}},{"teamId":100,"spell1Id":4,"spell2Id":7,"championId":222,"profileIconId":3369,"summonerName":"YungGunzYT","bot":false,"summonerId":103689620,"gameCustomizationObjects":[],"perks":{"perkIds":[8021,9101,9104,8014,8236,8234],"perkStyle":8000,"perkSubStyle":8200}},{"teamId":200,"spell1Id":14,"spell2Id":4,"championId":80,"profileIconId":3226,"summonerName":"Dresprados","bot":false,"summonerId":105744928,"gameCustomizationObjects":[],"perks":{"perkIds":[8214,8226,8234,8237,8143,8138],"perkStyle":8200,"perkSubStyle":8100}},{"teamId":200,"spell1Id":4,"spell2Id":12,"championId":40,"profileIconId":982,"summonerName":"Arafiki","bot":false,"summonerId":338747,"gameCustomizationObjects":[],"perks":{"perkIds":[8437,8473,8444,8451,8224,8237],"perkStyle":8400,"perkSubStyle":8200}},{"teamId":200,"spell1Id":4,"spell2Id":7,"championId":21,"profileIconId":3369,"summonerName":"QuantumPierpa","bot":false,"summonerId":102599145,"gameCustomizationObjects":[],"perks":{"perkIds":[8229,8226,8234,8237,9111,8014],"perkStyle":8200,"perkSubStyle":8000}},{"teamId":200,"spell1Id":11,"spell2Id":4,"championId":62,"profileIconId":6,"summonerName":"HONGWENCHENG","bot":false,"summonerId":83358218,"gameCustomizationObjects":[],"perks":{"perkIds":[8112,8143,8136,8105,9111,8014],"perkStyle":8100,"perkSubStyle":8000}},{"teamId":200,"spell1Id":14,"spell2Id":4,"championId":141,"profileIconId":3184,"summonerName":"RobAaronCross","bot":false,"summonerId":79840718,"gameCustomizationObjects":[],"perks":{"perkIds":[8112,8143,8138,8105,9103,9111],"perkStyle":8100,"perkSubStyle":8000}}],"observers":{"encryptionKey":"T9D6A7njwvlkUePdi8F14QF+vYyZ5nWJ"},"platformId":"EUW1","bannedChampions":[],"gameStartTime":1522107057473,"gameLength":1047};
var z={"id":44198741,"accountId":202737897,"name":"KiiRrAa","profileIconId":780,"revisionDate":1521881770000,"summonerLevel":56};


function championshow(idd,comp)
{	
	
	var LastPlayed = new Date(y[comp].lastPlayTime);
	var day=LastPlayed.getUTCDate();
	var minutes=LastPlayed.getMinutes();
	var month=LastPlayed.getUTCMonth() + 1;
	var year=LastPlayed.getUTCFullYear();
	var hour=LastPlayed.getHours();
	if (hour<10)
	{
		hour="0"+hour;
	}
	if (minutes<10)
	{
		minutes="0"+minutes;
	}
	if (day<10)
	{	
		day="0"+day;
	}
	if (month<10)
	{	
		month="0"+month;
	}
	var finaldate=day + "/" + month + "/" + year +" at "+hour+":"+minutes;
	var level;
	var chest;
	var chestimg;
	var lvlimg;
	//var position=document.getElementById(idd).getBoundingClientRect()
	//console.log(position);

	//document.getElementById("info_"+idd).style.top=position.top+"px";
	//document.getElementById("info_"+idd).style.left=position.right+"px";

	//document.getElementById("info_"+idd).className='show';
	switch (y[comp].championLevel)
	{
		default:
			level="No level on champion";
			lvlimg="Masteries/no1.png";
			break;
		case 1:
			level=1;
			lvlimg="Masteries/no1.png";
			break;
		case 2:
			level=2;
			lvlimg="Masteries/no1.png";
			break;
		case 3:
			level=3;
			lvlimg="Masteries/no1.png";
			break;
		case 4:
			level=4;
			lvlimg="Masteries/tier4.png";
			break;
		case 5:
			level=5;
			lvlimg="Masteries/tier5.png";
			break;
		case 6:
			level=6;
			lvlimg="Masteries/tier6.png";
			break;
		case 7:
			level=7;
			lvlimg="Masteries/tier7.png";
	}
	
	switch(y[comp].chestGranted)
	{
		case true:
			chest="Granted";
			chestimg="Masteries/chest.png";
			break;
		case false:
			chest="Not Granted";
			chestimg="Masteries/no.png";
	}
		document.getElementById('info_'+idd).innerHTML="Champion Level: "+level+"<br> Chest: "+chest+"<br>Last Time Played: "+ finaldate+"";
document.getElementById('img_'+idd).innerHTML="<img src='"+lvlimg+"' width='90px' height='90px'/><img src='"+chestimg+"' width='100%' height='40%'/>";
		//document.getElementById('lvlp_'+idd).innerHTML="<img src='Masteries/tier7.png' width='20%' height='20%'>";
	
	
	}

/*function championhide(idd)
{
	
	document.getElementById("info_"+idd).className='hide';
	
}*/

function ShowInfo()
{
	var rownum=1;
	var cellnum=0;
	document.getElementById("lvl").innerHTML=z.summonerLevel;
	document.getElementById("Icon").src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/"+z.profileIconId+".png";
	document.getElementById("Sum").innerHTML =z.name;
	
	var table = document.getElementById("champions");
	var row = table.insertRow(0);
	//var res=10;
	/*for(let i=5;i<=10;i++)
	{
	if(T.length%i===0)
		var res=i;
	}*/
	
	for(let i=0;i<T.length;i++)
{
	
if(cellnum===9)
{
	
		var row = table.insertRow(rownum);
		rownum++;
		cellnum=0;
	}
	
	var c=row.insertCell(cellnum);
	var c1=row.insertCell(cellnum+1);
	var c2=row.insertCell(cellnum+2);
	c1.id="info_"+T[i];
	c1.className="clear";
	c2.id="img_"+T[i];
	cellnum+=3;
	var link="champs/"+T[i]+'.png'; 
	if(i%3===0)
		
	c.innerHTML="<img  id="+T[i]+" src="+link+"><span style='color:white;font-size:20px;'><br>"+T[i]+"</span><hr style='margin-top:35px' width='1037%'>"; 
	else
	c.innerHTML="<img  id="+T[i]+" src="+link+"><span style='color:white;font-size:20px;'><br>"+T[i]+"</span>";	
	championshow(T[i],i)
	}
	/*onmouseover='championshow(id,"+i+")' onmouseout='championhide(id)'*/
	
	/*for(let i=0;i<T.length;i++)
	{
		var iDiv = document.createElement('div');
		
iDiv.id ="info_"+T[i];
iDiv.className ="hide";
document.getElementById('data2').appendChild(iDiv);

}
for(let i=0;i<T.length;i++)
{
	var iDiv = document.createElement('div');
		
iDiv.id ="lvl_"+T[i];
iDiv.className ="mother";
document.getElementById('info_'+T[i]).appendChild(iDiv);
var iH5=document.createElement('h5')
iH5.id="lvltitle_"+T[i];
document.getElementById('lvl_'+T[i]).appendChild(iH5);
var ip=document.createElement('p')
ip.id="lvlp_"+T[i];
document.getElementById('lvl_'+T[i]).appendChild(ip);
	
}
for(let i=0;i<T.length;i++)
{
	var iDiv = document.createElement('div');
		
iDiv.id ="points_"+T[i];
iDiv.className ="mother";
document.getElementById('info_'+T[i]).appendChild(iDiv);
var iH5=document.createElement('h5')
iH5.id="pointstitle_"+T[i];
document.getElementById('points_'+T[i]).appendChild(iH5);	
}
for(let i=0;i<T.length;i++)
{
	var iDiv = document.createElement('div');
		
iDiv.id ="lasttimePlayed_"+T[i];
iDiv.className ="mother";
document.getElementById('info_'+T[i]).appendChild(iDiv);
var iH5=document.createElement('h5')
iH5.id="lasttimePlayedtitle_"+T[i];
document.getElementById('lasttimePlayed_'+T[i]).appendChild(iH5);	
}
for(let i=0;i<T.length;i++)
{
	var iDiv = document.createElement('div');
		
iDiv.id ="chest_"+T[i];
iDiv.className ="mother";
document.getElementById('info_'+T[i]).appendChild(iDiv);
	var iH5=document.createElement('h5')
iH5.id="chesttitle_"+T[i];
document.getElementById('chest_'+T[i]).appendChild(iH5);
}*/
}	
function champNamebyid(id)
{
	for (var champ in x.data) {
	
			if((x.data[champ].id)===id)
			{
			T[j]=champ; 
			
		}
	}

	
}
function CheckChamps()
{
for(let i=0;i<y.length;i++)
{
	champNamebyid(y[i].championId);
	j++;
	
}
ShowInfo();
}




function show()
{
	window.location.reload()
}	

function getplayerbyname()
{	
		document.getElementById('title').innerHTML ="KiiRrAa - Leauge of legends";
		document.getElementById('PlayerName').style.display ='none';	
		document.getElementById('b1').style.display ='none';
		document.getElementById('data').style.display ='inherit';
		document.getElementById('data1').style.display ='inherit';
		document.getElementById('restart').style.display ='inherit';
		CheckChamps();

}

