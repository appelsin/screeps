var Helpers = require('helpers');

exports.creep = function(creep_type, blocks, creep_role, spawn){
    creep_role = creep_role || creep_type;
    spawn = spawn || 'Spawn1';
    Memory.creep_id = Memory.creep_id || 0
    var creep_name = creep_type + '_' + Memory.creep_id;
    var result = Game.spawns[spawn].createCreep(
        blocks,
        creep_name,
        {
            role: creep_role, 
            type: creep_type, 
            spawn: spawn, 
            blocks: blocks, 
            respawn: true
        }
    );
    
    if(!Helpers.isError(result)) {
        Memory.creep_id++;
    }
    
    return result;
}