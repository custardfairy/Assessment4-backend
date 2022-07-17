const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const inspoBtn = document.getElementById("inspoButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const getInspo = () => {
    axios.get("http://localhost:4000/api/inspiration/")
    .then(res => {
        const data = res.data;
        alert(data);
    });

};

const bgchange =(id) => {
    document.body.style.background = 
        document.getElementById(id).innerHTML;
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
inspoBtn.addEventListener('click', getInspo)

const colorButtons = [...document.querySelectorAll('.colorButton')];
document.addEventListener('click', e => {
    if (!colorButtons.includes(e.target)) return;
    document.body.style.background = e.target.textContent;
});

/*document.forms["beyoncesInternet"].addEventListener("submit", async (event) => {
    event.preventDefault();
    const resp = await fetch(event.target.action, {
      method: "POST",
      body: new URLSearchParams(new FormData(event.target)),
    });
    const body = await resp.json();
    console.log(body);
  });*/