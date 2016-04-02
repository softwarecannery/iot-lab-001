
var Cylon = require('cylon');

Cylon.robot({
  connections: {
    ardrone: { adaptor: 'ardrone', port: '192.168.168.168' }
  },

  devices: {
    drone: { driver: 'ardrone' }
  },

  work: function(my) {
    my.drone.takeoff();
    after((4).seconds(), function() {my.drone.up(1);});
    after((5).seconds(), function() {my.drone.hover();});
    after((6).seconds(), function() {my.drone.frontFlip(1);});
    after((8).seconds(), function() {my.drone.hover(1);});
    after((10).seconds(), function() {my.drone.down(1);});
    after((12).seconds(), function() {my.drone.hover();});
    after((14).seconds(), function() {my.drone.left(1);});
    after((15).seconds(), function() {my.drone.right(1);});
    after((17).seconds(), function() {my.drone.hover();});
    after((18).seconds(), function() { my.drone.land(); });
    after((22).seconds(), function() { my.drone.stop(); });
  }
}).start();
