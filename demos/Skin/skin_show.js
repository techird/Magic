baidu(function(){

/**
 * Suggestion 初始化
 */
magic.setup.suggestion('magic-suggestion', {
    getData: function(key){
        var me = this;         
        baidu.ajax({
            url : '../Suggestion/service.json',
            type: 'GET',
            dataType: 'text',
            success: function( data ){
                me.receiveData( key, eval(data) );
            }
        });
    }
});

/**
 * Carousel 初始化
 */
new magic.Carousel({
    viewSize: 4,
    originalIndex: 0,
    items: [
        {content: '<img src="../Carousel/item/0.png"/>'},
        {content: '<img src="../Carousel/item/1.png"/>'},
        {content: '<img src="../Carousel/item/2.png"/>'},
        {content: '<img src="../Carousel/item/3.png"/>'},
        {content: '<img src="../Carousel/item/4.png"/>'},
        {content: '<img src="../Carousel/item/5.png"/>'},
        {content: '<img src="../Carousel/item/6.png"/>'}
    ]
}).render('magic-carousel');

/**
 * Pager 初始化
 */
new magic.Pager({
    'currentPage' : 1, 'totalPage' : 8
}).render('magic-pager');

/**
 * DatePicker 初始化
 */
magic.setup.datePicker('magic-date-picker', {
    title: {
        enable: true
    }
});


/**
 * ComboBox 初始化
 */
new magic.ComboBox({
    items : [
        {'value' : 0, 'content' : '选项1'},
        {'value' : 1, 'content' : '选项2'},
        {'value' : 2, 'content' : '选项3'}
    ],
    width : 200
}).render('#magic-combox');

/**
 * Dialog 初始化
 */
var dialog = new magic.Dialog({
    draggable: true,
    titleText: "对话框",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ",
    width: 400,
    height: 300,
    left: 120,
    top: 250
});
dialog.render('magic-dialog');
dialog.hide();
baidu('#btn-open-magic-dialog').click( function(){
    dialog.show();
});
baidu('#btn-open-magic-alert').click(function() {
    magic.alert('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor .', '提示消息', {
        label: '知道了',
        callback: function(){
            console && console.log('he knows.');
        }
    });
});
baidu('#btn-open-magic-confirm').click(function() {
    magic.confirm('杨过的爷爷是杨铁心吗？', '提问', {
        label: '是的！',
        callback: function(){
            console && console.log('Corrent');
        }
    }, {
        label: '不是吧...',
        callback: function(){
            console && console.log('Incorrect');
        }
    });
});

/**
 * Slider 初始化
 */
new magic.Slider({
    direction: 'forward'
}).render('magic-slider');

/**
 * Tabs 初始化
 */
new magic.Tab({
    items: [
        {title: '项目一', content: 'hello world~1'},
        {title: '项目二', content: 'hello world~2'},
        {title: '项目三', content: 'hello world~3'}
    ]
}).render('magic-tabs');

// end ready
});