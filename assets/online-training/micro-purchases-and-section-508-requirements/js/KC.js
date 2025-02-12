/*

KC Object
var- 	type: Survey or Linear, survey is a table style KC with multiple questions displayed at once, Linear is one question at a time
		answerType: radio or checkbox, denotes which type of inputs will be displayed
		currentQuestion: Var denotes the last question checked, defaults to 0
		userAnwser: Stores the uses selected answer upon submission
		surveyHeaders: Stores the header information for the survey KC's
		questions: An array of Question Objects. 

Question Object
vars - 	text:The text of the question 
		correctFeedback: The text for the correct feedback
		incorrectFeedback: The text for the incorrect feedback
		distractors[]: an array of Distractor Objects

Distractor Object
vars-	text:The text of the distractor
		flag: Text (true, false) denotes whether the input should be selected (true = should be selected)
		id: ID assigned to the input field

*/
function KC(){
	this.questions=[];
	this.type="";
	this.answerType="";
	this.currentQuestion=0;
	this.userAnswers=[];
	this.surveyHeaders=[];
}
KC.prototype.initialize=function (){
	d=document;
	this.setType();
	this.setAnswerType();
	this.loadQuestions();
	
	d.getElementById("nextbtn").style.visibility="hidden";
	//alert(LMSController.prototype.getCompletion() )
	//if (LMSController.prototype.getCompletion() == "completed") d.getElementById("nextbtn").style.visibility="visible";
	
}

KC.prototype.setType=function(){
	var t=document.getElementById('kcType_Field').innerHTML;
	if (t.search(/survey/i)==-1)
	{
		this.type="linear";
	}
	else
		this.type="survey";

}

KC.prototype.setAnswerType=function(){
	var t=document.getElementById('kcAnswerType_Field').innerHTML;
	if (t.search(/mr/i)==-1)
	{
		this.answerType="radio";
	}
	else
		this.answerType="checkbox";

}


KC.prototype.loadQuestions=function (){
	d=document;
	var i = 0;
	while (d.getElementById('kcQuestion'+i+'_Field'))
	{
		//alert("loading question "+i);
		var text = d.getElementById('kcQuestion'+i+'_Field').innerHTML;
		text=removeComments(text);
		var iFeedback=d.getElementById('kcQuestion'+i+'IncorrectFeedback_Field').innerHTML;
		var cFeedback=d.getElementById('kcQuestion'+i+'CorrectFeedback_Field').innerHTML;
		this.questions[i]= new Question(text,cFeedback,iFeedback,i);
		
		i++;
	}
}

KC.prototype.printQuestions=function(){
	var print="";
	var destination = document.getElementById('kcContentTLGR');
	destination.innerHTML="";
	if (this.type!='survey')
	{
		this.getQuestionDiv(destination,this.questions[0]);
		this.getFeedbackDiv(destination,this.questions[0]);
	}
	else
	{
		
		this.getSurveyQuestionDiv(this.setSurveyPageStyle(destination));
		this.getFeedbackDiv(destination,this.questions,'940px');
	}
		
}
KC.prototype.setSurveyPageStyle=function(dest){
	d=document;
	var imageDiv=d.getElementById("imageareaTLGR");
	if (imageDiv)
	{
		imageDiv.parentNode.removeChild(imageDiv);
	}
	
	var surveyDiv=d.createElement("div");
	surveyDiv.className='surveyDiv';
	
	dest.style.width='940px';
	dest.appendChild(surveyDiv);
	
	return surveyDiv;
}
KC.prototype.getSurveyQuestionDiv=function(dest){
	d=document;
	var table= d.createElement('table');
	
	//table.className='basicSurveyKC';
	this.surveyHeaders=this.loadSurveyHeaders();
	this.createSurveyHeaderRow(table,this.surveyHeaders);
	for(var i=0;i<this.questions.length;i++)
	{
		//alert('question'+i);
		this.createSurveyQuestionRow(table,i,this.questions[i],this.answerType);
	}
	dest.appendChild(table);
	//dest.innerHTML += "<table>"+table.innerHTML+"</table>";
	//console.log(table.parentNode.innerHTML);

}


KC.prototype.loadSurveyHeaders=function(){
	var tempArray=[];
	for(var i=0;i<this.questions[0].distractors.length;i++)
	{
		tempArray[i]=this.questions[0].distractors[i].text;
	}
	return tempArray;

}
KC.prototype.createSurveyHeaderRow=function (dest,headers){
	d=document;
	/*var row = dest.insertRow(-1);
	var cell,
		text;
	cell = row.insertCell(-1);
	for (var i=0;i<headers.length;i++)
	{
		cell = row.insertCell(-1);
		cell.setAttribute('scope','col');
		text = headers[i];
		cell.appendChild(document.createTextNode(text));		
	}
	
	*/
	
	var tr=d.createElement('tr');
	var th1=d.createElement('th');
		th1.innerHTML="Statements";
	var th=[];
	tr.appendChild(th1);
	for (var i=0;i<headers.length;i++)
	{
		th[i]=d.createElement('th');
		th[i].setAttribute('scope','col');
		th[i].innerHTML=headers[i];
		tr.appendChild(th[i]);
	}
	dest.appendChild(tr);
	
}

