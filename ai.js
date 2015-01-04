module.exports = function() {
    var ai_harvester = require('ai_harvester');
    var ai_builder   = require('ai_builder');
    var ai_guard     = require('ai_guard');
    var ai_archer    = require('ai_archer');
    var ai_healer    = require('ai_healer');
    var ai_miner     = require('ai_miner');

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
    
        if     (creep.memory.role == 'harvester') { ai_harvester(creep); }
        else if(creep.memory.role == 'guard')     { ai_guard(creep); }
        else if(creep.memory.role == 'builder')   { ai_builder(creep); }
        else if(creep.memory.role == 'archer')    { ai_archer(creep); }
        else if(creep.memory.role == 'healer')    { ai_healer(creep); }
        else if(creep.memory.role == 'miner')     { ai_miner(creep); }
    }
}