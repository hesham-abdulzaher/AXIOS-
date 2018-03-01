// GET request
axios.get('https://bala7a-api.herokuapp.com/users/all')
  .then(function (response) {
    console.log(response);
    var data = response.data
    for(var i = 0; i < data.length; i++){
      var name = data[i].name
      var email = data[i].email
      var id = data[i]._id
      CreatAllElmForUser(name, email, id);
    }
    addEventListener => deleteBtn
    document.querySelectorAll('.deleteBtn').forEach(function(deleteBtn){
      deleteBtn.addEventListener('click', function(e){
        var id = e.target.getAttribute('data-id')
        showDeleteMsg(id)
        return id;
      })
    })
    // addEventListener => editBtn
    document.querySelectorAll('.editBtn').forEach(function(editBtn){
      editBtn.addEventListener('click', function(e){
        var id = e.target.getAttribute('data-id')
        var name = e.target.getAttribute('data-name')
        var email = e.target.getAttribute('data-email')
        var target = e.target
        showEditForm(name, email, id)
        return id;
      })
    })

  })
  .catch(function (error) {
    console.log(error);
  });