KC.prototype.createSurveyQuestionRow=function (dest,qIndex,question, type){
	d=document;
	var row = dest.insertRow(-1);
	var cell,
		text,
		input;
	cell = row.insertCell(-1);
	cell.setAttribute("valign","center");
	cell.scope='row';
	
	var div=d.createElement('div');
	div.style.minHeight="35px";
	div.style.float="right";
	div.innerHTML="";
	var qDiv = d.createElement('div');
	qDiv.style.float="left";
	qDiv.appendChild(document.createTextNode(question.text));
	
	var inputTitleQuestion=question.text;
	
	cell.appendChild(qDiv);
	cell.appendChild(div);
	for (var i=0;i<question.distractors.length;i++)
	{
		cell = row.insertCell(-1);
		cell.style.height="23px";
		
		input=d.createElement('input');
		input.setAttribute('type',type);
		input.name='distractor'+qIndex;
		input.id=question.distractors[i].id;
		input.setAttribute('value',question.distractors[i].flag.toString());
		input.title=this.questions[0].distractors[i].text+" for question, " + inputTitleQuestion;
		
		cell.appendChild(input);
	}
	
		
		
	/*	
	var tr=d.createElement('tr');
	
	var questionTD=d.createElement('td');
	//questionTD.style.verticalAlign="center";
	questionTD.setAttribute("valign","center");
	questionTD.scope='row';
	
	var div=d.createElement('div');
	div.style.minHeight="35px";
	div.style.float="right";
	div.innerHTML="";
	questionTD.innerHTML=question.text;
	var inputTitleQuestion=question.text;
	//questionTD.appendChild(div);
	
	tr.appendChild(questionTD);
	
	var answerTD=[];
	var input=[];
	var answerDIV=[];
	
	for (var i=0;i<question.distractors.length;i++)
	{
		
		answerTD[i]=d.createElement('td');
		answerTD[i].style.height="23px";
		
		input[i]=d.createElement('input');
		//input[i].type=type;
		input[i].setAttribute('type',type);
		input[i].name='distractor'+qIndex;
		input[i].id=question.distractors[i].id;
		//input[i].value=question.distractors[i].flag;
		input[i].setAttribute('value',question.distractors[i].flag.toString());
		input[i].title=this.questions[0].distractors[i].text+" for question, " + inputTitleQuestion;
		
		answerTD[i].appendChild(input[i]);
		
		tr.appendChild(answerTD[i]);
		
		
		
			
		//alert(question.distractors[i].id+"="+question.distractors[i].flag);
		
		
		
	}
	dest.appendChild(tr);
	
	*/
	
}


KC.prototype.getQuestionDiv = function (destination,que){
	
	
	var fieldset = document.createElement('fieldset');
	var legend = document.createElement('legend');
	
	var questionDiv = document.createElement('div');
	questionDiv.className='question';
	questionDiv.innerHTML=que.text;
	
	legend.appendChild(questionDiv);
	fieldset.appendChild(legend);
	
	var distractorsDiv=document.createElement('div');
	distractorsDiv.className='distractors';
	
	
	var clearDiv=[];
	var clearDivText=[];
	
	for (i=0;i<this.questions[0].distractors.length;i++)
	{
		distractorsDiv.appendChild(que.distractors[i].getLinearInput(this.answerType, i));
		//alert(this.questions[0].distractors[i].getLinearInput(this.answerType, i).innerHTML);
		clearDiv[i]=document.createElement('div');
		clearDiv[i].className="clear";
		distractorsDiv.appendChild(clearDiv[i]);
		
	}
	
	fieldset.appendChild(distractorsDiv);
	destination.appendChild(fieldset);
	
	

}

KC.prototype.getFeedbackDiv=function(dest,q,width){
	d=document;
	var feedbackDiv=d.createElement('div');
	feedbackDiv.className="feedback";
	feedbackDiv.id='feedback';
	
	if (width)
	{
		feedbackDiv.style.width=width;
	}
	
	var submitBtn=d.createElement('button');
	//submitBtn.type='button';
	submitBtn.setAttribute('type','button');
	submitBtn.innerHTML='Submit';
	var self=this;
	if (this.type=='linear')
	{
		submitBtn.onclick=function(){
			
			self.checkAnswers(q);
			
		};
	}
	else
	{
		submitBtn.onclick=function(){
			self.checkSurveyAnswers(q);
		};
	}
	feedbackDiv.appendChild(submitBtn);
	dest.appendChild(feedbackDiv);
}

