<!--
 * @Author: 朽木白
 * @Date: 2022-08-20 17:04:01
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-02 16:56:29
 * @Description: 
-->
<template>
  <view class="preferences_list">
    <view
      class="preferences_list_item"
      v-for="(item, index) in list"
      :key="index"
    >
      <navigator
        class="list_item_card"
        :url="
          type == 'course'
            ? '/pages/course/detail?id=' + item.id
            : '/pages/teacher/detail?id=' + item.id
        "
      >
        <view class="list_item_card_img">
          <image
            alt="封面"
            :mode="type === 'course' ? 'fill' : 'aspectFit'"
            :src="type === 'course' ? item.cover : item.avatar"
          />
        </view>
        <view class="list_item_card_content">
          <h3 class="item_content_name">
            {{ type === "course" ? item.title : item.intro }}
          </h3>
          <view class="item_content__labal">
            <uni-icons
              v-if="type === 'course'"
              type="fire"
              size="18"
              color="#fa3f4e"
            ></uni-icons>
            <view
              :class="['study_num', type === 'teacher' ? 'teacher_name' : '']"
            >
              <text v-if="type === 'course'">{{ item.lessonNum }}人已学习</text>
              <text v-else>{{ item.name }}</text>
            </view>
          </view>
          <view class="item-content_footer" v-if="type === 'course'">
            <view class="footer_price">¥{{ item.price }}</view>
            <view class="footer_buy_num">{{ item.buyCount }}人购买</view>
          </view>
        </view>
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  name: "v-card-list",
  props: {
    list: {
      type: Array,
      default: [],
    },
    type: {
      type: String,
      default: "course",
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.preferences_list {
  &_item {
    padding-bottom: 8px;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
    &:nth-child(2n-1) {
      padding-right: 4px;
    }
    &:nth-child(2n) {
      padding-left: 4px;
    }
    .list_item_card {
      display: block;
      width: 100%;
      &_img {
        width: 100%;
        height: 95px;
        background-image: url("https://8.idqqimg.com/edu/mobilev2/m-core/3d1dd248376a6da4a15e0000184f44c6.png");
        background-repeat: no-repeat;
        background-size: contain;
        border-radius: 8px 8px 0 0;
        image {
          height: 100%;
          width: 100%;
          border-radius: 8px 8px 0 0;
        }
      }
      &_content {
        background: $uni-bg-wrapper-color;
        border-radius: 0 0 8px 8px;
        .item_content_name {
          height: 40px;
          padding: 4px 4px;
          color: $uni-text-color-name;
          font-size: $uni-font-size-14;
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .item_content__labal {
          display: flex;
          align-items: center;
          padding: 0 4px;
          .study_num {
            font-size: $uni-font-size-12;
            color: $uni-text-color-name;
            margin-left: 4px;
          }
          .teacher_name {
            color: #68cb9b;
            margin-left: 0;
            font-size: 14px;
            margin-bottom: 4px;
          }
        }
        .item-content_footer {
          display: flex;
          align-items: center;
          padding: 4px;
          .footer_price {
            font-size: $uni-font-size-16;
            color: $price-font-color;
            margin-right: $uni-spacing-4;
          }
          .footer_buy_num {
            font-size: $uni-font-size-12;
            color: $uni-text-color-name;
          }
        }
      }
    }
  }
}
</style>
