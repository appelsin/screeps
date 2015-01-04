module.exports = function(creep) {
	if(creep.energy < creep.energyCapacity) {
        var target = creep.pos.findClosest(Game.DROPPED_ENERGY);
        if(target) {
            creep.moveTo(target);
            creep.pickup(target);
        }
	} else {
		creep.moveTo(Game.spawns.Spawn1);
		creep.transferEnergy(Game.spawns.Spawn1)
	}
}