import AMapLoader from '@amap/amap-jsapi-loader'

export const getPlaceData2 = async (ne, sw) => {
  AMapLoader.load({
    key: '6740ceb6f57a6c10077a25f61b649d85',
    jscode: 'b5d05c082a1fba2f9a0b57d69829b224',
    version: '2.0',
    plugins: ['AMap.AutoComplete', 'AMap.PlaceSearch'],
  })
    .then(AMap => {
      var keywords = '北京大学'
      AMap.plugin('AMap.PlaceSearch', function () {
        var autoOptions = {
          city: '北京',
        }
        var placeSearch = new AMap.PlaceSearch(autoOptions)
        placeSearch.search(keywords, function (status, result) {
          console.log(result)
          // 搜索成功时，result即是对应的匹配数据
        })
      })
    })
    .catch(e => {
      console.log(e)
    })
}
