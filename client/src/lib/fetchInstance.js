 class CustomFetch {
  constructor() {
    this.isRefreshing = false;
  }

  async get(url, options) {
    return this.request(url, { ...options, method: "GET" });
  }

  async post(url, data, options) {
    return this.request(url, {
      ...options,
      method: "POST",
      headers:{
      'Content-Type':'application/json',
      },
      body: JSON.stringify(data)
    });
  }

  async request(url, options) {
    url = `http://localhost:3001/${url}`;
    const mergedOptions = {
      ...options,
      credentials: "include", // Include cookies as credentials
    };
    const response = await fetch(url, mergedOptions);

    if (response.status === 401 && !this.isRefreshing) {
      const res = await fetch("http://localhost:3001/auth/refresh");
      this.isRefreshing = true;
      return await res.json()
    }
    return await response.json();
  }
}
export default new CustomFetch() 
