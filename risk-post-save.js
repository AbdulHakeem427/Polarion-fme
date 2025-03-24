var logFile = new java.io.FileWriter("./logs/main/createcomment.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();
try {
var wi = workItem.getStatus().getId();
var text = com.polarion.core.util.types.Text.plain("i'm a polarion developer");
 
if (wi == "rejected") {
    logWriter.write(wi);
    workItem.createComment(text).save();
}
}
catch(error){
    logWriter.write(currentDateTime + "\t Runtime Exception Occured : " + error + "\n");
}
logWriter.flush() ;