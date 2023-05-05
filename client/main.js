

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneBtn')
const submitNameBtn = document.getElementById('submitNameBtn')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then (res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then (res => {
            const data = res.data;
            alert(data);
    });
};


 submitNameBtn.addEventListener('submit', (event) => {
    event.preventDefault()

    let orbName = {
    name: submitNameBtn.value,
  };
  
  axios.post("http://localhost:4000/submit-name" , orbName)
    .then((res) => {
      const orbSubjects = res.data;
      console.log(orbSubjects);
    })
    .catch((err) => {
      console.log(err);
    });



 })

  




complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
