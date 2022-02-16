<script lang="ts">
import Popover from '@/components/Popover.vue'
import { defineComponent } from 'vue'
import { usePopupStore } from '@/stores/popup'
import { useResourceStore } from '@/stores/resource'

export default defineComponent({
    components: { Popover },
    props: ['item'],
    setup() {
        const popup = usePopupStore();
        const resource = useResourceStore();

        function openPopup(id: number) {
            popup.openPopup(id);
        }

        function selectResource(id: number) {
            resource.selectResource(id);
        }

        function checkSelectedResource(id: number) {
            return resource.selectedResourceIds.includes(id);
        }

        return {
            popup,
            resource,
            openPopup,
            selectResource,
            checkSelectedResource,
        }
    },
})
</script>

<template>
    <div class="resource-item" :class="{ selected: checkSelectedResource(item.id) }">
        <div class="item">
            <div class="item-group">
                <!-- <div class="item-img">
                    <img src="@/assets/widget.png" />
                </div> -->
                <label class="checkbox-container">
                    <input type="checkbox" @click="selectResource(item.id)">
                    <span class="checkmark"></span>
                </label>
                <div class="item-content">
                    <div class="item-title" :class="{ active: popup.arrayShowPopup[popup.selectedPopup] && item.id === popup.selectedPopup }" @click="openPopup(item.id)">{{item.name}}</div>
                    <div class="item-description">
                        <span v-for="(extra, index) in item.extraInfo" :key="extra">{{extra}} <span class="dot" v-if="index < item.extraInfo.length - 1"></span></span>
                    </div>
                </div>
            </div>
            <Popover :item="item" v-if="popup.arrayShowPopup[popup.selectedPopup] && item.id === popup.selectedPopup" />
        </div>
        <div class="type-list">
            <label class="badge" v-for="type in item.types" :key="type">{{type}}</label>
        </div>
    </div>
</template>

<style scoped>
.resource-item {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #EAEAEB;
    padding: 1rem;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: flex-start;
}

.resource-item.selected {
    background: rgba(11, 92, 191, 0.04);
    border-radius: 3px;
}

.item {
    width: 50%;
    display: inline-block;
}

.item-group {
    display: flex;
    align-items: center;
}

.item-content {
    letter-spacing: 0.2px;
    font-size: 0.75rem;
    padding-left: 1.5rem;
}

.item-title {
    font-size: 1rem;
    font-weight: 600;
    color: #202532;
    cursor: pointer;
}

.item-title:hover,
.item-title.active {
    color: #0B5CBF;
}

.item-description {
    font-size: 0.875rem;
    color: #50545E;
}

.item-img {
    border-radius: 4rem;
    width: 2rem;
    height: 2rem;
    margin-right: 0.8rem;
    background: #F2F2F3;
}

.item-img img {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
}

.type-list {
    width: 20%;
    display: inline-block;
}

.badge {
    font-size: 0.875rem;
    color: #344054;
    text-align: center;
    background: #F2F6F9;
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
    float: left;
}
</style>
