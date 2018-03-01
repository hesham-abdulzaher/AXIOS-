// This to show delete MSG and addEventListener => finalDelete
function showDeleteMsg(id){
  secondLayer.style.display = 'block'
  editForm.style.display = 'none'
  deleteMsg.style.display = 'block'
  // addEventListener => finalDelete
  document.querySelectorAll('.finalDelete').forEach(function(button){
    button.addEventListener('click', function(e){
      deleteUser(id)
      return id
    })
  })
  return id;
}




// DELETE request
function deleteUser(id){
  axios.delete('https://bala7a-api.herokuapp.com/users/delete/' + id)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    setTimeout(function(){
      location.reload();
    }, 1000)
}
