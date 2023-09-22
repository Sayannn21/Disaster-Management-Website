



const openBtn = document.getElementById('openBtn');
const openBtn2 = document.getElementById('openBtn2');
const openBtn3 = document.getElementById('openBtn3');
const openBtn4 = document.getElementById('openBtn4');

const overlay = document.getElementById('overlay');

const popup = document.getElementById('popup');
const popup2 = document.getElementById('popup2');
const popup3 = document.getElementById('popup3');

const closeBtn = document.getElementById('closeBtn');
const closeBtn2 = document.getElementById('closeBtn2');
const closeBtn3 = document.getElementById('closeBtn3');

const form = document.getElementById('myForm');
const dropdown = document.getElementById('myDropdown');


const form2 = document.getElementById('myForm2');
const dropdown2 = document.getElementById('myDropdown2');




openBtn.addEventListener('click', () => {
overlay.style.display = 'block';
popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
overlay.style.display = 'none';
popup.style.display = 'none';
});

    openBtn2.addEventListener('click', () => {
    overlay.style.display = 'block';
    popup2.style.display = 'block';
    });
    
    closeBtn2.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup2.style.display = 'none';
    });

    openBtn3.addEventListener('click', () => {
      overlay.style.display = 'block';
      popup3.style.display = 'block';
      });
      
      closeBtn3.addEventListener('click', () => {
      overlay.style.display = 'none';
      popup3.style.display = 'none';
      });


//Post request form 

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission
  
  
  const selectedValue = dropdown.value;
  
  const formData = new URLSearchParams(new FormData(form)).toString(); // Convert form data to URL-encoded string
  const urlSearchParams = new URLSearchParams(formData);
  a = urlSearchParams.get('agency');
  b = urlSearchParams.get('rid');
  // Make an AJAX request to your Express.js server
  const response = await fetch(`http://localhost:3000/${selectedValue}`, {
    method: 'POST',
    headers: {
   'Content-Type': 'application/x-www-form-urlencoded', // Set the content type to URL-encoded
    },
    body: formData,

  });

  const result = await response.json();

  if (result.alreadyExists) {
    alert('Data already exists in the database.');
  } else {
    alert('Data updated successfully.');
    overlay.style.display = 'none';
    popup.style.display = 'none';}

});




form2.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission
  
  const selectedValue = dropdown2.value;
  
  const form1Data = new URLSearchParams(new FormData(form2)).toString(); // Convert form data to URL-encoded string
  // Make an AJAX request to your Express.js server
  console.log(form1Data);
  const response = await fetch(`http://localhost:3000/${selectedValue}`, {
    method: 'PUT',
    headers: {
   'Content-Type': 'application/x-www-form-urlencoded', // Set the content type to URL-encoded
    },
    body: form1Data,

  });

  const result = await response.json();

  if (result.alreadyExists) {
    alert('Data updated successfully');
  } else {
    alert('Data not found');
  }
    overlay.style.display = 'none';
    popup3.style.display = 'none';
  
});

//const logoutButton = document.getElementById('logoutBtn');

// logoutButton.addEventListener('click', () => {
// window.location.replace('agentlogin.html');
// });

// Get request form 



const logoutButton = document.getElementById('logoutBtn');

logoutButton.addEventListener('click', async() => {
  const response =  await fetch('http://localhost:3000/logoutagent', { method: 'GET',
  headers: {
    'Content-Type': 'text/css', // Set the content type to URL-encoded
     },
})
  const result = await response.json();

  if (result.alreadyExists) {
    window.location.replace("agentlogin.html");
  }
    
});