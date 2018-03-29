
//************************************************************************************************************************************************************
//************************************************************************************************************************************************************
//variables
var x={"data":{"Jax":{"id":24,"key":"Jax","name":"Jax","title":"Grandmaster at Arms"},"Sona":{"id":37,"key":"Sona","name":"Sona","title":"Maven of the Strings"},"Tristana":{"id":18,"key":"Tristana","name":"Tristana","title":"the Yordle Gunner"},"Varus":{"id":110,"key":"Varus","name":"Varus","title":"the Arrow of Retribution"},"Kaisa":{"id":145,"key":"Kaisa","name":"Kai'Sa","title":"Daughter of the Void"},"Fiora":{"id":114,"key":"Fiora","name":"Fiora","title":"the Grand Duelist"},"Singed":{"id":27,"key":"Singed","name":"Singed","title":"the Mad Chemist"},"TahmKench":{"id":223,"key":"TahmKench","name":"Tahm Kench","title":"the River King"},"Leblanc":{"id":7,"key":"Leblanc","name":"LeBlanc","title":"the Deceiver"},"Thresh":{"id":412,"key":"Thresh","name":"Thresh","title":"the Chain Warden"},"Karma":{"id":43,"key":"Karma","name":"Karma","title":"the Enlightened One"},"Jhin":{"id":202,"key":"Jhin","name":"Jhin","title":"the Virtuoso"},"Rumble":{"id":68,"key":"Rumble","name":"Rumble","title":"the Mechanized Menace"},"Udyr":{"id":77,"key":"Udyr","name":"Udyr","title":"the Spirit Walker"},"LeeSin":{"id":64,"key":"LeeSin","name":"Lee Sin","title":"the Blind Monk"},"Yorick":{"id":83,"key":"Yorick","name":"Yorick","title":"Shepherd of Souls"},"Ornn":{"id":516,"key":"Ornn","name":"Ornn","title":"The Fire below the Mountain"},"Kayn":{"id":141,"key":"Kayn","name":"Kayn","title":"the Shadow Reaper"},"Kassadin":{"id":38,"key":"Kassadin","name":"Kassadin","title":"the Void Walker"},"Sivir":{"id":15,"key":"Sivir","name":"Sivir","title":"the Battle Mistress"},"MissFortune":{"id":21,"key":"MissFortune","name":"Miss Fortune","title":"the Bounty Hunter"},"Draven":{"id":119,"key":"Draven","name":"Draven","title":"the Glorious Executioner"},"Yasuo":{"id":157,"key":"Yasuo","name":"Yasuo","title":"the Unforgiven"},"Kayle":{"id":10,"key":"Kayle","name":"Kayle","title":"The Judicator"},"Shaco":{"id":35,"key":"Shaco","name":"Shaco","title":"the Demon Jester"},"Renekton":{"id":58,"key":"Renekton","name":"Renekton","title":"the Butcher of the Sands"},"Hecarim":{"id":120,"key":"Hecarim","name":"Hecarim","title":"the Shadow of War"},"Fizz":{"id":105,"key":"Fizz","name":"Fizz","title":"the Tidal Trickster"},"KogMaw":{"id":96,"key":"KogMaw","name":"Kog'Maw","title":"the Mouth of the Abyss"},"Maokai":{"id":57,"key":"Maokai","name":"Maokai","title":"the Twisted Treant"},"Lissandra":{"id":127,"key":"Lissandra","name":"Lissandra","title":"the Ice Witch"},"Jinx":{"id":222,"key":"Jinx","name":"Jinx","title":"the Loose Cannon"},"Urgot":{"id":6,"key":"Urgot","name":"Urgot","title":"the Dreadnought"},"Fiddlesticks":{"id":9,"key":"Fiddlesticks","name":"Fiddlesticks","title":"the Harbinger of Doom"},"Galio":{"id":3,"key":"Galio","name":"Galio","title":"the Colossus"},"Pantheon":{"id":80,"key":"Pantheon","name":"Pantheon","title":"the Artisan of War"},"Talon":{"id":91,"key":"Talon","name":"Talon","title":"the Blade's Shadow"},"Gangplank":{"id":41,"key":"Gangplank","name":"Gangplank","title":"the Saltwater Scourge"},"Ezreal":{"id":81,"key":"Ezreal","name":"Ezreal","title":"the Prodigal Explorer"},"Gnar":{"id":150,"key":"Gnar","name":"Gnar","title":"the Missing Link"},"Teemo":{"id":17,"key":"Teemo","name":"Teemo","title":"the Swift Scout"},"Annie":{"id":1,"key":"Annie","name":"Annie","title":"the Dark Child"},"Mordekaiser":{"id":82,"key":"Mordekaiser","name":"Mordekaiser","title":"the Iron Revenant"},"Azir":{"id":268,"key":"Azir","name":"Azir","title":"the Emperor of the Sands"},"Kennen":{"id":85,"key":"Kennen","name":"Kennen","title":"the Heart of the Tempest"},"Riven":{"id":92,"key":"Riven","name":"Riven","title":"the Exile"},"Chogath":{"id":31,"key":"Chogath","name":"Cho'Gath","title":"the Terror of the Void"},"Aatrox":{"id":266,"key":"Aatrox","name":"Aatrox","title":"the Darkin Blade"},"Poppy":{"id":78,"key":"Poppy","name":"Poppy","title":"Keeper of the Hammer"},"Taliyah":{"id":163,"key":"Taliyah","name":"Taliyah","title":"the Stoneweaver"},"Illaoi":{"id":420,"key":"Illaoi","name":"Illaoi","title":"the Kraken Priestess"},"Heimerdinger":{"id":74,"key":"Heimerdinger","name":"Heimerdinger","title":"the Revered Inventor"},"Alistar":{"id":12,"key":"Alistar","name":"Alistar","title":"the Minotaur"},"XinZhao":{"id":5,"key":"XinZhao","name":"Xin Zhao","title":"the Seneschal of Demacia"},"Lucian":{"id":236,"key":"Lucian","name":"Lucian","title":"the Purifier"},"Volibear":{"id":106,"key":"Volibear","name":"Volibear","title":"the Thunder's Roar"},"Sejuani":{"id":113,"key":"Sejuani","name":"Sejuani","title":"Fury of the North"},"Nidalee":{"id":76,"key":"Nidalee","name":"Nidalee","title":"the Bestial Huntress"},"Garen":{"id":86,"key":"Garen","name":"Garen","title":"The Might of Demacia"},"Leona":{"id":89,"key":"Leona","name":"Leona","title":"the Radiant Dawn"},"Zed":{"id":238,"key":"Zed","name":"Zed","title":"the Master of Shadows"},"Blitzcrank":{"id":53,"key":"Blitzcrank","name":"Blitzcrank","title":"the Great Steam Golem"},"Rammus":{"id":33,"key":"Rammus","name":"Rammus","title":"the Armordillo"},"Velkoz":{"id":161,"key":"Velkoz","name":"Vel'Koz","title":"the Eye of the Void"},"Caitlyn":{"id":51,"key":"Caitlyn","name":"Caitlyn","title":"the Sheriff of Piltover"},"Trundle":{"id":48,"key":"Trundle","name":"Trundle","title":"the Troll King"},"Kindred":{"id":203,"key":"Kindred","name":"Kindred","title":"The Eternal Hunters"},"Quinn":{"id":133,"key":"Quinn","name":"Quinn","title":"Demacia's Wings"},"Ekko":{"id":245,"key":"Ekko","name":"Ekko","title":"the Boy Who Shattered Time"},"Nami":{"id":267,"key":"Nami","name":"Nami","title":"the Tidecaller"},"Swain":{"id":50,"key":"Swain","name":"Swain","title":"the Noxian Grand General"},"Taric":{"id":44,"key":"Taric","name":"Taric","title":"the Shield of Valoran"},"Syndra":{"id":134,"key":"Syndra","name":"Syndra","title":"the Dark Sovereign"},"Rakan":{"id":497,"key":"Rakan","name":"Rakan","title":"The Charmer"},"Skarner":{"id":72,"key":"Skarner","name":"Skarner","title":"the Crystal Vanguard"},"Braum":{"id":201,"key":"Braum","name":"Braum","title":"the Heart of the Freljord"},"Veigar":{"id":45,"key":"Veigar","name":"Veigar","title":"the Tiny Master of Evil"},"Xerath":{"id":101,"key":"Xerath","name":"Xerath","title":"the Magus Ascendant"},"Corki":{"id":42,"key":"Corki","name":"Corki","title":"the Daring Bombardier"},"Nautilus":{"id":111,"key":"Nautilus","name":"Nautilus","title":"the Titan of the Depths"},"Ahri":{"id":103,"key":"Ahri","name":"Ahri","title":"the Nine-Tailed Fox"},"Jayce":{"id":126,"key":"Jayce","name":"Jayce","title":"the Defender of Tomorrow"},"Darius":{"id":122,"key":"Darius","name":"Darius","title":"the Hand of Noxus"},"Tryndamere":{"id":23,"key":"Tryndamere","name":"Tryndamere","title":"the Barbarian King"},"Janna":{"id":40,"key":"Janna","name":"Janna","title":"the Storm's Fury"},"Elise":{"id":60,"key":"Elise","name":"Elise","title":"the Spider Queen"},"Vayne":{"id":67,"key":"Vayne","name":"Vayne","title":"the Night Hunter"},"Brand":{"id":63,"key":"Brand","name":"Brand","title":"the Burning Vengeance"},"Zoe":{"id":142,"key":"Zoe","name":"Zoe","title":"the Aspect of Twilight"},"Graves":{"id":104,"key":"Graves","name":"Graves","title":"the Outlaw"},"Soraka":{"id":16,"key":"Soraka","name":"Soraka","title":"the Starchild"},"Xayah":{"id":498,"key":"Xayah","name":"Xayah","title":"the Rebel"},"Karthus":{"id":30,"key":"Karthus","name":"Karthus","title":"the Deathsinger"},"Vladimir":{"id":8,"key":"Vladimir","name":"Vladimir","title":"the Crimson Reaper"},"Zilean":{"id":26,"key":"Zilean","name":"Zilean","title":"the Chronokeeper"},"Katarina":{"id":55,"key":"Katarina","name":"Katarina","title":"the Sinister Blade"},"Shyvana":{"id":102,"key":"Shyvana","name":"Shyvana","title":"the Half-Dragon"},"Warwick":{"id":19,"key":"Warwick","name":"Warwick","title":"the Uncaged Wrath of Zaun"},"Ziggs":{"id":115,"key":"Ziggs","name":"Ziggs","title":"the Hexplosives Expert"},"Kled":{"id":240,"key":"Kled","name":"Kled","title":"the Cantankerous Cavalier"},"Khazix":{"id":121,"key":"Khazix","name":"Kha'Zix","title":"the Voidreaver"},"Olaf":{"id":2,"key":"Olaf","name":"Olaf","title":"the Berserker"},"TwistedFate":{"id":4,"key":"TwistedFate","name":"Twisted Fate","title":"the Card Master"},"Nunu":{"id":20,"key":"Nunu","name":"Nunu","title":"the Yeti Rider"},"Rengar":{"id":107,"key":"Rengar","name":"Rengar","title":"the Pridestalker"},"Bard":{"id":432,"key":"Bard","name":"Bard","title":"the Wandering Caretaker"},"Irelia":{"id":39,"key":"Irelia","name":"Irelia","title":"the Will of the Blades"},"Ivern":{"id":427,"key":"Ivern","name":"Ivern","title":"the Green Father"},"MonkeyKing":{"id":62,"key":"MonkeyKing","name":"Wukong","title":"the Monkey King"},"Ashe":{"id":22,"key":"Ashe","name":"Ashe","title":"the Frost Archer"},"Kalista":{"id":429,"key":"Kalista","name":"Kalista","title":"the Spear of Vengeance"},"Akali":{"id":84,"key":"Akali","name":"Akali","title":"the Fist of Shadow"},"Vi":{"id":254,"key":"Vi","name":"Vi","title":"the Piltover Enforcer"},"Amumu":{"id":32,"key":"Amumu","name":"Amumu","title":"the Sad Mummy"},"Lulu":{"id":117,"key":"Lulu","name":"Lulu","title":"the Fae Sorceress"},"Morgana":{"id":25,"key":"Morgana","name":"Morgana","title":"Fallen Angel"},"Nocturne":{"id":56,"key":"Nocturne","name":"Nocturne","title":"the Eternal Nightmare"},"Diana":{"id":131,"key":"Diana","name":"Diana","title":"Scorn of the Moon"},"AurelionSol":{"id":136,"key":"AurelionSol","name":"Aurelion Sol","title":"The Star Forger"},"Zyra":{"id":143,"key":"Zyra","name":"Zyra","title":"Rise of the Thorns"},"Viktor":{"id":112,"key":"Viktor","name":"Viktor","title":"the Machine Herald"},"Cassiopeia":{"id":69,"key":"Cassiopeia","name":"Cassiopeia","title":"the Serpent's Embrace"},"Nasus":{"id":75,"key":"Nasus","name":"Nasus","title":"the Curator of the Sands"},"Twitch":{"id":29,"key":"Twitch","name":"Twitch","title":"the Plague Rat"},"DrMundo":{"id":36,"key":"DrMundo","name":"Dr. Mundo","title":"the Madman of Zaun"},"Orianna":{"id":61,"key":"Orianna","name":"Orianna","title":"the Lady of Clockwork"},"Evelynn":{"id":28,"key":"Evelynn","name":"Evelynn","title":"Agony's Embrace"},"RekSai":{"id":421,"key":"RekSai","name":"Rek'Sai","title":"the Void Burrower"},"Lux":{"id":99,"key":"Lux","name":"Lux","title":"the Lady of Luminosity"},"Sion":{"id":14,"key":"Sion","name":"Sion","title":"The Undead Juggernaut"},"Camille":{"id":164,"key":"Camille","name":"Camille","title":"the Steel Shadow"},"MasterYi":{"id":11,"key":"MasterYi","name":"Master Yi","title":"the Wuju Bladesman"},"Ryze":{"id":13,"key":"Ryze","name":"Ryze","title":"the Rune Mage"},"Malphite":{"id":54,"key":"Malphite","name":"Malphite","title":"Shard of the Monolith"},"Anivia":{"id":34,"key":"Anivia","name":"Anivia","title":"the Cryophoenix"},"Shen":{"id":98,"key":"Shen","name":"Shen","title":"the Eye of Twilight"},"JarvanIV":{"id":59,"key":"JarvanIV","name":"Jarvan IV","title":"the Exemplar of Demacia"},"Malzahar":{"id":90,"key":"Malzahar","name":"Malzahar","title":"the Prophet of the Void"},"Zac":{"id":154,"key":"Zac","name":"Zac","title":"the Secret Weapon"},"Gragas":{"id":79,"key":"Gragas","name":"Gragas","title":"the Rabble Rouser"}},"type":"champion","version":"8.6.1"}
var API="RGAPI-47d44832-446d-4532-b5f6-0509bdf4272b";
T=new Array;
T1=new Array;
T2=new Array;
var dont;
var tocheck;
var j=0;
var k=0;
var spell= new Object;
var y={ "type": "summoner", "version": "8.6.1", "data": { "SummonerSiegeChampSelect2": { "id": 34, "summonerLevel": 1, "name": "Nexus Siege: Siege Weapon Slot", "key": "SummonerSiegeChampSelect2", "description": "In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!" }, "SummonerTeleport": { "id": 12, "summonerLevel": 7, "name": "Teleport", "key": "SummonerTeleport", "description": "After channeling for 4.5 seconds, teleports your champion to target allied structure, minion, or ward." }, "SummonerSiegeChampSelect1": { "id": 33, "summonerLevel": 1, "name": "Nexus Siege: Siege Weapon Slot", "key": "SummonerSiegeChampSelect1", "description": "In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!" }, "SummonerExhaust": { "id": 3, "summonerLevel": 4, "name": "Exhaust", "key": "SummonerExhaust", "description": "Exhausts target enemy champion, reducing their Movement Speed by 30%, and their damage dealt by 40% for 2.5 seconds." }, "SummonerBarrier": { "id": 21, "summonerLevel": 4, "name": "Barrier", "key": "SummonerBarrier", "description": "Shields your champion from 115-455 damage (depending on champion level) for 2 seconds." }, "SummonerMana": { "id": 13, "summonerLevel": 6, "name": "Clarity", "key": "SummonerMana", "description": "Restores 50% of your champion's maximum Mana. Also restores allies for 25% of their maximum Mana." }, "SummonerSnowURFSnowball_Mark": { "id": 39, "summonerLevel": 6, "name": "Ultra (Rapidly Flung) Mark", "key": "SummonerSnowURFSnowball_Mark", "description": "It's a snowball! It's a Poro! It's...uh...one of those." }, "SummonerFlash": { "id": 4, "summonerLevel": 7, "name": "Flash", "key": "SummonerFlash", "description": "Teleports your champion a short distance toward your cursor's location." }, "SummonerSnowball": { "id": 32, "summonerLevel": 6, "name": "Mark", "key": "SummonerSnowball", "description": "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up." }, "SummonerDot": { "id": 14, "summonerLevel": 9, "name": "Ignite", "key": "SummonerDot", "description": "Ignites target enemy champion, dealing 80-505 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration." }, "SummonerDarkStarChampSelect2": { "id": 36, "summonerLevel": 1, "name": "Disabled Summoner Spells", "key": "SummonerDarkStarChampSelect2", "description": "Summoner spells are disabled in this mode." }, "SummonerDarkStarChampSelect1": { "id": 35, "summonerLevel": 1, "name": "Disabled Summoner Spells", "key": "SummonerDarkStarChampSelect1", "description": "Summoner spells are disabled in this mode." }, "SummonerPoroRecall": { "id": 30, "summonerLevel": 1, "name": "To the King!", "key": "SummonerPoroRecall", "description": "Quickly travel to the Poro King's side." }, "SummonerHaste": { "id": 6, "summonerLevel": 1, "name": "Ghost", "key": "SummonerHaste", "description": "Your champion gains increased Movement Speed and can move through units for 10 seconds. Grants a maximum of 28-45% (depending on champion level) Movement Speed after accelerating for 2 seconds." }, "SummonerHeal": { "id": 7, "summonerLevel": 1, "name": "Heal", "key": "SummonerHeal", "description": "Restores 90-345 Health (depending on champion level) and grants 30% Movement Speed for 1 second to you and target allied champion. This healing is halved for units recently affected by Summoner Heal." }, "SummonerPoroThrow": { "id": 31, "summonerLevel": 1, "name": "Poro Toss", "key": "SummonerPoroThrow", "description": "Toss a Poro at your enemies. If it hits, you can quickly travel to your target as a follow up." }, "SummonerBoost": { "id": 1, "summonerLevel": 9, "name": "Cleanse", "key": "SummonerBoost", "description": "Removes all disables (excluding suppression and airborne) and summoner spell debuffs affecting your champion and lowers the duration of incoming disables by 65% for 3 seconds." }, "SummonerSmite": { "id": 11, "summonerLevel": 9, "name": "Smite", "key": "SummonerSmite", "description": "Deals 390-1000 true damage (depending on champion level) to target epic, large, or medium monster or enemy minion. Restores Health based on your maximum life when used against monsters." } } };
var ALLCHAMPS= new Object;
var Allchampsbysum= new Object;
var playerinfo= new Object;
var gameReady={"gameId":3580060973,"mapId":11,"gameMode":"CLASSIC","gameType":"MATCHED_GAME","gameQueueConfigId":430,"participants":[{"teamId":100,"spell1Id":7,"spell2Id":4,"championId":22,"profileIconId":513,"summonerName":"BratDovla","bot":false,"summonerId":20559256,"gameCustomizationObjects":[],"perks":{"perkIds":[8021,9101,9104,8014,8234,8236],"perkStyle":8000,"perkSubStyle":8200}},{"teamId":100,"spell1Id":12,"spell2Id":4,"championId":51,"profileIconId":786,"summonerName":"Blago88","bot":false,"summonerId":89977224,"gameCustomizationObjects":[],"perks":{"perkIds":[8005,9111,9104,8014,8234,8236],"perkStyle":8000,"perkSubStyle":8200}},{"teamId":100,"spell1Id":4,"spell2Id":3,"championId":223,"profileIconId":785,"summonerName":"NTX1","bot":false,"summonerId":25958980,"gameCustomizationObjects":[],"perks":{"perkIds":[8351,8304,8345,8347,8473,8451],"perkStyle":8300,"perkSubStyle":8400}},{"teamId":100,"spell1Id":4,"spell2Id":11,"championId":11,"profileIconId":1388,"summonerName":"Bandro97","bot":false,"summonerId":61543258,"gameCustomizationObjects":[],"perks":{"perkIds":[8008,9111,9104,8017,8138,8143],"perkStyle":8000,"perkSubStyle":8100}},{"teamId":100,"spell1Id":4,"spell2Id":14,"championId":84,"profileIconId":3175,"summonerName":"G4m3rl4nD","bot":false,"summonerId":87219161,"gameCustomizationObjects":[],"perks":{"perkIds":[8112,8126,8120,8135,9111,8014],"perkStyle":8100,"perkSubStyle":8000}},{"teamId":200,"spell1Id":4,"spell2Id":12,"championId":99,"profileIconId":3355,"summonerName":"KENSHINNN","bot":false,"summonerId":22817072,"gameCustomizationObjects":[],"perks":{"perkIds":[8229,8226,8233,8236,8136,8139],"perkStyle":8200,"perkSubStyle":8100}},{"teamId":200,"spell1Id":4,"spell2Id":3,"championId":117,"profileIconId":3167,"summonerName":"Urkel69","bot":false,"summonerId":22053001,"gameCustomizationObjects":[],"perks":{"perkIds":[8229,8226,8210,8236,8138,8105],"perkStyle":8200,"perkSubStyle":8100}},{"teamId":200,"spell1Id":14,"spell2Id":4,"championId":22,"profileIconId":25,"summonerName":"Maléficoman","bot":false,"summonerId":67683670,"gameCustomizationObjects":[],"perks":{"perkIds":[8005,9111,9104,8014,8234,8236],"perkStyle":8000,"perkSubStyle":8200}},{"teamId":200,"spell1Id":11,"spell2Id":4,"championId":64,"profileIconId":1590,"summonerName":"smagda","bot":false,"summonerId":97528966,"gameCustomizationObjects":[],"perks":{"perkIds":[8112,8126,8120,8135,9111,8014],"perkStyle":8100,"perkSubStyle":8000}},{"teamId":200,"spell1Id":4,"spell2Id":11,"championId":20,"profileIconId":1436,"summonerName":"bretta007","bot":false,"summonerId":30082801,"gameCustomizationObjects":[],"perks":{"perkIds":[8010,9111,9104,8014,8139,8120],"perkStyle":8000,"perkSubStyle":8100}}],"observers":{"encryptionKey":"VpIgPW4aSvO/oKdhg19shRkYDDhrBloE"},"platformId":"EUW1","bannedChampions":[],"gameStartTime":0,"gameLength":0}

