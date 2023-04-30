<template>
    <li>
        <h1> {{ name }}</h1>
        <button @click="showDetails"> {{ dataVisible ? 'Hide' : 'Show' }} Details</button>
            <ul v-if="dataVisible">
                <li>{{ phoneAddress }}</li>
                <li> {{ emailAddress }}</li>
            </ul>
    </li>
    
</template>

<script lang="ts">
export default {
    // props is used for parent child communication
    props: [
        'name',
        'phoneAddress',
        'emailAddress'
    ],
    data() {
        return {
            // data properties go here
            dataVisible: false,
            friend: {
                id: 'mynul',
                name: 'mynul islam',
                phone: '12345678',
                email: 'mynulislam@gmail.com'
        }            
        }    
    },
    methods: {
        showDetails(){
            this.dataVisible = !this.dataVisible;
        }
    }
}
</script>