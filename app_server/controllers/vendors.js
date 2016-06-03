module.exports.dashboard = function(req, res){
  res.render('dashboard', {title: "Logis - Paperless Transactions", pageHeader: "Dashboard",
  vendor: 'Ramesh Agrawal',
  transactionIn: [{
    id: '123456543',
    address: 'Main Road, Bhaglapur, Patna, Bihar, 737133',
    dateDispatched: '23/3/2016'
  },{
    id: '123456543',
    address: 'Main Road, Bhaglapur, Patna, Bihar, 737133',
    dateDispatched: '23/3/2016'
  },{
    id: '123456543',
    address: 'Main Road, Bhaglapur, Patna, Bihar, 737133',
    dateDispatched: '23/3/2016'
  },{
    id: '123456543',
    address: 'Main Road, Bhaglapur, Patna, Bihar, 737133',
    dateDispatched: '23/3/2016'
  },{
    id: '123456543',
    address: 'Main Road, Bhaglapur, Patna, Bihar, 737133',
    dateDispatched: '23/3/2016'
  }],
  transactionOut: [
    {
      id: '98765432',
      address: 'Main Road, Jabalpur, Panipat, Bihar, 737333',
      dateDispatched: '25/3/2016'
    },
    {
      id: '98765432',
      address: 'Main Road, Jabalpur, Panipat, Bihar, 737333',
      dateDispatched: '25/3/2016'
    },{
      id: '98765432',
      address: 'Main Road, Jabalpur, Panipat, Bihar, 737333',
      dateDispatched: '25/3/2016'
    },{
      id: '98765432',
      address: 'Main Road, Jabalpur, Panipat, Bihar, 737333',
      dateDispatched: '25/3/2016'
    },{
      id: '98765432',
      address: 'Main Road, Jabalpur, Panipat, Bihar, 737333',
      dateDispatched: '25/3/2016'
    },{
      id: '98765432',
      address: 'Main Road, Jabalpur, Panipat, Bihar, 737333',
      dateDispatched: '25/3/2016'
    }

  ]
  });
};
