document.getElementById('formData').addEventListener('submit', async (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const email = document.getElementById('email').value;

   const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
        firstName,
        lastName,
        age,
        email,
    })
   });

   const result = await response.json();
   document.getElementById('response').textContent = `User ${result.data.firstName} has been registered successfully!`
})