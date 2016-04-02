var Cylon = require('cylon');
var ev3dev = require('/home/robot/node_modules/ev3dev-lang/bin/index.js');

Cylon.robot({
  connections: {
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.168.108:1883' },
  },

  devices: {
   message: { driver: 'mqtt', topic: 'roll', adaptor: 'mqtt', connection: 'server' },
  },

  work: function(my) {

    var motor = new ev3dev.Motor(ev3dev.OUTPUT_A);
    if(!motor.connected) { console.error("No motor on port A? "); }
  
    my.message.on('message', function (topic) {
      console.log(topic);

      // if message, run to this location
      if ( topic == "ev3-move" ) { 
        motor.speedRegulationEnabled = 'on';
        motor.positionSp = 180;
        motor.speedSp = 500;
        motor.stopCommand = 'brake';
        motor.command = "run-to-rel-pos";
      };

      if ( topic == "red" ) { };
      if ( topic == "green" ) { };
      if ( topic == "blue" ) { };
      if ( topic == "roll-short" ) { };
      if ( topic == "azul" ) { };
    });
}
}).start();
