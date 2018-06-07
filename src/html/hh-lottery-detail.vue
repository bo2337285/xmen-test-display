<template>
    <div class="main lottery-detail-wrapper clear">
        <div class="notice-detail-title">
            亚洲福利彩票“
            <span class="font-orange">{{$route.query.title}}</span>”彩票介绍
        </div>
        <div class="lottery-detail-info-wrapper">
            <div class="lottery-info-img-list">
                <div class="lottery-info-img-item">
                    <div class="lottery-info-img-bg lottery-value font-orange">
                        {{$route.query.value}}
                    </div>
                    <div class="title">面值</div>
                </div>
                <div class="lottery-info-img-item">
                    <div class="lottery-info-img-bg lottery-highest font-orange">
                        {{$route.query.highest}}
                    </div>
                    <div class="title">最高奖金</div>
                </div>
                <div class="lottery-info-img-item">
                    <div class="lottery-info-img-bg lottery-number font-orange">
                        1张
                    </div>
                    <div class="title">全套张数</div>
                </div>
            </div>
        </div>
        <div class="lottery-detail-info-wrapper">
            <h3 class="title pre-img-orange">玩法介绍</h3>
            用色简洁，勾勒出TUKTUK司机乐观洋溢的生活情调，反映柬埔寨新城市市民自信喜悦的生活情调，平易近人，朴素诙谐，配合基诺型游戏玩法为玩家带来轻松的购彩体验。
        </div>
        <div class="lottery-detail-info-wrapper">
            <h3 class="title pre-img-orange">玩法介绍</h3>
            刮开覆盖膜，如果出现1个或1个以上“突突车”标志，即中得奖级表中所对应的金额。奖金按照最高奖级兑奖，不重复计奖。
        </div>
        <div class="lottery-detail-info-wrapper">
            <h3 class="title pre-img-orange">奖级设置</h3>
            <table class="display-table">
                <tr>
                    <th width="40%">奖级</th>
                    <th>中奖金额（美金）</th>
                </tr>
                <tr v-for="(item,idx) in rewardLv" :key="idx">
                    <td>{{item.name}}</td>
                    <td>{{item.value}}</td>
                </tr>
            </table>
        </div>
        <div class="lottery-detail-info-wrapper">
            <router-link tag="a" target="_blank" :to="{path:'/hh/try-detail',query:{title:$route.query.title}}">
                <button class="lottery-try-btn">在线试玩</button>
            </router-link>
            <h3 class="title pre-img-orange">票面展示</h3>
            <div class="lottery-thumbnail-wrapper">
                <div class="lottery-thumbnail-item">
                    <img :src="thumbnail" alt="">
                </div>
                <div class="lottery-thumbnail-item">
                    <img :src="thumbnail" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import thumbnail from '@/img/main-bottom.png';
export default {
    name: 'LotteryDetail',
    data() {
        return {
            thumbnail,
            rewardLv: (() => {
                let list = []
                for (let i = 0; i < 10; i++) {
                    list.push({ name: "10", value: "2,000" })
                }
                return list;
            })()
        }
    },
};
</script>
