function Lesson(xml){
	this.xml=xml;
	this.xmlData=loadXML(xml);
	this.xmlData=this.xmlData.xml;
	this.currentPageNumber='1';
	this.totalPageNumber=this.getTotalPages();
	this.setLMSVars();
	
	
}

Lesson.prototype.getFileName=function(t,s){
	return this.xmlData.topics.topic[t].page[s]['@attributes'].filename;
}
Lesson.prototype.getNextPage=function(t,s){
	
	if (this.xmlData.topics.topic[t].page.length == (s+1))
		{
			if (this.xmlData.topics.topic.length== (t+1))
				{
					return [t,s];
				}
			else
			{
				return [t+1,0];
			}
		}
	else
		return [t,s+1];
	
}

Lesson.prototype.getPrevPage=function(t,s){
	
	if (s==0)
		{
			if (t==0)
				{
					return [t,s];
				}
			else
				{
					t--;
					return [t, this.xmlData.topics.topic[t].page.length-1];
				}
			
		}
	else
		{
			return [t,s-1];
		}
}

Lesson.prototype.getTotalPages=function(){
	var count=0;
	for (i=0;i<this.xmlData.topics.topic.length;i++)
		{
			for (n=0;n<this.xmlData.topics.topic[i].page.length;n++)
			{
				count++;
			}
		}
	this.totalPageNumber=count+'';
	return count;
	
}

Lesson.prototype.updateCurrentPageNumber=function(t,s){
	var count=0;
	if (t==0){
		this.currentPageNumber= s+1;
	}
	else {
		t--;
		while (t>=0){
			count += this.xmlData.topics.topic[t].page.length;
			t--;
			
		}
		this.currentPageNumber=count+s+1;
		
	}
	
}

Lesson.prototype.getNumPage=function(n){
	var count=0;
	var t=0;
	var s=0;
		
			for (var i=0;i<this.xmlData.topics.topic.length;i++)
				{	
					for (var x=0;x<this.xmlData.topics.topic[i].page.length;x++)
					{
						t=i;
						s=x;
						count++;
						if (count == n)
						{
							return [t,s];
						}
					}
				}
		
	return false;

}

Lesson.prototype.getCourseTitle=function(){
	return this.xmlData.moduleInfo.course['@attributes'].name;
}
Lesson.prototype.getLessonTitle=function(){
	return this.xmlData.moduleInfo.lesson['@attributes'].name;
}
Lesson.prototype.getTopicTitle=function(t){
	return this.xmlData.topics.topic[t]['@attributes'].name;
}
Lesson.prototype.getPageTitle=function(t,s){
	return this.xmlData.topics.topic[t].page[s]['@attributes'].name;
}
Lesson.prototype.getMercuryLessonId=function(){
	return this.xmlData.moduleInfo.lesson['@attributes'].mercID;
}

Lesson.prototype.getMercuryCourseId=function(){
	return this.xmlData.moduleInfo.course['@attributes'].mercID;
}

Lesson.prototype.getCurrentPageNumber=function(){
	return this.currentPageNumber;
}

Lesson.prototype.storeLastPageVisited=function(){
	/* doSCORMSetValue(DATA_PARAM, this.currentPageNumber);
	
	if (this.totalPageNumber==this.currentPageNumber)
	{
		setSCOCompletionStatus('completed');
	}
	doSCORMCommit(); */
	if (!lms)
	{
		lms =new LMSController();
		lms.initialize();
	}
	lms.bookmark(this.currentPageNumber);
	lms.checkForCompletion();
}

Lesson.prototype.setLMSVars = function (){
	if (!lms)
	{
		lms =new LMSController();
		lms.initialize();
	}
	lms.totalNumberOfPages = this.totalPageNumber;
}
