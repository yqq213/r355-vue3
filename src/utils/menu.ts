import icon1 from '@/assets/images/header/dujiayuanchuang.png'
import icon2 from '@/assets/images/header/zhutituce.png'
import icon3 from '@/assets/images/header/ai_menu.png'
import icon4 from '@/assets/images/header/yitusoutu.png'
import qianxiweilai from '@/assets/images/header/qianxiweilai.png'
import liuxingfenxi from '@/assets/images/header/liuxingfenxi.png'
import shizhuangfabu from '@/assets/images/header/shizhuangfabu.png'
import yuekan from '@/assets/images/header/yuekan.png'
import qushishuji from '@/assets/images/header/qushishuji.png'
import guowaizazhi from '@/assets/images/header/guowaizazhi.png'
import linggansucai from '@/assets/images/header/linggansucai.png'
import yuanchuangsucai from '@/assets/images/header/yuanchuangsucai.png'
import dapaituan from '@/assets/images/header/dapaituan.png'
import zhutituce2 from '@/assets/images/header/zhutituce2.png'
import shejishipinpai from '@/assets/images/header/shejishipinpai.png'
import dinghuohui from '@/assets/images/header/dinghuohui.png'
import danpinheji from '@/assets/images/header/danpinheji.png'
import shangchangpinpai from '@/assets/images/header/shangchangpinpai.png'
import yundongpinpai from '@/assets/images/header/yundongpinpai.png'
import huwaipinpai from '@/assets/images/header/huwaipinpai.png'
import shichangkuanshi from '@/assets/images/header/shichangkuanshi.png'

