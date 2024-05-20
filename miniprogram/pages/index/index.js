import{
  getNowweek
}from '../../utils/util.js'
const app = getApp();

Page({

  data: {
    startDate:'2024/02/26',
    totalweek:20,
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
    //id: '',
    scheduleList: [], // 今天的日程列表
    selectedIndex: 0, // 默认显示课表
  },
  onLoad(options) {
    this.gettodaycourse()
    //const pages = getCurrentPages(); // 获取当前页面url
    //console.log('Event pages:', pages);
    
    
    console.log("课表数据：",app.globalData.courseList)
    this.setData({
     courseList:app.globalData.courseList
    })
    },


  // 点击导航按钮
  nav(e) {
    const index = parseInt(e.currentTarget.dataset.index); // 获取按钮的索引
    this.setData({
      selectedIndex: index, // 更新所选索引
    });
  },
  gettodaycourse(){
    let day=new Date().getDay()//获取周几
    console.log('Received today:',day)
    const nowweek=getNowweek(this.data.startDate,this.data.totalweek) //获取第几周
    console.log('Received todayweek:',nowweek)
    this.setData({
      day,
      nowweek
    })
    let day_1=day
    const todaycourseList = this.data.courseList.flat().filter(item => {
      if(day==0)day_1=7;
      return item.day == day_1 && item.week == nowweek;
    });
  todaycourseList.sort((a,b)=>{
    return a.startSection-b.startSection
  })
  console.log("jieguo:",todaycourseList)
  this.setData({
    todaycourseList
  })
    //}//创建给定数组一部分的浅拷贝
  },

 /*跳转到添加日程*/
 addche(e){
  wx.navigateTo({
    url: '/pages/schedule/index'
  })
},
// 全部日记显示
onShow: function () {
  // 获取当前全部日记内容
  var arryTemp = wx.getStorageSync('schedule');
  console.log("schedule:",arryTemp)
  this.setData({
    scheduleList: arryTemp
  })
}

});
