var app = getApp();
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    autoplay: true,
    interval: 500000,
    duration: 500,
    circular: true,
    showView: true ,
    personDetail: {
      photo:
      [
        {
          picurl: "/images/person/fbb.jpg",
          index: 1
        }, {
          picurl: "/images/person/pyy.jpeg",
          index: 2
        }, {
          picurl: "/images/person/wuyf.jpg",
          index: 3
        }
      ],
      basicInfo: {
        age: 26,
        gender: "男",
        curr_province: "上海",
        native_province: "内蒙古",
        college:"山西大学",
        edu:"本科",
        self_introduction:"我就是我，不一样的烟火",
        myTag:[ 
          {
            tagName : "成熟稳重",
            type:"primary"
          },{
            tagName: "心地善良",
            type: "primary"
          }, {
            tagName: "游泳",
            type: "danger"
          }, {
            tagName: "湖南张家界",
            type: "warn"
          }, {
            tagName: "西安",
            type: "warn"
          }, {
            tagName: "北京",
            type: "primary"
          }, {
            tagName: "三亚",
            type: "danger"
          }
          ]
      }
    },
  },

  onLoad: function (e) {
    console.log(e);
    if (app.checkLogin()) {
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

  modifySelfInfo:function(){
    console.log("修改我的资料");
  }
})
