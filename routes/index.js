const express = require('express')
const router = express.Router()
const { collection } = require('../dbConnnect/index')

router.get('/get', async function (req, res) {
  const data = await collection.find({}).toArray();
  res.send(data)
})

router.post('/post', async function (req, res) {
  const data = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  res.send(data)
})



module.exports = router