<script lang="ts">
import ResourceItem from '@/components/ResourceItem.vue'
import { defineComponent } from 'vue'
import { usePopupStore } from '@/stores/popup'

export default defineComponent({
    components: { ResourceItem },

    data() {
        return {
            resources: [{
                id: 1,
                name: 'resource_name',
                extraInfo: ['Virtual Host name', 'Protocol', 'connector_name'],
                types: ['design', 'marketing', 'human_resource', 'sourcing', 'sales', 'finance', '+4'],
                description: 'This resource is at server room at 2nd floor in Block B of the building. Need to contact Mike for access'
            }, {
                id: 2,
                name: 'skype_server',
                extraInfo: ['skype.secureage.com', 'TCP/UDP', 'connector_1'],
                types: ['design'],
                description: 'This resource is at server room at 2nd floor in Block B of the building. Need to contact Mike for access'
            }, {
                id: 3,
                name: 'slack_server',
                extraInfo: ['IPv4', 'UDP', 'No Connector'],
                types: ['design', 'product'],
                description: 'This resource is at server room at 2nd floor in Block B of the building. Need to contact Mike for access'
            }, {
                id: 4,
                name: 'seams_server',
                extraInfo: ['IPv6', 'UDP', 'connector_3'],
                types: [],
                description: 'This resource is at server room at 2nd floor in Block B of the building. Need to contact Mike for access'
            }]
        };
    },

    setup() {
        const popup = usePopupStore();

        return {
            popup,
        }
    },

    mounted() {
        let arr = [];
        for (let index = 0; index < this.resources.length; index++) {
            arr.push(false);
        }
        this.popup.setArrayShowPopup(arr);
    }
})
</script>

<template>
    <div class="resource-list">
        <ResourceItem v-for="item in resources" :key="item.id" :item="item" />
    </div>
</template>

<style scoped>
.resource-list {
    padding: 0 2rem;
}
</style>
