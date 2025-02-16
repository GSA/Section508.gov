function Lesson(xml){
	this.xml=xml;
	this.xmlData=loadXML(xml);
	this.xmlData=this.xmlData.xml;
}

Lesson.prototype.getFileName(t,s){
	return this.xmlData.topics.topic[t].page[s]['@attributes'].filename;
}

Lesson.prototype.getTotalPages(){
	
}
