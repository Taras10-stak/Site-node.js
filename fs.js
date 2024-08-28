const { log } = require('console');
const fs = require('fs');



const txt = 'Hello world';

fs.writeFile('1.txt', txt, (err) => {
   if (err) {
      console.log(err);
   }
   console.log('file has been written');
})





/*

//асинхронне читання файлу

fs.readFile('1.txt', 'utf8', (err, data) => {
   if (err) {
      console.log(err);
   }
   console.log(data);
})

try {
   const data = fs.readFileSync('1.txt', 'utf8');
   console.log(data);
} catch (err) {
   console.log(err);
}


const user = {name: 'Alex', age: 20};

fs.appendFile('1.txt', JSON.stringify(user), (err) => {
   if (err) {
      console.log(err);
   }
   console.log(`New user appended`);
});



fs.unlink('1.txt', (err) => {
   if (err) {
      console.log(err);
   }
   console.log('File has been deleted');
});
*/


