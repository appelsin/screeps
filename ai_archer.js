module.exports = function(creep) {
    var targets = creep.pos.findInRange(Game.HOSTILE_CREEPS, 3);
    if(targets.length > 0) {
        creep.rangedAttack(targets[0]);
    } else {
        targets = creep.room.find(Game.HOSTILE_CREEPS);
    	if(targets.length > 0) {
    		creep.moveTo(targets[0]);
    	} else {
    	    require('ai_behavior_position')(creep);
    	}
    }
}