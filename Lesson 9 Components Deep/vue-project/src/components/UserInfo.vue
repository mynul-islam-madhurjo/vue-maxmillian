<template>
  <section>
    <header>
      <div>
      <h3>{{ fullName }}</h3>
      <BaseBadge :type="role" :caption="role.toUpperCase()"></BaseBadge>
    </div>
    </header>
    <p>{{ infoText }}</p>
  </section>
</template>

<script>
import BaseBadge from './BaseBadge.vue'

export default {
  props: ['fullName', 'infoText', 'role'],
  components: {
    BaseBadge // Add the BaseBadge component to the components option
  }
};
</script>

<style>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>