if(!Memory.state) { 
    Memory.state = 'init';
}
if('init' == Memory.state) {
    Memory.state = 'stage_1';
    
    require('creep_queue').push('harvester');
    require('creep_queue').push('harvester');
    require('creep_queue').push('harvester');
    
    require('creep_queue').push('guard');
    require('creep_queue').push('guard');
    require('creep_queue').push('guard');
    
    require('creep_queue').push('builder');
    
    require('creep_queue').push('archer');
    require('creep_queue').push('archer');
    require('creep_queue').push('archer');
    
    require('creep_queue').push('guard');
    require('creep_queue').push('guard');
    require('creep_queue').push('guard');
}
if('stage_1' == Memory.state) {
   Memory.state = 'add_healers';
   
   require('creep_queue').push('healer');
   require('creep_queue').push('healer');
}

if('add_healers' == Memory.state) {
   Memory.state = 'add_tanks';
   
   require('creep_queue').push('tank');
   require('creep_queue').push('tank');
}

require('respawn')();
require('ai')();

require('creep_queue').exec('Spawn1');