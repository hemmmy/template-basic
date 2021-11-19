<template>
    <Header />
    <Nav />
    <div class="container">
        <RouterView/>
    </div>
    <Footer />
</template>

<script>
import Header from '~/components/Header'
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'
export default {
    components: {
        Header,
        Nav,
        Footer
    }
}
</script>

<style lang="scss">
@import "~scss/main";
</style>