//************************************************************************************************************************************************************
//************************************************************************************************************************************************************
//menu change

function change(menu)
{
	if(menu=="HOME")
	{
document.getElementById("H").className = "main";
document.getElementById('sums').style.display='none';
document.getElementById("S").className = "a1";
document.getElementById("C").className = "a1";
document.getElementById("R").className = "a1";
	}
	if(menu=="SUMMONERS")
	{
		document.getElementById('sums').style.display='inline';
document.getElementById("H").className = "a1";		
document.getElementById("S").className = "main";
document.getElementById("C").className = "a1";
document.getElementById("R").className = "a1";
	}
if(menu=="RUNES")
{
	document.getElementById('sums').style.display='none';
document.getElementById('sums').style.display='none';
document.getElementById("H").className = "a1";
document.getElementById("R").className = "main";
document.getElementById("C").className = "a1";
document.getElementById("S").className = "a1";
}
if(menu=="CHAMPIONS")
{
	document.getElementById('sums').style.display='none';
	document.getElementById('sums').style.display='none';
document.getElementById("H").className = "a1";
document.getElementById("C").className = "main";
document.getElementById("S").className = "a1";
document.getElementById("R").className = "a1";
}

}

//************************************************************************************************************************************************************
//************************************************************************************************************************************************************
//showAllchampions(called in loop)

