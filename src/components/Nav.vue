<template>
    <nav class="nav-pills">
        <ul>
            <p>Seller Office</p>
            <li 
                v-for="nav in navigations"
                :key="nav.name"
                class="nav-item">
                <RouterLink 
                    v-bind:to="nav.href"
                    active-class="active"
                    class="nav-link">
                    <i class="icon">{{ nav.icon }}</i>
                    {{ nav.name }}
                    <i class="arrow"></i>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            navigations: [
                {
                    name: 'Home',
                    href: '/',
                    icon: '' // TODO: 아이콘으로 교체
                },
                {
                    name: 'Components',
                    href: '/components',
                    icon: '' // TODO: 아이콘으로 교체
                }
            ]
        }
    }
}
</script>