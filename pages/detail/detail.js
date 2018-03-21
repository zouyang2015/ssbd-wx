// pages/detail/detail.js

const app = getApp()
import {http} from '../../utils/http'
Page({
  data: {},
  onLoad: function (option) {
    this._getProductDetail()
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

  },
  // 获取产品详情
  _getProductDetail(prodkey = 'PR18020800000000000122222222222') {
    let params = {
      optioncode: 'prds-01new',
      option: {'prodkey': prodkey, 'userid': 'US160831000000000179'},
      platform: 'web',
      secret: 'dMFEhjxnsmJJEhYz4wgi0Q=='
    }
    http({data: params}).then((res) => {
      console.log('res', res)
    }).catch((err) => {
      console.log('err', err)
    })
    // wx.request({
    //   url: app.getUrl,
    //   data: {
    //     optioncode: 'prds-01new',
    //     option: {'prodkey': prodkey, 'userid': 'US160831000000000179'},
    //     platform: 'web',
    //     secret: 'dMFEhjxnsmJJEhYz4wgi0Q=='
    //   },
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
  }
})