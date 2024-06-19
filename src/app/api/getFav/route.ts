export async function GET() {
  let uri = "http://localhost:3001/fav";
  const res = await fetch(uri);
  const data = await res.json();
}
