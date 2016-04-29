var Cylon = require('cylon');

Cylon.robot({
  connections: {
    leapmotion: { adaptor: 'leapmotion' },
    server: { adaptor: 'mqtt', host: 'mqtt://192.168.168.105:1883' }
  },

  devices: {
    leapmotion: { driver: 'leapmotion' },
    message: { driver: 'mqtt', topic: 'iot', adaptor: 'mqtt', connection: 'server' }
  },

  work: function(my) {
    my.leapmotion.on('gesture', function(gesture) {

       //TAKEOFF GESTURE (Swipe)
       
      if(gesture.type === 'swipe') {
        my.message.publish('ardrone-takeoff', 'iot'); 
        console.log('CONTROLLER -> DRONE: Start takeoff procedures.');
        console.log('DRONE -> CONTROLLER: Starting takeoff procedures.');
      }

      //LANDING GESTURE (Key Tap)

      if(gesture.type === 'keyTap') {
        my.message.publish('ardrone-stop', 'iot'); 
        console.log('CONTROLLER -> DRONE: Start landing procedures.');
	console.log('DRONE -> CONTROLLER: Starting landing procedures.');
      }

      //FLIPPING GESTURE (Key Tap)

      if(gesture.type === 'circle') {
        my.message.publish('ardrone-flip', 'iot'); 
        console.log('CONTROLLER -> DRONE: Start flip procedures.');
	console.log('DRONE -> CONTROLLER: Starting flip procedures.');
      }

    });
  }
}).start();


