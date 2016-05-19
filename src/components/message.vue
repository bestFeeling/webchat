<script>
	export default {
		props: ['messagelist','user','userlist'],
		filters: {
			avator (item) {
				return item.userid == this.user.id ?  this.user.img : item.img
			},
			time (date) {
				if(typeof date === 'string')
					date = new Date
				return date.getHours() + ':' + date.getMinutes()
			}
		},
		directives: {
			'scroll-bottom' (){
				Vue.nextTick( () => {
					this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight
				})
			}
		},
		ready () {
			console.log(this.messagelist)
		}
	}
</script>
<template>
	<div class="message" v-scroll-bottom="messagelist">
		<ul>
			<li v-for="item in messagelist">
				<p class="time"><span>{{item.date | time}}</span></p>
				<div class="main" :class="{ self : item.userid==this.user.id }">
					<img class="avator" width="30px" height="30px" :src="item | avator">
					<div class="text">{{{item.message}}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<style type="text/css">
	.message{
		height: calc(100% - 160px);
		padding: 10px 15px;
		overflow-y: scroll; 
	}
	.message li {
		list-style: none;
		margin-bottom: 15px;
	}
	.message ul{
		padding: 0
	}
	.time {
		text-align: center;
	}
	.time span {
		border-radius: 4px;
		background-color: #bbb;
		padding: 2px;
	}
	.text {
		display: inline-block;
		position: relative;
		border-radius: 4px;
		background-color: #aab;
		max-width: calc( 100% - 100px);
		line-height: 2.5;
		min-height: 30px;
		padding: 5px;
		word-break: all;
		font-size: 18px;
		text-align: left;
		max-width: 90%;
	}
	.avator{
		float: left;
		margin: 0 10px 0 0;
	}
	.self {
		text-align: right;
	}
	.self .avator {
		float: right;
		margin-left: 10px;
	}
	.self .text {
		text-align: left;
		
		background-color: #b2e281;
	}
	.text:before{
		content:" ";
		position: absolute;
		top: 9px;
		right: 100%;
		border:6px solid transparent;
		border-right-color: #aab;
	}
	.self .text:before{
		left: 100%;
		right: inherit;
		border-right-color: transparent;
        border-left-color: #b2e281;
	}
	
</style>