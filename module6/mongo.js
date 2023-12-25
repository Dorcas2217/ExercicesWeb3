// Only for 3.12 

const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('Operations :  ');
  console.log('1 - GET: " node mongo.js [password] "');
  console.log('2 - POST: " node monge.js [password] [name] [number] "');
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://dorcas:${password}@cluster0.auznpxq.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);

async function main() {
  let connection;
  try {
    connection = await mongoose.connect(url);
    console.log('connected');

    const phoneBookSchema = new mongoose.Schema({
      nom: String,
      number: String,
    });

    const Phonebook = mongoose.model('Phonebook', phoneBookSchema);

    /**
     * Opération de recherche
     * node mongo.js password
     */

    if (process.argv.length === 3) {
      const result = await Phonebook.find({});
      console.log('phoneBook : ');
      result.forEach((phone) => {
        console.log(`${phone.nom} ${phone.number}`);
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
    if (connection) {
      await connection.disconnect();
      console.log('disconnected');
    }
  }
}

main();
