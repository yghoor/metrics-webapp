const filterList = (list, filterOption) => {
  const totalRevenues = [];
  list.forEach((year) => {
    const date = Object.keys(year)[0];
    const revenues = year[date];
    const total = Object.values(revenues).reduce((a, b) => a + b);
    totalRevenues.push([date, total]);
  });

  switch (filterOption) {
    case 'revenueAsc':
    {
      const sortedList = [];
      totalRevenues.sort((a, b) => a[1] - b[1]);
      totalRevenues.forEach((sortedYear) => {
        list.forEach((year) => {
          if (sortedYear[0] === Object.keys(year)[0]) {
            sortedList.push(year);
          }
        });
      });
      return sortedList;
    }
    case 'revenueDesc':
    {
      const sortedList = [];
      totalRevenues.sort((a, b) => b[1] - a[1]);
      totalRevenues.forEach((sortedYear) => {
        list.forEach((year) => {
          if (sortedYear[0] === Object.keys(year)[0]) {
            sortedList.push(year);
          }
        });
      });
      return sortedList;
    }
    default:
      return list;
  }
};

export default filterList;
