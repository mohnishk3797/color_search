export default (apiUrl) => ({
  getColors() {
    return fetch(`${apiUrl}/colornames.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
});
