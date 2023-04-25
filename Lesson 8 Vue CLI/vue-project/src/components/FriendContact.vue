<template>
    <li>
        <h1> {{ friend.name }}</h1>
        <button @click="showDetails"> Show More Details</button>
            <ul v-if="dataVisible">
                <li>{{ friend.phone }}</li>
                <li> {{ friend.email }}</li>
            </ul>
    </li>
    
</template>

<script lang="ts">
export default {
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