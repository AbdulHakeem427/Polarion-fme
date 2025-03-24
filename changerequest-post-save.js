class RiskRule {
  constructor(severity, occurrence, riskLevel) {
      this.severity = severity;
      this.occurrence = occurrence;
      this.riskLevel = riskLevel;
  }
  matches(severity, occurrence) {
      return this.severity === severity && this.occurrence === occurrence;
  }
}
class RiskEvaluator {
  constructor() {
      this.rules = [
          new RiskRule("critical", "improbable", "zone1"),
          new RiskRule("negligible", "occasional", "zone1"),
          new RiskRule("improbable", "critical", "zone1"),
          new RiskRule("major", "remote", "zone1"),
          new RiskRule("negligible", "frequent", "zone2"),
          new RiskRule("minor", "common", "zone2"),
          new RiskRule("catastrophic", "improbable", "zone2"),
      ];
      this.defaultRiskLevel = "zone3";
  }

  determineRiskLevel(severity, occurrence) {
      for (var rule of this.rules) {
          if (rule.matches(severity, occurrence)) {
              return rule.riskLevel;
          }
      }
      return this.defaultRiskLevel;
  }
}

// Logger setup
var logFile = new java.io.FileWriter("./logs/main/changerequest-post-save.log", false);
var logWriter = new java.io.BufferedWriter(logFile);
var currentDateTime = new java.util.Date().toString();

try {
  // Extract severity and occurrence custom fields
  var severityOfHarm = workItem.getCustomField("severityOfHarm");
  var occurrenceOfHarm = workItem.getCustomField("occurrenceOfHarm");
  logWriter.write(currentDateTime + "\tworkitem: " + severityOfHarm + ", " + occurrenceOfHarm + "\n");

  // Use RiskEvaluator class
  var evaluator = new RiskEvaluator();
  var riskLevel = evaluator.determineRiskLevel(severityOfHarm.getId(), occurrenceOfHarm.getId());

  // Apply the determined risk level
  workItem.setEnumerationValue("risklevel", riskLevel);

  logWriter.write(currentDateTime + "\tRisk Level Set: " + riskLevel + "\n");

  // Save the work item
  workItem.save();
} catch (error) {
  logWriter.write(currentDateTime + "\tRuntime Exception Occurred: " + error + "\n");
} finally {
  logWriter.flush();
}
