const btnDungeonType = document.getElementById('btn-dungeon-type');
const displayDungeonType = document.getElementById('display-dungeon-type');

// // LISTENERS 
btnDungeonType.addEventListener('click', () => {
    getDungeonType();
});

// // HELPER FUNCTIONS

function sumDicePool(dice_pool) {
    return dice_pool.reduce((acc, curr) => acc + curr, 0);
};

function rollxdx(number_of_dice, size_of_dice) {
    let dice_pool = [];

    for ( let dice = 0; dice < number_of_dice; dice++ ) {
        const die = Math.floor(Math.random() * size_of_dice) +1;
        dice_pool.push(die);
    }
    return sumDicePool(dice_pool);
};

// // FUNCTIONS

function getDungeonType() {
    const type = Math.floor(Math.random() * scarlet_dungeons.length);
    const dungeon_type = scarlet_dungeons[type];
    
    const subtype = Math.floor(Math.random() * dungeon_type.subtypes.length);
    const dungeon_subtype = scarlet_dungeons[type].subtypes[subtype];

    const dungeon_size = getDungeonSize();

    displayDungeonType.innerHTML = `${dungeon_type.type}, ${dungeon_subtype}, ${dungeon_size} locations`;
};

function getDungeonSize() {
    const row = Math.floor(Math.random() * scarlet_dungeons_size.length);
    return scarlet_dungeons_size[row].size();
};
