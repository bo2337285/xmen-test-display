<template>
    <div class="main-right-area">
        <div class="bonuses">
            <div class="title">奖金对照表</div>
            <table class="display-table">
                <tr>
                    <th>奖等</th>
                    <th>奖金($)</th>
                    <th>开奖号码示例</th>
                    <th>投注号码示例</th>
                </tr>
                <tr v-for="(item,idx) in rewardList" :key="idx">
                    <td>{{item.name}}</td>
                    <td>{{item.reward}}</td>
                    <td>
                        <template v-for="_item in item.sampleNumber">
                            {{_item}}
                        </template>
                    </td>
                    <td>
                        <template v-for="_item in item.sampleNumber">
                            {{_item}}
                        </template>
                    </td>
                </tr>
            </table>
        </div>
        <div class="ranking">
            <div class="title">热度排行</div>
            <div class="ranking-section">
                <div class="ranking-section-title pre-point-orange">
                    <router-link :to="{path:'/sb/dynamics-detail',query: {title: '新闻内容'}}">
                        歪打正着收获双倍大奖
                    </router-link>
                </div>
                <div class="ranking-section-content">4月17日晚，两色球第2018043期开奖，当期有两注二等奖花落金边市。近日，幸运彩民王先生（化姓）来到金边市福彩中心兑取大奖。据了解，王先生是一位福彩的“新粉”，接触......</div>
            </div>
            <div class="ranking-section">
                <div class="ranking-section-title pre-point-orange">
                    <router-link :to="{path:'/sb/dynamics-detail',query: {title: '新闻内容'}}">
                        50万大奖得主领奖激动落泪
                    </router-link>
                </div>
                <div class="ranking-section-content">“你好，我是来兑奖的。”5月2日上午，在金边市福彩中心兑奖室，来自茶胶省的宋先生（化姓）前来兑奖，他正是4月26日福彩两色球50万美金一等奖幸运得主......</div>
            </div>
        </div>
        <div class="news">
            <div class="title"></div>
            <div class="news-section">
                <p class="news-section-content pre-point-orange">
                    <router-link :to="{path:'/sb/dynamics-detail',query: {title: '新闻内容'}}">
                        上周两色球销售1.28亿 中出头奖15注
                    </router-link>
                </p>
                <p class="news-section-content">上周两色球销售1.28亿 中出头奖15注</p>
                <p class="news-section-content">上周两色球销售1.28亿 中出头奖15注</p>
                <p class="news-section-content">上周两色球销售1.28亿 中出头奖15注</p>
                <p class="news-section-content">上周两色球销售1.28亿 中出头奖15注</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MainRight',
    data() {
        return {
            rewardList: [
                { name: "五星", reward: "40,000", sampleNumber: ["1", "1", "1", "1", "1", "1"] },
                { name: "五星", reward: "40,000", sampleNumber: ["1", "1", "1", "1", "1", "1"] },
                { name: "五星", reward: "40,000", sampleNumber: ["1", "1", "1", "1", "1", "1"] },
                { name: "五星", reward: "40,000", sampleNumber: ["1", "1", "1", "1", "1", "1"] },
                { name: "五星", reward: "40,000", sampleNumber: ["1", "1", "1", "1", "1", "1"] },
                { name: "五星", reward: "40,000", sampleNumber: ["1", "1", "1", "1", "1", "1"] },
                { name: "五星", reward: "40,000", sampleNumber: ["1", "1", "1", "1", "1", "1"] },
                { name: "五星", reward: "40,000", sampleNumber: ["1", "1", "1", "1", "1", "1"] },
                { name: "五星", reward: "40,000", sampleNumber: ["1", "1", "1", "1", "1", "1"] },
            ]
        }
    },
};
</script>
