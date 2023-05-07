const complimentBtn = document.getElementById("complimentButton")
const rageBtn = document.getElementById("rageButton")
const postName = document.getElementById("post-name")
const postForm = document.getElementById('post-form')
const helpBtn = document.getElementById('helpBtn')


postForm.addEventListener('submit', (event) => {
event.preventDefault()

let name = {
    name: postForm.value

}

axios.post('http://localhost:4000/api/name/', name)
.then((res) => {
    const database = res.data
    //showDb(database)
    console.log(database);
})
.catch(() => {

})

})

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getRage = () => {
    axios.get("http://localhost:4000/api/Rage/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getHelp = () => {
    axios.get("http://localhost:4000/api/help/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
rageBtn.addEventListener('click', getRage)
helpBtn.addEventListener('click', getHelp)


// function showDb(db){
//     namesShownHereDiv.innerHTML = ''

//     for (let i = 0; i < db.length; i++){
//         let dataP = document.createElement('p')

//         dataP.innerHTML = `${db[i].name} has been added to the ORB`

//         namesShownHereDiv.appendChlid(dataP)

//     }
// }