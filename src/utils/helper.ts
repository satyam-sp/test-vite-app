import dayjs from 'dayjs';

function getRandomDate(start: string, end: string): string {
  const startDate = dayjs(start);
  const endDate = dayjs(end);

  const randomTimestamp = Math.floor(
    Math.random() * (endDate.valueOf() - startDate.valueOf()) + startDate.valueOf()
  );
  return dayjs(randomTimestamp).format('YYYY-MM-DD HH:mm');
}

// Example usage
const randomDate = getRandomDate('2020-01-01', '2025-12-31');
export { randomDate }
