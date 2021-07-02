

let currentUser


document.addEventListener("DOMContentLoaded", () => {
  Api.fetchBooks()
  getCurrentUser(5)
});

const getCurrentUser = (id) => {
  fetch(" http://localhost:3000/users/" + id)
    .then(resp => resp.json())
    .then(user => {
      currentUser = new User(user.id, user.username)
      return currentUser
  })
}
