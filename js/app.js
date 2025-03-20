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

    
//Modal

const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");
    
  modalCall.on("click", function(event) {
    event.preventDefault();
        
    let $this = $(this);
    let modalId = $this.data('modal');
        
    $(modalId).addClass('show');
    $("body").addClass('no-scroll');
        
    setTimeout(function(){
        $(modalId).find(".modal__dialog").css({
            transform: "scale(1)"
        });
    }, 300);
  });
    
  modalClose.on("click", function(event) {
    event.preventDefault();
        
    let $this = $(this);
    let modalParent = $this.parents('.modal');
        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });
        
    setTimeout(function() {
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');          
    }, 300);          
  });
    
  $(".modal").on("click", function(event) {
    let $this = $(this);
       $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });
        
   setTimeout(function() { 
       $this.removeClass('show');
       $("body").removeClass('no-scroll');
    }, 300);   
  });
    
  $(".modal__dialog").on("click", function(event) {
    event.stopPropagation(); 
  });

    
