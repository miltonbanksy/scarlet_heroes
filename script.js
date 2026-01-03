const btnDungeonType = document.getElementById('btn-dungeon-type');
const displayDungeonType = document.getElementById('display-dungeon-type');
const btnRoomType = document.getElementById('btn-room-type');
const displayRoomType = document.getElementById('display-room-type');

let dungeon_type = "";

// // LISTENERS 

btnDungeonType.addEventListener('click', () => {
    displayRoomType.innerHTML = "";
    
    // Get dungeon type & subtype
    const type = Math.floor(Math.random() * scarlet_dungeons.length);
    dungeon_type = scarlet_dungeons[type];
    
    const dungeon_subtype_index = Math.floor(Math.random() * dungeon_type.subtypes.length);
    const dungeon_subtype = dungeon_type.subtypes[dungeon_subtype_index];

    // Get dungeon size
    const row = Math.floor(Math.random() * scarlet_dungeons_size.length);
    const dungeon_size = scarlet_dungeons_size[row].size();

    // Get dungeon inhabitants
    const dungeon_inhabitants_index = Math.floor(Math.random() * scarlet_dungeons_inhabitants.length);
    const dungeon_inhabitants = scarlet_dungeons_inhabitants[dungeon_inhabitants_index];

    displayDungeonType.innerHTML = `${dungeon_type.type}, ${dungeon_subtype}, ${dungeon_size} locations, ${dungeon_inhabitants}`;
});


btnRoomType.addEventListener('click', () => {
    if ( dungeon_type == "") {
        return;
    }

    const room_type_index = Math.floor(Math.random() * dungeon_type.locations.length);
    const room_type = dungeon_type.locations[room_type_index];
    displayRoomType.innerHTML = room_type;
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
