<template>
	<view class="content">
		<view class="title">
			{{title}}
		</view>
		<view class="art-content">
			<rich-text :nodes="string" class="richText"></rich-text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'',
				string:''
			}
		},
		methods: {
			
		},
		onLoad:function(e){
			console.log(e);
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/'+e.newsid,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
					this.title=res.data.title;
					this.string=res.data.content;
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
.content{
	padding: 10upx 2%;
	width: 96%;
	flex-wrap: wrap;
}
.title{
	line-height: 2em;
	font-weight: 700;
	font-size: 38upx;
}
.art-content{
	line-height: 2em;
	
}
</style>
