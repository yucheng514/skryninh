<script setup lang="ts"></script>

<template>
    <div class="block text-center">
        <el-carousel
            style="height: 100vh"
            autoplay
            interval="1000"
            loop
            arrow="hover"
            pause-on-hover="false"
        >
            <el-carousel-item style="height: 100vh" v-for="item in 3">
                <div class="item">
                    <img src="../output/example.jpg" alt="" />
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style scoped>
.item{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
.item > img{
    height: 100%;
    width: 100%;
    border: 0;
}
.carousel-item {
    color: #475669;
    opacity: 0.75;
    margin: 0;
    text-align: center;
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    display: flex;
    align-items: center;
    margin: 0;
    text-align: center;
    height: 100%;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
