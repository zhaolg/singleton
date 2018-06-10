import componentsConfig from './config';
var app = getApp();
Page({
  data: {
    autoplay: true,
    interval: 500000,
    duration: 500,
    circular: true,
    showView: true,
    windowWidth: 0,
    windowHeight: 0,
    imageInfos_1: {
      imageUrl: "/images/tpsc.png",
      imageId: 1
    },
    imageInfos_2: {
      imageUrl: "/images/tpsc.png",
      imageId: 2
    },
    imageInfos_3: {
      imageUrl: "/images/tpsc.png",
      imageId: 3
    },
    list: componentsConfig
  },
  onLoad: function (e) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
        });
      }
    })
    that.setData({
      userInfo: app.globalData.userInfo,
      user: app.globalData.user
    });
    console.log(app.globalData.user);
  },
  onShow: function () {
    var that = this;
    if (app.globalData.user.imageInfos.length > 0) {
      if (app.globalData.user.imageInfos.length == 1) {
        that.setData({
          imageInfos_1: app.globalData.user.imageInfos[0]
        });
      }
      if (app.globalData.user.imageInfos.length == 2) {
        that.setData({
          imageInfos_1: app.globalData.user.imageInfos[0],
          imageInfos_2: app.globalData.user.imageInfos[1]
        });
      }
      if (app.globalData.user.imageInfos.length >= 3) {
        that.setData({
          imageInfos_1: app.globalData.user.imageInfos[0],
          imageInfos_2: app.globalData.user.imageInfos[1],
          imageInfos_3: app.globalData.user.imageInfos[2]
        });
      }
    }

  },
  onPageScroll: function () {

  },
  addImage: function (curr) {
    var that = this;
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: app.globalData.singletonUrl + '/imageUpload',
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'openid': app.globalData.user.userInfo.openId,
            'userid': app.globalData.user.userInfo.userId,
            'sortId': curr.currentTarget.dataset.id
          },
          success: function (res) {
            var data = res.data
            data = data.replace(" ", "");
            if (typeof data != 'object') {
              data = data.replace(/\ufeff/g, "");
              var jj = JSON.parse(data);
              data = jj;
              data.imageUrl = app.globalData.singletonUrlImage + data.imageUrl;
            }
            if (data.msgCode != 1) {
              return;
            }
            if (curr.currentTarget.dataset.id == 2) {
              that.setData({
                imageInfos_2: data
              });
            }
            if (curr.currentTarget.dataset.id  == 1) {
              that.setData({
                imageInfos_1: data
              });
            }
            if (curr.currentTarget.dataset.id  == 3) {
              that.setData({
                imageInfos_3: data
              });
            }
          }
        })
      }
    })
  },
  onUnload: function () {
    app.refreshUserInfo();
  },
  editor: function (curr){



  },
})
