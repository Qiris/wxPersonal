// components/c-test/c-test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 组件传值,声明使用的对象
    testItem:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    isDelete:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 长按方法
    _deleteItem:function() {
      this.setData({
        isDelete:true
      })
    },
    _handlerDelete:function() {
      wx.showModal({
        title: '是否删除',
        content: '确定之后,这个条目将会没有',
        success:(res)=> {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 2000
            })
            this.setData({
              isDelete: false
            })
          } else if (res.cancel) {
            this.setData({
              isDelete: false
            })
          }
        }
      })
    }
  }
})
