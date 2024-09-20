$('#send').click(function () {
   let data = {
      email: $('#email').val()
   };

   axios.post('http://localhost:3000/save-email', data)

   .then(res=>{
      alert('Thank you for subscribe.');
      $('#email').val('');
      
   })
})