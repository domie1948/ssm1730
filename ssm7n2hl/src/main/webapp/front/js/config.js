
var projectName = '高校共享单车管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '单车信息',
	url: './pages/danchexinxi/list.html'
}, 

{
	name: '高校资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/ssm7n2hl/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"单车信息","menuJump":"列表","tableName":"danchexinxi"}],"menu":"单车信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"区域信息","menuJump":"列表","tableName":"quyuxinxi"}],"menu":"区域信息管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"租赁订单","menuJump":"列表","tableName":"zulindingdan"}],"menu":"租赁订单管理"},{"child":[{"buttons":["查看","修改","删除","审核","租赁费用"],"menu":"还车订单","menuJump":"列表","tableName":"haichedingdan"}],"menu":"还车订单管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"租赁费用","menuJump":"列表","tableName":"zulinfeiyong"}],"menu":"租赁费用管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"信息统计","menuJump":"列表","tableName":"xinxitongji"}],"menu":"信息统计管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"高校资讯","tableName":"news"},{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","租赁"],"menu":"单车信息列表","menuJump":"列表","tableName":"danchexinxi"}],"menu":"单车信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","删除","还车"],"menu":"租赁订单","menuJump":"列表","tableName":"zulindingdan"}],"menu":"租赁订单管理"},{"child":[{"buttons":["查看"],"menu":"还车订单","menuJump":"列表","tableName":"haichedingdan"}],"menu":"还车订单管理"},{"child":[{"buttons":["查看","支付"],"menu":"租赁费用","menuJump":"列表","tableName":"zulinfeiyong"}],"menu":"租赁费用管理"}],"frontMenu":[{"child":[{"buttons":["查看","租赁"],"menu":"单车信息列表","menuJump":"列表","tableName":"danchexinxi"}],"menu":"单车信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
