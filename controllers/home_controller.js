


// controller funtion for '/' route
module.exports.home = function(req, res){
    return res.render('home', {
        title: "TODO-APP"
    });
}