const shopSwiper = new Swiper('.information-swiper', { 
loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
});

const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
      datasets: [{
        label: '# of votes',
        data: [38, 44, 50, 51, 54, 56],
        borderColor: 'rgb(224, 30, 46)',
        borderWidth: 2
      }]
    },
      options: {
        scales: {
         y: {
          min: 30,
          max: 60,
          ticks: {
            stepSize: 5
          }
        }
      }
    }
  });
