1. 基础

1.1 Vuex 的状态存储是响应式的，不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。
1.2 通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到。

2. 核心概念：

2.1 state: 可以认为是全局属性或全局状态；
2.2 Getter: 接受 state 作为其第一个参数，Getter 也可以接受其他 getter 作为第二个参数：可以认为是 store 的计算属性；
2.3 Mutation: 更改 Vuex 的 store 中的状态state的唯一方法是提交 mutation; Mutation 必须是同步函数, 它会接受 state 作为第一个参数;
2.4 Action: Action 提交的是 mutation，而不是直接变更状态; Action 可以包含任意异步操作。Action 通过 store.dispatch 方法触发;
2.5 Module: 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块; 若需要在带命名空间的模块注册全局 action，你可添加 root: true; 可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。

3. 需要遵守的规则：

3.1 应用层级的状态应该集中到单个 store 对象中。

3.2 提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。

3.3 异步逻辑都应该封装到 action 里面。


4. 在组件中使用vuex举例：

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    //把user模块的全局属性转为内部的局部属性,方便使用
    ...mapState({
        // 另取一个名字，使用对象形式：
        // key：组件内部使用的属性名字
        // value： 全局属性名字
      username: (state) => { //state包含所有的(根节点及模块)state属性
        return state.user.username;
      }
    }),
    //把user模块的全局计算属性转为内部的局部计算属性
    ...mapGetters({
      //页面使用 v-if="isLogin"
      isLogin: 'user/isLogin'
    }),
    // 不改名字就直接写
    ...mapGetters('user', [
      'doneTodosCount',
      'anotherGetter',
    ])
  },
  methods: {
    // 转化为内部方法可直接使用 `this.increment()`,或者在组件中直接使用 `this.$store.commit('increment')`
    ...mapMutations({
      'increment' 
    })
    //将模块user的 modifyNameAction方法转为内部的modify方法,内部this.modify()调用
    ...mapActions({
      modify: 'user/modifyNameAction'
    }),
    // 或者
    ...mapActions('user', [
      'modifyNameAction', // -> this.modifyNameAction()
    ]),
    modifyAction(){
      let value = this.$refs.in.value;
      //告诉全局状态管理，修改数据
      // 等同于：this.$store.dispatch('user/modifyNameAction', value);
      // 等同于：this.modifyNameAction(value);
      this.modify(value);
    },
  },
}