import { defineStore } from 'pinia'

type RootState = {
    resources: any;
    selectedResourceIds: number[];
};

export const useResourceStore = defineStore({
    id: 'resource',
    state: () => ({
        resources: [],
        selectedResourceIds: [],
    } as RootState),
    getters: {},
    actions: {
        setResources(data: any) {
            this.resources = data;
        },
        selectResource(id: number) {
            const index = this.selectedResourceIds.indexOf(id);
            if (index > -1) {
                this.selectedResourceIds.splice(index, 1);
            } else {
                this.selectedResourceIds.push(id);
            }
        },
        // closePopup() {
        //     this.selectedPopup = 0;
        //     for (let index = 0; index < this.arrayShowPopup.length; index++) {
        //         this.arrayShowPopup[index] = false;
        //     }
        // },
        // setArrayShowPopup(arr: boolean[]) {
        //     this.arrayShowPopup = arr;
        // }
    }
})
