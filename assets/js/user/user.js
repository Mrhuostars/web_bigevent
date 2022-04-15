
$(function(){
    var form = layui.form
    var layer = layui.layer
    form.verify({
        nickname: function(value){
            if(value.length > 6) {
                return '不能超过6个懂不？？？'
            }
        }
    })
    initUserInfo()
    function initUserInfo(){
        $.ajax({
            mtheod: 'GET',
            url: '/my/userinfo',
            success: function(res){
                if (res.status !== 0) {
                    return layui.layer.msg('获取用户信息失败！')
    
                }
                form.val('formUserInFo', res.data);
            }
        })
    }
    $('#btnReset').on('click',function(e){
        e.preventDefault()
        initUserInfo()
    })
    $('.layui-form').on('submit',function(e){
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function(res){
                if(res.status !== 0){
                    return layer.msg('更新信息失败！')
                }
                layer.msg(res.message)
                console.log(res);
                window.parent.getaUserInFo()


            }
        })
    })
})
