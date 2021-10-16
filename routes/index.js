const express = require('express')
const router = express.Router()
const { collection } = require('../dbConnnect/index')

router.get('/get', function (req, res) {
  res.send('hello, user!')
})

router.get('/post', async function (req, res) {
  await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  res.send('post done!')
})



module.exports = router