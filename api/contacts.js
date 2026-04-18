export default async function handler(req, res) {
  try {
    const response = await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        Version: "2021-07-28",
        Accept: "application/json"
      }
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
