
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
    'index.csr.html': {size: 19281, hash: '2c69f013165e958ac05e4f2ba10fe2fd8f20c8b59e636ec95f124c8e69ca9b55', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15223, hash: 'e7bde163ebd36b715080ac00275d6f32db9a20a7107f218b561f6e49c5eea324', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 96089, hash: '62f79a8cf87f83f5007cc9d66af7e14ac4848f80d7ef80eaa9e30c9222e446c8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'articles/index.html': {size: 85346, hash: 'fc2f3c7065cb30432590789e8c04dcecdf4cd6206fe91a63bd5aaadf456b71d8', text: () => import('./assets-chunks/articles_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 82485, hash: '257b2368b5ebbd2a8aa54b0471b8c29da62714c85c14329c7f2f2c4a611fc89b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 74286, hash: 'cd2b0d33838e6fa6334fa7e325636760d542de5b999739fbb941735fe1657fa1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 78756, hash: '278743ddd537a742ae0afa14e13f4c4fd441852f893de0ad1ec099c6a102f059', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 83686, hash: '8928c0a9f52fc288684ce711c55020478b72b4ebff8dc48e210ef2dadf4a1ad2', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 80562, hash: '1cac59d88d61c842c12acb79cbca0ed82c4f93078856023404081b870b1474e7', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-CYEXMUX3.css': {size: 12215, hash: 'ShNhZJrhjyg', text: () => import('./assets-chunks/styles-CYEXMUX3_css.mjs').then(m => m.default)}
  },
};
