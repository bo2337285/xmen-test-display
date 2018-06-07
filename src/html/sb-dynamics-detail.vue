<template>
    <div class="main clear">
        <MainRight/>
        <div class="main-left-area">
            <div class="title">
                {{$route.query.title}}
            </div>
            <div class="article">
                <template v-for="(item,idx) in 100">
                    {{$route.query.title}}
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import MainRight from './MainRight.vue';
export default {
    name: 'DynamicsDetail',
    props: ["query"],
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
            })(),
        }
    },
    components: {
        MainRight
    }
};
</script>
