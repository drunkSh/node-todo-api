//const{SHA256}  = require('crypto-js');
const jwt = require('jsonwebtoken');
var data  = {
 id :10
};
var token = jwt.sign(data,'1234');
console.log(token);
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTZhMmJmZjY0MzM2MjI3MjEzYWQ4MjgiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTE2OTA3NTE5fQ.u1qfTNX2ihVQ2KclOiXLsARQAGESQ09RjRDRnNyQiwg";
var decoded = jwt.verify(token,'1234');
console.log('decoded',decoded);
// var message = "i am user 2";
// var hash = SHA256(message).toString();
// console.log(`Hash:${hash}`);
//
// // var data  = {
//  id : 4
// };
// var token =  {
//   data,
//   hash :SHA256(JSON.stringify(data)+'somesecret').toString()
// }
// var resulthash = SHA256(JSON.stringify(token.data)+"somesecret").toString(); // this technique is called salting
// if(resulthash === token.hash)
//  {
//     console.log("data was not changed");
// }
// else
// {
//   console.log("data was manipulated do not trust");
// }