function championshow(idd,comp)
{	
	var LastPlayed = new Date(Allchampsbysum[comp].lastPlayTime);
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
	
	switch (Allchampsbysum[comp].championLevel)
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
	
	switch(Allchampsbysum[comp].chestGranted)
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
		
}

//************************************************************************************************************************************************************
//************************************************************************************************************************************************************
//Summoner Name/Icon/level


function summonerInformations()
{
document.getElementById("lvl").innerHTML=playerinfo.summonerLevel;
	document.getElementById("Icon").src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/"+playerinfo.profileIconId+".png";
	document.getElementById("Sum").innerHTML =playerinfo.name;
}
//************************************************************************************************************************************************************
//************************************************************************************************************************************************************
//shows all Summoner Info(called in loop)

function ShowInfo(del)
{
	var rownum=1;
	var cellnum=0;
	summonerInformations();
	var table = document.getElementById("champions");
	var row = table.insertRow(0);
	if (del===1)
	{
		var compteur=10;
	}
	else 
		compteur=0;
	for(let i=compteur;i<T.length;i++)
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
	if((del!=1) &&(i%3===0))
	c.innerHTML="<img  id="+T[i]+" src="+link+"><span style='color:white;font-size:20px;'><br>"+T[i]+"</span><hr style='margin-top:35px' width='1037%'>"; 
	else if((del===1)&&((i-10)%3===0))
	c.innerHTML="<img  id="+T[i]+" src="+link+"><span style='color:white;font-size:20px;'><br>"+T[i]+"</span><hr style='margin-top:35px' width='1037%'>"; 
		else
	c.innerHTML="<img  id="+T[i]+" src="+link+"><span style='color:white;font-size:20px;'><br>"+T[i]+"</span>";	
	
	championshow(T[i],i)
	}

}
		

