
import {Status} from './Status-ViewModel';

export interface Project {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  statuses: Status[];
  description: string;
}
