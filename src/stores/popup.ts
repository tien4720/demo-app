import { defineStore } from 'pinia'

export const usePopupStore = defineStore({
    id: 'popup',
    state: () => ({
        selectedPopup: 0,
        arrayShowPopup: []
    }),
    getters: {},
    actions: {
        openPopup(id: number) {
            this.selectedPopup = id;
            this.arrayShowPopup[id] = true;
        },
        closePopup() {
            this.selectedPopup = 0;
            for (let index = 0; index < this.arrayShowPopup.length; index++) {
                this.arrayShowPopup[index] = false;
            }
        },
        setArrayShowPopup(arr: boolean[]) {
            this.arrayShowPopup = arr;
        }
    }
})
