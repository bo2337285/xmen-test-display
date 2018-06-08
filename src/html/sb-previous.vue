<template>
    <div class="main clear">
        <div class="query-form clear">
            <div class="query-form-item fl">
                <span class="query-form-tab active">今天</span>
                <span class="query-form-tab">昨天</span>
                <span class="query-form-tab">前天</span>
            </div>
            <div class="query-form-item fl">
                按日期查询: <input type="text">
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
        <div class="main-right-area">
            <div class="main-statistics-wrapper bg-white top-border-orange">
                <div class="title">
                    号码统计
                </div>
                <div class="content">
                    <h3 class="sub-title pre-point-orange">
                        同号玩法统计
                    </h3>
                    <div>五同次数： 1 次</div>
                    <div>五同次数： 1 次</div>
                    <div>五同次数： 1 次</div>
                </div>
            </div>
            <div class="main-statistics-wrapper bg-white top-border-orange">
                <div class="content">
                    <h3 class="sub-title pre-point-orange">
                        开奖号码出现次数
                    </h3>
                    <div v-for="(item,idx) in statisticsList" :key="idx">
                        <span class="circle-bigger orange">{{item.number}}</span>
                        <span class="main-statistics-percentage-bar">
                            <span :style="{width:item.percentage+'%'}" class="main-statistics-percentage-bar-inner"> </span>
                        </span>
                        <span class="main-statistics-time">{{item.time}}次</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-left-area">
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
                    <td>
                        <span class="font-orange">{{item.isSame}}</span>
                    </td>
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
                    <td>
                        <span class="font-orange">{{item.isSame}}</span>
                    </td>
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
                    <td>
                        <span class="font-orange">{{item.isSame}}</span>
                    </td>
                </tr>
            </table>
        </div>
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
            rewardTodayList: (() => {
                let list = []
                for (let i = 0; i < 42; i++) {
                    list.push({ name: i + 1, number: ['05', '03', '17', '30', '27'], isSame: "五同" })
                }
                return list;
            })(),
            statisticsList:(() => {
                let list = []
                for (let i = 0; i < 10; i++) {
                    list.push({ number: i+1, percentage: Math.round(Math.random()*100), time: "37" })
                }

                return list.sort((a,b) => {
                    return a.percentage < b.percentage
                });
            })(),
            //  [
            //     { number: "5", percentage: Math.round(Math.random()*100), time: "37" },
            //     { number: "5", percentage: Math.round(Math.random()*100), time: "37" },
            //     { number: "5", percentage: Math.round(Math.random()*100), time: "37" },
            //     { number: "5", percentage: Math.round(Math.random()*100), time: "37" },
            //     { number: "5", percentage: Math.round(Math.random()*100), time: "37" },
            //     { number: "5", percentage: Math.round(Math.random()*100), time: "37" },
            //     { number: "5", percentage: Math.round(Math.random()*100), time: "37" },
            //     { number: "5", percentage: Math.round(Math.random()*100), time: "37" },
            //     { number: "5", percentage: Math.round(Math.random()*100), time: "37" },
            //     { number: "5", percentage: Math.round(Math.random()*100), time: "37" },
            //     { number: "5", percentage: Math.round(Math.random()*100), time: "37" },
            // ]
        }
    },
    components: {
        MainRight
    }
};
</script>
