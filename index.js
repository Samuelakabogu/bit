firstDrop = document.querySelector('.first-text')
secondDrop = document.querySelector('.second-text')
dropdown = document.querySelector('.dropdown')

function drop(){
    if(firstDrop.style.display == 'none'){
        firstDrop.style.display = 'flex'
    }
    else{
        firstDrop.style.display = 'none'
    }
}
function drop1(){
    if(secondDrop.style.display == 'none'){
        secondDrop.style.display = 'flex'
    }
    else{
        secondDrop.style.display = 'none'
    }
}
document.querySelector('.open').addEventListener('click', function(){
    dropdown.style.opacity = '1';
    dropdown.style.height = '100vh';
    dropdown.style.display = 'flex';
    dropdown.style.zIndex = '200';
})
document.querySelector('.close').addEventListener('click', function(){
    dropdown.style.height = '0';
    dropdown.style.zIndex = '-1';
    dropdown.style.transition = 'all 1.5s';
    dropdown.style.overflow = 'hidden';
})