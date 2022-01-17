const { profiles, newId } = require('../../data/db')

const profileIndex = (filter) => {
  const { id, name } = filter
  if (id) {
    return profiles.findIndex(u => u.id == id)
  } else if (email) {
    return profiles.findIndex(u => u.name == name)
  } else -1
}

module.exports = {

  newProfile(_, { data }) {
    const prof = {
      id: newId(),
      ...data
    }
    profiles.push(prof)
    return prof
  },

  alterProfile(_, { filter, data }) {
    const i = profileIndex(filter)
    const prof = {
      ...profiles[i],
      ...data,
    }
    profiles[i] = prof
    return prof
  },

  deleteProfile(_, { filter }) {
    const i = profileIndex(filter)
    const removed = profiles.splice(i, 1)
    return removed ? removed[0] : null
  }
}