// pages/index/index.js
import{
  getNowweek
}from '../../utils/util.js'
const courseCacheKey = "courses"
const courseColorCacheKey = "courseColor"
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zpp:'aaa',
    startDate: '2024/02/26', // 自定义: 开学日期
    //nowWeek: 1, // 当前周
    totalWeek: 20, // 周总数
    showSwitchWeek: false, // 显示选择周数弹窗
    weekDayCount: 7,
    weekIndexText: ['一', '二', '三', '四', '五', '六', '日'],
    nowMonth: 5, // 当前周的月份
    timeArr: [
      '08:30', '09:15', '09:20', '10:05', '11:50', '14:00', '14:45', '15:50', '16:35', '16:40', '17:25', '19:00', '20:00', '12:15'
    ],
    courseList: [ [],[],[],[],[],[],[],[],[],[],[], // 二维数组，第一维是每一周。第二维是这一周的课程。如果这一周没有课程，需要有空数组填充。
      [
          {
              "kcbh": "06125303",
              "kxh": 1,
              "kcmc": "高等数学（Ⅰ）",
              "xf": 1.50,
              "kcsx": "必修",
              //"xkjd": "预置",
              "teacherName": "黄娟",
              "week": 12,
              "day": 1,
              "startSection": 1,
              "endSection": 2,
              "place": "教二403"
          },
          {
              "kcbh": "06125303",
              "kxh": 12,
              "kcmc": "数据结构",
              "xf": 1.50,
              "kcsx": "必修",
             // "xkjd": "预置",
              "teacherName": "卢超",
              "week": 12,
              "day": 2,
              "startSection": 3,
              "endSection": 4,
              "place": "教二403"
          },
          {
              "kcbh": "06125303",
              "kxh": 12,
              "kcmc": "c++程序语言设计",
              "xf": 1.50,
              "kcsx": "必修",
              //"xkjd": "预置",
              "teacherName": "张志庭",
              "week": 1,
              "day": 3,
              "startSection": 1,
              "endSection": 2,
              "place": "教二403"
          },
          {
              "kcbh": "06125303",
              "kxh": 12,
              "kcmc": "高数",
              "xf": 1.50,
              "kcsx": "必修",
             // "xkjd": "预置",
              "teacherName": "黄娟",
              "week": 1,
              "day": 4,
              "startSection": 5,
              "endSection": 6,
              "place": "教二403"
          },
          {
              "kcbh": "06125303",
              "kxh": 12,
              "kcmc": "数据结构",
              "xf": 1.50,
              "kcsx": "必修",
              //"xkjd": "预置",
              "teacherName": "卢超",
              "week": 12,
              "day": 5,
              "startSection": 3,
              "endSection": 4,
              "place": "教二403"
          },
          {
            "kcbh": "06125303",
            "kxh": 1,
            "kcmc": "高等数学",
            "xf": 1.50,
            "kcsx": "必修",
            //"xkjd": "预置",
            "teacherName": "黄娟",
            "week": 12,
            "day": 5,
            "startSection": 7,
            "endSection": 8,
            "place": "教二403"
        },
      ],
      [
          {
              "kcbh": "06021194",
              "kxh": 0,
              "kcmc": "大英",
              "xf": 3.00,
              "kcsx": "必修",
              //"xkjd": "预置",
              "teacherName": "赵学龙",
              "week": 13,
              "day": 1,
              "startSection": 1,
              "endSection": 2,
              "place": "教二403"
          },
          {
              "kcbh": "06021194",
              "kxh": 0,
              "kcmc": "网球课",
              "xf": 3.00,
              "kcsx": "必修",
             // "xkjd": "预置",
              "teacherName": "方银",
              "week": 13,
              "day": 2,
              "startSection": 3,
              "endSection": 4,
              "place": "体育馆"
          },
          {
            "kcbh": "06125303",
            "kxh": 1,
            "kcmc": "数据结构",
            "xf": 1.50,
            "kcsx": "必修",
            //"xkjd": "预置",
            "teacherName": "卢超",
            "week": 13,
            "day": 3,
            "startSection": 3,
            "endSection": 4,
            "place": "教二403"
          },
          {
              "kcbh": "06021194",
              "kxh": 0,
              "kcmc": "java",
              "xf": 3.00,
              "kcsx": "必修",
              //"xkjd": "预置",
              "teacherName": "杨林",
              "week": 13,
              "day": 4,
              "startSection": 5,
              "endSection": 6,
              "place": "教二403"
          },
          {
              "kcbh": "06021194",
              "kxh": 0,
              "kcmc": "java",
              "xf": 3.00,
              "kcsx": "必修",
              //"xkjd": "预置",
              "teacherName": "杨林",
              "week": 13,
              "day": 5,
              "startSection": 7,
              "endSection": 8,
              "place": "教二403"
          }
      ],
    ],

    
    courseColor: [
      "#8B97B1",
      "#FBD97D",
      "#3B98A0",
      "#0079FF",
      "#638E3E",
      "#47A992",
      "#7A3E3E",
      "#FF55BB",
      "#A0D8B3",
      "#539165",
      "#3A98B9",
      "#609966",
    ],
    weekCalendar: [1, 2, 3, 4, 5, 6, 7],
    firstEntry: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {
      windowWidth
    } = wx.getSystemInfoSync()
    this.setData({
      windowWidth
    })
    this.getWeekDates()
    this.getNowWeek()
    //this.getData()
    this.getTodayDate()
   app.globalData.courseList = this.data.courseList
   console.log("课表数据：",app.globalData.courseList)
  },
  navigateToTodayCourses() {
    // 确保数据已经设置
    app.globalData.courseList = this.data.courseList;
    console.log("导航前的全局课程数据:", app.globalData.courseList);
    
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },

  navigateToTodayCourses() {
    wx.navigateTo({
      url: '/miniprogram/pages/index/index',
      success: (res) => {
        console.log('Navigation success, sending data...');
      res.eventChannel.emit('sendcourse', this.data.courseList);
      console.log('Data sent:', this.data.courseList);
      },
    });
  },

