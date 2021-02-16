class Github {
  constructor() {
    this.client_id = '0cf4912b1b70a4d64e9';
    this.client_secret = '4e296cea4a991cc7de6e537cf91955eca585c2dc';
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client-secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
