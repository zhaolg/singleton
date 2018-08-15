Page({
  data: {
    date: "1992-05-17",
    edus: ["博士研究生","硕士研究生","本科", "专科", "其他"],
    edusIndex: 2,
    region: ['广东省', '广州市', '海珠区'],
    regionCurr: ['广东省', '广州市', '海珠区']
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindEduChange: function (e) {
    this.setData({
      edusIndex: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  bindRegionCurrChange: function (e) {
    this.setData({
      regionCurr: e.detail.value
    })
  },
  saveInfoDetail :function (e){
      var that = this;






  },

});