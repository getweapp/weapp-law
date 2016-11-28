// pages/law/law.js
import lawService from '../../services/law.service'

Page({
  data:{},
  onLoad:function(params){
    // 页面初始化 params为页面跳转所带来的参数
     lawService.getLawById(params.id).then((res) => {
       if(!res.data || !res.data.result || !res.data.result.value)
          return
        let law = res.data.result.value
        console.log(law)
        this.setData({law: law})
     })
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