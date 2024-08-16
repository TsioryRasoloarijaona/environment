export async function get<T> (url: string): Promise<T> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    console.error("failed fecth");
  }

  const data : T = await res.json();
  return data;
}
