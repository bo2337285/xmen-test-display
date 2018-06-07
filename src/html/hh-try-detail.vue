<template>
    <div class="main lottery-detail-wrapper clear">
        <h3 class="try-detail-title">{{$route.query.title}}</h3>
        <div class="try-detail-info">
            <div class="try-detail-thumbnail">
                <img class="try-detail-thumbnail-bg" :src="thumbnail" alt="">
                <img class="try-detail-thumbnail-win" :src="winImg" alt="">
            </div>
            <div class="try-detail-play clear">
                <div class="fl">
                    <p>投入彩金
                        <span class="font-orange">1,000</span>瑞尔</p>
                    <p>获得奖金
                        <span class="font-orange">5,000</span>瑞尔</p>
                    <p>
                        <select name="" id="">
                            <option value="1">来张别的</option>
                        </select>
                    </p>
                </div>
                <div class="fr">
                    <p><button class="try-detail-play-btn">兑奖</button></p>
                    <p style="margin-top:24px;"><button class="try-detail-play-btn reversed">再来一张</button></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import thumbnail from '@/img/main-bottom.png';
import winImg from '@/img/try-detail-win.png';
export default {
    name: 'LotteryDetail',
    data() {
        return {
            thumbnail,
            winImg
        }
    },
};
</script>