KC.prototype.checkForNullAnswers=function(){
	d=document;
	for (var i=0; i<this.questions.length; i++)
	{
		var answerSelected=false;
		for (var n=0; n<this.questions[i].distractors.length; n++)
		{
			if (d.getElementById(this.questions[i].distractors[n].id).checked)
			{
				answerSelected=true;
			}
		}
		if (!answerSelected)
		{
			alert('You must select an answer before selecting Submit.');
			return true;
		}
	}
	return false;

}


KC.prototype.focusOnFeedback=function(){
	document.getElementById('feedback').focus();
};
KC.prototype.checkSurveyAnswers=function(q){
	d=document;
	//this.checkAnswers(q[0]);
	if(this.checkForNullAnswers())
	{
		return;
	}
	document.getElementById('feedback').tabIndex='0';
	this.focusOnFeedback();
	var userAns=[];
	this.removeHighlightSurveyRow(q);
	this.highlightSurveyRow(q);
	
	
	for (var n=0;n<q[this.currentQuestion].distractors.length;n++)
	{
		userAns[n]=d.getElementById(q[this.currentQuestion].distractors[n].id);
		//alert(q[this.currentQuestion].distractors[n].id+".type="+userAns[n].type);
		//userAns[n]=d.getElementById('kcQ0D0');
		//alert(d.getElementById('kcQ0D0').test12);
		//alert (q[this.currentQuestion].distractors[n].id);
		// alert(q[this.currentQuestion].distractors.length);
		if (userAns[n].value.toString()=='true' )
		{
			
			
			userAns[n].style.border="2px solid #081d20";
			userAns[n].style.borderRadius="50px";
			//userAns[n].style.background="#081d20";
		}
		
		
	}
	
	for (var i=0;i<userAns.length;i++)
	{
		if (userAns[i].value.toString() != userAns[i].checked.toString())
		{
			this.displayFeedback(q[this.currentQuestion].incorrectFeedback);
			for(var n=i;n<userAns.length;n++)
			{
				userAns[n].disabled=true;
				//alert(userAns[n].value+"="+userAns[n].checked);
			}
			
			return;
		}
		userAns[i].disabled=true;

	}
	this.displayFeedback(q[this.currentQuestion].correctFeedback);
	
	
}
KC.prototype.highlightSurveyRow=function(q){
	d=document;
	var questionRow=d.getElementById(q[this.currentQuestion].distractors[0].id).parentNode.parentNode;
	for (var x=0;x<questionRow.children.length;x++)
	{
		questionRow.children[x].style.background="#fdc12d";
		questionRow.children[x].setAttribute('bgcolor','#fdc12d');
		
	}

}
KC.prototype.removeHighlightSurveyRow=function(q){
	d=document;
	
	for (var i=0; i<this.questions.length;i++)
	{
	
		var questionRow=d.getElementById(q[i].distractors[0].id).parentNode.parentNode;
		for (var x=0;x<questionRow.children.length;x++)
			{
				questionRow.children[x].style.background="";
				questionRow.children[x].style.color="";
				questionRow.children[x].setAttribute('bgcolor','');
			}
	}

}

KC.prototype.checkAnswers=function(q){
	d=document;
	d.getElementById("nextbtn").style.visibility="visible";
	if(this.checkForNullAnswers())
	{
		return;
	}
	document.getElementById('feedback').tabIndex='0';
	this.focusOnFeedback();
	var htmlContent=d.getElementById('htmlContent');
	var userAns=htmlContent.getElementsByTagName('input');
	for (i=0;i<userAns.length;i++)
	{
		if (userAns[i].value.toString() != userAns[i].checked.toString())
		{
			this.displayFeedback(q.incorrectFeedback);
			
			for(n=i;n<userAns.length;n++)
			{
				userAns[n].disabled=true;
			}
			
			return;
		}
		userAns[i].disabled=true;
		
	}
	
	this.displayFeedback(q.correctFeedback);
	

}

