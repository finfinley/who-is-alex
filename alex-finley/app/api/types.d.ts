import { AxiosResponse } from 'axios';
import { components } from './schema';

export type StoredArchive = components['schemas']['StoredArchive'];
export type StoredArchivesResponse = AxiosResponse<StoredArchive[]>;
