import axios from 'axios';
import { StoredArchivesResponse } from './types';

export const archivesFetcher = (url: string) =>
  axios.get(`${url}/archives`).then((res: StoredArchivesResponse) => res.data);
