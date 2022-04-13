$(function(){
    //点击进入注册页面
    $('#link_land').on('click',function(){
        $('.login-box').hide()
        $('.land-box').show()

    })
    //点击进入登陆页面
    $('#link_login').on('click',function(){
        $('.login-box').show()
        $('.land-box').hide()
    })
    //表单验证
    var form = layui.form
    var layer = layui.layer
    form.verify({
        pwb: [/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'],
        repwb: function(value){
            var pwb = $('.land-box [name=password]').val()
            if (pwb !== value){
                return '两次密码不一样！'
            }

        }
    })
    //注册账号
    $('#form_land').on('submit',function(e){
        //阻止默认提交行为
        e.preventDefault()
        var data = { 
            username: $('#form_land [name=username]').val(),
            password: $('#form_land [name=password]').val()
        }
        //注册提交提交
        $.post('http://www.liulongbin.top:3007/api/reguser',data,function(res) {
            if (res.status !==0 ) {
                return console.log(layer.msg(res.message));
            }
            layer.msg(res.message)
            //模拟点击
            $('#link_login').click()

        })
    })
    //登陆账号
    $('#form-login').submit(function(e){
        //阻止默认提交行为
        e.preventDefault()
        $.ajax({
            url: '/api/login',
            method: 'POST',
            data: $(this).serialize(),
            success: function(res){
                if(res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg(res.message)
                localStorage.setItem('token', res.token)
                location.href = './index.html'
            }
        })

    })
        
})