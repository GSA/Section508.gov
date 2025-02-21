function LMSController(){
	this.ver = '1.2';
	this.requiredScore=-1;
	this.userScore =-1;
	this.lastScore=-1;
	this.examFinished=-1;
	this.lastViewedPage=-1;
	this.totalNumberOfPages=-1;
	this.lastExam=-1;
	this.numTrys=-1;
	this.debug = false;
	this.output = window.console;
	this.initialized = false;
	this.apiHandle = null;
	this.resumeData = this.checkForBookmarkingData();
	this.suspendData = this.checkForSuspendData();
	this.getExamData = function(){return encodeJSONData()};
	this.returnExamData = function(s){return decodeJSONData(s)};
	this.goToPage = function(s){return goToPage(s)};
	

}
///////////////////////////////////////////////////////////////////////////////////////////////////
//Public Methods
///////////////////////////////////////////////////////////////////////////////////////////////////
LMSController.prototype.initialize = function (){
   if (this.initialized) return "true";
   
   var api = this.getAPIHandle();
   if (api == null)
   {
      this.message("Unable to locate the LMS's API Implementation.\nLMSInitialize was not successful.");
      return "false";
   }

   var result = api.LMSInitialize("");
   if (result.toString() != "true")
   {
      var err = this.ErrorHandler();
      this.message("LMSInitialize failed with error code: " + err.code);
   }
   else
   {
	   this.initialized = true;
   }

   return result.toString();

}

LMSController.prototype.resumeCourse = function(){
	if (this.resumeData)
	{
		if (this.suspendData)
		{
			this.resumeExam();
		}
		this.goToLastVisitedPage();
	}
	else
	{
		this.message('No resume Data');
		this.goToLastVisitedPage();
	}
}

LMSController.prototype.exit = function (){
   if (! this.initialized) return "true";
   
   var api = this.getAPIHandle();
   if (api == null)
   {
      this.message("Unable to locate the LMS's API Implementation.\nLMSFinish was not successful.");
      return "false";
   }
   else
   {
      // call the LMSFinish function that should be implemented by the API
      var result = api.LMSFinish("");
      if (result.toString() != "true")
      {
         var err = this.ErrorHandler();
         this.message("LMSFinish failed with error code: " + err.code);
      }
   }

   this.initialized = false;

   return result.toString();
}

LMSController.prototype.bookmark =function(page){
	if (parseInt(page)>this.lastViewedPage)
	{
		this.lastViewedPage=parseInt(page);
		this.message('New Last Viewed Page = '+this.lastViewedPage);
	}
	this.checkForCompletion();
	this.setLocationData("lastViewedPage:"+this.lastViewedPage+',userScore:'+this.userScore+',lastExam:'+this.lastExam+',numTrys:'+this.numTrys+',lastScore:'+this.lastScore+',examFinished:'+this.examFinished);
	this.doLMSCommit();
}

//Returns the value of the last exam taken
//returns -1 if no value is set
LMSController.prototype.getLastExam=function(){
	return this.lastExam;
}
//Sets the last exam taken variable
LMSController.prototype.setLastExam=function(n){
	this.lastExam = n;
	this.bookmark();
}
//Returns the number of trys
//returns -1 if no value is set
LMSController.prototype.getNumTrys=function(){
	return this.numTrys();
}

LMSController.prototype.updateNumTrysByOne=function (){
	this.setNumTrys(this.numTrys+1);
}

LMSController.prototype.setNumTrys=function(n){
	this.numTrys=n;
	this.bookmark();
}

LMSController.prototype.storeExamAnswers =function(){
	var data = this.getExamData();
	var result = this.setSuspendData(data);
	if (debug)
	{
		if (data.length > 4096)
			alert("Suspend Data length Exceeded");
	}
	this.message("Exam Data Compress="+data);
	this.message("Exam Data Compressed Length="+data.length);
	this.message("Suspend Data set--"+result);
	this.bookmark();
	this.doLMSCommit();
}

LMSController.prototype.updateUserScore = function (score){
	this.userScore = score;
	this.message("New User Score ="+this.userScore);
	this.bookmark();
}

