var logFile = new java.io.FileWriter("./logs/main/status.log", false); // Append mode
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
try {
    var workItemId = workItem.getId();
    logWriter.write(currentDateTime + "\t Work Item ID: " + workItemId + "\n");
 
    var parentWorkItems = workItem.getLinkedWorkItemsDirect(); // Get linked parent items
 
    for (var i = 0; i < parentWorkItems.length; i++) {
        var parent = parentWorkItems[i];
        var parentStatus = parent.getStatus().getId();
        logWriter.write(currentDateTime + "\t Parent Status: " + parentStatus + "\n");
 
        if (parentStatus === "approved") {
            var childWorkItems = workItem.getLinkedWorkItemsBack(); // Get child work items
 
            for (var j = 0; j < childWorkItems.length; j++) {
                var child = childWorkItems[j];
                var childStatus = child.getStatus().getId();
                logWriter.write(currentDateTime + "\t Child Status Before Update: " + childStatus +""+child+ "\n");
 
                if (childStatus !== "inprogress") {
                    child.setStatus("inprogress"); // Update child status
                    child.save(); // Save changes
                    logWriter.write(currentDateTime + "\t Child Status Updated to: In Progress\n");
                }
            }
        }
    }
}catch(error){
    logWriter.write(currentDateTime + "\t Error: " + error + "\n");
}finally {
    logWriter.flush();
    logWriter.close(); // Close the writer to prevent file locks
}