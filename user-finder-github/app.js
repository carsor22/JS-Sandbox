//init Github class

const github = new Github();

// search input

const searchUser = document.getElementById('searchUser');

// search input event listener

searchUser.addEventListener('keyup', (e) => {
  //get text input
  userText = e.target.value;

  if (userText !== '') {
    //make http call to github
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        //show alert 



      } else {
        //show profile


      }
    });
  } else {
    //clear profile 


    
  }
});
