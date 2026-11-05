import { EntryHall } from "./entry_hall.ts";

export class Bathroom {
  private readonly visitorName: string;

  constructor(visitorName: string) {
    this.visitorName = visitorName;
    console.log(`Navšetvník ${this.visitorName} vstupil na tolaety.`);
  }

  returnToEntryHall(): EntryHall {
    console.log(
      `Návšetvník ${this.visitorName} se vrací z toalet do vstupní haly`,
    );
    return new EntryHall(this.visitorName);
  }

  washHands() {
    console.log(`Návštevník ${this.visitorName} si umyl/a ruce`);
    return this;
  }
}
