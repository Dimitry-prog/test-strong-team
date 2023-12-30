export const formattedQuery = <T extends object>(query: T): string => {
  return Object.entries(query)
    .map(([key, value]) => {
      if (value) {
        return `&_${key}=${value}`;
      }
    })
    .join('')
    .replace('_q', 'q')
    .replace('&', '?');
};
