export default () => ({
  photos: [],
  keyword: '',
  filterClick(keyword){
    console.log(keyword);
    this.keyword = keyword
  },
  filterdPhotos(){
    return this.photos.filter((photo)=>photo.path.includes(this.keyword))
  },
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