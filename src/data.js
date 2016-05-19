import sokcet_client from 'socket.io-client'
let client = sokcet_client('http://localhost:3003')
export default {
	fetch () {
		return data
	},
	save (obj) {
		client.emit('message',obj)
	}
}
client.on('init',function(userdata){
	let name = String.fromCharCode(65 + userdata.id)
	Vue.set(data.user, 'id' , userdata.id)
	Vue.set(data.user, 'name', 'user' + name)
	Vue.set(data.user, 'img' , 'public/user'+ name+'.png')
})
client.on('userlist',function(listdata){
	data.userList.length = 0 
	for(var i in listdata){
		let name = String.fromCharCode(65 + listdata[i].id)
		var o = {}
		o.id = listdata[i].id
		o.img = 'public/user'+ name+'.png'
		o.name = 'user' + name
		data.userList.push(o)
	}
})
client.on('message',function(messagedata){
	data.messageList.push(messagedata)
})

let data = {
	user: {
	},

	messageList: [
	],

	userList: [
	]
}
//http://fakeimg.pl/350x200/?text=World&font=lobster
