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
    },
    removeElement(index){
      this.goals.splice(index,1)
    }
  }
});

app.mount('#user-goals');
