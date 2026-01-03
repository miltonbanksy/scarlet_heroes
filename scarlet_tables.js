const scarlet_dungeons = [
    {
        type: "cavern",
        subtypes: ["abandoned mine", "bandit hideout", "beast lair", "cave village", "astrological intersection", "hermit's haven", "massacre site", "prehistoric dwelling", "prehuman shrine", "refugee shelter", "refuge", "unquiet grave"],
        locations: ["caved-in cavern", "circular chamber", "crumbling dry cave", "dead end", "domed cavern", "flowing water", "narrow crevasse", "natural bridge", "pit ledge", "sloping gallery", "spiral tunnel", "stalactite maze", "strata pocket", "stream bank","tunnel intersection","twisted tunnel","underground pool","vertical shaft","water-smoothed cave","wide gallery"]
    },
    {
        type: "habitation",
        subtypes: ["bandit camp", "crumbling villa", "clanhold", "escaped slave camp", "exile hamlet", "farming village", "hunter's camp", "non-human settlement", "pillaged village", "prehuman habitation", "ruined manor", "sacked town"],
        locations: ["bathing room", "cellar", "courtyard", "dining room", "garden", "great  hall", "kennel / stable", "kitchen", "library", "master bedroom", "pantry", "salon", "scullery", "servant's rooms", "shrine", "solar", "stairwell", "storeroom", "study", "vault"]
    },
    {
        type: "fortress",
        subtypes: ["abandoned army camp", "brigand stronghold", "broken keep", "crumbling watchtower", "decaying toll keep", "defensible tower", "fortified manor", "natural fortress", "prehuman fort", "remnant dungeon", "ruined caravanserai", "shattered outpost"],
        locations: ["archery range", "armory", "barracks", "cemetery", "cistern", "commissary", "family quarters", "gatehouse", "guardpost", "kitchen", "map and file room", "mess hall", "officer's quarters", "prison cell", "sickroom", "smithy", "stables", "storeroom", "training hall", "vault"]
    },
    {
        type: "temple",
        subtypes: ["alien place of worship", "cursed temple", "forgotten fane", "fortified abbey", "heretic hideout", "holy natural feature", "isolated monastery", "pilgrimage temple", "prehuman shrine", "ruined nunnery", "sacred tomb", "sectarian stronghold"],
        locations: ["acolyte's cells", "altar hall", "bathing room", "cemetery", "garden", "guardpost", "kitchen", "library", "meditation room", "minor shrine", "pilgrim quarters", "prayer hall", "priest's quarters", "relic chamber", "ritual chamber", "sickroom", "storeroom", "vault", "vestry", "workroom"]
    },
    {
        type: "academy",
        subtypes: ["cabal of infernalists", "demon-ruled school", "fortified academy", "foul breeding pit", "inhuman wizard lair", "lost library", "mad wizard's lab", "necromancer cell", "plagued research lab", "prison for mages", "ruined mage school", "wizard tower"],
        locations: ["laboratory", "occult library", "apprentice rooms", "msater bedroom", "summoning room", "divination room", "storeroom", "kitchen", "study hall", "dining hall", "vault", "secure cell", "servant's chambers", "crafter's workshop", "academy archives", "memorial hall", "monument", "couryard / garden", "stables", "lecture hall"]
    }
];

const scarlet_dungeons_size = [
    {size: () => rollxdx(1, 6)},
    {size: () => rollxdx(2, 6)},
    {size: () => rollxdx(3, 6)},
    {size: () => rollxdx(1, 10) + 10},
    {size: () => rollxdx(1, 10) + 5},
    {size: () => rollxdx(3, 6)},
    {size: () => rollxdx(1, 20)},
    {size: () => rollxdx(2, 12)},
    {size: () => rollxdx(1, 20)},
    {size: () => rollxdx(1, 12) + 10},
    {size: () => rollxdx(2, 20)},
    {size: () => rollxdx(1, 100)},
];

const scarlet_dungeons_inhabitants = ["bandits", "deserters", "dwarf repenters", "ghosts", "shou", "elf zealots", "lizardfolk", "ogres", "wild beasts", "tidespawn", "tide cult", "centipede women", "necromancers", "infernalists", "rebels", "heretics", "looters", "supremacists", "abominations", "degenerates"];
const scarlet_dungeons_inhabitants_rank = ["minion", "elite", "boss", "mage", "civilian"];
