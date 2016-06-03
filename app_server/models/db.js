var mongoose = require('mongoose');

var dbUri = 'mongodb://localhost/Logis';
mongoose.connect(dbUri);

mongoose.connection.on('connected', function(){
  console.log("Mongoose Connected to " + dbUri);
});
mongoose.connection.on('error', function(err){
  console.log("Mongoose Connection Error: " + err);
});
mongoose.connection.on('disconnected', function(){
  console.log("Mongoose Disconnected");
});

var shutdownMongo = function(msg, callback){
  mongoose.connection.close(function(){
    console.log('Mongoose Disconnected through ' + msg);
    callback();
  });
};

process.on('SIGINT', function(){
  shutdownMongo('app termination', function(){
    process.exit(0);
  });
});

process.on('SIGTERM', function(){
  shutdownMongo('Heroku app termination', function(){
    process.exit(0);
  });
});


require('./vendor');
require('./package');
