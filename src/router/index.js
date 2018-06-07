import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/html/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bb/',
      name: 'bb',
      component: Main,
      children: [
          {
            path: 'rules',
            component: resolve => {
                require(['@/html/bb-rules.vue'], resolve);
            }
          },
          {
            path: 'previous',
            component: resolve => {
                require(['@/html/bb-previous.vue'], resolve);
            }
          },
          {
            path: 'news',
            component: resolve => {
                require(['@/html/bb-news.vue'], resolve);
            }
          },
          {
            path: 'notice',
            component: resolve => {
                require(['@/html/bb-notice.vue'], resolve);
            }
          },
          {
            path: 'notice-detail',
            component: resolve => {
                require(['@/html/bb-notice-detail.vue'], resolve);
            }
          },
          {
            path: 'video',
            component: resolve => {
                require(['@/html/bb-video.vue'], resolve);
            }
          },
          {
            path: 'video-detail',
            component: resolve => {
                require(['@/html/bb-video-detail.vue'], resolve);
            }
          },
          {
            path: 'dynamics',
            component: resolve => {
                require(['@/html/bb-dynamics.vue'], resolve);
            }
          },
          {
            path: 'dynamics-detail',
            component: resolve => {
                require(['@/html/bb-dynamics-detail.vue'], resolve);
            }
          },
          {
              path: '/',
              redirect: 'news'
          }
      ]
    },
    {
      path: '/sb/',
      name: 'sb',
      component: Main,
      children: [
          {
            path: 'rules',
            component: resolve => {
                require(['@/html/sb-rules.vue'], resolve);
            }
          },
          {
            path: 'previous',
            component: resolve => {
                require(['@/html/sb-previous.vue'], resolve);
            }
          },
          {
            path: 'news',
            component: resolve => {
                require(['@/html/sb-news.vue'], resolve);
            }
          },
          {
            path: 'video',
            component: resolve => {
                require(['@/html/sb-video.vue'], resolve);
            }
          },
        //   {
        //     path: 'video-detail',
        //     component: resolve => {
        //         require(['@/html/sb-video-detail.vue'], resolve);
        //     }
        //   },
          {
            path: 'dynamics',
            component: resolve => {
                require(['@/html/sb-dynamics.vue'], resolve);
            }
          },
          {
            path: 'dynamics-detail',
            component: resolve => {
                require(['@/html/sb-dynamics-detail.vue'], resolve);
            }
          },
          {
              path: '/',
              redirect: 'news'
          }
      ]
    },
    {
      path: '/hh/',
      name: 'hh',
      component: Main,
      children: [
          {
            path: 'news',
            component: resolve => {
                require(['@/html/hh-news.vue'], resolve);
            }
          },
          {
            path: 'try',
            component: resolve => {
                require(['@/html/hh-try.vue'], resolve);
            }
          },
          {
            path: 'try-detail',
            component: resolve => {
                require(['@/html/hh-try-detail.vue'], resolve);
            }
          },
          {
            path: 'lottery-detail',
            component: resolve => {
                require(['@/html/hh-lottery-detail.vue'], resolve);
            }
          },
          {
            path: 'antifake',
            component: resolve => {
                require(['@/html/hh-antifake.vue'], resolve);
            }
          },
          {
              path: '/',
              redirect: 'news'
          }
      ]
    },
    {
        path: '/',
        redirect: '/bb/'
    }
  ]
})
