/**
 * pc端路由
 */
export const Web = [
  {
    path: '/web',
    name: 'p_index',
    component: () => import('@/views/web/index/index'),
    meta: { type: 'web' },
  },
  {
    path: '/web/news',
    name: 'p_news',
    component: () => import('@/views/web/news/index'),
    meta: { type: 'web' },
    children: [
      {
        path: '',
        name: 'p_news_list',
        component: () => import('@/views/web/news/list'),
        meta: { type: 'web' },
      },
      {
        path: 'info',
        name: 'p_news_info',
        component: () => import('@/views/web/news/detail'),
        meta: { type: 'web' },
      }
    ]
  },
  {
    path: '/web/case',
    name: 'p_case',
    component: () => import('@/views/web/case/index'),
    meta: { type: 'web' }
  },
  {
    path: '/web/service',
    name: 'p_service',
    component: () => import('@/views/web/service/index'),
    meta: { type: 'web' }
  },
  {
    path: '/web/about',
    name: 'p_about',
    component: () => import('@/views/web/about/index'),
    meta: { type: 'web' }
  },
  {
    path: '/web//member',
    name: 'p_member',
    component: () => import('@/views/web/member/index'),
    meta: { type: 'web' }
  },
  {
    path: '/web/comment',
    name: 'p_comment',
    component: () => import('@/views/web/comment/index'),
    meta: { type: 'web' }
  },
  {
    path: '/web/investor',
    name: 'p_investor',
    component: () => import('@/views/web/investor/index'),
    meta: { type: 'web' }
  },
  {
    path: '/web/report',
    name: 'p_report',
    component: () => import('@/views/web/report/index'),
    meta: { type: 'web' }
  },
  {
    path: '/web/mine',
    name: 'p_mine',
    component: () => import('@/views/web/mine/index'),
    meta: { type: 'web' }
  }
]
