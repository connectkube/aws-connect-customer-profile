const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

var customerProfileClient = new AWS.CustomerProfiles();
var connectClient = new AWS.Connect();

const trialObject = {
   CustomerId: 'AAA112',
   ReferenceId: '111222',
   ServiceDate: '2/10/2021',
   ServiceType: 'Cleaning',
   AssignedAgent: 'John Doe',
   CompletionDate: '2/14/2021',
   Notes: 'Task completed successfully'
};

return customerProfileClient.putProfileObject({
    "DomainName": "soflo_customerprofile",
    "ObjectTypeName": "serviceRecord",
    "Object": JSON.stringify(trialObject)
}).promise()
.then((data) => {
  console.log('putProfileObject Result');
  console.log(JSON.stringify(data, null, 2));

  return customerProfileClient.searchProfiles({
      "DomainName": domainName,
      "KeyName": "_account",
      "Values": ['AAA112']
  }).promise();

})
.then((data) => {
  console.log('searchProfiles Result');
  console.log(JSON.stringify(data, null, 2));
})
.catch((err) => {
  console.log('searchProfiles Error')
  console.log(JSON.stringify(err, null, 2));
})
