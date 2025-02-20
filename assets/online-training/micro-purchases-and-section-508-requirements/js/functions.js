
var USE_INTERNAL_MERCURY = false;
var USE_EXTERNAL_MERCURY = false;


///////GLOBAL VARIABLES
var originalTitle=""
var currentTopic;
var currentPage;
var totalPages;
var dLinkText;
var courseMercuryId;
var lessonMercuryId;
var file;
var screenXofY;
var lms = new LMSController();

function initialize(){
	/*setDocumentTitle();
	loadContent(currentLesson, currentTopic, currentSubTopic, currentPage);
	document.getElementById("skipNav").focus();
	
	
	
	setSpecialResources();
	
	
	focusListener();*/
	lms.initialize();
	
	setMercury();
	//setDocumentTitle();
	lessonData = new Lesson('data.xml');
	lessonMercuryId=lessonData.getMercuryLessonId();
	courseMercuryId=lessonData.getMercuryCourseId();
	
	
	MM_preloadImages('../images/btn_over_back.jpg','../images/btn_over_next.jpg','../images/btn_over_lesson_map.jpg','../images/btn_over_resources.jpg','../images/btn_over_glossary.jpg','../images/btn_over_exit.jpg','../images/btn_over_help.jpg');
	loadCourseTitle();
	setTotalPages();
	//loadFirstPage();
	totalPages=lessonData.getTotalPages();
	//checkForLastPageVisited();
	lms.resumeCourse();
		
}
function checkForLastPageVisited(){
	var lastPageVisited = doSCORMGetValue(DATA_PARAM);
	if (lastPageVisited)
		{
			
			goToPage(lastPageVisited);
		}
	doSCORMCommit();
}


function loadCourseTitle(){
	var d=document;
	var h1=d.createElement('h1');
	var courseTitle=lessonData.getCourseTitle();
	h1.innerHTML=courseTitle;
	d.getElementById('coursetitle').innerHTML='';
	d.getElementById('coursetitle').appendChild(h1);
	
}

function setPageTitle(){
	var cTitle=lessonData.getCourseTitle();
	
	var tTitle=lessonData.getLessonTitle();
	if (tTitle!='')
	{
		tTitle+="&nbsp;|&nbsp;";
	}
	tTitle+=lessonData.getTopicTitle(currentTopic);
	
	var sTitle=getScreenTitle();
	
	document.title=cTitle+" | "+tTitle+" | "+sTitle;
	
}

function getScreenTitle(){
	return removeComments(document.getElementById('pagetitle').innerHTML);
}

function setTotalPages(){
	totalPages = lessonData.getTotalPages();
	
}

function loadFirstPage(){
	loadContent(0,0);
}

function goToNextPage(){
	var nextPage=lessonData.getNextPage(currentTopic,currentPage);
	loadContent(nextPage[0],nextPage[1]);
	lessonData.storeLastPageVisited();
	return false;
}
function goToPrevPage(){
	document.getElementById("nextbtn").style.visibility="visible";
	var prevPage=lessonData.getPrevPage(currentTopic,currentPage);
	loadContent(prevPage[0],prevPage[1]);
	return false;
}
function goToPage(requestedPage)
{
	if (requestedPage)
	{
		var num=requestedPage;
	}
	else
	{
		try{
			var num = document.getElementById('requestedPage').value;
			document.getElementById('requestedPage').value = "";
		}
		catch(err){}
	}
	if (num == "" || num== null)
	{
		return;
	}
	
	var file = lessonData.getNumPage(num);
	if (!file)
	{
		
		return;
	}
	//alert(currentLesson + " " + file[0] + " " + file[1]);
	
	
	loadContent(file[0],file[1]);
	return false;

}	

