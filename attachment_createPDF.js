var logFile = new java.io.FileWriter("./logs/main/test.log", false);
var logWriter = new java.io.BufferedWriter(logFile); 
var currentDateTime = new java.util.Date().toString();

try 
{
	var workItem = workflowContext.getTarget();
    var projectID = workItem.getProjectId();
    var workItemID = workItem.getId();
    var workItemStatus = workItem.getStatus().getId();
	var Attachment = workItem.getAttachments();
	logWriter.write(currentDateTime + "\tworkItemID : " + workItemID + "\tworkItemStatus : " + workItemStatus + "\n");
	
	if((Attachment.size() > 0) && ((workItemStatus) == "approved") || (workItemStatus == "pendingApproval"))
	{			
		var richPageManager = trackerService.getRichPageManager();
		var templateText = richPageManager.getRichPage().project(projectID).spaceAndName('_default', 'External Documents').getHomepageContent();
				
		var attchmntTitle = Attachment.get(0).getTitle();				
		var attchmntName = Attachment.get(0).getFileName();
		var fileExtnType = attchmntName.split('.');
		logWriter.write(currentDateTime + "\tattchmntTitle : " + attchmntTitle + "\n");
		var AttchmntsSec = workItem.getCustomField("attachmentSection").getId().replaceAll('_'," ");
		
		if((fileExtnType[fileExtnType.length - 1]) == "pdf")
		{	
			var reportID = "Attachment_" + workItemID;
			logWriter.write(currentDateTime + "\tReport ID : " + reportID + "\n");	
								
			if(attchmntTitle == null)
				attchmntTitle = attchmntName;		
			
			var filename = '"' + attchmntName + '"';
			var wiID = '"' + workItemID + '"';
			var PageContent = templateText.toString().replace('text/html:',"").replace('$attchmntTitle',filename).replace('$workItemId',wiID).replace('External Document Template',attchmntTitle);
			var textSet = new com.polarion.core.util.types.Text("text/html", PageContent);
			
			var richPage = richPageManager.exists().project(projectID).spaceAndName(AttchmntsSec, reportID);  
			logWriter.write(currentDateTime + "\tReport Exist or not : " + richPage + "\n");

			if(richPage)
			{
				//richPageManager.getRichPage().project(projectID).spaceAndName('_default', reportID).delete();
				logWriter.write(currentDateTime + "\tReport Exist, Updating existing report... " + "\n");	
				var rPage = richPageManager.getRichPage(); 
									
				var createdPage = rPage.project(projectID).spaceAndName(AttchmntsSec,reportID);	
				createdPage.setHomepageContent(textSet);				
				createdPage.setTitle(attchmntTitle);
				createdPage.save();
			}
			else {
				logWriter.write(currentDateTime + "\tReport Not Exist creating New one... " + "\n");
				var rPage = richPageManager.createRichPage();									
				var createdPage = rPage.project(projectID).spaceAndName(AttchmntsSec,reportID);	
				createdPage.setHomepageContent(textSet);				
				createdPage.setTitle(attchmntTitle);
				createdPage.save();
				logWriter.write(currentDateTime + "\tcreated report : " + createdPage + "\n");
			}
		}
		else
			logWriter.write(currentDateTime + "\tRich Page will get create for only pdf file : " + "\n");
	}
	else
		logWriter.write(currentDateTime + "\tPlease check WI attachment and WI Status " + "\n");
} 
catch (runtimeException) {
logWriter.write(currentDateTime + "\tRuntime Exception Occured: " + runtimeException + "\n");
}
logWriter.flush();
logWriter.close();