export default [
  {
    name: '首页',
    link: '/home'
  },
  {
    name: '浅析未来',
    background: 'rgb(0, 31, 62)',
    backgroundTop: 'rgb(174, 239, 207)',
    category_intro: '通过分析当前的时尚趋势、多元文化融合、科技创新和消费者行为等因素，来预测未来流行色彩、元素和风格。',
    children: [
      {
        icon: qianxiweilai,
        name: '浅析未来',
        subMenu: [
          {
            name: '色彩趋势',
            link: ''
          },
          {
            name: '图案趋势',
            link: ''
          },
          {
            name: '面料趋势',
            link: ''
          }
        ]
      }
    ]
  },
  {
    name: '流行分析',
    background: 'rgb(11, 136, 130)',
    backgroundTop: 'rgb(255, 175, 204)',
    category_intro: '对当前时尚趋势的细致观察和研究，了解正在流行，把握消费者的偏好变化，帮助更好的把握市场脉搏。',
    children: [
      {
        icon: liuxingfenxi,
        name: '流行分析',
        subMenu: [
          {
            name: 'T台分析',
            link: ''
          },
          {
            name: '品牌分析',
            link: ''
          },
          {
            name: '零售分析',
            link: ''
          },
          {
            name: '展会分析',
            link: ''
          },
          {
            name: '订货会分析',
            link: ''
          },
        ]
      }
    ]
  },
  {
    name: '品牌图库',
    background: 'rgb(12, 53, 133)',
    backgroundTop: 'rgb(234, 219, 116)',
    category_intro: '网罗全球各个品牌资讯，包括品牌的经典款式、当季款式、联名款、订货会款等，为设计师提供灵感和参考。',
    class: 'brand',
    children: [
      {
        icon: shejishipinpai,
        name: '设计师品牌',
        subMenu: [
          {
            name: 'T恤',
          },
          {
            name: '外套',
          },
          {
            name: '毛衫',
          },
          {
            name: '套装',
          },
          {
            name: '卫衣',
          },
          {
            name: '衬衫',
          },
          {
            name: '男裤',
          },
        ]
      },
      {
        icon: dinghuohui,
        name: '订货会款式',
        subMenu: [
          {
            name: '夹克',
          },
          {
            name: '皮衣',
          },
          {
            name: '卫衣',
          },
          {
            name: '毛衫',
          },
          {
            name: '运动',
          },
          {
            name: '休闲裤',
          },
          {
            name: '配件辅料',
          },
          {
            name: '棉服/羽绒',
          },
          {
            name: '大衣',
          },
          {
            name: 'T恤',
          },
          {
            name: '衬衫',
          },
          {
            name: '正装套装',
          },
          {
            name: '牛仔裤',
          },
          {
            name: '其它',
          },
        ]
      },
      {
        icon: danpinheji,
        name: '单品合辑',
        subMenu: [
          {
            name: '潮流前卫',
          },
          {
            name: '休闲时尚',
          },
          {
            name: '运动户外',
          },
          {
            name: '商务休闲',
          }
        ]
      },
      {
        icon: shangchangpinpai,
        name: '商场品牌',
        subMenu: [
          {
            name: 'T恤',
          },
          {
            name: '外套',
          },
          {
            name: '毛衫',
          },
          {
            name: '套装',
          },
          {
            name: '卫衣',
          },
          {
            name: '衬衫',
          },
          {
            name: '男裤',
          }
        ]
      },
      {
        icon: yundongpinpai,
        name: '运动品牌',
        subMenu: [
          {
            name: 'T恤',
          },
          {
            name: '外套',
          },
          {
            name: '毛衫',
          },
          {
            name: '套装',
          },
          {
            name: '卫衣',
          },
          {
            name: '棉衣/羽绒',
          },
          {
            name: '衬衫',
          },
          {
            name: '男裤',
          }
        ]
      },
      {
        icon: huwaipinpai,
        name: '户外品牌',
        subMenu: [
          {
            name: '衬衫',
          },
          {
            name: '卫衣',
          },
          {
            name: 'T恤',
          },
          {
            name: '滑雪服',
          },
          {
            name: '赛车服',
          },
          {
            name: '棉衣/羽绒',
          },
          {
            name: '户外外套',
          },
          {
            name: '水洗外套',
          },
          {
            name: '皮肤衣',
          },
          {
            name: '户外裤',
          },
        ]
      },
    ]
  },
  {
    name: '市场款式',
    background: 'rgb(0, 0, 55)',
    backgroundTop: 'rgb(255, 119, 15)',
    category_intro: '对全国各地批发市场进行捕捉当季正在流行款式及爆款，让您第一时间掌握市场趋势。',
    class: 'market',
    children: [
      {
        icon: shichangkuanshi,
        name: '市场款式',
        subMenu: [
          {
            name: '夹克'
          },
          {
            name: '棉衣/羽绒'
          },
          {
            name: '马甲'
          },
          {
            name: '单西'
          },
          {
            name: '皮衣'
          },
          {
            name: '中长外套'
          },
          {
            name: 'T恤'
          },
          {
            name: '卫衣'
          },
          {
            name: '衬衫'
          },
          {
            name: '毛衫'
          },
          {
            name: '皮衣'
          },
          {
            name: '套装'
          },
          {
            name: '商务裤'
          },
          {
            name: '休闲裤'
          },
          {
            name: '牛仔裤'
          },
          {
            name: '欧货裤'
          },
          {
            name: '多袋裤'
          },
          {
            name: '外贸男装'
          },
          {
            name: '细节'
          }
        ]
      }
    ]
  },
  {
    name: '时装发布',
    background: 'rgb(26, 80, 126)',
    backgroundTop: 'rgb(219, 90, 108)',
    category_intro: '及时为您提供全球各大时装周最新资讯，祝您更好的了解秀场实况，把握趋势动向。',
    children: [
      {
        icon: shizhuangfabu,
        name: '时装发布',
      }
    ]
  },
  {
    name: '读物探究',
    background: 'rgb(157, 115, 189)',
    backgroundTop: 'rgb(79, 176, 211)',
    category_intro: '通过阅读时尚杂志、设计书籍全面深入了解时尚趋势和行业动态，为设计师提供丰富的灵感来源和素材。',
    children: [
      {
        icon: yuekan,
        name: '月刊',
      },
      {
        icon: qushishuji,
        name: '趋势书籍',
      },
      {
        icon: guowaizazhi,
        name: '国外杂志',
      },
    ]
  },
  {
    name: '流行图案',
    background: 'rgb(2, 84, 157)',
    backgroundTop: 'rgb(238, 164, 127)',
    category_intro: '预测未来趋势方向，链接全球灵感资讯，了解时尚历史演变，掌握最全的艺术家、缪斯、古着单品图库。',
    children: [
      {
        icon: linggansucai,
        name: '灵感素材',
      },
      {
        icon: yuanchuangsucai,
        name: '原创素材',
      },
      {
        icon: dapaituan,
        name: '大牌图案',
      },
    ]
  },
  {
    icon: icon1,
    name: '独家原创',
    background: 'rgb(105, 212, 192)',
    backgroundTop: 'rgb(253, 223, 127)',
    category_intro: '推出R355原创作品，为您提供具有独特性和创新性的设计及解锁未来趋势走向。',
    children: [
      {
        icon: yuekan,
        name: '月刊',
      },
      {
        icon: yuanchuangsucai,
        name: '图案',
      },
      {
        icon: qushishuji,
        name: '趋势',
      },
    ]
  },
  {
    icon: icon2,
    name: '主题图册',
    background: 'rgb(103, 122, 162)',
    backgroundTop: 'rgb(253, 223, 221)',
    category_intro: '多品类，全方位展示特定主题的单品系列集合，旨在传达创意理念和设计理念，为您带来最前沿的单品研发参考。',
    children: [
      {
        icon: zhutituce2,
        name: '主题图册',
        subMenu: [
          {
            name: '风格',
            link: ''
          },
          {
            name: '图案',
            link: ''
          },
          {
            name: '工艺',
            link: ''
          },
          {
            name: '单品',
            link: ''
          },
          {
            name: '细节',
            link: ''
          },
        ]
      }
    ]
  },
  {
    icon: icon3,
    background: 'rgb(50, 60, 123)',
    backgroundTop: 'rgb(53, 128, 133)',
    children: [
      {
        icon: linggansucai,
        name: '绘享智图Ai',
        desc: '“无论图片还是文字，交给[绘享智图]AI，瞬间生成你心中所想之图，解锁无限创意，以图生图、以文生图就是这么神奇！”'
      },
      {
        icon: yuanchuangsucai,
        name: '线稿成款Ai',
        desc: '线稿一键成款，轻松跨越从线稿到成品款式的距离，创作从未如此迅速又简单。'
      },
      {
        icon: dapaituan,
        name: '智展衣模Ai',
        desc: '不用模特拍摄也能打造逼真上身效果，让平铺服装仿佛有了灵魂，穿搭细节尽显，助力您快速营销。'
      },
    ]
  },
  {
    icon: icon4,
    name: '以图搜图',
  },
]