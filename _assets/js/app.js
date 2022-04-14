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

// Show div when modify/upload existing JSON is clicked
$(function() {
  $('#json_upload').click(function() {
      $('#json_upload_div').show();
      return false;
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
// add variables
var currentselection = "";
var allexceptionsapplied = false;
var isthishardware = false;
var lightgreenbackground = '';
var lightyellowbackground = '#ffffe0';
var yellow = "#FFFF00";
var capturedInputStep1Question1;
var unique_array = [];
var doineedtoredoStep2 = false;
var remaining_array = [];
var capturedICT = [];
var TempList = "";
var compare_array = [];
var arrayA = [];
var arrayB = [];
var countingICTadd = 0;
var movingnumber = 0;
var count = 0;
var numbering = 1;
var ExceptionCount = 0;
var ExceptionCount1 = 0;
var ElectronicContentCount = 0;
var SoftwareCount = 0;
var HardwareCount = 0;
var OutputHTML = "";
var counter1 = false;
var counter2 = false;
var counter3 = false;
var counter4 = false;
var addICThtml = document.createElement('div');
addICThtml.setAttribute("id", "addICTdiv");


// add ict input javascript
var Step1ICTInputHTML = document.createElement('div');
Step1ICTInputHTML.innerHTML = '<div class="module"><ol class="custom-bullet custom-bullet-b" id="ICTList"></ol></div><br><br><br>';
var countingICTadd = 0;

function addICTInput()
{
	document.getElementById('section-2').appendChild(Step1ICTInputHTML);
	var capturedInput = document.getElementById('capturedICTfield').value;
	var list = document.getElementById('ICTList');
	if(capturedInput.length < 1)
	{
		alert("ICT text field is blank");
		document.getElementById("dynamicInput").style.backgroundColor = lightyellowbackground;
    $('#capturedICTfield').focus();
	}
	else {
	    if(capturedInput.length > 0)
	{
        var iChars = "!@#$%^&*()+=~-[]\\\';,./{}|\":<>?";
        for (var i = 0; i < capturedInput.length; i++) {
        if (iChars.indexOf(capturedInput.charAt(i)) != -1) {
        alert ("The ICT name has special characters. \nThese are not allowed.\n Please remove them and try again.");
        $('#capturedICTfield').focus();
        return false;
            }
        }
	}
		if(unique_array.indexOf(capturedInput) == -1)
		{
			unique_array.push(capturedInput);
      var str = capturedInput.replace(/\s/g, '');
      remaining_array.push(str);
  		var text = capturedInput;
  		var entry = document.createElement('li');
      entry.setAttribute('id','item'+countingICTadd);
  		entry.setAttribute('class', 'ICTListClass');
      text = text + '<br/><button class="usa-button usa-button--secondary" title="Delete '+text+'" onclick="removeName('+countingICTadd+')">Delete</button>';
      entry.innerHTML = text;
      countingICTadd+=1;
      list.appendChild(entry);
			$('#capturedICTfield').val("");
			$('#capturedICTfield').focus();
			document.getElementById("dynamicInput").style.backgroundColor = lightgreenbackground;
		}
		else {
			alert('This item "'+capturedInput+'" exists!');
			document.getElementById("dynamicInput").style.backgroundColor = lightyellowbackground;
      $('#capturedICTfield').val("");
			$('#capturedICTfield').focus();
		}
  }
}

// function to remove Project Name input
function removeName(x){
	var list = document.getElementById('ICTList');
	var item = document.getElementById("item"+x);
	var searchThis = item.innerHTML;
	searchThis = searchThis.substring(0, searchThis.indexOf('<')-1);
	var str = searchThis.replace(/\s/g, '');
	var index = unique_array.indexOf(searchThis);

  list.removeChild(item);
  unique_array.splice(index, 1);
  remaining_array.splice(index, 1);
  // alert(remaining_array);
  compare_array.splice(index, 1);
  alert("Deleted: " + searchThis)
  $('#exception-link-'+str).remove();

  if(unique_array.length < 1)
  {
  document.getElementById("dynamicInput").style.backgroundColor = lightyellowbackground;
  document.getElementById("nav").innerHTML = '<button id="exit" onclick="reloadPage()">Exit</button>';
  }
  // removeNav(searchThis, 'exception');
  $('#capturedICTfield').val("");
  $('#capturedICTfield').focus();
  return;
}

// Save name of ICT product the user entered and display in results
// $(document).ready(function() {
//   $("#add_ict_continue").on("click", function(e) {
//     e.preventDefault();
//     var inputICT = $("#capturedICTfield").val()
//     $("#display_ict_input").html(inputICT)
//     alert("alert!")
//   })
// });

// Copy results text
function CopyToClipboard(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Section 508 Requirements results have been copied to your clipboard!")
  }
}

// Export results to .docx file
function downloadInnerHtml(filename, elId) {
  debugger;
      var elHtml = document.getElementById(elId).innerHTML;
      var link = document.createElement('a');
      link.setAttribute('download', filename);
      
      link.setAttribute('href', 'data:' + 'text/doc' + ';charset=utf-8,' + encodeURIComponent(elHtml));
      link.click(); 
}
var fileName =  'Section508_Requirements_ART_results.docx'; // You can use the .txt extension if you want

// Jquery execute a function when the user releases a key on the keyboard
$("#addICTform").keypress(function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
      $("#addICTbutton").click();
  }
});

// Generate Item tab list 


// sample tabs
$(function() {
  $("#my-tabs ul").find("li").remove();
      var headingItems = '';
      responseJson1a = [
          {eventLocation : 'eventLocation1'},
          {eventLocation : 'eventLocation2'},
          {eventLocation : 'eventLocation3'}
      ]
      for(var i = 0; i < responseJson1a.length; i++) {
          var obj = responseJson1a[i];
          headingItems += '<li id="' + i + '"><a href="#' + obj.eventLocation +'">' + obj.eventLocation + '</a></li>';
      }
      $("#my-tabs ul").append(headingItems);

      //Add Tab contents
      var contents = '';
      for(var i = 0; i < responseJson1a.length; i++) {
          var obj = responseJson1a[i];
          contents += '<div id="' + obj.eventLocation + '">';
          contents += '<h3>Menu ' + (i+1) + '</h3>';
          contents += '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
          contents += '</div>';

          $("#tabContent").append(contents);
          contents = '';
      }
      $("#my-tabs").tabs();
});
