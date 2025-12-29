
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
    'index.csr.html': {size: 19281, hash: '4bfe698ba0496e2c175eb2f0ed366206384122a7209fddbbbf2987b8900457e0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15223, hash: '76dbe63cb1eb04375a587433f015f90e265d629087fe380fbf048cdb2e08a836', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 95867, hash: 'a245ce5d7e817d38e1594cee43ef3c4fc3e053af41416fb8452242df892582bb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 82263, hash: 'a83d30120821cfcb78831ca3ac7fc18f360af4c79e2f5b75247e9a5c6f90433c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 78534, hash: '379d28102323211df44c563c67d2793e11acc2a24e434e98be8b39bd40fc7614', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 74064, hash: 'd23a17d78bd6fc18d5e0d2ddc2f165d04101af912b4d66e06dc8cc06c8a44b23', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'articles/index.html': {size: 85124, hash: 'bb4a4899fb6ecf2e21cc031c0631cb6778ab9bcb4f4a808e71802e7056f51504', text: () => import('./assets-chunks/articles_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 80351, hash: '4bbb8184375402a64cadf455e2cf30f5ff0ab77d26ce8bf7a7a19075839b52cb', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 83464, hash: 'a0a127aa1b00df4e9ed53867b252130fa666b302b1fd7f07b5b5fdecea3cbfe5', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'styles-CYEXMUX3.css': {size: 12215, hash: 'ShNhZJrhjyg', text: () => import('./assets-chunks/styles-CYEXMUX3_css.mjs').then(m => m.default)}
  },
};
