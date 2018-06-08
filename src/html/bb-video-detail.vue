<template>
    <div class="video">
        <div class="video-detail-title">亚洲福利彩票两色球xxxxx开奖视频</div>
        <div class="video-detail-content">
            <video class="video-player" src=""></video>
        </div>
        <div class="container">
            <div class="video-detail-info">
                <h3 class="title">视频信息</h3>
                <div class="content">视频信息视频信息视频信息视频信息视频信息视频信息</div>
            </div>
        </div>
        <div class="container">
            <div class="video-detail-list-lbtn"></div>
            <div class="video-detail-list-rbtn"></div>
            <div class="video-detail-list">
                <div v-for="(item,idx) in vedioList" :key="idx" class="video-detail-item">
                    <div class="video-thumbnail">
                        <router-link tag="a" target="_blank" :to="{path:'/bb/video-detail'}">
                            <div class="video-thumbnail-btn"></div>
                            <div class="video-thumbnail-cover"></div>
                            <img class="video-thumbnail-img video-detail-thumbnail-img" width="100%" :src="item.img" />
                        </router-link>
                    </div>
                    <div class="video-title">
                        {{item.title}}
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<!--[if lte IE 8]>
 <script type="text/javascript" src="https://cdn.bootcss.com/html5shiv/r29/html5.min.js"></script>
<![endif]-->

<script>
import thumbnail from '@/img/main-bottom.png';
export default {
    name: 'VideoDetail',
    data() {
        return {
            vedioList: (() => {
                let list = []
                for (let i = 0; i < 16; i++) {
                    list.push({
                        img: thumbnail,
                        title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                    })
                }
                return list;
            })()
        }
    }
};
</script>
