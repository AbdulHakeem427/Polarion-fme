var logFile = new java.io.FileWriter("./logs/main/changerequest-post-save.log", false);
var logWriter = new java.io.BufferedWriter(logFile);

var req=com.polarion.core.util.types.Text.plain("Thisn is a requirement workitemn ");
var workitem=workItem.getStatus().getId();
if(workitem=="reopen"){
    logWriter.write(workitem);
    workItem.createComment(text).save();
}