import {
  ArrowUpRight,
  Award,
  Brush,
  ClipboardCheck,
  Mail,
  PackageCheck,
  Palette,
  Ruler,
  Sparkles,
  Store,
} from 'lucide-react'
import './App.css'

type Project = {
  title: string
  client: string
  category: string
  year: string
  image: string
  palette: string[]
  description: string
  challenge: string
  solution: string
  deliverables: string[]
  material: string
  result: string
}

const projects: Project[] = [
  {
    title: 'Mori Atelier 森系香氛',
    client: 'Mori Atelier',
    category: '香氛包装系统',
    year: '2026',
    image: '/projects/mori-atelier.svg',
    palette: ['#111111', '#faf9f7', '#84e7a5'],
    description: '为独立香氛工作室建立 4 支香型的瓶身标签、硬盒和试香卡体系。',
    challenge: '客户希望从“手作小众”升级为可进入买手店的高级货架形象，但不能丢掉森林、矿物和手工调香的温度。',
    solution: '以黑色硬盒作为安静底座，用浅绿色微光标签标记香调层次；信息层级采用 Apple 式留白，让瓶身和材质成为主角。',
    deliverables: ['香水硬盒', '瓶身标签', '试香卡', '买手店陈列规范'],
    material: '黑卡裱灰板、局部哑银烫印、棉感标签纸',
    result: '首批 1,800 套售罄，买手店复订率提升 42%',
  },
  {
    title: 'Fable Tea 寓言茶铺',
    client: 'Fable Tea',
    category: '茶叶零售包装',
    year: '2025',
    image: '/projects/fable-tea.svg',
    palette: ['#02492a', '#fbbd41', '#fc7981'],
    description: '为新中式茶饮品牌设计罐装、补充袋和礼盒的颜色编码系统。',
    challenge: '原包装在货架上区分度低，口味信息过多，新用户不知道如何选择。',
    solution: '将“茶类、香气、饮用场景”拆成三层视觉编码：大色块识别茶系，小标签讲口味，背标保留冲泡细节。',
    deliverables: ['金属茶罐', '补充袋', '节日礼盒', '货架侧标'],
    material: '磨砂马口铁、食品级哑膜袋、可撕拉封签',
    result: '门店试饮转化率提升 31%，礼盒客单价提升 26%',
  },
  {
    title: 'Orbit Skin 轨道护肤',
    client: 'Orbit Skin Lab',
    category: '护肤品上市套装',
    year: '2025',
    image: '/projects/orbit-skin.svg',
    palette: ['#43089f', '#3bd3fd', '#ffffff'],
    description: '为功效护肤线设计 6 个 SKU 的瓶器标签、外盒和社媒开箱语言。',
    challenge: '品牌科学感强但显得冷，既要表达成分可信度，也要适合年轻用户拍照分享。',
    solution: '用月相轨道作为系列符号，紫色负责记忆点，透明信息卡承载成分证据，让功效表达更轻盈。',
    deliverables: ['瓶器标签', '单品外盒', '上市套盒', '开箱拍摄指南'],
    material: '银白珠光纸、透明 PET 信息卡、局部 UV',
    result: '上线 2 周完成季度备货目标的 68%',
  },
  {
    title: 'Nomad Cacao 游牧可可',
    client: 'Nomad Cacao',
    category: '巧克力产地系列',
    year: '2024',
    image: '/projects/nomad-cacao.svg',
    palette: ['#3a2317', '#f8cc65', '#d36b43'],
    description: '为精品巧克力品牌建立产地故事、可可浓度和礼赠场景三套包装语言。',
    challenge: '产品风味高级，但旧包装像普通零食，无法支撑高端商超与礼品渠道。',
    solution: '用地图切片和批次编号建立产地感，外层纸套保持收藏属性，内层金色封贴强调礼物开启瞬间。',
    deliverables: ['纸套结构', '内衬封贴', '产地插卡', '礼盒组合'],
    material: '未涂布特种纸、压凹地图纹理、可回收内托',
    result: '进入 18 家精品超市，礼盒渠道毛利提升 19%',
  },
  {
    title: 'Lumen Ferment 微光发酵',
    client: 'Lumen Ferment',
    category: '康普茶饮料包装',
    year: '2024',
    image: '/projects/lumen-ferment.svg',
    palette: ['#3bd3fd', '#02492a', '#faf9f7'],
    description: '为低糖康普茶设计瓶标、箱规和冰柜陈列节奏。',
    challenge: '需要在饮料冰柜中被快速识别，同时避免“健康饮品”常见的廉价感。',
    solution: '瓶标采用大面积留白和高饱和侧边色条，远看有系列节奏，近看能读到菌种、甜度和风味。',
    deliverables: ['玻璃瓶标签', '运输箱', '冰柜陈列图', '口味贴纸'],
    material: '防水合成纸、透明底标、双色瓦楞运输箱',
    result: '冰柜拿取率提升 37%，3 个口味完成连锁测试',
  },
  {
    title: 'Tide & Grain 潮汐谷物',
    client: 'Tide & Grain',
    category: '早餐谷物包装',
    year: '2023',
    image: '/projects/tide-grain.svg',
    palette: ['#fc7981', '#fbbd41', '#01418d'],
    description: '为家庭早餐品牌重做盒装谷物和儿童独立小包。',
    challenge: '货架竞争强，家长关注成分，孩子关注趣味，原包装两边都没有打动。',
    solution: '正面用柔和几何浪潮建立亲和力，侧面做营养扫描区，小包用颜色和编号做早晨收集感。',
    deliverables: ['盒装包装', '独立小包', '营养信息系统', '电商首图'],
    material: 'FSC 纸盒、植物基内袋、低迁移油墨',
    result: '电商点击率提升 44%，复购装转化提升 22%',
  },
]

