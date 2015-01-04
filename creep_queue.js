var CreepCreate = require('creep_create');
var Helpers = require('helpers');
var CreepTypes = require('creep_types');
var _ = require('lodash');

function init_spawn_queue(spawn) {
    Memory.spawns[spawn] = Memory.spawns[spawn] || {};
    Memory.spawns[spawn].creep_queue = Memory.spawns[spawn].creep_queue || [];
}

// queue by type
exports.push = function(type, spawn){
    var args = _.cloneDeep(CreepTypes[type]);
    if(typeof(spawn)) { args.spawn = spawn; }
    args.type = type;
    return this.queue(args);
}

// queue by args hash
exports.queue = function(args){
    args.spawn = args.spawn || 'Spawn1';
    init_spawn_queue(args.spawn);
    
    return Memory.spawns[args.spawn].creep_queue.push(args);
}

// create creep from queue
exports.exec = function(spawn) {
    spawn = spawn || 'Spawn1';
    init_spawn_queue(spawn);
    
    // get first element from queue
    var creep_data = Memory.spawns[spawn].creep_queue[0];
    
    if (creep_data) {
        // try to create a creep
        var result = CreepCreate.creep(creep_data.type, creep_data.blocks, creep_data.role, creep_data.spawn);
        console.log(result);
        // remove first element from queue on success
        if(!Helpers.isError(result)) {
            Memory.spawns[spawn].creep_queue.splice(0,1);
        }
    }
    
    return result;
}

exports.status = function(spawn) {
    spawn = spawn || 'Spawn1';
    init_spawn_queue(spawn);
    
    return Memory.spawns[spawn].creep_queue.length;
}