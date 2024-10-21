// Get a single appointment
export async function GET(
  req: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  console.log(req);
  const id = params.id;
  const appointment = {
    id,
    date: "2021-10-01",
    time: "10:00",
    patient: {
      id: 1,
      name: "John Doe",
    },
  };

  return Response.json(appointment);
}
