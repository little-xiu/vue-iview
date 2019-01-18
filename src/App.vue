<template>
<div id="app">

    <!-- 头部 -->
    <!-- <app-header></app-header> -->

    <keep-alive>
        <router-view/>
    </keep-alive>
    
    <!-- 底部 -->
    <!-- <app-foot>
    </app-foot> -->

</div>
</template>


<style lang="less">
    html, body {
        height: 100%;
    }
    #app {
        height: 100%;
    }
</style>


