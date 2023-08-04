var category = {
  async create({ name, desc, imageUrl }) {
    const res = await fetch("https://beauty-narrat-store.onrender.com/category/create", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, desc, imageUrl }),
    });

    const result = await res.json();
    return result;
  },

  async update({id, name, desc, imageUrl}) {
    
    const res = await fetch(`https://beauty-narrat-store.onrender.com/category/update/${id}`,{
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Origin: "http://localhost:3000",
      },
      body: JSON.stringify({
        name, desc, imageUrl
      })
    });
    const result = await res.json();
    return result;

    
  },
 

  async all() {
    const res = await fetch("https://beauty-narrat-store.onrender.com/category/all", {
      method: "GET",
      // credentials: "include",
      headers: {
        "Content-type": "application/json",
        // Origin: "http://localhost:3000",
      },
    });

    const result = await res.json();
    if (!result?.data?.length) return [];

    return result;
  }
}

export default category
