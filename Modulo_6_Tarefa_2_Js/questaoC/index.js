let date,button,today_year,today_month,today_day,my_year,my_month,my_day;
let total_days,male_death,female_death;
let my_choice;

let result = document.querySelector('#result');

male_death = 26681
female_death = 29236


date = new Date;
button = document.querySelector('#button');

today_year = date.getFullYear();
today_month = date.getMonth() + 1;
today_day = date.getDate();

total_days = (today_year * 365) + (today_month * 30) + today_day

// console.log(today_year)
// console.log(today_month)
// console.log(today_day)
// console.log(total_days)

my_year = document.querySelector('#my-year');
my_month = document.querySelector('#my-month');
my_day = document.querySelector('#my-day');

button.addEventListener('click', function() {
    
    let year = parseInt(my_year.value);
    let month = parseInt(my_month.value);
    let day = parseInt(my_day.value);

    let total_my_days = (year * 365) + (month * 30) + day
    let my_age_days = total_days - total_my_days

    // console.log(year)
    // console.log(month)
    // console.log(day)
    // console.log(total_my_days)
    // console.log(my_age_days)

    my_choice = document.querySelector('input[name="choice"]:checked').value
    if (my_choice == 'male') {
        let life_days = male_death - my_age_days
        console.log('You will live '+ life_days + ' days!');
        result.innerHTML = 'VOCÊ AINDA TEM '+ life_days + ' DIAS DE VIDA!!!'
        
    } else if (my_choice == 'female') {
        let life_days = female_death - my_age_days
        console.log('You will live ' + life_days + ' days!');
        result.innerHTML = 'VOCÊ AINDA TEM '+ life_days + ' DIAS DE VIDA!!!'
    }
})
