const app = Vue.createApp({
  data() {
    return {
      message: "text me merrychristmas!~",
      outPutMsg1: "",
      outPutMsg2: "",
    };
  },
  methods: {
    alertMessage() {
      alert(this.message);
    },
    outMsg1(event) {
      this.outPutMsg1 = event.target.value;
    },
    outMsg2(event) {
      this.outPutMsg2 = event.target.value;
    },
  },
});

app.mount("#assignment");
