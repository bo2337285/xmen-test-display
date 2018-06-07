<template>
    <div class="main clear">
        <div class="video-list clear">
            <div v-for="(item,idx) in vedioList" :key="idx" class="video-list-item">
                <div class="video-thumbnail">
                    <router-link tag="a" target="_blank" :to="{path:'/bb/video-detail'}">
                        <div class="video-thumbnail-btn"></div>
                        <div class="video-thumbnail-cover"></div>
                        <img class="video-thumbnail-img" width="100%" :src="item.img" />
                    </router-link>
                </div>
                <div class="video-title">
                    {{item.title}}
                </div>
            </div>
        </div>
        <div class="article-list-page">
            <span class="page-btn">上一页</span>
            <span :class="{active: item == 4}" v-for="(item,idx) in 10" :key="idx" class="page-btn">{{item}}</span>
            <span class="page-btn">下一页</span>
        </div>
    </div>
</template>
<script>
import thumbnail from '@/img/main-bottom.png';
export default {
    name: 'Video',
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
