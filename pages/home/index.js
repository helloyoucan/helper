// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    voiceText:'如何使用淘宝购物',
    voiceActive: false,
    cardList: [
      {
        url: '',
        title: '微信',
        subTitle: '使用指南',
        iconPath: '../../assets/svgs/Wechat.svg',
        bgColor: '#00c559',
      },
      {
        url: '',
        title: '支付宝',
        subTitle: '使用指南',
        iconPath: '../../assets/svgs/Alipay.svg',
        bgColor: '#00b4ff',
      },
      {
        url: '',
        title: '购物',
        subTitle: '使用指南',
        iconPath: '../../assets/svgs/shopping_cart.svg',
        bgColor: '#fe9c25',
      },
      {
        url: '',
        title: '短视频',
        subTitle: '使用指南',
        iconPath: '../../assets/svgs/TikTok.svg',
        bgColor: '#fe6e25',
      },
      {
        url: '',
        title: '常见图标',
        subTitle: '使用指南',
        iconPath: '../../assets/svgs/book.svg',
        bgColor: '#91d064',
      },
      {
        url: '',
        title: '防骗指南',
        subTitle: '',
        iconPath: '../../assets/svgs/shield.svg',
        bgColor: '#626fff',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  tapVoiceBtnEntry: function () {
    if(!this.voiceActive){
      this.setData({
        voiceActive: true
      })
    }
  
  },
  closeVoicePanel: function () {
    this.setData({
      voiceActive: false
    })
  }
})