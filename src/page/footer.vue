<<template>
  <div>
    <tabbar class="weui_tabbar1">
      <tabbar-item>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <span slot="label">找律师</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <span slot="label">发咨询</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <span slot="label">异地合作</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>

<style scoped>
.weui_tabbar1 {
  position: fixed;
}
</style>