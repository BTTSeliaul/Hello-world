Page({
  data: {
    inputText: '',   // 存储输入内容
    sectionRange: [],  // 选择节数的范围
    startSectionIndex: 0, // 开始节数的索引
    endSectionIndex: 0, // 结束节数的索引
    
  },

  // 页面加载时初始化数据
  onLoad: function () {
    // 假设开始和结束节数的范围是从第一节课到最后一节课
    const totalSections = 12; // 一天有12节课
    const sectionRange = Array.from({ length: totalSections }, (v, i) => `${i + 1}节课`);
    this.setData({ sectionRange });
  },

  // 开始节数发生变化
  startSectionChange: function (e) {
    this.setData({
      startSectionIndex: e.detail.value
    });
  },

  // 结束节数发生变化
  endSectionChange: function (e) {
    this.setData({
      endSectionIndex: e.detail.value
    });
  },

  // 文字输入框
  getInputText(e) {
    // 记录输入的文字   
    this.setData({
      inputText: e.detail.value
    })
  },

  // 保存按钮
  saveButton() {
    // 如果输入是空或未选择节数，则返回
    if (this.data.inputText.length === 0 || !this.data.startSectionIndex||!this.data.endSectionIndex) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    // 获取本地缓存的之前的所有日程内容
    var schedule = wx.getStorageSync('schedule') || [];

    // 添加新日程到日程列表
    schedule.push({ 
      content: this.data.inputText, 
      startsection: this.data.startSectionIndex,
      endsection: this.data.endSectionIndex
    });

    // 将新的日程列表存入缓存
    wx.setStorageSync('schedule', schedule);

    // 提示保存成功
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000,
      success: () => {
        // 保存成功后返回上一页
        wx.navigateBack({
          delta: 1
        });
      }
    });
  },
   /*返回上一级*/
   fp(){
    wx.navigateBack({
      delta:1
    })
  }
})
