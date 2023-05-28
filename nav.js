function openMenu(){
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active';
}

document.getElementById("menuBtn").onclick = e =>{
    e.preventDefault();
    openMenu();
}

function closeMenu(){
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
}

document.querySelector('aside button.close').onclick = e =>{
    closeMenu();
}

document.querySelector('.backdrop').onclick = e =>{
    closeMenu();
}