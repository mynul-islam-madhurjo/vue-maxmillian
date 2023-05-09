<template>
    <li>
        <h1> {{ name }} {{ isFavourite===true ? '(Favourite)' : '' }}</h1>
        <button @click="toggleFavourite">Toggle Favourite</button>
        <button @click="showDetails"> {{ dataVisible ? 'Hide' : 'Show' }} Details</button>
            <ul v-if="dataVisible">
                <li>Phone Address: {{ phoneAddress }}</li>
                <li> Email Address: {{ emailAddress }}</li>
            </ul>
    </li>
    
</template>

<script lang="ts">
export default{
    // props is used for parent child communication
    // props: ['name','phoneAddress','emailAddress'],
    props: {
        name: {
            type: String,
            // if true then we must give it 
            required: false,
            default: 'default',
            validator: function(value) {
                return value === 'Mynul Islam';
            }
        },
        phoneAddress: String,
        emailAddress: String,
        isFavourite: Boolean,
        id: String, 

    }, 
    //Custom events from the child to parent
    // emits:[ 
    //     'toggle-favourite'
    // ],
    emits:{
        'toggle-favourite': function(id){
            if(id){
                return true;
            }else{
                console.warn('Id is missing ')
            }
        }
    },
    data() {
        return {
            // data properties go here
            dataVisible: false,
            // isFavourite: this.isFavourite
        //     friend: {
        //         id: 'mynul',
        //         name: 'mynul islam',
        //         phone: '12345678',
        //         email: 'mynulislam@gmail.com'
        // }            
        };    
    },
    methods: {
        showDetails(){
            this.dataVisible = !this.dataVisible;
        },
        toggleFavourite(){
            // this.isFavourite=!this.isFavourite;
            // Creating a custom event for parent
            // this.$emit('toggle-favourite');
            this.$emit('toggle-favourite', this.id);

        } 
    }
}
</script>