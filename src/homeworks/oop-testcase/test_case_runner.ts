import { TestCase } from "./TestCase.ts";

const testCase = new TestCase(
  "TC-1",
  "Login with valid creds",
  "Dashobard id displayed",
);

testCase.addStep("Fill");
testCase.addStep("Click");
testCase.addStep("Observe");

testCase.run("Login failed");
testCase.printSummary();
testCase.reset();
testCase.run("Dashobard id displayed");
testCase.printSummary();
