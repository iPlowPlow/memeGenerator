module.exports = function(app, urlApi){

    app.get("/", function(req, res) {
      
        res.render("home.ejs");
             
    });
};
