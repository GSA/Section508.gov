//required by browsertest.js
var launchPageRequiredFlashVersion = 10;
var launchPageRequiredAcrobatVersion = -1; // the acrobat version check not really used, or tested.
var launchPageRequiredIEVersion = 8;
var launchPageRequiredFFVersion = 9;
var downloadFlashLink = "<a href='http://get.adobe.com/flashplayer/' target='_blank'><img border=\"0\" src=\""+pathToRoot+"common/cw/images/get_flash_player.gif\" alt=\"Get Adobe Flash player\" /></a>";
var downloadAcrobatLink = "<a href='http://get.adobe.com/reader/' target='_blank'>Download Acrobat Reader</a>";
 var messages = {
	noJavaScript:"Your browser has Javascript turned off. You must have Javascript enabled to view this course. See below for information on how to enable Javascript. Then reload this page.",
	noFlash: "This course requires Flash Player "+launchPageRequiredFlashVersion+" or higher. " + downloadFlashLink,
	wrongFlash: "This course requires Flash Player "+launchPageRequiredFlashVersion+" or higher. " + downloadFlashLink,
	wrongBrowser: "This course has been designed to run in Internet Explorer version 8 or 9, with compatibility mode turned off. You may still be able to run the courseware, however if you experience problems, read below for instructions on upgrading your browser.",
	notCompatible: "This course has been designed to run in Internet Explorer, with compatibility mode turned off.  Please disable compatibility mode and refresh this page.",
	noCookies: "It does not appear that cookies are enabled on your browser. This will prevent the course from bookmarking your progress.",
	noCookies1: 'Test indicates that your system may not be configured to accept cookies. You can still launch the course, however bookmarking may not be available. for instructions on changing your settings, see below.',
	browserTestHeader: "Testing support for...",
	noWin32: "You are not running on a Windows 32-bit platform.  This course is designed to run on Microsoft Windows computers only.",
	popupBlockerEnabled: "It appears as though you are using popup blocker software. This courseware needs to open a window to launch the course... please disable your popup blocker to view the course.",
	wrongAcrobat: "This course has resource content in Adobe Acrobat format. In order to view these resources you must have the Acrobat Reader "+launchPageRequiredAcrobatVersion+" or higher installed. " + downloadAcrobatLink,
	incompatibleHeader: "It appears that your browser configuration may not meet all of the requirements to run this courseware for the following reason:",
	troubleshootMessage: 'Please click <a href=\'' + pathToRoot + 'common/controller/htm/troubleshoot.html\' target=\'_blank\'>here</a> for instructions on how to troubleshoot issues',
	wrongFlashSelectLink: 'This course requires Flash plug-in version '+launchPageRequiredFlashVersion+' or higher. Select the link below to upgrade to the latest version. ',
	incompatible: 'Test indicates that this is not configured appropriately to run this courseware. You may still be able to run the courseware, however if you experience problems, please see below for instructions on how to troubleshoot issues',
	javascript_compatible: '<img src=common/images/reqs_yes.gif alt="JavaScript OK" /> JavaScript',
	javascript_incompatible: '<img src=common/images/reqs_no.gif alt="JavaScript NOT OK" /> JavaScript',
	cookies_compatible: '<img src=common/images/reqs_yes.gif alt="Cookies OK" /> Cookies',
	cookies_incompatible: '<img src=common/images/reqs_no.gif alt="Cookies NOT OK" /> Cookies',
	browser_compatible: '<img src=common/images/reqs_yes.gif alt="Browser Version OK" /> Browser Version',
	browser_incompatible: '<img src=common/images/reqs_no.gif alt="Browser Version NOT OK" /> Browser Version',
	acrobat_compatible: '<img src=common/images/reqs_yes.gif alt="Acrobat OK" /> Acrobat Version',
	acrobat_incompatible: '<img src=common/images/reqs_no.gif alt="Acrobat NOT OK" /> Acrobat Version',
	popup_compatible: '<img src=common/images/reqs_yes.gif alt="Popup Blocker OK" /> Popup Blocker',
	popup_incompatible: '<img src=common/images/reqs_no.gif alt="Popup Blocker NOT OK" /> Popup Blocker',
	flash_compatible: '<img src=common/images/reqs_yes.gif alt="Flash OK" /> Flash ' + launchPageRequiredFlashVersion + '+',
	flash_incompatible: '<img src=common/images/reqs_no.gif alt="Flash NOT OK" /> Flash ' + launchPageRequiredFlashVersion + '+',
	compatible_suffix: "",
	fully_compatible: '<img src=common/images/reqs_yes.gif alt="Browser Meets Criteria" /> Your browser meets the criteria to run this courseware.'
	
	
}