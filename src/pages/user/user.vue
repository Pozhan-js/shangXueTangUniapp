<template>
  <view class="content"> 我的 </view>
</template>

<script>
import userService from "../../services/user";

export default {
  name: "user",
  onLoad() {
    this.login();
  },
  methods: {
    // 请求登陆接口
    async login() {
      console.log(1);
      try {
        const res = await userService.login({
          code: "123",
        });
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    },
  },
  // 小程序生命周期 只要进入页面就会进入该
  onShow() {
    if (!this.$store.state.token) {
      uni.navigateTo({
        url: "../../pages/login/index",
      });
    }
    this.user = this.$store.state.user;
  },
};
</script>

<style scoped lang="scss">
.content {
  background: red;
}
</style>
