import { HOST, FILE_HOST } from './host.js';
export default [
    {
        pid: 'base',
        name: '基础功能',
        children: [
            {
                id: 'defaultLayer',
                name: '三角形',
                author: 'giser2017',
                codeUrl: HOST + '/webglExamples/base/Triangle.html',
                image: HOST + '/webglExamples/base/Triangle.png', 
            },
            
        ]
    },
    
]