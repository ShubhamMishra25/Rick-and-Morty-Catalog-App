export async function fetchCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  if (!res.ok) throw new Error("Failed to fetch characters");
  return res.json();
}

export async function fetchCharacterById(id: string) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch character with id ${id}`);
  return res.json();
}