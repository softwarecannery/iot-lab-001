var Cylon = require('cylon');

Cylon.robot({
  connections: {
    ardrone: { adaptor: 'ardrone', port: '192.168.1.1' },
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.168.105:1883' }
  },

  devices: {
    drone: { driver: 'ardrone' },
    message: { driver: 'mqtt', topic: 'iot', adaptor: 'mqtt', connection: 'server' }
  },

  work: function(my) {
    my.message.on('message', function (topic) {

    console.log(topic);
    if ( topic == "ardrone-takeoff" ) { 
      my.drone.takeoff();
      console.log("takeoff");
    };
if ( topic == "ardrone-up" ) { 
      my.drone.up(1);
      console.log("UP");
    };

if ( topic == "ardrone-hvr" ) { 
      my.drone.hover();
      console.log("UP");
    };

if ( topic == "ardrone-left" ) { 
      my.drone.left(1);
      console.log("UP");
    };

if ( topic == "ardrone-right" ) { 
      my.drone.right(1);
      console.log("UP");
    };

if ( topic == "ardrone-stop" ) { 
      my.drone.stop();
      my.drone.land();
      console.log("STOPPING");
    };
   
    });
  }
}).start();
