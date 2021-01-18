import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://free-nba.p.rapidapi.com/players',
  params: { page: '0', per_page: '25' },
  headers: {
    'x-rapidapi-key': '82525bb0afmsh4e9d274028f4857p1ecaafjsn99e87f447a64',
    'x-rapidapi-host': 'free-nba.p.rapidapi.com',
  },
}

axios
  .request(options)
  .then(function(response) {
    console.log(response.data)
  })
  .catch(function(error) {
    console.error(error)
  })

export const search = searchItem => options(`search/${searchItem}`)
