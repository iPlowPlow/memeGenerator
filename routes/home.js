module.exports = function(app, listImg){


    app.get("/", function(req, res) {



        res.render("home.ejs", { files: listImg });
       

       
             
    });
};
