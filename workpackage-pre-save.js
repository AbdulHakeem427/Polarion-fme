var logFile = new java.io.FileWriter("./logs/main/status-change.log", true); // Append mode
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
 
try {
    var parentWorkItems = workItem.getLinkedWorkItemsDirect();
    var childWorkItems = workItem.getLinkedWorkItemsBack();
   
    for (var i = 0; i < parentWorkItems.length; i++) {
        var parentStatus = parentWorkItems[i].getStatus().getId();  
        logWriter.write(currentDateTime + "\t Parent Status: " + parentStatus + "\n");  
         for (var j = 0; j < childWorkItems.length; j++) {
            var childStatus = childWorkItems[j].getStatus().getId();
            logWriter.write(currentDateTime + "\t Child Status Before Update: " + childStatus + "\n");
        }
    }

} catch (error) {
    logWriter.write(currentDateTime + "\t Error: " + error + "\n");
} finally {
    logWriter.flush();
    logWriter.close(); // Close the writer to prevent file locks
}