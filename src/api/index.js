import axios from 'axios'

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlaceData = async (ne, sw) => {
  try {
    const {
      data: { data },
    } = await axios.get(url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        lang: 'zh_CN',
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '2e7235e10amshbbd1aa703622d9ap1dc8a3jsnda8dbd06bf17',
      },
    })
    return data
  } catch (error) {
    console.log(error)
  }
}
