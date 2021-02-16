//use Ajax to work with external API

//event listener for button

document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  //grab form data
  const number = document.querySelector('input[type="number"]').value;

  //ajax request

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      //output api into DOM

      let output = '';

      if (response.type === 'success') {
        //loop through joke array
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}
