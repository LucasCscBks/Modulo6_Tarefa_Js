let button = document.querySelector('#button');
let result = document.querySelector('#result');


button.addEventListener('click', function() {
    let option = document.querySelector('option[name="select"]:checked').value;
    let img = document.querySelector('#img')
    img.style.width = "250px";
    img.style.height = "250px";
    
    switch (option) {
        case 'god':
            document.querySelector('img').src ='god.jpg'
            break;
        case 'last':
            document.querySelector('img').src ='the_last_of_us.jpg'
            break;
        case 'days':
            document.querySelector('img').src ='days_gone.jpg'
            break;
        case 'fifa':
            document.querySelector('img').src ='fifa22.jpg'
            break;
        case 'ghost':
            document.querySelector('img').src ='ghost.jpg'
            break;
    }
})