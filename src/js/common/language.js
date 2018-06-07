

require.config(config);
define(['jquery', 'Util'], function ($, util) {
  var langArr = [],
      js_lang = [];
  var lang = util.Store.loadObject("lang");
  if (!lang) {
    util.Store.saveObject("lang", "cn");
    lang = "cn";
  }
  if (lang === "en") {
    //英语
    //界面中的文字
    langArr = ["Home", //0,首页
    "Enterprise", //1,企业介绍
    "Product", //2,产品
    "Charity", //3,公益事业
    "News", //4,新闻
    "Investment", //5,商务合作
    "Recruitment", //6,社会招聘
    "Contact us", //7,联系我们
    "Product information", //8,产品资讯
    "In 2018, the AWL will focus on the Internet lottery which are deployed to the whole type of lottery ecological chain, including quick scrape, lotto, high frequency, horse racing, sports guesses and electronic BINGO.", //9,2018年，AWL将会着力于互联网彩票端，产品部署至即开、乐透、高频、赛马、体育竞猜和电子BINGO在内的全彩种生态链。
    "Learn more", //10,了解更多
    "Enterprise", //11,企业介绍
    "The company has the role of issuing and operating highly-qualified lottery tickets. It is a new international gambling force based on the radiation of Southeast Asia.", //12,公司以发行和运营高品质彩票为己任，是立足东南亚辐射全球的跨国博彩新势力。
    "Khmer", //13,柬埔寨语
    "Chinese", //14,中文
    "English", //15,英文
    "AWL carries out a series of social public welfare activities, such as education aid, pension, poverty alleviation, and so on in Cambodia and other southeast Asian countries shouldering the social responsibility of a good enterprise.", //16,AWL在柬埔寨等东南亚国家开展助学、养老、扶贫等一系列社会公益活动，将彩票公益金切实惠及于民，肩负起一个优秀企业的社会责任。
    "Public welfare lottery", //17,公益福利彩票
    "Liability welfare lottery", //18,责任福利彩票
    "Sunshine welfare lottery", //19,阳光福利彩票
    "Good faith welfare lottery", //20,诚信福利彩票
    "More information", //21,更多信息
    "Frequently asked questions", //22,常见问题
    "Contact us", //23,联系我们
    "Follow us", //24,关注我们
    "Facebook", //25,Facebook
    "Sina Weibo", //26,新浪微博
    "Policy of the law", //27,法律政策
    "Term of service", //28,服务条款
    "Privacy policy", //29,隐私政策
    "About us", //30,关于我们
    "Company profile", //31,公司简介
    "Lottery license", //32,彩票牌照
    "Join mode QQ", //33,加盟方式QQ
    "Scan to download APP ", //34,扫码下载APP
    "Customer service hotline", //35,客服热线
    "Copyright 2018 Asian welfare lottery co., Ltd. All rights reserved ", //36,© 2018 亚洲福利彩票有限公司 版权所有
    "AWL (Asia welfare lottery Co., Ltd.) is an international Gambling company with high technology. The company has the role of issuing and operating highly-qualified lottery tickets. It is a new international gambling force based on the radiation of Southeast Asia.", //37,AWL（亚洲福利彩票有限公司），是一家高科技的国际化博彩公司。公司以发行和运营高品质彩票产品为己任，是立足东南亚，辐射全球的跨国博彩新势力。
    "The company is located in Cambodia. In accordance with the form of multilateral cooperation and the policy of mutual benefit, AWL has currently set up more than 2000 lottery stations and also more than 40 social channels in Cambodia.", //38,公司注册在柬埔寨，通过异业合作，招商加盟，公司当前已经在柬埔寨建设了12000家彩票投注站和40多个社会渠道。
    "In 2018, the AWL will focus on the Internet lottery which are deployed to the whole type of lottery ecological chain, including quick scrape, lotto, high frequency, horse racing, sports guesses and electronic BINGO. ", //39,2018年，AWL将会发力互联网，将产品部署到即开、乐透、高频、赛马、体育竞猜和电子bingo在内的全彩种生态链。
    "While completing the layout of the lottery market, AWL has carried out a series of social public welfare activities such as education aid, pension, assisting the poor, and so on in Cambodia and other Southeast Asian countries which make AWL become an excellent enterprise for its benefitting people and social responsibility. ", //40,在做好彩票市场布局的同时，AWL在柬埔寨等东南亚开展助学、养老、扶贫等一系列社会公益活动，将彩票公益金切实惠及于民，肩负起一个优秀企业的社会责任。
    "First time using mobile APP for claiming reward", //41,首次采用手机APP兑奖
    "First time using the advanced QR code anti-counterfeiting security identification system prize claim technology.", //42,首次采用了先进的二维码防伪保安识别系统兑奖技术
    "Fast, safe and reliable.", //43,快速安全又可靠
    "Mobile reward claiming, easy and convenient", //44,手机兑奖 轻松完成
    "Step 1", //45,步骤1
    "Scan to download the Asian welfare lottery APP.", //46,扫码下载亚洲福利彩票APP
    "Step 2", //47,步骤2
    "Log on homepage and click on I want to claim the prize.", //48,登录首页点击我要兑奖
    "Step 3", //49,步骤3
    "Scan the QR code on the ticket", //50,扫描彩票上的二维码
    "Step 4", //51,步骤4
    "Upon your competition, the winning bonus is deposited into the balance of the account", //52,兑奖成功奖金存入账户余额
    "Buy now, scrape now, win now, and claim now, face-to-face experiencing the feeling of winning the prize. The game is varied, fascinating and simple to play. The pictures are printed beautifully. We regularly issue some commemorative tickets with a certain collection value on the theme of sports events, major festivals, public interest and so on.", //53,即买、即开、即中、即兑，面对面体验中奖的感觉。游戏种类丰富，趣味性强，玩法简单。画面印制精美，定期会发行一些以体育赛事、重大节日、公益宣传等为主题的具有纪念意义的票种，具有一定收藏价值。
    "To raise the lottery public welfare fund and support the progress and development of social welfare is the starting point for issuing lottery tickets, and also the keynote of Asian welfare lottery business. Since the founding of the AWL, in accordance with the purpose of public welfare, responsibility, sunshine and integrity, it is our long-term responsibility to provide welfare and guarantee for the Cambodia, and promote the development of social welfare in Cambodia.", //54,筹集彩票公益金支持社会福利事业进步和发展是发行彩票的出发点，也是亚洲福利彩票事业的主旨。AWL自成立以来，本着公益、责任、阳光、诚信的宗旨，为柬埔寨社会各界提供福利和保障，切实提升和促进柬埔寨的社会福利事业发展是我们长久的责任。
    "News", //55,公司新闻
    "Overall layout of AWL Lottery products on the Internet", //56,AWL彩票产品互联网端全面布局
    "In new media era, every media and network platform are blooming like flower in garden. All kinds of scales and scopes, from the Internet giants to the street pancakes business running their own public numbers, is using internet. In 2018, the AWL will focus on the Internet lottery which are deployed to the whole type of lottery ecological chain, including quick scrape, lotto, high frequency, horse racing, sports guesses and electronic BINGO.", //57,新媒体时代，各自媒体平台犹如百花齐放，绽放在我们的网络里。大到互联网巨头，小到街头煎饼摊都在运营着自己的公众号。2018年，AWL将会着力于互联网彩票端，产品部署至即开、乐透、高频、赛马、体育竞猜和电子BINGO在内的全彩种生态链。
    "Locally-adapted-khmer-features-lotteries are listed on the market now. ", //58,因地制宜的柬埔寨特色即开票上市了
    "A series of quick scrape lottery tickets such as the smile of Khmer, billions of blessings, the golden age, fortune everywhere, and TUKTUK coming are being on the sale now. The beautiful design, varied and colorful games, and millions of US dollars prize awaiting for you!", //59,高棉的微笑，十亿祝福，黄金时代，八方来财，TUKTUK系列即开票同期上市，精美的票面，丰富多彩的游戏，更有百万美金大奖等你来拿！
    "Warm celebration to lottery winner of the millions US dollars prize in Phnom Penh!", //60,热烈庆祝金边彩民喜中百万美金大奖！
    "In less than a month after the AWL quick-scrape-lottery series went on sale, Phnom Penh's lucky lottery player won the millions of US dollars big prize, Is this the luck of a sudden?. No, AWL's journey of creating rich people is just beginning, the next one is you. ", //61,在AWL系列即开票上市不到一个月的时间里，金边幸运彩民喜中百万美金大奖，幸运来的很突然吗？不，AWL在制造富翁的征途刚刚开始，下一个就是你！
    "Investment introduction", //62,招商简介
    "Product introduction", //63,产品介绍
    "Lottery branches", //64,网点分布
    "Lottery agent type selection", //65,彩票代理类型选择
    "We have three types of retailers that you can choose to apply for", //66,我们有三种类型的零售商，你可以选择申请成为任意一种
    "Lottery station channel", //67,彩票站渠道
    "Our qualifications", //68,我们的资质
    "Social network channel", //69,社会网点渠道
    "Internet channel", //70,互联网渠道
    "Advantages of becoming our retailer", //71,成为我们零售商的优势
    "Expanding the retailer is the core of our business ", //72,扩展零售商是我们业务的核心，
    "This is why we offer the most competitive returns to our retailers in the market.", //73,这就是为什么我们为市场上的零售商提供了最有竞争力的回报，
    "Asian welfare lottery retailers can enjoy the following benefits", //74,亚洲福彩零售商可享受以下优惠
    "Very high profit margin ", //75,极高的利润提成
    "Weekly home cash service ", //76,每周的上门提现服务
    "Loan booking service", //77,借贷订票服务
    "Profit distribution introduction", //78,利润分配说明
    "Member who has made at least five valid bets and has a total bet of not less than 500RMB in the monthly closing interval!", //79,月结区间内进行过 最少五次有效下注 且投注总额不低于500RMB的会员！
    "If the alliance system does not reach {monthly minimum effective member}, 5 people at least in current month, you cannot receive commission feedback. The alliance system met its standards for profits in current month.", //80,如联盟体系当月未达{月最低有效会员}最低门坎5人，则该月无法领取佣金回馈。联盟体系当月营利达到标准，
    "Search site", //81,搜索网点
    "Search store name or address", //82,搜索店名称或者地址
    "Search", //83,搜索
    "Batambong Province", //84,马德望省
    "Store name", //85,门店名称
    "Address", //86,地址
    "Contact number", //87,联系电话
    "Office hour", //88,营业时间
    "Let everyone be creative to the full", //89,让每个人尽情发挥创意
    "In Asian welfare lottery, the atmosphere of entrepreneurship gives everyone positive innovation to make good things. There is no sense of hierarchy here, and everyone can present ideas and innovation recommendation at any time.", //90,在亚洲福利彩票，创业的氛围让每个人都积极的创新为做出美好的事情而努力。在这里没有大公司的等级观念，每个人都可以随时提出自己的创意和想法。
    "Create exciting products together ", //91,一起做出激动人心的产品
    "Let everyone enjoy the fun of science and technology. Asian Welfare Lottery Co., Ltd. pioneered the use of Internet-based-claiming-prize model, and this will be the world's first Internet-based-claiming-prize platform for great products that will stamp on your brand!!!", //92,让每个人都能享受科技乐趣。亚洲福利彩票有限公司首创了用互联网技术兑奖模式，将兑奖技术打造成全球首个互联网兑奖平台让伟大的产品铭刻你的烙印！
    "Work with smart people", //93,与聪明人一起做事
    "Asian Welfare Lottery Co., Ltd. possesses the first-class talented people in the Internet. And the team members are top talents from international enterprises and the gambling industry, such as Sina, Tencent, Baidu, China Welfare Lottery, China Sports Lottery, etc.", //94,亚洲福利彩票有限公司有着一流的互联网人才基因，创业团队成员是来自新浪、腾讯、百度、中国福利彩票、中国体育彩票等国际企业和博彩行业的顶尖人才
    "[operations Manager]", //95,【运营经理】
    "Job responsibilities:", //96,岗位职责：
    "Job specification:", //97,任职要求：
    "[product operation]", //98,【产品运营】
    "Job responsibilities:", //99,岗位职责：
    "If you have any questions about our products, you can leave your contact information", //100,对于我们的产品有任何疑问都可留下您的联系方式
    "Our staff will reply to you within 3 days", //101,我们的工作人员将会在3天内回复您
    "Full name", //102,姓名
    "Email", //103,邮箱
    "Message", //104,信息
    "Submit", //105,提交
    "How many types of claiming?", //106,1. 兑奖有哪几种？
    "There are 2 types of claiming: Scan claim and manual claim", //107,兑奖分为两种方式：扫码兑奖和手动输入安全码兑奖。
    "How do I use the scan claim function?", //108,2. 怎样使用扫码兑奖功能？
    "First, the application should be allowed to access the camera function of the mobile phone, and then the code sweeper should be directed at the QR code in the security area of the lottery. If the QR code of the lottery is damaged, you can use manual claim method to claim the prize.", //109,首先应该允许该应用访问手机的相机功能，然后扫码器对准彩票上保安区的二维码，扫码成功后则会出现相应提示。若彩票二维码破损，则可以使用手动输入的方法进行兑奖。
    "How to use manual claim function?", //110,3. 怎样使用手动输入兑奖功能？
    "When the QR code of lottery at security area is damaged or blurred, you can choose to enter the safety code manually. The safety code is located above the QR code of the security area.", //111,彩票保安区二维码有破损或模糊不清的时候，可以选择手动输入安全码，安全码位于保安区二维码的上方。
    "Investment policy", //112,招商政策
    "Sign contract to get $5，000，of the quick-scrape lottery, Sell first and pay latter, a new model of Lottery Product Management without capital deposit and getting rich quick.", //113,签约就送5000美金额度的即开型彩票，实现先销售，后付钱不押资金快致富的彩票产品经营新模式。
    "Sign contract to get bonus", //114,签约即送
    "A new model of Lottery Product Management without capital deposit and getting rich quick.", //115,不押资金，快速致富的彩票产品经营新模式
    "No entry barrier", //116,零门槛入驻
    "Asian Welfare Lottery undertakes not to charge any agents certificate money, deposit, etc. Sign contract to get $5, 000 of the quick-scrape lottery, Sell first and pay latter, a new model of Lottery Product Management without capital deposit and getting rich quick.", //117,亚洲福利彩票承诺不向任何代理商收取保证金、押金等费用。签约就送5000美金额度的即开型彩票，实现先销售，后付钱，不押资金快致富的彩票产品经营新模式。
    "Provide revenue statement", //118,提供营收报表
    "Provide detailed revenue report data to the agents to make the income situation more intuitive and clearer for settling.", //119,为代理商提供详细的营收报表数据，让收益情况更直观，结算更清晰。
    "High and large dividends", //120,分红丰厚
    "Provide high and large dividends through providing agents with the highest sales commission rate in Cambodia based on sales ", //121,分红丰厚，按照销量给与代理商具有全柬埔寨最高的销量提成。
    "Provide sales support", //122,提供销售支持
    "Provide marketing training and sales support to agents. Organize sales salon to help agents quickly familiarize with business and establish efficient as well as active sales mechanism.", //123,为代理商提供营销培训和销售支持。不定期的组织各种销售人员分享沙龙，帮助代理商快速熟悉业务，建立高效、活跃工作销售机制。
    "Asia Welfare Lottery (www.lotteryasian.com) is part of Asian welfare lottery Co., Ltd., which sells lottery tickets online. This Agreement is made for the purpose of conducting lottery sales in Asia Welfare Lottery. Before you register as an Asian Welfare Lottery user, please read carefully and understand the terms and conditions of this Agreement, especially the exclusion or limitation of liability article, the application of the law and dispute settlement article, which may clarify your obligations or limit your rights. Unless you accept all terms and condition of this Agreement, you are not entitled to register, log on or use the services covered by this Agreement. If you register, log in, or use the services covered by this Agreement, you will be deemed to have accepted this Agreement in its entirety, which means that you agree to be bound by the terms and conditions of this Agreement. If you do not agree to the terms and conditions of this Agreement, please do not register, log in or use the related service of this agreement. This Agreement is a binding legal agreement between you (user) and Asian welfare lottery Co., Ltd., (Asian Welfare Lottery).", //124,亚洲福利彩票（www.lotteryasian.com）隶属于亚洲福利彩票有限公司，开展网上销售彩票业务。本协议为亚洲福利彩票进行彩票销售业务与用户相关的事宜而订立，在您注册成为亚洲福彩用户之前，请务必认真阅读和充分理解本协议中各条款内容，特别是免除或者限制责任的条款、法律适用及争议解决条款，因为这些条款可能会明确您应履行的义务或对您的权利有一定限制。除非您接受本协议所有条款，否则您无权注册、登录或使用本协议所涉及的相关服务。若您注册、登录、使用或以任何方式使用本协议所涉及的相关服务的行为将视为对本协议的全部接受，即表示您同意接受本协议各项条款的约束。如果您不同意本协议中的条款，请勿注册、登录或使用本协议相关服务。 本协议是您（或称为“用户”）与亚洲福利彩票有限公司（下称“亚洲福彩”）之间的对双方有约束力的法律协议。
    "service content", //125,1. 服务内容
    "The Asian Welfare Lottery (www.lotteryasian.com) provides Internet-based and mobile Internet-related services in full compliance in accordance with its published terms of service and operating rules (hereinafter referred to as 'Web Services').  The specific contents of the Asian welfare lottery network service are provided by its company according to the actual situation, including but not limited the Asian welfare lottery web version and mobile version of the sale of lottery services, award collection services, transfer services, cash services, etc.", //126,1.1 亚洲福彩（www.lotteryasian.com），完全按照其发布的服务条款和操作规则提供基于互联网以及移动互联网的相关服务（以下简称“网络服务”）。亚洲福彩网络服务的具体内容由亚洲福彩根据实际情况提供，包括但不限于亚洲福彩网页版、移动版等售彩服务、兑奖服务、转账服务、提现服务等。
    "Once you have successfully registered as a user, you will be given an account and password, and you will be held fully responsible for all activities and transaction in your account. If your account and password are out of your control as a result of your fault, you will be fully liable for the damage caused to you yourself, the Asian Welfare Lottery or any third party.", //127,1.2 您一旦注册成功成为用户，将得到一个账号和密码，您需要对自己在账户中的所有活动和事件负全责。如果由于您的过错导致您的账号和密码脱离您的控制，则由此导致的针对您、亚洲福彩或任何第三方造成的损害，您将承担全部责任。
    "Users should input account number and password to log into the Asian Welfare Lottery account.", //128,1.3 用户应输入账号和密码登录亚洲福彩账户。
    "Users understand and accept that the Asian Welfare Lottery provides only network-related services. For the network-related device (such as personal computers, mobile phones, and other devices connected for access to the Internet or mobile Internet) and the required costs (such as telephone and Internet charges paid for Internet access and mobile phone charges paid for the use of mobile networks) shall be borne by the user himself/herself.", //129,1.4 用户理解并接受，亚洲福彩仅提供相关的网络服务，除此之外与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动互联网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均应由用户自行负担。
    "User usage rule", //130,  2. 用户使用规则
    "When applying for the use of the network service of the Asia Welfare Lottery, users must provide true, accurate, complete and effective personal data to our company. If the personal provided is inaccurate, untrue, illegal, non-detailed, or modified, you must be updated or modified in time. All consequences arising from the user's inaccurate, untrue, illegal and non-detailed provision of personal data shall be borne by the user himself/herself, and the Asian Welfare Lottery reserves the right to stop users from using the Asian Welfare Lottery Service.", //131,  2.1 用户在申请使用亚洲福彩网站网络服务时，必须向亚洲福彩提供真实、准确、完整有效的个人资料，如个人资料提供不准确、不真实、不合法、不详尽或有任何变动的，必须及时更新或修改。因用户提供个人资料不准确、不真实、不合法、不详尽而引发的一切后果由用户承担，并且亚洲福彩保留停止用户使用亚洲福彩服务的权利。
    "Users should not transfer their accounts and passwords, lend or be out of the user's control in any form to other people. If the account is found to be illegally used, the user should immediately notify the Asian Welfare Lottery. If the account number, password is illegally used by others due to being hacked or carelessness of the user, Asia Welfare Lottery does not bear any responsibility.", //132,  2.2 用户不应将其账号、密码转让、出借或以任何脱离用户控制的形式交由他人使用。如用户发现其账号遭他人非法使用，应立即通知亚洲福彩。因黑客行为或用户的保管疏忽导致账号、密码遭他人非法使用，亚洲福彩不承担任何责任。
    "The user shall be responsible for all acts under his registered account. Asian Welfare Lottery does not bear responsibility for any loss or damage caused to the user by user's behavior or any other third party.", //133,  2.3 用户应当为自身注册账户下的一切行为负责，因用户行为而导致的用户自身或其他任何第三方的任何损失或损害，亚洲福彩不承担责任。
    "Users understand and accept that services provided by the Asian Welfare Lottery may be sent through the company itself or by third-party advertisers, including but not limited to e-mail, SMS, telephone, in-station mail which are commercial or non-commercial advertising, promotion or notice information (including commercial or non-commercial information); other methods and scope may be changed without special notice to user. Users agree to display advertisements provided by Asian welfare lottery and third-party advertisers and its partners during the use of online services; and the Asian welfare lottery does not have to pay users any price for this. With regard to the advertising information that appears during services providing by the Asian Welfare Lottery, you should carefully judge its authenticity and reliability, and you shall be responsible for the transaction with the cheating advertising information if you made. The Asian Welfare Lottery shall not be liable for any loss or damage you are suffered as a result of the transaction based on the advertising information or the content provided by the aforementioned advertiser.", //134,  2.4 用户理解并接受亚洲福彩提供的服务中可能自行或由第三方广告商通过包括但不限于邮件、短信、电话、站内信的方式向您发送商业或非商业广告、推广或宣传信息（包括商业或非商业信息），其他方式和范围可不经向您特别通知而变更。用户同意在使用网络服务的过程中显示亚洲福彩和第三方广告商、合作伙伴提供的广告，且亚洲福彩无需向用户支付任何对价。对于亚洲福彩提供的服务中出现的广告信息，您应当自行审慎判断其真实性和可靠性，除法律明确规定外，您应对该广告信息进行的交易负责，您因依该广告信息进行的交易或前述广告商提供的内容而遭受的损失或损害，亚洲福彩不承担责任。
    "In using the Asian Welfare Lottery Network Service, users must follow the following principles:", //135,  2.5 用户在使用亚洲福彩网络服务过程中，必须遵循以下原则：
    "Abide by the relevant local laws and regulations;", //136,  2.5.1 遵守当地有关的法律和法规；
    "Abide by all network protocol, regulations and procedures related to web services", //137,  2.5.2 遵守所有与网络服务有关的网络协议、规定和程序；
    "The Asian Welfare Lottery Network Service system shall not be used for any illegal purpose;", //138,  2.5.3 不得为任何非法目的而使用亚洲福彩网络服务系统；
    "You are not permitted to use the Asian Welfare Lottery Network Service system to carry out any behavior that may have adverse effects on the normal operation of the Internet or mobile network.", //139,  2.5.4 不得利用亚洲福彩网络服务系统进行任何可能对互联网或移动网正常运转造成不利影响的行为；
    "You are not permitted to upload, display or disseminate any false, harassing, abusive, abusive, threatening, vulgar, obscene or any other illegal information material by using the network services provided by the Asian Welfare Lottery;；", //140,  2.5.5 不得利用亚洲福彩提供的网络服务上传、展示或传播任何虚假的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的或其他任何非法的信息资料；
    "You shall not infringe upon the Asian Welfare Lottery and any other third party's patent, copyright, trademark, reputation or any other lawful interest;；", //141,  2.5.6 不得侵犯亚洲福彩和其他任何第三方的专利权、著作权、商标权、名誉权或其他任何合法权益；
    "The Asian Welfare Lottery Network Service system shall not be used to carry out any act against the Asian Welfare Lottery;；", //142,  2.5.7 不得利用亚洲福彩网络服务系统进行任何不利于亚洲福彩的行为；
    "You shall not transmit or publish following activities: inciting violent resistance, destruction of the Constitution and the law, Comment on the implementation of administrative regulations, inciting the subversion of the state power, comment on overthrow the socialist system, inciting the speech of splitting the country, undermining the unity of the country, inciting national hatred,ethnic discrimination, the destruction of national unity;", //143,  2.5.8 不得传输或发表：煽动抗拒、破坏宪法和法律、行政法规实施的言论，煽动颠覆国家政权，推翻社会主义制度的言论，煽动分裂国家、破坏国家统一的言论，煽动民族仇恨、民族歧视、破坏民族团结的言论；
    "If you find any illegal use of user accounts or account security vulnerabilities, you should immediately notify the Asian Welfare Lottery. ", //144,  2.5.9 如发现任何非法使用用户账号或账号出现安全漏洞的情况，应立即通告亚洲福彩。
    "If the user violates any of the above regulations while using the network service, the Asian Welfare Lottery or its authorized person shall have the right to require the user to correct or take all necessary measures directly (including but not limited to altering or deleting the contents of the user's collection, etc., suspending or terminating the user's right to use our network service) to mitigate the impact of users’ misconduct. If the user violates any of the above regulations and results in any damage to any third party, you shall be liable independently, and if the Asian Welfare Lottery also suffers, you shall also compensate.", //145,  2.6 如用户在使用网络服务时违反任何上述规定，亚洲福彩或其授权的人员有权要求用户改正或直接采取一切必要的措施（包括但不限于更改或删除用户收藏的内容等、暂停或终止用户使用网络服务的权利）以减轻用户不当行为造成的影响。如果用户使用网络服务违反了任何上述规定，导致任何第三方遭受损害的，您应当独立承担责任，亚洲福彩因此遭受损失的，您也应当一并赔偿。
    "Service change, interruption or termination", //146,  3. 服务变更、中断或终止
    "In view of the particularity of the network service, the users agree that The Asian Welfare Lottery has the right to change, interrupt or terminate some or all of the network services at any time in accordance with the business development situation without notifying the user nor liable to any user or any third party ;", //147,  3.1 鉴于网络服务的特殊性，用户同意亚洲福彩有权根据业务发展情况随时变更、中断或终止部分或全部的网络服务而无需通知用户，也无需对任何用户或任何第三方承担任何责任；
    "Users understand that Asian Welfare Lottery need to repair or maintenance regularly or periodically on the platform providing network services (such as Internet sites, mobile networks, etc.) or related equipment. Therefore, the Asian Welfare Lottery does not have to take any responsibility for the interruption of network services in a reasonable period of time. However, we are trying our best to announce in advance as soon as possible.", //148,  3.2 用户理解，亚洲福彩需要定期或不定期地对提供网络服务的平台（如互联网网站、移动网络等）或相关的设备进行检修或者维护，如因此类情况而造成网络服务在合理时间内的中断，亚洲福彩无需为此承担任何责任，但亚洲福彩应尽可能事先进行通告。
    "The Asian Welfare Lottery has the right at any time to interrupt or terminate the provision of network services under this Agreement (including fee-paying network services) to the user without any liability to the user or any third party if any of the following circumstances occur::", //149 3.3 如发生下列任何一种情形，亚洲福彩有权随时中断或终止向用户提供本协议项下的网络服务（包括收费网络服务）而无需对用户或任何第三方承担任何责任：
    "The personal data provided by the user is not true；", //150   3.3.1 用户提供的个人资料不真实；
    "The user violates the relevant laws and regulations or the rules of use stipulated in this Agreement；", //151   3.3.2 用户违反相关法律法规或本协议中规定的使用规则；
    "As required by law or by competent authority；", //152  3.3.3 按照法律规定或主管部门的要求；
    "For safety reasons or other necessary circumstances.", //153  3.3.4 出于安全的原因或其他必要的情形。
    "Intellectual property right ", //154   4. 知识产权
    "Any text, picture, graphics, audio and/or video information including in the Internet service provided by Asian Welfare Lottery is protected by copyright, trademark and/or other related laws. The above information shall not be used for any commercial purpose without the consent of the relevant rights holders.", //155    4.1亚洲福彩提供的网络服务中包含的任何文本、图片、图形、音频和/或视频资料均受版权、商标和/或其它相关法律的保护，未经相关权利人同意，上述资料均不得用于任何商业目的。
    "Any software (including but not limited to any image, photo, animation, video, picture recording, sound recording, music, text and add-on, and auxiliary materials that are attached to the software) used by the Asian Welfare Lottery for the provision of network services is the copyright owner of the software. Without the permission of the copyright owner of the software, the user is not allowed to reverse engineer, decompile or disassemble.", //156    4.2 亚洲福彩为提供网络服务而使用的任何软件（包括但不限于软件中所含的任何图像、照片、动画、录像、录音、音乐、文字和附加程序、随附的帮助材料）的一切权利均属于该软件的著作权人，未经该软件的著作权人许可，用户不得对该软件进行反向工程（reverse engineer）、反向编译（decompile）或反汇编（disassemble）。
    "Privacy protection", //157    5. 隐私保护
    "Users understand and agree that Asian Welfare Lottery has access to the following information from users：", //158    5.1 用户理解并同意，亚洲福彩能获取用户下列信息：
    "All personal information filled in by the user at the time of registration;；", //159      5.1.1 用户注册时填写的全部个人信息；
    "In the process of enjoying Asian Welfare Lottery service, users may receive information from Asian lottery, including but not limited to：", //160      5.1.2 用户在享受亚洲福彩服务过程中亚洲福彩可能获得的信息，包括但不限于：
    "Information uploaded by users to Asia Welfare Lottery Network and mobile applications;；", //161      1) 用户上传到亚洲福彩网站和移动应用的信息；
    "During the process of accessing or using the Asian Welfare Lottery products, the Asian Welfare Lottery automatically receives the recorded browser and computer information (including but not limited to IP address, access time, hardware and software equipment information, browsing record, etc.);", //162      2) 用户在访问或使用亚洲福彩产品的过程中，亚洲福彩自动接收记录的浏览器和计算机信息（包括但不限于IP地址、访问时间、软硬件设备信息、浏览记录等信息）；
    "Users use Asian Welfare Lottery products in the process of operation traces and transaction information.", //163      3) 用户使用亚洲福彩产品过程中的操作痕迹及交易信息等。
    "The protection of users' privacy is a basic policy of the Asian Welfare Lottery, which guarantees not to be open to the public or to provide third parties with the registration information of individual users and the private content stored in the Asian Welfare Lottery when users use the network service, except in the following cases:", //164      5.2 保护用户隐私是亚洲福彩的一项基本政策，亚洲福彩保证不对外公开或向第三方提供单个用户的注册资料及用户在使用网络服务时存储在亚洲福彩的非公开内容，但下列情况除外：
    "The explicit authorization of the user obtaining in advance;；", //165      5.2.1 事先获得用户的明确授权；
    "In accordance with requirement of relevant laws and regulations;；", //166      5.2.2 根据有关的法律法规要求；
    "In accordance with the requirements of relevant government authorities ;；", //167      5.2.3 按照相关政府主管部门的要求；
    "To safeguard the interests of the public;；", //168      5.2.4 为维护社会公众的利益；
    "To safeguard the legitimate rights and interests of Asian Welfare Lottery;；", //169      5.2.5 为维护亚洲福彩的合法权益；
    "In order to deal with disputes between user and user or rights holder (including complaints about a user or intellectual property and so on, disclosure of relevant information to the complainant, for handling with and resolving disputes).", //170      5.2.6 为处理某用户与其他用户或权利人之间的纠纷或争议（包括因某用户因知识产权等原因被投诉，向投诉人披露相关信息，以便处理和解决纠纷）。
    "The Asian Welfare Lottery may cooperate with a third party to provide related web services to the user, in which case the third party agrees to assume the same responsibility to protect the user's privacy as the Asian Welfare Lottery do. The Asian Welfare Lottery has the right to provide the user's registration information, etc., to the third party.", //171      5.3 亚洲福彩可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与亚洲福彩同等的保护用户隐私的责任，则亚洲福彩有权将用户的注册资料等提供给该第三方。
    "Without revealing the privacy of individual users, the Asian Welfare Lottery has the right to analyze the entire user database and make commercial use of the user database.", //172      5.4 在不透露单个用户隐私资料的前提下，亚洲福彩有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。
    "The Asian Welfare Lottery sets out the following four privacy protection principles to guide us in dealing with issues related to user privacy and user information in our products::", //173      5.5 亚洲福彩制定了以下四项隐私权保护原则，指导我们如何来处理产品中涉及到用户隐私权和用户信息等方面的问题:
    "Use the information we collect to provide users with valuable products and services.", //174      5.5.1 利用我们收集的信息为用户提供有价值的产品和服务。
    "Use the information we collect to provide users with valuable products and services. ", //175      5.5.2 开发符合隐私权标准和隐私权惯例的产品。
    "The collection of personal information is transparent and supervised by authoritative third parties.", //176      5.5.3 将个人信息的收集透明化，并由权威第三方监督。
    "Do our best to protect the information we have. ", //177      5.5.4 尽最大的努力保护我们掌握的信息。
    "disclaimer", //178      6. 免责声明
    "The Asian welfare lottery does not guarantee that the network service will meet the requirements of users, nor guarantee that the network service will not be interrupted, nor guarantee the timeliness, security and accuracy of the network service.", //179      6.1 亚洲福彩不担保网络服务一定能满足用户的要求，也不担保网络服务不会中断，对网络服务的及时性、安全性、准确性也都不作担保。
    "The Asian Welfare Lottery does not guarantee the authenticity, accuracy and completeness of external links that are set up to facilitate users and, at the same time, for the content on any web page that such external links point to that are not actually controlled by the Asian Welfare Lottery. Therefore, the Asian Welfare Lottery bears no responsibility for this.", //180      6.2 亚洲福彩不保证为向用户提供便利而设置的外部链接的真实性、准确性和完整性，同时，对于该等外部链接指向的不由亚洲福彩实际控制的任何网页上的内容，亚洲福彩不承担任何责任。
    "The Asian Welfare Lottery shall not be liable for any loss resulting from a failure of a telecommunications system or Internet network, computer failure or virus, information damage or loss, computer system problems or any other force majeure. However, efforts will be made to reduce the loss and impact to users.", //181  6.3 对于因电信系统或互联网网络故障、计算机故障或病毒、信息损坏或丢失、计算机系统问题或其它任何不可抗力原因而产生损失，亚洲福彩不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。
    "The Asian Welfare Lottery does not guarantee the full information, content, products (including software), services, and electronic messages sent from the The Asian Welfare Lottery Station to users, provided by the Asian Welfare are free of viruses or other harmful substances.", //182    6.4 亚洲福彩不担保亚洲福彩产品所包含或以其他方式通过亚洲福彩产品提供给用户的全部信息、内容、产品（包括软件）、服务和从亚洲福彩网站发出的电子信息、信件没有病毒或其他有害成分。
    "Unless otherwise expressly stated in writing, the Asian Welfare Lottery shall not provide any form of warranty for the operation of the Asian Welfare Lottery products and the information, content, products (including software, services) contained therein.", //183  6.5 除非另有明确书面说明，亚洲福彩不对亚洲福彩产品的运营及其包含在亚洲福彩产品上的信息、内容、产品（包括软件）、服务作任何形式的、明示或默示的担保。
    "Application of law and dispute resolution", //184  7. 法律适用及争议解决
    "The establishment, effectiveness, performance, interpretation and dispute resolution of this Agreement shall be governed by local laws.", //185  7.1 本协议的成立、生效、履行、解释及纠纷解决，适用当地法律。
    "Any dispute arising from or in relation to this Agreement shall be settled amicably by the parties through friendly negotiation; if the negotiation fails, any party may submit the dispute to the local arbitration commission and arbitration in accordance with its valid arbitration rules at that time. The arbitral decision is final and binding on all parties.", //186  7.2 因本协议引起的或与本协议有关的任何争议，各方应友好协商解决；协商不成的，任何一方均可将有关纠纷或争议提交至当地仲裁委员会并按照其届时有效的仲裁规则仲裁；仲裁裁决是终局的，对各方均有约束力。
    "Terms of use for minors", //187  8. 未成年人使用条款
    "If you (the user) are under the age of 18, you should access and / or use the Asian Welfare Lottery network service under the consent and guidance of the guardian, and your guardian will allow you to use the network service of the Asian Welfare Lottery and agree to the terms and conditions of this agreement. If you are a guardian of a minor, that means you agree to bind the minor to comply with these provisions and use the Asian Welfare Lottery online service. In particular, if the user is less than 18 years old or does not have full capacity for civil conduct, you should use the recharge and transfer service of the Asian Welfare Lottery under the consent and guidance of the guardian. All the consequences of your use of recharge and transfer services will be responsible by you and your guardian.", //188  8.1若用户未满18周岁，您应在监护人同意和指导下访问和/或使用亚洲福彩的网络服务，并且您的监护人允许您使用亚洲福彩的网络服务且同意本协议的各项条款。如果您是未成年人的监护人，即表示您同意约束未成年人遵守这些条款使用亚洲福彩的网络服务。特别地，如用户未满18周岁或不具备完全民事行为能力，您应在监护人的同意和指导下使用亚洲福彩的充值和转账服务，您使用充值和转账服务而产生的一切后果，由您及您的监护人承担。
    "Minors should arrange reasonable time to use Asian welfare lottery network service under the guidance of guardian in order to avoid indulging in the network and affecting normal study life.", //189  8.2 未成年应在监护人的指导下合理安排时间使用亚洲福彩的网络服务，注意避免沉迷于网络，影响正常的学习生活。
    "other terms", //190  9. 其他条款
    "This Agreement also includes other relevant agreements, rules, statements, policies, etc., issued from time to time by the Asian Welfare Lottery. The above-mentioned contents shall become an integral part of this Agreement and shall have the same legal effect as this Agreement.", //191  9.1 本协议内容同时包括亚洲福彩不时发布的其他相关协议、规则、声明、政策等内容。上述内容一经正式发布，即成为本协议不可分割的组成部分，与本协议具有同等的法律效力。
    "Any provision of this Agreement shall be deemed to be deleted if for any reason in whole or in part which is null and void or unenforceable or contrary to any applicable law, but the remaining provisions of this Agreement shall remain in force and binding.", //192  9.2 如果本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，或违反任何适用的法律，则该条款被视为删除，但本协议的其余条款仍应有效并且有约束力。
    "The Asian Welfare Lottery has the right to amend this Agreement at any time in accordance with the relevant laws, regulations and adjustments to the Company's operating conditions and operating strategies without further notice to the user. The revised agreement will be announced at www.lotteryasian.com. Users can browse the latest terms and conditions of service through Asian Welfare Lottery web at any time. In the event of a dispute, the latest version of the agreement shall prevail. If the user does not agree to any changes to the terms and conditions of this Agreement, the user shall have the right to discontinue the use of the network service. If the user continues to use the web service, the user shall be deemed to accept the modification of the terms and conditions of this Agreement made.", //193  9.3 亚洲福彩有权随时根据有关法律、法规的变化以及公司经营状况和经营策略的调整等修改本协议，而无需另行单独通知用户。修改后的协议会在亚洲福彩网站（www.lotteryasian.com）上公布。用户可随时通过亚洲福彩网站浏览最新服务协议条款。当发生有关争议时，以最新的协议文本为准。如果不同意亚洲福彩对本协议相关条款所做的修改，用户有权停止使用网络服务。如果用户继续使用网络服务，则视为用户接受亚洲福彩对本协议相关条款所做的修改。
    "The Asian Welfare Lottery shall have the power to interpret and amend this Agreement to the extent permitted by law.", //194  9.4 亚洲福彩在法律允许的范围对本协议拥有解释权与修改权。
    "Asian welfare lottery Co., Ltd.", //195  亚洲福利彩票有限公司
    "We provide convenient and advanced lottery betting machine equipment; the agents just need to pay a little deposit to use this international leading and safe lottery betting machine, so as to quickly improve sales efficiency and volumes.", //196  为代理商提供便捷、先进的彩票投注机设备，代理商只需缴纳少许押金就可以使用国际领先且安全的彩票投注机，从而快速提高销售效率和销量。
    "Bonus event", //197  加奖活动
    "We will organize various promotions and awards events, public cultural activities to provide large cash and physical awards for the monthly outstanding sales performance agents.", //198  不定期的组织各类促销加奖活动，公益文化活动，为月销售成绩卓著的代理商提供丰厚的现金奖励和实物奖励。
    "The commission of the lottery store owner", //199  彩票店业主佣金
    "Unit of sales: US dollars", //200  销售单位：美元
    "Commission", //201  佣金比例
    "Provide betting machine equipment.", //202  提供投注机设备
    "Monthly sales volumes of quick-scrape lottery", //203  即开彩月销量
    "Monthly sales volumes of digital lottery", //204  数字彩月销量
    "More than", //205  以上(放在数字前面，如：More than 20000)
    "Agent dividend", //206  代理分红
    "Total sales", //207  总销量
    "Agent dividend ratio ", //208  代理分红比例
    "Note: the agency's dividends are calculated according to the total monthly sales volume of all the betting stations developed by the agency. The agents can open their own lottery store to participate in selling to receive sales commission", //209  注：代理的分红按照该代理发展的所有投注站月销量的累计总额进行统计。代理可以自己开设彩票店参与销售获得销售佣金
    "Current month", //210   当月
    "All lottery players", //211  所有彩民
    "Winning amount", //212  中奖额
    "Note: The Regional Manager (sales, specialist) bonus is 1% of the total winning prize of all betting stations developed by the employee this month.", //213  注：大区经理（销售、专管员）的奖金为该员工发展的所有投注站本月销售后累计中奖奖金的1%
    "Recruitment requirements", //214  招募要求
    "1.Lottery station channels: partner with a large number of lottery betting station in Cambodia; 2.Social network channels: partner with shop in one or more vertical industries in Cambodia, such as supermarkets, post offices, private banks, chain restaurants, bookstores, newsstands, etc.; 3.Internet channels: has plentiful Internet promotion channels, such as social media, IM tools, advertising alliances, vertical portals, business forums, email SMS operators, etc.", //215  1、彩票站渠道：在柬埔寨拥有大量彩票投注站资源的合作伙伴；2、社会网点渠道：在柬埔寨拥有1项或多项垂直行业领域的店铺资源的合作伙伴，如超市、邮局、钱庄、连锁餐厅、书店、报刊亭等；3、互联网渠道：拥有丰富的互联网推广渠道，如社交媒体、IM工具、广告联盟、垂直门户、商业论坛、邮件短信运营商等…
    "Profit prospects", //216  盈利前景
    "As long as you have plentiful sales channels or lottery sales station as your resources, you will have a broader development prospects in the AWL lottery platform, and you will also enjoy a higher sales return point than other platforms. As for business scale development, the more offline sales you have, the higher sales return point multiply increase ", //217  只要您拥有丰富的销售渠道或彩票销售站点资源，您将在AWL彩票平台拥有更加广阔的发展前景，同时您也将享受到比其它平台更高的销售返点，随着时间积累和业务规模发展，您拥有越多的下线销售，您的销售返利将呈几何倍数增长
    "How to be our agent", //218   如何成为我们的代理商
    "You can choose any one of the two ways to quickly become a AWL lottery product agent.", //219  通过两种方式即能迅速成为AWL的彩票产品代理商，您可选择任意一种
    "Scan QR code", //220  扫描二维码
    "Contact our area staff and register through face to face by scanning the QR code", //221  联系我们的地区工作人员，通过面对面扫描二维码进行注册
    "Open shared link", //222  打开分享链接
    "Register vai app or invitation link shared by our staff", //223  通过工作人员的邀请链接在网站或app进行注册
    "Fill out and submit the form below. Our staff will contact you within 3 working days.", //224  填写并提交下方表格，我们的工作人员将在3个工作日内与您取得联系。
    "Type of store opening", //225  开店的类型
    "Flagship store", //226  旗舰店
    "Lottery store", //227  彩票门店
    "Address and name of stores opened or to be opened", //228  已开或即将开的店铺地址和名称
    "As the leading international lottery issuer, the Asian Welfare Lottery is now integrating advanced domestic and foreign lottery production techniques and business concepts adapting Cambodia's local characteristics and market demands as its starting point. Through this, we have created the competitive and distinct characteristic of high winning rate of quick-scrape (happy scrape) lottery ticket, and one after another launched the high frequency quick scrape lottery ticket which radiates all the people and the lotto digital lottery ticket which can win up to $500,000. Games play and open and active marketing campaign of Yi Cai Fen Cheng lottery have made the product release a slogan ‘what is a surprise’ and it increasingly become popular.", //229  亚洲福利彩票作为国际领先的彩票发行商，现整合国内外先进的彩票生产技术和商业理念，以柬埔寨地方特色和市场需求为出发点，先后打造了具有竞争力和鲜明特色的高中奖率即开型（刮刮乐）彩票，并陆续推出辐射全体彩民的高频快开型彩票和最高可中50万美金的乐透数字型彩票。异彩纷呈的彩票游戏玩法和开放活跃的营销活动使亚洲福利彩票“什么是惊喜”的产品发行口号日益深入人心。
    "Quick scrape lottery introduction", //230  即开型彩票介绍
    "1.TUKTUK coming; 2.Wealth everywhere; 3.Smile of Khmer; 4.Golden age;5. Billions of blessings", //231  1.TUKTUK 来了；2.八方来财；3.高棉的微笑；4.黄金时代；5.10亿祝福
    "High frequency lottery introduction", //232  高频型彩票介绍
    "See PPT for more details ", //233  详见产品介绍PPT
    "Lotto lottery introduction", //234  乐透型彩票介绍
    "Kompong Cham flagship store", //235  磅湛旗舰店
    "Phnom Penh flagship store", //236   金边旗舰店
    "No. 666, Luo Wen district, Kompong Cham Province"];
    //js脚本中的文字及操作提示语
    js_lang = ["", //0,请先登录，再进行兑奖操作
    "", //1,扫码错误，请重试
    "", //2,请先登录，再进行转账操作
    "", //3,请先登录，再进行兑奖操作
    "", //4,请输入正确的手机号
    "", //5,请输入至少六位密码
    "", //6,请输入四位数验证码
    "", //7,设置支付密码
    "", //8,请输入正确的登录密码
    "", //9,请输入正确的用户姓名
    "", //10,请输入性别
    "", //11,请输入身份证号
    "", //12,请输入详细住址
    "", //13,请输入售彩网点名称
    "", //14,保存成功
    "", //15,请输入性别
    "", //16,请先登录
    "", //17,请先输入要购票的彩票数量
    "", //18,请先输入要提现的金额数
    "", //19,转账类型出错，请重试
    "", //20,获取彩票列表失败，请重试
    "", //21,支付密码错误
    "", //22,转账成功
    "", //23,请输入正确的手工验奖码数字
    "", //24,请输入正确的物流码
    "", //25,修改成功
    "", //26,两次密码输入不一致
    "", //27,设置支付密码成功
    "", //28,兑奖成功
    "", //29,已放入您的账户
    "", //30,没有中奖
    "", //31,已收到您的转账
    "", //32,转账失败
    "", //33,系统管理员
    "", //34,超级管理员
    "", //35,财务管理员
    "", //36,票务员
    "", //37,专管员
    "", //38,渠道管理员
    "", //39,地区总经理
    "", //40,其他
    "", //41,用户身份有误
    "", //42,未知
    "", //43,扫描失败，请先打开摄像头权限
    "", //44,网络不可用,请重试
    "", //45,请求超时，请检查网络
    "", //46,非常遗憾，继续努力
    "", //47,请求失败，请重试
    "", //48,年
    ""];
  } else if (lang === "kh") {
    //柬埔寨语
    //界面中的文字
    langArr = ["គេហទំព័រ", //0,首页
    "សហគ្រាស", //1,企业介绍
    "ផលិតផល", //2,产品
    "ការបរិចាក", //3,公益事业
    "ព័ត៌មាន", //4,新闻
    "ការវិនិយោគ", //5,商务合作
    "បុគ្គលិក", //6,社会招聘
    "ទាក់ទងយើង", //7,联系我们
    "ព័ត៌មានអំពីផលិតផល", //8,产品资讯
    "ក្នុងឆ្នាំ 2018នេះ ក្រុមហ៊ុនAWLនឹងផ្តោតលើស្ថានីយឆ្នោតអ៊ីនធឺណិតរួមមានផលិតជាច្រើនដែលនឹងចាប់បើកដំណើរការដូចជាឆ្នោតឡូតូ ឆ្នោតប្រេកង់ខ្ពស់ ហ្គេមប្រណាំងសេះ ឆ្នោតកីឡា និងឆ្នោតអេឡិចត្រូនិចBINGO។", //9,2018年，AWL将会着力于互联网彩票端，产品部署至即开、乐透、高频、赛马、体育竞猜和电子BINGO在内的全彩种生态链。
    "ស្វែងយល់បន្ថែម", //10,了解更多
    "ការណែនាំអំពីក្រុមហ៊ុន", //11,企业介绍
    "ក្រុមហ៊ុនAWL (ឆ្នោតសំណាងអាស៊ី) គឺក្រុមហ៊ុនឆ្នោតអន្តរជាតិបច្ចេកវិទ្យាខ្ពស់ឈានមុខគេមួយដែលក្រុមហ៊ុនដើរតួនាទីយ៉ាងសំខាន់ក្នុងការផលិតនិងចែកចាយឆ្នោតដែលមានគុណភាពខ្ពស់និងដែលជាប្រភេទឆ្នោតថ្មីដែលមានមូលដ្ឋានរឹងមាំនៅក្នុងតំបន់អាស៊ីអាគ្នេយ៍យើង។ ", //12,公司以发行和运营高品质彩票为己任，是立足东南亚辐射全球的跨国博彩新势力。
    "ភាសាខ្មែរ", //13,柬埔寨语
    "ភាសាចិន", //14,中文
    "ភាសាអង់គ្លេស", //15,英文
    "ក្រុមហ៊ុនAWLបានផ្តល់ជំនួយសិក្សាទៅកាន់សិស្សក្រីក្រ ផ្តល់ប្រាក់ឧបត្ថម្ភទៅកាន់មនុស្សចាស់ជរាព្រមទាំងធ្វើសកម្មភាពជាច្រើនទៀតដើម្បីជួយសង្គមកម្ពុជានិងបណ្តាប្រទេសអាស៊ីអាគ្នេយ៍ជាច្រើនផ្សេងទៀត។", //16,AWL在柬埔寨等东南亚国家开展助学、养老、扶贫等一系列社会公益活动，将彩票公益金切实惠及于民，肩负起一个优秀企业的社会责任。
    "ឆ្នោតសុខុមាលភាពសាធារណៈ", //17,公益福利彩票
    "ឆ្នោតសុខុមាលភាពទំនួលខុសត្រូវ", //18,责任福利彩票
    "ឆ្នោតសុខុមាលភាពពន្លឺព្រះអាទិត្យ", //19,阳光福利彩票
    "ឆ្នោតសុខុមាលភាពភក្តីភាព", //20,诚信福利彩票
    "ព័ត៌មានបន្ថែម", //21,更多信息
    "សំណួរជាញឹកញាប់", //22,常见问题
    "ទាក់ទងមកយើង", //23,联系我们
    "តាមដានយើង", //24,关注我们
    "ហ្វេសប៊ុក", //25,Facebook
    "Sina Weibo", //26,新浪微博
    "គោលនយោបាយច្បាប់", //27,法律政策
    "ល័ក្ខខ័ណ្ឌនៃសេវាកម្ម", //28,服务条款
    "គោលការណ៍ឯកជនភាព", //29,隐私政策
    "អំពីយើង", //30,关于我们
    "ប្រវត្តិក្រុមហ៊ុន", //31,公司简介
    "អាជ្ញាប័ណ្ណឆ្នោត", //32,彩票牌照
    "ចូលរួមជាមួយយើងតាមរយះ QQ", //33,加盟方式QQ
    "ស្កេនកូដទាញយក APP ", //34,扫码下载APP
    "ខ្សែទូរស័ព្ទបំរើអតិថិជន", //35,客服热线
    "រក្សាសិទ្ធិគ្រប់យ៉ាងដោយក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ី", //36,© 2018 亚洲福利彩票有限公司 版权所有
    "ក្រុមហ៊ុនAWL (ឆ្នោតសំណាងអាស៊ី) គឺក្រុមហ៊ុនឆ្នោតអន្តរជាតិបច្ចេកវិទ្យាខ្ពស់ឈានមុខគេមួយដែលក្រុមហ៊ុនដើរតួនាទីយ៉ាងសំខាន់ក្នុងការផលិតនិងចែកចាយឆ្នោតដែលមានគុណភាពខ្ពស់និងដែលជាប្រភេទឆ្នោតថ្មីដែលមានមូលដ្ឋានរឹងមាំនៅក្នុងតំបន់អាស៊ីអាគ្នេយ៍យើង។", //37,AWL（亚洲福利彩票有限公司），是一家高科技的国际化博彩公司。公司以发行和运营高品质彩票产品为己任，是立足东南亚，辐射全球的跨国博彩新势力。
    "ក្រុមហ៊ុនមានទីតាំងស្ថិតនៅក្នុងប្រទេសកម្ពុជា។ ក្រុមហ៊ុនយើងខ្ញុំបានចូលរួមសហការជាមួយដៃគូជាច្រើនដែលនាំមកនូវផលប្រយោជន៍និងការជួយគ្នាទៅវិញទៅមក ហើយតាមរយៈនេះក្រុមហ៊ុនបង្កើតបានគោលនយោបាយការវិនិយោគដ៏វិសេសវិសាលមួយ។ បច្ចុប្បន្ននេះ ក្រុមហ៊ុន AWL បានបង្កើតទីតាំងជាង2000កន្លែងនិងបណ្តាញសហគមន៍ជាង40នៅក្នុងប្រទេសកម្ពុជា។", //38,公司注册在柬埔寨，通过异业合作，招商加盟，公司当前已经在柬埔寨建设了12000家彩票投注站和40多个社会渠道。
    "ក្នុងឆ្នាំ2018នេះ ក្រុមហ៊ុន AWL នឹងផ្តោតលើស្ថានីយឆ្នោតអ៊ីនធឺណិតដែលក្នុងនោះរួមមានផលិតជាច្រើនដែលនឹងចាប់បើកដំណើរការដូចជាឆ្នោតឡូតូ ឆ្នោតប្រេកង់ខ្ពស់ ហ្គេមប្រណាំងសេះ ឆ្នោតកីឡានិងឆ្នោតអេឡិចត្រូនិចBingo។", //39,2018年，AWL将会发力互联网，将产品部署到即开、乐透、高频、赛马、体育竞猜和电子bingo在内的全彩种生态链。
    "ទន្ទឹមនឹងការបើកដំណើរការទីផ្សារឆ្នោត ក្រុមហ៊ុនAWLបានផ្តល់ជំនួយសិក្សាទៅកាន់សិស្សក្រីក្រ ផ្តល់ប្រាក់ឧបត្ថម្ភទៅកាន់មនុស្សចាស់ជរាព្រមទាំងធ្វើសកម្មភាពជាច្រើនទៀតដើម្បីជួយសង្គមកម្ពុជានិងបណ្តាប្រទេសអាស៊ីអាគ្នេយ៍ផ្សេងទៀត។", //40,在做好彩票市场布局的同时，AWL在柬埔寨等东南亚开展助学、养老、扶贫等一系列社会公益活动，将彩票公益金切实惠及于民，肩负起一个优秀企业的社会责任。
    "លើកដំបូងប្រើប្រាស់ APP ទូរស័ព្ទដៃប្តូររង្វាន់", //41,首次采用手机APP兑奖
    "លើកដំបូងប្រើប្រាស់កូដ QR ប្រព័ន្ធបច្ចេកវិទ្យាឈានមុខកំរិតខ្ពស់សំគាល់សុវត្ថិភាពប្រឆាំងនឹងការក្លែងបន្លំ ប្តូររង្វាន់", //42,首次采用了先进的二维码防伪保安识别系统兑奖技术
    "លឿន សុវត្ថិភាពនិងអាចទុកចិត្តបាន", //43,快速安全又可靠
    "ប្តូររង្វាន់តាមទូរស័ទ្ទដៃ ងាយស្រួល", //44,手机兑奖 轻松完成
    "ជំហានទី1", //45,步骤1
    " ស្កេនកូដទាញយក APP របស់ឆ្នោតសំណាងអាស៊ី", //46,扫码下载亚洲福利彩票APP
    "ជំហានទី2", //47,步骤2
    " ចូលទំព័រដើមនិងចុច ខ្ញុំចង់ប្តូររង្វាន់", //48,登录首页点击我要兑奖
    " ជំហានទី3", //49,步骤3
    "ស្កេនកូដ QR នៅលើសំបុត្រឆ្នោត", //50,扫描彩票上的二维码
    "ជំហានទី4", //51,步骤4
    "បន្ទាប់ពីអ្នកប្តូររង្វាន់បានជោគជ័យ ទឹកប្រាក់នឹងចូលក្នុងគណនីរបស់អ្នកដោយស្វ័យប្រវត្តិ", //52,兑奖成功奖金存入账户余额
    "ទិញភ្លាម កោសភ្លាម ឈ្នះភ្លាម ប្តូរភ្លាម ទទួលយកបទពិសោធន៍និងអារម្មណ៍នៃ ការឈ្នះផ្ទាល់ឈ្នះពិតៗនៅនឺងកន្លែង។ ឆ្នោតនេះមានហ្គេមច្រើនប្រភេទដែលគួរឱ្យចាប់អារម្មណ៍និងរបៀបលេងងាយៗ។ រូបភាពត្រូវបានបោះពុម្ពយ៉ាងស្រស់ស្អាតហើយវាត្រូវបានផលិតចេញជាទៀងទាត់ដែលទាក់ទងទៅនឹងព្រឹត្តិការណ៍ប្រកួតកីឡា ពិធីបុណ្យជាតិអន្តរជាតិផ្សេងៗ និងប្រធានបទផ្សេងទៀតដែលជាបង្កើតនូវអនុស្សាវរីយន៍ល្អៗ និងមានតម្លៃក្នុងការរក្សាទុក។", //53,即买、即开、即中、即兑，面对面体验中奖的感觉。游戏种类丰富，趣味性强，玩法简单。画面印制精美，定期会发行一些以体育赛事、重大节日、公益宣传等为主题的具有纪念意义的票种，具有一定收藏价值。
    "ការបង្កើនសុខុមាលភាពសាធារណៈ ការជួយអោយមានការរីកចម្រើននិងការអភិវឌ្ឍន៍សុខុមាលភាពសង្គមគឺជាចំណុចចាប់ផ្តើមដែលនាំឲ្យមានការផលិតសន្លឹកឆ្នោត ហើយវាក៏ជាកាតព្វកិច្ចរបស់ក្រុមហ៊ុនយើងខ្ញុំផងដែរ។ ចាប់តាំងពីក្រុមហ៊ុនAWLបានចាប់កំណើតមកដល់បច្ចុប្បន្ន ពួកយើងតែងតែយកសុខមាលភាពសាធារណៈ ការទទួលខុសត្រូវ ពន្លឹព្រះអាទិត្យ សុចរិតភាព ជាគោលការណ៍ចំបងរបស់ក្រុមហ៊ុនយើង។ពួកយើងក៏មានកាតព្វកិច្ចយ៉ាងសំខាន់ក្នុងការផ្តល់នូវសន្តិសុខ និងសុខុមាលភាពជានិរន្តរ៍ដល់សហគន៍នៅក្នុងប្រទេសកម្ពុជា ព្រមទាំងបង្កើនការលើកកម្ពស់សុខុមាលភាព និងការអភិវឌ្ឍន៍សង្គមទៅដល់ប្រទេសកម្ពុជា។", //54,筹集彩票公益金支持社会福利事业进步和发展是发行彩票的出发点，也是亚洲福利彩票事业的主旨。AWL自成立以来，本着公益、责任、阳光、诚信的宗旨，为柬埔寨社会各界提供福利和保障，切实提升和促进柬埔寨的社会福利事业发展是我们长久的责任。
    "ព័ត៌មានក្រុមហ៊ុន", //55,公司新闻
    "ប្លង់ទាំងមូលរបស់ផលិតផលឆ្នោតនៅលើអ៊ីនធឺណិត ", //56,AWL彩票产品互联网端全面布局
    "នៅក្នុងយុគសម័យនៃប្រព័ន្ធផ្សព្វផ្សាយថ្មីនេះ គ្រប់ប្រព័ន្ធផ្សព្វផ្សាយនិងបណ្តាញអ៊ីនធឺណិតទាំងអស់កំពុងតែរីកស្គុះស្គាយ និងរីកដុះដាលយ៉ាងខ្លាំង។ គ្រប់អាជីវកម្មគ្រប់ខ្នាត ចាប់ពីក្រុមហ៊ុនយក្សរហូតដល់តូបលក់តាមចិញ្ចើមថ្នល់តូចៗ កំពុងតែដំណើរការអាជីវកម្មរបស់ពួកគេដោយផ្អែកលើប្រព័ន្ធអ៊ីនធឺណិត។ ក្នុងឆ្នាំ2018នេះ  ក្រុមហ៊ុនAWLបានផ្តោតលើស្ថានីយឆ្នោតអ៊ីនធឺណិតរួមមានផលិតជាច្រើនដែលនឹងចាប់បើកដំណើរការដូចជាឆ្នោតឡូតូ ឆ្នោតប្រេកង់ខ្ពស់ ហ្គេមប្រណាំងសេះ ឆ្នោតកីឡា និងឆ្នោតអេឡិចត្រូនិចBINGO។", //57,新媒体时代，各自媒体平台犹如百花齐放，绽放在我们的网络里。大到互联网巨头，小到街头煎饼摊都在运营着自己的公众号。2018年，AWL将会着力于互联网彩票端，产品部署至即开、乐透、高频、赛马、体育竞猜和电子BINGO在内的全彩种生态链。
    "ឆ្នោតថ្មីដែលរំលេចនូវលក្ខណៈពិសេសរបស់ជនជាតិខ្មែរនិងស្របតាមលក្ខណៈតំបន់កំពុងតែត្រូវបានដាក់លក់នៅលើទីផ្សារ", //58,因地制宜的柬埔寨特色即开票上市了
    "ស្នាមញញឹមខ្មែរ រយលានពរជ័យ យុគមាស ទ្រព្យទាំង8ទិស TUKTUKមកហើយកំពុងតែត្រូវបានដាក់លក់នៅលើទីផ្សា​រ។ សន្លឹកឆ្នោតរចនាស្រស់ស្អាត មានប្រភេទលេងយ៉ាងសម្បូរបែប​ និងមានរង្វាន់ជាទឹកប្រាក់រាប់លានដុល្លារកំពុងរង់ចាំអ្នក!", //59,高棉的微笑，十亿祝福，黄金时代，八方来财，TUKTUK系列即开票同期上市，精美的票面，丰富多彩的游戏，更有百万美金大奖等你来拿！
    "អបអរសាទអ្នកឈ្នះរង្វាន់ធំរាប់លានដុល្លារក្នុងរាជធានីភ្នំពេញ!", //60,热烈庆祝金边彩民喜中百万美金大奖！
    "ក្នុងរយៈពេលមិនដល់មួយខែបន្ទាប់ពីឆ្នោតកោសរហ័យរបស់ក្រុមហ៊ុន AWL បានចាប់ដំណើរការនៅលើទីផ្សារ អតិថិជនដែលមានសំណាងក្នុងរាជធានីភ្នំពេញបានឈ្នះរង្វាន់ធំរាប់លានដុល្លារ សំណាងនេះមករហ័សពេកមែនទេ?​ មិនមែនទេ ដំណើរស្វែងរកបង្កើតមហាសេដ្ឋីរបស់ AWL ទើបតែចាប់ផ្តើមតែប៉ុននោះ អ្នកឈ្នះបន្ទាប់គឺជាអ្នក", //61,在AWL系列即开票上市不到一个月的时间里，金边幸运彩民喜中百万美金大奖，幸运来的很突然吗？不，AWL在制造富翁的征途刚刚开始，下一个就是你！
    "សេចក្តីណែនាំអំពីការវិនិយោគ ", //62,招商简介
    "សេចក្តីណែនាំអំពីផលិតផល", //63,产品介绍
    "ការចែកចាយបណ្តាញ", //64,网点分布
    "ការជ្រើសរើសប្រភេទភ្នាក់ងារលក់ឆ្នោត", //65,彩票代理类型选择
    "យើងមានអ្នកលក់រាយបីប្រភេទដែលអ្នកអាចជ្រើសរើសដាក់ពាក្យស្នើសុំ", //66,我们有三种类型的零售商，你可以选择申请成为任意一种
    "ឆានែលស្ថានីយឆ្នោត", //67,彩票站渠道
    "លក្ខណៈសម្បត្តិរបស់យើង", //68,我们的资质
    "ឆានែលបណ្តាញសង្គម", //69,社会网点渠道
    "ឆានែលអ៊ីនធឺណិត", //70,互联网渠道
    "អត្ថប្រយោជន៍ក្នុងការក្លាយជាអ្នកលក់រាយរបស់យើង", //71,成为我们零售商的优势
    "ការបង្កើតពង្រីកអ្នកលក់រាយគឺជាចំណុចស្នូលនៃអាជីវកម្មរបស់យើង", //72,扩展零售商是我们业务的核心，
    "នេះហើយជាមូលហេតុដែលយើងបានផ្តល់នូវការតបស្នងយ៉ាងសមរម្យបំផុតសម្រាប់ការប្រកួតប្រជែងទៅកាន់អ្នកលក់រាយនៅលើទីផ្សាររបស់យើង។", //73,这就是为什么我们为市场上的零售商提供了最有竞争力的回报，
    "អ្នកលក់រាយរបស់ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ីអាចទទួលបានអត្ថប្រយោជន៍ដូចខាងក្រោម", //74,亚洲福彩零售商可享受以下优惠
    "ប្រាក់ចំណេញខ្ពស់ខ្លាំង", //75,极高的利润提成
    "សេវាកម្មដកសាច់ប្រាក់ប្រចាំសប្តាហ៍", //76,每周的上门提现服务
    "សេវាកម្មកម្ចីកក់", //77,借贷订票服务
    "សេចក្តីណែនាំអំពីការបែងចែកប្រាក់ចំណេញ", //78,利润分配说明
    "សមាជិកដែលបានបង្កើតការភ្នាល់ឬការចាក់ដោយបានជោគជ័យយ៉ាងហោចណាស់ចំនួន5ដងនិងទឹកប្រាក់ភ្នាល់ឬចាក់សរុបមិនតិចជាង500យ័ន(លុយចិន)ហើយត្រូវស្ថិតក្នុងកំឡុងពេលទូទាត់ប្រចាំខែ!", //79,月结区间内进行过 最少五次有效下注 且投注总额不低于500RMB的会员！
    "ប្រសិនបើប្រព័ន្ធសម្ព័ន្ធបរាជ័យក្នុងការបង្រ្គប់ចំនួន(សមាជិកប្រសិទ្ធភាពអប្បបរមាប្រចាំខែ)5នាក់យ៉ាងតិចក្នុងខែនោះ នោះមិនទទួលបានប្រាក់ commission សម្រាប់ខែនោះទេ។ ប្រព័ន្ធសម្ព័ន្ធខែនោះឈានដល់កម្រិតស្តង់ដា", //80,如联盟体系当月未达{月最低有效会员}最低门坎5人，则该月无法领取佣金回馈。联盟体系当月营利达到标准，
    "ស្វែងរកបណ្តាញ", //81,搜索网点
    "ស្វែងរកឈ្មោះហាងឬអាសយដ្ឋាន", //82,搜索店名称或者地址
    "ស្វែងរក", //83,搜索
    "ខេត្តបាត់ដំបង", //84,马德望省
    "ឈ្មោះហាង", //85,门店名称
    "អាសយដ្ឋាន", //86,地址
    "លេខទំនាក់ទំនង", //87,联系电话
    "ម៉ោងធ្វើការ", //88,营业时间
    "សូមបង្កើតគំនិតច្នៃប្រឌិតទាំងអស់គ្នា ", //89,让每个人尽情发挥创意
    "នៅក្នុងក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ី ពួកយើងបង្កើតបានជាបរិយាកាសមួយដែលពោពេញដោយភាពសុទិដ្ឋិនិយម គ្រប់គ្នាខំប្រឹងយ៉ាងសកម្មក្នុងការបង្កើតគំនិតឆ្នៃប្រឌិត។ នៅទីនេះ​ក្រុមហ៊ុននេះមិនមានទស្សនៈបែងចែកឋានៈទេ គ្រប់គ្នាសុទ្ធតែអាចបង្ហាញលើកស្នើអំពីការច្នៃប្រឌិតនិងមតិយោបល់ផ្ទាល់ខ្លួនគ្រប់ពេល។", //90,在亚洲福利彩票，创业的氛围让每个人都积极的创新为做出美好的事情而努力。在这里没有大公司的等级观念，每个人都可以随时提出自己的创意和想法。
    "រួមគ្នាបង្កើតផលិតផលដែលធ្វើអោយគេគ្រប់គ្នាភ្ញាក់ផ្អើលរំភើប", //91,一起做出激动人心的产品
    "សូមឱ្យអ្នករាល់គ្នាចូលរួមនូវភាពរីករាយនៃវិទ្យាសាស្រ្តនិងបច្ចេកវិទ្យា។ ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ីបានបង្កើតនូវម៉ូត (Model) ​ប្តូររង្វាន់ស៊េរីថ្មីតាមអ៊ីនធឺណិត ហើយនេះជាការប្តូររង្វាន់ដែលមានបច្ចេកវិទ្យាខ្ពស់ដែលបង្កើតបានជាវេទិកាអ៊ីនធឺណិតដំបូងបំផុតរបស់ពិភពលោកនិងជាផលិតផលដ៏មហិមាដែលនឹងឆ្លាក់ជាប់ក្នុងក្រអៅបេះដូងរបស់អ្នក!!!", //92,让每个人都能享受科技乐趣。亚洲福利彩票有限公司首创了用互联网技术兑奖模式，将兑奖技术打造成全球首个互联网兑奖平台让伟大的产品铭刻你的烙印！
    "ធ្វើការជាមួយមនុស្សឆ្លាត ", //93,与聪明人一起做事
    "ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ីមានបុគ្គលិកដែលមានទេពកុសល្យនិងមានជំនាញខាងប្រព័ន្ធអ៊ីនធឺណែតច្បាស់លាស់​ សមាជិកក្នុងក្រុមនីមួយៗសុទ្ធតែជាអ្នកដែលមានពកុសល្យមកពីក្រុមហ៊ុនអន្តរជាតិនិងក្រុមហ៊ុនឆ្នោតឧស្សាហកម្មល្បែងធំៗដូចជា Sina, Tencent, Baidu, ឆ្នោតសំណាងចិន និងឆ្នោតកីឡា។ល។", //94,亚洲福利彩票有限公司有着一流的互联网人才基因，创业团队成员是来自新浪、腾讯、百度、中国福利彩票、中国体育彩票等国际企业和博彩行业的顶尖人才
    "[នាយកប្រតិបត្តិការ]", //95,【运营经理】
    "ការទទួលខុសត្រូវការងារ：", //96,岗位职责：
    "តម្រូវការការងារ:", //97,任职要求：
    "[ផលិតផលប្រតិបត្តិការ]", //98,【产品运营】
    "ការទទួលខុសត្រូវការងារ:", //99,岗位职责：
    "ប្រសិនបើអ្នកមានចម្ងល់អំពីផលិតផល សូមបំពេញព័ត៌មានទំនាក់ទំនងរបស់អ្នក", //100,对于我们的产品有任何疑问都可留下您的联系方式
    "បុគ្គលិករបស់យើងនឹងឆ្លើយតបអ្នកក្នុងកំឡុងពេល3ថ្ងៃ ", //101,我们的工作人员将会在3天内回复您
    "ឈ្មោះ", //102,姓名
    "Email", //103,邮箱
    "អត្ថន័យសារ", //104,信息
    "ដាក់ស្នើ", //105,提交
    "តើការប្តូររង្វាន់មានប៉ុន្មានប្រភេទ?", //106,1. 兑奖有哪几种？
    "ការប្តូររង្វាន់មាន2ប្រភេទ：ស្កេនកូដប្តូររង្វាន់និងវាយបញ្ចូលលេខសុវត្ថិភាពប្តូររង្វាន់", //107,兑奖分为两种方式：扫码兑奖和手动输入安全码兑奖。
    "តើធ្វើដូចម្តេចដើម្បីស្កេនកូដប្តូររង្វាន់?", //108,2. 怎样使用扫码兑奖功能？
    "ជាដំបូង អនុញ្ញាតឱ្យកម្មវិធីនេះចូលប្រើមុខងារកាមេរ៉ារបស់ទូរស័ព្ទ បន្ទាប់មកតម្រុងឧបករណ៍ស្កេនកូដឲ្យត្រូវចំកូដ QR ដែលស្ថិតនៅតំបន់សុវត្ថិភាពនៃសន្លឹកឆ្នោត បន្ទាប់ពីស្កេនបានជោគជ័យ វានឹងបង្ហាញនៅលើស្គ្រីនបញ្ជាក់ថាបានជោគជ័យ។ ប្រសិនបើកូដ QR ខូចឬរហែក​ សូមអ្នកប្តូររង្វាន់ដោយវាយបញ្ចូលដោយដៃ។", //109,首先应该允许该应用访问手机的相机功能，然后扫码器对准彩票上保安区的二维码，扫码成功后则会出现相应提示。若彩票二维码破损，则可以使用手动输入的方法进行兑奖。
    "តើធ្វើដូចម្តេចដើម្បីប្តូររង្វាន់ដោយប្រើប្រាស់លេខសុវត្ថិភាពវាយបញ្ចូល?", //110,3. 怎样使用手动输入兑奖功能？
    "នៅពេលដែលកូដ QR នៅតំបន់សុវត្ថិភាពរហែក ខូច ឬព្រិល អ្នកអាចជ្រើសរើសវាយបញ្ចូលលេខលេខសុវត្ថិភាពដើម្បីប្តូររង្វាន់។ លេខសុវត្ថិភាពស្ថិតនៅខាងលើតំបន់សុវត្ថិភាពកូដ QR ។", //111,彩票保安区二维码有破损或模糊不清的时候，可以选择手动输入安全码，安全码位于保安区二维码的上方。
    "គោលនយោបាយវិនិយោគ", //112,招商政策
    "ចុះកុងត្រានឹងទទួលបានសំបុត្រឆ្នោតដែលមានតម្លៃស្មើ $5,000 លក់អស់ទើបបង់ប្រាក់ មិនចំបាច់ដាក់ប្រាក់តម្កល់ របៀបគ្រប់គ្រងផលិតផលឆ្នោតគំរូថ្មីក្លាយជាអ្នកមានយ៉ាងឆាប់រហ័ស។", //113,签约就送5000美金额度的即开型彩票，实现先销售，后付钱不押资金快致富的彩票产品经营新模式。
    "ចុះកុងត្រានឹងទទួលបានការបន្ថែមជូនភ្លាមៗ", //114,签约即送
    "របៀបគ្រប់គ្រងផលិតផលឆ្នោតគំរូថ្មីដែលមិនមានប្រាក់ដំកល់ ក្លាយជាអ្នកមានយ៉ាងឆាប់រហ័ស.", //115,不押资金，快速致富的彩票产品经营新模式
    "ចូលរួមដោយមិនមានឧបសគ្គ", //116,零门槛入驻
    "ឆ្នោតសំណាងអាស៊ីយើងខ្ញុំសន្យាថានឹងមិនគិតថ្លៃស​ញ្ញាបត្រ ប្រាក់តម្កល់។ល។ ពីភ្នាក់ងារណាមួយទេ។ ចុះកុងត្រានឹងទទួលបានសំបុត្រឆ្នោតដែលមានតម្លៃស្មើ $5,000 លក់អស់ទើបបង់ប្រាក់ មិនចាំបាច់ដាក់ប្រាក់តម្រល់ របៀបគ្រប់គ្រងផលិតផលឆ្នោតគំរូថ្មី ក្លាយជាអ្នកមានយ៉ាងឆាប់រហ័ស។", //117,亚洲福利彩票承诺不向任何代理商收取保证金、押金等费用。签约就送5000美金额度的即开型彩票，实现先销售，后付钱，不押资金快致富的彩票产品经营新模式。
    "ផ្តល់របាយការណ៍ប្រាក់ចំណូល", //118,提供营收报表
    "ផ្តល់ទិន្នន័យលម្អិតសម្រាប់របាយការណ៍ប្រាក់ចំណូលដើម្បីធ្វើឱ្យស្ថានភាពប្រាក់ចំណូលរបស់ភ្នាក់ងារកាន់តែច្បាស់លាស់ និងមានភាពងាយស្រួលក្នុងការទូទាត់។", //119,为代理商提供详细的营收报表数据，让收益情况更直观，结算更清晰。
    "ភាគលាភខ្ពស់", //120,分红丰厚
    "ភាគលាភខ្ពស់ដែលគណនាតាមចំនួនលក់របស់ភ្នាក់ងារនិងភាគរយ commission លក់ខ្ពស់បំផុតនៅក្នុងប្រទេសកម្ពុជា", //121,分红丰厚，按照销量给与代理商具有全柬埔寨最高的销量提成。
    "ផ្តល់ការគាំទ្រផ្នែកលក់", //122,提供销售支持
    "ផ្តល់ការបណ្តុះបណ្តាលផ្នែកទីផ្សារនិងការគាំទ្រផ្នែកលក់ទៅកាន់ភ្នាក់ងារ។ រៀបចំបទបង្ហាញពន្យល់អំពីវិធីសាស្រ្តលក់ដើម្បីឲ្យភ្នាក់ងារកាន់តែយល់ច្បាស់អំពីអាជីវកម្មនិងផលិតផល បង្កើនល្បឿននិងប្រសិទ្ធភាពនៃការលក់​​ បង្កើតយន្តការលក់ដែលប្រកបដោយប្រសិទ្ធភាពខ្ពស់និងសកម្ម។", //123,为代理商提供营销培训和销售支持。不定期的组织各种销售人员分享沙龙，帮助代理商快速熟悉业务，建立高效、活跃工作销售机制。
    "ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ី（www.lotteryasian.com）ជាកម្មសិទ្ធិក្រុមហ៊ុន Asian welfare lottery Co., Ltd. ដែលធ្វើការលក់អាជីវកម្មឆ្នោតតាមអនឡាញ។ កិច្ចព្រមព្រៀងនេះគឺប្រើសម្រាប់ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ីនិងអ្នកប្រើប្រាស់របស់ក្រុមហ៊ុន។ ដូចនេះមុនពេលដែលអ្នកចុះឈ្មោះជាអ្នកប្រើ​ប្រាស់ អ្នកត្រូវអានដោយយកចិត្តទុកដាក់និងយល់ច្បាស់អំពីរាល់លក្ខខណ្ឌទាំងអស់ដែលបានចែង ជាពិសេសលក្ខខណ្ឌនៃការលើកលែង ឬការកំណត់លើការទទួលខុសត្រូវ ច្បាប់ស្តីពីការអនុវត្ដន៍និងការដោះស្រាយវិវាទ ព្រមទាំងលក្ខខណ្ឌមួយចំនួនដែលរៀបរាប់ពីកាតព្វកិច្ចដែលអ្នកគួរអនុវត្ត ឫដាក់កម្រិតលើសិទ្ធិរបស់អ្នក។ប្រសិនបើអ្នកមិនទទួលយកលក្ខខណ្ឌទាំងអស់ឬណាមួយក្នុងកិច្ចព្រមព្រៀងនេះ អ្នកមិនមានសិទ្ធិចុះឈ្មោះប្រើប្រាស់ ចូលប្រព័ន្ធ ឬប្រើប្រាស់សេវាកម្មដែលមានចែងក្នុងកិច្ចព្រមព្រៀងនេះឡើយ។ ប្រសិនបើចុះឈ្មោះ ចូលប្រព័ន្ធ ឫ ប្រើប្រាស់សេវាកម្មណាមួយដែលមានចែងនៅលើកិច្ចព្រមព្រៀងនេះ នោះមានន័យថា អ្នកបានឯកភាព និងយល់ព្រមតាមលក្ខខណ្ឌទាំងអស់នៅក្នុងកិច្ចព្រមព្រៀងនេះ។ ប្រសិនបើអ្នកមិនឯកភាពនិងមិនយល់ព្រមតាមលក្ខខណ្ឌនៃកិច្ចព្រមព្រៀងនេះទេ  សូមកុំចុះឈ្មោះ  ឬប្រើសេវាកម្មដែលទាក់ទងនឹងកិច្ចព្រមព្រៀងនេះ។ កិច្ចព្រមព្រៀងនេះគឺជាកិច្ចព្រមព្រៀងស្របច្បាប់រវាង អ្នក(អ្នកប្រើប្រាស់) និងក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ី (Asia Welfare Lottery)។", //124,亚洲福利彩票（www.lotteryasian.com）隶属于亚洲福利彩票有限公司，开展网上销售彩票业务。本协议为亚洲福利彩票进行彩票销售业务与用户相关的事宜而订立，在您注册成为亚洲福彩用户之前，请务必认真阅读和充分理解本协议中各条款内容，特别是免除或者限制责任的条款、法律适用及争议解决条款，因为这些条款可能会明确您应履行的义务或对您的权利有一定限制。除非您接受本协议所有条款，否则您无权注册、登录或使用本协议所涉及的相关服务。若您注册、登录、使用或以任何方式使用本协议所涉及的相关服务的行为将视为对本协议的全部接受，即表示您同意接受本协议各项条款的约束。如果您不同意本协议中的条款，请勿注册、登录或使用本协议相关服务。 本协议是您（或称为“用户”）与亚洲福利彩票有限公司（下称“亚洲福彩”）之间的对双方有约束力的法律协议。
    "ខ្លឹមសារនៃសេវាកម្ម", //125,1. 服务内容
    "ឆ្នោតសំណាងអាស៊ី（www.lotteryasian.com）ផ្តល់សេវាកម្មដោយផ្អែកលើបណ្តាញអ៊ីនធឺណិត និងអ៊ីនធឺណិតចល័ត (ដែលហៅថា សេវាកម្មបណ្តាញ)ដោយស្របតាមល័ក្ខខ័ណ្ឌនៃសេវាកម្មនិងច្បាប់ប្រតិបត្តិការ។ ខ្លឹមសារជាក់លាក់នៃសេវាកម្មបណ្តាញឆ្នោតសំណាងអាស៊ី គឺត្រូវបានកំណត់ដោយឆ្នោតសំណាងអាស៊ីដោយយោងតាមស្ថានភាពជាក់ស្តែង រួមបញ្ចូលប៉ុន្តែមិនកំណត់វើសិនបណ្តាញ និងវើសិនចល័តនៃឆ្នោតសំណាងអាស៊ីសំរាប់សេវាកម្មការលក់ សេវាកម្មប្តូររង្វាន់ សេវាកម្មផ្ទេរប្រាក់ និងសេវាកម្មដកសាច់ប្រាក់។ល។", //126,1.1 亚洲福彩（www.lotteryasian.com），完全按照其发布的服务条款和操作规则提供基于互联网以及移动互联网的相关服务（以下简称“网络服务”）。亚洲福彩网络服务的具体内容由亚洲福彩根据实际情况提供，包括但不限于亚洲福彩网页版、移动版等售彩服务、兑奖服务、转账服务、提现服务等。
    "នៅពេលដែលអ្នកចុះឈ្មោះក្លាយជាអ្នកប្រើប្រាស់ អ្នកនឹងទទួលបានលេខគណនី និងលេខកូដសំងាត់។ អ្នកត្រូវទទួលខុសត្រូវរាល់សកម្មភាពនិងប្រតិបត្តិការទាំងអស់ក្នុងគណនីរបស់អ្នក។ ប្រសិនបើគណនីនិងលេខសំងាត់របស់អ្នកគ្រប់គ្រងមិនបានល្អ​ និងបង្ករឲ្យមានការខាតបង់ទៅលើខ្លួនឯងផ្ទាល់ ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ី ឬភាគីទីបីណាមួយដោយប្រការណាមួយ នោះអ្នកគឺជាអ្នកទទួលខុសត្រូវតែម្នាក់គត់ចំពោះរាល់ការខូចខាត។", //127,1.2 您一旦注册成功成为用户，将得到一个账号和密码，您需要对自己在账户中的所有活动和事件负全责。如果由于您的过错导致您的账号和密码脱离您的控制，则由此导致的针对您、亚洲福彩或任何第三方造成的损害，您将承担全部责任。
    "អ្នកប្រើប្រាស់គួរតែបញ្ចូលលេខគណនីនិងលេខកូដសំងាត់ដើម្បីចូលទៅកាន់គណនីឆ្នោតសំណាងអាស៊ី។", //128,1.3 用户应输入账号和密码登录亚洲福彩账户。
    "អ្នកប្រើប្រាស់យល់និងទទួលស្គាល់ថាឆ្នោតសំណាងអាស៊ីផ្តល់តែសេវាកម្មដែលជាប់ទាក់ទងនឹងបណ្តាញ។ សំរាប់ឧបករណ៍ក្នុងការប្រើប្រាស់ភ្ជាប់បណ្តាញ(កុំព្យូទ័រផ្ទាល់ខ្លួន ទូរស័ព្ទចល័ត និងឧបករណ៍ដទៃទៀតដែលប្រើប្រាស់សំរាប់ភ្ជាប់អ៊ីនធឺណិតឬអ៊ិនធឺណែតចល័ត) និងថ្លៃចាំបាច់ទាំងអស់ (ការបង់ថ្លៃទូរស័ព្ទនិងអ៊ិនធឺណិតចល័តប្រើប្រាស់លើទូរស័ព្ទនិងលើខបករណ៍ផ្សេងៗ) អ្នកប្រើប្រាស់ត្រូវទទួលខុសត្រូវចំណាយដោយខ្លួនឯង។", //129,1.4 用户理解并接受，亚洲福彩仅提供相关的网络服务，除此之外与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动互联网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均应由用户自行负担。
    "ច្បាប់សម្រាប់អ្នកប្រើប្រាស់", //130,  2. 用户使用规则
    "នៅពេលដែលស្នើសុំប្រើប្រាស់សេវាកម្ម អ្នកប្រើប្រាស់ចាំបាច់ត្រូវបំពេញ ឯកសារព័ត៌មានផ្ទាល់ខ្លួនអោយបានពិតប្រាកដ ត្រឹមត្រូវ និងមានប្រសិទិ្ធភាព។ប្រសិនបើឯកសារព័ត៌មានមិនត្រឹមត្រូវ មិនពិតប្រាកដ មិនស្របច្បាប់ មិនលម្អិត ឫ ដែលត្រូវមានការផ្លាស់ប្តូរប្រែប្រួល អ្នកចាំបាច់ត្រូវធ្វើការកែសម្រួលភ្លាមៗ។ប្រសិនបើមានបញ្ហាណាមួយកើតឡើងដែលបណ្តាលមកពីភាពមិនត្រឹមត្រូវ មិនពិតប្រាកដ មិនស្របច្បាប់ និងមិនលម្អិតនៃឯកសារដែលអ្នកផ្តល់ជូន  នោះក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ីសូមរក្សាសិទ្ធិក្នុងបញ្ឈប់អ្នកពីការប្រើប្រាស់សេវាកម្មរបស់ក្រុមហ៊ុន។", //131,  2.1 用户在申请使用亚洲福彩网站网络服务时，必须向亚洲福彩提供真实、准确、完整有效的个人资料，如个人资料提供不准确、不真实、不合法、不详尽或有任何变动的，必须及时更新或修改。因用户提供个人资料不准确、不真实、不合法、不详尽而引发的一切后果由用户承担，并且亚洲福彩保留停止用户使用亚洲福彩服务的权利。
    "អ្នកប្រើប្រាស់មិនត្រូវ ផ្ទេរគណនីនិងលេខកូដសំងាត់ ឲ្យអ្នកដទៃខ្ចីប្រើប្រាស់ ឬធ្វើឲ្យបាត់បង់ការគ្រងលើគណនីផ្ទាល់ខ្លួនទៅអ្នកដទៃដោយទម្រង់ណាមួយឡើយ។ ប្រសិនបើអ្នកប្រើប្រាស់ប្រទះឃើញអ្នកដទៃយកគណនីអ្នកឬគណនីណាមួយទៅប្រើប្រាស់ខុសច្បាប់ សូមប្រញាប់ផ្តល់ដំណឹងមកក្រុមហ៊ុនជាបន្ទាន់។ មិនថាគណនីនិងលេខសំងាត់ត្រូវអ្នកដទៃយកទៅប្រើខុសច្បាប់ដោយសារការធ្វេសប្រហែសរបស់អ្នកប្រើប្រាស់ឬត្រូវបាន hack ក៏ដោយ ក្រុមហ៊ុនពុំអាចទទួលខុសត្រូវឡើយ។", //132,  2.2 用户不应将其账号、密码转让、出借或以任何脱离用户控制的形式交由他人使用。如用户发现其账号遭他人非法使用，应立即通知亚洲福彩。因黑客行为或用户的保管疏忽导致账号、密码遭他人非法使用，亚洲福彩不承担任何责任。
    "អ្នកប្រើប្រាស់ត្រូវមានទំនួលខុសត្រូវចំពោះរាល់សកម្មភាពទាំងអស់ដែលស្ថិតក្រោមគណនីដែលអ្នកបានចុះឈ្មោះ។ ក្រុមហ៊ុនមិនទទួលខុសត្រូវចំពោះការបាត់បង់ឬការខូចខាតណាមួយដែលបង្កឡើងដោយទង្វើរបស់អ្នកប្រើប្រាស់ខ្លួនឯង ឬភាគីទីបីណាមួយទេ។", //133,  2.3 用户应当为自身注册账户下的一切行为负责，因用户行为而导致的用户自身或其他任何第三方的任何损失或损害，亚洲福彩不承担责任。
    "អ្នកប្រើប្រាស់យល់និងទទួលយកថាសេវាកម្មដែលផ្តល់ដោយឆ្នោតសំណាងអាស៊ី នឹងអាចត្រូវបានផ្ញើតាមរយៈក្រុមហ៊ុនផ្ទាល់ ឬអ្នកផ្សាយពាណិជ្ជកម្មភាគីទីបី មិនរួមបញ្ចូល អ៊ីម៉ែល សារ ការតេទូរស័ព្ទ​ សំបុត្រក្នុងស្ថានីយដែលជាប្រភេទពាណិជ្ជកម្មឬមិនជាប្រភេទពាណិជ្ជកម្ម​ ការបន្ថែមេជូន ការផ្សាយពាណិជ្ជកម្ម ឬព័ត៌មានផ្សព្វផ្សាយ (រួមទាំងពត៌មានពាណិជ្ជកម្មឬមិនពាណិជ្ជកម្ម)។ វិធីសាស្រ្តនិងវិសាលភាពផ្សេងទៀតអាចត្រូវបានផ្លាស់ប្តូរដោយគ្មានការជូនដំណឹងជាពិសេសដល់អ្នកប្រើប្រាស់។ អ្នកប្រើយល់ព្រមឲ្យក្រុមហ៊ុនដាក់បង្ហាញការផ្សាយពាណិជ្ជកម្មរបស់ក្រុមហ៊ុន ភាគីទីបី និងដៃគូសហការរបស់ក្រុមហ៊ុននៅលើស្គ្រីនក្នុងកំឡុងពេលប្រើប្រាស់សេវាកម្មតាមរយៈអនឡាញ ហើយក្រុមហ៊ុនមិនចាំបាច់បង់កំរៃទៅដល់អ្នកប្រើប្រាស់សម្រាប់ការដាក់បង្ហាញការផ្សព្វផ្សាយនេះទេ។ ទាក់ទងទៅនឹងពត៌មានផ្សាយពាណិជ្ជកម្មដែលលេចឡើងក្នុងកំឡុងពេលផ្តល់សេវាកម្មតាមរយៈអនឡាញក្នុងពេលប្រើប្រាស់សេវាកម្ម អ្នកប្រើប្រាស់គួរតែពិចារណាដោយប្រុងប្រយ័ត្ននូវភាពត្រឹមត្រូវនិងភាពជឿជាក់របស់ព័ត៌មានពាណិជ្ជកម្ម ហើយអ្នកត្រូវទទួលខុសត្រូវចំពោះប្រតិបត្តិការដែលខ្លួនបានធ្វើជាមួយព័ត៌មានពាណិជ្ជកម្មនោះ។ ឆ្នោតសំណាងអាស៊ីនឹងមិនទទួលខុសត្រូវចំពោះការបាត់បង់ឬការខូចខាតណាមួយដែលអ្នកទទួលរងដោយលទ្ធផលនៃការធ្វើប្រតិបត្តិការដោយផ្អែកលើពត៌មានផ្សាយពាណិជ្ជកម្មឬមាតិកាខ្លឹមសារដែលផ្តល់ដោយអ្នកផ្សាយពាណិជ្ជកម្មដែលបានបញ្ជាក់ខាងលើ។", //134,  2.4 用户理解并接受亚洲福彩提供的服务中可能自行或由第三方广告商通过包括但不限于邮件、短信、电话、站内信的方式向您发送商业或非商业广告、推广或宣传信息（包括商业或非商业信息），其他方式和范围可不经向您特别通知而变更。用户同意在使用网络服务的过程中显示亚洲福彩和第三方广告商、合作伙伴提供的广告，且亚洲福彩无需向用户支付任何对价。对于亚洲福彩提供的服务中出现的广告信息，您应当自行审慎判断其真实性和可靠性，除法律明确规定外，您应对该广告信息进行的交易负责，您因依该广告信息进行的交易或前述广告商提供的内容而遭受的损失或损害，亚洲福彩不承担责任。
    "អ្នកដែលប្រើសេវាកម្មរបស់ឆ្នោតសំណាងអាស៊ី ត្រូវអុនវត្តតាមគោលការណ៍ដូចខាងក្រោម:", //135,  2.5 用户在使用亚洲福彩网络服务过程中，必须遵循以下原则：
    "គោរពតាមច្បាប់និងបទបញ្ជាផ្ទៃក្នុងដែលមានជាប់ទាក់ទង;", //136,  2.5.1 遵守当地有关的法律和法规；
    "គោរពតាមច្បាប់ និង ការដំណើរការដែលជាប់ទាក់ទងការប្រើប្រាស់សេវាកម្មអនឡាញទាំងអស់", //137,  2.5.2 遵守所有与网络服务有关的网络协议、规定和程序；
    "អ្នកមិនអាចប្រើសេវាកម្មឆ្នោតសំណាងអាស៊ីសម្រាប់គោលបំណងខុសច្បាប់ណាមួយឡើយ;", //138,  2.5.3 不得为任何非法目的而使用亚洲福彩网络服务系统；
    "អ្នកមិនអាចប្រើប្រាស់សេវាកម្មឆ្នោតសំណាងអាស៊ីដើម្បីធ្វើសកម្មភាពណាមួយដែលធ្វើអោយប៉ះពាល់ដល់ដំណើរការបណ្តាញអ៊ីនធឺណិតឬអ៊ីនធឺណិតចល័តឡើយ.", //139,  2.5.4 不得利用亚洲福彩网络服务系统进行任何可能对互联网或移动网正常运转造成不利影响的行为；
    "អ្នកមិនអាចប្រើសេវាកម្មដែលផ្តល់ដោយឆ្នោតសំណាងអាស៊ីទៅធ្វើការផ្ទេរ បង្ហាញ  ឫផ្សព្វផ្សាយការក្លែងបន្លំ រំខាន បង្កររបួសស្នាមទៅលើអ្នកដទៃ បរិហាកេរ្តិ៍ បំភិតបំភ័យ និយាយអាសគ្រាម ឬព័ត៌មានខុសច្បាប់ណាមួយឡើយ", //140,  2.5.5 不得利用亚洲福彩提供的网络服务上传、展示或传播任何虚假的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的或其他任何非法的信息资料；
    "អ្នកមិនអាចធ្វើការរំលោភបំពាន់កម្មសិទ្ធិបញ្ញា សិទ្ធិថតចម្លង សិទ្ធិស្លាកយីហោ កេរ្តិ៍ឈ្មោះ ឬសិទ្ធិស្របច្បាប់ណាមួយរបស់ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ី និងភាគីទីបីណាមួយឡើយ", //141,  2.5.6 不得侵犯亚洲福彩和其他任何第三方的专利权、著作权、商标权、名誉权或其他任何合法权益；
    "អ្នកមិនអាចប្រើប្រាស់សេវាអ៊ីនធឺណិតរបស់ឆ្នោតសំណាងអាស៊ីក្នុងការធ្វើសកម្មភាពណាមួយដែលបង្កឲ្យមានផលប៉ះពាល់ដល់ឆ្នោតសំណាងអាស៊ីឡើយ", //142,  2.5.7 不得利用亚洲福彩网络服务系统进行任何不利于亚洲福彩的行为；
    "អ្នកមិនអាច ធ្វើសកម្មភាពញុះញង់ឲ្យកើតមានអំពើហឹង្សា បង្ខូចរដ្ឋធម្មនុញ្ញ និងច្បាប់ បញ្ចេញមតិរិះគន់លើការអនុវត្តន៍បទបញ្ជារដ្ឋបាល ញុះញង់បង្ករឲ្យមានការបំផ្លិចបំផ្លាញអំណាចរបស់រដ្ឋ បញ្ចេញមតិរិះគន់លើប្រព័ន្ធសង្គមនិយម ញុះញង់ បំបែកបំបាក់សាមគ្គីភាពជាតិ និងញុះញង់បង្កឲ្យមានការស្អប់ឬរើសអើងពូជសាសន៍", //143,  2.5.8 不得传输或发表：煽动抗拒、破坏宪法和法律、行政法规实施的言论，煽动颠覆国家政权，推翻社会主义制度的言论，煽动分裂国家、破坏国家统一的言论，煽动民族仇恨、民族歧视、破坏民族团结的言论；
    "ប្រសិនបើប្រទះឃើញគណនីអ្នកប្រើប្រាស់ណាមួយត្រូវបានប្រើប្រាស់ដោយខុសច្បាប់ ឬមានស្ថានភាពមានចន្លោះមិនប្រក្រតី សូមប្រញាប់ធ្វើការរាយការណ៍មកក្រុមហ៊ុនជាបន្ទាន់។ ", //144,  2.5.9 如发现任何非法使用用户账号或账号出现安全漏洞的情况，应立即通告亚洲福彩。
    "ដើម្បីកាត់បន្ថយផលប៉ះពាល់នៃការប្រព្រឹត្តមិនត្រឹមត្រូវរបស់អ្នកប្រើ ប្រសិនបើអ្នកប្រើប្រាស់សេវាកម្មអ៊ីនធឺណិតក្រុមហ៊ុនបំពានច្បាប់ណាមួយរបស់ក្រុមហ៊ុនក្នុងកំឡុងពេលប្រើប្រាស់ ក្រុមហ៊ុនឬបុគ្គលិកពាក់ព័ន្ធមានសិទ្ធិតម្រូវឲ្យអ្នកប្រើប្រាស់ធ្វើការកែតម្រូវ ឬ​ចាត់វិធានការចាំបាច់ណាមួយដោយផ្ទាល់ (រួមបញ្ចូលប៉ុន្តែមិនកំណត់ចំពោះការផ្លាស់ប្តូរឬការលុបអត្តន័យដែលអ្នកប្រើប្រាស់បានប្រមូលទុក មានសិទ្ធិផ្អាក ឫបញ្ឍប់គណនីប្រើប្រាស់របស់អ្នកប្រើ)។ ប្រសិនបើអ្នកប្រើប្រាស់បំពានលើល័ក្ខខ័ណ្ឌខាងលើដោយប្រើប្រាស់សេវាកម្មបណ្តាញដែលបណ្តាលឱ្យភាគីទីបីឬក្រុមហ៊ុនទទួលរងការខូចខាត នោះអ្នកត្រូវទទួលខុសត្រូវនិងសងសំណង។", //145,  2.6 如用户在使用网络服务时违反任何上述规定，亚洲福彩或其授权的人员有权要求用户改正或直接采取一切必要的措施（包括但不限于更改或删除用户收藏的内容等、暂停或终止用户使用网络服务的权利）以减轻用户不当行为造成的影响。如果用户使用网络服务违反了任何上述规定，导致任何第三方遭受损害的，您应当独立承担责任，亚洲福彩因此遭受损失的，您也应当一并赔偿。
    "ការប្រែប្រួលនៃសេវាកម្ម ការផ្តាច់ ឫការបញ្ឈប់", //146,  3. 服务变更、中断或终止
    "យោងទៅតាមលក្ខណៈពិសេសនៃសេវាកម្មបណ្តាញនិងតម្រូវការនៃការអភិវឌ្ឍសេវាកម្ម អ្នកប្រើប្រាស់យល់ព្រមថាក្រុមហ៊ុនមានសិទ្ធិផ្លាស់ប្តូរ ផ្តាច់  ឬបញ្ឈប់សេវាកម្មបណ្តាញមួយចំនួនឬទាំងអស់តាមអ៊ីនធឺណិតនៅពេលណាមួយ ដោយមិនចាំបាច់ជូនដំណឹងដល់អ្នកប្រើប្រាស់ ហើយក៏មិនចាំបាច់ ទទួលខុសត្រូវចំពោះអ្នកប្រើប្រាស់ណាមួយឬភាគីទីបីណាមួយឡើយ។", //147,  3.1 鉴于网络服务的特殊性，用户同意亚洲福彩有权根据业务发展情况随时变更、中断或终止部分或全部的网络服务而无需通知用户，也无需对任何用户或任何第三方承担任何责任；
    "អ្នកប្រើប្រាស់យល់ថាឆ្នោតសំណាងអាស៊ីត្រូវការជួសជុលឫថែទាំ Platform របស់ សេវាកម្មអ៊ីនធឺណិត (វេបសាយអ៊ីនធើណែត បណ្តាញទូរស័ព្ទចល័តជាដើម) ឬគ្រឿងបរិក្ខារដែលពាក់ព័ន្ធជាទៀតទាត់។ប្រសិនបើដោយសារតែស្ថានភាពបែបនេះនាំឲ្យសេវាកម្មបណ្តាញត្រូវបានកាត់ផ្តាច់ក្នុងពេលដែលមិនគួរដាច់ណាមួយ ក្រុមហ៊ុនមិនទទួលខុសត្រូវឡើយ។ ប៉ុន្តែទោះបីជាយ៉ាងណាក៏ដោយក្រុមហ៊ុននឹងព្យាយាមផ្តល់ដំណឹងជាមុនតាមដែលអាចធ្វើទៅបាន។", //148,  3.2 用户理解，亚洲福彩需要定期或不定期地对提供网络服务的平台（如互联网网站、移动网络等）或相关的设备进行检修或者维护，如因此类情况而造成网络服务在合理时间内的中断，亚洲福彩无需为此承担任何责任，但亚洲福彩应尽可能事先进行通告。
    "ក្រុមហ៊ុនមានសិទ្ធិផ្អាកឬបញ្ឈប់អ្នកប្រើប្រាស់គ្រប់ពេលវេលា (រួមបញ្ចូលទាំងសេវាកម្មបណ្តាញគិតថ្លៃ) ដោយពុំចាំបាច់ទទួលខុសត្រូវចំពោះអ្នកប្រើប្រាស់ ឬភាគីទីបីណាមួយឡើយ​ ប្រសិនបើករណីណាមួយក្នុងចំណោមករណីខាងក្រោមនេះបានកើតឡើង:", //149 3.3 如发生下列任何一种情形，亚洲福彩有权随时中断或终止向用户提供本协议项下的网络服务（包括收费网络服务）而无需对用户或任何第三方承担任何责任：
    "ព័ត៌មានផ្ទាល់ខ្លួនដែលផ្តល់ដោយអ្នកប្រើប្រាស់មិនពិតប្រាកដ；", //150   3.3.1 用户提供的个人资料不真实；
    "អ្នកប្រើប្រាស់បំពានលើច្បាប់និងបទបញ្ជាពាក់ព័ន្ធ ឬច្បាប់នៃការប្រើប្រាស់ដែលមានចែងក្នុងកិច្ចព្រមព្រៀងនេះ", //151   3.3.2 用户违反相关法律法规或本协议中规定的使用规则；
    "យោងតាមច្បាប់ដែលបានកំណត់ ឫការស្នើសុំរបស់អាជ្ញាធ័រគ្រប់គ្រង", //152  3.3.3 按照法律规定或主管部门的要求；
    "សម្រាប់មូលហេតុសុវត្ថិភាព ឫស្ថានភាពដែលចាំបាច់ផ្សេងទៀត", //153  3.3.4 出于安全的原因或其他必要的情形。
    "កម្មសិទ្ធិបញ្ញា", //154   4. 知识产权
    "សេវាកម្មអ៊ីនធឹណិតដែលផ្តល់់ដោយឆ្នោតសំណាងអាស៊ីរួមបញ្ចូលទាំងអត្តបទ រូបភាព រូបភាពក្រាហ្វិក អូឌីយ៉ូសំលេងនិង / ឬឯកសារវីដេអូណាមួយគឺសុទ្ធតែស្ថិតនៅក្រោមការរក្សាសិទ្ធិ ស្លាកយីហោពាណិជ្ជកម្មនិង/ឫការរក្សាច្បាប់ផ្សេងទៀតដែលមានជាប់ពាក់ព័ន្ធ។ដូចនេះ ប្រសិនបើគ្មានការយល់ព្រមពីម្ចាស់កម្មសិទ្ធិ ឯកសារពាក់ព័ន្ធខាងលើ មិនត្រូវបានយកទៅប្រើប្រាស់ក្នុងគោលបំណងពាណិជ្ជកម្មណាមួយឡើយ។", //155    4.1亚洲福彩提供的网络服务中包含的任何文本、图片、图形、音频和/或视频资料均受版权、商标和/或其它相关法律的保护，未经相关权利人同意，上述资料均不得用于任何商业目的。
    "រាល់កម្មវិធី (Software) (រួមបញ្ចូលតែមិនកំណត់ រូបកា្រហ្វិក រូបថត រូបមានចលនា វីដេអូ សំលេង បទភ្លេង អក្សរ add-on និងសមាសភាពផ្សេងទៀតដែលភ្ជាប់ជាមួយ កម្មវិធី (Software))ដែលផ្តល់ដោយក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ីគឺជា កម្មវិធី (Software) ដែលមានកម្មសិទ្ធបញ្ញា។ ប្រសិនបើគ្មានការអនុញ្ញាតពីម្ចាស់កម្មសិទ្ធ អ្នកប្រើប្រាស់មិនអាចធ្វើបញ្ច្រាស់ដំណើរប្រព័ន្អ (Reverse Engineer) ដោះកូដផ្តេសផ្តាស់ (Disassemble) ឫ ដោះឬធ្វើការចងក្រងដែលពុំគួរ  (Decompile)។", //156    4.2 亚洲福彩为提供网络服务而使用的任何软件（包括但不限于软件中所含的任何图像、照片、动画、录像、录音、音乐、文字和附加程序、随附的帮助材料）的一切权利均属于该软件的著作权人，未经该软件的著作权人许可，用户不得对该软件进行反向工程（reverse engineer）、反向编译（decompile）或反汇编（disassemble）。
    "ការការពារឯកជនភាព", //157    5. 隐私保护
    "អ្នកប្រើប្រាស់យល់ដឹងនិងយល់ព្រមថា ក្រុមហ៊ុនអាចចូលទៅកាន់និងទទូលយកព័ត៌មានរបស់អ្នកប្រើប្រាស់ខាងក្រោម：", //158    5.1 用户理解并同意，亚洲福彩能获取用户下列信息：
    "ព័ត៌មានផ្ទាល់ខ្លួនទាំងអស់របស់អ្នកប្រើប្រាស់ដែលបំពេញនៅពេលចុះឈ្មោះ", //159      5.1.1 用户注册时填写的全部个人信息；
    "ក្នុងពេលប្រើប្រាស់សេវាកម្មឆ្នោតសំណាងអាស៊ី អ្នកប្រើប្រាស់អាចនឹងទទួលបានព័ត៌មាន រាប់បញ្ចូលប៉ុន្តែមិនកំណត់：", //160      5.1.2 用户在享受亚洲福彩服务过程中亚洲福彩可能获得的信息，包括但不限于：
    "ព័ត៌មានដែលអ្នកប្រើប្រាស់បង្ហោះទៅកាន់វេបសាយ និងAppចល័តរបស់ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ី", //161      1) 用户上传到亚洲福彩网站和移动应用的信息；
    "នៅក្នុងដំណើរការនៃការចូលទៅកាន់ ឬប្រើប្រាស់ផលិតផលឆ្នោតសំណាងអាស៊ីក្រុមហ៊ុននឹងទទួលបានព័ត៌មានដែលជាប់ក្នុង browser (Recorded browser) និងព័ត៌មានកុំព្យូទ័រ (រាប់បញ្ចូលប៉ុន្តែមិនកំណត់អាសយដ្ឋានIP ពេលវេលាដំណើរការ ឧបករណ៍ Hardware កម្មវិធី Software និងព័ត៌មានផ្សេងទៀត)ពីអ្នក;", //162      2) 用户在访问或使用亚洲福彩产品的过程中，亚洲福彩自动接收记录的浏览器和计算机信息（包括但不限于IP地址、访问时间、软硬件设备信息、浏览记录等信息）；
    "ព័ត៌មាននិងប្រវត្តិប្រតិបត្តិការដែលអ្នកប្រើប្រាស់ប្រើប្រាស់ក្នុងសេវាកម្មផលិតផលឆ្នោតសំណាងអាស៊ី។.", //163      3) 用户使用亚洲福彩产品过程中的操作痕迹及交易信息等。
    "ការការពារសិទ្ធិឯកជនរបស់អ្នកប្រើប្រាស់គឺជាគោលការណ៍មូលដ្ឋានរបស់ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ី។ ក្រុមហ៊ុនសន្យាថាមិនបង្ហាញឬផ្តល់ព័ត៌មានចុះឈ្មោះ និងព័ត៌មានផ្សេងៗរបស់អ្នកប្រើប្រាស់ដែលរក្សាទុកអ៊ីនធឹណិតទៅឱ្យភាគីទីបីឡើយ លុះត្រាតែ", //164      5.2 保护用户隐私是亚洲福彩的一项基本政策，亚洲福彩保证不对外公开或向第三方提供单个用户的注册资料及用户在使用网络服务时存储在亚洲福彩的非公开内容，但下列情况除外：
    "សិទិ្ធពិតប្រាកដដែលអ្នកប្រើប្រាស់ទទួលបាន", //165      5.2.1 事先获得用户的明确授权；
    "យោងតាមតម្រូវការច្បាប់និងបទបញ្ជាពាក់ព័ន្ធ", //166      5.2.2 根据有关的法律法规要求；
    "យោងតាមការស្នើសុំរបស់ក្រសួងរាជរដ្ឋាភិបាលអាជ្ញាធ័រជាប់ពាក់ព័ន្ធ;；", //167      5.2.3 按照相关政府主管部门的要求；
    "ដើម្បីការពារផលប្រយោជន៍របស់សាធារណជន", //168      5.2.4 为维护社会公众的利益；
    "ដើម្បីការពារសិទ្ធិស្របច្បាប់របស់ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ី", //169      5.2.5 为维护亚洲福彩的合法权益；
    "ដើម្បីដោះស្រាយវិវាទរវាងអ្នកប្រើប្រាស់និងអ្នកប្រើប្រាស់ឬរវាងអ្នកកាន់សិទ្ធិនិងអ្នកកាន់សិទ្ធិ ដូចជាការត្អូញត្អែរឬប្តឹង​អំពីកម្មសិទ្ធិបញ្ញានិងការបង្ហាញព័ត៌មានពាក់ព័ន្ធ)", //170      5.2.6 为处理某用户与其他用户或权利人之间的纠纷或争议（包括因某用户因知识产权等原因被投诉，向投诉人披露相关信息，以便处理和解决纠纷）。
    "ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ីអាចនឹងសហការជាមួយភាគីទីបីដើម្បីផ្តល់ឱ្យអ្នកប្រើប្រាស់នូវសេវាកម្មដែលពាក់ព័ន្ធ។ ដូចគ្នានេះដែរ ប្រសិនបើភាគីទីបីយល់ព្រមទទួលខុសត្រូវ និងរក្សាសិទ្ធិឯកជនជូន អ្នកប្រើប្រាស់ នោះឆ្នោតសំណាងអាស៊ីមានសិទ្ធិផ្តល់ព័ត៌មានចុះឈ្មោះរបស់អ្នកប្រើប្រាស់ទៅភាគីទីបី។", //171      5.3 亚洲福彩可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与亚洲福彩同等的保护用户隐私的责任，则亚洲福彩有权将用户的注册资料等提供给该第三方。
    "ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ីរក្សាឯកជនភាពជូនអ្នកប្រើប្រាស់ ប៉ុន្តែទោះបីជាយ៉ាងណាក៏ដោយក្រុមហ៊ុនសូមរក្សាសិទ្ធិវិភាគ database របស់អ្នកប្រើប្រាស់ ព្រមទាំងយក database ទាំងនោះសម្រាប់ការធ្វើការអភិវឌ្ឍន៍ពាណិជ្ជកម្ម។", //172      5.4 在不透露单个用户隐私资料的前提下，亚洲福彩有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。
    "ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ីបានបង្កើតគោលការណ៍ឯកជនភាពដែលណែនាំបង្ហាញពីរបៀបដោះស្រាយជាមួយបញ្ហាផលិតផល បញ្ហាសិទ្ធិឯកជនរបស់អ្នកប្រើប្រាស់ និងព័ត៌មានអំពីអ្នកប្រើប្រាស់ ចំនួនបួនដូចខាងក្រោម​ :", //173      5.5 亚洲福彩制定了以下四项隐私权保护原则，指导我们如何来处理产品中涉及到用户隐私权和用户信息等方面的问题:
    "ប្រើប្រាស់ព័ត៌ដែលពួកយើងប្រមូលបានជាប្រយោជន៍ក្នុងការផ្គត់ផ្គង់ផលិតផលនិងសេវាកម្មដែលមានតម្លៃជូនអ្នកប្រើប្រាស់របស់យើង។", //174      5.5.1 利用我们收集的信息为用户提供有价值的产品和服务。
    "បង្កើតផលិតផលដែលស្របតាមស្តង់ដារឯកជនភាព និងការអនុវត្តន៍សិទ្ធិឯកជន។ ", //175      5.5.2 开发符合隐私权标准和隐私权惯例的产品。
    "ធ្វើព័ត៌មានផ្ទាល់ខ្លួនដែលប្រមូលបានឲ្យមានតម្លាភាព​និងត្រូវបានត្រួតពិនិត្យពីភាគីទីបីដែលមានអាជ្ញាធ័រ។", //176      5.5.3 将个人信息的收集透明化，并由权威第三方监督。
    "ខិតខំប្រឹងប្រែងថែរក្សាការពារព័ត៌មានដែលពួកយើងក្តោបក្តាប់បាន។", //177      5.5.4 尽最大的努力保护我们掌握的信息。
    "បញ្ជាក់", //178      6. 免责声明
    "ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ីសូមមិនធានាថាសេវាកម្មទាំងអស់អាចតម្រូវចិត្តអ្នកប្រើប្រាស់ ក៏មិនធានាថាសេវាកម្មអ៊ីនធឺណិតមិនមានការដាច់ ព្រមទាំងមិនធានាពីភាពទាន់សម័យ សុវត្ថិភាពនិងភាពត្រឹមត្រូវនៃសេវាកម្មបណ្តាញ។", //179      6.1 亚洲福彩不担保网络服务一定能满足用户的要求，也不担保网络服务不会中断，对网络服务的及时性、安全性、准确性也都不作担保。
    "ក្រុមហ៊ុនមិនធានាចំពោះភាពត្រឹមត្រូវ និងភាពពេញលេញនៃតំណខាងក្រៅ (External link) ដែលបានផ្តល់ជូនអ្នកប្រើប្រាស់នោះទេ។ដូចគ្នានេះដែរ ចំពោះតំណខាងក្រៅមិនមែនជារបស់ក្រុមហ៊ុន ក្រុមហ៊ុនសូមមិនទទួលខុសត្រូវឡើយ។", //180      6.2 亚洲福彩不保证为向用户提供便利而设置的外部链接的真实性、准确性和完整性，同时，对于该等外部链接指向的不由亚洲福彩实际控制的任何网页上的内容，亚洲福彩不承担任何责任。
    "ក្រុមហ៊ុនមិនទទួលខុសត្រូវចំពោះការខាតបង់របស់អ្នកប្រើប្រាស់ឬភាគីណាមួយដែលបណ្តាលមកពីបញ្ហាបច្ចេកទេសនៃប្រព័ន្ធគមនាគមន៍ កំហុសបណ្តាញអ៊ិនធឺណិត បញ្ហាឬមេរោគកុំព្យូទ័រ ការខូតខាតឫបាត់បង់ពត៌មាន បញ្ហាប្រព័ន្ធកុំព្យូទ័រឬករណីណាមួយដែលមិនអាចមើលឃើញមុន។  ប៉ុន្តែទោះបីជាយ៉ាងណាក៏ដោយ ក្រុមហ៊ុននឹងព្យាយាមឲ្យអស់ពីសមត្ថភាពដើម្បីកាត់បន្ថយខាតបង់និងផលប៉ះពាល់លើអ្នកប្រើប្រាស់ឬភាគីណាមួយ។", //181  6.3 对于因电信系统或互联网网络故障、计算机故障或病毒、信息损坏或丢失、计算机系统问题或其它任何不可抗力原因而产生损失，亚洲福彩不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。
    "ឆ្នោតសំណាងអាស៊ីសូមមិនធានាថាព័ត៌មាន ខ្លឹមសារ ផលិតផលទាំងអស់ (រួមបញ្ចូលទាំងកម្មវិធី Software) សេវាកម្មនិងសារអេឡិចត្រូនិកដែលបានផ្ញើរទៅអ្នកប្រើប្រាស់ មិនមានមេរោគឬសមាសភាពដែលបង្កគ្រោះថ្នាក់ឡើយ។", //182    6.4 亚洲福彩不担保亚洲福彩产品所包含或以其他方式通过亚洲福彩产品提供给用户的全部信息、内容、产品（包括软件）、服务和从亚洲福彩网站发出的电子信息、信件没有病毒或其他有害成分。
    "ចំពោះករណីដែលមិនមានចែងជាលាយលក្ខណ៍អក្សរ ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ីមិនទទួលខុសត្រូវចំពោះដំណើរការឬប្រតិបត្តិការអាជីវកម្មណាមួយឡើយដូចជាព័ត៌មានផលិតផល ខ្លឹមសារផលិតផល ផលិតផល (App) ព្រមទាំងសេវាកម្មគ្រប់រូបភាព។", //183  6.5 除非另有明确书面说明，亚洲福彩不对亚洲福彩产品的运营及其包含在亚洲福彩产品上的信息、内容、产品（包括软件）、服务作任何形式的、明示或默示的担保。
    "ច្បាប់សម្រាប់អនុវត្ត និង​ការដោះស្រាយជម្លោះ", //184  7. 法律适用及争议解决
    "ការបង្កើត ប្រសិទ្ធិភាព ការអនុវត្តន៍ ការបកស្រាយ និងការដោះស្រាយនៃកិច្ចព្រមព្រៀងមួយច្បាប់នេះត្រូវបានអនុវត្តតាមច្បាប់របស់ប្រទេស។", //185  7.1 本协议的成立、生效、履行、解释及纠纷解决，适用当地法律。
    "ក្នុងករណីមានជម្លោះណាមួយដែលពាក់ព័ន្ធនឹងកិច្ចព្រមព្រៀងនេះបានកើតឡើង  ភាគីទាំងអស់ត្រូវដោះស្រាយជម្លោះតាមសន្តិវិធី។ ប្រសិនបើការចរចារនៅតែមិនបានសម្រេច នោះភាគីណាមួយនៃភាគីទាំងពីរ អាចដាក់ពាក្យទៅសមត្ថកិច្ចពាក់ព័ន្ធក្នុងតំបន់ដើម្បីធ្វើការដោះស្រាយទំនាស់ ហើយការដោះស្រាយទំនាស់នោះនឹងផ្អែកលើច្បាប់នៅក្នុងកំឡុងពេលដោះស្រាយជម្លោះនោះ។ អ្នកកាត់ក្តីមានសមត្ថកិច្ចគឺជាអ្នកធ្វើសេចក្តីសម្រេចចុងក្រោយ និងបញ្ចប់សំនុំរឿង។", //186  7.2 因本协议引起的或与本协议有关的任何争议，各方应友好协商解决；协商不成的，任何一方均可将有关纠纷或争议提交至当地仲裁委员会并按照其届时有效的仲裁规则仲裁；仲裁裁决是终局的，对各方均有约束力。
    "លក្ខខណ្ឌប្រើប្រាស់សម្រាប់អ្នកមិនទាន់គ្រប់អាយុ", //187  8. 未成年人使用条款
    "ប្រសិនបើអ្នកមានអាយុក្រោម18ឆ្នាំ អ្នកគួរតែលេងនិង / ឬប្រើប្រាស់សេវាកម្មរបស់ក្រុមហ៊ុនក្រោមការឯកភាពនិងការណែនាំពីអាណាព្យាបាល។ ហើយអ្នកត្រូវស្ថិតនៅក្រោមលក្ខណ្ឌមួយដែលអាណាព្យាបាលរបស់អ្នកបានអាននិងទទួលយកលក្ខខណ្ឌក្នុងកិច្ចព្រមព្រៀងនេះ។ ប្រសិនបើអ្នកជាអាណាព្យាបាលរបស់អ្នកប្រើប្រាស់ដែលមិនទាន់គ្រប់អាយុ អ្នកគប្បីយល់ព្រមអនុញ្ញាតិឲ្យអ្នកប្រើប្រាស់ដែលមិនទាន់គ្រប់អាយុប្រើប្រាស់សេវាកម្មនិងគោរពតាមកិច្ចសន្យាជាមុនសិន។ប្រសិនបើអ្នកប្រើប្រាស់មិនទាន់គ្រប់អាយុ18ឆ្នាំនិងមិនទាន់មានលទ្ធិភាពគ្រប់គ្រាន់បំរើការសង្គម អ្នកគួរតែទទួលបាននូវការអនុញ្ញាតិនិងការណែនាំពីអាណាព្យាបាលក្នុងការបញ្ចូលនិងផ្ទេរទឹកប្រាក់។ រាល់ការបញ្ចូលនិងផ្ទេរទឹកប្រាក់គឺជាការទទួលខុសត្រូវរបស់អាណាព្យាបាលរបស់អ្នក។", //188  8.1若用户未满18周岁，您应在监护人同意和指导下访问和/或使用亚洲福彩的网络服务，并且您的监护人允许您使用亚洲福彩的网络服务且同意本协议的各项条款。如果您是未成年人的监护人，即表示您同意约束未成年人遵守这些条款使用亚洲福彩的网络服务。特别地，如用户未满18周岁或不具备完全民事行为能力，您应在监护人的同意和指导下使用亚洲福彩的充值和转账服务，您使用充值和转账服务而产生的一切后果，由您及您的监护人承担。
    "អ្នកប្រើប្រាស់ដែលមិនទាន់គ្រប់អាយុគប្បីមានអាណាព្យាបាលរៀបចំពេញវេលាឲ្យបានសាកសមក្នុងប្រើប្រាស់សេវាកម្ម ជៀសវាងការធ្វើអោយញៀន បង្កផលប៉ះពាល់ដល់ការសិក្សា។", //189  8.2 未成年应在监护人的指导下合理安排时间使用亚洲福彩的网络服务，注意避免沉迷于网络，影响正常的学习生活。
    "លក្ខខណ្ឌផ្សេងៗ", //190  9. 其他条款
    "ខ្លឹមសារនៃកិច្ចព្រមព្រៀងនេះ បានរួមបញ្ចូលកិច្ចព្រមព្រៀងពាក់ព័ន្ធច្បាប់ផ្សេងៗ សេចក្តីថ្លែងការណ៍ គោលនយោបាយ និងខ្លឹមសារផ្សេងៗទៀតដែលចេញផ្សាយជាបន្តបន្ទាប់ដោយក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ី។ នៅពេលខ្លឹមសារខាងលើត្រូវបានចេញផ្សាយជាផ្លូវការ វានឹងក្លាយជាផ្នែកសំខាន់មួយនៃកិច្ចព្រមព្រៀងនេះ ហើយមានប្រសិទ្ធិភាពស្របច្បាប់ដូចគ្នានឹងកិច្ចព្រមព្រៀងនេះដែរ។", //191  9.1 本协议内容同时包括亚洲福彩不时发布的其他相关协议、规则、声明、政策等内容。上述内容一经正式发布，即成为本协议不可分割的组成部分，与本协议具有同等的法律效力。
    "ប្រសិនបើមានប្រកាណាមួយក្នុងកិច្ចព្រមព្រៀងនេះត្រូវបានលុបចោលដោយមូលហេតុថាប្រការនោះមិនស្របនឹងច្បាប់រដ្ឋធម្មនុញ្ញ ឬមិនអាចអនុវត្តបាន នោះប្រកានោះត្រូវបានចាត់ទុកថាបានលុបចោល។ ប៉ុន្តែបទបញ្ញត្តិផ្សេងទៀតក្នុងកិច្ចព្រមព្រៀងនេះដែលនៅសេសសល់ នឹងនៅតែមានសុពលភាពនិងជាប់ជាកិច្ចសន្យាដូចមុន។", //192  9.2 如果本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，或违反任何适用的法律，则该条款被视为删除，但本协议的其余条款仍应有效并且有约束力。
    "ដើម្បីសម្របខ្លួនតាមច្បាប់រដ្ឋធម្មនុញ្ញនិងលក្ខណ្ឌនៃការប្រតិបត្តិការដំណើរការក្រុមហ៊ុន ឆ្នោតសំណាងអាស៊ីមានសិទ្ធិកែប្រែផ្លាស់ប្តូរបទបញ្ជានិងច្បាប់ដែលពាក់ព័ន្ធ គ្រប់ពេលវេលា​ដោយមិនចាំបាច់ធ្វើការជូនដំណឹងដាច់ដោយឡែកទៅកាន់អ្នកប្រើប្រាស់។ កិច្ចព្រមព្រៀងដែលបានកែសម្រួលនឹងផ្សព្វផ្សាយនៅលើគេហទំព័រឆ្នោតសំណាងអាស៊ី (www.lotteryasian.com) ហើយអ្ន​កប្រើប្រាស់អាចចូលមើលលក្ខខណ្ឌកិច្ចព្រមព្រៀង និងសេវាកម្មថ្មីចុងក្រោយ តាមរយៈវេបសាយនេះគ្រប់ពេល។ ក្នុងករណីមានវិវាទបានកើតឡើង ពួកយើងកំណត់យកកំណែទម្រង់ចុងក្រោយនៃកិច្ចព្រមព្រៀងជាផ្លូវការ។ ប្រសិនបើអ្នកប្រាស់មិនយល់ស្របជាមួយនឹងការផ្លាស់ប្តូរលក្ខខណ្ឌក្នុងកិច្ចព្រមព្រៀង អ្នកប្រើប្រាស់មានសិទ្ធិឈប់ប្រើ។ ប្រសិនបើអ្នកប្រើប្រាស់នៅតែបន្តប្រើប្រាស់សេវាកម្មរបស់ក្រុមហ៊ុន នោះត្រូវបានចាត់ទុកថាអ្នកប្រើប្រាស់បានទទួលយកការផ្លាស់ប្តូរដែលធ្វើឡើងដោយក្រុមហ៊ុនឆ្នោតសំណាង អាស៊ីតាមបទប្បញ្ញត្តិពាក់ព័ន្ធនៃកិច្ចព្រមព្រៀងនេះ។", //193  9.3 亚洲福彩有权随时根据有关法律、法规的变化以及公司经营状况和经营策略的调整等修改本协议，而无需另行单独通知用户。修改后的协议会在亚洲福彩网站（www.lotteryasian.com）上公布。用户可随时通过亚洲福彩网站浏览最新服务协议条款。当发生有关争议时，以最新的协议文本为准。如果不同意亚洲福彩对本协议相关条款所做的修改，用户有权停止使用网络服务。如果用户继续使用网络服务，则视为用户接受亚洲福彩对本协议相关条款所做的修改。
    "នៅក្នុងច្បាប់នៃកិច្ចព្រមព្រៀងនេះ ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ីមានសិទ្ធិធ្វើការបកស្រាយនិងធ្វើការកែប្រែ។", //194  9.4 亚洲福彩在法律允许的范围对本协议拥有解释权与修改权。
    "ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ី​ខូអិលធីឌី", //195  亚洲福利彩票有限公司
    "ពួកយើងផ្តល់ជូននូវឧបករណ៍ម៉ាស៊ីនភ្នាល់ល្បែងដែលបង្កភាពងាយស្រួលនិងទំនើប។ ភ្នាក់ងារគ្រាន់តែចំណាយប្រាក់តិចតួចដាក់តំកល់នឹងទទួលបានម៉ាស៊ីនភ្នាល់ដែលនាំមុខគេនិងសុវត្ថិភាពនេះយកទៅប្រើប្រាស់ ដើម្បីបង្កើនប្រសិទ្ធភាពនិងបរិមាណនៃការលក់។", //196  为代理商提供便捷、先进的彩票投注机设备，代理商只需缴纳少许押金就可以使用国际领先且安全的彩票投注机，从而快速提高销售效率和销量。
    "កម្មវិធីប្រាក់រង្វាន់", //197  加奖活动
    "ពួកយើងនឹងរៀបចំ កម្មវិធីចែករង្វាន់និងន្ថែមជូនផ្សេងៗ សកម្មភាពស្តីពីវប្បធម៌និងសាធារណៈដើម្បីផ្តល់នូវសាច់ប្រាក់ដ៏ធំនិងរង្វាន់ដ៍ច្រើនសម្រាប់ភ្នាក់ងារលក់ស្នាដៃឯកប្រចាំខែ។", //198  不定期的组织各类促销加奖活动，公益文化活动，为月销售成绩卓著的代理商提供丰厚的现金奖励和实物奖励。
    "ប្រាក់ commission ម្ចាស់ហាង", //199  彩票店业主佣金
    "ឯកតានៃការលក់ះដុល្លារអាមេរិក", //200  销售单位：美元
    "Commission ", //201  佣金比例
    "ផ្តល់ឧបករណ៍ម៉ាស៊ីនភ្នាល់", //202  提供投注机设备
    "បរិមាណការលក់ប្រចាំខែនៃឆ្នោតកោសរហ័ស", //203  即开彩月销量
    "បរិមាណលក់ប្រចាំខែនៃឆ្នោតឌីជីថល", //204  数字彩月销量
    "ជាង", //205  以上(放在数字前面，如：ជាង 20000)
    "ភាគលាភភ្នាក់ងារ", //206  代理分红
    "ចំនួនលក់សរុប", //207  总销量
    "សមាមាត្រភាគលាភភ្នាក់ងារ", //208  代理分红比例
    "ចំណាំ: ភាគលាភរបស់ភ្នាក់ងារត្រូវបានគណនាយោងទៅតាមបរិមាណលក់ប្រចាំខែសរុបនៃស្ថានីយភ្នាល់ដែលបានបង្កើតឡើងដោយភ្នាក់ងារនោះ។ ភ្នាក់ងារអាចបើកហាងលក់ឆ្នោតផ្ទាល់ខ្លួន ដើម្បីចូលរួមក្នុងការលក់និងទទួលបានប្រាក់ commission លក់", //209  注：代理的分红按照该代理发展的所有投注站月销量的累计总额进行统计。代理可以自己开设彩票店参与销售获得销售佣金
    "ខែបច្ចុប្បន្ន", //210   当月
    "អ្នកលេងឆ្នោតទាំងអស់", //211  所有彩民
    "ចំនួនទឹកប្រាក់ឈ្នះ", //212  中奖额
    "ចំណាំ: អ្នកគ្រប់គ្រងប្រចាំតំបន់ (ផ្នែកលក់និងអ្នកឯកទេស) ទទួលបានការបន្ថែមជូន1%នៃរង្វាន់សរុបនៃស្ថានីយភ្នាល់ទាំងអស់ដែលបង្កើតឡើងដោយបុគ្គលិកនោះនៅក្នុងខែនោះ។ ", //213  注：大区经理（销售、专管员）的奖金为该员工发展的所有投注站本月销售后累计中奖奖金的1%
    "លក្ខណ្ឌនៃការជ្រើសរើស", //214  招募要求
    "1.ឆានែលស្ថានីយឆ្នោត: មានដៃគូជាមួយស្ថានីយភ្នាល់ច្រើននៅក្នុងប្រទេសកម្ពុជា 2.​ឆានែលបណ្តាញសង្គម: មានដៃគូជាមួយហាងនៅក្នុងឧស្សាហកម្មពាក់ព័ន្ធមួយឬច្រើននៅក្នុងប្រទេសកម្ពុជាដូចជាផ្សារទំនើប ការិយាល័យប្រៃសណីយ៍ ធនាគារឯកជន ភោជនីយដ្ឋានជាសាខា ហាងសៀវភៅ។ល។ 3.ឆានែលអ៊ិនធឺណិត: មានបណ្តាញអ៊ិនធឺណិតដ៏សម្បូរបែបដូចជាប្រព័ន្ធផ្សព្វផ្សាយសង្គម ឧបករណ៍ផ្ញើសារ IM tools សម្ព័ន្ធផ្សាយពាណិជ្ជកម្ម vertical portals វេទិកាជំនួញ អ្នកប្រតិបត្តិការសារអេឡិចត្រូនិចជាដើម។", //215  1、彩票站渠道：在柬埔寨拥有大量彩票投注站资源的合作伙伴；2、社会网点渠道：在柬埔寨拥有1项或多项垂直行业领域的店铺资源的合作伙伴，如超市、邮局、钱庄、连锁餐厅、书店、报刊亭等；3、互联网渠道：拥有丰富的互联网推广渠道，如社交媒体、IM工具、广告联盟、垂直门户、商业论坛、邮件短信运营商等…
    "ការរំពឹងទុកនៃប្រាក់ចំណេញ", //216  盈利前景
    "នៅពេលដែលអ្នកមានឆានែលលក់ឬស្ថានីយ៍លក់ច្រើនជាធនធានរបស់អ្នក អ្នកនឹងមានទស្សនវិស័យអភិវឌ្ឍន៍យ៉ាងទូលំទូលាយនៅក្នុងវេទិកាឆ្នោត AWL ហើយអ្នកក៏នឹងទទួលបានពិន្ទុនៃការលក់កាន់តែខ្ពស់ជាងប្រព័ន្ធផ្សេងទៀតផងដែរ។ ដោយការអភិវឌ្ឍទ្រង់ទ្រាយនៃមុខជំនួញ អ្នកលក់ក្រៅប្រព័ន្ធ(offline​ Sales) បានកាន់តែច្រើន មេគុណនៃការគុណពិន្ទុលក់កាន់តែកើនឡើង។", //217  只要您拥有丰富的销售渠道或彩票销售站点资源，您将在AWL彩票平台拥有更加广阔的发展前景，同时您也将享受到比其它平台更高的销售返点，随着时间积累和业务规模发展，您拥有越多的下线销售，您的销售返利将呈几何倍数增长
    "ធ្វើដូចម្តេចដើម្បីក្លាយជាភ្នាក់ងាររបស់យើង", //218   如何成为我们的代理商
    "អ្នកអាចជ្រើសរើសវិធីមួយក្នុងចំនោមវិធីពីរដើម្បីក្លាយជាភ្នាក់ងារឆ្នោត AWL យ៉ាងឆាប់រហ័ស។ ", //219  通过两种方式即能迅速成为AWL的彩票产品代理商，您可选择任意一种
    "ស្កេនកូដ QR ", //220  扫描二维码
    "ទាក់ទងបុគ្គលិកក្នុងតំបន់របស់យើងនិងចុះឈ្មោះតាមរយៈការជួបផ្ទាល់ដោយគ្រាន់តែស្កេនកូដ QR", //221  联系我们的地区工作人员，通过面对面扫描二维码进行注册
    "បើកតំណ", //222  打开分享链接
    "ចុះឈ្មោះតាម App ឬតំណអញ្ជើញដែលចែករំលែកដោយបុគ្គលិករបស់យើង", //223  通过工作人员的邀请链接在网站或app进行注册
    "បំពេញព័ត៌មានហើយដាក់ស្នើសំណុំបែបបទខាងក្រោម។ បុគ្គលិករបស់យើងនឹងទាក់ទងអ្នកក្នុងកំឡុងពេល3ថ្ងៃធ្វើការ។", //224  填写并提交下方表格，我们的工作人员将在3个工作日内与您取得联系。
    "ប្រភេទនៃការបើកហាង", //225  开店的类型
    "ហាងគោលសំខាន់", //226  旗舰店
    "ហាងឆ្នោត", //227  彩票门店
    "អាសយដ្ឋាននិងឈ្មោះរបស់ហាងត្រូវបើកឬនឹងត្រូវបើក", //228  已开或即将开的店铺地址和名称
    "ក្នុងនាមជាអ្នកផលិតនិងលក់ឆ្នោតអន្ដរជាតិឈានមុខគេមួយ ក្រុមហ៊ុនឆ្នោតសំណាងអាស៊ីបច្ចុប្បន្ននេះកំពុងរួមបញ្ចូលបច្ចេកទេសផលិតកម្មឆ្នោតក្នុងស្រុកនិងក្រៅស្រុក និងគំនិតអាជីវកម្មថ្មីដែលសម្របខ្លួនទៅនឹងលក្ខណៈពិសេសនៃជនជាតិខ្មែរនិងតាមតម្រូវការទីផ្សារ។ តាមរយៈនេះ យើងបានបង្កើតសំបុត្រឆ្នោតកោសរហ័ស (កោសសប្បាយៗ) ដែលមានលក្ខណៈប្រកួតប្រជែងនិងអស្ចារ្យ ភាគរយឈ្នះរង្វាន់ខ្ពស់។ លើសពីនេះទៅទៀត ពួកយើងក៏បានដំណើរការទីផ្សារឆ្នោតដែលមានរង្វាន់ធំ ពិសេស​ផ្សេងទៀត រួមមានឆ្នោតប្រេកង់ខ្ពស់ និងឆ្នោតឌីជីថលដែលមានឱកាសឈ្នះរហូតដល់500,000ដុល្លារ។ យុទ្ធនាការឆ្នោតពិសេសទាំងនេះបានចេញផ្សាយជាមួយនឹងពាក្យស្លោកដែលកំពុងមានប្រជាប្រិយភាពមួយ ‘អ្វីទៅជាការភ្ញាក់ផ្អើលរំភើប’", //229  亚洲福利彩票作为国际领先的彩票发行商，现整合国内外先进的彩票生产技术和商业理念，以柬埔寨地方特色和市场需求为出发点，先后打造了具有竞争力和鲜明特色的高中奖率即开型（刮刮乐）彩票，并陆续推出辐射全体彩民的高频快开型彩票和最高可中50万美金的乐透数字型彩票。异彩纷呈的彩票游戏玩法和开放活跃的营销活动使亚洲福利彩票“什么是惊喜”的产品发行口号日益深入人心。
    "ការណែនាំអំពីឆ្នោតកោសរហ័ស", //230  即开型彩票介绍
    "1. TUKTUK មកហើយ 2. ទ្រព្យទាំង8ទិស 3. ស្នាមញញឹមនៃខ្មែរ 4. យុគមាស  5.រយលានពរជ័យ, ", //231  1.TUKTUK 来了；2.八方来财；3.高棉的微笑；4.黄金时代；5.10亿祝福
    "ការណែនាំអំពីឆ្នោតប្រេកង់ខ្ពស់", //232  高频型彩票介绍
    "សូមមើល PPT សម្រាប់ព័ត៌មានបន្ថែម ", //233  详见产品介绍PPT
    "សេចក្តីណែនាំអំពីឆ្នោតឡូតូ", //234  乐透型彩票介绍
    "ហាងគោលសំខាន់កំពង់ចាម", //235  磅湛旗舰店
    "ហាងគោលសំខាន់រាជធានីភ្នំពេញ", //236   金边旗舰店
    "លេខ 666 ស្រុកឡៅវ៉េន ខេត្តកំពង់ចាម" //237  磅湛省罗文县市666号

    ];
    //js脚本中的文字及操作提示语
    js_lang = [];
  }
  $.extend($, {
    setEnlanguage: function () {
      if (lang === "cn") return;
      $('*[data-lang]').each(function () {
        if (this.tagName === "INPUT" || this.tagName === "TEXTAREA") {
          this.title && (this.title = langArr[this.getAttribute("data-lang")]);
          this.placeholder && (this.placeholder = langArr[this.getAttribute("data-lang")]);
        } else {
          if (this.title) {
            this.title = langArr[this.getAttribute("data-lang")];
          } else {
            $(this).html(langArr[this.getAttribute("data-lang")]);
          }
        }
      });
    },
    getName: function (num, CnName, isHTML) {
      if (lang === "cn") return CnName;
      if (isHTML === true) return langArr[num];else return js_lang[num];
    },
    getLang: function () {
      return lang;
    }
  });
  $.setEnlanguage();
});