//************************************************************************************************************************************************************
//************************************************************************************************************************************************************
//fill the Champions Table "T" by champions Names owned by summoner

function champNamebyid(id,dont)
{
	
	for (var champ in ALLCHAMPS.data) {			
if((ALLCHAMPS.data[champ].id)===id)
			{
			
			if (dont===0)
			T[j]=champ; 

			T1[j]=champ;

		}
	}

	
}

//************************************************************************************************************************************************************
//************************************************************************************************************************************************************
//Send Champion IDs to champNamebyid to fill the table "T" then call showInfo

function CheckChamps(tocheck,dont,del)
{
for(let i=0;i<tocheck.length;i++)
{
	champNamebyid(tocheck[i].championId,dont,del);
	j++;
	
}
if (dont===0)
ShowInfo(del);
}

//************************************************************************************************************************************************************
//************************************************************************************************************************************************************
//Load All League of legends Champions

function loadALLCHAMPS(loaded,dont,del) {
	
  /*var champs = new XMLHttpRequest();
  champs.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {*/
		ALLCHAMPS=x;/*JSON.parse(this.responseText);*/
		CheckChamps(loaded,dont,del);	
		/*}

	}
  
  champs.open("GET","https://euw1.api.riotgames.com/lol/static-data/v3/champions?api_key="+API, true);
  champs.send();
  */}

