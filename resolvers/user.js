const { profiles } = require("../data/db")

module.exports = {
  salary(user) {
    return user.salary_real
  },
  profile(user) {
    return profiles.filter(p => p.id == user.profile_id)[0]
  }
}