var logFile = new java.io.FileWriter("./logs/main/softwarerequirement_cost.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
var returnvalue = "";
try {
  //  Adding custom field values from linked Work Items (WIs) of the main Work Item
  // and setting these values to the custom fields of the main Work Item.
  //1. get linked wis
  //2. get custom fields values from linked wis
  //3. we need to add custom fileds values
  //4. we have to set added values to main wi custom wis
  // test one ac=100 ec= 150
  // test two ac =50 ec =100
  // main wi ac = 150 ec =250
  // var backlink = workItem.getLinkedWorkItemsBack();
  // var estimatedAdd = 0;
  // var actualAdd = 0;
  // logWriter.write(
  //   currentDateTime + "\tbacklink: " + backlink + "\n"
  // );
  // for (var i = 0; i < backlink.length; i++) {
   
  //   if (backlink[i].getType().getId() == "task") {
  //     logWriter.write(
  //       currentDateTime + "\tlinkedWI: " + backlink[i].getId() + "\n"
  //     );
  //     var estimatedCost = backlink[i].getValue("estimated_cost");
  //     var actualCost = backlink[i].getValue("actual_cost");
  //     estimatedAdd += estimatedCost;
  //     actualAdd += actualCost;
  //     logWriter.write(
  //       currentDateTime + "\testimatedCost: " + estimatedCost + "\n"
  //     );
  //     logWriter.write(
  //       currentDateTime + "\tactualCost: " + actualCost + "\n"
  //     );
  //   }
  // }
  // workItem.setValue("estimated_cost", estimatedAdd);
  // workItem.setValue("actual_cost", actualAdd);
  // workItem.save();
  // logWriter.write(
  //   currentDateTime + "\tworkItem: " + workItem.getId() + "\n"
  // );
  // var lwi=workItem.getLinkedWorkItems();
  // var statusI=workItem.getStatus();
  // var pId=workItem.getProjectId();
  // //var trackerProject=trackerService.getTrackerProject(pId);
  // if(statusI.equals("approved")){
  //     workItem.save();
  // }else{
  //     returnValue="Plx check the linkedworkitem";
  // }
//10-03-2025 ensure the fields are filled below saving the wi

var risklevel = workItem.getCustomField("riskLevel");
var rootCause = workItem.getCustomField("rootCause");
var justification = workItem.getCustomField("justification");
    if (risklevel==null) {
        logWriter.write(currentDateTime + "\t Work item cannot be saved. Risk Level is not filled.\n ");
        returnvalue="Work item cannot be saved. Risk Level is not filled";
    } 
    if (rootCause==null) {
        logWriter.write(currentDateTime + "\t Work item cannot be saved, plz fill root cause.\n ");
        returnvalue="Work item cannot be saved.  plz fill root cause";
    } 
    if (justification==null) {
      logWriter.write(currentDateTime + "\t Work item cannot be saved. plz fill justification. \n ");
      returnvalue="Work item cannot be saved.  plz fill justification.";
  } 
}
catch (runtimeException) {
  
}
logWriter.flush();
returnvalue;