
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-CEWR6ISA.js",
      "chunk-IPZHTX3F.js",
      "chunk-ZKFOX5P2.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YKJAEMQF.js",
      "chunk-ZKFOX5P2.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XBXN47T4.js",
      "chunk-ZKFOX5P2.js"
    ],
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JZEZ34AC.js",
      "chunk-ZKFOX5P2.js"
    ],
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CN6MFIIF.js",
      "chunk-ZKFOX5P2.js"
    ],
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7JYKDVMN.js",
      "chunk-IPZHTX3F.js",
      "chunk-ZKFOX5P2.js"
    ],
    "route": "/articles"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-F6QC36IR.js",
      "chunk-ZKFOX5P2.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 19092, hash: 'f2810ad1f9371fe176792983bef48651760d5d6efb47d9495e92aead983a6a51', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15032, hash: '1f4815164e462950ef93030fddd43d1bc549b3dcb10e7b0805bb12de00018a3d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 95678, hash: '7d75237475d555207f026c5c9f04e1404accbb0fe03922ab74304ff3af524183', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 78345, hash: 'dbc68ed32d74852985efc6d275201746958cf808321d10cee37f1bf38607be4d', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 73875, hash: '61fcc352202df404c61fac0a66350c0ab3f8de3ad6cb353f29f0f2655d631855', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 82074, hash: 'f43f497d46e115414911d7f82c95b271e06df14e75a924ae3d817b90a188feaa', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'articles/index.html': {size: 84935, hash: '5a67fbd3ce5efdc69c7f190a7804b4d10156dc98f8dccc9b8f0587d3b40c0337', text: () => import('./assets-chunks/articles_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 83295, hash: '4fd00e73c425bfc012f403efde967cec471340ca410300c159907e427b723ee8', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 80147, hash: '67e97910b367733f54ddbc0af95d8cf0420f40b166abc4a01e2995aae9b2442f', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-CYEXMUX3.css': {size: 12215, hash: 'ShNhZJrhjyg', text: () => import('./assets-chunks/styles-CYEXMUX3_css.mjs').then(m => m.default)}
  },
};
