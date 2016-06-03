var mongoose = require('mongoose');

var addressSchema = new mongoose.Schema({
  street : String,
  city : String,
  district : String,
  state : String,
  country : String,
  pin : String
});

var packageSchema = new mongoose.Schema({
  transactionID : String,
  initialDateDispatched : {type: Date, default : Date.now},
  initialSenderAddress : [addressSchema],
  initialSenderAddressCoor : {type: [Number], index: '2dsphere'},
  recciverAddress : [addressSchema],
  recciverAddressVendorCoor : {type: [Number], index: '2dsphere'},
  currentDateDispatched : Date,
  currentSender : [addressSchema],
  currentSenderCoor : {type: [Number], index: '2dsphere'},
  currentRecciver : [addressSchema],
  currentRecciverCoor : {type: [Number], index: '2dsphere'},
  status : String,
  vendorID : String
 });


mongoose.model('Package', packageSchema);
