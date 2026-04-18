export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await fetch(
      "https://services.leadconnectorhq.com/contacts/search",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          Version: "2021-07-28",
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          locationId: process.env.LOCATION_ID,
          page: 1,
          pageLimit: 100
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    const contacts = Array.isArray(data.contacts) ? data.contacts : [];

    return res.status(200).json({
      contacts,
      count: contacts.length,
      raw: data
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