function loadContent(t,s) {
	//updateTitles(l,t);
	
	var xmlhttp;
	
	currentTopic = t;
	currentPage = s;
	updateTopicTitle();
	//updateScreenName();
	setXofY();
	file=lessonData.getFileName(t,s);
	displayScreenFileName(file);
	
	
	
   
	if (window.XMLHttpRequest){
      //IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
	}
	else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
     
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			var responseText = xmlhttp.responseText;
			responseText = xmlhttp.responseText.replace(/\.\.\/\.\.\//g,"../");
			insertAndExecute("htmlContent", responseText);
			loadUserInstructions();
			loadDLinkText();
			checkKC();
			setPageTitle();
			removeTemplateFields();
			
			
		}
		
	}
		
	xmlhttp.open("GET", file,true);
	xmlhttp.send();
   
	//document.title=originalTitle;
	
	
   
}


function removeTemplateFields(){
	d=document;
	if(!d.getElementById('templateFields'))
		return;
	var tempFields=d.getElementById('templateFields');
	tempFields.parentNode.removeChild(tempFields);
}

function removeComments(s){
	if (s.indexOf('<!--')>-1)
	{
		var beg = s.indexOf('-->')+3;
		var end = s.indexOf('<!--',beg);
		return s.substring(beg,end);
	}
	else
		return s;

}

function checkKC(){
	if (document.getElementById('kcQuestion0_Field'))
	{
		var kc = new KC();
		kc.initialize();
		kc.printQuestions();
	}

}

function openDescriptionPopup(){
	window.open('../common/dLink.html','_blank','width=500, height=400');
	return false;
}

function getDescriptionText(){
	return dLinkText;
}

function loadUserInstructions(){
	instDiv=document.getElementById('uiinstructions');
	instDiv.innerHTML = getUserInstructionText();
}

function loadDLinkText(){
	dLinkText=getDLinkText();

}

function getUserInstructionText(){
	var d = document;
	try {
		return d.getElementById('userInstructions_Field').innerHTML;
	}
	catch(err){
		return '';
	}
	
}

function getDLinkText(){
	try {
		return document.getElementById('dLinkText_Field').innerHTML;
	}
	catch(err){
		return '';
	}
}

function setXofY(){
	lessonData.updateCurrentPageNumber(currentTopic,currentPage);
	var n=lessonData.getCurrentPageNumber();
	screenXofY=n+"&nbsp;of&nbsp;"+totalPages;
	document.getElementById('xofy').innerHTML=screenXofY;
	if (n==totalPages) document.getElementById("nextbtn").style.display = "none";
	else document.getElementById("nextbtn").style.display = "block";
	if (n==1) document.getElementById("backbtn").style.display = "none";
	else document.getElementById("backbtn").style.display = "block";
	
}

function updateTopicTitle(){
	var d=document;
	var h2=d.createElement('h2');
	var topicTitle=lessonData.getLessonTitle();
	if (topicTitle!='')
	{
		topicTitle+="&nbsp;|&nbsp;";
	}
	topicTitle+=lessonData.getTopicTitle(currentTopic);
	d.getElementById('lessontitle').innerHTML='';
	h2.innerHTML=topicTitle;
	d.getElementById('lessontitle').appendChild(h2);
	
}


function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function focusListener(){

	if (navigator.appVersion.indexOf("MSIE 7.") != -1){
			var skipNav=document.getElementById("skipNav");

			document.attachEvent('onpropertychange', function(evt){
				//console.log(evt.propertyName);
				
				try {
						var htmlCheck = document.activeElement.innerHTML;
					}
				
				catch(err){
					htmlCheck = "nope";
					}
				htmlCheckBool = htmlCheck=='&nbsp;Skip to content&nbsp;';
				
				
				
				
				
				if(evt.propertyName ==='activeElement' && htmlCheckBool)
				{
					skipNav.id = "skipNavIE7Visible";
					
					
				}
				else
					skipNav.id="skipNavIE7Hidden";
				
				/*console.log(document.activeElement.id);
				console.log(document.activeElement.name);
				console.log(document.activeElement.tag);
				console.log(document.activeElement.class);
				console.log(document.activeElement.innerHTML);*/
				var arrowCheckBool = (htmlCheck =='Next Page' || htmlCheck == 'Previous Page');
				if (evt.propertyName ==='activeElement' && arrowCheckBool){
						closeTopicMenu();
					}
			
			
			})
	
	}
	else
	{
				
				document.attachEvent('onpropertychange', function(evt){
				try {
						var htmlCheck = document.activeElement.innerHTML;
					}
				
				catch(err){
					htmlCheck = "nope";
					}
				var arrowCheckBool = (htmlCheck =='Next Page' || htmlCheck == 'Previous Page');
				if (evt.propertyName ==='activeElement' && arrowCheckBool){
						closeTopicMenu();
					}})
	
	
	
	}
	
	



}



