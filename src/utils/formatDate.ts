import {format} from 'date-fns';

export default function formatDate(date: Date) {
  const formattedDate = format(date, 'dd/MM/yyyy');

  return formattedDate;
}
