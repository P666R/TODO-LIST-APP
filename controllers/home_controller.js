// import the database
const Task = require('../models/task');

// colors for the categories
let colors = {
    personal: 'darkgreen',
    work: 'darkmagenta',
    education: 'darkorange',
    hobby: 'darkblue',
    other: 'darkcyan',
    'n/a': 'grey',
}

// controller funtion for '/' route
module.exports.home = function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err) {
            console.log('Error in fetching the tasks');
            return;
        }
        return res.render('home', {
            task_list: tasks,
            color_list: colors
        });
    });
}