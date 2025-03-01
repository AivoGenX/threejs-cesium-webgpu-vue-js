import cesiumExamples from "./cesium-examples.js";
import threeExamples from "./three-examples.js";
import githubExamples from "./github-examples.js";
// import threeTutorial from "./three-tutorial.js";
// import threeSymbol from "./three-symbol.js";
import threeCesiumAuthors from "./author.js";

import { HOST, FILE_HOST } from "./host.js";
import threeCesiumLinks from "./links.js";
window.THREE_CESIUM_LINKS = threeCesiumLinks;

window.FILE_HOST = FILE_HOST;

window.THREE_CESIUM_NAVIGATION = [
  { name: "Three.js扩展案例", examples: threeExamples },
  // { name: "Three.js教程[r166]", examples: threeTutorial },
  // { name: "Three.js符号库", examples: threeSymbol },
  { name: "Cesium.js案例", examples: cesiumExamples },
  { name: "Github案例", examples: githubExamples},
];

window.THREE_CESIUM_AUTHORS = threeCesiumAuthors;

/* 依赖注入 */
window.GET_SCRIPT = (v, t) => {
  let scriptContent = ``; 
  if (t === "Cesium.js案例") {
    scriptContent = `
    <link rel="stylesheet" href= "${HOST}js/cesium/style.css">
 <script type="importmap">
    {
        "imports": {
            "cesium": "${HOST}js/cesium/Cesium.js",
            "dat.gui":"${HOST}js/dat.gui.module.js"
        }
    }
 <\/script>
      <style>
        body {
          margin: 0;
          padding: 1px;
          box-sizing: border-box;
          background-color: #1f1f1f;
          overflow: hidden;
        }
        #box {
          width: 100%;
          height: 100%;
        }
      </style>
      <div id="box"></div>
      <script type="module"> 
        ${v}
      </script>`;
  } else {
    scriptContent = `
      <link rel="stylesheet" type="text/css" href="${HOST}css/threelab.css" /> 
      ${v}`;
  }

  return scriptContent;
};
