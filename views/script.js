function postData(e){
    e.preventDefault()
    async function postingData (){
        try{
            const users = await axios.post('http://localhost:3000/post',{
            userName:document.getElementById('title').value,
            email:document.getElementById('mail').value,
            mobileNumber:document.getElementById('number').value,
            password:document.getElementById('password').value
        })
        console.log(`logging here --> ${users.data}`,users.data)
        showExpenseList(users.config.data)

    }      
        catch(err){
            console.log(err)
        }     
    }
    postingData()
}

function showExpenseList(data) {
    let info = JSON.parse(data) 
    console.log(info.userName,info.email)
	// creating li to display on the UI
	const li = document.createElement("li");
	li.id = `${info.id}`
	li.appendChild(document.createTextNode(`${info.userName}- ${info.email}-${info.mobileNumber}`));
	itemList.appendChild(li)

    let delBtn = document.createElement("button");
	delBtn.id = "delete";
	delBtn.appendChild(document.createTextNode("delete"));
	delBtn.onclick = function () {
		deleteUser(info.id)
	}
	li.appendChild(delBtn)
	itemList.appendChild(li)
    

    // const parentNode = document.getElementById('itemList')
    // const childHTML = li+delBtn
    // parentNode.innerHTML = parentNode+childHTML
}

async function deleteUser(userID) {
    console.log(userID)
    try{
        await axios.delete(`http://localhost:3000/delData/${userID}`)
        removeUser(userID)
        }catch(err){
			console.log(err);
		};		
}

// removing details on the UI
function removeUser(userID) {
	let ul = document.getElementById("itemList")
	let li = document.getElementById(userID)
	ul.removeChild(li)
}

window.addEventListener("DOMContentLoaded", async function(){
    try{
        const onDomLoad = await axios.get("http://localhost:3000/getData")
        // console.log(onDomLoad.data.users)
        info = onDomLoad.data.users
        console.log(info)
        for (let i = 0; i < info.length; i++) {
            showExpenseList(JSON.stringify(info[i]));
    }
    }catch(err){
        console.log(err);
    };	
});