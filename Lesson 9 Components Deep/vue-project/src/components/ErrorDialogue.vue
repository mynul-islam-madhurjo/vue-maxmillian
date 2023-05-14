<template>
    <div>
        <dialog open>
        <slot>
        </slot>
        </dialog>
        
    </div>
</template>

<style scoped>
dialog {
    position: fixed;
    top: 1vh;
    left: 30%;
    width: 40%;
    background-color: red;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0, 0.25);
}

</style>