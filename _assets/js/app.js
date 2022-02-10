// Add your custom javascript here
const list = document.querySelectorAll('.list');

function accordion(e){
    e.stopPropagation();
    if(this.classList.contains('active')){
        this.classList.remove('active');
    }
    else if(this.parentElement.parentElement.classList.contains('active')){
        this.classList.add('active');
    }
    else{
        for(i=0; i < list.length; i++){
            list[i].classList.remove('active');
        }
        this.classList.add('active');
    }
}
for(i = 0; i < list.length; i++ ){
    list[i].addEventListener('click', accordion);
}
jQuery('.active').parent().parent().parent().parent().addClass('active');
jQuery('.active').parent().parent().addClass('active');


$(document).ready(function (e) {

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
var topButton= $("#backtotop");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.css('display','block');
  } else {
    topButton.css('display','none');
  }
}


  // When the user clicks on the button, scroll to the top of the document
  topButton.click(function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

});

// Form-group-outter is the parent question, form-group is a subquestion that can be hidden
$('.form-group-outer').each(function() {

  const $inp = $(this).find(":radio, :checkbox");

  $inp.on("change", function() {
    $inp.each(function() {
      $(this).closest(".form-group").find(".sub-question").toggleClass("is-hidden", !this.checked);
    });
  });

});

// Text pop-up displays below once selecting radio button for aoc-no
$(function() {
  $("input[name='aoc']").click(function() {
    if ($("#agency-communications-no").is(":checked")) {
      $("#dialog_content").show();
    } else {
      $("#dialog_content").hide();
    }
  });
});

// Checkbox followup if software application, author, or infrastructure are clicked
$(function() { 
  $("input[name='software']").click(function() { 
    if ($("#check-software-application, #check-software-author, #check-software-infrastructure").is(":checked")) {
      $("#software-followup").show();
    } else {
      $("#software-followup").hide();
    }
  });
});

// Checkbox followup if hardware server checkbox is clicked
$(function() { 
  $("input[name='hardware']").click(function() { 
    if ($("#check-hardware-server").is(":checked")) {
      $("#server-followup").show();
    } else {
      $("#server-followup").hide();
    }
  });
});