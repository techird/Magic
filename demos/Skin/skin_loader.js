baidu(function(){

baidu('#btn-load-skin').click(function(){
    var skinName = baidu('#skin-name').val();
    baidu('link.magic-theme').remove();
    baidu('<link></link>')
        .attr("rel", "stylesheet")
        .attr("type", "text/css")
        .attr("href", "../../resources/skin.php?name=" + skinName )
        .addClass('magic-theme')
        .appendTo('head');
}).click();

});