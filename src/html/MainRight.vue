<template>
    <div class="main-right-area">
        <div class="bonuses">
            <div class="title">奖金对照表</div>
            <table class="display-table">
                <tr>
                    <th>奖等</th>
                    <th>奖金</th>
                    <th>中奖条件</th>
                </tr>
                <tr>
                    <td>一等奖</td>
                    <td>浮动</td>
                    <td>
                        <span class="circle orange"></span>
                        <span class="circle orange"></span>
                        <span class="circle orange"></span>
                        <span class="circle orange"></span>
                        <span class="circle orange"></span>
                        <span class="circle orange"></span>
                        <span class="circle blue"></span>
                    </td>
                </tr>
                <tr>
                    <td>二等奖</td>
                    <td>10,000</td>
                    <td>
                        <span class="circle orange"></span>
                        <span class="circle orange"></span>
                        <span class="circle orange"></span>
                        <span class="circle orange"></span>
                        <span class="circle orange"></span>
                        <span class="circle orange"></span>
                        <span class="circle"></span>
                    </td>
                </tr>
                <tr>
                    <td>三等奖</td>
                    <td>1,000</td>
                    <td>
                        <span class="circle orange"></span>
                        <span class="circle orange"></span>
                        <span class="circle orange"></span>
                        <span class="circle orange"></span>
                        <span class="circle orange"></span>
                        <span class="circle"></span>
                        <span class="circle blue"></span>
                    </td>
                </tr>
                <tr>
                    <td>四等奖</td>
                    <td>50</td>
                    <td>
                        <div class="circle-wrapper">
                            <span class="circle orange"></span>
                            <span class="circle orange"></span>
                            <span class="circle orange"></span>
                            <span class="circle orange"></span>
                            <span class="circle orange"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle orange"></span>
                            <span class="circle orange"></span>
                            <span class="circle orange"></span>
                            <span class="circle orange"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle blue"></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>五等奖</td>
                    <td>2</td>
                    <td>
                        <div class="circle-wrapper">
                            <span class="circle orange"></span>
                            <span class="circle orange"></span>
                            <span class="circle orange"></span>
                            <span class="circle orange"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle orange"></span>
                            <span class="circle orange"></span>
                            <span class="circle orange"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle blue"></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>六等奖</td>
                    <td>0.5</td>
                    <td>
                        <div class="circle-wrapper">
                            <span class="circle orange"></span>
                            <span class="circle orange"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle blue"></span>
                            <span class="circle orange"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle blue"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <span class="circle blue"></span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div class="ranking">
            <div class="title">热度排行</div>
            <div class="ranking-section">
                <div class="ranking-section-title pre-point-orange">
                    <router-link :to="{path:'/bb/dynamics-detail',query: {title: '新闻内容'}}">
                        歪打正着收获双倍大奖
                    </router-link>
                </div>
                <div class="ranking-section-content">4月17日晚，两色球第2018043期开奖，当期有两注二等奖花落金边市。近日，幸运彩民王先生（化姓）来到金边市福彩中心兑取大奖。据了解，王先生是一位福彩的“新粉”，接触......</div>
            </div>
            <div class="ranking-section">
                <div class="ranking-section-title pre-point-orange">
                    <router-link :to="{path:'/bb/dynamics-detail',query: {title: '新闻内容'}}">
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
                    <router-link :to="{path:'/bb/dynamics-detail',query: {title: '新闻内容'}}">
                        上周两色球销售1.28亿 中出头奖15注
                    </router-link>
                </p>
                <p class="news-section-content pre-point-orange">上周两色球销售1.28亿 中出头奖15注</p>
                <p class="news-section-content pre-point-orange">上周两色球销售1.28亿 中出头奖15注</p>
                <p class="news-section-content pre-point-orange">上周两色球销售1.28亿 中出头奖15注</p>
                <p class="news-section-content pre-point-orange">上周两色球销售1.28亿 中出头奖15注</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MainRight',
    data() {
        return {}
    },
};
</script>
