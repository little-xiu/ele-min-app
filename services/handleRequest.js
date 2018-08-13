import API from "../api/index.js";
//域名  ../api/index.js
//const HOST = 'https://h5.ele.me';
//定位请求
export function getAddress (latitude, longitude) {
  return new Promise((resolve,reject)=>{
    wx.request({
      url: API.HOST + API.Address_Url,
      data: {
        latitude,
        longitude
      },
      success: (res) => {
        resolve(res.data)
      }
    })
  })
}

//banner图标的请求
export function getBanners(latitude, longitude) {
  return new Promise((resolve,reject)=>{
    wx.request({
      url: API.HOST + API.Banner_Url,
      data: {
        latitude,
        longitude,
        templates: ["main_template", "favourable_template", "svip_template"],
        terminal: "h5"
      },
      success: (res)=>{
        let data = res.data[0].entries.map(item=>{
          return {
            id: item.id,
            img: item.image_hash,
            name: item.name
          }
        })
        let data2 = [];
        while(data.length > 0) {
          data2.push(data.splice(0,10));
        }
        resolve(data2)
      }
    })
  })
}
//商家
export function getShops (latitude, longitude,offset,limit) {
  return new Promise((resolve,reject)=>{
    wx.request({
      url: API.HOST + API.Shops_Url,
      data: {
        latitude,
        longitude,
        offset, 
        limit, 
        extras: ["activities", "tags"], 
        extra_filters: "home", 
        terminal: "h5"
      },
      success: (res)=>{
        let data = res.data.items.map(({restaurant})=>{
          return {
            id: restaurant.id,
            name: restaurant.name,
            rating: restaurant.rating,
            img: restaurant.image_path,
            time: restaurant.float_minimum_order_amount
          }
        })
        resolve(data);
      }
    })
  })
}