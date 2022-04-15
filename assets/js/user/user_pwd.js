$(function(){
    //校验密码框规格
    var form = layui.form
    form.verify({
        pass: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ],
        noAlike: function(value){
            if(value === $('[name="oldPwd"]').val()) {
                return '不能与原密码相同'
            }
        
        },
        rePsd: function(value){
            if(value !== $('[name="newPwd"]').val()) {
                return '值不相同！'
            }
        
        }   
    })
    //发起重置密码请求
    $('.layui-form').on('submit',function(e){
        e.preventDefault()
        $.ajax({
            method:'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success: function(res){
                if(res.status !== 0){
                    return layui.layer.msg('更改密码失败！')
                }
                layui.layer.msg('更改密码成功！')
                $('.layui-form')[0].reset()
            }
        })

    })

})