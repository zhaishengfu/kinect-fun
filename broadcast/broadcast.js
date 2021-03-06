var Kinect2 = require('kinect2'),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

var kinect = new Kinect2();

if(kinect.open()) {
    server.listen(5555);
    console.log("kinect broadcasting to ngrok via localhost:5555");
    kinect.on('bodyFrame', function(bodyFrame){
        //console.log('emmitting body frame');
        io.sockets.emit('bodyFrame', bodyFrame);
    });

    kinect.openBodyReader();
}
