const { newId, users } = require("../../data/db")

const userIndex = (filter) => {
  const { id, email } = filter
  if (id) {
    return users.findIndex(u => u.id == id)
  } else if (email) {
    return users.findIndex(u => u.email == email)
  } else -1
}

module.exports = {

  newUser: (_, { data }) => {
    const existingEmail = users.some(u => u.email == data.email)

    if (existingEmail) {
      throw new Error("Email already registred.")
    }

    const user = {
      id: newId(),
      ...data,
      profile_id: 1,
      status: "ACTIVE",
    }
    users.push(user)
    return user
  },

  deleteUser: (_, { filter }) => {
    const i = userIndex(filter)

    if (i < 0) return null
    const exclude = users.splice(i, 1)
    return exclude ? exclude[0] : null
  },

  alterUser: (_, { filter, input }) => {
    const i = userIndex(filter)

    if (i < 0) return null

    const user = {
      ...users[i],
      ...input
    }

    users[i] = user

    return user
  }
}