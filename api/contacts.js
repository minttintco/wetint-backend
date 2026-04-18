export default async function handler(req, res) {
  try {
    const response = await fetch("https://rest.gohighlevel.com/v1/contacts/", {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
