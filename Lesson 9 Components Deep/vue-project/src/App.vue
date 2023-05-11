<script setup>
import BadgeList from './components/BadgeList.vue'
import BaseBadge from './components/BaseBadge.vue'
import TheHeader from './components/TheHeader.vue'
import UserInfo from './components/UserInfo.vue'

import ManageGoals from './components/MyGoals.vue'
import ActiveGoals from './components/MyActiveGoals.vue'

// Any variables or functions defined here will be available in the template

</script>

<template>

<div>
  <button type="button" @click="setGoals('active-goals')">Active Goals</button>
  <button type="button" @click="setGoals('manage-goals')">Manage Goals</button>

    <!-- <ManageGoals v-if="activeComponent==='my-goals'" />
    <keep-alive>
      <ActiveGoals v-if="activeComponent==='active-goals'"/>
    </keep-alive> -->
    
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
    

<!-- <TheHeader/>
<BadgeList/>
<UserInfo
  :full-name="activeUser.name"
  :info-text="activeUser.description"
  :role="activeUser.role"
/> -->



</div>
</template>  

<script>
// If you need to define variables or functions outside of the <script setup> section,
// you can do so in a separate <script> block
export default {
  components: {
    BadgeList,
    BaseBadge,
    TheHeader,
    UserInfo,
    ManageGoals,
    ActiveGoals
  },
  data() {
    return {
      activeComponent: "",
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setGoals(cmp){
      this.activeComponent =cmp;
    }
  }
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