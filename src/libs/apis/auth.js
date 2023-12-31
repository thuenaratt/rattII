var auth = {
  async getMe() {
    const res = await fetch("http://localhost:3001/auth/me", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Origin: "beauty.narrat.store",
      },
    });

    const result = await res.json();
    if (result?.success == false) return false
    return result;
  },
  async logout() {
    const res = await fetch("http://localhost:3001/auth/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Origin: "beauty.narrat.store",
      },
    });

    const result = await res.json();
    if (result?.success == false) return false
    return result;
  },
}

export default auth
