<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="sidebar">
        <div class="heading">Dashboard</div>
        <div class="nav-link-group">
            <div class="nav-head">VPN SETUP</div>
            <RouterLink to="/users" class="nav-link">Users</RouterLink>
            <RouterLink to="/user-group" class="nav-link">User Group</RouterLink>
            <RouterLink to="/connectors" class="nav-link">Connectors</RouterLink>
            <RouterLink to="/resources" class="nav-link">Resources</RouterLink>
            <RouterLink to="/resource-group" class="nav-link">Resource Group</RouterLink>
            <RouterLink to="/policies" class="nav-link">Policies</RouterLink>
        </div>

        <div class="nav-link-group m-t">
            <div class="nav-head">PORTAL ACCESS</div>
            <RouterLink to="/about" class="nav-link">Accounts</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    position: fixed;
    height: calc(100vh - 5rem);
    top: 5rem;
    left: 0;
    display: flex;
    flex-direction: column;
    background: #F2F2F3;
    z-index: 1;
    width: 12.5rem;
    font-family: Inter;
    font-style: normal;
}

.heading {
    color: #202532;
    font-weight: 600;
    padding: 2rem;
}

.nav-head {
    padding: 0 1rem;
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: #667085;
}

.nav-link {
    color: #667085;
    display: block;
    padding: 0.75rem 2rem;
    text-decoration: none;
    color: #202532;
    font-weight: 600;
    cursor: pointer;
}

.nav-link:hover,
.nav-link.router-link-active {
    background: #FFFFFF;
}

.m-t {
    margin-top: 1.25rem;
}

</style>
