
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-TRYLDQRX.js",
      "chunk-ZAQ2PODM.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6GBPRLLT.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3BHDGJ7X.js"
    ],
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UQVPQK62.js"
    ],
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JLR5MUOD.js"
    ],
    "route": "/projects/performance-optimization"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JLR5MUOD.js"
    ],
    "route": "/projects/microservices-transformation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JLR5MUOD.js"
    ],
    "route": "/projects/cicd-automation"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JLR5MUOD.js"
    ],
    "route": "/projects/avid-secure"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JLR5MUOD.js"
    ],
    "route": "/projects/cloud-ocular"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JLR5MUOD.js"
    ],
    "route": "/projects/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A7WCIUSY.js"
    ],
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-46EI4YRH.js",
      "chunk-23NABHUQ.js",
      "chunk-ZAQ2PODM.js"
    ],
    "route": "/blog"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-33I7WGM5.js",
      "chunk-23NABHUQ.js",
      "chunk-ZAQ2PODM.js"
    ],
    "route": "/blog/spring-boot-memory-optimization"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-33I7WGM5.js",
      "chunk-23NABHUQ.js",
      "chunk-ZAQ2PODM.js"
    ],
    "route": "/blog/kafka-spring-boot-data-pipelines"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-33I7WGM5.js",
      "chunk-23NABHUQ.js",
      "chunk-ZAQ2PODM.js"
    ],
    "route": "/blog/kubernetes-cicd-best-practices"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-33I7WGM5.js",
      "chunk-23NABHUQ.js",
      "chunk-ZAQ2PODM.js"
    ],
    "route": "/blog/observability-prometheus-grafana"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-33I7WGM5.js",
      "chunk-23NABHUQ.js",
      "chunk-ZAQ2PODM.js"
    ],
    "route": "/blog/hadoop-ecosystem-deep-dive"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-33I7WGM5.js",
      "chunk-23NABHUQ.js",
      "chunk-ZAQ2PODM.js"
    ],
    "route": "/blog/docker-container-security"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-33I7WGM5.js",
      "chunk-23NABHUQ.js",
      "chunk-ZAQ2PODM.js"
    ],
    "route": "/blog/microservices-event-driven-architecture"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-33I7WGM5.js",
      "chunk-23NABHUQ.js",
      "chunk-ZAQ2PODM.js"
    ],
    "route": "/blog/aws-cost-optimization-strategies"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-33I7WGM5.js",
      "chunk-23NABHUQ.js",
      "chunk-ZAQ2PODM.js"
    ],
    "route": "/blog/redis-caching-strategies-spring-boot"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-33I7WGM5.js",
      "chunk-23NABHUQ.js",
      "chunk-ZAQ2PODM.js"
    ],
    "route": "/blog/api-design-rest-best-practices"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-33I7WGM5.js",
      "chunk-23NABHUQ.js",
      "chunk-ZAQ2PODM.js"
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
      "chunk-QIWRQ5VR.js"
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
    'index.csr.html': {size: 19060, hash: '746a6940be7989619ad1db23c33cf0e5451c1a1dbefe488a13633d47ccc72821', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15274, hash: '50786d45642d756a19a8a22b70280cee0fcda5d2295bea5edb8da34cc64d6a2c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/microservices-transformation/index.html': {size: 94028, hash: 'c585d8dc91751bd3c9421ba9b460a0e17965220d89273e22abdd182a835de29e', text: () => import('./assets-chunks/projects_microservices-transformation_index_html.mjs').then(m => m.default)},
    'index.html': {size: 104741, hash: '413e1f300b83600c1ee0b2d9270ecec298892a44ccfc795cd54e3d4fa6d9fbee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 93758, hash: 'b778c59057a02c6a84e666156ce1f7e1da8346d1db20de7efd47516c38b73dab', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/cicd-automation/index.html': {size: 94081, hash: '994c57cfc5fb11c6aee53ce00214a935e6ce0ad00b7be9761f7dd24d9080fe68', text: () => import('./assets-chunks/projects_cicd-automation_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 94960, hash: '5f9a66a95083701c684fd87d06ecd1f1e9175f78da69197f597cff4694a66218', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'blog/kafka-spring-boot-data-pipelines/index.html': {size: 94356, hash: '17b783969d4daaaf9e57e0d979132438a52e791e19eaf9e620b0fff92e3aab54', text: () => import('./assets-chunks/blog_kafka-spring-boot-data-pipelines_index_html.mjs').then(m => m.default)},
    'blog/docker-container-security/index.html': {size: 94277, hash: 'c3a0988a1cb15d634e1aad7b8a4a9b46379eec468914dd27367c13a7abb934a2', text: () => import('./assets-chunks/blog_docker-container-security_index_html.mjs').then(m => m.default)},
    'blog/observability-prometheus-grafana/index.html': {size: 94392, hash: '7e6be379b08a2b94f374d4e34fa4b4b77439c73891520e35419a36d1312bad2b', text: () => import('./assets-chunks/blog_observability-prometheus-grafana_index_html.mjs').then(m => m.default)},
    'blog/api-design-rest-best-practices/index.html': {size: 94269, hash: '8a265f8aab19105ee8d2da01819d3c1134ee852e77caa8e6732b15e8c64b3601', text: () => import('./assets-chunks/blog_api-design-rest-best-practices_index_html.mjs').then(m => m.default)},
    'blog/aws-cost-optimization-strategies/index.html': {size: 94341, hash: '947843bebbe4aef301d5cc74db4ea2bc77c31f3328c1cf2408cc14bd6085a02f', text: () => import('./assets-chunks/blog_aws-cost-optimization-strategies_index_html.mjs').then(m => m.default)},
    'projects/cloud-ocular/index.html': {size: 88600, hash: '474b0cc01a78d7c28dde242eeaf1911fe29eeda310aa8b8bb1e02aaa03ff4d06', text: () => import('./assets-chunks/projects_cloud-ocular_index_html.mjs').then(m => m.default)},
    'blog/spring-boot-memory-optimization/index.html': {size: 94510, hash: '7270fd5c3cefeb1e784a27fdc2685662756ad56580505f605f00ff88581cd5f3', text: () => import('./assets-chunks/blog_spring-boot-memory-optimization_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 83956, hash: '8d4dede8db113442cdb0c91fca9c8ffda3e9f61bde51c2895245ad4d8258f1a2', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'projects/performance-optimization/index.html': {size: 94195, hash: 'feee7004bee8709d6c71be8448f4537be5d2c69e3bb6085496e3413537d4dfe5', text: () => import('./assets-chunks/projects_performance-optimization_index_html.mjs').then(m => m.default)},
    'blog/hadoop-ecosystem-deep-dive/index.html': {size: 94314, hash: '1deb8229798d5c8f1d011a944dfeeb0bcbb22a01530d90ccdd1d86c300a088a9', text: () => import('./assets-chunks/blog_hadoop-ecosystem-deep-dive_index_html.mjs').then(m => m.default)},
    'blog/redis-caching-strategies-spring-boot/index.html': {size: 94324, hash: '0d7e1fc37a5e94e6ed75c8031d76dc3615a5595e2fa3b17ae3be34d7042a32cb', text: () => import('./assets-chunks/blog_redis-caching-strategies-spring-boot_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 83935, hash: '41ce3b0ea218134e26fc578bd3f2f580505040142942d523e1d90ba9397e792b', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 86008, hash: '8f685b1c14fdad031933978ecef28fcd3cb398a8778f205fdcb51a92d0084f15', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/avid-secure/index.html': {size: 89074, hash: '09527117d9e9ee9a866ec4062d0bb856a8b65e09b6d6815208d8917bc33ad3af', text: () => import('./assets-chunks/projects_avid-secure_index_html.mjs').then(m => m.default)},
    'blog/microservices-event-driven-architecture/index.html': {size: 94307, hash: 'b9cc0888879322c0e6a2bda050b7619ffa39ad1f2e5d4615e95c7bb73f562d38', text: () => import('./assets-chunks/blog_microservices-event-driven-architecture_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 75969, hash: '77d58b6345575c39bb159613782307b7fcfc6f3946a36def81de9c9b2e80fde4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'blog/kubernetes-cicd-best-practices/index.html': {size: 94332, hash: '576442d5248300fb1f97c423af7121a187a4c7e876e7b04b1c5c51230872c3d9', text: () => import('./assets-chunks/blog_kubernetes-cicd-best-practices_index_html.mjs').then(m => m.default)},
    'styles-ATL7JVLT.css': {size: 17943, hash: 'h0XHThGwq+k', text: () => import('./assets-chunks/styles-ATL7JVLT_css.mjs').then(m => m.default)}
  },
};
