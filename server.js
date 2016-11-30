var path = require("path");
var express = require("express");

var router = express();


router.use(express.static(path.resolve(__dirname, "client")));


router.get("/list", function(req, res) {
  res.send("College list");
});

router.get("/deadline", function(req, res) {
  res.send("College deadline");
});

router.post("/admin-login", function(req, res) {
  res.send("Admin login succeeded");
});

router.post("/college-update", function(req, res) {
  res.send("College data successfully updated");
});

router.post("/student-login", function(req, res) {
  res.send("Student login successful");
});

router.post("/shortlist-update", function(req, res) {
  res.send("Shortlist successfully updated");
});

router.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Chat server listening at", process.env.IP + ":" + process.env.PORT);
});
