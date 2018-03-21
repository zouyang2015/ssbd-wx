//index.js
//获取应用实例
const app = getApp()
const URL = 'https://app.ibaodian.com/webh5.shtml'
import {http} from '../../utils/http'
Page({
  data: {
    listAry: []
  },
  onLoad() {
    // 获取列表
    this._getList()
  },
  _getList() {
    let params = {
      optioncode: 'HP-02',
      option: {'pk_comp': ''},
      platform: 'web',
      secret: 'dMFEhjxnsmJJEhYz4wgi0Q=='
    }
    http({data: params}).then((res) => {
      console.log(res, 'res')
      this.setData({
        listAry: res.prodlist
      })
    }).catch((err) => {
      console.log('err', err)
    })
    // wx.request({
    //   url: app.getUrl,
    //   data: {
    //     optioncode: 'HP-02',
    //     option: {'pk_comp': ''},
    //     platform: 'web',
    //     secret: 'dMFEhjxnsmJJEhYz4wgi0Q=='
    //   },
    //   success: (res) => {
    //     if (res.data.status === '0') {
    //       this.setData({
    //         listAry: res.data.prodlist
    //       })
    //     }
    //   }
    // })
  },
  detail: function(e) {
    let item = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `../detail/detail?prodkey=${item.prodkey}`
    })
  }
})
