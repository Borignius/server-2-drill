const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const students = [{
        "id": 1,
        "cohortName": "17-01-WD-DP",
        "cohortCode": "g100",
        "numberOfStudents": 28
    },{
        "id": 2,
        "cohortName": "17-01-DS-GT",
        "cohortCode": "g105",
        "numberOfStudents": 24
    },{
        "id": 3,
        "cohortName": "17-02-WD-PX",
        "cohortCode": "g109",
        "numberOfStudents": 30
    },{
        "id": 4,
        "cohortName": "17-03-WD-BD",
        "cohortCode": "g110",
        "numberOfStudents": 29
    }]



app.get('/', (request, response) =>{
  response.json({data: students})
})

app.get('/:id', (request, response) =>{
  let thisResponse =  students[request.params.id - 1]
  if (!thisResponse){
    response.status(404)
    response.json({
           error: {
               message: "No class found!"
           }
       })
  }

  response.json({data: thisResponse})
})



app.listen(process.env.PORT || 3000)
