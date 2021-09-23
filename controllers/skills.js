const Skill = require('../models/skill');

module.exports ={
    index: index,
    show: show,
    new: newSkill
}

// res.render is telling the server what view to send back to the client and tells model what to go do
function index(req, res){
    res.render("skills/index", { //render automatically knows to find skills/index in views, it's a predefined setting within express
        skills: Skill.getAll(), //<--index says get all of whaterver resource (from model) in this case skills
        time: req.time
    })
}

function show(req, res){
    console.log(req.params)
    res.render("skills/show", {
        skill: Skill.getOne(req.params.id)
    })
}

function newSkill (req, res){
    console.log(req.params)
    res.render("skills/new")
}