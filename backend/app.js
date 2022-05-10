const express = require('express')
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
const port = 8000
const api = process.env.API_URL

app.use(cors()) 

app.get('/api', async(req, res) => {
  try{
    const tags = req.query.tags || 'fire'
    const response = await axios.get(api + '&tags=' + tags)
    
    if(response){
      res.status(200).json({
        data: response.data,
        message: 'succes get data'
      })
    } else {
      res.status(400).json({
        data:{},
        message:'cannot fetch data'

      })
    }
  } catch(err){
    res.status(400).json({
      data: {},
      message: err.message
    })
  }

})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})