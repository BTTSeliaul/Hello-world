Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoRef: [
      {
        key: 'kcmc',
        title: '课程名'
      },
      {
        key: 'place',
        title: '地点'
      },
      {
        key: 'teacherName',
        title: '授课教师'
      },
      {
        key: 'xf',
        title: '学分'
      },
      {
        key: 'kcsx',
        title: '课程属性'
      },
      {
        key: 'kcbh',
        title: '课程编号'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let info = options.info || ''
    if (info == '') {
      wx.showToast({
        title: '页面不存在',
        icon: 'none'
      })
      setTimeout(() => {
        wx.navigateBack({
          delta: 1,
        })
      }, 1500);
      return
    }
    info = JSON.parse(info)
    info.rawSection = '周' + info.rawSection
    this.setData({
      info
    })
  },
  /*返回上一级*/
  fp(){
    wx.navigateBack({
      delta:1
    })
  }
})
