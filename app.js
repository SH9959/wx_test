// 小程序中的 JavaScript 代码

// 导入所需库
//const util = require('./util'); // 假设有一个名为 util 的文件，用于处理日期等功能

// 定义一个陪玩团类
class CompanionTeam {
  constructor(name) {
    this.name = name;
    this.members = [];
  }
  addMember(member) {
    this.members.push(member);
  }
  removeMember(member) {
    const index = this.members.indexOf(member);
    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }

  displayMembers() {
    console.log(`${this.name}的成员有：`);
    this.members.forEach(member => {
      console.log(member);
    });
  }
}

// 定义一个派单类
class Order {
  constructor(gameName, team, startTime, endTime) {
    this.gameName = gameName;
    this.team = team;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  toString() {
    return `游戏名称：${this.gameName}，派单团队：${this.team}，开始时间：${this.startTime}，结束时间：${this.endTime}`;
  }
}

// 主函数
function main() {
  // 创建一个陪玩团实例
  const companionTeam = new CompanionTeam("王者荣耀");

  // 添加成员
  companionTeam.addMember("小明");
  companionTeam.addMember("小红");
  companionTeam.addMember("小刚");

  // 显示成员列表
  companionTeam.displayMembers();

  // 创建一个派单实例
  const order1 = new Order("英雄联盟", "王者荣耀", new Date(2022, 0, 1, 10, 0), new Date(2022, 0, 1, 12, 0));

  // 显示派单信息
  console.log(order1);
}

// 导出主函数
module.exports = {
  main: main
};
