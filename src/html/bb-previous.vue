<template>
    <div class="container clear">
        <div class="query-form clear">
            <div class="query-form-item fl">
                <span class="query-form-label active">最近30期</span>
                <span class="query-form-label">最近50期</span>
                <span class="query-form-label">最近100期</span>
            </div>
            <div class="query-form-item fl">
                <input type="text"> --
                <input type="text"> 期
            </div>
            <div class="query-form-item fl">
                <input type="text"> --
                <input type="text"> 天
            </div>
            <div class="query-form-item fr">
                <button class="query-form-btn">
                    查询
                </button>
                <button class="query-form-btn">
                    刷新
                </button>
            </div>
        </div>
        <table class="display-table" style="margin-top:16px;">
            <tr>
                <th colspan="2"></th>
                <th colspan="2">开奖号码</th>
                <th></th>
                <th colspan="2">一等奖</th>
                <th colspan="2">二等奖</th>
                <th colspan="2">三等奖</th>
                <th colspan="2"></th>
            </tr>
            <tr>
                <th>期号</th>
                <th>开奖日期</th>
                <th>红球</th>
                <th>蓝球</th>
                <th>总销售额</th>
                <th>注数</th>
                <th>中奖金额</th>
                <th>注数</th>
                <th>中奖金额</th>
                <th>注数</th>
                <th>中奖金额</th>
                <th>奖池</th>
                <th>详情</th>
            </tr>
            <tr v-for="(item,idx) in lotteryList" :key="idx">
                <td style="font-weight:bold">{{item.number}}</td>
                <td>{{item.date}}</td>
                <td>
                    <!-- {{item.redNumber}} -->
                    <span v-for="(_item,_idx) in item.redNumber" :key="_idx" class="orange circle-bigger">
                        {{_item}}
                    </span>
                </td>
                <td>
                    <span v-for="(_item,_idx) in item.blueNumber" :key="_idx" class="blue circle-bigger">
                        {{_item}}
                    </span>
                </td>
                <td>{{item.total}}</td>
                <td>{{item.amount}}</td>
                <td>{{item.money}}</td>
                <td>{{item.amount}}</td>
                <td>{{item.money}}</td>
                <td>{{item.amount}}</td>
                <td>{{item.money}}</td>
                <td>{{item.Jackpot}}</td>
                <td>
                    <router-link tag="a" target="_blank" :to="{path:'/bb/notice-detail',query:{title:item.date}}">
                        <span class="font-blue font-underline">详情</span>
                    </router-link>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import MainRight from './MainRight.vue';
export default {
    name: 'Previous',
    data() {
        return {
            lotteryList: (() => {
                let list = []
                for (let i = 0; i < 20; i++) {
                    list.push({
                        number: "20180" + (51 - i),
                        date: "2018-05-30",
                        redNumber: ['05', '03', '17', '30', '27', '22'],
                        blueNumber: ['10'],
                        total: "62,286,900",
                        amount: "8",
                        money: "5000,000",
                        Jackpot: "62,286,900"
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
