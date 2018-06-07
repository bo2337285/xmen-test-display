<template>
    <div class="main clear">
        <div class="notice-detail-title">
            亚洲福利彩票两色球<span class="font-orange">{{$route.query.title}}</span>开奖公告

        </div>
        <div class="notice-detail-info">
            <table class="display-table">
                <tr>
                    <th colspan="2">开奖日期 2018-05-01</th>
                </tr>
                <tr>
                    <td style="line-height:120px;">
                        本期销售额:
                        <span class="font-orange">62,286,900美金</span>
                    </td>
                    <td>
                        下期一等奖奖池累计金额:
                        <span class="font-orange">102,362,910美金</span>
                    </td>
                </tr>
                <tr>
                    <td style="line-height:124px;" colspan="2">
                        中奖号码:
                        <span v-for="(item,idx) in number" :key="idx" class="lottery-ball" :class="{'red':idx<number.length-1,'blue':idx == number.length-1}">
                            {{item}}
                        </span>
                    </td>
                </tr>
            </table>
        </div>

        <div class="curr-rewards-detail">
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
        </div>

        <div class="notice-detail-footer">
            <div class="title">兑奖期限：</div>
            <span class="font-grey">
                两色球兑奖当期有效。中奖者应当自开奖之日起<span class="font-orange">60个自然日</span>内，持中奖彩票到指定的地点兑奖。逾期未兑奖视为弃奖，弃奖奖金纳入二色球奖池。
            </span>
        </div>
    </div>
</template>
<script>
import MainRight from './MainRight.vue';
export default {
    name: 'notice',
    data() {
        return {
            rewardDetailList: [
                { name: "一等奖", amount: "5", money: "5000,000" },
                { name: "二等奖", amount: "154", money: "10,000" },
                { name: "三等奖", amount: "1,145", money: "1,000" },
                { name: "四等奖", amount: "6,745", money: "50" },
                { name: "五等奖", amount: "1,345,675", money: "2" },
                { name: "六等奖", amount: "8,908,956", money: "0.5" },
            ],
            number: ['05', '03', '17', '30', '27', '22', '10']
        }
    },
    components: {
        MainRight
    }
};
</script>
