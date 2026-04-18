export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const allContacts = [];
    let page = 1;
    const limit = 100;
    let keepGoing = true;

    while (keepGoing) {
      const response = await fetch(
        `https://services.leadconnectorhq.com/contacts/?locationId=${process.env.LOCATION_ID}&limit=${limit}&page=${page}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            Version: "2021-07-28",
            Accept: "application/json"
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return res.status(response.status).json(data);
      }

      const contacts = Array.isArray(data.contacts) ? data.contacts : [];
      allContacts.push(...contacts);

      if (contacts.length < limit) {
        keepGoing = false;
      } else {
        page += 1;
      }
    }

    return res.status(200).json({
      contacts: allContacts,
      count: allContacts.length
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
