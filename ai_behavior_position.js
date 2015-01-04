module.exports = function(creep) {
    if(Game.flags.spawnFlag) {
        creep.moveTo(Game.flags.spawnFlag);
    }
}