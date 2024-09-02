import axios from 'axios'

const empty = []
const APP_URLS = 'https://6686cb5583c983911b03a7f3.mockapi.io/api/dummy-data/masterJenisKonsumsi'

const CConsumption = {
  read: async () => {
      return await axios.get(APP_URLS)
      .then((res) => {
          return res.data
      })
      .catch((err) => {
          if (typeof err.response.data.message !== 'undefined') {
              alert(err.response.data.message)
          }
          return empty
      })
  }
}

export default CConsumption