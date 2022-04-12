$(function(){
    $('#link_land').on('click',function(){
        $('.login-box').hide()
        $('.land-box').show()

    })
    $('#link_login').on('click',function(){
        $('.login-box').show()
        $('.land-box').hide()
    })
})