// 假设课程表数据在某个事件触发后更新
//updateCourseList: function(newCourseList) {
  // 更新页面数据
 // this.setData({
 //   courseList: newCourseList
  //});
  // 存储到全局
 // const app = getApp();
 // app.globalData.courseList = newCourseList;
 // console.log("课程表数据已更新:", newCourseList);
//},

  selectWeek() {
    this.setData({
      showSwitchWeek: true
    })
  },

  switchWeek(e) {
    const week = e.currentTarget.dataset.week
    this.setData({
      showSwitchWeek: false
    })
    this.switchWeekFn(week)
  },

  // 切换周数
  switchWeekFn(week) {
    this.setData({
      nowWeek: week
    })
    this.getWeekDates()
  },

  hideSwitchWeek() {
    this.setData({
      showSwitchWeek: false
    })
  },

  getWeekDates() {
    const startDate = new Date(this.data.startDate)
    const addTime = (this.data.nowWeek - 1) * 7 * 24 * 60 * 60 * 1000
    const firstDate = startDate.getTime() + addTime
    const {
      month: nowMonth
    } = this.getDateObject(new Date(firstDate))
    const weekCalendar = []
    for (let i = 0; i < this.data.weekDayCount; i++) {
      const date = new Date(firstDate + i * 24 * 60 * 60 * 1000)
      const {
        day
      } = this.getDateObject(date)
      weekCalendar.push(day)
    }
    this.setData({
      nowMonth,
      weekCalendar
    })
  },
  getDateObject(date = new Date()) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return {
      year,
      month,
      day
    }
  },

  getNowWeek() {
    let nowWeek = getNowweek(this.data.startDate, this.data.totalWeek)
    this.setData({
      nowWeek
    })
    this.getWeekDates()
  },

  getData() {
    //后端未实现
    // 从缓存中获取数据
    const that=this
    const cache = wx.getStorageSync(courseCacheKey)
    const courseColorCache = wx.getStorageSync(courseColorCacheKey)
  
    // 如果缓存中有数据
    if (cache) {
      // 更新视图中的 courseList 数据
      this.setData({
        courseList: cache,
      }) 
      getCourseListRequest().then(res=>{
        that.setData({
          courseList:res.data
        })
        wx.setStorageSync(courseColorCacheKey, res.data)
      })
      // 如果缓存中没有课程颜色数据
      if (!courseColorCache) {
        // 调用 buildCourseColor 方法生成课程颜色
        this.buildCourseColor()
      } else {
        // 更新视图中的 courseColor 数据
        this.setData({
          courseColor: courseColorCache
        })
      }
      return
    }

  },
//切换周数
  swiperSwitchWeek(e) {
    // 检查事件的来源
    if (e.detail.source == '') {
      // 如果事件来源为空，设置 firstEntry 为 false 并返回
      this.setData({
        firstEntry: false
      })
      return
    }

    // 获取当前滑动到的索引
    const index = e.detail.current
    // 继续处理滑动事件
    this.switchWeekFn(index + 1)
  },

  buildCourseColor() {  // 让相同的课程有相同的颜色
    const courseColor = {}
    let colorIndex = 0
    this.data.courseList.map(item => {
      if (courseColor[item.kcmc] === undefined) {
        courseColor[item.kcmc] = this.data.colorList[colorIndex]
        colorIndex++
      }
    })
    wx.setStorageSync(courseColorCacheKey, courseColor)
    this.setData({
      courseColor
    })
  },

  // 获取今天日期
  getTodayDate() {
    const {
      month: todayMonth,
      day: todayDay
    } = this.getDateObject()
    this.setData({
      todayMonth,
      todayDay
    })
  },

  navCourseDetail(e) {
    console.log(e)
    const weekIndex = e.currentTarget.dataset.weekindex
    const dayIndex = e.currentTarget.dataset.dayindex
    wx.navigateTo({
      // 自定义跳转页面miniprogram\pages\course-detail
      url: `/pages/course-detail/course-detail?info=${JSON.stringify(this.data.courseList[weekIndex][dayIndex])}`,
    })
  }
  
})
