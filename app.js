//app.js
App({
  onLaunch: function () {
  },
  globalData: {
    userInfo: null
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