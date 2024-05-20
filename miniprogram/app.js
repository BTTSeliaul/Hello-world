// app.js
App({
  //courseList: [[]] , // 在这里定义全局的课程表数组
  onLaunch: function () {
    this.globalData = {
      courseList:[]
    }
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;  
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },
  globalData: {
    courseList: []
  }
});
