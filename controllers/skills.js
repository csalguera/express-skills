import { Skill } from "../models/skill.js"

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      title: 'Skills List',
      skills: skills
    })
  }).catch(error => {
    console.log(error);
    res.redirect('/')
  })
}

export {
  index
}