<script setup>
// Any variables or functions defined here will be available in the template

import TheForm from './components/TheForm.vue';

</script>

<template>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link to="/form">Form</router-link>
                </li>
                <li>
                    <router-link to="/rating">Rating</router-link>
                </li>
            </ul>

        </nav>
        
        <router-view></router-view>

    </header>
  
<!-- <TheForm/> -->

        

</template>  

<script>

export default { 

}

</script>

 
<style>
</style>