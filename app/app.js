var i = 0;
function createUser() {
    i++; 
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            const userAbout = document.createElement("tr");
            const Name = document.createElement("td");
            let imgScr = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3df876c1-dbd1-4ae5-af1f-a158e64bb298/dddsjwz-e8f5e008-d1aa-40c9-89da-ea595e177714.png/v1/fill/w_50,h_50,strp/burps_by_67fatz_dddsjwz-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAiLCJwYXRoIjoiXC9mXC8zZGY4NzZjMS1kYmQxLTRhZTUtYWYxZi1hMTU4ZTY0YmIyOThcL2RkZHNqd3otZThmNWUwMDgtZDFhYS00MGM5LTg5ZGEtZWE1OTVlMTc3NzE0LnBuZyIsIndpZHRoIjoiPD01MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.64_eMjwqt00qivYXZjcMf0yU7PIXcL36AsMmyNYGVKc";
            Name.innerHTML = `<div><img src=${imgScr}> <span> <span class="name"> ${res[i].name} </span>  <br> ${res[0].email} </span></div>  `;
            const userName = document.createElement("td");
            userName.innerHTML = res[i].username;
            const phone = document.createElement("td");
            phone.innerHTML = res[i].phone;
            const website = document.createElement("td");
            website.innerHTML = res[i].website;
            const adres = document.createElement("td");
            adres.innerHTML = res[i].address.city;
            userAbout.append(Name);
            userAbout.append(userName);
            userAbout.append(phone);
            userAbout.append(website);
            userAbout.append(adres);
            userAbout.classList.add('userAbout');
            userAbout.id = `user${i}About`;
            document.getElementById('usersAbout').append(userAbout);
        });
}
function deleteUser(){
    const deteletedElement = document.getElementById(`user${i}About`);
    document.getElementById('usersAbout').remove(deteletedElement);
    i--;
}