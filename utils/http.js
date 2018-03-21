/**
 * Created by YCY on 2018/3/20.
 */
const URL = 'https://app.ibaodian.com/webh5.shtml'

export function http ({data}) {
  return new Promise((resole, reject) => {
    wx.request({
      url: URL,
      data: data,
      success: (res) => {
        if(res.data.status === '0') {
          resole(res.data)
        }else {
          if(typeof res.data.msg === 'undefined' || res.data.msg === 'null' || res.data.msg === '') {
            reject(res.data.msg)
          }else {
            reject('出错了')
          }
        }
      },
      fail: (err) => {

      }
    })
  })
}