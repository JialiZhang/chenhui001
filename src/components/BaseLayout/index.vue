<template>
  <Layout class="layout">
    <Header></Header>
    <layout>
      <Sider
        collapsible
        hide-trigger
        v-model="isCollapsed"
        :collapsed-width="78"
      >
        <Menu accordion width="auto">
          <template v-for="item in menus">
            <Submenu v-if="item.children && item.children.length" :name="item.name">
              <template #title>
                <Icon :type="item.icon" />
                <span>{{item.title}}</span>
              </template>
              <MenuItem
                v-for="subItem in item.children"
                :key="subItem.name"
                :name="subItem.name"
                :to="subItem.name"
              >{{subItem.title}}</MenuItem>
            </Submenu>
            <MenuItem v-else :name="item.name" :to="item.name">
              <Icon :type="item.icon" />
              <span>{{item.title}}</span>
            </MenuItem>
          </template>
        </Menu>
      </Sider>
      <Content>
        <div class="wrapper">
          <router-view />
        </div>
      </Content>
    </layout>
  </Layout>
</template>

<script>
export default {
  name: 'BaseLayout',
  data() {
    return {
      isCollapsed: false,
      menus: [
        {
          title: '系统首页',
          name: 'home',
          icon: 'md-home',
        },
        {
          title: '管理中心',
          name: 'managementCenter',
          icon: 'md-cube',
          children: [
            {
              title: '交易管理',
              name: 'transactionManagement',
            },
            {
              title: '账号管理',
              name: 'accountManagement',
            }
          ],
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.layout{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .ivu-layout{
    height: calc(100% - 64px);
    .ivu-layout-sider{
      ::v-deep .ivu-layout-sider-children{
        overflow-y: auto;
        .ivu-menu{
          min-height: 100%;
        }
      }
    }
    .ivu-layout-content{
      .wrapper{
        width: 100%;
        height: 100%;
        padding: 24px;
        box-sizing: border-box;
        overflow-y: auto;
      }
    }
  }
}
</style>