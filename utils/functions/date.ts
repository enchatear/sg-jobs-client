export const humanizeDateValue = (date: number): string =>
  `${date > 9 ? '' : '0'}${date}`;

export const formatDate = (date: string): string => {
  const dateObj = new Date(date);
  const seconds = dateObj.getSeconds();
  const minutes = dateObj.getMinutes();
  const hours = dateObj.getHours();
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  return `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${year} ${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const getDate = (date: string): Date => {
  const [day, month, year] = date.split(' ')[0].split('.');
  const [hour, minute, second] = date.split(' ')[1].split(':');

  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second)
  );
};

export const getUTCTime = (date: Date): number =>
  new Date(date.toUTCString()).getTime();

export const isValidDate = (date: Date): boolean =>
  date instanceof Date && !Number.isNaN(date);
