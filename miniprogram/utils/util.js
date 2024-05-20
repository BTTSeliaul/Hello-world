function getNowweek(startDate,totalWeek) {
  //console.log("Received today:")
  const nowDate = new Date().getTime(); // 获取当前日期的毫秒时间戳
  startDate = new Date(startDate); // 将开始日期转换为毫秒
  const time = nowDate - startDate; // 计算时间差异
  let nowWeek = Math.ceil(time / (1000 * 60 * 60 * 24 * 7)); // 转换为周数并向上取整
  if(nowWeek>totalWeek){
    nowWeek=1
  }
  return nowWeek;
}

module.exports={
getNowweek
}