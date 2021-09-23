const skills = [
    {id: 125223, skill: 'React', mastered: false},
    {id: 127904, skill: 'Node', mastered: true},
    {id: 139608, skill: 'Python', mastered: true}
  ];
  
module.exports = {
    getAll,
    getOne,
    create

};
  
function getAll() {
    return skills;
}

function getOne(id){
    return skills.find(skill => skill.id === parseInt(id))
}

function create(skill){
    skill.id = Date.now() % 100000

    skill.mastered = false;
    skills.push(skill)
}