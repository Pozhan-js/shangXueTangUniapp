<template>
  <view class="home container">
    <v-search-bar @focus="focus" class="header"></v-search-bar>

    <!-- 轮播图 -->
    <view class="swiper_box">
      <swiper
        class="swiper"
        circular
        indicator-dots
        autoplay
        :interval="2000"
        indicator-color="#fff"
        indicator-active-color="#26B7FF"
        :duration="500"
      >
        <swiper-item v-for="item in bannerList" :key="item.src">
          <view class="swiper_item uni_bg_red">
            <image mode="heightFix" :src="item.imageUrl" />
            <!-- <image mode="heightFix" :src="item.src" /> -->
          </view>
        </swiper-item>
      </swiper>
    </view>

    <!-- 导航 -->
    <view>
      <view class="hot_cate">
        <view class="hot_cate_item" v-for="item in hostList" :key="item.src">
          <navigator class="hot_cate_item_a">
            <image class="hot_cate_item_img" alt="img" :src="item.src" />
            <text class="hot_cate_item_name">{{ item.name }}</text>
          </navigator>
        </view>
      </view>
    </view>

    <!-- 热门 -->
    <view class="preferences_wrapper">
      <v-card
        title="热门课程"
        linkTitle="全部课程"
        type="course"
        link="/pages/course/index"
      >
        <v-card-list type="course" :list="courseList"></v-card-list>
      </v-card>
      <v-card
        title="名师大咖"
        linkTitle="全部名师"
        type="teacher"
        link="/pages/teacher/index"
      >
        <v-card-list type="teacher" :list="teacherList"></v-card-list>
      </v-card>
    </view>

    <!--意见回到顶部 -->
    <backTop />
  </view>
</template>

<script>
import { hotCateList, bannerList, courseList } from "../../common/constant";
import courseService from "../../services/course";
import backTop from "@/components/v-back-top/v-back-top";
export default {
  data() {
    return {
      // 冻结数据
      bannerList: Object.freeze(bannerList),
      hostList: Object.freeze(hotCateList),
      courseList: Object.freeze(courseList),
      teacherList: Object.freeze([]),
    };
  },
  onLoad() {
    this.getBannerList();
    this.getCourseList();
  },
  methods: {
    // 获取banner
    async getBannerList() {
      try {
        const res = await courseService.banner();
        this.bannerList = res.data.bannerList;
        console.log("获取课程页数据", this.bannerList);
      } catch (e) {
        console.log("e", e);
      }
    },
    async getCourseList() {
      try {
        const res = await courseService.indexCourse();
        this.courseList = res.data.courseList;
        this.teacherList = res.data.teacherList;
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    },
    focus() {
      // 点击首页搜索框，跳转到课程页面
      uni.switchTab({
        url: "/pages/course/course?focus=true",
      });
    },
    navigateTo(link, type) {
      if (type === "course") {
        uni.switchTab({ url: link });
      } else if (type === "teacher") {
        uni.navigateTo({ url: link });
      }
    },
    //检测·1滚动事件
    onPageScroll(res) {
      uni.$emit("onPageScroll", res);
    },
  },
  components: {
    backTop,
  },
};
</script>

<style lang="scss" scoped>
// @import "@/static/styles/_global.scss";
.home {
  padding-top: 56px;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background: #1f2228;
}

.swiper_box {
  width: 100%;

  .swiper_item {
    width: 100%;
    height: 100%;
    background: #000;
  }
}

.hot_cate {
  padding: $uni-spacing-row-sm;
  background: $uni-gradient-bg-color;
  display: flex;
  flex-wrap: wrap;
  &_item {
    width: 20%;
    &_a {
      display: flex;
      // @include flex-display;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    &_img {
      width: 36px;
      height: 36px;
      margin-bottom: 8px;
    }
    &_name {
      font-size: 12px;
      color: #737780;
    }
  }
}

.preferences_wrapper {
  background: $uni-bg-color;
}
</style>
