/** Vue 사용 (CDN) */
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
  },
}).mount("#app");

// const buttonEL = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEL = document.querySelector("ul");

// function addGoal() {
//   const inputValue = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = inputValue;
//   listEL.appendChild(listItemEl);
//   inputEl.value = ""; //input의 값 초기화
// }

// buttonEL.addEventListener("click", addGoal);
