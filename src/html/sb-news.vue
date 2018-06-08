<template>
    <div>
        <div class="main-banner">
            <!-- banner -->
            banner
        </div>
        <div class="main clear">
            <div>每周二、四、日 XX:XX于柬埔寨XX电视台X频道直播开奖</div>
            <MainRight/>
            <div class="main-left-area">
                <div class="curr-lottery">
                    <img class="logo-lottery" src="../img/sb-logo-large.png" alt="logo" />
                    <div class="lottery-detail-info">
                        <div style="border-bottom: 1px dotted #dcdcdc;">
                            <router-link tag="a" target="_blank" :to="{path:'/sb/video'}">
                                <button class="lottery-detail-btn pre-play-blue">开奖视频</button>
                            </router-link>
                            <div class="title">
                                第180508030期
                            </div>
                            <div>
                                本期投注剩余时间
                                <span class="font-card font-orange">0</span>
                                <span class="font-card font-orange">3</span>
                                分
                                <span class="font-card font-orange">1</span>
                                <span class="font-card font-orange">6</span>
                                秒
                            </div>
                        </div>
                        <div class="fr">今日已售
                            <span class="font-orange">29</span> 期，还剩
                            <span class="font-orange">13</span> 期</div>
                        <div>最新开奖 </div>
                        <div>
                            <span>时时彩
                                <span class="font-orange"> 第 180508029 期 </span> 开奖结果</span>
                        </div>
                        <div>
                            <span v-for="(item,idx) in redBall" :key="idx" class="lottery-ball red">
                                {{item}}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="recent-rewards-list">
                    <router-link to="/sb/previous" class="fr font-blue">往期开奖</router-link>
                    <div class="title pre-img-orange">今日开奖</div>
                    <table style="width:33%" class="display-table fl">
                        <tr>
                            <th>期号</th>
                            <th>开奖日期</th>
                            <th>同号</th>
                        </tr>
                        <tr v-for="(item,idx) in rewardTodayList.slice(0,14)" :key="idx">
                            <td class="bg-grey">{{item.name}}</td>
                            <td>
                                <span class="font-orange" v-for="(_item,_idx) in item.number" :key="_idx">{{_item}} </span>
                            </td>
                            <td> <span class="font-orange">{{item.isSame}}</span> </td>
                        </tr>
                    </table>
                    <table style="width:33%" class="display-table fl">
                        <tr>
                            <th>期号</th>
                            <th>开奖日期</th>
                            <th>同号</th>
                        </tr>
                        <tr v-for="(item,idx) in rewardTodayList.slice(14,28)" :key="idx">
                            <td class="bg-grey">{{item.name}}</td>
                            <td>
                                <span class="font-orange" v-for="(_item,_idx) in item.number" :key="_idx">{{_item}} </span>
                            </td>
                            <td> <span class="font-orange">{{item.isSame}}</span> </td>
                        </tr>
                    </table>
                    <table style="width:33%" class="display-table fl">
                        <tr>
                            <th>期号</th>
                            <th>开奖日期</th>
                            <th>同号</th>
                        </tr>
                        <tr v-for="(item,idx) in rewardTodayList.slice(28,42)" :key="idx">
                            <td class="bg-grey">{{item.name}}</td>
                            <td>
                                <span class="font-orange" v-for="(_item,_idx) in item.number" :key="_idx">{{_item}} </span>
                            </td>
                            <td> <span class="font-orange">{{item.isSame}}</span> </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainRight from './MainRight-sb.vue';
export default {
    name: 'News',
    data() {
        return {
            period: 0,
            periodlist: (() => {
                let list = []
                for (let i = 0; i < 16; i++) {
                    list.push({
                        label: "periods" + i,
                        value: i
                    })
                }
                return list;
            })(),
            redBall: ['01', '01', '01', '01', '01'],
            rewardTodayList: (() => {
                let list = []
                for (let i = 0; i < 42; i++) {
                    list.push({ name: i+1, number: ['05', '03', '17', '30', '27'] ,isSame: "五同"})
                }
                return list;
            })()
        }
    },
    created() {

    },
    components: {
        MainRight
    }
};
</script>
