
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-BRMP3PFI.js",
      "chunk-QHXNXAKH.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-76SBXHFF.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3IUJRAGZ.js"
    ],
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LVWWVKXJ.js"
    ],
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5LH5XN67.js"
    ],
    "route": "/projects/performance-optimization"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5LH5XN67.js"
    ],
    "route": "/projects/microservices-transformation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5LH5XN67.js"
    ],
    "route": "/projects/cicd-automation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5LH5XN67.js"
    ],
    "route": "/projects/avid-secure"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5LH5XN67.js"
    ],
    "route": "/projects/cloud-ocular"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5LH5XN67.js"
    ],
    "route": "/projects/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DZ3VUBWE.js"
    ],
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y3Q6WSJC.js",
      "chunk-23NABHUQ.js",
      "chunk-QHXNXAKH.js"
    ],
    "route": "/blog"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UXNX4QAB.js",
      "chunk-23NABHUQ.js",
      "chunk-QHXNXAKH.js"
    ],
    "route": "/blog/spring-boot-memory-optimization"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UXNX4QAB.js",
      "chunk-23NABHUQ.js",
      "chunk-QHXNXAKH.js"
    ],
    "route": "/blog/kafka-spring-boot-data-pipelines"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UXNX4QAB.js",
      "chunk-23NABHUQ.js",
      "chunk-QHXNXAKH.js"
    ],
    "route": "/blog/kubernetes-cicd-best-practices"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UXNX4QAB.js",
      "chunk-23NABHUQ.js",
      "chunk-QHXNXAKH.js"
    ],
    "route": "/blog/observability-prometheus-grafana"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UXNX4QAB.js",
      "chunk-23NABHUQ.js",
      "chunk-QHXNXAKH.js"
    ],
    "route": "/blog/hadoop-ecosystem-deep-dive"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UXNX4QAB.js",
      "chunk-23NABHUQ.js",
      "chunk-QHXNXAKH.js"
    ],
    "route": "/blog/docker-container-security"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UXNX4QAB.js",
      "chunk-23NABHUQ.js",
      "chunk-QHXNXAKH.js"
    ],
    "route": "/blog/microservices-event-driven-architecture"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UXNX4QAB.js",
      "chunk-23NABHUQ.js",
      "chunk-QHXNXAKH.js"
    ],
    "route": "/blog/aws-cost-optimization-strategies"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UXNX4QAB.js",
      "chunk-23NABHUQ.js",
      "chunk-QHXNXAKH.js"
    ],
    "route": "/blog/redis-caching-strategies-spring-boot"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UXNX4QAB.js",
      "chunk-23NABHUQ.js",
      "chunk-QHXNXAKH.js"
    ],
    "route": "/blog/api-design-rest-best-practices"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-UXNX4QAB.js",
      "chunk-23NABHUQ.js",
      "chunk-QHXNXAKH.js"
    ],
    "route": "/blog/*"
  },
  {
    "renderMode": 0,
    "redirectTo": "/blog",
    "route": "/blogs"
  },
  {
    "renderMode": 0,
    "redirectTo": "/blogs/blog/:id",
    "route": "/blogs/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-76JTNP56.js"
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
    'index.csr.html': {size: 19048, hash: '9a9bb2e08209c7d9d687d70bf7f5ae530d94cd252218d8214c71f634e51f9d71', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15262, hash: '8518690904d08015f692b905b23e76e030102141f6341a15d897cc77407d4cc8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 104938, hash: 'b72231a38b2f91a15aa049095fad92e2784e26d53bb85f30b16c9711a148e8df', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 93955, hash: '849cc35182281f33822c225c61aa627d8440c4866640e315762163e05363cb99', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 95157, hash: 'c3c7e9407231776a5b83caf0b4a34e93442709f4f7e94398efa7648d5c869a1e', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'projects/microservices-transformation/index.html': {size: 94225, hash: 'eff8e6599422ee1d274e02451cde47877eff7e7f4af569cfc35ac495e7846ba1', text: () => import('./assets-chunks/projects_microservices-transformation_index_html.mjs').then(m => m.default)},
    'projects/cicd-automation/index.html': {size: 94278, hash: 'bc7b186554d2b32efe853fb2dafcfa8efa01e641fddb8788dadb5ef078d764c3', text: () => import('./assets-chunks/projects_cicd-automation_index_html.mjs').then(m => m.default)},
    'blog/observability-prometheus-grafana/index.html': {size: 94589, hash: '400712c4fc6bd23d25b786fbbfaae48db23ff3ebcbb4f93a149ab94bbc978a4b', text: () => import('./assets-chunks/blog_observability-prometheus-grafana_index_html.mjs').then(m => m.default)},
    'blog/kafka-spring-boot-data-pipelines/index.html': {size: 94553, hash: '76559ad9321df9261e2696fe5edc21224ab4b75c656ed6d563e513349e0915b3', text: () => import('./assets-chunks/blog_kafka-spring-boot-data-pipelines_index_html.mjs').then(m => m.default)},
    'blog/api-design-rest-best-practices/index.html': {size: 94466, hash: 'bcd7b8bee4e0e9c227c428445994d228f374f3369ce4bf4e6470385c003dc163', text: () => import('./assets-chunks/blog_api-design-rest-best-practices_index_html.mjs').then(m => m.default)},
    'blog/docker-container-security/index.html': {size: 94474, hash: 'f5719e760cce1dbc3bf78171a9c2a115375f93bd0f059b0038911ebba36d1eb2', text: () => import('./assets-chunks/blog_docker-container-security_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 84153, hash: '5c29ccff24cdcb1c9460649542f436f58cfd2bb2b717857ff93b489f9139e116', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'blog/aws-cost-optimization-strategies/index.html': {size: 94538, hash: 'ee11f4253dce930cd7196f06548fdb176f7b381896615f5413edf2d70a64bdd6', text: () => import('./assets-chunks/blog_aws-cost-optimization-strategies_index_html.mjs').then(m => m.default)},
    'blog/spring-boot-memory-optimization/index.html': {size: 94707, hash: '820e47eb8e9ffcb4912e4e5b08e3f26e706a67310b3b52b4153887d5a22316d2', text: () => import('./assets-chunks/blog_spring-boot-memory-optimization_index_html.mjs').then(m => m.default)},
    'projects/performance-optimization/index.html': {size: 94392, hash: '10b4eaf5731cd263fdd5a364da36f1e7f2ef0eedc721f5e9b1856f1342a7dffc', text: () => import('./assets-chunks/projects_performance-optimization_index_html.mjs').then(m => m.default)},
    'blog/hadoop-ecosystem-deep-dive/index.html': {size: 94511, hash: '4951aec6353cda91e23566d715a71a4be5582eb523fd3d284ddaaf861e77cfa0', text: () => import('./assets-chunks/blog_hadoop-ecosystem-deep-dive_index_html.mjs').then(m => m.default)},
    'projects/cloud-ocular/index.html': {size: 88793, hash: '7ee82db39b477e68c619534f3b2c85703c25c5cfe2f935439943f9ff34d55f55', text: () => import('./assets-chunks/projects_cloud-ocular_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 84132, hash: '4c0673eab41ad639d0aa246559621de9065c680e8cc24480fec2e191c50471e2', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'blog/microservices-event-driven-architecture/index.html': {size: 94504, hash: 'a5d60e7af2732cdf4fe4f745b181edd8d5b6a3b6f7ab1a232c49d268040a99dd', text: () => import('./assets-chunks/blog_microservices-event-driven-architecture_index_html.mjs').then(m => m.default)},
    'blog/redis-caching-strategies-spring-boot/index.html': {size: 94521, hash: 'e85f610200e2644ee047760b76c436c22d738751fcf0efb23b1b4b39cbb5ceb2', text: () => import('./assets-chunks/blog_redis-caching-strategies-spring-boot_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 86205, hash: '74150b141d5842bf21e2cb474c622129ca7a8e61c26be78aeae5c25656f0f926', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/avid-secure/index.html': {size: 89275, hash: 'ca09d9cddbb4848bd9ad792222aebc147bd5b2eabe6c91e637f42881c6af3c46', text: () => import('./assets-chunks/projects_avid-secure_index_html.mjs').then(m => m.default)},
    'blog/kubernetes-cicd-best-practices/index.html': {size: 94529, hash: 'c72e562dbdcbdba845d9b09087fd28511609c6320caa217209fcbc90be32168a', text: () => import('./assets-chunks/blog_kubernetes-cicd-best-practices_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 76164, hash: '728511f03766e915aaa22677b76e79551d675370932b4bb9b31743fd9ce85c64', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-ATL7JVLT.css': {size: 17943, hash: 'h0XHThGwq+k', text: () => import('./assets-chunks/styles-ATL7JVLT_css.mjs').then(m => m.default)}
  },
};
