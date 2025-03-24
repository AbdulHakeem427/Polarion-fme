var logFile = new java.io.FileWriter("./logs/main/changerequest-post-save.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
try {
    // Get the current project
    var project =trackerService.getTrackerProject (workItem.getProject().getId());
    logwriter.write(currentDateTime + "\tProject: "+ project + "\n");
    
    // Check for existing work items of type 'systemrequirement' with a specific title
    var query= "type: systemrequirement AND title: Wheel_one";
    var existingItems =trackerService.queryWorkItems (project, query, "id");
    logwriter.write(currentDateTime + "\tExisting Items:" + existingItems.length + "\n");
    if (project != null && existingItems.length === 0) {
    
    //logwriter.write(currentDateTime + "\tNew Work Item Created: "+wi.getId() + "\n");
    var newworkItem= project.createWorkItem();
    var workItemType =project.getWorkItemTypeEnum().wrapOption("systemrequirement");
    newworkItem.setType(workItemType);
    newworkItem.setTitle("Wheel_one");
    
    //newworkItem.setCustomField("estimated_cost", 120);
    newworkItem.save()
    logWriter.write(currentDateTime + "\newworkItem: " + newWorkItem.getId() + "\n");
    } else {
              logwriter.write (currentDateTime + "\twork Item Already Exists. Skipping creation.\n");
    }
    }catch (runtimeException) {
        logWriter.write(currentDateTime + "\tRuntime Exception Occurred: " + runtimeException + "\n");
} finally {
        logWriter.flush();
    }
