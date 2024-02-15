const inputs = document.querySelectorAll(".card__input")
const calculateBtn = document.querySelector(".card__button");

const validateDay =(day) => {
    if(day && day > 0 && day <= 31) {
        return true
    }
}
const validateMonth =(month) => {
    if(month && month > 0 && month <= 12) {
        return true
    }
}
const validateYear=(year) => {
    const currentYear = new Date().getFullYear();
    if(year && year > 0 && year <= currentYear) {
        return true
    }
}

const isDateValid =(dayEle, monthEle, yearEle) => {
    let isValid = [false, false ,false];
    if(!validateDay(dayEle.value)) {
        dayEle.classList.add("card__input--error")
        
    }else {
        isValid[0] = true
        dayEle.classList.remove("card__input--error")
    }

    if(!validateMonth(monthEle.value)) {
        monthEle.classList.add("card__input--error")
    }else {
        isValid[1] = true
        monthEle.classList.remove("card__input--error")
    }

    if(!validateYear(yearEle.value)) {
        yearEle.classList.add("card__input--error")
    }else {
        isValid[2] = true
        yearEle.classList.remove("card__input--error")
    }

    return isValid.every((item) => item === true);
}

const calculateAge =(year, month, day) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDay() < birthDate.getDay())) {
        age--
    }
    return age ;
}


const onClickHandler =()=> {
    const yearEle = document.querySelector('.card__input[name="year"]');
    const monthEle = document.querySelector('.card__input[name="month"]');
    const dayEle = document.querySelector('.card__input[name="day"]');
    const result = document.querySelector(".card__resultValue")

    if(!isDateValid(dayEle, monthEle, yearEle)) {
        result.innerText  = "--";
        return;
    }

    result.innerText = calculateAge(yearEle.value, monthEle.value, dayEle.value)
}

calculateBtn.addEventListener("click", onClickHandler);

inputs.forEach(input => {
    input.addEventListener("keydown", even => {
        even.key === "Enter" && onClickHandler()
    })
})
