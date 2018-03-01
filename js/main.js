// Creat All Element I Need
function CreatAllElmForUser(name, email, id){
  var container = document.getElementById('container')
  // Creat Cards
  var card = document.createElement('div');
  card.classList = 'card';
  container.appendChild(card);
  // End Cards

  // Creat and Handle His Children
  // #1 Name
  var nameSection = document.createElement('section'); // Section baba
  nameSection.classList = 'nameSection';
  card.appendChild(nameSection);

  var nameLabel = document.createElement('label'); // label for name :
  nameSection.appendChild(nameLabel);
  nameLabel.innerHTML = 'Name : '

  var namePlace = document.createElement('div'); // div for name
  namePlace.classList = 'namePlace';
  nameSection.appendChild(namePlace);
  namePlace.innerHTML = name


  // #2 Email
  var emailSection = document.createElement('section'); // Section baba
  emailSection.classList = 'emailSection';
  card.appendChild(emailSection);

  var emailLabel = document.createElement('label'); // label for email :
  emailSection.appendChild(emailLabel);
  emailLabel.innerHTML = 'Email : '

  var emailPlace = document.createElement('div'); // div for email
  emailPlace.classList = 'emailPlace';
  emailSection.appendChild(emailPlace);
  emailPlace.innerHTML = email
  // End Sections inside cards for show name & Email

  // Delete button
  var deleteButton = document.createElement('button');
  deleteButton.classList = 'deleteBtn';
  card.appendChild(deleteButton);
  deleteButton.innerHTML = 'Delete'
  deleteButton.setAttribute('data-id', id)

  // Edit button
  var editButton = document.createElement('button');
  editButton.classList = 'editBtn';
  card.appendChild(editButton);
  editButton.innerHTML = 'Edit'
  editButton.setAttribute('data-id', id)
  editButton.setAttribute('data-name', name)
  editButton.setAttribute('data-email', email)


}

// When user click on delete button
var secondLayer = document.getElementById('s-layer')
var deleteMsg = document.getElementById('deleteMsg')


// FadeOut second layer when click on cancel button
document.querySelectorAll('.cancel').forEach(function(cancelBtn){
  cancelBtn.addEventListener('click', function(){
    secondLayer.style.display = 'none'
  })
})
