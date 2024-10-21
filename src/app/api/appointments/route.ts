// Get all appointments
export async function GET() {
  const appointments = [
    {
      id: 1,
      date: "2021-10-01",
      time: "10:00",
      patient: {
        id: 1,
        name: "John Doe",
      },
    },
    {
      id: 2,
      date: "2021-10-01",
      time: "11:00",
      patient: {
        id: 2,
        name: "Jane Doe",
      },
    },
  ];

  return Response.json(appointments);
}

// Create a new appointment
export async function POST() {
  const appointment = {
    id: 3,
    date: "2021-10-01",
    time: "12:00",
    patient: {
      id: 3,
      name: "Alice Doe",
    },
  };

  return Response.json(appointment);
}
