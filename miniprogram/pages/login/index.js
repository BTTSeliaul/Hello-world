const db=wx.cloud.database()
// 全局存储，方便随时调用
const app = getApp()

Page({
  data: {
    userInfo:[],
    show:false //展示登录按钮
  },
  onLoad: function() {     
  },
  login() { 
    var that = this
    wx.getUserProfile({
      desc: '完善信息',  // 提示信息
      success(res){
        var user = res.userInfo
        app.globalData.userInfo = user   //把user里面的数据放在globalData里面使全页面可以调用
        that.setData({
          userInfo:user,
          show:true //隐藏登录按钮

        })
        //云开发用以下方式 java 或者 php 做的数据表 我们要传则需要用request
        //需要检查是否之前已经授权登录了
        wx.cloud.database().collection('login_users').where({
          _openid: app.globalData.openid
        }).get({
          success(){
            console.log(res);
            if (condition) {
              wx.cloud.database().collection('login_users').add({
                data:{
                  avatarUel:user.avatarUrl,
                  nickName: user.nickName,
                },
                success(res){
                  wx.showToast({
                    title: '登录成功',
                    duration: 1000,
                    mask: true,
                  })
                }
              })
            }else{
              this.setData({
                userInfo:res.data[0]
              })
            }
          }

        })
      }
    })
  }
})
