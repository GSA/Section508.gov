
var apiHandle       = null;
var findAPITries    = 0;
var _Debug          = false;
var _NoError        = 0;
var apiErr          = false;
var terminateCalled = false;
var scormVer		="1.2";




/*******************************************************************************
**
** Function: doSCORMInitialize()
** Inputs:  None
** Return:  Returns true if the initialization was successful, or
**          returns false if the initialization failed.
**
** Description:
** Initialize communication with LMS by calling the appropriate API method
**
*******************************************************************************/
function doSCORMInitialize() {

	var api = getAPIHandle();
	if (api == null) {
		return "false";
	}

	var result = "false";

	if (scormVer == "2004") {
		result = api.Initialize("");
	}
	else {
		result = api.LMSInitialize("");
	}
	terminateCalled = false;

	if (result.toString() != "true") {
		var err = ErrorHandler();
		
	}
	return result.toString();
}



/*******************************************************************************
**
** Function doSCORMTerminate()
** Inputs:  None
** Return:  Returns true if the termination of communication was successful, or
**          returns false if the termination of communication was unsuccessful
**
** Description:
** Terminate communication with LMS by calling the appropriate API method
**
*******************************************************************************/
function doSCORMTerminate() {
	if (terminateCalled) {
		return;
	}

	var api = getAPIHandle();
	if (api == null) {
		return "false";
	}

	var result = "false";

	if (scormVer == "2004") {
		result = api.Terminate("");
	}
	else {
		result = api.LMSFinish("");
	}
	terminateCalled = true;

	if (result.toString() != "true") {
		var err = ErrorHandler();
	}
	return result.toString();
}


function doSCORMCommit() {
	if (terminateCalled) {
		return;
	}

	var api = getAPIHandle();
	if (api == null) {
		return "false";
	}

	var result = "false";

	if (scormVer == "2004") {
		result = api.Commit("");
	}
	else {
		result = api.LMSCommit("");
	}

	if (result.toString() != "true") {
		var err = ErrorHandler();
	}
	return result.toString();
}


function doSCORMGetValue(name) {
	if (terminateCalled) {
		return;
	}

	var api = getAPIHandle();
	if (api == null) {
		return "";
	}

	var value = "";
	if (scormVer == "2004") {
		value = api.GetValue(name);
	}
	else {
		value = api.LMSGetValue(name);
		
	}

	var err = ErrorHandler();
	if (err != _NoError) {
		return "";
		
	}

	return value.toString();
}

function doSCORMSetValue(name, value) {
	if (terminateCalled) {
		return;
	}

	var api = getAPIHandle();
	if (api == null) {
		return "";
	}

	var result = "false";
	if (scormVer == "2004") {
		result = api.SetValue(name, value);
	}
	else {
		result = api.LMSSetValue(name, value);
	}
	if (result.toString() != "true") {
		var err = ErrorHandler();
		
	}
	return;
}


/*******************************************************************************
**
** Error Handling Functions
**
*******************************************************************************/


function ErrorHandler() {
	if (scormVer == "2004") {
		return ErrorHandler_SCORM2004();
	}
	else {
		return ErrorHandler_SCORM12();
	}
}


function ErrorHandler_SCORM12() {
	var api = getAPIHandle();
	if (api == null) {
		if (_Debug) {
			//alert("Unable to locate the LMS's API Implementation.\nCannot determine LMS error code.");
		}
		return;
	}

	// check for errors caused by or from the LMS
	var errCode = api.LMSGetLastError().toString();
	if (errCode != _NoError) {
		if (_Debug == true) {

			// an error was encountered so display the error description
			var errDescription = api.LMSGetErrorString(errCode);
/*
DOUBLE CHECK TO SEE IF 1.2 WANTS null OR ""

			errDescription += "\n";
			//  Passing null to LMSGetDiagnostic, we get any available
			//  diagnostics on the previous error.
			errDescription += api.LMSGetDiagnostic(null);
*/
			alert(errDescription);
		}

	}
	return errCode;
}

