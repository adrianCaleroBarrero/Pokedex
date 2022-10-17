import axios from 'axios';
import { iData, iOnePokemon } from '../interfaces/interfaces';

export class HttpPokemon {
  getAllPokemons(url: string): Promise<iData> {
    return axios.get(url).then((resp) => resp.data);
  }

  getOnePokemon(url: string): Promise<iOnePokemon> {
    return axios
      .get(url)
      .then((resp) => resp.data)
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  getNextPage(next: string): Promise<iData> {
    return axios.get(next).then((resp) => resp.data);
  }

  getPreviousPage(previous: string): Promise<iData> {
    return axios.get(previous).then((resp) => resp.data);
  }
}
