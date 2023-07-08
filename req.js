import axios from "axios"
const API_KEY = "live_czFOMz893lGir5jqoOf09InRKzVrcCEDhLirjKie73D2Vy2lqbX1YLzgRae3VRXA"
const API_ADRESS="https://api.thedogapi.com/v1"
 
export function getbreeds(limit = 5) {
    return axios.get(`${API_ADRESS}/breeds?limit=${limit}`,{
        headers:{
            "x-api-key":API_KEY
        }
    })
}

export function getdogs(limit = 15) {
    return axios.get(`${API_ADRESS}/images/search?limit=${limit}`,{
        headers:{
            "x-api-key":API_KEY
        }
    })
}

export function getdogsByBreed(breedId, limit = 15) {
    return axios.get(`${API_ADRESS}/images/search?limit=${limit}&breed_ids=${breedId}`, {
      headers: {
        "x-api-key": API_KEY,
      },
    });
  }