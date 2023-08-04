var item = {
  async create({ name, desc, category }) {
    const res = await fetch("https://beauty-narrat-store.onrender.com/item/create", {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, desc, category }),
    });

    const result = await res.json();
    return result;
  },
  async all() {
    const res = await fetch("https://beauty-narrat-store.onrender.com/item/all", {
      method: "GET",
      // credentials: "include",
      headers: {
        "Content-type": "application/json",
        // Origin: "http://localhost:3000",
      },
    });

    const result = await res.json();
    if (!result?.length) return [];

    return result;
  }
}

export default item