LMSController.prototype.setRequiredScore = function (score){
	this.requiredScore = score;
	this.message("Required Score Set to -- "+this.requiredScore);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Private Methods
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



LMSController.prototype.goToLastVisitedPage=function(){
	if (this.resumeData)
	{
		this.goToPage(this.lastViewedPage);
	}
	else
		this.goToPage(1);
}

LMSController.prototype.checkForBookmarkingData=function(){
	if ( this.getLocationData() != '')
	{
		var data= this.createBookmarkData(this.getLocationData());
		
		this.lastViewedPage = data['lastViewedPage'];
		this.userScore = data['userScore'];
		this.lastExam = data['lastExam'];
		this.numTries = data['numTrys'];
		this.lastScore = data['lastScore'];
		this.examFinished = data['examFinished'];
		return true;
	}
	else return false;
}

LMSController.prototype.checkExamFinished=function(){
	if (this.examFinished <0)
		return false;
	else
		return true;
}

LMSController.prototype.checkExamPassed=function(){
	if (this.userScore >=this.requiredScore)
		return true;
	else
		return false;
}

LMSController.prototype.createBookmarkData=function(s){
	var parentArray=s.split(',');
	var childArray=[];
	var data={};
	for (var i=0;i<parentArray.length;i++)
	{
		childArray[i] = parentArray[i].split(':');
	}
	for (var k=0;k<childArray.length;k++)
	{
		data[childArray[k][0]]=childArray[k][1];
	}
	return data;
}

LMSController.prototype.checkForSuspendData=function(){
	if ( this.getSuspendData() != '')
	{
		return true;
	}
	else return false;
}

LMSController.prototype.checkForCompletion=function(){
	if (this.requiredScore == -1)
	{
		if (this.lastViewedPage >= this.totalNumberOfPages)
		{
			this.message('No Score required: complete');
			this.sendCompletion('completed');
			return;
		}
		else
		{
			this.message('No Score required: incomplete');
			this.sendCompletion('incomplete');
			return;
		}
	}
	else
	{
		if (this.lastViewedPage >= this.totalNumberOfPages)
		{
			if (this.userScore>=this.requiredScore)
			{
				this.message('Score Required: Passed');
				this.sendCompletion('passed');
				return;
			}
			else
			{
				this.message('Score Required: failed');
				this.sendCompletion('failed');
				return;
			}
		}
		else
		{
			this.message('Score Required: Incomplete');
			this.sendCompletion('incomplete');
		}
	}

}

LMSController.prototype.resumeExam = function(){
	var data = this.getSuspendData();
	this.message("Suspended Data = " +data);
	this.returnExamData(data);
}

//////////////////////////////////////////////////////////////////////////////////////////////
//Generic LMS Functionality
//////////////////////////////////////////////////////////////////////////////////////////////

LMSController.prototype.setSuspendData = function (data){
	if (this.ver =='1.2')
	{
		return this.doLMSSetValue('cmi.suspend_data',data);
	}
}

LMSController.prototype.setLocationData = function (data){
	if (this.ver =='1.2')
	{
		return this.doLMSSetValue('cmi.core.lesson_location',data);
	}
}

LMSController.prototype.getSuspendData = function (){
	if (this.ver =='1.2')
	{
		return this.doLMSGetValue('cmi.suspend_data');
	}
}

LMSController.prototype.getLocationData = function (){
	if (this.ver =='1.2')
	{
		return this.doLMSGetValue('cmi.core.lesson_location');
	}
}

LMSController.prototype.sendCompletion = function (status){
	//valid status -- passed,failed,completed,incomplete
	if (this.ver =='1.2')
	{
		return this.doLMSSetValue('cmi.core.lesson_status',status);
	}
}

LMSController.prototype.getCompletion = function (){
	if (this.ver =='1.2')
	{
		return this.doLMSGetValue('cmi.core.lesson_status');
	} 
}

LMSController.prototype.doLMSGetValue = function (name){
   var api = this.getAPIHandle();
   var result = "";
   if (api == null)
   {
      this.message("Unable to locate the LMS's API Implementation.\nLMSGetValue was not successful.");
   }
   else if (! this.initialized && ! this.initialize())
   {
      var err = this.ErrorHandler(); // get why doLMSInitialize() returned false
      this.message("LMSGetValue failed - Could not initialize communication with the LMS - error code: " + err.code);
   }
   else
   {
      result = api.LMSGetValue(name);
		//This code is commented out because of a bug on Atlas
		/*
      var error = ErrorHandler();
      if (error.code != _NoError.code)
      {
         // an error was encountered so display the error description
         message("LMSGetValue("+name+") failed. \n"+ error.code + ": " + error.string);
         result = "";
      }
      */
   }
   return result.toString();

}

LMSController.prototype.doLMSSetValue =function (name, value){
   var api = this.getAPIHandle();
   var result = "false";
   if (api == null)
   {
      this.message("Unable to locate the LMS's API Implementation.\nLMSSetValue was not successful.");
   }
   else if (! this.initialized && ! this.initialize())
   {
      var err = this.ErrorHandler(); // get why doLMSInitialize() returned false
      this.message("LMSSetValue failed - Could not initialize communication with the LMS - error code: " + err.code);
   }
   else
   {
      result = api.LMSSetValue(name, value);
      if (result.toString() != "true")
      {
         var err = this.ErrorHandler();
         this.message("LMSSetValue("+name+", "+value+") failed. \n"+ err.code + ": " + err.string);
      }
   }

   return result.toString();

}

LMSController.prototype.doLMSCommit=function(){
   var api = this.getAPIHandle();
   var result = "false";
   if (api == null)
   {
      this.message("Unable to locate the LMS's API Implementation.\nLMSCommit was not successful.");
   }
   else if (! this.initialized && ! this.initialize())
   {
      var err = ErrorHandler(); // get why doLMSInitialize() returned false
      message("LMSCommit failed - Could not initialize communication with the LMS - error code: " + err.code);
   }
   else
   {
      result = api.LMSCommit("");
      if (result != "true")
      {
         var err = ErrorHandler();
         message("LMSCommit failed - error code: " + err.code);
      }
   }

   return result.toString();
}

LMSController.prototype.doLMSGetLastError = function(){
   var api = this.getAPIHandle();
   if (api == null)
   {
      message("Unable to locate the LMS's API Implementation.\nLMSGetLastError was not successful.");
      //since we can't get the error code from the LMS, return a general error
      return _GeneralException.code; //General Exception
   }

   return api.LMSGetLastError().toString();
}

LMSController.prototype.doLMSGetErrorString =function (errorCode){
   var api = this.getAPIHandle();
   if (api == null)
   {
      this.message("Unable to locate the LMS's API Implementation.\nLMSGetErrorString was not successful.");
      return this._GeneralException.string;
   }

   return api.LMSGetErrorString(errorCode).toString();
}

LMSController.prototype.doLMSGetDiagnostic=function(errorCode){
   var api = this.getAPIHandle();
   if (api == null)
   {
      message("Unable to locate the LMS's API Implementation.\nLMSGetDiagnostic was not successful.");
      return "Unable to locate the LMS's API Implementation. LMSGetDiagnostic was not successful.";
   }

   return api.LMSGetDiagnostic(errorCode).toString();

}

LMSController.prototype.ErrorHandler=function(){
   var error = {"code":_NoError.code, "string":_NoError.string, "diagnostic":_NoError.diagnostic};
   var api = this.getAPIHandle();
   if (api == null)
   {
      this.message("Unable to locate the LMS's API Implementation.\nCannot determine LMS error code.");
      error.code = _GeneralException.code;
      error.string = _GeneralException.string;
      error.diagnostic = "Unable to locate the LMS's API Implementation. Cannot determine LMS error code.";
      return error;
   }

   // check for errors caused by or from the LMS
   error.code = api.LMSGetLastError().toString();
   if (error.code != _NoError.code)
   {
      // an error was encountered so display the error description
      error.string = api.LMSGetErrorString(error.code);
      error.diagnostic = api.LMSGetDiagnostic(""); 
   }

   return error;
}

LMSController.prototype.getAPIHandle =function (){
   if (this.apiHandle == null)
   {
      this.apiHandle = this.getAPI();
   }

   return this.apiHandle;
}

LMSController.prototype.findAPI=function(win){
	var findAPITries = 0;
	while ((win.API == null) && (win.parent != null) && (win.parent != win))
	{
      findAPITries++;
      // Note: 7 is an arbitrary number, but should be more than sufficient
      if (findAPITries > 7) 
      {
         message("Error finding API -- too deeply nested.");
         return null;
      }
      
      win = win.parent;
	}
	return win.API;
}

LMSController.prototype.getAPI=function (){
   var theAPI = this.findAPI(window);
   if ((theAPI == null) && (window.opener != null) && (typeof(window.opener) != "undefined"))
   {
      theAPI = this.findAPI(window.opener);
   }
   if (theAPI == null)
   {
      this.message("Unable to find an API adapter");
   }
   return theAPI;

}

LMSController.prototype.message=function(str)
{
   if(this.debug)
   {
     try{ this.output.log(str);}
	 catch(err){};
   }
}


////////////////////////////////////////////////////////////////////////////////////////////////
//Data compression and collections code
////////////////////////////////////////////////////////////////////////////////////////////////
//Returns all of the JSON data on the page compressed with bitstringEncode2
function encodeJSONData(){
	var i=1;
	var encodeArray=[];
	while (window['userDataPage'+i])
	{
		encodeArray=encodeArray.concat(extractTFJSON(window['userDataPage'+i]));
		i++;
	}
	
	var encodedData=patternEncode(encodeArray.join(''));
	return encodedData;
}

function decodeJSONData(encodedString){
	var i=1;
	var decodedArray = patternDecode(encodedString).split('');
	while (window['userDataPage'+i])
	{
		updateJSONFromArray(window['userDataPage'+i],
			decodedArray.splice(0,
				returnTFCountFromJSON(window['userDataPage'+i])
				)
			);
		i++;
	}
}

function findNextTF(j,a){
	for (var key in j)
	{
		
		if (j.hasOwnProperty(key))
		{
			if (typeof(j[key])=="object"){
				findNextTF(j[key],a);
			}
			 else if (key == 'answer')
			{
				if (a[tfIndex]=='x')
					j[key]='none';
				else if(a[tfIndex]=='d')
					j[key]='dna';
				else if(a[tfIndex]=='n')
					j[key]='nc';
				else if(a[tfIndex]=='c')
					j[key]='c';
				else
					alert('failed to decode');
				tfIndex++;
			} 
			else if (j[key]==true || j[key]=='true')
			{
				j[key]=a[tfIndex]==1;
				tfIndex++;
			}
			else if (j[key]==false || j[key]=='false')
			{
				j[key]=a[tfIndex]==1;
				tfIndex++;
			}
		}
	}
}

//Sets TRUE/FALSE values based on an array
var tfIndex;
function updateJSONFromArray(j,a){
	//j = userDataPage1
	tfIndex=0;//index of the true/false selected so we can grab the matching data from the array
	findNextTF(j,a);
	updateWhichButton(j);
}

function updateWhichButton(j){
	//j = userDataPage1
	for (var key in j)
	{
	//j = userDataPage1 : testProcessList_1_1
		var statusString = extractAnswerJSON(j[key].failureConditions);
		if (statusString.search('x')!=-1)
		{
			if (statusString.search('n')!=-1 || statusString.search('c')!=-1 || statusString.search('d')!=-1)
				var status = 'inProgress';
			else
				var status = 'enter';
		}
		else
			var status = 'modify';
		j[key].whichButton = status;
		
	}

}

function extractAnswerJSON(j){
	//j = userDataPage1 : testProcessList_1_1
	var a='';
	
			for (var key in j)
			{
				if (j[key]['answer']=='none')
				{
					a+= 'x';
				}
				if (j[key]['answer']=='dna')
				{
					a+= 'd';
				}
				if (j[key]['answer']=='c')
				{
					a+= 'c';
				}
				if (j[key]['answer']=='nc')
				{
					a+= 'n';
				}
	
			}
		
	
		
	return a;
}

//Pass this a JSON, returns the number of True/False values in the JSON so we can split up the array. 
function returnTFCountFromJSON(j){
	return extractTFJSON(j).length;
}

//returns an array with TRUE/FALSE (0,1) values from JSON in order
function extractTFJSON(j){
	var a=[];
	var b=[];
	for (var key in j)
	{
		if (j.hasOwnProperty(key))
		{
			if (typeof(j[key])=="object"){
				a = a.concat(extractTFJSON(j[key]));
			}
			 else if (key == 'answer')
			 {
				if (j[key]=='none')
					a.push('x');
				else if (j[key]=='dna')
					a.push('d');
				else if (j[key]=='nc')
					a.push('n');
				else if (j[key]=='c')
					a.push('c');
			} 
			else if (j[key]==true || j[key]=='true')
			{
				a.push('1');
			}
			else if (j[key]==false || j[key]=='false')
			{
				a.push('0');
			}
			
		}
	}
	return a;
}

////////////////////////////////////////////////////////////////////////////////////////////////
//Compression Code
//patternEncode() = encodes and returns a string
//patternDecode() = Decodes an encoded string
////////////////////////////////////////////////////////////////////////////////////////////////
var dictionary2 = {
		
		
		"A": "28a",
		"B": "xbaa",
		"C": "xaba",
		"D": "xaab",
		"E": "xbba",
		"F": "xbab",
		"G": "xabb",
		"H": "xbbb",
		"I": "daaa",
		"J": "dbaa",
		"K": "daba",
		"L": "daab",
		"M": "dbba",
		"N": "dbab",
		"O": "dabb",
		"P": "dbbb",
		"Q": "naaa",
		"U": "nbaa",
		"R": "naba",
		"S": "naab",
		"T": "nbba",
		"U": "nbab",
		"V": "nabb",
		"W": "nbbb",
		"X": "caaa",
		"Y": "cbaa",
		"Z": "caba",
		"e": "caab",
		"f": "cbba",
		"g": "cbab",
		"h": "cabb",
		"i": "cbbb",
		"j": "aaa",
		"k": "baa",
		"l": "aba",
		"m": "aab",
		"n": "n",
		"o": "bab",
		"p": "aab",
		"q": "aa",
		"r": "ab",
		"s": "ba",
		"t": "bb",
		"u": "ax",
		"v": "bx",
		"w": "an",
		"x": "x",
		"y": "ac",
		"z": "ad"};

function dictionaryEncode2(str)
{
	
		
	for (var key in dictionary2)
	{
		var searchValue=dictionary2[key];
		var replaceValue=key;
		var searchReg = new RegExp(searchValue,"g");
		str = str.replace(searchReg,replaceValue.toString());
		
		
	}
	return str;
}

function dictionaryDecode2(str)
{
	for (var key in dictionary2)
	{
		var searchValue=key;
		var replaceValue=dictionary2[key];
		var searchReg = new RegExp(searchValue,"g");
		str = str.replace(searchReg,replaceValue);
		
	}
	return str;
}

function patternEncode(str){
	var strArray=str.split('');
	var resultArray=[];
	strArray=breakIntoPatterns(strArray);
	for (var i=0;i<strArray.length;i++)
	{
		
		var numItems=strArray[i].length;
		if (numItems == 1)
			numItems='';
		resultArray.push(numItems+""+strArray[i][0]+"")
	}
	
	return dictionaryEncode2(resultArray.join(''));
}

function breakIntoPatterns(arr){
	var returnArray=[];
	returnArray[0]=new Array();
	var currentPattern='';
	var returnArrayIndex=-1;
	for (var i=0;i<arr.length;i++)
	{
		if (arr[i]!=currentPattern)
		{
			returnArrayIndex++;
			currentPattern=arr[i];
			returnArray[returnArrayIndex]=new Array();
		}
		if (arr[i]=='0')
			arr[i]='a';
		if (arr[i]=='1')
			arr[i]='b';
		returnArray[returnArrayIndex].push(arr[i]);
	}
	return returnArray;
}

function patternDecode(str){
	str = dictionaryDecode2(str);
	var arr=new Array();
	var decodedString='';
	var decodedComboArray=new Array;
	var returnString='';
	for (var i=0;i<str.length;i++)
	{
		if (isNaN(str.charAt(i)))
		{
			decodedString+=str.charAt(i)+',';
		}
		else
			decodedString+=str.charAt(i);
	}
	var decodedArray=decodedString.split(',');
	for (var j=0;j<decodedArray.length;j++)
	{
		decodedComboArray[j] = new Array;
		if (decodedArray[j].length == 1)
		{
			decodedComboArray[j][0]=1;
			decodedComboArray[j][1]=decodedArray[j];
		}
		else
		{
			decodedComboArray[j][0]=decodedArray[j].substring(0,decodedArray[j].length-1);
			
			decodedComboArray[j][1]=decodedArray[j].substring(decodedArray[j].length-1);
			
		}
	}
	for (var k=0;k<decodedComboArray.length;k++)
	{
		for (var l=0;l<decodedComboArray[k][0];l++)
		{
			returnString+=decodedComboArray[k][1];
		}
	}
	returnString=returnString.replace(/a/g, '0');
	returnString=returnString.replace(/b/g, '1');
	return returnString;
}

function unloadCourse(){
	if (!lms)
	{
		lms =new LMSController();
		lms.initialize();
	}
	lms.exit();
}



