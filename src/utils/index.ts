export const dateFormat = (e: string) => {
  const dates = new Date(e);
  return `${dates.getDate()}/${dates.getMonth()}/${dates.getFullYear()}`;
};