function ErrorHandler_SCORM2004() {
	var api = getAPIHandle();
	if (api == null) {
		if (_Debug) {
			//alert("Unable to locate the LMS's API Implementation.\nCannot determine LMS error code.");
		}
		return;
	}

	// check for errors caused by or from the LMS
	var errCode = api.GetLastError().toString();
	if (errCode != _NoError) {
		if (_Debug == true) {
			// an error was encountered so display the error description
			var errDescription = api.GetErrorString(errCode);

			errDescription += "\n";
			//  Passing "" to GetDiagnostic, we get any available
			//  diagnostics on the previous error.
			errDescription += api.GetDiagnostic("");

			alert(errDescription);
		}

	}
	return errCode;
}



function detectSCORMVersion() {
//  From pipworks code, we may want to leverage this:
//	scormVersion  = scorm.get("cmi._version");
//	if(scormVersion == "1.0") {
//		scorm2004 = true;
//	}

	parameterMode = "LMS";
	scormVer      = "2004";
	apiHandle     = getAPI(true);
	if ((apiHandle != null) && (apiHandle != undefined)) {
		setSCORMParamNames();
		return;
	}

	scormVer  = "1.2";
	apiHandle = getAPI(true);
	if ((apiHandle != null) && (apiHandle != undefined)) {
		setSCORMParamNames();
		return;
	}

	parameterMode = "cookie";
	scormVer      = "";
}

function setSCORMParamNames() {
	MODE_PARAM   = (scormVer == "1.2") ? "cmi.core.lesson_mode"   : "cmi.mode";
	//DATA_PARAM   = (scormVer == "1.2") ? "cmi.suspend_data"       : "cmi.suspend_data";
	TIME_PARAM   = (scormVer == "1.2") ? "cmi.core.session_time"  : "cmi.session_time";
	EXIT_PARAM   = (scormVer == "1.2") ? "cmi.core.exit"          : "cmi.exit";
	DATA_PARAM   = (scormVer == "1.2") ? "cmi.suspend_data"       : "cmi.location";
	ENTRY_PARAM  = (scormVer == "1.2") ? "cmi.core.entry"         : "cmi.entry";  // VERIFY 1.2 PARAM
}

/******************************************************************************
**
** Function getAPIHandle()
** Inputs:  None
** Return:  value contained by APIHandle
**
** Description:
** Returns the handle to API object if it was previously set,
** otherwise it returns null
**
*******************************************************************************/
function getAPIHandle() {
	if (apiHandle == null) {
		apiHandle = getAPI();
	}
	return apiHandle;
}


function getAPI(ignoreErr) {
	var theAPI;

	if (scormVer == "2004") {
		theAPI = findAPI_SCORM2004(window);
	}
	else {
		theAPI = findAPI_SCORM12(window);
	}

	if ( (theAPI == null) && (window.opener != null) && (typeof(window.opener) != "undefined") ) {
		if (scormVer == "2004") {
			theAPI = findAPI_SCORM2004(window.opener);
		}
		else {
			theAPI = findAPI_SCORM12(window.opener);
		}
	}
	if (!ignoreErr) {
		if (theAPI == null) {
			displayAPIWarning();
		}
		else if (apiErr) {
			//  A previous call to getAPI encountered an error, but we now seem to have contact.
			alert("Established connection with LMS SCORM API.");
			apiErr = false;
		}
	}
	return theAPI;
}

function findAPI_SCORM2004(win) {
	while ( (win.API_1484_11 == null)&&(win.parent != null)&&(win.parent != win) ) {
		findAPITries++;

		if ( findAPITries > 500 ) {
			if (_Debug) {
				alert("Error finding SCORM 1.3 API -- too deeply nested.");
			}
			return null;
		}
		win = win.parent;
	}

	return win.API_1484_11;
}

function findAPI_SCORM12(win) {
	while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
		findAPITries++;
		// Note: 7 is an arbitrary number, but should be more than sufficient
		if (findAPITries > 7) {
			if (_Debug) {
				alert("Error finding SCORM 1.2 API -- too deeply nested.");
			}
			return null;
		}

		win = win.parent;
	}
	return win.API;
}

function displayAPIWarning() {
	if (apiErr) {
		return;
	}
	//alert("Unable to find a SCORM API adapter.  Will not be able to communicate with the LMS.");
	apiErr = true;
}


