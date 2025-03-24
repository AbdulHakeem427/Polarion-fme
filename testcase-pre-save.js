//Polarion typically uses Nashorn, so we cant use any filesystem of nodejs so go for java api
var logFile = new java.io.FileWriter("./logs/main/wi.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
var errorMessage = "";
var returnValue = "";
 
try {
    var linkedWorkitems = workItem.getLinkedWorkItems();
    logWriter.write(currentDateTime + "\tRuntime Exception Occured " + linkedWorkitems + "\n");
 
if (linkedWorkitems.length > 1) {

    returnValue = "remove linked workitem If they are more than one";   
}    
    }
catch (runTimeException) {
 
 
}
logWriter.flush();
errorMessage;
returnValue;

