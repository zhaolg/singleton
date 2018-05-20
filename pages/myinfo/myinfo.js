var app = getApp();
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    autoplay: true,
    interval: 500000,
    duration: 500,
    circular: true,
    showView: true,
    user:null
  },
  onLoad: function (e) {
    if (app.checkLogin()) {
      var that = this;
      console.log(app.globalData.user);
      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            windowWidth: res.windowWidth,
            windowHeight: res.windowHeight,
            user : app.globalData.user
          });
        }
      })
      that.setData({
        userInfo: app.globalData.userInfo
      });
    } 
    if (e.userId){
      that.setData({
        showView : false 
      });
    }
  },
  onShow : function(){
    this.setData({
      user: app.globalData.user
    });
  },
  onPageScroll: function(){
    this.setData({
      user: app.globalData.user
    });
  },
  modifySelfInfo:function(){
    console.log("修改我的资料");
    wx.navigateTo({
      url: "/pages/userdetail/index"
    })
  }
})
