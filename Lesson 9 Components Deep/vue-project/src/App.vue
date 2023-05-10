<script setup>
import BadgeList from './components/BadgeList.vue'
import BaseBadge from './components/BaseBadge.vue'
import TheHeader from './components/TheHeader.vue'
import UserInfo from './components/UserInfo.vue'

// Any variables or functions defined here will be available in the template

</script>

<template>

<div>


<TheHeader/>
<BadgeList/>
<UserInfo
  :full-name="activeUser.name"
  :info-text="activeUser.description"
  :role="activeUser.role"
/>

</div>
</template>  

<script>
// If you need to define variables or functions outside of the <script setup> section,
// you can do so in a separate <script> block
export default { 
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
}

</script>

<!-- this is the global styles which will be affected in every component,
We can use 
-->
<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>  