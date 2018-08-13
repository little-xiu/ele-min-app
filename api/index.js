//获取位置接口
//参数: 
//latitude: 
//longitude:
//https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude=22.609725&longitude=114.029113
const Address_Url = "/restapi/bgs/poi/reverse_geo_coding";
//域名
const HOST = 'https://h5.ele.me';
//https://h5.ele.me/restapi/shopping/openapi/entries?latitude=22.609725&longitude=114.029113&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5
//获取banner
const Banner_Url = "/restapi/shopping/openapi/entries";
//参数:latitude longitude  templates: ["main_template","favourable_template","svip_template"]
//terminal: "h5"
//推荐商家
//https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=22.609725&longitude=114.029113&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5
const Shops_Url = "/restapi/shopping/v3/restaurants";
//参数: 
//latitude  longitude  offset: 0, limit: 8, extras: ["activities","tags"], extra_filters: home,terminal: h5
export default {
  Address_Url,
  HOST,
  Banner_Url,
  Shops_Url
}