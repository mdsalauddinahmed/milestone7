 


fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data => showUserNames(data));

function showUserNames(data){
       let  usercontainer = '';
       data.forEach(user => {
         usercontainer = usercontainer + `<div class="user">
        <h2> ${user.name}</h2>
         <p> ${user.email}</p> 
          <p> ${user.username}</p>
          <p> ${user.company.name}
              ${user.company.catchPhrase}
              ${user.company.bs}</p>
            </div>`
       });
       const userHtml= document.getElementById('user-container')
          userHtml.innerHTML= usercontainer;     
}