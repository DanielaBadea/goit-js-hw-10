import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_fbVT6CYJZWrSepdfxLbpNT6V123uyOwTPLXA5g2dxZkmmgASL8S1Mc1mmLssxAt5";
const breedSelect = document.querySelector('.breed-select');
export function fetchBreeds() {
  return axios.get("https://api.thecatapi.com/v1/breeds")
    .then(response => response.data)
    .catch(error => {
      console.error(`Error fetching cat breeds`, error);
    });
}
export function fetchCatByBreed(breedId) {
  return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      console.error(`Error fetching cat information for breed ${breedId}`, error);
    });
}