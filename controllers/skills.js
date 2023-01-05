import { skillsArr } from '../data/skills-data.js'

function index(req, res) {
  res.render('skills/index', {
    title: 'Skills List',
    skills: skillsArr
  })
}

export {
  index
}