function setDocumentTitle(){
	originalTitle = document.title.split("#")[0];    
	document.attachEvent('onpropertychange', function (evt) {
		if(evt.propertyName === 'title' && document.title !== originalTitle) {
			setTimeout(function () {
			   document.title = originalTitle;
			}, 1);
		}
	});


}





function displayScreenFileName(fileName){
	var d=document;
	if (!USE_INTERNAL_MERCURY && !USE_EXTERNAL_MERCURY)
	{
		return;
	}
	if (d.getElementById('screenFileName'))
	{
		d.getElementById('screenFileName').innerHTML=fileName;
		return;
	}
	var newDiv=d.createElement('div');
	newDiv.id="screenFileName";
	newDiv.style.background="white";
	newDiv.style.width="200px";
	newDiv.innerHTML=fileName;
	d.body.appendChild(newDiv);
	
}
function setMercury(){
	var d=document;
	if (USE_INTERNAL_MERCURY)
		{
			var mercuryPath='../common/mercury/clientHTMLMercury.html';
		}
	else if (USE_EXTERNAL_MERCURY)
		{
			var mercuryPath='../common/mercury/ExternalClientHTMLMercury.html';
		}
	else
		return;
	var mercuryDiv=d.createElement('div');
	var goToPageBtn=d.createElement('button');
	//goToPageBtn.type='button';
	goToPageBtn.setAttribute('type','button');
	goToPageBtn.onclick=returnGoToPage();
	goToPageBtn.href='#';
	goToPageBtn.id="goToPage"
	goToPageBtn.innerHTML="Go To Page";
	
	var rPage=d.createElement('input');
	rPage.type='text';
	rPage.id='requestedPage';
	rPage.size='2';
	rPage.onkeypress=returnHandleEnter(rPage,rPage.event);
		
	mercuryDiv.appendChild(goToPageBtn);
	mercuryDiv.appendChild(rPage);
	
	var mBtn=d.createElement('button');
	//mBtn.type='button';
	mBtn.setAttribute('type','button');
	mBtn.href='#';
	mBtn.onclick=returnMercuryOnclick(mercuryPath);
	mBtn.innerHTML="Open Mercury";
	var br=d.createElement('br');
	mercuryDiv.appendChild(br);
	mercuryDiv.appendChild(mBtn);
	
	if(document.body != null)
	{ 
		document.body.appendChild(mercuryDiv); 
	}
}

function returnHandleEnter(f,e){
	return function(){
			handleEnter(f,e);
		}
}

function handleEnter(inField, e)
{
	
	var charCode;
    
    if(e && e.which){
        charCode = e.which;
    }else if(window.event){
        e = window.event;
        charCode = e.keyCode;
    }

    if(charCode == 13) {
        goToPage();
    }
}

function returnMercuryOnclick(p){
	return function(){
		window.open(p,'Mercury','width=380, height=380, menubar=no, toolbar=no, location=no');
	}
}

function returnGoToPage(){
	return function(){
		goToPage();
	}
}

function goToFile()
{
	var lessonR = document.getElementById('requestedLessonFile').value;
	var topicR = document.getElementById('requestedTopicFile').value;
	var subTopicR = document.getElementById('requestedSubTopicFile').value;
	var screenR = document.getElementById('requestedScreenFile').value;
		
	loadContent(lessonR,topicR,subTopicR,screenR);

}	

