// Adobe Acrobat Detection  v1.0
// documentation: http://www.dithered.com/javascript/acrobat_detect/index.html
// license: http://creativecommons.org/licenses/by/1.0/
// code by Chris Nott (chris[at]dithered[dot]com)
// modified by kw 04-26-2006


var acrobatVersion = 0;
function getAcrobatVersion() {
	var agent = navigator.userAgent.toLowerCase(); 
	
	// NS3+, Opera3+, IE5+ Mac, Safari (support plugin array):  check for Acrobat plugin in plugin array
	if (navigator.plugins != null && navigator.plugins.length > 0) {
      for (i=0; i < navigator.plugins.length; i++ ) {
         var plugin = navigator.plugins[i];
         if (plugin.name.indexOf("Adobe Acrobat") > -1) {
            acrobatVersion = parseFloat(plugin.description.substring(30));
         }
      }
	}
   
	// IE4+ Win32:  attempt to create an ActiveX object using VBScript
	else if (agent.indexOf("msie") != -1 && parseInt(navigator.appVersion) >= 4 && agent.indexOf("win")!=-1 && agent.indexOf("16bit")==-1) {
	   document.write('<scr' + 'ipt language="VBScript"\> \n');
	   document.write('on error resume next \n');
		document.write('dim obAcrobat \n');
		document.write('dim obAcrobat7 \n');
		document.write('set obAcrobat = CreateObject("PDF.PdfCtrl.6") \n');
		document.write('set obAcrobat7 = CreateObject("acroPDF.PDF.1") \n');
		document.write('if IsObject(obAcrobat) then \n');
		document.write('acrobatVersion = 6 \n');
		document.write('end if \n');
		document.write('if acrobatVersion < 6 and IsObject(obAcrobat) then \n');
		document.write('acrobatVersion = 5 \n');
		document.write('end if \n');
		document.write('if IsObject(obAcrobat7) then \n');
		document.write('acrobatVersion = 7 \n');
		document.write('end if');
		document.write('</scr' + 'ipt\> \n');
  }

	// Can't detect in all other cases
	else {
		acrobatVersion = acrobatVersion_DONTKNOW;
	}

	return acrobatVersion;
}

acrobatVersion_DONTKNOW = -1;