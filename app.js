const app = Vue.createApp({
    data(){
        return{
             name: 'test 1',
             link: 'https://vuejs.org/'
        };
    },
    methods: {
        numberTest(){
            const number = Math.random()
            if (number < 0.5){
                return 'working';
            }else{
                return 'not working';
            }
        }
    }
});

app.mount('#user-goal')