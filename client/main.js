const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const inspoBtn = document.getElementById("inspoButton")
const goalCategory = document.getElementById("goal-category");
const displaySection = document.getElementById("display-section");
const categoryBtn = document.getElementById("category-submit");
const postAdviceBtn = document.getElementById("add-advice-btn");
const categoryInput = document.getElementById("add-category");
const adviceInput = document.getElementById("add-advice");
const deleteCatinput = document.getElementById("delete-category-input");
const deleteCatBtn = document.getElementById("delete-category-btn");

const baseURL = `http://localhost:4000/api`;

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getInspo = () => {
  axios.get("http://localhost:4000/api/inspiration/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const bgchange = (id) => {
  document.body.style.background = document.getElementById(id).innerHTML;
};

// complimentBtn.addEventListener("click", getCompliment);
// fortuneBtn.addEventListener("click", getFortune);
// inspoBtn.addEventListener("click", getInspo);

const colorButtons = [...document.querySelectorAll(".colorButton")];
document.addEventListener("click", (e) => {
  if (!colorButtons.includes(e.target)) return;
  document.body.style.background = e.target.textContent;
});

/*const getAdvice = () => {
    displaySection.innerHTML = ``
    axios.get(`${baseURL}/goaladvice?category=$
    {goalCategory.value}
});*/
const displayAdvice = (advice) => {
  const showAdvice = document.createElement("h4");
  showAdvice.textContent = advice;
  displaySection.appendChild(showAdvice);
};

const getAdviceHandler = () => {
  displaySection.innerHTML = ``;
  axios
    .get(`${baseURL}/goal/advice?category=${goalCategory.value}`)
    .then((res) => {
      console.log(res.data);
      displayAdvice(res.data.advice);
    })
    .catch((err) => console.log(err));
};

const postAdviceHandler = () => {
  const body = {
    category: categoryInput.value,
    advice: adviceInput.value,
  };
  axios
    .post(`${baseURL}/goal/advice`, body)
    .then((res) => {
      console.log(res.data);
      categoryInput.value = ``;
      adviceInput.value = ``;
      displayAdvice(res.data.advice);
      const newOption = document.createElement("option");
      newOption.textContent = res.data.category;
      newOption.value = res.data.category.toLowerCase();
      goalCategory.appendChild(newOption);
    })
    .catch((err) => console.log(err));
};

const deleteCatHandler = () => {
  const params = deleteCatinput.value.toLowerCase();
  axios
    .delete(`${baseURL}/goal/${params}`)
    .then((res) => {
      displaySection.innerHTML = ``;
      alert(res.data);
    })
    .catch((err) => console.log(err));
};
// a failed experiment follows:
/*document.forms["beyoncesInternet"].addEventListener("submit", async (event) => {
    event.preventDefault();
    const resp = await fetch(event.target.action, {
      method: "POST",
      body: new URLSearchParams(new FormData(event.target)),
    });
    const body = await resp.json();
    console.log(body);
  });*/

complimentBtn.addEventListener("click", getCompliment);
categoryBtn.addEventListener("click", getAdviceHandler);
postAdviceBtn.addEventListener("click", postAdviceHandler);
deleteCatBtn.addEventListener("click", deleteCatHandler);
fortuneBtn.addEventListener("click", getFortune);
inspoBtn.addEventListener("click", getInspo);