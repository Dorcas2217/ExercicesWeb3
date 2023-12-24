
const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('Usage :');
  console.log('GET: node mongo.js [password]');
  console.log('POST: node monge.js [password] [name] [number]');
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://dorcas:${password}@cluster0.auznpxq.mongodb.net/?retryWrites=true&w=majority`

  mongoose.set('strictQuery',false)
  
  async function main() {
    try {
      await mongoose.connect(url);
  
      const phoneBookSchema = new mongoose.Schema({
        nom: String,
        number: String,
      });
  
      const Phonebook = mongoose.model('Phonebook', phoneBookSchema);
  
    if (process.argv.length === 3) {
    
    /**
     * Opération de recherche 
     * node mongo.js password 
     */
    Phonebook.find({}).then(result => {
      console.log("phoneBook : ");
      result.forEach(phone => {
        console.log(`${phone.nom} ${phone.number}`);
      })
      mongoose.connection.close();
      process.exit(0);
    });
  }

  /**
     * Opération d'ajout 
     * node mongo.js password name phoneNumber
  */

  if (process.argv.length === 5) {
    const nom = process.argv[3];
    const number = process.argv[4];

    const phonebookMember = new Phonebook({
      nom: nom,
      number: number,
    });

    await phonebookMember.save();
    console.log(`Added ${nom} with number ${number} to phonebook`);
  }
} catch (err) {
  console.error('Error:', err);
} finally {
  mongoose.connection.close();
}
}

main();
