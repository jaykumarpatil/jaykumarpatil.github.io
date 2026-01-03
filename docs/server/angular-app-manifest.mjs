
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-6R6MIBS7.js",
      "chunk-IPZHTX3F.js",
      "chunk-CTJRCTA5.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LS5D4DNU.js",
      "chunk-CTJRCTA5.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QYHP2ZXF.js",
      "chunk-CTJRCTA5.js"
    ],
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VLVD6Z45.js",
      "chunk-CTJRCTA5.js"
    ],
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GRL2RDWW.js",
      "chunk-CTJRCTA5.js"
    ],
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P25HNQII.js",
      "chunk-IPZHTX3F.js",
      "chunk-CTJRCTA5.js"
    ],
    "route": "/articles"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YNCQZHY3.js",
      "chunk-CTJRCTA5.js"
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
    'index.csr.html': {size: 19281, hash: 'a50f45c0e99c681b56fac40f79e67f05884c508474eed1aaf44428a5536c0383', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15223, hash: 'e058fecdb91c254e627cf011c6ba53dd0090b7954f4f0182bd260462cdeed6a6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 97096, hash: 'a1cf8bc8a639f8f4e504fb8adfb7e633a530d815595f88432912728a0a88f420', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'articles/index.html': {size: 86353, hash: '771c7361bbcccd6672f45b0a1011926ee5baa732648e1fab57caa074057f46d1', text: () => import('./assets-chunks/articles_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 83492, hash: '8013394306454edd7c45b270234cf2b3fce4df74cbfdb969aafbf89acb099dbf', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 75293, hash: '3186e80b43d6b6df18067834e6c5de56d61e3e953c056b8f9406b4e6febc0e5e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 80657, hash: 'e691d2f91d7c017ae774cc18c969094409e99a1d34e2c53e43c3c826f8e40149', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 85583, hash: '351a3cbba9f1ffb3ee8e7804c62507ae2462c4a666e3b2566ab3aa83da512d61', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 81749, hash: '5e74bd151675156fa2811bb6baf0c71d7d7806897e864e9070b9c251532973ed', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-CYEXMUX3.css': {size: 12215, hash: 'ShNhZJrhjyg', text: () => import('./assets-chunks/styles-CYEXMUX3_css.mjs').then(m => m.default)}
  },
};
