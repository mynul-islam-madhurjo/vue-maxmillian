<template>
    <div>
        <h1>
            My Goals List
        </h1>
        <ul  v-for="item in items" :key="item">
            <li>{{ item }}</li>
        </ul>

    </div>
</template>

<script lang="ts">
    export default {
        props: {
            items:{
                type: Array as () => (string | number | symbol)[],
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>