import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/hello'
import MyTable from '@/components/MyTable'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: "Hello",
      component: Hello
    },
    {
      path: '/table',
      name: "MyTable",
      component: MyTable
    }
  ]
})
