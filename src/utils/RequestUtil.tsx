import moment from 'moment';

export const CRYPTO_URL = 'https://api.nomics.com/v1/';
export const API_KEY = '?key=e8b4a378ae6cd602c7f30b8ae9d2cd90cb939d63';

export const formatDate = date => {
  return moment(date).format('MMM,DD/YYYY');
};
