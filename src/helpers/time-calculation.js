export function timeCalculation(publishedAt) {
  if (!publishedAt) {
    return null;
  }

  const now = new Date();
  const publishedDate = new Date(publishedAt);
  const differenceInSeconds = Math.floor((now - publishedDate) / 1000);

  const intervals = [
    { label: 'second', value: 60 },
    { label: 'minute', value: 60 },
    { label: 'hour', value: 24 },
    { label: 'day', value: 30 },
    { label: 'month', value: 12 },
    { label: 'year', value: Infinity },
  ];

  let intervalIndex = 0;
  let value = differenceInSeconds;

  while (value >= intervals[intervalIndex].value) {
    value /= intervals[intervalIndex].value;
    intervalIndex++;
  }

  value = Math.floor(value);
  const unit = intervals[intervalIndex].label;

  if (value === 1) {
    return `${value} ${unit} ago`;
  } else {
    return `${value} ${unit}s ago`;
  }
}
