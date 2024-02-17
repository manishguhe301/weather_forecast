import { MONTHS, DAYS } from './DateConstants';

const date = new Date();

export const getWeekDays = () => {
  const dayInAWeek = date.getDay();
  const days = [...DAYS.slice(dayInAWeek), ...DAYS.slice(0, dayInAWeek)];
  return days;
};

export const getDayMonthFromDate = () => {
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getUTCDate();
  return `${day} ${month}`;
};

export const transformDateFormat = () => {
  const month = date.toLocaleString('en-US', { month: '2-digit' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  const time = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });

  return `${year}-${month}-${day} ${time}`;
};

export const getUTCTime = () => {
  return date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
    timeZone: 'UTC',
  });
};
