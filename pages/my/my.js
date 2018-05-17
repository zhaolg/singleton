const app = getApp()
console.log(app)
Page({
  data: {
    balance: 0,
    freeze: 0,
    score: 0,
    score_sign_continuous: 0,
    version: {},
    tabClass: ["", "", "", "", ""],
    isLogin: false,
    actionText: "登录",
    actionType: "primary",
  },
  getUserInfo: function (cb) {
    var that = this;
    wx.login({
      success: function (res) {
        wx.hideLoading();
        wx.getSetting({
          success: (response) => {
            if (!response.authSetting['scope.userInfo']) {
              wx.authorize({
                scope: 'scope.userInfo',
                success: () => {
                  that.getUserinfoFun();
                }
              })
            } else {
              that.getUserinfoFun();
            }
          }
        })
      }
    })
  },
  getUserinfoFun:function(){
    var that = this;
    wx.getUserInfo({
      withCredentials: true,
      lang: "zh_CN",
      success: function (res) {
        that.setData({
          userInfo: res.userInfo,
          isLogin: true,
          actionText: "退出",
          actionType: "warn",
        });
        app.globalData.userInfo = res.userInfo;
      }
    })
  },
  relogin: function () {
    if (this.data.isLogin) {//退出
      this.setData({
        isLogin: false,
        actionText: "登录",
        actionType: "primary",
        userInfo: null
      });
      app.globalData.userInfo = null;
    } else {//登录
      this.getUserInfo();
    }
  },
  aboutme: function () {
    wx.showModal({
      title: '关于单身帮',
      content: '本系统由本人自行开发，目前均免费，使用中有任何问题可微信联系：<zhaolingang1314>,祝早日脱单！！！',
      showCancel: false
    })
  },

})