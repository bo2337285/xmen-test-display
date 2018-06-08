<template>
    <div class="main clear">
        <h3 class="title pre-img-orange">选择试玩票种</h3>
        <div class="lottery-list clear">
            <div v-for="(item,idx) in lotteryList" :key="idx" class="lottery-list-item">
                <router-link :to="{path:'/hh/try-detail',query:{title:item.title,value:item.value,highest:item.highest}}">
                    <div class="lottery-thumbnail">
                        <img class="lottery-thumbnail-img" width="100%" :src="item.img" />
                    </div>
                    <h3 class="lottery-title">
                        {{item.title}}
                    </h3>
                    <div class="lottery-content">
                        <p class="lottery-content-info">
                            面值:
                            <span class="font-orange">
                                {{item.value}}
                            </span>
                            最高奖金:
                            <span class="font-orange">
                                {{item.highest}}
                            </span>
                        </p>
                        <p>{{item.comment}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import thumbnail from '@/img/main-bottom.png';
export default {
    name: 'Try',
    data() {
        return {
            lotteryList: (() => {
                let list = []
                for (let i = 0; i < 5; i++) {
                    list.push({
                        img: thumbnail,
                        title: 'TUKTUK来了',
                        value: "3美金",
                        highest: "10万美金",
                        comment: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    })
                }
                return list;
            })()
        }
    },
};
</script>
