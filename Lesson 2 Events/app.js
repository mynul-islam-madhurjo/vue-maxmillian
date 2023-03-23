const app = Vue.createApp({
    data(){
        return{
            counter: 0,
            name: '',
            confirmedname: ''
        };
    },
    // when we want to execute something when a particular variable chages we need watcher
    // we dont need to return anything here we will use the watcher only for logic it is alternative to computed
    // useful for small chanegs and http requests
    watch:{
        counter(value){
            if (value>10){
                const that = this;
                setTimeout(function(){
                    that.counter = 0;
                }, 2000)
            }
        }
    },
    computed:{
        fullName(){
            if (this.name===''){
                return ''
            }
            return this.name+' '+'Islam'
        }
    },
    methods: {
        outputFullName(){
            if (this.name===''){
                return ''
            }
            return this.name+' '+'Islam'
        },
        confirmedName(){
            this.confirmedname=this.name;
        },
        submitForm(event){
            //prevetns the default reload of the form http request vanilla js
            //event.preventDefault();
        },
        setName(event){
            this.name = event.target.value; 
            // passing whole string
            console.log(event.target.value)
            //passing one by one string 
            console.log(event.data)
        },
        add(num){
            this.counter=this.counter+num;
        },
        sub(num){
            this.counter = this.counter - num;
        },
        resetInput(){
            this.name = '';
        }
    }

});
app.mount('#event')