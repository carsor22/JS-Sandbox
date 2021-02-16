document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

//get local textfile data

function getText() {
  fetch('test.txt')
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    });
}

//get local json data

function getJson() {
  fetch('posts.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let output = '';
      data.forEach(function (post) {
        output += `<li> ${post.title} </li>`;
      });
      document.getElementById('output').innerHTML = output;
    });
}

//get external api data

function getExternal() {
  fetch('https://api.github.com/users')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let output = '';
      data.forEach(function (user) {
        output += `<li> ${user.login} </li>`;
      });
      document.getElementById('output').innerHTML = output;
    });
}

