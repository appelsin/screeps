module.exports = function(creep) {
    if(0 === creep.energy) {
		var target = creep.pos.findClosest(Game.MY_SPAWNS);
		creep.moveTo(target);
		creep.pickup(target);
	}
	
    var target = creep.pos.findClosest(Game.MY_CREEPS, {
        filter: function(object) {
            return object.hits < object.hitsMax;
        }
    });
    if(target) {
        creep.moveTo(target);
        creep.heal(target);
    }
}