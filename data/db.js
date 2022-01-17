
let id = 1
const newId = () => {
  return id++
}

const users = [
  {
    id: newId(),
    name: "silva",
    email: "silva@silva",
    salary_real: 1444,
    profile_id: 1,
    status: "ACTIVE"
  },
  {
    id: newId(),
    name: "rafa",
    email: "rafa@rafa",
    profile_id: 1,
    status: "BLOCKED"
  },
  {
    id: newId(),
    name: "Daniela",
    email: "daniweb@gmail.com",
    profile_id: 2,
    status: "INACTIVE"
  }
]

const profiles = [
  {
    id: 1,
    name: 'comum'
  },
  {
    id: 2,
    name: 'admin'
  }
]

module.exports = {
  users,
  profiles,
  newId
}