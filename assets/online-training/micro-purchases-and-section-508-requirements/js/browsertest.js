var basicTestPageHTML = "";

function basicTestSprintFailure(msg){
	return '<p style="padding-left:10px" class="style1">' + msg + '</p>';
}


function basicTestPage()
{ 
    popupBlockerChecker();
	WM_acceptsCookies = testCookies();	

	compatible = true;

	message    = ""
    
    
	basicTestPageHTML += '<p style="padding-left:10px; font-size:80%;" class="style1">';
	//basicTestPageHTML += messages.browserTestHeader;
	basicTestPageHTML +="Testing support for.."
	basicTestPageHTML += '<br/><br/>';    
	

	//basicTestPageHTML += '<br/>';    
	//basicTestPageHTML += BrowserDetect.version
	//basicTestPageHTML += '<br/>';    

	
	
	performCheck("javascript", (jsver != 0.0), messages.noJavaScript);
	performCheckYellow("popup", !popUpsBlocked, messages.popupBlockerEnabled, messages.popupBlockerEnabled);

    var ieOK = false;
    var ffOK = false;
    //alert(BrowserDetect.browser);
    
    if (BrowserDetect.browser == "Trident")
    {
      
        //Trident is IE's compatability mode.  Trident 5.0 == IE 9
        if (BrowserDetect.version >= (launchPageRequiredIEVersion - 4))
        {
            ieOK = true;
        }
        
         performCheck("browser", (ieOK), messages.notCompatible);
    }
    else
    {
       if (BrowserDetect.browser == "Firefox")
       {
           if (BrowserDetect.version >= launchPageRequiredFFVersion)
           {
               ffOK = false;//This should be updated to for firefox based courseware
           }
       }
       else if (BrowserDetect.browser == "Explorer")
       {
           //alert(BrowserDetect.version); 
           if (BrowserDetect.version >= launchPageRequiredIEVersion)
           {
               ieOK = true;
           }
       }
       
   	performCheck("browser", (ffOK || ieOK ), messages.wrongBrowser);
         
    }


	// Flash Check: calls getFlashVersion in flash_detect.js

		var flashVersion_DONTKNOW = -1;

		var flashVersion = swfobject.getFlashPlayerVersion();//deconcept.SWFObjectUtil.getPlayerVersion(launchPageRequiredFlashVersion, false);

//alert("flashVersion" + flashVersion.major);
		var flashtxt = messages.f;
		if (flashVersion.major >= launchPageRequiredFlashVersion) {				

			performCheckFlash(true, "");

		}

		else if (flashVersion.major > 0) {

			performCheckFlash(false, messages.wrongFlash);

		}

		else if (flashVersion.major == 0) {

			performCheckFlash(false, messages.noFlash);

		}

		else if (flashVersion.major == flashVersion_DONTKNOW || flashVersion.major == null) {

			performCheckFlash(false, messages.noFlash);

		}



	// check cookies
	performCheckYellow("cookies", (WM_acceptsCookies), messages.noCookies,  messages.noCookies1);

			if (launchPageRequiredAcrobatVersion > 0)
				performCheck("acrobat", !isNaN(acrobatVersion) && (acrobatVersion >= launchPageRequiredAcrobatVersion), messages.wrongAcrobat);
		//}
	basicTestPageHTML += '</p>';


	// browser is compatible
	if (compatible) {
		basicTestPageHTML += '<p style="padding-left:10px" class="style1"><font color="#009900" class="style2"><i>'+messages.fully_compatible+'</i></font></p>';
	} else {

		basicTestPageHTML += '<p style="padding-left:10px" class="style1">'+messages.incompatibleHeader+'</p>';
		basicTestPageHTML += message;
		
		basicTestPageHTML += '<p style="padding-left:10px" class="style1">'+messages.troubleshootMessage+'</p>';
	}
	
    return basicTestPageHTML;
    
}

function testCookies() {
	if (document.cookie == '') {
		//  Try to set a cookie.
		document.cookie = 'CarneyCookieTest=yes';
		if(document.cookie.indexOf('CarneyCookieTest=yes') != -1) {
			return true;
		}
	}
	else {
		//  There was already a cookie.
		return true;
	}
	return false;
}

function makeArray(IntarrSize) {
	for (var n = 0; n < IntarrSize; n++) {
		this[n] = "";
	}
	return this;
}

function popupBlockerChecker()
{		
	 var mine = window.open('','','width=1,height=1,left=0,top=0,scrollbars=no');
	 if(mine)
	 {
		popUpsBlocked = false;	
		mine.close();
	 }
	 else
	 {
		popUpsBlocked = true;
	 }	
	 //alert("popupBlockerChecker:" + popUpsBlocked);
}

function performCheckYellow(which, condition, reason, basicTestPageMessage) {	
	if (condition) {
		basicTestPageHTML += '<font color="#009900" class="style2">' + messages[which + "_compatible"] + " " + messages.compatible_suffix + '</font><br />';
	}
	else {
		basicTestPageHTML += '<font color="#FF9900" class="style2">'+messages[which + "_incompatible"] + " " + basicTestPageMessage+'</font><br />';
		compatible = false;
		message  = message + basicTestSprintFailure(reason);
	}
}


function performCheck(which, condition, reason) {	
	if (condition) {
		basicTestPageHTML += '<font color="#009900" class="style2">' + messages[which + "_compatible"] + " " + messages.compatible_suffix + '</font><br />';
	}
	else {

		basicTestPageHTML += '<font color="#FF0000" class="style2">'+messages[which + "_incompatible"] + " " + messages.incompatible+'</font><br />';
		compatible = false;
		message  = message + reason;
	}
	

}

function performCheckFlash(condition, reason) {
	if (condition) {
		basicTestPageHTML += '<font color="#009900" class="style2">' + messages.flash_compatible + " " + messages.compatible_suffix + '</font><br />';
	}
	else {
		basicTestPageHTML += '<font color="#FF0000" class="style2">'+messages.flash_incompatible + " " + messages.wrongFlashSelectLink+'</font><br />';
		compatible = false;
		message  = message + basicTestSprintFailure(reason);
	}	
}