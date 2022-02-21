function range1() {
  // вывести текущее значение на страницу
  let sliderSum = document.querySelector('.slider-sum');
  let p = document.querySelector('.output_sum');
  p.innerHTML = sliderSum.value + ' &#8381;';

  // закрасить прогресс
  let maxVal = document.getElementById("slider-sum").getAttribute("max");
  let minVal = document.getElementById("slider-sum").getAttribute("min");

  let curLength = maxVal - minVal;

  let percentage = Math.round(((sliderSum.value / curLength) * 100) - 1);
  if (percentage >= 69) {
    percentage--
  }

  // console.log(percentage);
  sliderSum.style.background = 'linear-gradient(to right, #4CAF50 0%, #4CAF50 ' + percentage + '%, lightgray ' + percentage + '%, lightgray 100%)';
}

function range2() {
  let sliderMonth = document.querySelector('.slider-month');
  let p = document.querySelector('.output_month');
  p.innerHTML = sliderMonth.value + ' месяцев';

  if (sliderMonth.value <= 4) {
    p.innerHTML = sliderMonth.value + ' месяца';
  }

  let maxVal = document.getElementById("slider-month").getAttribute("max");
  let minVal = document.getElementById("slider-month").getAttribute("min");

  let curLength = maxVal - minVal;

  let percentage = Math.round(((sliderMonth.value / curLength) * 100) - 20);

  // console.log(percentage);
  sliderMonth.style.background = 'linear-gradient(to right, #4CAF50 0%, #4CAF50 ' + percentage + '%, lightgray ' + percentage + '%, lightgray 100%)';
}

// стилизация кнопок

function toggleLeft() {
  document.querySelector('.button_payment-left').classList.add('toggle-left');
  document.querySelector('.button_payment-right').classList.remove('toggle-right');
}

function toggleRight() {
  document.querySelector('.button_payment-right').classList.add('toggle-right');
  document.querySelector('.button_payment-left').classList.remove('toggle-left');
}