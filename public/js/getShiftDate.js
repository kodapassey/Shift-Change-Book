// functions to get the date of what is clicked on calendar

const dateTable = document.querySelector('#date');
const findShifts = document.querySelector('#findShifts');
const subNavConfirmBtn = document.querySelector('#subNavConfirmBtn');

function formatDateInput(dateInput) {
  const date = dateInput ? new Date(dateInput) : new Date();
  const year = date.getUTCFullYear();
  const month = `0${date.getUTCMonth() + 1}`.slice(-2);
  const day = `0${date.getUTCDate()}`.slice(-2);
  return `${year}-${month}-${day}`;
}

subNavConfirmBtn.addEventListener('click', () => {
  const dateInput = dateTable.value;
  const formattedDate = formatDateInput(dateInput);

  // how i have to format it so the url can be different regardless of which club tab you are using
  const currentUrl = new URL(window.location.href);
  const currentDate = currentUrl.pathname.split('/').pop();
  const newUrl = `${currentUrl.origin}${currentUrl.pathname.replace(currentDate, formattedDate)}${currentUrl.search}`;
  window.location.href = `${newUrl}`;
});