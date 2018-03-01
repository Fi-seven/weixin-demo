var amapFile = require('../../libs/amap-wx.js')
// pages/map/map.js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({
      key: '60a8f9e39349aac77126fb80ec93ce53'
   });
    myAmapFun.getPoiAround({
      success: function (data) {
        //成功回调
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
  }
})