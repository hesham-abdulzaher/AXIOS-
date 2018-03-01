

function showEditForm(name, email, id){
  secondLayer.style.display = 'block'
  deleteMsg.style.display = 'none'
  editForm.style.display = 'block'
  var nameInp = document.getElementById('inpForEditName')
  var emailInp = document.getElementById('inpForEditEmail')
  nameInp.value = name
  emailInp.value = email
  // addEventListener => finalDelete
  document.querySelectorAll('.saveChange').forEach(function(button){
    button.addEventListener('click', function(clickEvent){
      editUser(id)
      return id
    })
  })
}


// PUT request
function editUser(id){
  var nameInp = document.getElementById('inpForEditName').value
  var emailInp = document.getElementById('inpForEditEmail').value
  var allChanges = {
    name: nameInp,
    email: emailInp
  }

  axios.put(`https://bala7a-api.herokuapp.com/users/update/${id}`, allChanges)
    .then(function (response){
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
    })

  setTimeout(function(){
    location.reload();
  }, 1000)
}
