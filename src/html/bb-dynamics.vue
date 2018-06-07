<template>
    <div class="main clear">
        <MainRight/>
        <div class="main-left-area">
            <div class="article-list">
                <div v-for="(item,idx) in articleList" :key="idx" class="article-list-section clear">
                    <div class="article-list-title">
                        <router-link :to="{path:'/bb/dynamics-detail',query: {title: item.title}}">{{item.title}}</router-link>
                    </div>
                    <div class="article-list-date">{{item.date}}</div>
                </div>
                <div class="article-list-page">
                    <span class="page-btn">上一页</span>
                    <span :class="{active: item == 4}" v-for="(item,idx) in 10" :key="idx" class="page-btn">{{item}}</span>
                    <span class="page-btn">下一页</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MainRight from './MainRight.vue';
export default {
    name: 'Dynamics',
    data() {
        return {
            articleList: (() => {
                let list = []
                for (let i = 0; i < 20; i++) {
                    list.push({
                        title: "热点城市屡现一房难求 库存告急还是捂盘惜售？",
                        date: "2018-05-17"
                    })
                }
                return list;
            })()
        }
    },
    components: {
        MainRight
    }
};
</script>
