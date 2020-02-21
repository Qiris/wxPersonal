// components/segmentPanel/segmentPanel.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  // 外部扩展样式类
  externalClasses:["segment-class"],
  /**
   * 组件的属性列表
   */
  properties: {
    segmentItems:{
      type:Array,
      vaue:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIdx:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _handlerselectChange: function(evt) {
      let idx = parseInt(evt.detail.currentIdx)
      // 控制swiper显示的内容
      this.setData({
        currentIdx:idx
      })
    },
    // 滑动绑定事件
    _handlerChange:function(evt) {
      // 1.获取分段选择器组件对象本身
      let segBar = this.selectComponent("#x-sp-sb")
      // 2.调用对应方法
      segBar._setCurrentIdx(evt.detail.current)
    }
  }
})
