require('dotenv').config()
const express = require('express')
const app = express()
const  Phonebook = require('./models/phonebook') 
const PORT = process.env.PORT

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.get("/phonebooks", async (req, res) => {
  const response = await Phonebook.find({});
  res.json(response);
});

app.post("/phonebooks/add", async (req, res) => {
  const body = req.body

  if( !body.nom || !body.number){
    response.status(400).json({ error: 'name and number are required' })
  }

  const newPhoneMember = new Phonebook({
    nom: body.nom,
    number: body.number
  })

  newPhoneMember.save().then(saved => {
    res.json(saved)
  })

  app.get('phonebooks/:id', (request, response) => {
    Phonebook.findById(request.params.id)
      .then(phone => { 
        if (phone) {
          response.json(phone)
        } else {
          response.status(404).end()
        }
      })
      .catch(error => {
        console.log(error)
        response.status(400).send({ error: 'malformatted id' })
      })
  })

})