export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  const { take = 10, category = "", mode = "selected" } = req.query
  let url = `https://aihot.virxact.com/api/public/items?mode=${mode}&take=${take}`
  if (category) url += `&category=${category}`
  const r = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 Chrome/124.0.0.0 Safari/537.36" }
  })
  const data = await r.json()
  res.status(200).json(data)
}
