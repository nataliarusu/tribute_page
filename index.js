const container = document.querySelector('.time');
const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }
const today=new Date();
const month = months[today.getMonth()];
const timeDisplayEl = document.createElement('span');
timeDisplayEl.innerHTML= `${today.getDate()} ${month} ${today.getFullYear()}`;
timeDisplayEl.style='color: red';
container.append(timeDisplayEl);