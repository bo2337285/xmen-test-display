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
                    <img class="logo-lottery" src="../img/bb-logo.png" alt="logo" />
                    <div class="lottery-detail-info">
                        <div style="border-bottom: 1px dotted #dcdcdc;">
                            <router-link class="fr" tag="a" target="_blank" :to="{path:'/bb/video-detail'}">
                                <button class="lottery-detail-btn pre-play-blue">开奖视频</button>
                            </router-link>
                            <div class="title" style="line-height: 50px;">
                                两色球第
                                <select v-model="period">
                                    <option v-for="(item,idx) in periodlist" :key="idx" :value="item.value">{{item.label}}</option>
                                </select>
                                期开奖结果
                            </div>
                        </div>
                        <div>
                            <span>开奖时间: </span>
                            2018-05-07 21:15
                        </div>
                        <div>
                            <span>红球号码: </span>
                            <span v-for="(item,idx) in redBall" :key="idx" class="lottery-ball red">
                                {{item}}
                            </span>
                        </div>
                        <div>
                            <span>蓝球号码: </span>
                            <span v-for="(item,idx) in blueBall" :key="idx" class="lottery-ball blue">
                                {{item}}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="curr-rewards-detail">
                    <div class="title pre-img-orange">本期中奖详情</div>
                    <table class="display-table">
                        <tr>
                            <th>奖等</th>
                            <th>中奖注数(注)</th>
                            <th>中奖金额(美元)</th>
                        </tr>
                        <tr v-for="(item,idx) in rewardDetailList" :key="idx">
                            <td>{{item.name}}</td>
                            <td>{{item.amount}}</td>
                            <td> {{item.money}} </td>
                        </tr>
                    </table>
                    <div class="bottom">
                        本期销售额:
                        <span class="font-orange">62,286,900美金</span>
                        <div class="fr">
                            下期一等奖奖池累计金额:
                            <span class="font-orange">102,362,910美金</span>
                        </div>
                    </div>
                </div>
                <div class="recent-rewards-list">
                    <router-link to="/bb/previous" class="fr font-blue">往期开奖</router-link>
                    <div class="title pre-img-orange">最近5期开奖</div>
                    <table class="display-table">
                        <tr>
                            <th>期号</th>
                            <th>开奖日期</th>
                            <th>开奖号码</th>
                            <th>总销售额(美元)</th>
                            <th>奖池(美元)</th>
                        </tr>
                        <tr v-for="(item,idx) in rewardRecentList" :key="idx">
                            <td>{{item.name}}</td>
                            <td>{{item.date}}</td>
                            <td>
                                <span :class="{'font-orange':_idx<item.number.length-1,'font-blue':_idx == item.number.length-1}" v-for="(_item,_idx) in item.number" :key="_idx">{{_item}} </span>
                            </td>
                            <td> {{item.total}} </td>
                            <td> {{item.jackpot}} </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainRight from './MainRight.vue';
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
            redBall: ['01', '01', '01', '01', '01', '01'],
            blueBall: ['01'],
            rewardDetailList: [
                { name: "一等奖", amount: "5", money: "5000,000" },
                { name: "二等奖", amount: "154", money: "10,000" },
                { name: "三等奖", amount: "1,145", money: "1,000" },
                { name: "四等奖", amount: "6,745", money: "50" },
                { name: "五等奖", amount: "1,345,675", money: "2" },
                { name: "六等奖", amount: "8,908,956", money: "0.5" },
            ],
            rewardRecentList: [
                { name: "2018051", date: "2018-05-07", number: ['05', '03', '17', '30', '27', '22', '10'], total: "62,286,900", jackpot: "102,362,910" },
                { name: "2018050", date: "2018-05-07", number: ['05', '03', '17', '30', '27', '22', '10'], total: "62,286,900", jackpot: "102,362,910" },
                { name: "2018049", date: "2018-05-07", number: ['05', '03', '17', '30', '27', '22', '10'], total: "62,286,900", jackpot: "102,362,910" },
                { name: "2018048", date: "2018-05-07", number: ['05', '03', '17', '30', '27', '22', '10'], total: "62,286,900", jackpot: "102,362,910" },
                { name: "2018047", date: "2018-05-07", number: ['05', '03', '17', '30', '27', '22', '10'], total: "62,286,900", jackpot: "102,362,910" },
            ]
        }
    },
    created() {

    },
    components: {
        MainRight
    }
};
</script>
