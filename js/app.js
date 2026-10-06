console.log("Katalog warsztatów uruchomiony");

let title = "Pierwsza strona";
let seats = 12;
let enrolled = 12;

if (enrolled == 0) {
  title = "Kurs otwarty";
} else if (enrolled < 12) {
  title = "Kurs popularny";
} else if (enrolled == 12) {
  title = "Kurs zamkniety";
} else {
  title = "Kurs niedostepny";
  seats = 0;
  enrolled = 0;
}

console.log(`${title}: wolne ${seats - enrolled} z ${seats}`);
