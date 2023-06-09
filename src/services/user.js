/*
 * @Author: 朽木白
 * @Date: 2022-08-22 10:16:54
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-02 18:23:21
 * @Description:
 */
import Service from '@/utils/http';

class User extends Service {
    /**
     * @description: 小程序登陆接口
     * @param {*} options
     * @return {*}
     */
    login(options = {}) {
        options.url = `/api/ucenter/webChat/callback?code=${options.code}`;
        return this.get(options);
    }
    /**
     * @description: 获取用户信息
     * @param {*} options
     * @return {*}
     */
    getLoginInfo(options = {}) {
        options.url = `/api/ucenter/member/auth/getLoginInfo`;
        return this.get(options);
    }
    /**
     * @description: 更新用户信息
     * @param {*} options
     * @return {*}
     */
    updateMember(options = {}) {
        options.url = `/api/ucenter/member/auth/updateMember`;
        return this.post(options);
    }
    /**
     * @description: 添加评论
     * @param {*} options
     * @return {*}
     */
    commentAdd(options = {}) {
        options.url = '/api/edu/comment/auth/save';
        return this.post(options);
    }
    /**
     * @description: 评论列表
     * @param {*} options
     * @return {*}
     */
    commentList(options = {}) {
        options.url = `/api/edu/comment/${options.page}/${options.limit}`;
        return this.get(options);
    }
}

const userService = new User();
export default userService;
