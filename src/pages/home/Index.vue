
<template>
  <div class="home-page">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="light" active-name="1">
          <div class="layout-logo">长期激励系统</div>
          <div class="layout-nav">
              <MenuItem
                v-for="(item, index) in menuList"
                :key="index"
                :name="item.name"
                :to="item.path"
                style="color: #000"
              >
                {{item.title}}
              </MenuItem>
          </div>
          <div class="userName">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-contact-outline" />Eson
              </template>
              <MenuItem name="1-1" :style="{width: '50px'}">退出系统</MenuItem>
            </Submenu>
            <Icon type="ios-power" />
          </div>
        </Menu>
      </Header>
      <Content>
        <Layout>
          <Sider :style="{background: '#fff', minWidth: '320px', paddingLeft: '50px'}">
              <Menu class="ivu-layout-menu" :accordion= true active-name="1-2-1" theme="light" width="auto" :open-names="['1']">
                  <Submenu v-for="(item, index) in siderMenuList" :name="item.name" :key="index">
                      <template slot="title">
                          <Icon type="ios-document-outline"></Icon>
                          {{item.title}}
                      </template>
                      <TreeMenu v-bind="$attrs" :data="item.children"></TreeMenu>
                  </Submenu>
              </Menu>
          </Sider>
          <router-view></router-view>
        </Layout>
      </Content>
    </Layout>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        menuList: [],
        siderMenuList: [],
      }
    },
    created () {
      this.menuList = this.getMenuList();
      this.siderMenuList = this.getSiderMenuList();
    },
    computed: {},
    watch: {},
    methods: {
      getMenuList () {
        const menuList = [
          {
            name: 1,
            title: '长奖',
            path: '/',
          },
          {
            name: 2,
            title: '工分',
            path: '/',
          },
          {
            name: 3,
            title: '持股',
            path: '/',
          },
          {
            name: 4,
            title: '增值权',
            path: '/',
          },
          {
            name: 5,
            title: '期权',
            path: '/',
          },
        ];
        return menuList;
      },
      getSiderMenuList () {
        const siderMenuList = [
          {
            title: '总量管理',
            name: '1',
            path: '/',
            subMenu: true,
            routerName: 'manageTotal',
            children: [
              {
                title: '期权值',
                name: '1-1',
                path: '/',
                subMenu: true,
                routerName: '',
                children: [
                  {
                    title: '新增期权值',
                    name: '1-1-1',
                    path: 'home',
                    subMenu: true,
                    routerName: '',
                    children: [
                      {
                        title: '编辑审批通过的期权值',
                        name: '1-1-1-1',
                        path: '/home/home-detail',
                        routerName: '',
                      }
                    ]
                  }
                ]
              },
              {
                title: '期权品种（集团管理员）',
                name: '1-2',
                path: '/',
                subMenu: true,
                routerName: '',
              }
            ]
          },
          {
            title: '期权授予',
            name: '2',
            path: '/',
            subMenu: true,
            routerName: 'optionGrants',
          }
        ];
        return siderMenuList;
      }
    }
  }
</script>
<style lang="less">
.home-page {
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  .layout-logo {
  width: 100px;
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  }
  .layout-nav{
    float: left;
    margin-left: 140px;
  }
  .userName {
    float: right;
  }
  .layout-footer-center{
      text-align: center;
  }
  .ivu-layout-header, .ivu-menu-dark {
      background: #fff;
  }
  .layout-logo {
      line-height: 30px;
  }
  .ivu-layout {
    height: 100%;
    background: #fff;
    padding: 0!important;
    & > .ivu-layout-content {
      background: transparent!important;
      height: 100%;
      // padding: 20px!important;
      .ivu-layout-menu {
        height: 100%;
        overflow: auto;
      }
    }
  }
  .ivu-tabs-bar {
    padding-bottom: 20px;
    border-bottom: 0;
  }
}

</style>