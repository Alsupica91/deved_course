const user = {
  name: "Xander",
  videos: ["html", "css", "js", "react"],
  //when you use methods in an object, use this syntax
  greet() {
    console.log(`Hello there ${this.name}`);
    //ADD fn
    const getVideos = () => {
      console.log(`You currently have ${this.videos.length} videos`);
    };
    getVideos();
  },
};
user.greet();
