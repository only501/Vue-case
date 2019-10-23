Vue.component('li-article',{
    props:{
     article:{//属性的传值及其验证
      type:Object,//指定数据的类型；
      required:true//指定为比传字段
     }
    },
   data:function(){
     return { }
   },
    template:`
    <div class='article'>
    <img alt="头像" :src='article.author.avatar_url' :title='article.author.loginname'/>
    <div class='num'>
      <span v-text="article.reply_count"></span>
      <span>/</span>
      <span v-text="article.visit_count"></span>
    </div>
    <span class='label'>置顶</span>
    <span class='title' v-text="article.title" ></span>
    <span class='time' v-text="article.create_at"></span>
  </div>
    `
})