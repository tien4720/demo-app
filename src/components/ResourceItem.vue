<script lang="ts">
import Popover from '@/components/Popover.vue'
import { defineComponent } from 'vue'
import { usePopupStore } from '@/stores/popup'

export default defineComponent({
    components: { Popover },
    props: ['item'],
    setup() {
        const popup = usePopupStore();
        function openPopup(id: number) {
            popup.openPopup(id);
        }

        return {
            popup,
            openPopup,
        }
    },
})
</script>

<template>
    <div class="resource-item">
        <div class="item">
            <div class="item-group">
                <div class="item-img">
                    <img src="@/assets/widget.png" />
                </div>
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
    padding: 1rem 0;
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
