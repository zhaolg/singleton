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
    singletonUrl:"http://localhost:8081/singleton",
    singletonUrlImage: "http://localhost:8081/singleton/image"
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
  getUserOpenId: function () {
    var that = this;
    wx.request({
      url: this.globalData.singletonUrl + '/userLogin?code=' + this.globalData.code + '&userName=' + this.globalData.userInfo.nickName,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        for (var i = 0; i < res.data[0].imageInfos.length; i++) {//格式化图片路径
          var item = res.data[0].imageInfos[i];
          item.imageUrl = that.globalData.singletonUrlImage + item.imageUrl;
        }
        that.globalData.openid = res.data.openid //返回openid
        that.globalData.user = res.data[0];
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },
  refreshUserInfo : function () {
    var that = this;
    wx.request({
      url: this.globalData.singletonUrl + '/refreshUserInfo?userId=' + this.globalData.user.userInfo.userId,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        for (var i = 0; i < res.data[0].imageInfos.length; i++) {//格式化图片路径
          var item = res.data[0].imageInfos[i];
          item.imageUrl = that.globalData.singletonUrlImage + item.imageUrl;
        }
        that.globalData.openid = res.data.openid //返回openid
        that.globalData.user = res.data[0];
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },
})