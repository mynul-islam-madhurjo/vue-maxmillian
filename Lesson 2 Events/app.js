const app = Vue.createApp({
    data(){
        return{
            counter: 0,
        };
    },
    methods: {
        add(){
            this.counter=this.counter+1
        },
        sub(){
            this.counter = this.counter -1
        }
    }

});
app.mount('#event')