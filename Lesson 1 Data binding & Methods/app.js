const app = Vue.createApp({
    data(){
        return{
             test1: 'This is test 1',
             test2: '<h3>This is test 2 inside h2 tag</h3>',
             name: 'test ',
             link: 'https://vuejs.org/'
        };
    },
    methods: {
        numberTest(){
            const number = Math.random()
            if (number < 0.5){
                // we are using this as it is a property of the object 
                return this.test1;
            }else{
                return this.test2;
            }
        }
    }
});
app.mount('#user-goal')