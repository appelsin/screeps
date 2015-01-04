module.exports = function(creep) {
	var sources = creep.room.find(Game.SOURCES);
	creep.moveTo(sources[0]);
	creep.harvest(sources[0]);
}