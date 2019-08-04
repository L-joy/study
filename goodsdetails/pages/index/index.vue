<template>
	<view class="content">
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
</template>

<script>
	export default {
		data() {
			return {
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
					}
					
					
					
					
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color:rgba(255,255,255,1);
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
