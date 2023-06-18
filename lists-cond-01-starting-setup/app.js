const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal() {
      this.goals.shift();
    },
    removeGoalTargetting(idx) {
      //goal 하나씩 지우기
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
