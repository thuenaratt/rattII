var orders = {
    async create(data) {
      const res = await fetch("http://localhost:3001/orderRoutes/quick-order", {
        method: "POST",
        // credentials: "include",
        headers: {
          "Content-type": "application/json",
          Origin: "http://localhost:3000",
        },
        body: JSON.stringify(data),
      });
  
      const result = await res.json();
      return result;
    },
  
  }
  
  export default orders
  