const services = [
  {
    icon: PackageCheck,
    title: '包装系统设计',
    text: '从单品外盒到完整 SKU 家族，建立品牌、品类、口味和渠道都能使用的视觉规则。',
  },
  {
    icon: Palette,
    title: '材质与工艺定义',
    text: '纸张、膜材、烫印、UV、压凹、标签触感和印刷限制，都会被写进可执行规范。',
  },
  {
    icon: Store,
    title: '货架与电商表达',
    text: '同时考虑线下 3 秒识别、电商缩略图、开箱照片和社媒传播的表现。',
  },
]

const process = [
  ['01', '品牌诊断', '拆解定位、价格带、竞品货架和目标人群，确定包装需要解决的商业问题。'],
  ['02', '结构与信息', '梳理正背标、侧标、封签、合规信息和系列扩展逻辑，先让包装可用。'],
  ['03', '视觉提案', '输出 2-3 条方向，包含颜色、字体、材料、版式、陈列和开箱节奏。'],
  ['04', '打样落地', '对接印厂、修正颜色、检查刀模和工艺风险，交付生产文件与规范。'],
]

const stats = [
  ['38+', 'SKU 包装落地'],
  ['12', '虚拟品牌案例'],
  ['6', '核心品类经验'],
  ['4 周', '最快上市节奏'],
]

const recognitions = [
  '亚洲青年包装设计观察 · 入围',
  '可持续材料创新提案 · 金奖',
  '新消费品牌包装趋势报告 · 受访设计师',
]

