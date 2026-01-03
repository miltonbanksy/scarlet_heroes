const scarlet_dungeons = [
    {
        type: "cavern",
        subtypes: ["abandoned mine", "bandit hideout"],
        locations: ["caved-in cavern", "circular chamber"]
    },
    {
        type: "habitation",
        subtypes: ["bandit camp", "crumbling villa"],
        locations: ["bathing room", "cellar"]
    },
    {
        type: "fortress",
        subtypes: ["abandoned army camp", "brigand stronghold"],
        locations: ["archery range", "armory"]
    }
];

const scarlet_dungeons_size = [
    {size: () => rollxdx(1, 6)},
    {size: () => rollxdx(2, 6)},
    {size: () => rollxdx(3, 6)},
    {size: () => rollxdx(1, 10) + 10},
];