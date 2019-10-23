//1： new一个vue实例对象；
var vm = new Vue({
    el:'#app',
    data:{
        page:1,//控制第几页
        list:[],//承载下面的的数组；（文章的列表）
        loaded:false //加载中

    },
    // 对getArticleList调用；
    created:function(){
        this.getArticleList()
    },
    methods:{
        // 2:用axios调用接口；
     getArticleList:function(){
         var that = this;
         var url = `https://cnodejs.org/api/v1/topics?limit=6&page=${this.page}`
    // 用get调用接口；
    axios.get(url).then(function(data){
        console.log('成功',data.data.data)
        // 成功时执行
        that.list = data.data.data;
        that.loaded = true;//接口调用记得 切换过来；
    }).catch(function(err){
        console.log('失败',err)
    }).then(function(){
        console.log('..........')
    })
    },
    // 分页：
    cut:function(num){
        this.loaded = false;
        if(num ==='1'){
            var cutPage = this.page;
            this.page = (cutPage-1)<1? 1 : (cutPage-1)
        }else{
            this.page++
        }
        // 调用接口
        this.getArticleList()
    }
}
})