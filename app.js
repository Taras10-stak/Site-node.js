const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
}) 
app.get('/pages', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'pages.html'));
}) 
app.get('/services', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'services.html'));
}) 
app.get('/projects', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'projects.html'));
}) 
app.get('/blog', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'blog.html'));
}) 
app.get('/contact', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'contact.html'));
}) 

app.post('/save-email', (req, res) =>{
   const {email} = req.body;
   console.log(email);
   fs.appendFile('users.txt', `$(email)\n`, (err)=>{
      if (err) {
         console.log(err);         
      } else {
         res.send(`Новий емейл збережено`);
      }
   });
});

app.listen(PORT, () => {
   console.log(`Server work on PORT: ${PORT}`);
});


