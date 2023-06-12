const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },
    resetCounter() {
      this.counter = 0;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