function carneyScormCommands(command, args) {
	

	if (command == "debug") {
		alert(args);
	}
	else if (command == "ExitModule") {
		exitModule(args);
	}
	else if (command == "CloseWindow") {
		closeWindow(args);
	}
	else if (command == "LoadStoredParameters") {
		loadStoredParameters(args);
	}
	else if (command == "StoreAUParameters") {
		storeParameters(args);
	}
	else if (command == "StoreLinkParameters") {
		storeParameters(args);
	}
	else if (command == "StoreParameters") {
		storeParameters(args);
	}
	else if (command == "ChangeShowTextStatus") {
		changeShowTextStatus(args);
	}
	else if (command == "SetShowTextTxt") {
		setShowTextTxt(args);
	}
	else if (command == "MarkModuleComplete") {
		//markModuleComplete();
		setSCOCompletionStatus(args);
	}

	else if (command == "SetSCORMObjNotAttempted") {
		setObjCompletionStatus(args, "not attempted");
	}
	else if (command == "SetSCORMObjIncomplete") {
		setObjCompletionStatus(args, "incomplete");
	}
	else if (command == "SetSCORMObjCompleted") {
		setObjCompletionStatus(args, "completed");
	}

	else if (command == "SetSCORMObjPassed") {
		setObjSuccessStatus(args, "passed");
	}
	else if (command == "SetSCORMObjFailed") {
		setObjSuccessStatus(args, "failed");
	}

	else if (command == "SetSCORMObjRelativeScore") {
		setSCORMObjRelativeScore(args);
	}
	else if (command == "GetSCOCompletionStatus") {
		getSCOCompletionStatusFlash(args);
	}
	else if (command == "GetObjectiveSuccessStatus") {
		getObjSuccessStatusFlash(args);
	}
	else if (command == "GetObjectiveCompletionStatus") {
		getObjCompletionStatusFlash(args);
	}

	else if (command == "SetSCOCompletionStatus") {
		setSCOCompletionStatus(args);
	}
	else if (command == "SetSCOSuccessStatus") {
		setSCOSuccessStatus(args);
	}

	else if (command == "ExitSCO") {
		if (parameterMode == "LMS") {
			var idx = args.indexOf("|");

			var navRequest = args.substring(0, idx);
			var exitParam  = args.substring(idx + 1);

			exitSCO(navRequest, exitParam);
		}
	}
	else if (command == "ConfirmExit") {
		confirmExit();
	}
	else if (command == "Abort") {
		alert(args);
		window.close();
	}
	else if (command == "eval") {
		eval(args);
	}
	else if (command == "switchToTxtOnly") {
		switchToTxtOnly();
	}

	else {
		var fserr = "FSCommand not recognized. (" + command + ", " + args + ")"
		if (debugMode == 1) {
			alert(fserr);
		}
	}
}

function setSCORMObjRelativeScore(data) {
	var idx = data.indexOf('|');
	if (idx != -1) {
		var objID  = data.substring(0, idx);
		var score  = data.substring(idx + 1);
		setObjScoreScaled(objID, score);
	}
	else {
		alert("INVALID DATAIN setSCORMObjRelativeScore: " + data);
	}
}

function confirmExit() {
	var mov        =  InternetExplorer ? CarneyContentShell : document.CarneyContentShell;
	var answer     = confirm("Are you sure you want to exit?");
	var answerFlag = (answer) ? "confirmed" : "cancelled";
	mov.SetVariable("_level0.exitConfirmationStatus", answerFlag);
}

function jumpToPage(pgNbr) {
	var mov        =  InternetExplorer ? CarneyContentShell : document.CarneyContentShell;
	mov.SetVariable("_level0.jumpToPageIdx", pgNbr);
}

function loadStoredParameters(args) {
	var parameterData = getStoredParameters();
	parseAndSetParameters(parameterData, "_level0.params.");

	var mov =  InternetExplorer ? CarneyContentShell : document.CarneyContentShell;
	mov.SetVariable("_level0.paramsLoaded",  1);
}


