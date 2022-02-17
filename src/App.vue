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

.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
    position: absolute;
}

.modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    position: relative;
    width: 35rem;
    max-height: 20rem;
    padding: 2rem 2rem 3rem;
    overflow: auto;
    background-color: #FFFFFF;
    border-radius: 0.25rem;
}

.modal-close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    margin: 0.5rem 0.5rem 0 0;
    cursor: pointer;
}

.modal-title {
    color: #000000;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.25rem;
}

.modal-body {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #50545E;
}

.modal-actions {
    margin-top: 2rem;
    text-align: right;
}

</style>
