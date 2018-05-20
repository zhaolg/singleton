//app.js
App({
  onLaunch: function () {
  },
  globalData: {
    userInfo: null,
    appId:"wx7b6ac9d1d156638e",
    secret:"1499a17e6dffbd341e7bcd5d5e2a68a2",
    code:null,
    user:null,
    singletonUrl:"https://www.zhaolg5.com/singleton"
  },
  checkLogin: function () {
    if (this.globalData.userInfo == null) {
      wx.showModal({
        title: '登录提醒',
        content: '您还未登录，登录后体验更佳！',
        showCancel: false,
        success: function () {
          wx.switchTab({
            url: '/pages/my/my'
          });
        }
      });
      return false;
    }else{
      return  true;
    }
  },
})