// pages/laws/laws.js
import lawService from '../../services/law.service'

Page({
  data:{
    search:''
  },
  onLoad:function(params){
    // 页面初始化 params为页面跳转所带来的参数
    let searchText = params.search
    let type = params.type

    if (searchText) {
      this.setData({search: searchText})
      this.search(searchText)
    } else {
      lawService.getLawsByType(type).then((res) => {
        if(!res.data || !res.data.result || !res.data.result.value)
          return
        let laws = res.data.result.value.laws
        this.setData({list: laws})
      })
    }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})