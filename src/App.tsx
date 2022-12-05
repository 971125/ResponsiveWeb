import styles from './App.module.scss'
function App() {
  return (
    <div className={styles.App}>
      <div className={styles.coutent1}>
        <div className={styles.nav_title}>
          <div className={styles.nav_title_content}>
            <div className={styles.nav_title_content_logo}>
              <div className={styles.nav_title_content_logo1}></div>
              <div className={styles.nav_title_line}></div>
              <div className={styles.nav_title_content_logo2}></div>
            </div>
            <div className={styles.nav_tab}>
              <ul>
                <li>车型总览</li>
                <li>电气化</li>
                <li>购车工具</li>
                <li>车主服务</li>
                <li>品牌天地</li>
              </ul>
              <div className={styles.more_logo}></div>
            </div>
          </div>
        </div>
        <div className={styles.content_body}>
          <div className={styles.content_body_title}>
            <p className={styles.content_body_title1}>2022 雷克萨斯全球设计大奖</p>
            <p className={styles.content_body_title2}>新闻资讯</p>
          </div>
          <div className={styles.content_body_desc}>
            <p>2022 LEXUS雷克萨斯全球设计大奖</p>
            <p>最高奖得主正式公布 </p>
            <p>Poh Yun Ru创作的 </p>
            <p>“记忆倒带”斩获最高奖殊荣</p>
          </div>
        </div>
      </div>
      <div className={styles.content2}>
        <div className={styles.content2_logodesc}>
          <div className={styles.content2_logo}>

          </div>
          <div className={styles.content2_desc}>
            近日，LEXUS雷克萨斯正式宣布2022全球设计大奖最高奖得主，Poh Yun Ru所创作的“记忆倒带（Rewind）”从57个国家和地区的选手提交的1,726项参赛作品中脱颖而出，摘得2022第十届 LEXUS雷克萨斯全球设计大奖最高奖桂冠。“记忆倒带（Rewind）”旨在通过先进科技，为失智老人等受记忆力障碍困扰的人群提供帮助，帮助他们唤醒记忆，构建更美好的未来。
            <br /><br />
            LEXUS雷克萨斯全球设计大奖最高奖得主Poh Yun Ru表示：“我希望‘记忆倒带（Rewind）’能帮助更多人改善他们的生活，我非常感激LEXUS雷克萨斯全球设计大奖让我离这个目标又近了一步。能够获此殊荣，离不开大家给予的巨大支持，包括我的导师、团队内的工程师、程序员、医疗保健专家以及参与这一项目的广大用户。LEXUS雷克萨斯全球设计大奖让我们有机会将创意过程转化为实际的产品，这非常了不起。能与世界各地充满激情的设计师相聚于此，相互交流学习，令我备受鼓舞。这是一场意义深远、充满启迪的创意之旅，我很高兴能够通过创意与设计和大家一起构建更美好的未来。”
          </div>
        </div>

        <div className={styles.content2_main_logo}>

        </div>
      </div>
      <div className={styles.content3_desc}>
        <p className={styles.content3_desc_detail}>LEXUS雷克萨斯全球设计大奖不同于其他设计赛事，6位决赛入围选手将接受4位蜚声国际的专业导师亲自指导。备受尊敬的精英导师们来自不同行业背景和专业领域，与决赛入围选手进行一对一的沟通交流，选手们将基于导师们的个性化设计指导，充分激发各自的创意潜能，精心打造并持续完善各自的原型设计作品。</p>
        <p className={styles.content3_desc_detail}>LEXUS雷克萨斯全球设计大奖已连续举办九届，共呈现90件独具创意的作品，为139名独立设计师和设计团队提供了展示各自才华和天赋的广阔平台。参赛者均致力于借助设计的力量，构建更美好未来。 </p>
      </div>
      <div className={styles.content_course}>
        <div className={styles.content_course_title}>
          <p className={styles.content_course_title1}>雷克萨斯全球设计大奖赛历程</p>
          <p className={styles.content_course_titledesc}>经过筛选在2021年12月最终确定6名入围者，他们将与指定的导师一起设计原型作品参加大奖赛评选活动，随后宣布大奖赛冠军。完整的计划时间表如下。</p>
        </div>
        <div className={styles.content_timeline}>
          <div className={styles.content_timeline_lineLogo}>
            <div className={styles.content_timeline_logo_content}>
              <div className={styles.content_timeline_circle}></div>
              <div className={styles.content_time_content1}>
                <p>2021年11月</p>
                <p>入围者筛选环节</p>
                <p>评审以线上会议的形式筛选作品</p>
                <p>和选出优秀参赛者。</p>
              </div>
            </div>
            <div className={styles.content_timeline_logo_content}>
              <div className={styles.content_timeline_circle}></div>
              <div className={styles.content_time_content1}>
                <p>2021年12月</p>
                <p>确定入围者</p>
                <p>最终筛选确定6名入围者。</p></div>
            </div>
            <div className={styles.content_timeline_logo_content1}>
              <div className={styles.content_timeline_circle_content}>
                <div className={styles.content_timeline_circle_innercontent}>
                  2022年1月
                </div>
              </div>
              <div className={styles.content_time_content2}>
                <p>导师计划</p>
                <p>6名入围者接受导师指导。</p></div>
            </div>
            <div className={styles.content_timeline_logo_content}>
              <div className={styles.content_timeline_circle}></div>
              <div className={styles.content_time_content1}>
                <p>2022年1月底</p>
                <p>公布入围者名单</p>
                <p>在雷克萨斯设计奖网站、新闻稿和</p>
                <p>社交媒体上公布6名入围者名单</p>。
              </div>
            </div>
            <div className={styles.content_timeline_logo_content}>
              <div className={styles.content_timeline_circle}></div>
              <div className={styles.content_time_content1}>
                <p>2022年1月</p>
                <p>导师计划</p>
                <p>6名入围者接受导师指导。</p></div>
            </div>


          </div>
        </div>
      </div>
      <div className={styles.content4}>
        <div className={styles.content4_desc}>
          <p className={styles.content4_main}>G路径检索服务</p>
          <p className={styles.content4_main_desc}>实时把握路况，避开拥堵路段，寻找最佳路径，减少堵车烦恼，并接通中心话务员，语音设定目的地；点击车载器界面G路径按钮，即可得到最优路径。<br />
            截至2013年5月，此项服务已在北京、上海、广州、深圳、天津、沈阳、南京、成都、重庆、宁波、长沙、苏州、福州、珠海、东莞、长春、武汉、杭州、无锡、厦门、中山、青岛、太原、石家庄、泉州、台州、昆明、佛山28个城市开通。全国其他各大城市也将陆续开通此项服务。</p>
        </div>
        <div className={styles.content4_logo}>

        </div>
      </div>
      <div className={styles.content5}>
        <div className={styles.contents_logodesc}>
          <div className={styles.contents_logo}></div>
          <p className={styles.contents_desc}>预订相关费用将由用户自行承担。目前高尔夫球场预订服务已签约和确定签约的球场多达百余家，此项服务已在北京、上海、江苏、浙江、山东、江西、广东、海南、云南、广西、重庆、四川、河北、河南等多个城市及省份内开通。全国其他各大城市也将陆续开通此项服务。</p>
        </div>
        <div className={styles.contents_maindesc}>
          <p className={styles.contents_maindesc_title}>预订服务</p>
          <p className={styles.contents_maindesc_detail}>预订服务中，除了随时预订酒店、机票、餐厅等服务之外，又增加了高尔夫球场预订服务，精选全国覆盖面广的知名高尔夫球场，全方位为您提供至尊服务。
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
