<template>
    <HeaderNav />
<slot/>
    <Footers />

</template>

<script setup>
    import HeaderNav from '../component/HeaderNav.vue';
    import Footers from '../component/Footers.vue';
    import SingUp from '../views/SingUp.vue';
</script>