const { users } = require('../../data/db')

module.exports = {
  users: () => users,
  user: (_, { id }) => {
    const selected = users.filter(u => u.id == id)
    return selected ? selected[0] : null
  },
  loggedUser() {
    const user = {
      name: "bob",
      age: 12,
      id: "123",
      email: "anadaweb@gmail.com",
      salary_real: 12345.90
    }
    return user
  },
}