//************************************************************************************************************************************************************
//Champions owned By a summoner ID

function champsBysummonerID(response,del)
{
var ChampsBysum = new XMLHttpRequest();
  ChampsBysum.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		Allchampsbysum=JSON.parse(this.responseText);
		dont=0;
		loadALLCHAMPS(Allchampsbysum,dont,del);
		
	
	}
  };
  ChampsBysum.open("GET", "https://euw1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/"+response.id+"?api_key="+API, true);
  ChampsBysum.send();

}

//************************************************************************************************************************************************************
//************************************************************************************************************************************************************
//Get All spells

function GetSpells(iddd)
{
 
	/*var GetAllSpells = new XMLHttpRequest();
  GetAllSpells.onreadystatechange = function() {
   /* if (this.readyState == 4 && this.status == 200) {
		 */AllSpells=y;/*JSON.parse(this.responseText);*/
			for (var spell in AllSpells.data) {			
			
			if((AllSpells.data[spell].id)===iddd)
			{
				
			T2[k]=AllSpells.data[spell].name; 
			
			}
			}
	
	/*}
  };	

   GetAllSpells.open("GET", "https://euw1.api.riotgames.com/lol/static-data/v3/summoner-spells?api_key="+API, true);
	GetAllSpells.send();*/

}

function changename(newname)
{
	document.getElementById("PlayerName").value=newname;
var del=1;
	getplayerbyname("b3",del);

}

	
//************************************************************************************************************************************************************
//************************************************************************************************************************************************************
//Show Game info by summoner

