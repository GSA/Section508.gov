//  Controller baseline established 10/9/2007
var showLaunchPageOptionsForm = true;
var wndw;

function launchCurrent() {
	launchModule(false);
}
function launchNew(){
	launchModule(true);
}
function launchModule(refresh){
	var tgtURL = getModuleHTMLink(refresh);
	launchURL(tgtURL);
}

function launchBrowserTest() {
	launchURL(pathToRoot + "common/cw/htm/browsertest.htm");
}

function launchURL(url) {
	var wndwFeatures = "width=" + flashwidth + ",height=" + flashheight + ",location=0,resizable=0,status=0,scrollbars=0,menubar=0,titlebar=0";
	var myWindow = window.open(url, 'content', wndwFeatures);
	if (myWindow)
		myWindow.focus();
}

function getModuleHTMLink(refresh){
	return dfltModulePath + "module.htm" + getModeParamString(refresh);
}

function getModeParamString(refresh) {
	var paramStr = getURLParamsString();

	var frm = document.forms[0];
	if (frm.debugMode.checked) {
		paramStr +="debugMode=1&";
	}
	if (frm.debugBehavior.checked) {
		paramStr +="debugBehavior=1&";
	}
	if (frm.reviewerMode.checked) {
		paramStr +="reviewerMode=1&";
	}
	if (frm.showTextEditMode.checked) {
		paramStr +="showTextEditMode=1&";
	}
	if (refresh){
		paramStr +="refresh=1&";
	}
		
	return (paramStr == "") ? "" : "?" + paramStr;
}

//  This function is used to ensured that all parameters passed into
//  this page are relayed to module.htm.
function getURLParamsString() {
	var paramStr = "";
	for (var paramName in urlParams) {
		paramStr = paramStr + paramName + "=" + urlParams[paramName] + "&";
	}
	return paramStr;
}

function writeLaunchPage() {
	var wrapper = document.getElementById("wrapper");
	var launchNewLink = document.getElementById("launchNewLink");
	var launchCurrentLink = document.getElementById("launchCurrentLink");
	var basicTestPageDiv = document.getElementById("basicTestPageDiv");
	launchNewLink.onclick = function (){launchNew(); return false;};
	launchNewLink.href = getModuleHTMLink();
	launchNewLink.target = "_blank";
	launchCurrentLink.onclick = function (){launchCurrent(); return false;};
	launchCurrentLink.href = getModuleHTMLink();
	launchCurrentLink.target = "_blank";
	//basicTestPageDiv.innerHTML = basicTestPage();
	
	var options = document.getElementById("options");
	options.style.display = showLaunchPageOptionsForm ? "block" : "none";
	launchNewLink.innerHTML = "Launch New <b>" + shortTitle + "</b>";
	launchCurrentLink.innerHTML = "Continue Current <b>" + shortTitle + "</b>";
	
}