KC.prototype.displayFeedback=function (feedback){
	var dest=document.getElementById('feedback');
	var self=this;
	dest.innerHTML="";
	if (this.type=="survey")
	{
		var surveyBtnsDiv=document.createElement('div');
		var backButton=document.createElement('button');
		//backButton.type='button';
		backButton.setAttribute('type','button');
		backButton.innerHTML='Previous Feedback';		
		var nextButton=document.createElement('button');
		//nextButton.type='button';
		nextButton.setAttribute('type','button');
		nextButton.innerHTML='Next Feedback';
		
		backButton.onclick=function(){self.prevFeedback();};
		nextButton.onclick=function(){self.nextFeedback();};
		if (this.currentQuestion == 0)
		{
			surveyBtnsDiv.appendChild(nextButton);
			backButton.disabled=true;
			surveyBtnsDiv.appendChild(backButton);
		}
		else if(this.currentQuestion+1==this.questions.length)
		{
			nextButton.disabled=true;
			surveyBtnsDiv.appendChild(nextButton);
			surveyBtnsDiv.appendChild(backButton);
		}
		else
		{
			surveyBtnsDiv.appendChild(nextButton);
			surveyBtnsDiv.appendChild(backButton);
		}
		dest.appendChild(surveyBtnsDiv);
	}
	feedbackDiv=document.createElement('div');
	feedbackDiv.innerHTML=feedback;
	feedbackDiv.style.backgroundColor = "#e0f0fa";
	feedbackDiv.style.padding = "20px";
	feedbackDiv.style.border = "1px solid #19518b";
	dest.appendChild(feedbackDiv);
			
}
KC.prototype.prevFeedback=function(){
	this.currentQuestion--;
	this.checkSurveyAnswers(this.questions);
	this.focusOnFeedback();
	
}

KC.prototype.nextFeedback=function(){
	this.currentQuestion++;
	this.checkSurveyAnswers(this.questions);
	this.focusOnFeedback();
	
	if(this.currentQuestion == this.questions.length-1) document.getElementById("nextbtn").style.visibility="visible";
}
/*/////////////////////////////////////////////////////////////////////////
Question Class
questions are stored in an array property of KC.questions
/////////////////////////////////////////////////////////////////////////*/

function Question(text,correctFeedback,incorrectFeedback,parentIndex){
	this.text=text;
	this.correctFeedback=correctFeedback;
	this.incorrectFeedback=incorrectFeedback;
	this.distractors=[];
	
	d=document;
	var n=0;
	while(d.getElementById('kcQ'+parentIndex+'D'+n+"_Field"))
	{
		var text=d.getElementById('kcQ'+parentIndex+'D'+n+"_Field").innerHTML;
		text=removeComments(text);
		d.getElementById('kcQ'+parentIndex+'D'+n+"_Field").style.cursor = "pointer";
		var flag=d.getElementById('kcQ'+parentIndex+'D'+n+"Flag_Field").innerHTML;
		flag=removeComments(flag);
		
		if (flag.indexOf('x') != -1)
		{
			flag=true;
		}
		else if(flag.indexOf('X') != -1)
		{
			flag=true;
		}
		else
		{
			flag=false;
		}
		this.distractors[n]=new Distractor(text,flag,'kcQ'+parentIndex+'D'+n+"_Field");
		n++;	
	}

}

////////////////////////////////////////////////////////////////////////////////
//Distractor Class
//Distractors are stored on a Question object in an array Question.distractors
////////////////////////////////////////////////////////////////////////////////

function Distractor(text,flag,id){
	this.text=text;
	this.flag=flag;
	this.id=id;
}
Distractor.prototype.getLinearInput=function(type,letter){
	var letter=this.getDistractorLetter(letter);
	var distractorDiv=document.createElement('div');
	distractorDiv.className='distractor';
	
	var input=document.createElement('input');
	input.type=type;
	input.name='distractor';
	input.value=this.flag;
	input.id=this.id;
	distractorDiv.appendChild(input);
	
	var label=document.createElement('label');
	label.htmlFor=this.id;
	
	var labelLetterDiv = document.createElement('div');
	labelLetterDiv.className='labelLetter';
	
	var labelLetterDivText=document.createTextNode(letter);
	labelLetterDiv.appendChild(labelLetterDivText);
		
	var labelDistractorDiv=document.createElement('div');
	labelDistractorDiv.className='labelDistractor';
	
	
	labelDistractorDiv.innerHTML=this.text;
	
	//label.appendChild(labelLetterDiv);
	label.appendChild(labelDistractorDiv);
	
	distractorDiv.appendChild(label);
	
	
	return distractorDiv;
}

Distractor.prototype.getDistractorLetter=function(letter){
	switch(letter)
	{
		case 0:
		letter="A.";
		break;
		case 1:
		letter="B.";
		break;
		case 2:
		letter="C.";
		break;
		case 3:
		letter="D.";
		break;
		case 4:
		letter="E.";
		break;
		case 5:
		letter="F.";
		break;
		case 6:
		letter="G.";
		break;
		case 7:
		letter="H.";
		break;
		case 8:
		letter="I.";
		break;
	
	
	}
	
	return letter;
}








