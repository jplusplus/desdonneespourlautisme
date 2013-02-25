var fs = require("fs");
// Get the photo list from the portrait directory
var photoList = fs.readdirSync("public/images/portrait/");


exports.index = function(req, res){
    
    
    res.render('index', { 
        title: "Des données pour l'autisme",
        photoList: photoList        
    });
};



exports.explorer = function(req, res){

    res.render('explorer', { 
        title: "Explorer - Des données pour l'autisme"  ,
        photoList: photoList                  
    });
};


exports.contribuer = function(req, res){

    res.render('contribuer', { 
        title: "Des données pour l'autisme",
        photoList: photoList        
    });
};