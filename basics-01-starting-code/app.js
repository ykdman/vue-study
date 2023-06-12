const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish This Course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",

      vueLink: "https://v3-docs.vuejs-korea.org/",
    };
  },
  methods: {
    outputGoal() {
      let randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
app.mount("#user-goal");
