// pages/wallet/index.js
Page({
  data: {
    overage: 0,
    ticket: 0
  },
  // 页面加载
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的钱包'
    })
  },
  // 页面加载完成，更新本地存储的overage
  onReady: function () {
    wx.getStorage({
      key: 'overage',
      success: (res) => {
        this.setData({
          overage: res.data.overage
        })
      }
    })
  },
  // 页面显示完成，获取本地存储的overage
  onShow: function () {
    wx.getStorage({
      key: 'overage',
      success: (res) => {
        this.setData({
          overage: res.data.overage
        })
      }
    })
  },
  // 余额说明
  overageDesc: function () {
    wx.showModal({
      title: "",
      content: "充值余额1000.00元+活动赠送余额1000.00元",
      showCancel: false,
      confirmText: "我知道了",
    })
  },
  // 跳转到充值页面
  movetoCharge: function () {
    // 关闭当前页面，跳转到指定页面，返回时将不会回到当前页面
    wx.redirectTo({
      url: '../charge/index'
    })
  },
  showTicket: function () {
    wx.showModal({
      title: "",
      content: "你没有优惠券了，去转发给朋友获取优惠券吧！",
      showCancel: false,
      confirmText: "好吧",
    })
  },
  // 充值会员
  showDeposit: function () {
    wx.showModal({
      title: "",
      content: "开通VIP会员，专属身份标识，更多会员特权享受",
      cancelText: "开通会员",
      cancelColor: "#b9dd08",
      confirmText: "稍后开通",
      confirmColor: "#ccc",
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: "开通成功",
            icon: "success",
            duration: 2000
          })
        }
      }
    })
  }
})