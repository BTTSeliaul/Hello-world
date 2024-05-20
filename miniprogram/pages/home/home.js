Page({ 
  data: { 
    phone: '', 
    password:'' 
  }, 
// 导入 
  login: function () { 
    
      // 跳转至index页面
      wx.navigateTo({
        url: '/pages/cug/cug',
      })
  } 
}) 
