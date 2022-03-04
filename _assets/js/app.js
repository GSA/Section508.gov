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

// Jquery execute a function when the user releases a key on the keyboard
$("#addICTform").keypress(function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
      $("#addICTbutton").click();
      return false;
  }
});

// // function to reload page
// function reloadPage()
// {
// 	if(confirm("You will lose all data. Are you sure you want to do it?"))
// 	{
// 		location.reload();
//     return false;
// 	}
// }

// Generate Nav list

function NavListGeneration(location)
{
  TempList = document.createElement('ul');
  TempList.setAttribute('id', 'navigationListID'+location);
  for(var i = 0; i < unique_array.length; i++)
  {
        if(compare_array.indexOf(unique_array[i]) == -1)
		{
			// Create the list item:
			var item = document.createElement('li');
			var a = document.createElement("a");
			// Set its contents:
			var x = unique_array[i].replace(/\s/g, '');
			a.textContent = unique_array[i];
			a.setAttribute('href', '#');
			item.appendChild(a);
			item.setAttribute("id", location+"-link-"+x);
			item.setAttribute("class", "navlinksclass");

				var substeps = document.createElement('ul');
				var subitem = document.createElement('li');
				var aa = document.createElement('a');
				aa.textContent = "Exceptions";
				aa.setAttribute('href', '#');
				aa.setAttribute('class', 'NavList');
        aa.setAttribute('id', 'ExceptionsLinkfor'+x);
        aa.setAttribute('onclick','show("'+x+'", "Exceptions")');
				subitem.appendChild(aa);
				substeps.appendChild(subitem);
				item.appendChild(substeps);

				var substeps = document.createElement('ul');
				var subitem = document.createElement('li');
				var aa = document.createElement('a');
				aa.textContent = "Electronic Content";
				// aa.setAttribute('href', '#');
				aa.removeAttribute("href");
				aa.setAttribute('class', 'NavListDisabled');
        aa.setAttribute('id', 'ElectronicContentLinkfor'+x);
        aa.setAttribute('onclick','show("'+x+'", "ElectronicContent")');
        aa.setAttribute("aria-disabled", "true");
				subitem.appendChild(aa);
				substeps.appendChild(subitem);
				item.appendChild(substeps);

				var substeps = document.createElement('ul');
				var subitem = document.createElement('li');
				var aa = document.createElement('a');
				aa.textContent = "Software";
				// aa.setAttribute('href', '#');
				aa.removeAttribute("href");
				aa.setAttribute('class', 'NavListDisabled');
        aa.setAttribute('id', 'SoftwareLinkfor'+x);
        aa.setAttribute('onclick','show("'+x+'", "Software")');
        aa.setAttribute("aria-disabled", "true");
				subitem.appendChild(aa);
				substeps.appendChild(subitem);
				item.appendChild(substeps);

				var substeps = document.createElement('ul');
				var subitem = document.createElement('li');
				var aa = document.createElement('a');
				aa.textContent = "Hardware";
				// aa.setAttribute('href', '#');
				aa.removeAttribute("href");
				aa.setAttribute('class', 'NavListDisabled');
        aa.setAttribute('id', 'HardwareLinkfor'+x);
        aa.setAttribute('onclick','show("'+x+'", "Hardware")');
        aa.setAttribute("aria-disabled", "true");
				subitem.appendChild(aa);
				substeps.appendChild(subitem);
				item.appendChild(substeps);

			// item.setAttribute('a href', '#');
			// Add it to the list:
			TempList.appendChild(item);
			generateNavPane(unique_array[i], "Exceptions");
      generateNavPane(unique_array[i], "ElectronicContent");
      generateNavPane(unique_array[i], "Software");
      generateNavPane(unique_array[i], "Hardware");
			compare_array.push(unique_array[i]);
		}
  }
  return TempList;
}