function monthToIndex(month) {
  const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const index = monthNames.indexOf(month);
  if (index === -1) {
    throw new Error("無效的月份名稱。");
  }

  return index + 1;
}

const month = "October";
const monthIndex = monthToIndex(month);
console.log(monthIndex); 
