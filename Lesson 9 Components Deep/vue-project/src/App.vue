<script setup>
import BadgeList from './components/BadgeList.vue'
import BaseBadge from './components/BaseBadge.vue'
import TheHeader from './components/TheHeader.vue'
import UserInfo from './components/UserInfo.vue'

import ManageGoals from './components/ManageGoals.vue'
import ActiveGoals from './components/ActiveGoals.vue'

// Any variables or functions defined here will be available in the template

</script>

<template>

<div>
  <button type="button" @click="setGoals('active-goals')">Active Goals</button>
  <button type="button" @click="setGoals('manage-goals')">Manage Goals</button>

  <ActiveGoals v-if="activeComponent==='active-goals'"
  :items="goals"
  />
    <keep-alive>
      <ManageGoals v-if="activeComponent==='manage-goals'"
      @add-goal="addGoals"
      />
    </keep-alive>
    
    <!-- <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive> -->
    

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
      goals: []
    };
  },
  methods: {
    setGoals(cmp){
      this.activeComponent =cmp;
    },
    addGoals(goals){
      this.goals.push(goals);
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