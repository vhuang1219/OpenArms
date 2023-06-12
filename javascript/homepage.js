// Example JavaScript code for date scrolling and highlighting the current day
window.addEventListener('DOMContentLoaded', (event) => {
  const calendarContainer = document.querySelector('.calendar');
  const calendarItems = document.querySelectorAll('.calendar-item');

  // Scroll the calendar to show the current day
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay() - 1; // Adjust index for Sunday starting at 0
  const currentDayItem = calendarItems[currentDayIndex];
  if (currentDayItem) {
    calendarContainer.scrollLeft = currentDayItem.offsetLeft;
  }

  // Highlight the current day
  currentDayItem.classList.add('current-day');
});