function setSpecialResources(){

var specialResources = "<a onclick=\"window.open('../common/resources/resources.html','Resources','width=850, height=700, menubar=no, toolbar=no, location=no, resizable=yes, scrollbars=yes');\" href='#'>Help</a>   &nbsp;|&nbsp;<a onclick=\"window.open('../common/resources/resources.html','Resources','width=850, height=700, menubar=no, toolbar=no, location=no, resizable=yes, scrollbars=yes');\" href='#'>Resources</a>   &nbsp;|&nbsp;<a onclick=\"window.open('../common/resources/glossary.htm','Glossary','width=870px,menubar=no, toolbar=no, location=no, resizable=yes, scrollbars=yes');\" href='#'>Glossary</a>&nbsp;|&nbsp;<a onclick=\"exitConfirmation()\" href='#'>Exit</a>";

document.getElementById("specialResources").innerHTML = specialResources;


}





function adjustContentHeight(){
	
	if (typeof document.querySelectorAll("div.mainScreenContent")[0]=='undefined')
		return;
	
	
	var screenHeight=document.querySelectorAll("div.mainScreenContent")[0].offsetHeight;
	if (screenHeight<700)
		screenHeight=524;
	document.getElementById("contentArea").style.height = screenHeight+'px';










}


function insertAndExecute(id, text)
  {
    var domelement = document.getElementById(id);
    domelement.innerHTML = text;
    var scripts = [];
	
    ret = domelement.childNodes;
    for ( var i = 0; ret[i]; i++ ) {
      if ( scripts && nodeName( ret[i], "script" ) && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript") ) {
            scripts.push( ret[i].parentNode ? ret[i].parentNode.removeChild( ret[i] ) : ret[i] );
        }
    }

    for(script in scripts)
    {
      evalScript(scripts[script]);
    }
	
  }
  function nodeName( elem, name ) {
	return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
  }
  function evalScript( elem ) {
    data = ( elem.text || elem.textContent || elem.innerHTML || "" );
	var head = document.getElementsByTagName("head")[0] || document.documentElement;
    script = document.createElement("script");
    script.type = "text/javascript";
    try{
		script.appendChild( document.createTextNode( data ) );
	}
	catch(err){
	}
    head.insertBefore( script, head.firstChild );
    head.removeChild( script );

    if ( elem.parentNode ) {
        elem.parentNode.removeChild( elem );
    }
  }
  
  






function highlightTopic(t){
	if (mouseOverHighlight){
		return;
	}
	var topic     = t;
	var searchKey = "tab"+t;
	var searchHTML= "";
	
	searchHTML = document.getElementById(searchKey).innerHTML;
	
	searchHTML = searchHTML.replace("visitedLeftTab","rolloverLeftTab");
	searchHTML = searchHTML.replace("visitedRightTab","rolloverRightTab");
	searchHTML = searchHTML.replace("visitedCenterTab","rolloverCenterTab");
	
	
	document.getElementById(searchKey).innerHTML=searchHTML;
	mouseOverHighlight = true;
}
	
function removeHighlightTopic(t){
	
	var topic     = t;
	var searchKey = "tab"+t;
	var searchHTML= "";
	
	searchHTML = document.getElementById(searchKey).innerHTML;
	
	searchHTML = searchHTML.replace("rolloverLeftTab","visitedLeftTab");
	searchHTML = searchHTML.replace("rolloverRightTab","visitedRightTab");
	searchHTML = searchHTML.replace("rolloverCenterTab","visitedCenterTab");
	
	
	document.getElementById(searchKey).innerHTML=searchHTML;
	mouseOverHighlight = false;
	CarrotCurrentTopic();
}

