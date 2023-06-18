# Vue.js

- 참조링크
    1. methods : computed
    [https://sunny921.github.io/posts/vuejs-computed-method/](https://sunny921.github.io/posts/vuejs-computed-method/)

- 시작하기
    - Vue.js는 인기있는 자바스크립트 프레임워크 이다.
    - DOM 을 효율적으로 갱신해주기위한 프레임워크
    - 가상 DOM, Component 기반 UI 개발, 모바일 앱 구축을 위한 라이브러리 제공, 재사용이 가능한 컴포넌트, 쉬운문법, 중앙집중식 상태관리저장소 Vuex등이 장점이다.
    

- SPA 란
    - SPA ( Single Page Application) 은기본적으로 웹 어플리케이션에 필요한 모든 정적리소스를 최초에 한번 다운로두하고 이후, 새로운페이지 요청 시 페이지 갱신에 필요한 데이터만을 전달받아 페이지를 갱신한다.
    
    → 전체적인 트래픽을 줄일 수 있으며, 전체 페이지를 다시 렌더링 하지않고, 변경된 부분만 갱신하므로, 새로고침이 발생하지 않아 반응속도 등 UX가 향상되어 네이티브앱과 유사한 사용자 경험을 제공할 수 이있다.
    
    - SPA 의 단점
        - 웹 어플리케이션 구동에 필요한 모든 정적 리소스를 최초에 한번에 다운로드 받기 때문에 초기 구동속도가 상대적으로 느릴수 밖에 없다.
        - SSR 방식이 아닌, 자바스크립트 기반 비동기모델(CSR) 방식 이기 때문에, JS를 사용하지 않는 웹 크롤러에 대해서는 크롤링이 되지 않는다.
        - SEO를 위해서는 SSR방식을 선택해야 한다.
        - Vue를 SSR방식으로 배포하기위해 NUXT를 사용하여 개발할때는 SPA로 개발하고, 배포할때 SSR방식으로 배포되게 개발할수 있다.
        
    

- MVVM 패턴
    - Model ,View, ViewModel
    - MVVM의 의의
        - View, ViewModel, Model 이 각자의 역할에만 집중할수 있게 된다.
        `→ 분업화를 통한 효율 증진
         → 유지보수성, 확장성, 유연성 향상, 중복코딩 문제점 감소`
        * 유연성 : 클라이언트의 새로운 요구 사항에 대해 최소한의 비용으로 보다 유연하게 대처할 수 있는것
    - Model (데이터 담당)
        - 애플리케이션의 정보, 데이터를 나타낸다.
            
            → 데이터베이스, 처음에 정의하는 상수, 초기화값, 변수 등을 뜻한다.
            
        - 데이터, 정보의 가공을 책임지는 컴포넌트까지 아우른다.
        
        > `<Model 에서의 규칙>`
        1. 사용자가 편집하길 원하는 모든 데이터를 가지고 있어야 한다.
        → 즉, 화면안의 네모박스에 글자가 표현된다면, 네모박스의 화면 위치 정보, 네모박스의 크기 정보, 글자내용, 글자의 위치, 글자의 포맷정보 등을 가지고 있어야한다.
        
        2. 뷰나 컨트롤러에 대해서 어떤 정보도 알지 말아야 한다.
        → 데이터 변경이 일어났을 때, 모델에서 화면 UI를 직접 조정해서 수정할 수 있도록 뷰를 참조하는 내부 속성값을 가지면 안된다.
        
        3. 변경이 일어나면, 변경통지에 대한 처리방법을 구현해야 한다.
        → 모델의 속성중 텍스트정보가 변경이 된다면, 이벤트를 발생시켜 누군가에게 전달해야 하며, 누군가 모델을 변경하도록 요청하는 이벤트를 보냈을 때 이를 수신할수 있는 처리 방법을 구현해야하 한다. 또한 모델은 재사용이 가능해야 하며 다른 인터페이스에서도 변하지 않아야 한다.
        > 
    
    - View (UI 담당)
        - 인풋 텍스트, 체크박스 항목등과 같은 사용자 인터페이스 요소를 나타낸다.
        - 즉, 데이터 및 객체의 입력과 보여주는 출력을 담당한다.
        - 데이터를 기반으로 사용자들이 볼 수 있는 환경을 보여준다.
        
        > `<View 에서의 규칙>`
        1. Model이 가지고있는 정보를 따로 저장해서는 안된다.
        → 화면에 글자를 표시하기 위해 모델이 가지고 있는 정보를 전달받게 되는데, 그 정보를 유지 하기 위해서 임의의 뷰에 저장하면 안된다. 단순히 네모박스를 그리라는 명령을 받으면, 화면에 표시하기만 하고 그 화면을 그릴때 사용한 정보를 저장하지 않는다.
        
        2.  Model 이나 Controller 와 같이 다른 구성요소들을 몰라야 한다.
        → Model 과 같이, 자기 자신을 제외한 다른 요소는 참조하거나 어떻게 동작하는지 알앗는 안된다. View는 데이터를 받으면 화면에 표시해주는 역할만 수행한다.
        
        3. 변경이 일어나면, 변경통지에 대한 처리방법을 구현해야만한다.
        → Model에서와 같이 변경이 일어났을 때, 누군가에게 변경을 알려줘야 하는 방법을 구현해야 한다.
        → View에서는 `사용자가 화면에 표시된 내용을 변경하게 되면 이를 모델에게 전달해서 모델을 변경해야 한다`. 그 작업을 하기 위해 변경 통지를 구현한다. 그리고 재사용이 가능하게 설계를 해야 하며 다른정보들을 표현하기 쉽게 설계를 해야한다.
        > 
    
    - ViewModel (비즈니스 로직 담당)
        - 데이터와 사용자 인터페이스 요소들을 있는 다리 역할을 한다.
        - `즉, 사용자가 데이터를 클릭하고 수정할 때 발생하는 이벤트를 처리하는 부분이다.`
        - View 와 ViewModel은 1:n 관계를 갖으며, 커맨드 패턴(Command)과 데이터 바인딩(Data BInding) 을 사용하여 View와 ViewModel을 연결하고 모든 UI 행동들을 다루며 View와 View 모델의 의존성이 없는 특징을 가진다.
        
        > `< ViewModel 에서의 규칙 >`
        1. Model 이나 View에 관해서 알고 있어야한다.
        → Model 이나 View는 서로의 존재를 모르고, 변경을 외부로 알리고 수신하는 방법만 가지고 있다. 떄문에 ViewModel이 이를 중재하기 위해서는 Model과 그에 관련된 View에 대해서 알고 있어야 한다.
        
        2. Model 과 View의 변경을 모니터링 해야 한다.
        → Model 이나 View의 변경 통지를 받으면 이를 해석해서 각각의 구성요소에 통지해야 한다. 또한 애플리케이션의 메인 로직은 ViewModel 이 담당하게 된다.
        > 
        
    
    ![Untitled](Vue%20js%20abeb1f281cbc4e3181523cb7cf7e08b9/Untitled.png)
    

- Vue의 .vue 확장자파일의 기본 뼈대
    
    > <template>
    - html 태그가 들어간다.
    
    <script>
    - 자바스크립트, 함수, 데이터가 들어간다.
    
    <style>
    - 컴포넌트를 꾸며줄 CSS 요소가 들어간다.
    > 
    

- Component Life Cycle
    - beforeCreate
    - `created`
    - beforeMount
    - `mounted`
    - beforeupdate
    - update
    - beforeDestroy
    - destoryed
    
    - created
        - 컴포넌트가 생성된 단계, 아직 DOM에 vue 인스턴스가 붙지 않아서 DOM에 관한 함수의 사용은 불가하다.
        - AJAX 요청으로 데이터를 fetch하는데 주로 쓰인다.
    - mounted
        - 컴포넌트 및 DOM에 vue 인스턴스가 붙은 상태, DOM을 조작하는 함수의 사용이 가능하다.
        - 부모 컴포넌트와 자식 컴포넌트간의 관계는
        부모컴포넌트가 created 된 이후 자식 컴포넌트의 created, mounted 훅이 시작되고,
        그 이후에 부모컴포넌트의 mounted가 시작된다.
        
        ![Untitled](Vue%20js%20abeb1f281cbc4e3181523cb7cf7e08b9/Untitled%201.png)
        

---

- 링크
    - Vue 이벤트에 관한 공식문서
        
        [https://v2.ko.vuejs.org/v2/guide/events.html](https://v2.ko.vuejs.org/v2/guide/events.html)
        

- 축약어
    - @click
        - v-on: click 을 축약 시킴
        - 이벤트 리슨에 대한 축약어를 사용했다면, 모든코드에서 “@”로 사용해야함
    - “:”
        - v-bind: 의 축약어
        - :value=”value” 처럼 사용
- 보간법
    
    ```jsx
    <p>{{outputGoal()}}</p>
    ```
    
    - 위와 같이 vue의 데이터 및 methods를 사용하기 위한 구문
- vue에서의 `this`
    
    ```jsx
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
    ```
    
    - Vue 에서의 `this` 는 자신을 만든 객체, 위의 코드에서는 const app 으로 볼수 있다.

### Vue를 이용한 DOM 상호작용

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Basics</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <script src="https://unpkg.com/vue@next" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <header>
      <h1>Vue Course Goals</h1>
    </header>
    <section id="user-goal">
      <h2>My Course Goal</h2>
      <p>{{courseGoal}}</p>
      <p>Lean More <a :href="vueLink"> About Vue</a></p>
    </section>
  </body>
</html>
```

- `defer` html 에서 페이지가 모두 로드된 후에 해당 외부스크립트가 실행됨을 명시한다.
- v-bind:href 코드로 vue에서 넘어온 값을 사용할수있다 (Tag에서)
동적 속성 할당!

- Vue app인스턴스 생성 및 연결하기
    - app.js
    
    ```jsx
    const app = Vue.createApp({
      data() {
        return {
          courseGoal: "Finish This Course and learn Vue!",
        };
      },
    });
    app.mount("#user-goal");
    ```
    
    - data는 무조건 함수로 선언된다. (키워드 변경불가),
    return 으로 나가는 값들을 데이터로 사용할수 있다. → html에서 사용
    - data 는 그 자체로 함수이자 메서드 며.
    - `methods`는 메서드 및 함수로 만들어진 객체를 갖는다.
    
    ```jsx
    const app = Vue.createApp({
      data() {
        return {
          courseGoal: "Finish This Course and learn Vue!",
          vueLink: "https://v3-docs.vuejs-korea.org/",
        };
      },
      methods: {
        outputGoal() {
          let randomNumber = Math.random();
          if (randomNumber < 0.5) {
            return "Learn Vue!";
          } else {
            return "Master Vue!";
          }
        },
      },
    });
    app.mount("#user-goal");
    ```
    
- v-on 을 통해 이벤트 바인딩 하기
    
    ```html
    <h2>Events in Action</h2>
          <button v-on:click="counter++">Add</button>
          <button v-on:click="counter=0">Remove</button>
          <p>Result: {{ counter }}</p>
    ```
    
- v-on으로 효율적인 vue 바인딩
    - index.html
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vue Basics</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="styles.css" />
        <script src="https://unpkg.com/vue@next" defer></script>
        <script src="app.js" defer></script>
      </head>
      <body>
        <header>
          <h1>Vue Events</h1>
        </header>
        <section id="events">
          <h2>Events in Action</h2>
          <button v-on:click="addCounter(5)">Add</button>
          <button v-on:click="resetCounter">Remove</button>
          <button v-on:click="reduceCounter(3)">Reduce</button>
          <p>Result: {{ counter }}</p>
          <input
            type="text"
            v-on:input="setName($event, 'kdman')"
            v-on:keyup.enter="confirmInput"
          />
          <!-- $event는 지정된 내장 이벤트객체를 전달할수있는 값 -->
          <p>Your Name : {{confirmedName }}</p>
          <form v-on:submit.prevent="submitForm">
            <input type="text" />
            <button>Sign Up</button>
          </form>
        </section>
      </body>
    </html>
    ```
    
    - app.js
    
    ```jsx
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
    ```
    
- v-model
    - v-model 은 v-bind=”value” v-on:click 과 같이 바인딩과 이벤트를 동시에 쓸수 있는 축약어 이다.
    - v-model을 통해 양방향 바인딩이 가능하다.

### 고급 반응형

- Vue는 html에서 선언된 Methods는 페이지에 변경점이 있을 때마다 재실행 한다. (모든 Method전부, 바인딩 되지 않은 methods들!)
- 연산 (Computer) 프로퍼티
    - Vue가 의존성을 인식하고, 의존성이 변경된 경우에만 재실행
    - 즉, method처럼 모든 변경에 대해 재실행 되는 것이 아닌, 의존성 (바라보는 computed 객체)의 변화가 일어날 때만, 해당 함수객체를 실행하기 때문에, method 보다 유용하게 사용할수 있다.
    
    ```jsx
    const app = Vue.createApp({
      data() {
        return {
          counter: 0,
          name: "",
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
      computed : {
        
      }
    });
    ```
    
    - computed라는 지정된 이름으로만 선언해야 하며, methods와 같이 객체를 반환 한다.
    
    ```jsx
    computed: {
        fullname() {
          console.log("run again");
          if (this.name === "") {
            return "";
          }
          return this.name + " " + "kdman";
        },
      },
    ```
    
    ```html
    <section id="events">
          <h2>Events in Action</h2>
          <button v-on:click="add(10)">Add 10</button>
          <button v-on:click="reduce(5)">Subtract 5</button>
          <p>Result: {{ counter }}</p>
          <input type="text" v-on:input="setName($event)" />
          <p>Your Name: {{ fullname }}</p> <!--computed의 객체 사용-->
        </section>
    ```
    
    - 메소드(함수)의 형태로 각각선언하지만, 사용되는 방식은 data 프로퍼티와 같이 사용한다.
    method 사용과 같이 () 를 사용하지않고 이름그대로 사용(작명도, data와 같이 data형식에 맞게 작명) → `변수처럼 사용한다`
    - comupted의 객체를 사용한다기 보다, 해당 객체를 바라보며 호출 하는 형식
    - methods의 함수 객체들 처럼, 값이 변화할 때마다 재실행 되는것이 아니며, 의존성이 있는 객체의 변화가 생길때에만 호출한다.
    - 따라서 method 보다는 computed의 함수 객체를 사용하여 값을 사용하는것이 좋다.
    methods는 페이지에서 어떤 항목이 변경되든 값을 재계산 해야하는 경우만 사용하면 좋다
    
- 감시자 (Watcher)
    - 의존성 중 하나가 변경될 때, Vue에 실행하도록 지시한다.
    - computed와 같이 변경되는 사항에 대해서만 실행한다.
    - 두개 이상의 연관된 data프로퍼티를 watch 하며 사용하기에는 좋지 않다.
    ( 해당 경우에는 computed를 사용하는게 낫다)
    - 하지만, 단적으로 data 프로퍼티 하나에 대한 Logic을 설계할때는 watch를 사용하면 상당히 좋다.
        
        ```
        const app = Vue.createApp({
          data() {
            return {
              counter: 0,
              name: "",
              fullname: "",
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
          **watch: {
            name(value) {
              this.fullname = value + " " + "kd";
            },**
          },
          computed: {
            // fullname() {
            //   console.log("run again");
            //   if (this.name === "") {
            //     return "";
            //   }
            //   return this.name + " " + "kdman";
            // },
          },
        });
        
        app.mount("#events");
        ```
        
        ![Untitled](Vue%20js%20abeb1f281cbc4e3181523cb7cf7e08b9/Untitled%202.png)
        
        - watch 함수객체에 인수가 1개일때
        첫번째 인수값은, 바라보는 data의 마지막 값이다.
        
        ```jsx
        watch: {
            name(value) {
              this.fullname = value + " " + "kd";
            },
        ```
        
        - watch 함수객체에 인수가 2개일떄
            
            첫번째 인수값은 newValue, 두번째 인수값은 oldValue이다
            
            ```jsx
            watch: {
                name(newValue, oldValue) {
                  this.fullname = value + " " + "kd";
                },
            ```
            
        
        - 두개이상의 연관에 data 처리에 대한 watch 와 computed의 비교
        computed가 두개이상의 바인딩 데이터를 처리하기에 훨씬 수월함을 알 수 있다.
        
        ```jsx
        /** watch */
        watch: {
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
        
        /** computed */
        computed: {
           nameSetting() {
              if (this.name === "") {
                return "";
              }
              return this.name + " " + this.lastName;
            },
          },
        
        ```
        
        - watch를 쓰기 좋은 예시
        data 프로퍼티의 값이 변화하는 것에 대한 분기 처리및 상태 변경에 용이 하다.
        
        ```
        counter(value) {
              if (value > 50) {
                const that = this; //setTimeout 내부에서 this를 사용하기 위한 선언
                setTimeout(function () {
                  that.counter = 0;
                }, 2 * 1000);
              }
            },
        ```
        

- `Methods` VS `Computed` VS `Watch`
    - Methods
        - 이벤트 바인딩 또는 데이터 바인딩을 위해 사용
        - 데이터 바인딩 {{ value }}  일 경우, 페이지의 리렌더링이 발생할때마다
        함수 재호출 이 발생하는 단점 존재
        → 리렌더링 때마다 갱신되야하는 경우에는 사용
        - 때문에 `이벤트 바인딩`을 위해 주로 사용
        
    - Computed
        - 다른 데이터를 기반으로 하는 데이터를 가져오기 유용
        - 의존하는 데이터가 바뀔때만 재실행 된다. (의존성 기반)
        - 다른데이터에 의존하는 데이터 바인딩에 사용
    - Watch
        - 어떠한 프로퍼티든 감시할 수 있다.
        - 데이터 변경에 대한 반응을 코드로 실행 가능( http request, setTimeout …)
        - 바뀌는 데이터를 토대로, 데이터가 아닌 내부에서 업데이트가 필요한 작업이 있을 때에 사용하면 좋다.

### 동적 스타일링

- 인라인 스타일
    - html 태그내에 `:style=”{borderColor : conditionValue ? ‘#ccc’ : ‘#aaa’}` 와 같이
        
        v-bind를 이용해 style 속성에 할당할 수 있다.
        
- class 동적 할당1
    
    ```html
    <div
            :class="boxASelected ? 'demo active' : 'demo'"
            @click="boxSelected('A')"
          ></div>
    ```
    
    - css 스타일을 미리 만들어 놓고, 그에따른 선택자가 활성화 될 때, 지정한 스타일이 활성화 되기 한다.
- class 동적 할당 2
    
    ```html
    <div
            :class="{demo : true, active : boxASelected}"
            @click="boxSelected('A')"
          ></div>
    
    <div
            class="demo"
            :class="{active : boxASelected}"
            @click="boxSelected('A')"
          ></div>
    
    //둘다 가능
    ```
    
    - demo class는 항상 활성화 하고, active class는 boxASelected의 값에 따라 활성화를 결정

### 콘텐츠 조건부 렌더링 및 목록 렌더링

- v-if
    - v-if 문을 통해 자바스크립트 조건문으로 해당 엘리먼트를 조건부 렌더링 할 수 있다.
        
        ```html
        <p v-if="goals.length === 0">
        ```
        
- v-else
    
    ```html
    <p v-if="goals.length === 0">No goals have been added yet - please start adding some</p>
       <ul v-else v-for="goal in goals">
          <li>{{goal}}</li>
          <li v-if="goals.length === 0">Goals</li>
       </ul>
    ```
    
    - v-else는 v-if 가 사용되는 엘리먼트의 바로 다음에 와야 사용가능하다.
    - 바로위의 v-if조건에 대한 Opposition 값으로 조건부 렌더링을 한다.
- v-else-if
    - v-else-if 또한 v-if 가 사용되는 바로 다음 엘리먼트에 사용해야 한다.,
    
    ```html
    <p v-if="goals.length === 0">
            No goals have been added yet - please start adding some!
          </p>
          <ul v-else-if="goals.length > 0" v-for="goal in goals">
            <li>{{goal}}</li>
            <li v-if="goals.length === 0">Goals</li>
          </ul>
          <p v-else>...</p>
    ```
    
    - v-if , v- else-if , v-else는 사용시에는 v-if를 따라 움직여야 한다.
- v-show (v-if의 대안?)
    - v-show는 v-if 패밀리와 다르게 독립적인 조건부 렌더링이 가능케한다.
    
    ```html
    <p v-show="goals.length === 0">
    ```
    

- `v-if`  VS `v-show`
    - v-if 는 실제로 DOM에서 요소를 추가 및 제거 한다.
        - 요소를 추가하고 제거할 떄 성능에 영향을 줄 수 있다.
    
    - v-show 는 css를 통해 요소를 숨기거나 표시한다.
        - DOM에 필요하지 않은 요소까지 들고 있게 될 수 도 있다.
        - 콘텐츠 상태가 표시 및 숨김을 통해 “자주” 바뀌어야 하는 상황에서는 사용
        
    - 평소에는 v-if를 이용하는 것 이좋다.

- v-for
    - Vue에서 쓰이는 반복렌더링 반복문은 v-for 이다
    
    ```html
    <li v-for="goal in goals">{{goal}}</li>
    ```
    
    - JS의 표준 문법인 item of List 가 아닌 item in List 의 형식으로 사용한다.
    - 인덱스를 표현하기
    
    ```html
    <li v-for="(goal, index) in goals">{{goal}} - {{index}}</li>
    ```
    
    - Array외의 반복
    
    ```html
    <ul>
            <li v-for="(value, key, index) in {name:'max', key:'Vue Master'}">
              {{key}} : {{value}} - {{index}}
            </li>
          </ul>
    ```
    
    ![Untitled](Vue%20js%20abeb1f281cbc4e3181523cb7cf7e08b9/Untitled%203.png)
    
    - 숫자로 반복하기
    
    ```html
    <ul><li v-for="num in 10">{{num}}</li></ul>
    ```
    
    ![Untitled](Vue%20js%20abeb1f281cbc4e3181523cb7cf7e08b9/Untitled%204.png)
    
- v-for + key (목록에 대한 상태 유실 방지)
    - v-for로 반복되는 렌더링에서는 1번째요소를 삭제할 시, 그 다음요소가 1번째의 자리를 차지하게 되면, 해당자리에 있던 데이터를 덮어쓸수 있다.( 또는 데이터사용에 있어서 버그가 발생할 수 있다._)
    - 때문에, v-for 사용시 각 목록에 대한 고유 Key를 부과하여, 데이터간의 구분을 하면 좋다
    
    ```html
    <li v-for="(goal, index) in goals" 
    	@click="removeGoalTargetting(index)" 
    	:key="goal">
        {{goal}} - {{index}}
    </li>
    ```
    
    - key를 v-bind를 통해 반복요소인 goal 을 넣어줌으로써 고유 키를 갖게 하였다.
    - v-for 구문 사용시 key를 입력해주면 대부분 좋다!