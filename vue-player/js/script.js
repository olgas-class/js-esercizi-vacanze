const { createApp } = Vue;

createApp({
  data() {
    return {
      activeSong: null,
      newSong: {
        name: "",
        singer: "",
        genre: "",
        duration: "",
      },
      error: false,
      songs: [
        {
          name: "La Grange",
          singer: "ZZ Top",
          genre: "Rock",
          duration: "3:50",
        },
        {
          name: "School's Out",
          singer: "Alice Cooper",
          genre: "Rock",
          duration: "3:30",
        },
        {
          name: "Money for Nothing",
          singer: "Dire Straits",
          genre: "Rock",
          duration: "4:09",
        },
        {
          name: "Blitzkrieg Bop",
          singer: "Ramones",
          genre: "Rock",
          duration: "2:05",
        },
      ],
    };
  },
  methods: {
    toggleActiveSong(songIndex) {
      if (this.activeSong !== songIndex) {
        this.activeSong = songIndex;
      } else {
        this.activeSong = null;
      }
    },
    addNewSong() {
      if (this.validate()) {
        this.error = false;
        this.songs.push({ ...this.newSong });
        this.clearFields();
      } else {
        this.error = true;
      }
    },
    validate() {
      if (
        this.newSong.name &&
        this.newSong.singer &&
        this.newSong.genre &&
        this.newSong.duration
      ) {
        return true;
      } else {
        return false;
      }
    },
    clearFields() {
        this.newSong.name = "";
        this.newSong.singer = "";
        this.newSong.genre = "";
        this.newSong.duration = "";
    }
  },
}).mount("#app");
