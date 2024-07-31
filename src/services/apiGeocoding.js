const REVERSE_GEOCODE_API =
  "https://api.bigdatacloud.net/data/reverse-geocode-client";

async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `${REVERSE_GEOCODE_API}?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}

export { getAddress };
