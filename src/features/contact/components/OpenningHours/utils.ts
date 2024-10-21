function createData(day: string, morning: string, afternoon: string) {
  return { day, morning, afternoon };
}

export const tableRows = [
  createData("Montag", "08:00 - 12:00 Uhr", "14:00 - 18:00 Uhr"),
  createData("Dienstag", "08:00 - 12:00 Uhr", "14:00 - 18:00 Uhr"),
  createData("Mittwoch", "08:00 - 12:00 Uhr", "14:00 - 18:00 Uhr"),
  createData("Donnerstag", "08:00 - 12:00 Uhr", "14:00 - 18:00 Uhr"),
  createData("Freitag", "08:00 - 12:00 Uhr", "14:00 - 18:00 Uhr"),
];
