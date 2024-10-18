export default () => ({
  photos: [],
  async init() {
    const url = "/api/photos.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      this.photos = await response.json();
      console.log(this.photos);
    } catch (error) {
      console.error(error.message);
    }
  }
})