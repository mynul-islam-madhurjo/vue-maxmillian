const app = Vue.createApp({

  data() {
    return { 
      goals: [],
      enteredGoals: '' 
    };
  },
  methods: {
    addGoal(){
      this.goals.push(this.enteredGoals)
    }
  }
});

app.mount('#user-goals');
