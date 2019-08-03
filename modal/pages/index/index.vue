<template>
	<view class="content">
		<button @click="openPopup">打开弹出层</button>
		<uni-popup msg="" :show="true" type="bottom" ref="popup">
			啦啦啦啦啦
			<button type="primary" @click="closePopup">关闭弹出层</button>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	
	export default {
		components: {uniPopup},
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			openPopup(){
				this.$refs.popup.open()
			},
			closePopup(){
				this.$refs.popup.close()
			}

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	
</style>
