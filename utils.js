const convertDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return {
    day,
    month,
    year,
    dateString: `${day}/${month}/${year}`,
  };
};
