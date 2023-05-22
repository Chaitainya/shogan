function playKushboo(){
    document.getElementById('topArrowIcon').style.display = 'none';   
    document.getElementById('kushboo').style.display = 'block';

    window.scrollTo(0, 0);
    
    setTimeout(() => {
        document.getElementById('kushboo').style.display = 'none';
        document.getElementById('topArrowIcon').style.display = 'block';   
    }, 1000);
}