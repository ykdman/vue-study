const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
      lastName: "",
    };
  },
  methods: {
    outputFullName() {
      console.log("run again");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "kdman";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this; //setTimeout 내부에서 this를 사용하기 위한 선언
        setTimeout(function () {
          that.counter = 0;
        }, 2 * 1000);
      }
    },
    name(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = value + " " + this.lastName;
      }
    },
    lastName(value) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = this.name + " " + value;
      }
    },
  },
  // computed: {
  //   fullname() {
  //     if (this.name === "") {
  //       return "";
  //     }
  //     return this.name + " " + this.lastName;
  //   },
  // },
});

app.mount("#events");
