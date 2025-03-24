//Log setup
var logFile = new java.io.FileWriter("./logs/main/actionItem-post-save.log", false); 
var logWriter = new java.io.BufferedWriter(logFile); 
var currentDateTime = new java.util.Date().toString();
var errorMessage = "";

function checkWorkItemLink(workItem) {   
    var str = workItem.getId();
	var replaced = str.replace(/\D/g, ''); // 👉️ '123'
    var num;
	if (replaced !== ''){
		num = Number(replaced); // 👉️ 123
	}
	var value1 = String(workItem.getCustomField("applicable").getName());
	var newTxt = value1.split('(');
	for (var i = 1; i < newTxt.length; i++) {
			var value = newTxt[i].split(')')[0];
	}	 	
	workItem.setCustomField("aItem",projectID+"-AI-"+value+"-"+num);
    workItem.save();	
}
	// Main Business Logics Starts Here
try {
    var projectID = workItem.getProjectId();
    var workItemID = workItem.getId();

	checkWorkItemLink(workItem);
	
} catch (runtimeException) {
    logWriter.write(currentDateTime + "\tRuntime Exception Occured: " + runtimeException + "\n");
}
logWriter.flush();
errorMessage;