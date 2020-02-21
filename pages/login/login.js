// pages/login/login.js
Page({
  // 登录方法
  _handlerSumbit: function(evt) {
    console.log(evt)
  },
  // 处理账号输入事件
  _handerAccountInput: function(evt) {
    let accountV = evt.detail.value
    this.setData({
      isLegal:accountV.length>=3,
      accountV: accountV,
      loginCick: this.data.passwordV.length > 0 && this.data.isLegal
    })
  },
  // 处理密码输入事件
  _handerPasswordInput: function (evt) {
    let passwordV = evt.detail.value
    this.setData({
      passwordV: passwordV,
      loginCick: passwordV.length > 0 && this.data.isLegal
    })
  },
  // 记住密码
  _handlerRem: function (evt) {
    if (evt.detail.value.length === 0) {
      this.setData({
        autoLogin:false
      })
    }
  },
  // 自动登录
  _handlerAuto:function(evt) {
    if (evt.detail.value.length > 0) {
      // 被选中应记住密码
      this.setData({
        rememberPwd: true
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    isLegal:false,
    loginCick:false,
    accountV:'',
    passwordV:'',
    autoLogin:false,
    rememberPwd:false
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