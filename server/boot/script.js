// module.exports = function(app) {
//
//   var Customer = app.models.Customer;
//   var Role = app.models.Role;
//   var RoleMapping = app.models.RoleMapping;
//   // console.log(Customer);
//   Customer.create({
//     username: 'admin',
//     email: 'admin@xyz.com',
//     password: 'pass',
//     name: 'Admin'
// }, function(err, users) {
//     if (err) throw err;
//
//     Role.create({
//       name: 'admin'
//     }, function(err, role) {
//       if (err) throw err;
//
//       role.principals.create({
//         principalType: RoleMapping.USER,
//         principalId: users[0].id
//       }, function(err, principal) {
//         if (err) throw err;
//         console.log('Done');
//       })
//     })
//   })
//
// }
