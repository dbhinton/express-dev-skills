const skills = [
    {id: 125223, skill: 'React', mastered: false},
    {id: 127904, skill: 'Node', mastered: true},
    {id: 139608, skill: 'Python', mastered: true}
  ];
  
module.exports = {
    getAll,
    getOne

};
  
function getAll() {
    return skills;
}

function getOne(id){
    return skills.find(skill => skill.id === parseInt(id))
}