function parseAndSetParameters(paramString, tgtObj) {
	var myMovie = getMovieObject(movieName);

	if (paramString != false) {
		var returnArraySize = customSplit(paramString, "&", "parameter");
		for (var i = 0; i < returnArraySize; i++) {
			var size = customSplit(parameter[i], "=", "pair");
			myMovie.SetVariable(tgtObj + pair[0], pair[1]);
		}
	}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var startDate;
var mode;
var scormEntry;
var lessonStatus;		// SCORM 1.2 ONLY
var completionStatus;		// SCORM 2004 ONLY
var successStatus;		// SCORM 2004 ONLY


var MODE_PARAM   = (scormVer == "1.2") ? "cmi.core.lesson_mode"   : "cmi.mode";
//var DATA_PARAM   = (scormVer == "1.2") ? "cmi.suspend_data"       : "cmi.suspend_data";
var TIME_PARAM   = (scormVer == "1.2") ? "cmi.core.session_time"  : "cmi.session_time";
var EXIT_PARAM   = (scormVer == "1.2") ? "cmi.core.exit"          : "cmi.exit";
var DATA_PARAM   = (scormVer == "1.2") ? "cmi.suspend_data"       : "cmi.location";
var ENTRY_PARAM  = (scormVer == "1.2") ? "cmi.entry"              : "cmi.entry";  // VERIFY 1.2 PARAM

function getObjSuccessStatusFlash(tgtObjID) {
	var stat = getObjSuccessStatus(tgtObjID);
	setFlashVar("_level0." + tgtObjID + "Status", stat);
}

function getObjCompletionStatusFlash(tgtObjID) {
	var stat = getObjCompletionStatus(tgtObjID);
	setFlashVar("_level0." + tgtObjID + "Status", stat);
}

function getSCOCompletionStatusFlash() {
	var stat = getSCOCompletionStatus();
	setFlashVar("_level0.scoCompletionStatus", stat);
}

function setFlashVar(varName, val) {
	var mov  =  InternetExplorer ? CarneyContentShell : document.CarneyContentShell;

	mov.SetVariable(varName, val);
	mov.SetVariable("_level0.getSCORMIsReady", 1);
}


function getSCOSuccessStatus() {
	return (scormVer == "2004") ? successStatus : lessonStatus;
}

function setSCOSuccessStatus(status) {
	if ((mode == "review")  ||  (mode == "browse") ) {
		return;
	}

	if (scormVer == "2004") {
		//  status should be either "passed" or "failed"
		if (status == successStatus) {
			return;
		}
		//alert("setting SCO success status to " + status);
		result = doSCORMSetValue("cmi.success_status", status);
		successStatus = status;
	}
	else {
// REVISIT ARE OTHER VALUES ALLOWED???
		//  status should be either "completed" or "incomplete"
		if (status == lessonStatus) {
			return;
		}
		result = doSCORMSetValue("cmi.core.lesson_status", status);
		lessonStatus = status;
	}
}



function getSCOCompletionStatus() {
	return (scormVer == "2004") ? completionStatus : lessonStatus;
}

function setSCOCompletionStatus(status) {
	if ((mode == "review")  ||  (mode == "browse") ) {
		return;
	}
	if (scormVer == "2004") {
		//  status should be either "completed" or "incomplete"

		if (status == completionStatus) {
			return;
		}
		if (completionStatus != "completed") {
			//alert("setting SCO completion status to " + status);
			result = doSCORMSetValue("cmi.completion_status", status);
			completionStatus = status;
		}
	}
	else {
		setSCOSuccessStatus(status);
	}
}

function getObjSuccessStatus(tgtObjID) {
	var objTag = getTagForObjID(tgtObjID);
	//alert("getting success status for " + objTag);
    return doSCORMGetValue(objTag + ".success_status");
}

function setObjSuccessStatus(tgtObjID, status) {
	//  status should be one of: passed, failed

	var objTag = getTagForObjID(tgtObjID);
	//alert("setting " + objTag + ".success_status to " + status);
    doSCORMSetValue(objTag + ".success_status", status);
}

function getObjCompletionStatus(tgtObjID) {
	var objTag = getTagForObjID(tgtObjID);
    return doSCORMGetValue(objTag + ".completion_status");
}

function setObjCompletionStatus(tgtObjID, status) {
	//  Status should be one of: "completed", "incomplete", "not attempted"

	var objTag = getTagForObjID(tgtObjID);
	//alert("setting " + objTag + ".completion_status to " + status);
    doSCORMSetValue(objTag + ".completion_status", status);
}


function getObjScoreScaled(tgtObjID) {
	var objTag = getTagForObjID(tgtObjID);
	return doSCORMGetValue(objTag + ".score.scaled");
}

function setObjScoreScaled(tgtObjID, score) {
	//  score should be nbr between 0 and 1 inclusive
	var objTag = getTagForObjID(tgtObjID);
	doSCORMSetValue(objTag + ".score.scaled", score);
}



function LMSInitialize() {
	var result  = doSCORMInitialize();

	startDate   = new Date().getTime();
	mode        = doSCORMGetValue(MODE_PARAM);

	if (scormVer == "2004") {
		completionStatus = doSCORMGetValue("cmi.completion_status");
		successStatus    = doSCORMGetValue("cmi.success_status");
	}
	else {
		lessonStatus = doSCORMGetValue("cmi.core.lesson_status");
	}

	//scormEntry = doSCORMGetValue(ENTRY_PARAM);

	if ((lessonStatus == "not attempted") || (completionStatus == "not attempted") || (completionStatus == "unknown")) {
		setSCOCompletionStatus("incomplete");
	}

}

function exitSCO(navRequest, exitParam) {
	//REVISIT NEED TO MAKE SURE THESE ARE CONSISTENT

	//  Valid SCORM 2004 values for adl.nav.request are:
	//
	//          continue
	//          previous
	//          choice
	//          exit
	//          exitAll
	//          abandon
	//          abandonAll
	//          suspendAll
	//          _none_


	if ((navRequest != undefined) && (navRequest != "")) {
		doSCORMSetValue("adl.nav.request", navRequest);
	}

	//  Valid SCORM 2004 values for EXIT_PARAM are:
	//
	//          suspend
	//          timeout
	//          normal
	//          ""

	if (exitParam == undefined) {
		exitParam = "suspend";
	}

	doSCORMSetValue(EXIT_PARAM, exitParam);

	var result;

	result = LMSSetSessionTime();
	result = doSCORMCommit();

	doSCORMTerminate();
}



function LMSGetParameters(args) {
	return doSCORMGetValue(DATA_PARAM);
}

function LMSStoreParameters(args) {
	doSCORMSetValue(DATA_PARAM, args);
}

function LMSSetSessionTime() {
	var formattedTime = "00:00:00.0";

	if (startDate != 0) {
		var currentDate    = new Date().getTime();
		var elapsedSeconds = ( (currentDate - startDate) / 1000 );
		var formattedTime  = convertTotalSeconds( elapsedSeconds );
	}

	doSCORMSetValue(TIME_PARAM, formattedTime);
}


function getTagForObjID(tgtObjID) {
	var childCount = doSCORMGetValue("cmi.objectives._count");

	for (var i = 0; i < childCount; i++) {
		var tempObjID = doSCORMGetValue("cmi.objectives." + i + ".id");
		if (tempObjID == tgtObjID) {
			return "cmi.objectives." + i;
		}
	}
	return "";
}



/*******************************************************************************
** this function will convert seconds into hours, minutes, and seconds in
** CMITimespan type format - HHHH:MM:SS.SS (Hours has a max of 4 digits &
** Min of 2 digits
*******************************************************************************/
function convertTotalSeconds(ts) {
	var sec = (ts % 60);

	ts     -= sec;
	var tmp = (ts % 3600);  //# of seconds in the total # of minutes
	ts     -= tmp;              //# of seconds in the total # of hours

	// convert seconds to conform to CMITimespan type (e.g. SS.00)
	sec = Math.round(sec*100)/100;

	var strSec         = new String(sec);
	var strWholeSec    = strSec;
	var strFractionSec = "";

	if (strSec.indexOf(".") != -1) {
		strWholeSec    =  strSec.substring(0, strSec.indexOf("."));
		strFractionSec = strSec.substring(strSec.indexOf(".")+1, strSec.length);
	}

	if (strWholeSec.length < 2) {
		strWholeSec = "0" + strWholeSec;
	}
	strSec = strWholeSec;

	if (strFractionSec.length) {
		strSec = strSec+ "." + strFractionSec;
	}


	if ((ts % 3600) != 0 )
		var hour = 0;
	else
		var hour = (ts / 3600);

	if ( (tmp % 60) != 0 )
		var min = 0;
	else
		var min = (tmp / 60);

	if ((new String(hour)).length < 2)
		hour = "0"+hour;

	if ((new String(min)).length < 2)
		min = "0"+min;

	var rtnVal = hour+":"+min+":"+strSec;
	if (scormVer == "2004") {
		rtnVal = "PT" + hour + "H" + min + "M" + strSec + "S";
	}

	return rtnVal;
}

