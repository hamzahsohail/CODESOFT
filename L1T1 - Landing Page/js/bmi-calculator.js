let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let male = document.getElementById("m");
let female = document.getElementById("f");
let form = document.getElementById("form");
let section3Left = document.getElementById("section3Left");
let section3Right = document.getElementById("section3Right");
let p3 = document.getElementById("p3");
let bmiImg = document.getElementById("bmi-img");

function validateForm()
{
    if(age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false))
    {
        alert("All fields are required!");
        document.getElementById("submit").removeEventListener("click", countBmi);
    }
    else
    {
        countBmi();
    }
}

document.getElementById("submit").addEventListener("click", validateForm);

function countBmi()
{
    let p = [age.value, height.value, weight.value];
    if(male.checked)
    {
        p.push("male");
    }
    else if
    (female.checked)
    {
        p.push("female");
    }

    form.reset();

    let bmiBeforeRound = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
    let bmi = bmiBeforeRound.toFixed(1);

    p3.innerText = bmi;

    let result = '';
    if (bmi < 18.5)
    {
        result = 'underweight';
    }
    else if (18.5 <= bmi && bmi <= 24.9)
    {
        result = 'normal';
    }
    else if (25 <= bmi && bmi <= 29.9)
    {
        result = 'overweight';
    }
    else if (30 <= bmi)
    {
        result = 'obese';
    }

    let imgUrl = "/img/bmi-img/" + result + ".png";
    bmiImg.src = imgUrl;

    section3Left.style.width = "max-content";
    section3Right.style.width = "max-content%";

    section3Right.classList.remove("none");
    section3Right.classList.add("flex")
}