function gamestatus(response)
{
var inGame = new XMLHttpRequest();
  inGame.onreadystatechange = function() {
	  if(this.readyState == 4 && this.status==404)
	  {
		summonerInformations();
		 document.getElementById('Game').innerHTML="Summoner "+playerinfo.name+" not currently in game.";
	  }
    else if (this.readyState == 4 && this.status == 200) {
		gameReady=JSON.parse(this.responseText);
		
		
		
		dont=1;
		document.getElementById('bgdiv').style.display ='inherit';
		document.getElementById('bgdiv1').style.display ='inherit';
		document.getElementById('gameType').style.display ='inherit';
		document.getElementById('gameType').innerHTML ="Game Mode: "+gameReady.gameMode;
		
		summonerInformations();
		tocheck=gameReady.participants;
		loadALLCHAMPS(tocheck,dont);
		var l=0;
		var c=1;
		
		for(i=0;i<T1.length;i++)
		{
		document.getElementById("Name"+(i+1)).innerHTML=tocheck[i].summonerName+"<input type='button' onclick=changename('"+tocheck[i].summonerName+"') value='Check Player informations'></button>";
		document.getElementById("chmapionimg"+(i+1)).src="champs/"+T1[i]+".png";
		document.getElementById("Champion"+(i+1)).innerHTML=T1[i];
		document.getElementById("Champion"+(i+1)).style="float:left";
		document.getElementById("chmapionimg"+(i+1)).style="float:left;margin-left:120px;margin-right:10px;margin-top:2px;margin-bottom:2px";
		GetSpells(tocheck[i].spell1Id);
		k++;
		document.getElementById("spell"+(i+1)).src="Spells/"+T2[l]+".png";
		document.getElementById("spell"+(i+1)).style="float:left;margin-right:2px;margin-top:2px;margin-bottom:2px";
		document.getElementById("spelldiv"+(i+1)).innerHTML=T2[l];
		document.getElementById("spelldiv"+(i+1)).style="float:left";
		GetSpells(tocheck[i].spell2Id);
		k++;
		document.getElementById("spell1"+(i+1)).src="Spells/"+T2[c]+".png";
		document.getElementById("spell1div"+(i+1)).innerHTML=T2[c];
		document.getElementById("spell1div"+(i+1)).style="float:left";
		document.getElementById("spell1"+(i+1)).style="float:left;margin-right:2px;margin-top:2px;margin-bottom:2px";
		l+=2;
		c+=2;
		
}
		
	}
  }
  inGame.open("GET", "https://euw1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/"+response.id+"?api_key="+API, true);
  inGame.send();
}

