var utils = require("../../../utils/util.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    newsList: [
      { 
        user : {
          url: "/images/man/ladybug.png",
        },
        type : "0",
        date :"2018-05-12 12:38",
        message:"Hello everyone. My name is ... I am a student of Grade eight . I am an outgoing , lovely girl and I am so welcomed by my friends and my classmates."
      },{
        user: {
          url: "/images/man/turtle.png",
        },
        type: "1",
        date: "2018-05-12 12:38",
        message: "我是文盲，我看不懂"
      }
    ],
    input: null,
    openid: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    wx.setNavigationBarTitle({
      title: options.name,

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  send: function () {
    var _this = this;
    if (_this.data.input) {  
      var list = [];
      var user = {
        url: "/images/man/turtle.png"
      };
      list = this.data.newsList;
      var temp = { 'message': _this.data.input, 'date': utils.formatTime(new Date()), type: 1, user};
      list.push(temp);
      this.setData({
        newsList: list,
        input: null
      })
    }

  },
  bindChange: function (res) {
    this.setData({
      input: res.detail.value
    })
  },
  back: function () {
    console.log('连接断开');
  }
})