function CarrotCurrentTopic(){
	
	var searchKey = "topic"+currentTopic;
	var searchHTML= "";
	var topicDiv = document.getElementById(searchKey);
	searchHTML=topicDiv.innerHTML;
	searchHTML = searchHTML.replace("<!--","");
	searchHTML = searchHTML.replace("-->","");
	topicDiv.innerHTML=searchHTML;
	topicDiv = document.getElementById(searchKey);
	
	var topicLinks= topicDiv.getElementsByTagName('a');
	
	var topicLinkText = topicLinks[0].innerHTML;
	
	searchKey = searchKey+"Carrot";
	var carrotDiv = document.getElementById(searchKey);
	carrotDiv.innerHTML="&#9658;";
	
	var currentTopicDiv = document.getElementById("currentTopic");//sets the text in the currentTopic div, where the topic name is displayed, to the text from the link
	currentTopicDiv.innerHTML= topicLinkText;
}
function onEnterTopic(rolledTopic){
	var searchKey= "topic"+rolledTopic;
	var searchHTML="";
	var topicDiv = document.getElementById(searchKey);
	var topicLinks= topicDiv.getElementsByTagName('a');
	topicDiv.style.background="#006699";
	topicLinks[0].style.color="#FFFFFF";
	
}
function removeAllHighlights(){
	var n=1;
	var searchKey="topic";
	
	while (document.getElementById(searchKey+n) != null)
	{	
		searchKey2="topic"+n;
		
		topicDiv =document.getElementById(searchKey2);
		topicLinks = topicDiv.getElementsByTagName('a');
		topicDiv.style.background="";
		if (typeof topicLinks[0] != 'undefined')
		{
			topicLinks[0].style.color="";
		}
		n++;
		
	}
		


}




function removePrevTopicCarrot(){
	var searchKey = "topic"+currentTopic;
	var searchHTML= "";
	var topicDiv = document.getElementById(searchKey);
	var topicLinks= topicDiv.getElementsByTagName('a');
	
	
	searchKey = searchKey+"Carrot";
	var carrotDiv = document.getElementById(searchKey);
	carrotDiv.innerHTML="";


}






function toggleTopicMenu(){
	var topicMenu=document.getElementById('topicMenu');
	
	var visibleState = ""+topicMenu.style.visibility+"";
	var lessonTitleDiv = document.getElementById('subLessonTitle');
	var lessonTitleLink = lessonTitleDiv.getElementsByTagName('a')[0];
	var lessonCarrot = document.getElementById('lessonCarrot');
	
	if (visibleState == "hidden" || visibleState == "")
	{
		topicMenu.style.visibility = "visible";
		lessonTitleDiv.style.background = "#990033";
		lessonCarrot.style.background="#990033";
		lessonCarrot.style.color="#FFFFFF";
		lessonTitleLink.style.color = "#FFFFFF";
		
		lessonCarrot.innerHTML="&nbsp;&nbsp;&nbsp;&#9660;&nbsp;";
		
		removeAllHighlights();
		hideVideo();
	}
	else 
	{
		topicMenu.style.visibility = "hidden";
		lessonTitleDiv.style.background = "";
		lessonCarrot.style.background="";
		lessonCarrot.innerHTML="&nbsp;&nbsp;&nbsp;&#9658;&nbsp;";
		lessonCarrot.style.color="";
		lessonTitleLink.style.color = "";
		showVideo();
		
		
	}
	/*var lessonWidth = document.getElementById('lessonTitle').offsetWidth+19;
	topicMenu.style.left = lessonWidth+"px";
	var topicLeft = topicMenu.style.left+"";*/
		
	
}

function closeTopicMenu(){
	var topicMenu=document.getElementById('topicMenu');
	var visibleState = ""+topicMenu.style.visibility+"";
	
	if (visibleState == "visible")
		toggleTopicMenu();
	showVideo();
}

function showVideo(){
	try{
	document.getElementById('flashVideo').style.left = "0px";
	}
	catch(err){}
}

function showTopicMenu(){
	var topicMenu=document.getElementById('topicMenu');
	var visibleState = ""+topicMenu.style.visibility+"";
	
	if (visibleState == "hidden"|| visibleState== "")
		toggleTopicMenu();
		
	hideVideo();

}

function hideVideo(){

try{
document.getElementById('flashVideo').style.position = "relative";
document.getElementById('flashVideo').style.left = "-1150px";
}
catch(err){}

}

