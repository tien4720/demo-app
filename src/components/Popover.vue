<script lang="ts">
import { defineComponent } from 'vue'
import { usePopupStore } from '@/stores/popup'

export default defineComponent({
    props: ['item'],

    setup() {
        const popup = usePopupStore();

        function closePopup() {
            popup.closePopup();
        }

        return {
            popup,
            closePopup,
        }
    },
})
</script>

<template>
    <div class="popover">
        <div class="close"><img src="@/assets/close.png" @click="closePopup"/></div>
        <div class="popover-title">{{item.name}}</div>
        <div class="popover-head">
            <span v-for="(extra, index) in item.extraInfo" :key="extra">{{extra}} <span class="dot" v-if="index < item.extraInfo.length - 1"></span></span>
        </div>
        <div class="description">{{item.description}}</div>
        <div class="popover-body">
            <div class="popover-body-title">Host Name or IP</div>
            <div class="data">
                <div>Host Name</div>
                <div>192.167.1.206</div>
                <div>Virtual Host Name</div>
                <div>skype.secureage.com</div>
                <div>Port</div>
                <div>21 (FTP)</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.popover {
    width: 24.75rem;
    left: 2.75rem;
    top: 1.5rem;
    padding: 1.5rem;
    position: absolute;
    border: 1px solid #F2F2F3;
    box-sizing: border-box;
    box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.15);
    background: #FFFFFF;
    color: #202532;
    z-index: 2;
}

.popover-title {
    padding-top: 1rem;
    font-size: 1.5rem;
    color: #000000;
}

.popover-head {
    padding: 0.5rem 0;
    font-size: 0.75rem;
}

.popover-body {
    margin-top: 1.5rem;
    font-size: 12px;
}

.popover-body-title {
    font-weight: 600;
}

.data {
    display: flex;
    flex-wrap: wrap;
}

.data div{
    width: 50%;
    padding: 0.25rem 0;
}

.description {
    font-size: 0.75rem;
}

.close {
    float: right;
    position: absolute;
    z-index: 2;
    right: 1.25rem;
    top: 0.75rem;
}

.close img {
    cursor: pointer;
}
</style>
