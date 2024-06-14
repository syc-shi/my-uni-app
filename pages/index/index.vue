<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<button @click="enterHome">进入首页</button>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {ref} from 'vue';
	const title = ref("Hello")
	function enterHome(){
		uni.navigateTo({
			url:"/pages/home/index"
		})
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
		margin-bottom: 50rpx;
	}
</style>
