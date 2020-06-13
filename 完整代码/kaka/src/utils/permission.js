import Vue from 'vue'
import router from '@/router.js'
Vue.directive('permission', {
  // inserted 是回调函数
  // 参数el是当前使用指令的元素，比如el-button
  // binding可以得到指令后面跟的数据
  inserted: function(el, binding) {
    // console.log(el)
    // console.log(binding)
    const action = binding.value.action
    // 判断,当前的路由所对应的组件中,如何判断用户是否具备 action的权限
    // router.currentRoute 当前组件的路由规则
    // console.log(router.currentRoute)
    const currentRight = router.currentRoute.meta
    if (currentRight) {
      // eslint-disable-next-line eqeqeq
      if (currentRight.indexOf(action) == -1) {
        // 不具备权限
        const type = binding.value.effect
        if (type === 'disabled') {
          // 禁用按钮
          el.disabled = true
          // element-ui需要多这一步操作
          el.classList.add('is-disabled')
        } else {
          // 删除按钮
          el.parentNode.removeChild(el)
        }
      }
    }
  }
})
