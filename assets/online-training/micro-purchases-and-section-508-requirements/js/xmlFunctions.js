var lessonData;
/*function initialize(){
	 var lessonData = loadXML('data.xml');
	document.getElementById('test').innerHTML = lessonData.topics.topic[0]['@attributes'].name+'<br>';
	document.getElementById('test').innerHTML += lessonData.topics.topic[0].page[0]['@attributes'].name+'<br>';
	document.getElementById('test').innerHTML += lessonData.topics.topic[0].page.length+'<br>';
	
	var text='';
	
	for (i=0;i<lessonData.topics.topic.length;i++)
	{
		text+='topic name='+lessonData.topics.topic[i]['@attributes'].name+'<br>';
		for (n=0;n<lessonData.topics.topic[i].page.length;n++)
		{
			text+='page name ='+lessonData.topics.topic[i].page[n]['@attributes'].name+'<br>';
		}
	}
	document.getElementById('test').innerHTML =text;
	

}*/

function loadXML(xmlURL) {
	if (window.XMLHttpRequest)
	   {// code for IE7+, Firefox, Chrome, Opera, Safari
	   xmlhttp=new XMLHttpRequest();
	   }
	 else
	   {// code for IE6, IE5
	   xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	   }
	 xmlhttp.open("GET",xmlURL,false);
	 xmlhttp.send();
	 xmlDoc=xmlhttp.responseXML; 
	
	 //alert( JSON.stringify(xmlToJson(xmlDoc)));
	 return xmlToJson(xmlDoc);
	 
	 

}


// Changes XML to JSON
function xmlToJson(xml) {
	
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};

