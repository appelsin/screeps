module.exports = function() {
    var _ = require('lodash');
    var Helpers = require('helpers');
    
    _.forIn(Memory.creeps, function(value, key){
        if(value.respawn && !Game.creeps[key]) {
            var result = require('creep_queue').queue(value);
            if(Helpers.isError(result)) {
                value.error = result;
            } else { 
                delete Memory.creeps[key];
            }
        }
    });
}