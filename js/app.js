console.log("Katalog warsztatów uruchomiony");

let title = "Kurs";
let seats = 12;
let enrolled = 12;

function showKursData() {
  console.log(`${title}: wolne ${seats - enrolled} z ${seats}`);
}

function getFreeSeats() {
  return seats - enrolled;
}

function setFreeSeats(freeSeats) {
  enrolled = seats - freeSeats;
}

showKursData();
console.log(getFreeSeats());
setFreeSeats(4);
console.log(getFreeSeats());