function App() {
  return (
    <main>
      <nav className="topbar" aria-label="主导航">
        <a className="brand-mark" href="#top" aria-label="回到顶部">
          <span>LY</span>
        </a>
        <div className="nav-links">
          <a href="#work">案例</a>
          <a href="#process">流程</a>
          <a href="#studio">能力</a>
          <a href="#contact">联系</a>
        </div>
        <a className="nav-action" href="mailto:hello@liuying.design">
          <Mail size={16} />
          <span>发起项目</span>
        </a>
      </nav>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">品牌包装设计师作品集</p>
          <h1>让包装在货架上安静发光，也让人愿意带回家。</h1>
          <p className="hero-lede">
            专注香氛、美妆、食品饮料和生活方式品牌的包装系统设计。用 Apple 式清晰层级承载商业信息，
            用 Clay 式暖纸感和手作细节保留品牌温度。
          </p>
          <div className="hero-actions" aria-label="首屏操作">
            <a className="button button-dark" href="#work">
              查看虚拟案例
              <ArrowUpRight size={17} />
            </a>
            <a className="button button-light" href="#process">
              了解设计流程
              <Brush size={17} />
            </a>
          </div>
          <div className="stats-strip" aria-label="项目数据">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-stage" aria-label="精选包装视觉">
          <div className="pack pack-a">
            <span>mori</span>
            <small>No. 04 Cedar Mist</small>
          </div>
          <div className="pack pack-b">
            <span>fable</span>
            <small>jasmine tea</small>
          </div>
          <div className="pack pack-c">
            <span>orbit</span>
            <small>daily veil</small>
          </div>
          <div className="stage-note">
            <Sparkles size={16} />
            <span>从品牌策略到印厂交付</span>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="服务关键词">
        <span>刀模结构</span>
        <span>烫印打样</span>
        <span>系列化 SKU</span>
        <span>礼盒开箱</span>
        <span>印刷落地</span>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">虚拟商业案例</p>
          <h2>从香氛到早餐谷物，完整展示包装如何解决问题。</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={`${project.title} 包装视觉`} />
              <div className="project-body">
                <div>
                  <p className="project-meta">
                    {project.category} · {project.year}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <dl className="project-details">
                  <div>
                    <dt>设计任务</dt>
                    <dd>{project.challenge}</dd>
                  </div>
                  <div>
                    <dt>解决方案</dt>
                    <dd>{project.solution}</dd>
                  </div>
                  <div>
                    <dt>材料工艺</dt>
                    <dd>{project.material}</dd>
                  </div>
                </dl>
                <div className="deliverables">
                  {project.deliverables.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-footer">
                  <div className="swatches" aria-label={`${project.client} 色彩系统`}>
                    {project.palette.map((color) => (
                      <span key={color} style={{ backgroundColor: color }} />
                    ))}
                  </div>
                  <p>{project.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-heading">
          <p className="eyebrow">合作流程</p>
          <h2>不只做一张好看的盒子，而是把它推到生产线前。</h2>
        </div>
        <div className="process-grid">
          {process.map(([step, title, text]) => (
            <article className="process-card" key={step}>
              <span>{step}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-section" id="studio">
        <div className="studio-panel">
          <p className="eyebrow">设计方法</p>
          <h2>足够精确可以生产，足够柔软可以被记住。</h2>
          <p>
            每个项目都从“物”开始：它如何被拿起、如何被拍照、如何在货架上被比较，
            以及标签在光线、运输、触摸和复购中是否依然成立。
          </p>
          <ul className="recognition-list">
            {recognitions.map((item) => (
              <li key={item}>
                <Award size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
          <article className="service-card accent-card">
            <Ruler size={22} />
            <h3>交付清单</h3>
            <p>品牌包装规范、印刷文件、刀模标注、材料建议、陈列图、电商首图和供应商沟通备注。</p>
          </article>
        </div>
      </section>

      <section className="brief-section" aria-label="项目启动信息">
        <div className="brief-card">
          <ClipboardCheck size={24} />
          <h2>适合一起启动的项目</h2>
          <p>
            新品牌上市、旧包装升级、系列 SKU 扩展、礼盒企划、买手店陈列、电商视觉重做。
          </p>
        </div>
        <div className="brief-list">
          <span>建议准备：产品样品</span>
          <span>品牌定位或竞品</span>
          <span>目标价格带</span>
          <span>预计上市时间</span>
          <span>印刷或供应链限制</span>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">接受 2026 Q2 新项目咨询</p>
          <h2>带着产品、时间线，或一个还没被说清楚的货架问题来聊。</h2>
        </div>
        <a className="button button-dark contact-button" href="mailto:hello@liuying.design">
          hello@liuying.design
          <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  )
}

export default App
