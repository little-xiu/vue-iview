<template>
  <div class="tree-menu">
    <div  v-for="(menu, index) in data" :key="index">
      <template>
        <Submenu v-if="menu.subMenu" :name="menu.name">
          <template slot="title">
            <Icon type="ios-document-outline" />
            {{menu.title}}
          </template>
          <TreeMenu :data="menu.children"></TreeMenu>
        </Submenu>
        <MenuItem v-else :name="menu.name" :to="menu.path">
          <Icon type="ios-document-outline" />
          {{menu.title}}
        </MenuItem>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "TreeMenu",
  // props: {
  //   data: {
  //     type: Array,
  //     required: true,
  //     default: Array,
  //   }
  // },
  data () {
    return {
      data: this.$attrs.data
    }
  },
  mounted () {
    // console.log(this.$attrs, '1111----')
  }
}
</script>
