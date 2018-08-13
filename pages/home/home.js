// pages/home/home.js
import { getAddress, getBanners, getShops } from "../../services/handleRequest.js"
Page({
  data: {
    latitude:null,
    longitude: null,
    address: "",
    bannerList: [],
    limit: 8,
    shopsList: []
  },
  onReady: function () {
    //定位
    wx.getLocation({
      success: ({latitude,longitude})=> {
        this.setData({ latitude, longitude});
        //定位成功后,请求地址数据
        getAddress(latitude, longitude).then(data=>{
          this.setData({address:data.name})
        })
        //请求banner图标数据
        getBanners(latitude, longitude).then(data=>{
          this.setData({bannerList: data});
        })
        //请求推荐商家数据
        getShops(latitude, longitude,0,this.data.limit).then(data=>{
          this.setData({shopsList: data})
          // console.log(data)
        })
      },
    })
  },
  onShow: function () {
  
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  
  },

  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  }
})