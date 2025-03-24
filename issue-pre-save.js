// var logFile = new java.io.FileWriter("./logs/main/task1.log", false);
// var logWriter = new java.io.BufferedWriter(logFile);
// var currentDateTime = new java.util.Date().toString();
// // function linkingWorkitemsInIssueType() {
// //     try {
// //         var linkedItems = workItem.getLinkedWorkItems();
// //         var priority = workItem.getPriority();
// //         var priorityName = priority ? priority.getName() : null;
// //         var pId = workItem.getProjectId();
// //         var trackerProject = trackerService.getTrackerProject(pId);
// //         if (linkedItems && linkedItems.length > 0) {
// //             logWriter.write(currentDateTime + " Found linked work items: " + linkedItems.length + "\n");
// //             for (var i = 0; i < linkedItems.length; i++) {
// //                 var linkedPriority = linkedItems[i].getPriority();
// //                 var linkedPriorityName = linkedPriority ? linkedPriority.getName() : null;
// //                 logWriter.write(
// //                     currentDateTime +
// //                     "\t Checking linked item " + linkedItems[i].getId() +
// //                     " with priority " + linkedPriorityName + "\n"
// //                 );
// //                 if (linkedPriorityName !== priorityName) {
// //                     linkedItems[i].setPriority(priority);
// //                     linkedItems[i].save();
// //                     logWriter.write(
// //                         currentDateTime +
// //                         "\t Updated priority for linked item " + linkedItems[i].getId() +
// //                         " to " + priorityName + "\n"
// //                     );
// //                 }
// //             }
// //         }
// //         var itemToLink = trackerService.findWorkItem(pId, "CONF-527");
// //         if (itemToLink != null) {
// //             var role = trackerProject.getWorkItemLinkRoleEnum().wrapOption("implements");
// //             workItem.addLinkedItem(itemToLink, role, null, false);

// //             logWriter.write(currentDateTime + " Linked new item: " + itemToLink.getId() + "\n");
// //         } else {
// //             logWriter.write(currentDateTime + " Work item CONF-527 not found in project " + pId + "\n");
// //         }
// //         workItem.save();
// //         logWriter.write(currentDateTime + " Saved work item changes.\n");
// //     } catch (error) {
// //         logWriter.write(currentDateTime + " Error: " + error.message + "\n");
// //     } finally {
// //         logWriter.close();
// //     }
// // }

// // linkingWorkitemsInIssueType();
// // var errorMessage = "";
// // var returnValue = "";
 
// // function checkRiskLevel(){
// //     var risklevel = workItem.getCustomField("riskLevel");
// //     logWriter.write(currentDateTime + "\t Risk Level = " + risklevel + "\n ");
// //     if (risklevel == null ) {
// //         logWriter.write(currentDateTime + "\t Work item cannot be saved. Risk Level is less than 1.\n ");
// //         returnValue="pleace fil the risk level field ";
// //     } 
// // }
// // function checkTestCoverage(){
// //     try {
// //         var testCoverage = workItem.getCustomField("testCoverage");
// //         logWriter.write(currentDateTime + "\t Test Coverage = " + testCoverage + "\n ");
// //         if ( testCoverage ==null) {
// //             returnValue="pleace fil the test Coverage field ";
// //         } 
     
// //     } catch (error) {
// //         logWriter.write(currentDateTime + "\t Error: " + error.message + "\n ");
     
// //     } finally {
// //         logWriter.flush();
// //         logWriter.close();
// //     }
// // }

// var lwi=workItem.getLinkedWorkItems();
//   var statusI=workItem.getStatus();
//   var pId=workItem.getProjectId();
//   //var trackerProject=trackerService.getTrackerProject(pId);
//   if(statusI.equals("approved")){
//     logWriter.write(currentDateTime + "\t Error: " + statusI + "\n ");
     
//       workItem.save();
//   }else{
//       returnValue="Plx check the linkedworkitem";
//   }
// //checkRiskLevel();
// //checkTestCoverage();
// //checkRiskLevelAndBlockTransition()
// //errorMessage;
// returnValue;
var logFile = new java.io.FileWriter("./logs/main/humeraTask.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
var errorMessage = "";
var returnValue = "";

try {
    // var linkedWorkitems = workItem.getLinkedWorkItemsBack();
    // logWriter.write(currentDateTime + " - Retrieved " + (linkedWorkitems ? linkedWorkitems.length : 0) + " linked work items.\n");
    // for (var i = 0; i < linkedWorkitems.length; i++) {
    //     var statuss = linkedWorkitems[i].getStatus().getId();
    //     var workItemId = linkedWorkitems[i].getId();
    //     logWriter.write(currentDateTime + " - Work Item ID: " + workItemId + ", Status: " + statuss + "\n");
    //     returnValue = (statuss=="approved") ? "Work Item ID: ` workItemId ` is approved" : "Work Item ID:  ` workItemId ` is not approved";
    // }
    // workItem.save();

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
                        workItem.setStatus("inprogress"); // Update child status
                        child.save(); // Save changes
                        logWriter.write(currentDateTime + "\t Child Status Updated to: In Progress\n");
                    }
                }
            }
        }
} 
catch (e) {
}
finally {
    logWriter.flush();
    logWriter.close();
}

errorMessage;
returnValue;
