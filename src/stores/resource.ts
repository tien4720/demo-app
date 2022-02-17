import { defineStore } from 'pinia'

type RootState = {
    resources: any;
    selectedResourceIds: number[];
};

export const useResourceStore = defineStore({
    id: 'resource',
    state: () => ({
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
        }],
        selectedResourceIds: [],
    } as RootState),
    getters: {},
    actions: {
        selectResource(id: number) {
            const index = this.selectedResourceIds.indexOf(id);
            if (index > -1) {
                this.selectedResourceIds.splice(index, 1);
            } else {
                this.selectedResourceIds.push(id);
            }
        },
        deleteSelectedResources() {
            if (!this.selectedResourceIds.length) return;
            this.resources = this.resources.filter((e: any) => !this.selectedResourceIds.includes(e.id));
            this.selectedResourceIds = [];
        },
        resetSelectedResources() {
            this.selectedResourceIds = [];
        },
    }
})
