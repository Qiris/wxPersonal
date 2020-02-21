// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score:50,
    testItem:[
      {
        id:"1",
        imgHeader:'/assets/images/test.jpg',
        nameHeader:'1个标题'
      },
      {
        id: "2",
        imgHeader: '/assets/images/test.jpg',
        nameHeader: '2个标题'
      },
      {
        id: "3",
        imgHeader: '/assets/images/test.jpg',
        nameHeader: '3个标题'
      }
    ]
  },
  /***
   * 触摸事件函数
   */
  bandFunc:function() {
    console.log('触摸函数调用')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('测试页面加载完毕')
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})