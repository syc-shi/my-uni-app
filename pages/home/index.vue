<template>
	<view>
		<div class="my-bg"></div>
		<image class="img" src="./logo.png" mode="widthFix"></image>
		<view v-for="(item, index) in items" :key="index">
			{{index}} - {{item.message}}
		</view>
		<view v-for="(val,key, index) in objects" :key="index">
			{{index}} - {{key}} - {{val}}
		</view>
		<template v-for="(item, index) in items" :key="index">
			<image class="icon-logo" src="@/static/logo.png" mode="widthFix"></image>
			<view>{{index}} - {{item.message}}</view>
		</template>
	</view>
</template>

<script lang="ts" setup>
	import {ref} from 'vue';
	// type ArrObj = {
	// 	message: string
	// } 
	const items = ref([{message:"foo"}, {message:"bar"}])
	const initObj = {
						title: 'How to do lists in Vue',
						author: 'Jane Doe',
						publishedAt: '2020-04-10'
					}
	const objects = ref(initObj);
</script>

<style>
	.my-bg{
		height: 200rpx;
		background-image: url('~@/static/logo.png');
		background-repeat: no-repeat;
	}
	.icon-logo{
		width: 30px;
	}
	.img{
		width: 30px;
	}
</style>
