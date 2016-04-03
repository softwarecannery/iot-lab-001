
    var mqtt = require('sc-mqtt');
    var client = mqtt.client(); 
    client.connect();
    client.publish('scriptcraft','loaded');
    client.subscribe('iot');
    //events.on('block.BlockBreakEvent', function (listener, event){
        //client.publish('minecraft', 'blockbreak', 1, true );       
    //});



    // callback to use if you want to receive and handle messages
    client.onMessageArrived(function(topic, message){
       // handle incoming messages here.
       var bytes = message.payload;
    });
    // the following callbacks are optional 
    client.onDeliveryComplete(function(deliveryToken){
       // optional callback to handle completion of outgoing messages
       // (message ACK'd by receiver)
    });
    client.onConnectionLost(function(cause){
       // optional callback to handle connection loss
    });


    command( 'cheekyUp', function( ) {
      client.publish('iot','cheeky-up');
    });
