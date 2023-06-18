const app = Vue.createApp({
  data() {
    return {
      enterTask: "",
      tasks: [],
      viewTask: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.viewTask ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enterTask);
      this.enterTask = "";
    },
    displayTask() {
      this.viewTask = !this.viewTask;
      return this.viewTask ? "Hide List" : "Show List";
    },
  },
});

app.mount("#assignment");
