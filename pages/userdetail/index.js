var app = getApp();
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    autoplay: true,
    interval: 500000,
    duration: 500,
    circular: true,
    personDetail: {
      photo:
      [
        {
          picurl: "/images/person/fbb.jpg",
          index: 1
        }, {
          picurl: "/images/person/fbb.jpg",
          index: 2
        }, {
          picurl: "/images/person/fbb.jpg",
          index: 3
        }
      ],
      basicInfo: {
        age: 24,
        gender: "女",
        curr_province: "上海",
        native_province: "内蒙古"
      }
    },
    reputation: [
      {
      user: {
        avatarUrl: "/images/man/duck.png",
        nick: "赵林刚"
      },
      goods: {
        goodReputationStr: "攒",
        goodReputationRemark: "非常好的人",
        dateReputation: "2018-05-10 12:00",
        property: "好评如潮"
      }
    },
      {
        user: {
          avatarUrl: "/images/man/duck.png",
          nick: "林刚"
        },
        goods: {
          goodReputationStr: "攒",
          goodReputationRemark: "非常好的人",
          dateReputation: "2018-05-10 12:00",
          property: "好评如潮"
        }
      }
    ],
    swiperCurrent: 0,
    hasMoreSelect: false,
    selectSize: "选择：",
    selectSizePrice: 0,
    shopNum: 0,
    hideShopPopup: true,
    buyNumber: 0,
    buyNumMin: 1,
    buyNumMax: 0,
    currentTab: 0,
    favicon: 1,

    propertyChildIds: "",
    propertyChildNames: "",
    canSubmit: false,
    shopCarInfo: {},
    shopType: "addShopCar",
  },

  onLoad: function (e) {
    if (e.inviter_id) {
      wx.setStorage({
        key: 'inviter_id_' + e.id,
        data: e.inviter_id
      })
    }
  },
})