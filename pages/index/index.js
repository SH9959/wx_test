// index.js
Page({
  data: {
    playerName: '',
    gameId: '',
    orderAmount: ''
  },
  onInput(e) {
    this.setData({
      [e.detail.name]: e.detail.value
    });
  },
  onSubmit() {
    const { playerName, gameId, orderAmount } = this.data;
    if (!playerName || !gameId || !orderAmount) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }
    // 在这里处理派单逻辑，例如调用后端接口等。这里仅作示例，不执行实际操作。
    console.log('提交派单：', { playerName, gameId, orderAmount });
    wx.showToast({
      title: '派单成功',
      icon: 'success'
    });
    this.setData({
      playerName: '',
      gameId: '',
      orderAmount: ''
    });
  },
  // 新增按钮点击事件处理函数
  /*
  onButtonClick() {
    // 在这里处理按钮点击事件的逻辑
    console.log('按钮被点击了');
  }
  */
});
