<script>
	export default {
		props: ['userlist','search'],
		filters: {
			search (list) {
				return list.filter( item => item.name.indexOf(this.search) > -1)
			}
		}
	}
</script>

<template>
	<div class="mlist">
		<ul>
			<li v-for="item in userlist | search" >
				<img class="avator" width="30" height="30" :alt="item.name" :src="item.img">
				<p class="name">{{item.name}}</p>
			</li>
		</ul>
	</div>
</template>
<style>
	.mlist li {
		padding:12px 15px;
		border-bottom: 1px solid #292c33;
		cursor: pointer;
		list-style: none;
	}
	.mlist ul{
		padding-left: 0px
	}
	.avator , .name {
		vertical-align: middle;
	}
	.avator {
		border-radius: 2px;
	}
	.name {
		line-height: 30px;
		display: inline-block;
		margin: 0 0 0 15px;
	}

</style>