function submitKCAnswer(correctFeedback, incorrectFeedback)
{
	//setupKC();
	//var x=document.forms[kcNumber][3].value;
	//alert (x);
	var user_input="";
	document.getElementById('kcFeedback').tabIndex = 0;
	document.getElementById('kcFeedback').style.visibility="visible";
	for (i=0;i<document.forms[kcNumber].length;i++) 
	{
		if (document.forms[kcNumber][i].checked && user_input != 'false' ) 
			{
				user_input = document.forms[kcNumber][i].value;
			}
		
		if(document.forms[kcNumber][i].checked == false && document.forms[0][i].value =="true")//user has not selected an answer with a true value.
			{
				user_input="false";
				
			}
		
		document.forms[kcNumber][i].disabled=true;
	}
	
	if (user_input == 'true')
	{
		
		//document.getElementById("kcFeedback").innerHTML=correctFeedback[kcNumber];
		document.getElementById("kcFeedback").innerHTML="<strong>Feedback</strong><hr>"+correctFeedback;
		document.getElementById('kcFeedback').focus();
	
	}
	
	if (user_input == 'false')
	{
		
		//document.getElementById("kcFeedback").innerHTML=incorrectFeedback[kcNumber];
		document.getElementById("kcFeedback").innerHTML="<strong>Feedback</strong><hr>"+incorrectFeedback;
		document.getElementById('kcFeedback').focus();
		
	}
	
	
	//document.getElementById("SubmitButton").style.visibility ="hidden";
	//document.getElementById("SubmitButton").innerHTML ="";
	document.querySelectorAll(".submitButton")[0].innerHTML="";
	
	if (correctFeedback.length > 1)
	{
		//document.getElementById("FeedbackButtons").style.visibility ="visible";
	}
	
	document.getElementById("kcFeedback").focus();

}


function submitSurveyKC(){
	createLabels();
	checkAnswers();
	setSubmitButtonField();
	highlightQuestion();
	disableKCInputs();
	
	

}

function createLabels(){
	var labels=document.getElementsByTagName('label');
	for (i=0;i<labels.length;i++)
	{
		if(labels[i].htmlFor !='')
		{
			var elem = document.getElementById(labels[i].htmlFor);
			if(elem)
				elem.label=labels[i];
		}
	}



}

function disableKCInputs()
{
	
	for(c=0; c<document.forms.length;c++)
	{
	
		for(i=0; i<document.forms[c].length;i++)
			{
				document.forms[c][i].disabled=true;
			}
	}
}

function checkAnswers(){
	document.getElementById('kcFeedback').tabIndex=0;
	document.getElementById('kcFeedback').style.visibility="visible";
	var user_input="";
	var selectedQuestionLabel="";
	
	
	
	
	for (i=0;i<document.forms[currentQuestion].length;i++) 
	{
		if(document.forms[currentQuestion][i].checked)
			{
				selectedQuestionLabel=document.forms[currentQuestion][i].label.innerHTML;
				//console.log(selectedQuestionLabel);
			}
	
		if (document.forms[currentQuestion][i].checked && user_input != 'false' ) 
			{
				user_input = document.forms[currentQuestion][i].value;
				
			}
		
		if(document.forms[currentQuestion][i].checked == false && document.forms[currentQuestion][i].value =="true")//user has not selected an answer with a true value.
			{
				user_input="false";
				
			}
		
		//document.forms[currentQuestion][i].disabled=true;
	}
	
	if (user_input == 'true')
	{
		
		//document.getElementById("kcFeedback").innerHTML=correctFeedback[kcNumber];
		document.getElementById("kcFeedback").innerHTML="<strong>Feedback</strong><hr>"+selectedQuestionLabel+"</div>"+correctFeedback[currentQuestion];
		document.getElementById('kcFeedback').focus();
		
		
	
	}
	
	if (user_input == 'false')
	{
		
		//document.getElementById("kcFeedback").innerHTML=incorrectFeedback[kcNumber];
		document.getElementById("kcFeedback").innerHTML="<strong>Feedback</strong><hr>"+selectedQuestionLabel+"</div>"+incorrectFeedback[currentQuestion];
		document.getElementById('kcFeedback').focus();
		
		
	}
	
	
	//document.getElementById("SubmitButton").style.visibility ="hidden";
	
	
	
	
	document.getElementById("kcFeedback").focus();










}

