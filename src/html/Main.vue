<template>
    <div class="wrap">
        <div class="top-bar-box">
            <div class="top-bar clear">
                <div class="copy-right fl">Copyright ©2006-2017 Asian Welfare Lottery</div>
                <ul class="switch-language fr">
                    <li lang="cn">
                        <i class="lang cn"></i>
                        <span data-lang="14">汉语</span>
                    </li>
                    <li class="line">|</li>
                    <li lang="en">
                        <i class="lang en"></i>
                        <span data-lang="15">英语</span>
                    </li>
                    <li class="line">|</li>
                    <li lang="kh">
                        <i class="lang kh"></i>
                        <span data-lang="13">高棉语</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav-box">
            <div class="top-nav clear">
                <div class="logo fl">
                    <img src="../img/logo.png">
                </div>
                <ul class="nav-list fr">
                    <li class="nav-item">
                        <span class="spot"></span>
                        <a href="../index.html" data-lang="0">首页</a>
                        <span class="spot"></span>
                        <span class="arc"></span>
                    </li>
                    <li class="nav-item">
                        <span class="spot"></span>
                        <a href="companyInfo.html" data-lang="1">企业介绍</a>
                        <span class="spot"></span>
                        <span class="arc"></span>
                    </li>
                    <li class="nav-item active">
                        <span class="spot"></span>
                        <!-- <a href="javascript:void(0);" data-lang="2">产品</a> -->
                        <span>
                            <router-link to="/bb">两色球</router-link>
                        </span>
                        <span class="spot"></span>
                        <span class="arc"></span>
                    </li>
                    <li class="nav-item">
                        <span class="spot"></span>
                        <span>
                            <router-link to="/sb">时时彩</router-link>
                        </span>
                        <span class="spot"></span>
                        <span class="arc"></span>
                    </li>
                    <li class="nav-item">
                        <span class="spot"></span>
                        <span>
                            <router-link to="/hh">Hengheng</router-link>
                        </span>
                        <span class="spot"></span>
                        <span class="arc"></span>
                    </li>
                    <li class="nav-item">
                        <span class="spot"></span>
                        <a href="charity.html" data-lang="3">公益事业</a>
                        <span class="spot"></span>
                        <span class="arc"></span>
                    </li>
                    <!--<li class="nav-item">-->
                    <!--<span class="spot"></span>-->
                    <!--<a href="winners.html">阳光开奖</a>-->
                    <!--<span class="spot"></span>-->
                    <!--<span class="arc"></span>-->
                    <!--</li>-->
                    <li class="nav-item">
                        <span class="spot"></span>
                        <a href="news.html" data-lang="4">新闻</a>
                        <span class="spot"></span>
                        <span class="arc"></span>
                    </li>
                    <li class="nav-item">
                        <span class="spot"></span>
                        <a href="investment.html" data-lang="5">商务合作</a>
                        <span class="spot"></span>
                        <span class="arc"></span>
                    </li>
                    <li class="nav-item">
                        <span class="spot"></span>
                        <a href="recruitment.html" data-lang="6">社会招聘</a>
                        <span class="spot"></span>
                        <span class="arc"></span>
                    </li>
                    <li class="nav-item">
                        <span class="spot"></span>
                        <a href="aboutUs.html" data-lang="7">联系我们</a>
                        <span class="spot"></span>
                        <span class="arc"></span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sub-nav">
            <div class="container">
                <ul class="sub-nav-list">
                    <li :class="{active:$route.path == item.url}" v-for="(item,idx) in subNavList" :key="idx">
                        <router-link :to="item.url">{{item.label}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="isShowBannerBB" class="banner-small">
            <div class="container">
                <img src="../img/bb-logo.png" alt="logo" />
                <label class="title">两色球</label>
                <label class="text">每周二、四、日 XX:XX于柬埔寨XX电视台X频道直播开奖</label>
            </div>
        </div>
        <div v-if="isShowBannerSB" class="banner-small">
            <div class="container">
                <img src="../img/sb-logo.png" alt="logo" />
                <label class="title">时时彩</label>
                <label class="text">09:00-23:00（42期）20分钟一期，即时视频直播开奖</label>
            </div>
        </div>
        <div v-if="isShowBannerHH" class="banner-small">
            <div class="container">
                <img src="../img/hh-logo.png" alt="logo" />
                <label class="title">Hengheng</label>
                <label class="text">即刮即中，各彩票站点线下售卖</label>
            </div>
        </div>

        <!-- content start -->
        <router-view></router-view>
        <!-- content end -->
        <div class="footer">
            <div class="footer-box">
                <div class="site-info clear">
                    <ul class="site-list fl">
                        <li class="site-item">
                            <p data-lang="21">更多信息</p>
                            <span class="item-center" href="#" data-lang="22">常见问题</span>
                            <span href="#" data-lang="23">联系我们</span>
                        </li>
                        <li class="site-item">
                            <p data-lang="24">关注我们</p>
                            <span class="item-center" href="#" data-lang="25">Facebook</span>
                            <span href="#" data-lang="26">新浪微博</span>
                        </li>
                        <li class="site-item">
                            <p data-lang="27">法律政策</p>
                            <a class="item-center" href="termsService.html" data-lang="28">服务条款</a>
                            <a href="privacyPolicy.html" data-lang="29">隐私政策</a>
                        </li>
                        <li class="site-item">
                            <p data-lang="30">关于我们</p>
                            <a class="item-center" data-lang="31" href="companyInfo.html">公司简介</a>
                            <span href="#" data-lang="32">彩票牌照</span>
                        </li>
                        <li class="site-item">
                            <p data-lang="33">加盟方式QQ</p>
                            <span class="item-center" href="#">454522020</span>
                            <span href="#">454522020</span>
                        </li>
                    </ul>
                    <div class="download fr">
                        <p class="download-tip" data-lang="34">扫码下载APP</p>
                        <div class="download-code">
                            <img src="../img/app-code.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bar">
                <div class="footer-box">
                    <div class="footer-links">
                        <a href="#" class="link-icon facebook"></a>
                        <a href="#" class="link-icon twitter"></a>
                        <a href="#" class="link-icon google"></a>
                    </div>
                    <span data-lang="35">客服热线</span> 4008-365-365
                    <div class="copy-right" data-lang="36">© 2018 亚洲福利彩票有限公司 版权所有</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
@import url("../css/main.css");
@import url("../css/pages/product.css");
</style>

<script>
export default {
    name: 'Main',
    data() {
        return {
        }
    },
    computed: {
        subNavList() {
            let path = this.$route.path
            if (path.indexOf("/bb/") != -1) {
                return [
                    { label: '最新资讯', url: '/bb/news' },
                    { label: '往期开奖', url: '/bb/previous' },
                    { label: '开奖公告', url: '/bb/notice' },
                    { label: '开奖视频', url: '/bb/video' },
                    { label: '游戏规则', url: '/bb/rules' },
                    { label: '市场动态', url: '/bb/dynamics' },
                ]
            } else if (path.indexOf("/sb/") != -1) {
                return [
                    { label: '最新资讯', url: '/sb/news' },
                    { label: '往期开奖', url: '/sb/previous' },
                    { label: '开奖视频', url: '/sb/video' },
                    { label: '游戏规则', url: '/sb/rules' },
                    { label: '市场动态', url: '/sb/dynamics' },
                ]
            } else{
                return [
                    { label: '最新资讯', url: '/hh/news' },
                    { label: '在线试玩', url: '/hh/try' },
                    { label: '防伪识别', url: '/hh/antifake' },
                ]
            }
        },
        isShowBannerBB(){
            return this.$route.path.indexOf("/bb/") !== -1 && this.$route.path !== '/bb/news'
        },
        isShowBannerSB(){
            return this.$route.path.indexOf("/sb/") !== -1 && this.$route.path !== '/sb/news'
        },
        isShowBannerHH(){
            return this.$route.path.indexOf("/hh/") !== -1 && this.$route.path !== '/hh/news'
        }
    }
};
</script>
