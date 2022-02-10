<script lang="ts">
</script>

<template>
    <div class="navbar">
        <div class="navbar-brand">SecureAge SLl VPN</div>
        <div class="dropdown">
            <div class="dropdown-box">
                <div class="title">Account</div>
                <div>company_abc</div>
                <img src="@/assets/dropdown.png" />
            </div>
        </div>
        <div class="navbar-nav">
            <div class="avatar">
                <span>C</span>
            </div>
            <div class="info">
                <div>Carter</div>
                <div>carter@gmail.com</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: 0 1.5rem;
    border: 1px solid #EAEAEB;
}

.navbar-brand {
    padding: 1.625rem 0;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: #202532;
}

.navbar-nav {
    margin-left: auto;
    display: flex;
    align-items: center;
    font-family: Inter;
    font-style: normal;
    color: #000000;
}

.avatar {
    border-radius: 4rem;
    width: 2rem;
    height: 2rem;
    background: #202532;
    color: #FFFFFF;
    margin-right: 0.8rem;
}

.avatar span {
    position: absolute;
    top: 4px;
    left: 10px;
}

.info {
    letter-spacing: 0.2px;
    font-size: 0.75rem;
}

.dropdown {
    display: flex;
    align-items: center;
    margin-left: 3rem;
    color: #202532;
    font-family: Inter;
    font-style: normal;
    color: #202532;
}

.dropdown .dropdown-box {
    border: 1px solid #D0D5DD;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 0.25rem 1rem;
    width: 19.5rem;
    font-size: 0.75rem;
}

.dropdown .dropdown-box img {
    position: absolute;
    right: 1rem;
    top: 1rem;
}

.dropdown .dropdown-box .title {
    font-size: 0.625rem;
}
</style>
