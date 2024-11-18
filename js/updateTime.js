function updateTime() {
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  var month = ("0" + (currentTime.getMonth() + 1)).slice(-2);
  var day = ("0" + currentTime.getDate()).slice(-2);
  
  // 获取 UTC 时间
  var utcHours = currentTime.getUTCHours();
  var utcMinutes = currentTime.getUTCMinutes();
  var utcSeconds = currentTime.getUTCSeconds();
  
  // 计算 CST 时间（假设为 UTC+8）
  var cstHours = utcHours + 8; // CST = UTC + 8
  if (cstHours >= 24) {
    cstHours -= 24; // 处理跨天情况
    day = ("0" + (parseInt(day) + 1)).slice(-2); // 增加一天
  }

  // 格式化时间
  var cstTimeString = "<strong style='color: red;'>CST：" + year + "-" + month + "-" + day + " " + ("0" + cstHours).slice(-2) + ":" + ("0" + currentTime.getMinutes()).slice(-2) + ":" + ("0" + currentTime.getSeconds()).slice(-2) + "</strong>";
  var utcTimeString = "UTC：" + year + "-" + month + "-" + day + " " + ("0" + utcHours).slice(-2) + ":" + ("0" + utcMinutes).slice(-2) + ":" + ("0" + utcSeconds).slice(-2);

  // 更新时间
  document.getElementById("system-time").innerHTML = cstTimeString + "<br>" + utcTimeString;
}

// 每秒更新一次时间
setInterval(updateTime, 1);
