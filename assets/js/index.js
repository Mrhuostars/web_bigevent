 $(function(){
    getaUserInFo()
    var layer = layui.layer
    $('#btnExit').on('click',function(){
        layer.confirm('您确定要退出么?', {icon: 3, title:'提示'}, function(index){
            location.href = './login.html' 
            localStorage.removeItem('token')
            layer.close(index);
          });
    })
 })
 function getaUserInFo(){
     $.ajax({
         mtheod: 'GET',
         url: '/my/userinfo ',
        //  beforeSend: function(xhr) { 
        //     xhr.setRequestHeader("Authorization", localStorage.getItem('token'));  
        // },
        // //  Headers: {
        // //     'Authorization': localStorage.getItem('token')
        //  },
         success: function(res){
             if(res.status !== 0) {
                 return layui.layer.msg('获取用户信息失败！')
             }
             renderAvatar(res.data)
         }
     })
 }
 //渲染头像函数
 function renderAvatar(user) {
     var user = user.nickname || user.username
     $('#welcome').html('您好！&nbsp;&nbsp'+ user)
     if(user.user_pic == null) {
         $('.layui-nav-img').hide()
         $('.text-avatar')
         .html(user[0].toUpperCase())
         .show()
     } else {
        $('.text-avatar').hide()
        $('.layui-nav-img')
        .attr('src',user.user_pic).show()
     }
 }