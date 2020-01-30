<template>
    <div class="home">
        <h2>Home page</h2>

            <Primer
            v-for="primer in primers"
            :key="primer"
            :primer="primer"
            />

    </div>
</template>

<script>

import Primer from "@/components/primer.vue"
export default {
    components:{
        Primer
    },
    props:["primers"]
}
</script>

<style lang="scss">
    .home{
        background-color: rgb(168, 159, 159);
        height: 100%;
    }
</style>