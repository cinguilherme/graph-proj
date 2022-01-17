const { profiles } = require('../../data/db')

module.exports = {

  profiles: () => profiles,
  profile: (_, { id }) => {
    return profiles.filter(p => p.id == id)[0]
  },
}