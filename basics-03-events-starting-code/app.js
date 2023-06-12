const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
    addCounter(num) {
      this.counter = this.counter + num;
    },
    resetCounter() {
      this.counter = 0;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastname) {
      //event 인수는 이벤트가 발생한 엘리먼트를 그대로 가져온다.
      //이벤트리스너의 JS 기본 방식중 하나

      this.name = event.target.value + " " + lastname;
    },
  },
});

app.mount("#events");
