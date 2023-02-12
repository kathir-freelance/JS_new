// pr=fetch('http://localhost:3000/users');

//  pr.then((response) => response.json())
//   .then((data) => console.log(data));


// const fname = document.getElementById("fname").value;
//     const lname = document.getElementById("lname").value;
//     const username = document.getElementById("username").value;
//     const email = document.getElementById("email").value;

const data = { username: 'example' };
fetch('http://localhost:3000/employees', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });