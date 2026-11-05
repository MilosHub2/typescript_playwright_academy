import { EntryHall } from "./entry_hall.ts";
import { SecondFloor } from "./second_floor.ts";

new EntryHall("Jan Novák")
  .entryBathroom()
  .returnToEntryHall()
  .askReceptionistQuestion("Kde som ?")
  .entryBathroom()
  .washHands()
  .returnToEntryHall();

async function main() {
  const marie = new EntryHall("Marie Dlouhá");
  await marie
    .takeElevatorToSecondFloor()
    .then((secondFloor) => secondFloor.lookAround(3))
    .then((secondFloor) => secondFloor.returnToEntryHallByElevator())
    .then((entryHall) => entryHall.takeElevatorToSecondFloor());
}

main();
