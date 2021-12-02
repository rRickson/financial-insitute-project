import axios from 'axios';
import { API_KEY, CRYPTO_URL } from '../utils/RequestUtil';

export class CurrenciesService {
  public static loadCurrencies = async (): Promise<any> => {
    console.log(
      `${CRYPTO_URL}currencies/ticker${API_KEY}&interval=1d,30d&per-page=10`,
    );
    axios
      .get(
        `${CRYPTO_URL}currencies/ticker${API_KEY}&interval=1d,30d&per-page=10`,
      )
      .then((response: any) => {
        return response;
      })
      .catch(_error => {
        console.log(_error);
        return { status: 400, name: 'Error on get currencies' };
      });
  };
}
