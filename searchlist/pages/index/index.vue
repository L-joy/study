<template>
	<view class="content">
		<view class="search-box">
			<!-- mSearch组件 如果使用原样式，删除组件元素-->
			<!-- <mSearch class="mSearch-input-box" :mode="1" :placeholder="defaultKeyword" @search="doSearch(false)" @input="inputChange" @confirm="doSearch(false)" 
			v-model="keyword"></mSearch> -->
			<mSearch :show="false" radius="14" class="mSearch-input-box" :placeholder="defaultKeyword" @search="doSearch(false)" @input="inputChange" @confirm="doSearch(false)" 
			v-model="keyword">
			</mSearch>
			<!-- 原样式 如果使用原样式，恢复下方注销代码 -->
			<!-- 			
			<view class="input-box">
				<input type="text" :placeholder="defaultKeyword" @input="inputChange" v-model="keyword" @confirm="doSearch(false)"
				 placeholder-class="placeholder-class" confirm-type="search">
			</view>
			<view class="search-btn" @tap="doSearch(false)">搜索</view> 
			-->
			<!-- 原样式 end -->
		</view>
		<view class="search-keyword" v-show="show" @touchstart="blur">
			<scroll-view class="keyword-list-box" v-show="isShowKeywordList" scroll-y>
				<view class="keyword-entry" hover-class="keyword-entry-tap" v-for="row in keywordList" :key="row.keyword">
					<view class="keyword-text" @tap="doSearch(row.keyword)">
						<rich-text :nodes="row.htmlStr"></rich-text>
					</view>
					<view class="keyword-img" @tap="setkeyword(row)">
						<image src="/static/HM-search/back.png"></image>
					</view>
				</view>
			</scroll-view>
			<scroll-view class="keyword-box" v-show="!isShowKeywordList" scroll-y>
				<view class="keyword-block" v-if="oldKeywordList.length>0">
					<view class="keyword-list-header">
						<view>搜索历史</view>
						<view>
							<image @tap="oldDelete" src="/static/HM-search/delete.png"></image>
						</view>
					</view>
					<view class="keyword">
						<view v-for="(keyword,index) in oldKeywordList" @tap="doSearch(keyword)" :key="index">{{keyword}}</view>
					</view>
				</view>
				<!-- <view class="keyword-block">
					<view class="keyword-list-header">
						<view>热门搜索</view>
						<view>
							<image @tap="hotToggle" :src="'/static/HM-search/attention'+forbid+'.png'"></image>
						</view>
					</view>
					<view class="keyword" v-if="forbid==''">
						<view v-for="(keyword,index) in hotKeywordList" @tap="doSearch(keyword)" :key="index">{{keyword}}</view>
					</view>
					<view class="hide-hot-tis" v-else>
						<view>当前搜热门搜索已隐藏</view>
					</view>
				</view> -->
			</scroll-view>
		</view>
		<view class="goodsList" v-show="!show">
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in goodsList" :key="index">
					<view class="uni-media-list">
						<view class="list-top">
							<image class="uni-media-list-logo" :src="item.imgsrc"></image>
							<view class="uni-media-list-body">
								<view class="uni-media-list-text-title">{{item.title}}</view>
								<view class="uni-media-list-text-label">{{item.content}}</view>
								<view class="uni-media-list-text-address">{{item.address}}</view>
							</view>
						</view>
						<view class="list-bottom">
							<view class="list-content" v-for="(item,index) in item.goodsPrice" :key="index">
								<text class="list-content-left">{{item.type}}</text>
								<text class="list-content-right">
									<text class="list-vip">
										<text class="vip">{{item.vip}}</text>
									</text>
									<text class="price">{{item.price}}</text>
								</text>
							</view>
						</view>
						
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	//引用mSearch组件，如不需要删除即可
	import mSearch from '@/components/mehaotian-search-revision/mehaotian-search-revision.vue';
	export default {
		data() {
			return {
				news:[],
				defaultKeyword: "",
				keyword: "",
				oldKeywordList: [],
				hotKeywordList: [],
				keywordList: [],
				forbid: '',
				isShowKeywordList: false,
				isShowGoodsList:false,
				show:true,
				goodsList:[
						{
						imgsrc:'/static/img.png',
						title:'桃花源禅意民宿',
						content:'钓鱼|采摘|避暑|私汤|山庄',
						address:'西安·长安|12.20KM',
						goodsPrice:[{
							          type:'单人间',
									  vip:'会员价￥150',
									  price:'￥180'
						           },
								   {
								   	  type:'标准间',
								   	  vip:'会员价￥150',
								   	  price:'￥180'
								   },
								   ]
					    },
						{
						imgsrc:'/static/img.png',
						title:'桃花源禅意民宿',
						content:'钓鱼|采摘|避暑|私汤|山庄',
						address:'西安·长安|12.20KM',
						goodsPrice:[{
							          type:'单人间',
									  vip:'会员价￥150',
									  price:'￥180'
						           },
								   {
								   	  type:'标准间',
								   	  vip:'会员价￥150',
								   	  price:'￥180'
								   },
								   ]
						},
						{
						imgsrc:'/static/img.png',
						title:'桃花源禅意民宿',
						content:'钓鱼|采摘|避暑|私汤|山庄',
						address:'西安·长安|12.20KM',
						goodsPrice:[{
							          type:'单人间',
									  vip:'会员价￥150',
									  price:'￥180'
						           },
								   {
								   	  type:'标准间',
								   	  vip:'会员价￥150',
								   	  price:'￥180'
								   },
								   ]
						},
						{
						imgsrc:'/static/img.png',
						title:'桃花源禅意民宿',
						content:'钓鱼|采摘|避暑|私汤|山庄',
						address:'西安·长安|12.20KM',
						goodsPrice:[{
							          type:'单人间',
									  vip:'会员价￥150',
									  price:'￥180'
						           },
								   {
								   	  type:'标准间',
								   	  vip:'会员价￥150',
								   	  price:'￥180'
								   },
								   ]
						},
						{
						imgsrc:'/static/img.png',
						title:'桃花源禅意民宿',
						content:'钓鱼|采摘|避暑|私汤|山庄',
						address:'西安·长安|12.20KM',
						goodsPrice:[{
							          type:'单人间',
									  vip:'会员价￥150',
									  price:'￥180'
						           },
								   {
								   	  type:'标准间',
								   	  vip:'会员价￥150',
								   	  price:'￥180'
								   },
								   ]
						},
						{
						imgsrc:'/static/img.png',
						title:'桃花源禅意民宿',
						content:'钓鱼|采摘|避暑|私汤|山庄',
						address:'西安·长安|12.20KM',
						goodsPrice:[{
							          type:'单人间',
									  vip:'会员价￥150',
									  price:'￥180'
						           },
								   {
								   	  type:'标准间',
								   	  vip:'会员价￥150',
								   	  price:'￥180'
								   },
								   ]
						},
						{
						imgsrc:'/static/img.png',
						title:'桃花源禅意民宿',
						content:'钓鱼|采摘|避暑|私汤|山庄',
						address:'西安·长安|12.20KM',
						goodsPrice:[{
							          type:'单人间',
									  vip:'会员价￥150',
									  price:'￥180'
						           },
								   {
								   	  type:'标准间',
								   	  vip:'会员价￥150',
								   	  price:'￥180'
								   },
								   ]
						},
						{
						imgsrc:'/static/img.png',
						title:'桃花源禅意民宿',
						content:'钓鱼|采摘|避暑|私汤|山庄',
						address:'西安·长安|12.20KM',
						goodsPrice:[{
							          type:'单人间',
									  vip:'会员价￥150',
									  price:'￥180'
						           },
								   {
								   	  type:'标准间',
								   	  vip:'会员价￥150',
								   	  price:'￥180'
								   },
								   ]
						}
						
						
						
						
					]
				
			}
		},
		onLoad() {
			this.init();
			uni.request({
				url: 'http://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					this.news = res.data;
					uni.hideLoading();//关闭加载
					
				},
				fail: () => {},
				complete: () => {}
			});
		},
		components: {
			//引用mSearch组件，如不需要删除即可
			mSearch
		},
		methods: {
			init() {
				this.loadDefaultKeyword();
				this.loadOldKeyword();
				this.loadHotKeyword();

			},
			blur(){
				uni.hideKeyboard()
			},
			//加载默认搜索关键字
			loadDefaultKeyword() {
				//定义默认搜索关键字，可以自己实现ajax请求数据再赋值,用户未输入时，以水印方式显示在输入框，直接不输入内容搜索会搜索默认关键字
				this.defaultKeyword = "商户|产品|场景";
			},
			//加载历史搜索,自动读取本地Storage
			loadOldKeyword() {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						var OldKeys = JSON.parse(res.data);
						this.oldKeywordList = OldKeys;
					}
				});
			},
			//加载热门搜索
			loadHotKeyword() {
				//定义热门搜索关键字，可以自己实现ajax请求数据再赋值
				this.hotKeywordList = ['温泉山庄', '温泉山庄', '温泉山庄', '温泉山庄', '蓝牙音箱', '笔记本电脑', '鼠标垫', 'USB', 'USB3.0'];
			}, 
			//监听输入
			inputChange(event) {
				console.log(event);
				//兼容引入组件时传入参数情况
				var keyword = event.detail?event.detail.value:event;
				if (!keyword) {
					this.keywordList = [];
					this.isShowKeywordList = false;
					return;
				}
				this.isShowKeywordList = true;
				//以下示例截取淘宝的关键字，请替换成你的接口
				uni.request({
					url: 'https://suggest.taobao.com/sug?code=utf-8&q=' + keyword, //仅为示例
					success: (res) => {
						this.keywordList = this.drawCorrelativeKeyword(res.data.result, keyword);
					}
				});
			},
			//高亮关键字
			drawCorrelativeKeyword(keywords, keyword) {
				var len = keywords.length,
					keywordArr = [];
				for (var i = 0; i < len; i++) {
					var row = keywords[i];
					//定义高亮#9f9f9f
					var html = row[0].replace(keyword, "<span style='color: #9f9f9f;'>" + keyword + "</span>");
					html = '<div>' + html + '</div>';
					var tmpObj = {
						keyword: row[0],
						htmlStr: html
					};
					keywordArr.push(tmpObj)
				}
				return keywordArr;
			},
			//顶置关键字
			setkeyword(data) {
				this.keyword = data.keyword;
			},
			//清除历史搜索
			oldDelete() {
				uni.showModal({
					content: '确定清除历史搜索记录？',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.oldKeywordList = [];
							uni.removeStorage({
								key: 'OldKeys'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//热门搜索开关
			hotToggle() {
				this.forbid = this.forbid ? '' : '_forbid';
			},
			//执行搜索
			doSearch(key) {
				key = key ? key : this.keyword ? this.keyword : this.defaultKeyword;
				console.log(key);
				this.keyword = key;
				this.saveKeyword(key); //保存为历史 
				this.isShowKeywordList = false;
				this.isShowGoodsList = true;
				this.show = false;
				//显示消息提示框
				// uni.showToast({
				// 	title: key,
				// 	icon: 'none',
				// 	duration: 2000
				// });
				//以下是示例跳转淘宝搜索，可自己实现搜索逻辑
				//#ifdef APP-PLUS
				plus.runtime.openURL(encodeURI('taobao://s.taobao.com/search?q=' + key));
				//#endif
				//#ifdef H5
				window.location.href = 'taobao://s.taobao.com/search?q=' + key
				//#endif
			},
			//保存关键字到历史记录
			saveKeyword(keyword) {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						console.log(res.data);
						var OldKeys = JSON.parse(res.data);
						var findIndex = OldKeys.indexOf(keyword);
						if (findIndex == -1) {
							OldKeys.unshift(keyword);
						} else {
							OldKeys.splice(findIndex, 1);
							OldKeys.unshift(keyword);
						}
						//最多10个纪录
						OldKeys.length > 10 && OldKeys.pop();
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					},
					fail: (e) => {
						var OldKeys = [keyword];
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKeywordList = OldKeys; //更新历史搜索
					}
				});
			}
		}
	}
