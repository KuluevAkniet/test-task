const axios = require('axios')

let url = 'https://rickandmortyapi.com/api/character'

axios.get(url)
  .then(res => {
    console.log(res.data)
  })
  .catch(error => {
    console.log(error)
})