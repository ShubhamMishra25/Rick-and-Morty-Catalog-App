export async function fetchEpisodes() {
  const res = await fetch("https://rickandmortyapi.com/api/episode");
  if (!res.ok) throw new Error("Failed to fetch episodes");
  return res.json();
}
