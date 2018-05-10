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
      id: 1,
      name: "范冰冰",
      gender: "女",
      age: 24,
      province:"北京",
      index: "index_1",
      college:"北京大学",
      picurl:"/images/person/fbb.jpg"
    }, {
      id: 4,
      name: "胡歌",
      gender: "男",
      age: 30,
      province: "北京",
      index: "index_4",
      college: "北京大学",
      picurl: "/images/person/hg.gif"
    }, {
      id: 2,
      name: "鹿晗",
      gender: "男",
      age: 24,
      province: "上海",
      index: "index_2",
      college: "内蒙古科技大学",
      picurl: "/images/person/lh.jpeg"
    }, {
      id: 3,
      name: "张柏芝",
      gender: "女",
      age: 24,
      province: "香港",
      index: "index_3",
      college: "北京大学",
      picurl: "/images/person/zbz.jpeg"
    }, {
      id: 5,
      name: "彭于晏",
      gender: "男",
      age: 30,
      index: "index_5",
      province: "香港",
      college: "北京大学",
      picurl: "/images/person/pyy.jpeg"
    }, {
      id: 6,
      name: "吴亦凡",
      gender: "男",
      age: 24,
      province: "内蒙古",
      index: "index_6",
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

  block_action:function(e){
    console.log("method:block---->不太喜欢");
     console.log(e);
  },

  red_action:function(e){
    console.log("method:red---->非常喜欢");
    console.log(e);
  },

  showUserDetail:function(e){
    console.log("method:showUserDetail---->跳转到用户详情见面");
    wx.navigateTo({
      url: "/pages/userdetail/index?id=" + e.currentTarget.dataset.id
    })
  },


})
