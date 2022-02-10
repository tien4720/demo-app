<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
    <Navbar />
    <div class="wrapper">
        <Sidebar />
        <div class="main-content">
            <RouterView />
        </div>
    </div>
</template>

<style>
@import '@/assets/base.css';

#app {
    margin: 0 auto;
    font-weight: normal;
    color: #50545E;
    font-family: 'Inter', sans-serif;
}

.main-content {
    padding-left: 12.5rem;
}

.dot {
    display: inline-block;
    width: 0.375rem;
    height: 0.375rem;
    margin: 0 0.25rem;
    background: #BEC0C5;
    border-radius: 4rem;
    position: relative;
    bottom: 0.1rem;
}
</style>
