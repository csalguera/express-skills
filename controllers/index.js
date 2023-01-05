/* No imports needed */

function index(req, res) {
  res.render('index', { title: 'Express Skills' })
}

export {
  index
}