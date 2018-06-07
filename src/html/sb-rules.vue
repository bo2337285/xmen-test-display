<template>
    <div class="main clear">
        <MainRight/>
        <div class="main-left-area">
            <div class="article">
                <div class="article-section">
                    <h3 class="article-section-title">
                        <div class="article-section-name">第一章</div>总则</h3>
                    <div class="article-section-paragraph">
                        <div class="article-section-name">第一条</div>
                        <div class="article-section-content">
                            时时彩是亚洲福利彩票有限公司发行的高频数字型电脑彩票游戏。
                        </div>
                    </div>
                    <div class="article-section-paragraph">
                        <div class="article-section-name">第二条</div>
                        <div class="article-section-content">
                            时时彩实行施自愿购买，凡购买该彩票均被视为同意并遵守本规则。 不得向未成年人销售彩票或兑付奖金。
                        </div>
                    </div>
                </div>
                <div class="article-section">
                    <h3 class="article-section-title">
                        <div class="article-section-name">第二章</div>投注和奖金</h3>
                    <div class="article-section-paragraph">
                        <div class="article-section-name">第一条</div>
                        <div class="article-section-content">
                            时时彩分为星彩玩法和同号玩法，每注投注金额为2000៛。
                        </div>
                    </div>
                    <div class="article-section-paragraph">
                        <div class="article-section-content">
                            <div class="title">
                                投注表
                            </div>
                            <table class="display-table">
                                <tr>
                                    <th>玩法</th>
                                    <th>规则</th>
                                    <th>单注倍投上限（倍）</th>
                                </tr>
                                <tr v-for="(item,idx) in betList" :key="idx">
                                    <td width="100">{{item.name}}</td>
                                    <td>{{item.rule}}</td>
                                    <td>{{item.ulimit}}</td>
                                </tr>
                            </table>
                            <div class="title">
                                中奖表
                            </div>
                            <table class="display-table">
                                <tr>
                                    <th>玩法</th>
                                    <th>规则</th>
                                    <th>单注奖金（柬币）</th>
                                    <th>单注奖金（美元）</th>
                                </tr>
                                <tr v-for="(item,idx) in betList" :key="idx">
                                    <td width="100">{{item.name}}</td>
                                    <td>{{item.rule}}</td>
                                    <td>{{item.riel}}</td>
                                    <td>{{item.dollar}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div class="article-section-paragraph">
                        <div class="article-section-name">第二条</div>
                        <div class="article-section-content">时时彩每天的销售时间为：09:00-23:00，每20分钟开奖一期，总共42期。</div>
                    </div>

                    <div class="article-section-paragraph">
                        <div class="article-section-name">第三条</div>
                        <div class="article-section-content">时时彩每期销售时间为19分30秒，开奖时间为30秒，开奖时间停止当期投注，20分钟结束后开始下一期投注。销售期号按每期开奖顺序编排。-100倍。单张彩票的投注金额最高不得超过10000000卡瑞尔（2500美元）。</div>
                    </div>
                    <div class="article-section-paragraph">
                        <div class="article-section-name">第四条</div>
                        <div class="article-section-content">购买者应在投注站进行投注。投注号码可由投注机随机产生，也可通过投注单将购买者选定的号码输入到投注机。投注号码经系统确认后打印出的对奖凭证即为时时彩彩票，交购买者保存。 </div>
                    </div>
                    <div class="article-section-paragraph">
                        <div class="article-section-name">第五条</div>
                        <div class="article-section-content">时时彩每期全部投注号码的可投注数量实行限量销售，若投注号码受限，则不能投注。 </div>
                    </div>
                    <div class="article-section-paragraph">
                        <div class="article-section-name">第六条</div>
                        <div class="article-section-content">若因销售终端故障、通讯线路故障和投注站授权额度受限等原因造成投注不成功，应退还投注者投注金额。 </div>
                    </div>
                </div>
                <div class="article-section">
                    <h3 class="article-section-title">
                        <div class="article-section-name">第三章</div>彩票资金</h3>
                    <div class="article-section-paragraph">
                        <div class="article-section-name">第一条</div>
                        <div class="article-section-content">
                            <p>1.时时彩按每期销售额的65%、15%、15%、5%分别计提彩票奖金、彩票税费、彩票发行费和调节基金。 其中彩票税费为该彩票向柬埔寨政府缴纳的税金部分，彩票发行费为彩票店的佣金和彩票运营发行成本，调节基金为用来加奖促销的备付金部分。</p>
                            <p>2.奖池由初始发行基金、每期未派完的奖金、弃奖、每期调节基金构成。</p>
                            <p>3.当期奖金不足时，由奖池补充；当奖金加上奖池也不足时，用发行费垫支。</p>
                        </div>
                    </div>
                </div>
                <div class="article-section">
                    <h3 class="article-section-title">
                        <div class="article-section-name">第四章</div>开奖</h3>
                    <div class="article-section-paragraph">
                        <div class="article-section-name">第一条</div>
                        <div class="article-section-content"> 时时彩采用专用电子开奖设备开奖，每期开出一组5位自然数作为当期开奖号码。开奖号码的顺序不能颠倒，每期开奖时间为30秒。</div>
                    </div>
                    <div class="article-section-paragraph">
                        <div class="article-section-name">第二条</div>
                        <div class="article-section-content"> 每期开奖统计数据以亚洲福利彩票有限公司的官方网站所公布的开奖数据为准。亚洲福利彩票有限公司每天将当日所有数据归集并写入两个物理存储空间保存。 </div>
                    </div>
                    <div class="article-section-paragraph">
                        <div class="article-section-name">第三条</div>
                        <div class="article-section-content"> 每期开奖后，将当期开奖号码和各奖等中奖注数同步到各销售终端。 </div>
                    </div>
                </div>
                <div class="article-section">
                    <h3 class="article-section-title">
                        <div class="article-section-name">第五章</div>兑奖</h3>
                    <div class="article-section-paragraph">
                        <div class="article-section-name">第一条</div>
                        <div class="article-section-content"> 时时彩中奖当期有效。每期自开奖之日起60个自然日为兑奖期，逾期未兑视为弃奖。弃奖奖金纳入调节基金，调节基金定期通过终端向全社会公布。</div>
                    </div>
                    <div class="article-section-paragraph">
                        <div class="article-section-name">第二条</div>
                        <div class="article-section-content">中奖彩票为兑奖唯一凭证，中奖彩票因玷污、损坏等原因不能正确识别的，不能兑奖。 </div>
                    </div>
                    <div class="article-section-paragraph">
                        <div class="article-section-name">第三条</div>
                        <div class="article-section-content">亚洲福利彩票有限公司有权查验中奖者的中奖彩票及有效身份证件，兑奖者应予配合。</div>
                    </div>
                    <div class="article-section-paragraph">
                        <div class="article-section-name">第四条</div>
                        <div class="article-section-content">投注者单笔中奖额超过20,000,000៛ （包含）时，投注者应持中奖票到亚洲福利彩票有限公司兑奖处进行兑奖。</div>
                    </div>
                </div>

                <div class="article-section">
                    <h3 class="article-section-title">
                        <div class="article-section-name">第六章</div>附则</h3>
                    <div class="article-section-paragraph">
                        <div class="article-section-name">第一条</div>
                        <div class="article-section-content">本规则自批准之日起执行。</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MainRight from './MainRight-sb.vue';
export default {
    name: 'Rules',
    data() {
        return {
            betList: [
                {name: "五星",rule:"按顺序投注全部5位号码，即万位、千位、百位、十位和个位",ulimit:"100",riel:"160,000,000៛",dollar:"$40,000"},
                {name: "四星",rule:"按顺序投注后4码，即千位、百位、十位和个位",ulimit:"100",riel:"15,000,000៛",dollar:"$3,750"},
                {name: "三星",rule:"按顺序投注后3码，即百位、十位和个位 ",ulimit:"100",riel:"1,300,000៛",dollar:"$325"},
                {name: "二星",rule:"按顺序投注后2码，即十位和个位 ",ulimit:"100",riel:"90,000៛",dollar:"$22.5"},
                {name: "一星",rule:"投注最后1码，即个位。 ",ulimit:"100",riel:"8,000៛",dollar:"$2"},
                {name: "五同",rule:"投注一个号码，开奖号码中出现5个相同的号码且与投注者号码相同。 ",ulimit:"100",riel:"180,000,000៛",dollar:"$45,000"},
                {name: "四同",rule:"投注一个号码，开奖号码中出现任意4个相同的号码且与投注者号码相同。 ",ulimit:"100",riel:"3,000,000៛",dollar:"$750"},
                {name: "三同",rule:"投注一个号码，开奖号码中出现任意3个相同的号码且与投注者号码相同。 ",ulimit:"100",riel:"100,000៛",dollar:"$25"},
            ]
        }
    },
    components: {
        MainRight
    }
};
</script>
