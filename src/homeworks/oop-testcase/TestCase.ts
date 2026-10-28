export class TestCase {
  id: string;
  title: string;
  steps: string[] = [];
  expectedResult: string;
  status = "NotRun";

  constructor(id: string, title: string, expectedResult: string) {
    this.id = id;
    this.title = title;
    this.expectedResult = expectedResult;
  }

  addStep(step: string): void {
    this.steps.push(step);
  }

  run(actualResult: string): string {
    if (actualResult === this.expectedResult) {
      this.status = "Pass";
    } else {
      this.status = "Fail";
    }

    return this.status;
  }

  reset(): void {
    this.status = "NotRun";
  }

  printSummary(): void {
    console.log(
      `${this.id} + ${this.title}\n` +
        `Steps: ${this.steps.length} | Expected: "${this.expectedResult}" | Status: ${this.status}`,
    );
  }
}
