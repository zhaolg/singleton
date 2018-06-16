var app = getApp();
Page({
  //之后调用后台服务请求返回指定数据即可
  data: {
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
    favicon: {},
    goodsDetail: {},
    shopCarInfo: {},
    prices: {},
    HotName: {
      value: "狗年脱单",
      remark: "今日推荐"
    },
    person: [{
      userId: 1,
      userName: "范冰冰",
      gender: "2",
      age: 24,
      currProvince: "北京",
      edu: "本科",
      college: "北京大学",
      picurl: "/images/person/fbb.jpg"
    }, {
      userId: 4,
      userName: "胡歌",
      gender: "1",
      age: 30,
      currProvince: "北京",
      edu: "本科",
      college: "北京大学",
      picurl: "/images/person/hg.gif"
    }, {
      userId: 2,
      userName: "鹿晗",
      gender: "1",
      age: 24,
      currProvince: "上海",
      college: "内蒙古科技大学",
      edu: "硕士",
      picurl: "/images/person/lh.jpeg"
    }, {
      userId: 3,
      userName: "张柏芝",
      gender: "2",
      age: 24,
      currProvince: "香港",
      college: "北京大学",
      edu: "本科",
      picurl: "/images/person/zbz.jpeg"
    }, {
      userId: 5,
      userName: "彭于晏",
      gender: "1",
      age: 30,
      currProvince: "香港",
      college: "北京大学",
      edu: "本科",
      picurl: "/images/person/pyy.jpeg"
    }, {
      userId: 6,
      userName: "吴亦凡",
      gender: "1",
      age: 24,
      currProvince: "内蒙古",
      edu: "本科",
      college: "北京大学",
      picurl: "/images/person/wuyf.jpg"
    }

    ]
  },

  onLoad: function () {
    this.onShow();
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight
        });
      }
    })

    wx.setNavigationBarTitle({
      title: '只为遇见你'
    })
  },

  onShow: function () {
  },

  block_action: function (e) {
    if (app.checkLogin()) {
      console.log("method:block---->不太喜欢");
    }
  },

  red_action: function (e) {
    if (app.checkLogin()) {
      console.log("method:red---->非常喜欢");
      console.log(e);
    }

  },

  showUserDetail: function (e) {
    if (app.checkLogin()) {
      wx.navigateTo({
        url: "/pages/myinfo/myinfo?userId=" + e.currentTarget.dataset.id
      })
    }
  },

})
