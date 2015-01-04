module.exports = {
    // military
    guard: {
        role: 'guard',
        blocks: [Game.ATTACK, Game.MOVE, Game.TOUGH]
    },
    archer: {
        role: 'archer',
        blocks: [Game.RANGED_ATTACK, Game.MOVE, Game.TOUGH]
    },
    tank: {
        role: 'guard',
        blocks: [Game.ATTACK, Game.MOVE, Game.TOUGH, Game.ATTACK, Game.MOVE]
    },
    
    // heal
    healer: {
        role: 'healer',
        blocks: [Game.CARRY, Game.HEAL, Game.MOVE]
    },
    
    // resourses
    harvester: {
        role: 'harvester',
        blocks: [Game.CARRY, Game.WORK, Game.MOVE]
    },
    miner: {
        role: 'miner',
        blocks: [Game.WORK, Game.WORK, Game.MOVE]
    },
    truck: {
        role: 'truck',
        blocks: [Game.CARRY, Game.MOVE]
    },
    builder: {
        role: 'builder',
        blocks: [Game.CARRY, Game.WORK, Game.MOVE]
    }
};