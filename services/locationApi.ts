export async function fetchLocations() {
  const res = await fetch("https://rickandmortyapi.com/api/location");
  if (!res.ok) throw new Error("Failed to fetch locations");
  return res.json();
}

export async function fetchLocationById(id: string) {
  const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch location with id ${id}`);
  return res.json();
}
