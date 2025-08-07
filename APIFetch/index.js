document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('user-container');

  fetch('https://686503325b5d8d03397f4dbe.mockapi.io/api/v1/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }
      return response.json();
    })
    .then(users => {
      if (!users.length) {
        container.innerHTML = '<p>No users found.</p>';
        return;
      }
      users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
          <h2>${user.name}</h2>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Created At:</strong> ${new Date(user.createdAt).toLocaleString()}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      container.innerHTML = `<p class="error">Error: ${err.message}</p>`;
      console.error(err);
    });
});
