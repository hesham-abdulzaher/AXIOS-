// Validate Email
function validateEmail(email){
  var syntax = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var testEmail = syntax.test(email)
  if(testEmail == false){
    return false;
  }else{
    return true;
  }
}
// Validate Username && Password
function validateUserAndPass(name, pass){
  if(name.length < 6 || pass.length < 6){
    return false;
  }else{
    return true;
  }
}


// POST
function postData(){
  var form = document.getElementById('form')
  var nameVal = document.getElementById('name').value
  var emailVal = document.getElementById('email').value
  var passVal = document.getElementById('pass').value
  console.log('POST');
  // if any input has syntax isn't good, please stop this function and fade warning section
  if(validateUserAndPass(nameVal, passVal) == false || validateEmail(emailVal) == false){
    alert('nooooooooo')
    return;
  }else{ // if all of syntax is good fade Done section
    axios.post('https://bala7a-api.herokuapp.com/users/new', {
      name: nameVal,
      email: emailVal,
    	password: passVal
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    setTimeout(function(){
      form.style.display = 'none'
      location.replace('data.html')
    }, 1000)
  }

}
