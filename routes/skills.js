import { Router } from 'express'
import { skillsArr } from '../data/skills-data.js'

const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('skills/index', {
    title: 'Skills List',
    skills: skillsArr
  })
})

export {
  router
}
