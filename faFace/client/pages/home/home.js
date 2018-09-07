// pages/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    open: function () {
      wx.showActionSheet({
        itemList: ['A', 'B', 'C'],
        success: function (res) {
          if (!res.cancel) {
            console.log(res.tapIndex)
          }
        }
      });
    }
  }
})
