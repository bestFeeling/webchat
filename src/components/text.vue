<script>
import data from '../data.js'
	export default {
		props: ['user'],
		data () {
			return {
				text: ''
			}
		},
		methods: {
			inputing (e) {
				if(e.ctrlKey && e.keyCode === 13 && this.text.length){
					data.save({
						userid: this.user.id,
						img:this.user.img,
						date: new Date(),
						message: this.text
					})
					this.text = ''
				}
			},
			drop (e) {
				var that = this
				var files = e.dataTransfer.files;
				console.log(files)
				for(var i in files){
					var file = files[i]
					var reader = new FileReader()

					reader.onload = (function(theFile){
						return function(e){
							console.log(base64)
							var base64 = e.target.result
							var title = theFile.name
							data.save({
								userid: that.user.id,
								img: that.user.img,
								date: new Date(),
								message: ["<img src=\"",base64,"\" style=\"max-width:200px;max-height:200px\">"].join('')
							})
						}
					})(file)
					reader.readAsDataURL(file)
				}
				console.log(e)
			}
		}
	}
</script>
<template>
	<div class="mtext">
		<textarea draggable="true" @drop.prevent="drop" placeholder="Ctrl + Enter send message"  v-model="text" @keyup="inputing">
			
		</textarea>
	</div>
</template>

<style>
	.mtext {
		height: 160px;
		border-bottom: 1px solid #ddd;
		border-right:1px solid #ddd;
	}
	.test{
		border:1px solid red;
		position: fixed;
		top:0;
		left: 0;
		width: 200px;
		height: 200px;
	}
	textarea {
		resize: none;
		padding: 10px;
		width: 100%;
		height: 100%;
		border: none;
		font-size: 20px;
		font-family: "Microsoft Yahei";
	}
</style>