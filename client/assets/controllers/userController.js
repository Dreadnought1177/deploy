
myApp.controller('userController', ['userFactory', '$location', userController]);

function userController(userFactory, $location) {
    var _this = this;

//     userFactory.adduser(this.user, function(data) {
//         console.log("factory add user");
//         if(data.hasOwnProperty('errors')){
//             _this.regErrors = data.errors;
//             console.log(data.errors);
//         } else {
//             $location.path('/home');
//         }
//     })
// };



}