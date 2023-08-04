var price = {
  async add({ price, source, product }) {
    const res = await fetch("https://beauty-narrat-store.onrender.com/price/create", {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ price, source, product }),
    });

    const result = await res.json();
    return result;
  }
}

export default price
