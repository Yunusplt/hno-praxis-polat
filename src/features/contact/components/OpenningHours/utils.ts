function createData(day: string, morning: string, afternoon: string) {
  return { day, morning, afternoon };
}

export const tableRows = [
  createData("Montag", "09:00 - 13:00 Uhr", "14:00 - 17:00 Uhr"),
  createData("Dienstag", "09:00 - 13:00 Uhr", "14:00 - 17:00 Uhr"),
  createData("Mittwoch", "09:00 - 13:30 Uhr", "geschlossen"),
  createData("Donnerstag", "09:00 - 13:00 Uhr", "14:00 - 17:00 Uhr"),
  createData("Freitag", "09:00 - 13:30 Uhr", "geschlossen"),
];
