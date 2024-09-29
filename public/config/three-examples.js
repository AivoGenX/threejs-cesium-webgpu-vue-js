import { HOST, FILE_HOST } from "./host.js";
export default [
  {
    pid: "3dearth",
    name: "三维地球",
    children: [
      {
        id: '3dEarth',
        name: '3D地球',
        author: 'RainManGO',
        openUrl: 'https://aivogenx.github.io/3d-earth/demos/',
        githubUrl: 'https://github.com/RainManGO/3d-earth',
        image: FILE_HOST + 'images/3dEarth.png'
      },
      {
        id: '3dEarth2',
        name: '虚幻地球',
        author: 'GhostCatcg',
        openUrl: 'https://aivogenx.github.io/threeExamples/3dEarth2/',
        githubUrl: 'https://github.com/GhostCatcg/3d-earth',
        image: '/public/threeExamples/openSource/3dEarth2.jpg'
      },

      {
        id: 'pointsEarth',
        name: '粒子地球',
        author: 'giser2017',
        codeUrl: HOST + '/threeExamples/earth/pointsEarth.html',
        image: HOST + '/threeExamples/earth/pointsEarth.png',
        meta: {
          title: '粒子地球',
          keywords: 'three.js,粒子地球',
          description: '使用three.粒子地球'
        }
      },

      {
        id: '3dGeoMap',
        name: '3D地图',
        author: 'xiaogua-bushigua',
        githubUrl: 'https://github.com/xiaogua-bushigua/3d-geoMap',
        openUrl: 'https://aivogenx.github.io/threeExamples/3dGeoMap',
        image: FILE_HOST + 'images/3dGeoMap.jpg'
      },
      {
        id: "map3d",
        name: "3D地图",
        author: "z2586300277",
        codeUrl: "/public/threeExamples/expand/map3d.html",
        image: "/public/threeExamples/expand/map3d.jpg",
        meta: {
          title: "3D地图",
          keywords: "three.js,3D地图",
          description: "使用three.js制作3D地图",
        },
      },
      {
        id: 'flyLine',
        name: '飞线效果',
        author: 'ecojust',
        codeUrl: HOST + '/threeExamples/line/flyLine.html',
        image: FILE_HOST + 'threeExamples/application/flyLine/colorful.gif',
      },
    ],
  },
  {
    pid: "smartCity",
    name: "智慧城市",
    children: [
      {
        id: 'smartCity',
        name: '智慧城市特效',
        author: '193Eric',
        openUrl: ' https://aivogenx.github.io/threeExamples/smartCity/demo/',
        githubUrl: 'https://github.com/193Eric/threejs-demo',
        downloadUrl: 'https://aivogenx.github.io/threeExamples/smartCity/smartCity.zip',
        image: '/public/threeExamples/openSource/smartCity.jpg'
      },
      {
        id: 'cityLine',
        name: '城市线条',
        author: 'superzay',
        codeUrl: HOST + '/threeExamples/shader/cityLine.html',
        image: HOST + '/threeExamples/shader/cityLine.jpg',
        meta: {
          title: '城市线条',
          keywords: 'three.js,城市线条',
          description: '使用three.js城市线条'
        }
      },
      {
        id: 'codeCloud',
        name: '代码云',
        author: 'yiiiiiiqianyao',
        codeUrl: HOST + '/threeExamples/application/codeCloud.html',
        image: HOST + '/threeExamples/application/codeCloud.jpg',
        meta: {
          title: '代码云',
          keywords: 'three.js,代码云',
          description: '使用three.js代码云'
        }
      },
      {
        id: 'spriteText',
        name: '精灵文字',
        author: 'z2586300277',
        codeUrl: HOST + '/threeExamples/application/spriteText.html',
        image: HOST + '/threeExamples/application/spriteText.jpg',
        meta: {
          title: '精灵文字',
          keywords: 'three.js,精灵文字',
          description: '使用three.js精灵文字'
        }
      },
      {
        id: 'heatmap3D',
        name: '3D热力图',
        author: 'treasureMoment',
        codeUrl: HOST + '/threeExamples/expand/heatmap3D.html',
        image: HOST + '/threeExamples/expand/heatmap3D.jpg',
        meta: {
          title: '3D热力图',
          keywords: 'three.js,3D热力图',
          description: '使用three.js制作3D热力图'
        }
      },
      {
        id: 'magicCircle',
        name: '魔法阵',
        author: 'gitee18247670551',
        codeUrl: HOST + '/threeExamples/application/magicCircle.html',
        image: HOST + '/threeExamples/application/magicCircle.jpg',
        meta: {
          title: '魔法阵',
          keywords: 'three.js,魔法阵',
          description: '使用three.js魔法阵'
        }
      },
    ]
  },
  {
    pid: "advancedExamples",
    name: "高级案例",
    children: [
      {
        id: "taohuating",
        name: "桃花亭",
        author: "huan_meng_hai_yan",
        openUrl: "https://z2586300277.github.io/show-site/TaoHuaTing",
        downloadUrl:
          "https://z2586300277.github.io/show-site/TaoHuaTing/TaoHuaTing.zip",
        image: "/public/threeExamples/openSource/taohuating.jpg",
      },
      {
        id: "ziTengHua",
        name: "紫藤花",
        author: "huan_meng_hai_yan",
        openUrl: "https://g2657.github.io/examples-server/ziTenghua/",
        downloadUrl:
          "https://g2657.github.io/examples-server/ziTenghua/ziTenghua.zip",
        image: "/public/threeExamples/openSource/ziTengHua.jpg",
      },
      {
        id: "coffeeMug",
        name: "咖啡",
        author: "kavalcio",
        codeUrl: "/public/threeExamples/application/coffeeMug.html",
        image: "/public/threeExamples/application/coffeeMug.png",
        meta: {
          title: "咖啡",
          keywords: "three.js,咖啡",
          description: "咖啡",
        },
      },
      {
        id: "smokeAir",
        name: "烟雾效果",
        author: "yjsdszz",
        codeUrl: HOST + "/threeExamples/application/smokeAir.html",
        image: FILE_HOST + "/threeExamples/application/smokeAir.jpg",
      },
      {
        id: "happyNewYear",
        name: "新年快乐",
        author: "yjsdszz",
        codeUrl: HOST + "/threeExamples/application/happyNewYear.html",
        image: HOST + "/threeExamples/application/happyNewYear.jpg",
      },
      {
        id: "kallkago_su7",
        name: "su7 demo",
        author: "KallkaGo",
        openUrl: "https://z2586300277.github.io/show-site/su7_demo/",
        githubUrl: "https://github.com/KallkaGo/su7-demo",
        image: "/public/threeExamples/openSource/kallkago_su7.jpg",
      },
    ],
  },
  {
    pid: "shader",
    name: "着色器",
    children: [
      {
        id: 'dissolveAnimate',
        name: '溶解动画',
        author: 'yiiiiiiqianyao',
        codeUrl: HOST + '/threeExamples/shader/dissolveAnimate.html',
        image: HOST + '/threeExamples/shader/dissolveAnimate.jpg',
        meta: {
          title: '溶解动画',
          keywords: 'three.js,溶解动画',
          description: '使用three.js溶解动画'
        }
      },
      {
        id: 'waveShader',
        name: '图像波动',
        author: 'gitee18247670551',
        codeUrl: HOST + '/threeExamples/shader/waveShader.html',
        image: HOST + '/threeExamples/shader/waveShader.jpg',
        meta: {
          title: '图像波动',
          keywords: 'three.js,图像波动',
          description: '使用three.js图像波动'
        }
      },
      {
        id: 'reliefImage',
        name: '浮雕图像',
        author: 'hafly',
        codeUrl: HOST + '/threeExamples/shader/reliefImage.html',
        image: HOST + '/threeExamples/shader/reliefImage.jpg',
      },
      {
        id: 'rasterGrid',
        name: '栅格网格',
        author: 'yjsdszz',
        codeUrl: HOST + '/threeExamples/shader/rasterGrid.html',
        image: HOST + '/threeExamples/shader/rasterGrid.jpg',
        meta: {
          title: '栅格网格',
          keywords: 'three.js,栅格网格',
          description: '使用three.js栅格网格'
        }
      },
      {
        id: 'raningSea',
        name: '波涛海浪',
        author: 'z2586300277',
        codeUrl: HOST + '/threeExamples/shader/raningSea.html',
        image: HOST + '/threeExamples/shader/raningSea.jpg',
      },
      {
        id: 'ringsShader',
        name: '环彩虹着色器',
        author: 'stonerao',
        codeUrl: HOST + '/threeExamples/shader/ringsShader.html',
        image: HOST + '/threeExamples/shader/ringsShader.jpg',
      },
      {
        id: 'shaderSky',
        name: '着色器天空',
        author: 'z2586300277',
        codeUrl: HOST + '/threeExamples/shader/shaderSky.html',
        image: HOST + '/threeExamples/shader/shaderSky.jpg',
        meta: {
          title: '着色器天空',
          keywords: 'three.js,着色器天空',
          description: '使用three.js着色器天空'
        }
      },
      {
        id: 'grassShader',
        name: '草地着色器',
        author: 'Siricee',
        codeUrl: '/public/threeExamples/shader/grassShader.html',
        image: '/public/threeExamples/shader/grassShader.jpg',
        meta: {
          title: '草地着色器',
          keywords: 'three.js,草地着色器',
          description: '使用three.js草地着色器'
        }
      },
      {
        id: "modelBlendShader",
        name: "模型混合着色器",
        author: "z2586300277",
        codeUrl: "/public/threeExamples/shader/modelBlendShader.html",
        image: "/public/threeExamples/shader/modelBlendShader.jpg",
        meta: {
          title: "模型混合着色器",
          keywords: "three.js,模型混合着色器",
          description: "使用three.js模型混合着色器",
        },
      },
      {
        pid: "fenceShader",
        name: "围栏着色器",
        author: "flowers-10",
        codeUrl: "/public/threeSymbol/shader/fenceShader.html",
        image: "/public/threeSymbol/shader/fenceShader.jpg",
        meta: {
          title: "围栏着色器",
          keywords: "three.js,围栏着色器",
          description: "使用three.js围栏着色器",
        },
      },
      {
        id: "fenceWall",
        name: "围墙着色器",
        author: "yjsdszz",
        codeUrl: HOST + "/threeExamples/shader/fenceWall.html",
        image: HOST + "/threeExamples/shader/fenceWall.jpg",
        meta: {
          title: "围墙着色器",
          keywords: "three.js,围墙着色器",
          description: "使用three.js围墙着色器",
        },
      },

      {
        id: "videoShader",
        name: "视频着色器",
        author: "z2586300277",
        codeUrl: "/public/threeExamples/shader/videoShader.html",
        image: "/public/threeExamples/shader/videoShader.jpg",
        meta: {
          title: "视频着色器",
          keywords: "three.js,视频着色器",
          description: "使用three.js视频着色器",
        },
      },
      {
        id: "steamWaveSun",
        name: "蒸汽波太阳",
        author: "xzw199509",
        codeUrl: "/public/threeExamples/shader/steamWaveSun.html",
        image: "/public/threeExamples/shader/steamWaveSun.jpg",
        meta: {
          title: "蒸汽波太阳",
          keywords: "three.js,蒸汽波太阳",
          description: "使用three.js蒸汽波太阳",
        },
      },
      {
        id: "cobwebBox",
        name: "蛛网箱子",
        author: "xzw199509",
        codeUrl: "/public/threeExamples/shader/cobwebBox.html",
        image: "/public/threeExamples/shader/cobwebBox.jpg",
        meta: {
          title: "蛛网箱子",
          keywords: "three.js,蛛网箱子",
          description: "使用three.js蛛网箱子",
        },
      },
      {
        id: "audioSolutions",
        name: "音乐可视化",
        author: "flowers-10",
        codeUrl: "/public/threeExamples/shader/audioSolutions.html",
        image: "/public/threeExamples/shader/audioSolutions.png",
        meta: {
          title: "音乐可视化",
          keywords: "three.js,音乐可视化",
          description: "使用three.js音乐可视化",
        },
      },
      {
        id: "dissolve",
        name: "溶解",
        author: "KallkaGo",
        codeUrl: "/public/threeExamples/shader/dissolve.html",
        image: "/public/threeExamples/shader/dissolve.png",
        meta: {
          title: "溶解",
          keywords: "three.js,溶解",
          description: "溶解特效",
        },
      },
      {
        id: "changeShaderToy",
        name: "切换ShaderToy",
        author: "z2586300277",
        codeUrl: "/public/threeExamples/shader/changeShaderToy.html",
        image: "/public/threeExamples/shader/changeShaderToy.jpg",
        meta: {
          title: "切换ShaderToy",
          keywords: "three.js,切换ShaderToy",
          description: "切换ShaderToy",
        },
      },
      {
        id: "imageShake",
        name: "图片抖动",
        author: "z2586300277",
        codeUrl: "/public/threeExamples/shader/imageShake.html",
        image: "/public/threeExamples/shader/imageShake.jpg",
      },

      {
        id: "warnInfo",
        name: "警告信息",
        author: "yjsdszz",
        codeUrl: HOST + "/threeExamples/shader/warnInfo.html",
        image: HOST + "/threeExamples/shader/warnInfo.jpg",
      },
      {
        id: 'halfCircle',
        name: '半圆',
        author: 'yiiiiiiqianyao',
        codeUrl: HOST + '/threeExamples/shader/halfCircle.html',
        image: HOST + '/threeExamples/shader/halfCircle.jpg',
        meta: {
          title: '半圆',
          keywords: 'three.js,半圆',
          description: '使用three.js半圆'
        }
      },
      {
        id: 'vortexShader',
        name: '扭曲',
        author: 'hafly',
        codeUrl: HOST + '/threeExamples/shader/vortexShader.html',
        image: HOST + '/threeExamples/shader/vortexShader.jpg'
      },
      {
        id: 'heatmapShader',
        name: '热力图',
        author: 'z2586300277',
        codeUrl: HOST + '/threeExamples/shader/heatmapShader.html',
        image: HOST + '/threeExamples/shader/heatmapShader.jpg',
      },
      {
        id: "shaderBlock",
        name: "方块着色器",
        author: "z2586300277",
        codeUrl: HOST + "/threeExamples/shader/shaderBlock.html",
        image: HOST + "/threeExamples/shader/shaderBlock.jpg",
        meta: {
          title: "方块着色器",
          keywords: "three.js,方块着色器",
          description: "使用three方块着色器"
        }
      },
      {
        id: 'whiteCloud',
        name: '白云',
        author: 'yjsdszz',
        codeUrl: HOST + '/threeExamples/shader/whiteCloud.html',
        image: HOST + '/threeExamples/shader/whiteCloud.jpg',
        meta: {
          title: '白云',
          keywords: 'three.js,白云',
          description: '使用three.js白云'
        }
      },
      {
        id: 'darkClouds',
        name: '乌云',
        author: 'stonerao',
        codeUrl: HOST + '/threeExamples/shader/darkClouds.html',
        image: HOST + '/threeExamples/shader/darkClouds.jpg',
        meta: {
          title: '乌云',
          keywords: 'three.js,乌云',
          description: '使用three.js乌云'
        }
      }
    ],
  },
  {
    pid: "water",
    name: "水效果",
    children: [
      {
        pid: "giser2017",
        name: "波浪效果",
        author: "giser2017",
        codeUrl: "/public/threeSymbol/water/waterA.html",
        image: "/public/threeSymbol/water/waterA.png",
        meta: {
          title: "水效果",
          keywords: "three.js,水效果",
          description: "使用three水效果",
        },
      },
    ],
  },
  {
    pid: "ShiningGlowing",
    name: "闪耀发光",
    children: [
      {
        id: "fireball",
        name: "火球效果",
        author: "giser2017",
        codeUrl: "/public/threeExamples/ShiningGlowing/fireball.html",
        image: "/public/threeExamples/ShiningGlowing/fireball.png",
      },
    ],
  },
  {
    pid: "PrimitiveBody",
    name: "体图元",
    children: [
      {
        id: "3DCircle",
        name: "扩散半球",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/3DCircle.html",
        image: "/public/threeTutorial/basic/3DCircle.png",
      },
      {
        id: 'wallShader',
        name: '扩散圆墙',
        author: 'z2586300277',
        codeUrl: HOST + '/threeExamples/shader/wallShader.html',
        image: HOST + '/threeExamples/shader/wallShader.jpg',
        meta: {
          title: '扩散圆墙',
          keywords: 'three.js,扩散圆墙',
          description: '使用three.js扩散圆墙'
        }
      },
      {
        id: 'radarShader',
        name: '雷达着色器',
        author: 'stonerao',
        codeUrl: HOST + '/threeExamples/shader/radarShader.html',
        image: HOST + '/threeExamples/shader/radarShader.jpg',
        meta: {
          title: '雷达着色器',
          keywords: 'three.js,雷达着色器',
          description: '使用three.雷达着色器'
        }
      },
      {
        id: 'ringShader',
        name: '环形着色器',
        author: 'stonerao',
        codeUrl: HOST + '/threeExamples/shader/ringShader.html',
        image: HOST + '/threeExamples/shader/ringShader.jpg',
        meta: {
          title: '环形着色器',
          keywords: 'three.js,环形着色器',
          description: '使用three.js环形着色器'
        }
      },
      {
        id: 'pipeFlow',
        name: '管道流动',
        author: 'gitee18247670551',
        codeUrl: HOST + '/threeExamples/application/pipeFlow.html',
        image: HOST + '/threeExamples/application/pipeFlow.jpg',
        meta: {
          title: '管道流动',
          keywords: 'three.js,管道流动',
          description: '使用three.js管道流动'
        }
      },
    ],
  },
  {
    pid: "line",
    name: "线图元",
    children: [

      {
        id: "flowLight",
        name: "流光",
        author: "yjsdszz",
        codeUrl: HOST + "/threeExamples/shader/flowLight.html",
        image: HOST + "/threeExamples/shader/flowLight.jpg",
        meta: {
          title: "流光",
          keywords: "three.js,流光",
          description: "使用three.js流光",
        },
      },
      {
        id: 'diffuseLine',
        name: '发散飞线',
        author: 'stonerao',
        codeUrl: HOST + '/threeExamples/application/diffuseLine.html',
        image: HOST + '/threeExamples/application/diffuseLine.jpg',
        meta: {
            title: '发散飞线',
            keywords: 'three.js,发散飞线',
            description: '使用three.js发散飞线'
        }
    },
    ],
  },
  {
    pid: "application",
    name: "应用场景",
    children: [
      {
        id: "topology",
        name: "简单3d拓扑图",
        author: "z2586300277",
        codeUrl: "/public/threeExamples/application/topology.html",
        image: "/public/threeExamples/application/topology.jpg",
        meta: {
          title: "3d拓扑图",
          keywords: "three.js,3d拓扑图",
          description: "使用three.js制作3d拓扑图",
        },
      },
      {
        id: "model_navigation",
        name: "模型导航",
        author: "nico",
        codeUrl: "/public/threeExamples/application/nav_mesh/nav.html",
        image: "/public/threeExamples/application/nav_mesh/nav.jpg",
        meta: {
          title: "模型导航",
          keywords: "three.js,模型导航",
          description: "模型导航",
        },
      },
      {
        id: "textSphere",
        name: "球体文字",
        author: "z2586300277",
        codeUrl: "/public/threeExamples/application/textSphere.html",
        image: "/public/threeExamples/application/textSphere.jpg",
        meta: {
          title: "球体文字",
          keywords: "three.js,球体文字",
          description: "使用three球体文字",
        },
      },

      {
        id: "flowerRain",
        name: "花瓣雨",
        author: "QuarkGluonPlasma",
        codeUrl: "/public/threeExamples/application/flowerRain.html",
        image: "/public/threeExamples/application/flowerRain.jpg",
      },
      {
        id: "houseScene",
        name: "第一人称房屋",
        author: "QuarkGluonPlasma",
        codeUrl: "/public/threeExamples/application/houseScene.html",
        image: "/public/threeExamples/application/houseScene.jpg",
      },

      {
        id: "windMove",
        name: "风吹动画",
        author: "yjsdszz",
        codeUrl: HOST + "/threeExamples/application/windMove.html",
        image: HOST + "/threeExamples/application/windMove.jpg",
      },
    ],
  },
  {
    pid: "particle",
    name: "粒子",
    children: [
      {
        id: 'galaxyStar',
        name: '星系',
        author: 'kavalcio',
        codeUrl: HOST + '/threeExamples/particle/galaxyStar.html',
        image: HOST + '/threeExamples/particle/galaxyStar.jpg',
        meta: {
          title: '星系',
          keywords: 'three.js,星系',
          description: '使用three.js星系'
        }
      },
      {
        id: 'imageParticle',
        name: '颗粒图像',
        author: 'superzay',
        codeUrl: HOST + '/threeExamples/shader/imageParticle.html',
        image: HOST + '/threeExamples/shader/imageParticle.jpg',
        meta: {
          title: '颗粒图像',
          keywords: 'three.js,颗粒图像',
          description: '使用three.js颗粒图像'
        }
      },
      {
        id: '3dPointsModel',
        name: '3D点云模型',
        author: 'youngdro',
        openUrl: 'https://aivogenx.github.io/threeExamples/3DPoints/',
        githubUrl: 'https://github.com/youngdro/3DPoints',
        image: '/public/threeExamples/openSource/3dPointsModel.jpg',
        downloadUrl: 'https://aivogenx.github.io/threeExamples/3DPoints/3DPoints.zip'
      },
      {
        id: "particleScattered",
        name: "粒子聚散",
        author: "z2586300277",
        codeUrl: "/public/threeExamples/particle/particleScattered.html",
        image: "/public/threeExamples/particle/particleScattered.jpg",
        meta: {
          title: "粒子聚散",
          keywords: "three.js,粒子聚散",
          description: "使用three.js粒子聚散",
        },
      },
      {
        id: "RandomParticle",
        name: "随机粒子效果",
        author: "giser2017",
        codeUrl: "/public/threeExamples/particle/RandomParticle.html",
        image: "/public/threeExamples/particle/RandomParticle.png",
      },
      {
        id: "PlanetParticle",
        name: "粒子效果的行星",
        author: "giser2017",
        codeUrl: "/public/threeExamples/particle/PlanetParticle.html",
        image: "/public/threeExamples/particle/PlanetParticle.png",
      },
      {
        id: "bubble",
        name: "粒子效果的行星",
        author: "huan_meng_hai_yan",
        codeUrl: "/public/threeExamples/particle/bubble.html",
        image: "/public/threeExamples/particle/bubble.png",
      },
      {
        id: "downSnow",
        name: "下雪",
        author: "yjsdszz",
        codeUrl: HOST + "/threeExamples/particle/downSnow.html",
        image: HOST + "/threeExamples/particle/downSnow.jpg",
      },
    ],
  },

  {
    pid: "expand",
    name: "扩展功能",
    children: [
      {
        id: "loadTiles",
        name: "加载3dtiles",
        author: "z2586300277",
        codeUrl: "/public/threeExamples/expand/loadTiles.html",
        image: "/public/threeExamples/expand/loadTiles.jpg",
        meta: {
          title: "three加载3dtiles",
          keywords: "three.js,3dtiles",
          description: "使用three加载3dtiles",
        },
      },

    ],
  },
  {
    pid: "effectComposer",
    name: "后期处理",
    children: [
      {
        id: 'gaussianBlur',
        name: '高斯模糊',
        author: 'hafly',
        codeUrl: HOST + '/threeExamples/shader/gaussianBlur.html',
        image: HOST + '/threeExamples/shader/gaussianBlur.jpg',
        meta: {
          title: '高斯模糊',
          keywords: 'three.js,高斯模糊',
          description: '使用three.js高斯模糊'
        }
      },

      {
        id: "selectBloomPass",
        name: "辉光-postprocessing",
        author: "z2586300277",
        codeUrl: "/public/threeExamples/effectComposer/selectBloomPass.html",
        image: "/public/threeExamples/effectComposer/selectBloomPass.jpg",
        meta: {
          title: "辉光通道",
          keywords: "three.js,辉光通道",
          description: "使用three.js辉光通道",
        },
      },
      {
        id: "customMaskPass",
        name: "自定义遮罩通道",
        author: "z2586300277",
        codeUrl: "/public/threeExamples/effectComposer/customMaskPass.html",
        image: "/public/threeExamples/effectComposer/customMaskPass.jpg",
        meta: {
          title: "自定义遮罩通道",
          keywords: "three.js,自定义遮罩通道",
          description: "使用three.js自定义遮罩通道",
        },
      },
      {
        id: "uvTransformation",
        name: "UV图像变换",
        author: "giser2017",
        codeUrl: "/public/threeExamples/effectComposer/uvTransformation.html",
        image: "/public/threeExamples/effectComposer/uvTransformation.png",
      },
      {
        id: "EdgeBlurringEffect",
        name: "边缘模糊效果",
        author: "giser2017",
        codeUrl: "/public/threeExamples/effectComposer/EdgeBlurringEffect.html",
        image: "/public/threeExamples/effectComposer/EdgeBlurringEffect.png",
      },
    ],
  },

  {
    pid: "basic",
    name: "基础案例",
    children: [
      {
        id: "modelLoad",
        name: "gltf/fbx/obj模型加载",
        author: "z2586300277",
        codeUrl: "/public/threeTutorial/basic/modelLoad.html",
        image: "/public/threeTutorial/basic/modelLoad.jpg",
        meta: {
          title: "模型加载",
          keywords: "three.html,模型加载",
          description: "使用three.html模型加载",
        },
      },
      {
        id: "outlinePass",
        name: "轮廓光",
        author: "z2586300277",
        codeUrl: "/public/threeTutorial/basic/outlinePass.html",
        image: "/public/threeTutorial/basic/outlinePass.jpg",
        meta: {
          title: "轮廓光",
          keywords: "three.html,轮廓光",
          description: "使用three轮廓光",
        },
      },
      {
        id: "gradientTriangle",
        name: "渐变三角形",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/gradientTriangle.html",
        image: "/public/threeTutorial/basic/gradientTriangle.jpg",
        meta: {
          title: "渐变三角形",
          keywords: "three.html,渐变三角形",
          description: "使用three.html渐变三角形",
        },
      },
      {
        id: "skyAndEnv",
        name: "天空盒",
        author: "z2586300277",
        codeUrl: "/public/threeTutorial/basic/skyAndEnv.html",
        image: "/public/threeTutorial/basic/skyAndEnv.jpg",
        meta: {
          title: "天空盒",
          keywords: "three.html,天空盒",
          description: "使用three.html天空盒",
        },
      },
      {
        id: "modelAnimates",
        name: "单/多模型动画",
        author: "z2586300277",
        codeUrl: "/public/threeTutorial/basic/modelAnimates.html",
        image: "/public/threeTutorial/basic/modelAnimates.jpg",
        meta: {
          title: "模型自带动画",
          keywords: "three.html,模型自带动画",
          description: "使用three播放模型自带动画",
        },
      },
      {
        id: "gsapAnimate",
        name: "GSAP动画",
        author: "z2586300277",
        codeUrl: "/public/threeTutorial/basic/gsapAnimate.html",
        image: "/public/threeTutorial/basic/gsapAnimate.jpg",
        meta: {
          title: "GSAP动画",
          keywords: "three.html,GSAP动画",
          description: "使用three.html GSAP动画",
        },
      },
      {
        id: "cssElement",
        name: "CSS元素",
        author: "z2586300277",
        codeUrl: "/public/threeTutorial/basic/cssElement.html",
        image: "/public/threeTutorial/basic/cssElement.jpg",
        meta: {
          title: "CSS元素",
          keywords: "three.html,CSS元素",
          description: "使用three.html CSS元素",
        },
      },
      {
        id: "curveAnimate",
        name: "曲线动画",
        author: "z2586300277",
        codeUrl: "/public/threeTutorial/basic/curveAnimate.html",
        image: "/public/threeTutorial/basic/curveAnimate.jpg",
        meta: {
          title: "曲线动画",
          keywords: "three.html,曲线动画",
          description: "使用three.html曲线动画",
        },
      },
      {
        id: "transformAnimate",
        name: "Mesh变换动画",
        author: "z2586300277",
        codeUrl: "/public/threeTutorial/basic/transformAnimate.html",
        image: "/public/threeTutorial/basic/transformAnimate.jpg",
        meta: {
          title: "变换动画",
          keywords: "three.html,变换动画",
          description: "使用three.html变换动画",
        },
      },
      {
        id: "screenShot",
        name: "截图",
        author: "z2586300277",
        codeUrl: "/public/threeTutorial/basic/screenShot.html",
        image: "/public/threeTutorial/basic/screenShot.jpg",
        meta: {
          title: "截图",
          keywords: "three.html,截图",
          description: "使用three.html截图",
        },
      },
      {
        id: "skeletonBone",
        name: "骨骼动画",
        author: "yjsdszz",
        codeUrl: HOST + "/threeExamples/basic/skeletonBone.html",
        image: FILE_HOST + "/threeExamples/basic/skeletonBone.jpg",
        meta: {
          title: "骨骼动画",
          keywords: "three.js,骨骼动画",
          description: "使用three.js骨骼动画",
        },
      },
    ],
  },
  {
    pid: "introduction",
    name: "入门案例",
    children: [
      {
        id: "入门",
        name: "入门",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/入门.html",
        image: "/public/threeTutorial/basic/入门.png",
        meta: {
          title: "入门",
          keywords: "three.html,入门",
          description: "使用three.html入门",
        },
      },
      {
        id: "辅助线",
        name: "辅助线",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/辅助线.html",
        image: "/public/threeTutorial/basic/辅助线.png",
        meta: {
          title: "辅助线",
          keywords: "three.html,辅助线",
          description: "使用three.html辅助线",
        },
      },
      {
        id: "光线",
        name: "光线",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/光线.html",
        image: "/public/threeTutorial/basic/光线.png",
        meta: {
          title: "光线",
          keywords: "three.html,光线",
          description: "使用three.html光线",
        },
      },
      {
        id: "相机控件",
        name: "相机控件",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/相机控件.html",
        image: "/public/threeTutorial/basic/相机控件.png",
        meta: {
          title: "相机控件",
          keywords: "three.html,相机控件",
          description: "使用three.html相机控件",
        },
      },
      {
        id: "动画",
        name: "动画",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/动画.html",
        image: "/public/threeTutorial/basic/动画.png",
        meta: {
          title: "动画",
          keywords: "three.html,动画",
          description: "使用three.html动画",
        },
      },
      {
        id: "全屏",
        name: "全屏",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/全屏.html",
        image: "/public/threeTutorial/basic/全屏.png",
        meta: {
          title: "全屏",
          keywords: "three.html,全屏",
          description: "使用three.html全屏",
        },
      },
      {
        id: "帧率",
        name: "帧率",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/帧率.html",
        image: "/public/threeTutorial/basic/帧率.png",
        meta: {
          title: "帧率",
          keywords: "three.html,帧率",
          description: "使用three.html帧率",
        },
      },
      {
        id: "阵列模型",
        name: "阵列模型",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/阵列模型.html",
        image: "/public/threeTutorial/basic/阵列模型.png",
      },
      {
        id: "几何体",
        name: "几何体",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/几何体.html",
        image: "/public/threeTutorial/basic/几何体.png",
        meta: {
          title: "几何体",
          keywords: "three.html,几何体",
          description: "使用three.html几何体",
        },
      },
      {
        id: "点线",
        name: "点、线",
        name_en: "点、线",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/点线.html",
        image: "/public/threeTutorial/basic/点、线.png",
        meta: {
          title: "点、线",
          keywords: "three.html,点线",
          description: "使用three.html点、线",
        },
      },
      {
        id: "网格",
        name: "网格",
        name_en: "网格",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/网格.html",
        image: "/public/threeTutorial/basic/网格.png",
        meta: {
          title: "网格",
          keywords: "three.html,网格",
          description: "使用three.html网格",
        },
      },
      {
        id: "索引",
        name: "索引",
        name_en: "索引",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/索引.html",
        image: "/public/threeTutorial/basic/索引.png",
        meta: {
          title: "索引",
          keywords: "three.html,索引",
          description: "使用three.html索引",
        },
      },
      {
        id: "旋转缩放平移几何体",
        name: "旋转、缩放、平移几何体",
        name_en: "旋转、缩放、平移几何体",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/旋转、缩放、平移几何体.html",
        image: "/public/threeTutorial/basic/旋转、缩放、平移几何体.png",
        meta: {
          title: "旋转、缩放、平移几何体",
          keywords: "three.html,旋转缩放平移几何体",
          description: "使用three.html旋转、缩放、平移几何体",
        },
      },
      {
        id: "自带几何体顶点",
        name: "自带几何体顶点",
        name_en: "自带几何体顶点",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/自带几何体顶点.html",
        image: "/public/threeTutorial/basic/自带几何体顶点.png",
        meta: {
          title: "自带几何体顶点",
          keywords: "three.html,自带几何体顶点",
          description: "使用three.html自带几何体顶点",
        },
      },
      {
        id: "顶点颜色",
        name: "顶点颜色",
        name_en: "顶点颜色",
        author: "giser2017",
        codeUrl: "/public/threeTutorial/basic/顶点颜色.html",
        image: "/public/threeTutorial/basic/顶点颜色.png",
        meta: {
          title: "顶点颜色",
          keywords: "three.html,顶点颜色",
          description: "使用three.html顶点颜色",
        },
      },
    ],
  },
  {
    pid: "tools",
    name: "工具",
    children: [
      {
        id: "sketchfab_model",
        name: "sketchfab免费模型",
        author: "z2586300277",
        openUrl: "https://sketchfab.com/",
        image: "/public/threeExamples/tools/sketchfab.png",
      },
      {
        id: "gltf_report",
        name: "gltf在线draco压缩工具",
        author: "z2586300277",
        openUrl: "https://gltf.report/",
        image: "/public/threeExamples/tools/gltf_report.jpg",
      },
      {
        id: "skyBox_image",
        name: "免费hdr全景图资源",
        author: "z2586300277",
        openUrl: "https://polyhaven.com/hdris/skies",
        image: "/public/threeExamples/tools/skyBox_image.jpg",
      },
      {
        id: "skyBox_Make",
        name: "hdr制作天空盒",
        author: "z2586300277",
        openUrl: "https://matheowis.github.io/HDRI-to-CubeMap/",
        image: "/public/threeExamples/tools/skyBox_Make.jpg",
      },
      {
        id: "make_json_font",
        name: "字体转Three使用json字体",
        author: "z2586300277",
        openUrl: "https://gero3.github.io/facetype.html/",
        image: "/public/threeExamples/tools/make_json_font.jpg",
      },
    ],
  },
];
