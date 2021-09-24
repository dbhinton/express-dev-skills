var express = require('express');
var router = express.Router();
const skillController = require("../controllers/skills")

/* GET users listing. */
router.get('/', skillController.index);
router.get("/new", skillController.new);
router.get("/:id", skillController.show);
router.post("/", skillController.create);
router.delete("/:id", skillController.delete)
 //server is where the request is sent to and it handles the get request by getting whatever route 
//  matched the request
// The first parameter "/:id" gets whatever the user puts after the /todos
// which is prepended to the 

 // existing route above
 


module.exports = router;
