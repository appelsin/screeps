module.exports = function(creep) {
    var targets = creep.room.find(Game.HOSTILE_CREEPS);
	if(targets.length) {
		creep.moveTo(targets[0]);
		creep.attack(targets[0]);
	} else {
	    require('ai_behavior_position')(creep);
	}
}