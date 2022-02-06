const addDays = require("date-fns/addDays");

const modifyDate = (days) => {
  const newDate = addDays(new Date(22, 07, 2020), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

module.exports = modifyDate;
