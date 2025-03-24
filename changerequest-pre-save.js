// var logFile = new java.io.FileWriter("./logs/main/humerascript.log", false);
// var logWriter = new java.io.BufferedWriter(logFile);
// var currentDateTime = new java.util.Date().toString();
 
// try {
//     // // Fetch linked work items
//     // var linkedItems = workItem.getLinkedWorkItems();
//     // logWriter.write(currentDateTime + " linkedItems: " + linkedItems + "\n");
 
//     // // Get the project ID and tracker project
//     // var projectId = workItem.getProjectId();
//     // var trackerProject = trackerService.getTrackerProject(projectId);
 
//     // if (linkedItems.size() === 1) {
//     //     // No linked work items; add the appropriate work item
//     //     var itemToLink = trackerService.findWorkItem(projectId, "CONF-515");
//     //     if (itemToLink != null) {
//     //         var role = trackerProject.getWorkItemLinkRoleEnum().wrapOption("implements");
//     //         workItem.addLinkedItem(itemToLink, role, null, false); // Link the item
//     //         logWriter.write(currentDateTime + " Linked item: " + itemToLink.getId() + "\n");
//     //     } else {
//     //         logWriter.write(currentDateTime + " CONF-513 not found in project " + projectId + "\n");
//     //     }
       
//     //     workItem.save(); // Save changes
//     // } else {
//     //     returnValue = "workItem is linked";
//     // }



//     var risklevel = workItem.getCustomField("riskLevel");
//     logWriter.write(currentDateTime + "\t Risk Level = " + risklevel + "\n ");
 
//     if (risklevel==null) {
//         logWriter.write(currentDateTime + "\t Work item cannot be saved. Risk Level is less than 1.\n ");
 
//     } else {
//         logWriter.write(currentDateTime + "\t Work item is valid. Risk Level is acceptable.\n ");
       
//     }
 
 
// } catch (runtimeException) {
//     logWriter.write(currentDateTime + "\tRuntime Exception Occurred: " + runtimeException + "\n");
// }
// logWriter.flush();
var logFile = new java.io.FileWriter("./logs/main/status2.log", false); // Append mode
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
try {
    // var workItemId = workItem.getId();
    // logWriter.write(currentDateTime + "\t Work Item ID: " + workItemId + "\n");
 
    var parentWorkItems = workItem.getLinkedWorkItemsDirect(); // Get linked parent items
 
    for (var i = 0; i < parentWorkItems.length; i++) {
        //var parent = parentWorkItems[i];
        var parentStatus = parentWorkItems[i].getStatus().getId();
        var pworkItemId = linkedWorkitems[i].getId();
        logWriter.write(currentDateTime + "\t Parent Status: " + parentStatus + "parentWorkItems"+parentWorkItems+ "Status "+"\n");
 
        if(parentStatus == "approved") {
            var childWorkItems = workItem.getLinkedWorkItemsBack(); // Get child work items
 
            for (var j = 0; j < childWorkItems.length; j++) {
               // var child = childWorkItems[j];
                var childStatus = childWorkItems[j].getStatus().getId();
                var cworkItemId = linkedWorkitems[i].getId();
                logWriter.write(currentDateTime + "\t Child Status Before Update: " + childStatus +""+child+ "\n");
 
                // if (childStatus !== "inprogress") 
                //     child.save(); // Save changes
                //     logWriter.write(currentDateTime + "\t Child Status Updated to: In Progress\n");
                // }

                returnValue="not"
            }
        }
    }
}catch(error){
    logWriter.write(currentDateTime + "\t Error: " + error + "\n");
}finally {
    logWriter.flush();
    logWriter.close(); // Close the writer to prevent file locks
}