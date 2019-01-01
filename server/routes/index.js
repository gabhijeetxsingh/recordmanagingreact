var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/users", function(req, res, next) {
  res.locals.connection.query("select * from persons", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

router.get('/edit', function(req, res, next) {
  res.locals.connection.query("update members set name = "+req.body.name+", email = "+req.body.email+" where id = "+req.body.id+"",  (error, results, fields) =>{
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});
module.exports = router;
