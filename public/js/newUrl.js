const createNewUrl = async (event) => {
    event.preventDefault();
  
    
    const description = document.querySelector('#UrlBtn').value.trim();

    if (description) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/link', {
        method: 'POST',
        body: JSON.stringify({ description}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('#newUrlBtn')
  .addEventListener('click', createNewUrl);