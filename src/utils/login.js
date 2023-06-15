/**
 * @description: 调用微信登陆
 * @returns {*}
 */
export function mpWeixinLogin() {
    const _this = this;
    try {
        // 先调用授权
        uni.getUserProfile({
            lang: "zh_CN",
            desc: "用于完善会员资料",
            success: async (res) => {
                console.log("userprofile", res);
                // 保存userinifo信息
                _this.userInfo = res.userInfo;
                // 授权成功
                uni.login({
                    success(data) {
                        // 获取到code
                        const code = data.code;
                        console.log("code", code);
                        if (code) _this.login(code);
                    },
                });
            },
            file: (err) => {
                console.log(err);
            },
        });
    } catch (e) {
        console.log(e);
    }
}


