const route = require('express').Router()
const { getbd, getOnebd, addbd, editbd, deletbd } = require('../controllers/bd.controller')

route.route('/').get(getbd)
route.route('/:id').get(getOnebd)
route.route('/').post(addbd)
route.route('/:id').put(editbd)
route.route('/:id').delete(deletbd)
module.exports = route;