import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {

    try {
        const { data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'df9f486931mshf8fb2abd9096b61p123efbjsn96437a6a9a64'
          }
        });
        /*console.log('Data');
        console.log(data);*/
        return data;
    } catch(error) {
        console.log(error);
    }
}