</script>
<style>
	view{display:block;}
	.uni-media-list-body{
		height: auto;
	}
	.uni-media-list-text-top{
		line-height: 1.6em;
	}
	.search-box {width:100%;height: 88upx;display:flex;justify-content:center; align-items: center;}
	.search-box .mSearch-input-box{width: 92%; height: 56upx;display:flex;justify-content:center; align-items: center;}
	.search-box .input-box {width:85%;flex-shrink:1;display:flex;justify-content:center;align-items:center;}
	.search-box .search-btn {width:15%;margin:0 0 0 2%;display:flex;justify-content:center;align-items:center;flex-shrink:0;font-size:28upx;color:#fff;background:linear-gradient(to right,#ff9801,#ff570a);border-radius:60upx;}
	.search-box .input-box>input {width:100%;height:60upx;font-size:32upx;border:0;border-radius:60upx;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 3%;margin:0;background-color:#ffffff;}
	.placeholder-class {color:#9e9e9e;}
	.search-keyword {width:100%;background-color:rgb(242,242,242);}
	.keyword-list-box {height:calc(100vh - 110upx);padding-top:10upx;border-radius:20upx 20upx 0 0;background-color:#fff;}
	.keyword-entry-tap {background-color:#eee;}
	.keyword-entry {width:94%;height:80upx;margin:0 3%;font-size:30upx;color:#333;display:flex;justify-content:space-between;align-items:center;border-bottom:solid 1upx #e7e7e7;}
	.keyword-entry image {width:60upx;height:60upx;}
	.keyword-entry .keyword-text,.keyword-entry .keyword-img {height:80upx;display:flex;align-items:center;}
	.keyword-entry .keyword-text {width:90%;}
	.keyword-entry .keyword-img {width:10%;justify-content:center;}
	.keyword-box {height:calc(100vh - 110upx);border-radius:20upx 20upx 0 0;background-color:#fff;}
	.keyword-box .keyword-block {padding:20upx 0;}
	.keyword-box .keyword-block .keyword-list-header {width:87%;font-size:28upx;font-weight:400;margin-left: 52upx;
color:rgba(51,51,51,1);display:flex;justify-content:space-between;}
	.keyword-box .keyword-block .keyword-list-header image {width:40upx;height:40upx;}
	.keyword-box .keyword-block .keyword {width:94%;padding-left: 32upx;  display:flex;flex-flow:wrap;justify-content:flex-start; }
	.keyword-box .keyword-block .hide-hot-tis {display:flex;justify-content:center;font-size:28upx;color:#6b6b6b;}
	.keyword-box .keyword-block .keyword>view {display:flex;justify-content:center;align-items:center;padding:0 20upx;margin:32upx 20upx 30upx 0;border-radius: 8upx;height:34upx;font-size:28upx;background-color:rgb(242,242,242);color:rgba(51,51,51,1);font-family:PingFangSC-Regular;}
	.hidden{
		display: none;
	}
	.show{
		diaplay:block;
	}
	.goodsList{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background:rgba(255,255,255,1);
	}
	.uni-list-cell{
		width:343px;
		height:185px;
		margin-top: 12px;
		background-color:rgba(255,255,255,1);
		box-shadow:0px 2px 22px 0px rgba(0,0,0,0.05);
		border-radius:12px;
		border: 1px solid black;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.uni-media-list{
		width: 100%;
		height: 100%;
	}
	.list-top{
		width: 100%;
		height: 122px;
		display: flex;
	}
	.uni-media-list-logo{
		width:110px;
		height:110px;
		margin:12px 0 0 10px;
		border: 1px solid black;
		border-radius:6px;
	}
	.uni-media-list-body{
		margin-left:10px;
		
	}
	.uni-media-list-text-title{
		margin-top:12px;
		font-size:13px;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(74,74,74,1);
		
	}
	.uni-media-list-text-label{
		margin-top:3px;
		font-size:11px;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(155,155,155,1);
		
	}
	.uni-media-list-text-address{
		margin-top:57px;
		font-size:11px;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(155,155,155,1);
	}
	.list-bottom{
		width: 100%;
		height: 63px;
		display: flex;
		flex-direction: column;
	}
	.list-content{
		width: 95%;
		display: flex;
		margin-left: 9px;
		margin-top: 5px;
		justify-content: space-between;
		align-items: center;
	}
	.list-content-left{
		font-size:13px;
		font-family:PingFangSC-Medium;
		font-weight:500;
		color:rgba(74,74,74,1);
	}
	.list-vip{
		width:78px;
	    height:16px;
		padding:1px 9px 1px 10px ;
		background-color:rgba(141,81,21,0.12);
		border-radius:9px;
		margin-right: 18px;
	}
	.vip{
		font-size:10px;
		font-family:PingFangSC-Regular;
		font-weight:400;
		color:rgba(141,81,21,1);
		
	}
	.price{
		font-size:13px;
		font-family:PingFangSC-Semibold;
		font-weight:600;
		color:rgba(254,84,0,1)
		
	}
</style>
