// pages/segmentBar/segmentBar.js
Page({
  // 事件回调函数
  _handlerselectChange:function(evt) {
    console.log(evt)
  },
  /**
   * 页面的初始数据
   */
  data: {
    // 定义组件要使用的数据
    items:[{
      title:'热门榜',
      secondTitle:'本周最热'
    },{
      title: '热门榜2',
       secondTitle: '本周最热2'
    },{
      title: '热门榜3',
      secondTitle: '本周最热3'
    },{
      title: '热门榜4',
      secondTitle: '本周最热4'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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