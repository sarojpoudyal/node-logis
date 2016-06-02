module.exports.new = function(req, res, next){
  res.render('createPackage', {title: 'Post new Package'});
};
module.exports.display = function(req, res, next){
  res.render('show', {title: 'Transaction Details'});
};
module.exports.trackPackage = function(req, res, next){
  res.render('index', {title: "Track Package"});
};
