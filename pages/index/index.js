//index.js
//获取应用实例
const app = getApp()
const URL = 'https://app.ibaodian.com/webh5.shtml'
Page({
  data: {
    listAry: []
  },
  onLoad() {
    // 获取列表
    this._getList()
  },
  _getList: function() {
    let that = this
    wx.request({
      url: URL,
      data: {
        optioncode: 'HP-02',
        option: {'pk_comp': ''},
        platform: 'web',
        secret: 'dMFEhjxnsmJJEhYz4wgi0Q=='
      },
      success: function(res) {
        if (res.data.status === '0') {
          that.setData({
            listAry: res.data.prodlist
          })
        }
      }
    })
  },
  detail: function(e) {
    let item = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `../detail/detail?prodkey=${item.prodkey}`
    })
    console.log(e.currentTarget.dataset.item)
  }
})
