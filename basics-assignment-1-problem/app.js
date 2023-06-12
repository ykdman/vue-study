const app = Vue.createApp({
  data() {
    return {
      myName: "KYONG DEOK YOON",
      myAge: 25,
      imgUrl: "./foodiesfeed.com_soya-curry-with-rice.jpg",
    };
  },
  methods: {
    addAge() {
      return this.myAge + 5;
    },
    makeRandomNumber() {
      const randNum = Math.random();
      return randNum;
    },
  },
});
app.mount("#assignment");
