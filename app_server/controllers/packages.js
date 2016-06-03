module.exports.new = function(req, res, next){
  res.render('createPackage', {title: "Logis - Paperless Transactions",  pageHeader: "New Package"});
};
module.exports.display = function(req, res, next){
  res.render('show', {title: "Logis - Paperless Transactions" , pageHeader:'Transaction Details',vendor: 'Ramesh Agrawal',
transactionDetails:{
  id:'234567845',
  initialDateDispatched: '23/3/2014',
  initialAddress: 'Kathiar, Kolkata Nagar, West Bengal, 783453',
  recciverAddress: 'Rangpo, Sikkim, 737129',
  currentDateDispatched: '25/3/2014',
  currentSender: 'Malda, West Bengal, 734534',
  currentRecciver: 'Hill Cart Road, Siliguri, West Bengal, 737243'
}
});
};
module.exports.trackPackage = function(req, res, next){
  res.render('index', {title: "Track Package"});
};
