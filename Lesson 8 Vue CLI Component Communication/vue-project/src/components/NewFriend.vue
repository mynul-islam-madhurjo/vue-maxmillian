<template>
    <form @submit.prevent="submitData">
        <div>
        <label for="fname">Your Name</label><br>
        <input type="text" v-model="name"><br>
        </div>
        <div>
        <label for="lname">Your Email</label><br>
        <input type="text" v-model="email"><br>
        </div>
        <div>
        <label for="lname">Your Address</label><br>
        <input type="text" v-model="address"><br>
        </div>
        <input type="submit" value="submit">
    </form>
</template>

<script lang="ts">
    export default {
        emits: ['add-contact'],
        data(){
            return{
                name: '',
                email: '',
                address: ''
            }
        },
        methods: {
            submitData(){
                this.$emit('add-contact', this.name, this.email, this.address)
            }
        }

    }

</script>