function setSubmitButtonField(){
	
	if (currentQuestion == 0)
	{
		document.getElementById("submitButton").innerHTML =
		"<button href=\"#\" type=\"button\" onclick=\"prevQuestion()\" id=\"PreviousFeedback\" disabled>Previous Feedback</button>&nbsp;<button href=\"#\" type=\"button\" onclick=\"nextQuestion()\" id=\"NextFeedback\">Next Feedback</button>";
	}
	else if (currentQuestion == numKCs)
	{
		document.getElementById("submitButton").innerHTML =
		"<button href=\"#\" type=\"button\" onclick=\"prevQuestion()\" id=\"PreviousFeedback\">Previous Feedback</button>&nbsp;<button href=\"#\" type=\"button\" onclick=\"nextQuestion()\" id=\"NextFeedback\" disabled>Next Feedback</button>";
	
	}
	else if (currentQuestion > 0 && currentQuestion< numKCs)
	{
		document.getElementById("submitButton").innerHTML =
		"<button href=\"#\" type=\"button\" onclick=\"prevQuestion()\" id=\"PreviousFeedback\">Previous Feedback</button>&nbsp;<button href=\"#\" type=\"button\" onclick=\"nextQuestion()\" id=\"NextFeedback\">Next Feedback</button>";
	
	}
	
}

function prevQuestion(){
	removeHighlightQuestion();
	currentQuestion--;
	checkAnswers();
	setSubmitButtonField();
	highlightQuestion()



}

function nextQuestion(){
	removeHighlightQuestion();
	currentQuestion++;
	checkAnswers();
	setSubmitButtonField();
	highlightQuestion()

}


function setupKC()
{
	var answerInputs = document.getElementsByClassName("kcAnswers");
	var key = "A,C";
	if (key.length == 1)
	{
		document.getElementById("kc" + key).value = true;
	}
	else
	{
		key = key.split(","); 
		for (var i = 0; i < key.length; i++)
		{
			document.getElementById("kc" + key[i]).value = true;
		}
	}
	
	document.getElementById("imageTD").rowSpan = gIndex + 4;
}

function highlightQuestion()
{
	var question = currentQuestion+1;
		question = "kc"+question;
		var classSearch = document.querySelectorAll("."+question);
		//console.log(classSearch);
		i=0;
		while(i<classSearch.length)
		{
			classSearch[i].style.background="#006699";
			classSearch[i].style.color="#FFFFFF";
			i++;
		}

}

function removeHighlightQuestion()
{
		var question = currentQuestion+1;
		question = "kc"+question;
		var classSearch = document.querySelectorAll("."+question);
		i=0;
		//console.log(classSearch[i].length);
		while(i<classSearch.length)
		{
			//console.log(classSearch[i].innerHTML);
			classSearch[i].style.background="#FFFFFF";
			classSearch[i].style.color="#000000";			
			i++;
		}



}

function exitConfirmation()
{
	var x;
	var r=confirm("Are you sure you want to exit the course?");
	if (r==true)
	{
		lms.exit();
		window.close();
		window.parent.close();
	}
	else
	{
		
	}
}



	


function getPageFileFromNumber(num)
{
	prevPagesCount = 0;
	
	var t = 1;
	var s = 0;
	
	while (prevPagesCount != num)
	{
			while ( num > courseData[currentLesson-1][t-1].length + prevPagesCount)
				{
					prevPagesCount += courseData[currentLesson-1][t-1].length;
					t++;
				}
			s++;	
			prevPagesCount++;
	
		
	}
	
	var pageFileArray = [t,s];
	return pageFileArray;
	

}


function openPopUp(url){
	
	window.open(url, '_blank','resizable=yes, scrollbars=yes, width=810');




}

function showHiddenTD(button){
	var table = document.getElementById("testResults");
	var tds =  table.querySelectorAll("td");
	
	button.style.display="none";
	
	for (i=0;i<tds.length;i++)
	{
		tds[i].style.display="inline";		
	}

}	
	
(function(d, s) {
	d=document, s=d.createStyleSheet();
	d.querySelectorAll = function(r, c, i, j, a) {
		a=d.all, c=[], r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
		for (i=r.length; i--;) {
			s.addRule(r[i], 'k:v');
			for (j=a.length; j--;) a[j].currentStyle.k && c.push(a[j]);
			s.removeRule(0);
		}
		return c;
	}
})()	
	
	
	
	
	
	
	
	
	
	
	
  
  