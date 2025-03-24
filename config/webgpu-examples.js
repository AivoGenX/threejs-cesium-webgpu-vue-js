import { HOST, FILE_HOST } from './host.js';
export default [
    {
        pid: 'base',
        name: '基础功能',
        children: [
            {
                id: 'WebGPUTriangle',
                name: '三角形',
                author: 'giser2017',
                codeUrl: HOST + '/webGPUExamples/WebGPUTriangle.html',
                image: HOST + '/webGPUExamples/WebGPUTriangle.png', 
            },
             
        ]
    },
    
]