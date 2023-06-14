const app = Vue.createApp({
  data() {
    return {
      result: 0,
      resultText: "RESULT",
    };
  },
  methods: {
    add5() {
      this.result += 5;
      console.log(this.result);
    },
    add1() {
      this.result += 1;
      console.log(this.result);
    },
  },
  watch: {
    result(value) {
      if (value !== 0) {
        const that = this;
        setTimeout(function () {
          that.result = 0;
          console.log("result init");
        }, 5000);
      }
    },
  },
  computed: {
    displayResult() {
      if (this.result === 0) {
        return "RESULT";
      } else if (this.result < 37) {
        return "Not there yet";
      } else if (this.result > 37) {
        return "Too much!";
      }
    },
  },
});

app.mount("#assignment");
