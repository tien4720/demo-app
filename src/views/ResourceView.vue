<script setup lang="ts">
import ResourceList from '@/components/ResourceList.vue'
</script>

<template>
    <main class="page-content">
        <div class="page-heading">
            <div class="page-title">Resources</div>
            <div class="page-sub-title">4 resources</div>
            <a class="normal-button">Create Resource</a>
        </div>
        <div class="resource-list">
            <ResourceList />
        </div>
    </main>
</template>

<style scoped>
.page-content {
    font-family: Inter;
    font-style: normal;
}

.page-heading {
    padding: 2rem;
}

.page-title {
    color: #101828;
    font-weight: 700;
    font-size: 1.25rem;
}

.page-sub-title {
    font-size: 0.875rem;
    color: #667085;
}

.normal-button {
    text-decoration: none;
    border: 1px solid #0B5CBF;
    color: #0B5CBF;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    font-weight: 600;
    border-radius: 0.25rem;
    position: absolute;
    right: 2rem;
    top: 2rem;
}
</style>
