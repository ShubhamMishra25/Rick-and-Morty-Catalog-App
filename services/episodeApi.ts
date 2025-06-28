export async function fetchEpisodes() {
  const res = await fetch("https://rickandmortyapi.com/api/episode");
  if (!res.ok) throw new Error("Failed to fetch episodes");
  return res.json();
}

export async function fetchEpisodeById(id: string) {
  const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch episode with id ${id}`);
  return res.json();
}
