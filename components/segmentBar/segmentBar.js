// components/segmentBar/segmentBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // segmentItem:Array
    segmentItems: {
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 当前点击索引
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 触摸方法
    _handlerTap:function(evt) {
      this.setData({
        currentIndex: evt.currentTarget.id
      })
      // 触发一个自定义事件,并且把数据传递出去 
      this.triggerEvent('selectChange', { currentIdx: evt.currentTarget.id},{})
    },
    // 设置当前索引值
    _setCurrentIdx:function(index) {
      this.setData({
        currentIndex:index
      })
    }
  }
})
