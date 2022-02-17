<script lang="ts">
import ResourceItem from '@/components/ResourceItem.vue'
import { defineComponent } from 'vue'
import { VueFinalModal } from 'vue-final-modal'
import { usePopupStore } from '@/stores/popup'
import { useResourceStore } from '@/stores/resource'

export default defineComponent({
    components: { VueFinalModal, ResourceItem },
    props: ['showModal'],
    data() {
        return {
            showModal: false
        };
    },

    setup() {
        const popup = usePopupStore();
        const resource = useResourceStore();

        function onDeleteResources() {
            resource.deleteSelectedResources();
            this.showModal = false;
        }

        return {
            popup,
            resource,
            onDeleteResources,
        }
    },

    mounted() {
        let arr = [];
        for (let index = 0; index < this.resource.resources.length; index++) {
            arr.push(false);
        }
        this.popup.setArrayShowPopup(arr);
    },

    computed: {
        selectedResources() {
            return this.resource.resources.filter((e: any) => this.resource.selectedResourceIds.includes(e.id));
        }
    }
})
</script>

<template>
    <div class="action-bar">
        <a class="button delete-button" v-if="resource.selectedResourceIds && resource.selectedResourceIds.length" @click="showModal = true">Delete</a>
    </div>
    <vue-final-modal v-model="showModal" name="delete-modal" classes="modal-container" content-class="modal-content">
        <div class="modal-title">
            Delete Resource
        </div>
        <div class="modal-body">
            Are you sure you want to delete <span class="delete-items">[<span v-for="(item, index) in selectedResources" :key="item.id" class="resource-name"><span v-if="index > 0">, </span>{{item.name}}</span>]</span> ? This action cannot be undone.
        </div>
        <div class="modal-actions">
            <a class="button cancel-button" @click="showModal = false">Cancel</a>
            <a class="button delete-button solid" @click="onDeleteResources">Delete</a>
        </div>
    </vue-final-modal>
    <div class="resource-list">
        <TransitionGroup name="fade">
            <ResourceItem v-for="item in resource.resources" :key="item.id" :item="item" />
        </TransitionGroup>
    </div>
</template>

<style scoped>
.resource-list {
    padding: 0 2rem;
}

.action-bar {
    margin: 0 2rem 1rem;
    min-height: 1.5rem;
}

.button {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    font-weight: 600;
    border-radius: 0.25rem;
    font-size: 0.75rem;
}

.delete-button {
    border: 1px solid #DE1C22;
    color: #DE1C22;
}

.cancel-button {
    border: 1px solid #BEC0C5;
    color: #202532;
    margin-right: 1rem;
}

.delete-button.solid {
    background-color: #DE1C22;
    color: #FFFFFF;
}

.delete-items {
    color: #DE1C22;
}

.resource-name {
    display: inline-block;
    padding: 0 0.2rem;
}
</style>
