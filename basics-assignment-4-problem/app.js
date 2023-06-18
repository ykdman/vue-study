const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      paragrapghIsVisivle: true,
      inlineStyle: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.paragrapghIsVisivle,
        hidden: !this.paragrapghIsVisivle,
      };
    },
  },
  methods: {
    toggleParagraghVisibility() {
      this.paragrapghIsVisivle = !this.paragrapghIsVisivle;
    },
  },
});
app.mount("#assignment");
