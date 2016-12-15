console.log("messages Controller");

var mongoose = require('mongoose');
var Message = mongoose.model('Message');



function messagesController() {
    this.home = function (req, res) {
        Message.find({}, false, true).populate('_comment').exec(function (err, messages) {
            res.json(messages);
        })
    };





};
module.exports = new messagesController();


