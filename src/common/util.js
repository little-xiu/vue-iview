// 当前日期格式化
export const CurrentDate = function () {
  let now = new Date(),
      yy = now.getFullYear(),
      mm = (now.getMonth() + 1),
      dd = now.getDate();
  return yy + '-' + (mm < 10 ? '0' + mm : mm) + '-' + (dd < 10 ? '0' + dd : dd);
}
// 当前的下个月最后一天日期
export const currentLastDate = function () {
  var now = new Date(),
      yy = now.getFullYear(),
      mm = now.getMonth() + 2;
  var next = new Date(yy,mm,0);// 0都是取最后一天
  var nextyy = next.getFullYear(),
      nextmm = next.getMonth() + 1,
      nextdd = next.getDate();
  return nextyy + '-' + (nextmm < 10 ? '0' + nextmm : nextmm) + '-' + (nextdd < 10 ? '0' + nextdd : nextdd);
}
// 当前月份的下个月日期格式化
export const currentNextMonth = function () {
  var now = new Date(),
      yy = now.getFullYear(),
      mm = now.getMonth() + 2;
  var next = new Date(yy,mm,0);// 0都是取最后一天
  var nextyy = next.getFullYear(),
      nextmm = next.getMonth() + 1;
  return nextyy + '-' + (nextmm < 10 ? '0' + nextmm : nextmm);
}
// 获取3岁小一个月的出生日期
export const currentThreeDate = function () {
  var now = new Date(),
      yy = (now.getFullYear() - 3),
      mm = now.getMonth() + 2,
      dd = now.getDate();
  if (now.getMonth() === 11) {// 说明是12月份
    yy = yy + 1;
    mm = 1;
  }
  return yy + '-' + (mm < 10 ? '0' + mm : mm) + '-' + (dd < 10 ? '0' + dd : dd);
}
