var focus
var isShowView
Page({
  data: {
    // text:"这是一个页面"
    focus: false,
    isShowView: true,
    messages: [
      {
        title: "系统通知",
        url: "/images/man/036.png",
        message: "您的个人信息已经审核通过，请开始交友吧！！！",
        time: "21:15",
        count: 999
      },
      {
        title: "马云",
        url: "/images/man/turtle.png",
        message: "什么鬼，我有支付宝",
        time: "15:15",
        count: 5
      },
      {
        title: "马化腾",
        url: "/images/man/snail.png",
        message: "哈哈哈，我要一统江湖啦，",
        time: "15:15",
        count: 22
      },
      {
        title: "一声问候",
        url: "/images/man/ladybug.png",
        message: "朋友生日要到了，送个祝福吧",
        time: "14:23",
        count: 0
      },
      {
        title: "李彦宏",
        url: "/images/man/duck.png",
        message: "抄袭我的吧，我早都做过了",
        time: "12:13",
        count: 1
      },
      {
        title: "雷军",
        url: "/images/man/horse.png",
        message: "微信给你下线，看你还嘚瑟",
        time: "12:11",
        count: 0
      },
      {
        title: "前端开发者",
        url: "/images/man/rabbit.png",
        message: "我们的春天来啦，哈哈哈",
        time: "11:35",
        count: 0
      },
      {
        title: "微信小程序",
        url: "/images/man/cat.png",
        message: "谁有内测资格啊啊，300万买一个",
        time: "08:23",
        count: 23
      },
      {
        title: "小程序",
        url: "/images/man/cat.png",
        message: "这个IDE方便都不要配置了",
        time: "03:21",
        count: 5
      },
      {
        title: "微信应用号开发群",
        url: "/images/man/fish.png",
        message: "开发的局限性太大了",
        time: "03:08",
        count: 99
      },
      {
        title: "后台",
        url: "/images/man/lion.png",
        message: "不看好小程序",
        time: "02:45",
        count: 0
      },
      {
        title: "闯天下",
        url: "/images/man/cat.png",
        message: "微信太强大了",
        time: "01:09",
        count: 67
      },
      {
        title: "小程序",
        url: "/images/man/cat.png",
        message: "有快来看直播啦，学习开始啦",
        time: "00:24",
        count: 2
      }
    ]
  },
  bindtap: function (event) {
    wx.navigateTo({
      url: "search/search"
    })
  },
  bindfocus: function () {
    this.setData({
      focus: true
    })
    this.setData({
      isShowView: false
    })
  },
  bindblur: function () {

    this.setData({
      focus: false
    })
    this.setData({
      isShowView: true
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
      title: '我的消息'
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})