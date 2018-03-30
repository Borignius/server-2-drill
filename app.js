const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const students = [{
        "id": 1,
        "fullName": "Kyle Coberly",
        "title": "Faculty Director",
        "numberOfdogs": 0
    },{
        "id": 2,
        "fullName": "Danny Fritz",
        "title": "Lead Instructor",
        "numberOfdogs": 0
    },{
        "id": 3,
        "fullName": "CJ Reynolds",
        "title": "Lead Instructor",
        "numberOfdogs": 0
    },{
        "id": 4,
        "fullName": "Brooks Patton",
        "title": "Lead Instructor",
        "numberOfdogs": 0
    },{
        "id": 5,
        "fullName": "Roberto Ortega",
        "title": "Lead Instructor",
        "numberOfdogs": 1
    },{
        "id": 6,
        "fullName": "Chad Drummond",
        "title": "Instructor",
        "numberOfdogs": 0
      },{
        "id": 7,
        "fullName": "Kim Schlesinger",
        "title": "Instructor",
        "numberOfdogs": 0
      },{
        "id": 8,
        "fullName": "Peter Ostiguy",
        "title": "Associate Instructor",
        "numberOfdogs": 1
      },{
        "id": 9,
        "fullName": "Cass Torske",
        "title": "Resident",
        "numberOfdogs": 1
      },{
        "id": 10,
        "fullName": "Matt Winzer",
        "title": "Resident",
        "numberOfdogs": 2
      },{
        "id": 11,
        "fullName": "Aaron Goodman",
        "title": "Resident",
        "numberOfdogs": 0
      },{
        "id": 12,
        "fullName": "Michelle Bergquist",
        "title": "Resident",
        "numberOfdogs": 1
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
               message: "No Instructor found!"
           }
       })
  }

  response.json({data: thisResponse})
})



app.listen(process.env.PORT || 3000)