//************************************************************************************************************************************************************
//************************************************************************************************************************************************************
//Get Summoner By name from Input

function getplayerbyname(called,del)
{
	var Name=document.getElementById("PlayerName").value;
var player = new XMLHttpRequest();
  player.onreadystatechange = function() {
  
		
if(this.readyState == 4 && this.status==404)
	  {
		
		var back= String.fromCharCode(13);
		document.getElementById('data').style.display ='inherit';
		document.getElementById("Sum").innerHTML="<pre style='font-size:30px'>"+back+back+"Summoner Not Found.</pre>";
		document.getElementById("Icon").src="missing.png";
		document.getElementById("Icon").width="100";
		document.getElementById("Icon").height="100";
		document.getElementById("Icon").style="border-radius:0";
		document.getElementById("svg").style.display="none";
		document.getElementById('f').style.display ='none';
		document.getElementById('restart').style.display ='inherit';
	}
   else if (this.readyState == 4 && this.status == 200) {
		playerinfo=JSON.parse(this.responseText);
			
			document.getElementById('f').style.display ='none';
			document.getElementById('data').style.display ='inherit';
			document.getElementById('title').innerHTML ="KiiRrAa - Leauge of legends";
			
			document.getElementById('restart').style.display ='inherit';
	
if(called==="b1")
		{
		document.getElementById('data1').style.display ='inherit';
		champsBysummonerID(playerinfo);
		}
	else if(called==="b2")
		gamestatus(playerinfo);

	else if(called==="b3")
		{
		document.getElementById('bgdiv').style.display ='none';
		document.getElementById('bgdiv1').style.display ='none';
		document.getElementById('gameType').style.display ='none';
		document.getElementById('data1').style.display ='inherit';
		
		champsBysummonerID(playerinfo,del);
		
		}
	}
  }
  player.open("GET", "https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/"+Name+"?api_key="+API, true);
  player.send();
}

//************************************************************************************************************************************************************		
//************************************************************************************************************************************************************

