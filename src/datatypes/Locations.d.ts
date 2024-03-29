import { Info } from 'datatypes/Info';
import { LocationData } from './Location';

export type LocationsData = {
  locations: {
    info: Info;
    results: {
      id: number;
      name: string;
      type: string;
    }[];
  };
};
