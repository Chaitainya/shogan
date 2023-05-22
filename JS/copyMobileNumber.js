
function copyMobileNumber(mobileNumber){
    navigator.clipboard.writeText(mobileNumber);

    $('.mobile-number').tooltip('show');

    setTimeout(() => {
        $('.mobile-number').tooltip('hide');
    }, 1000);
}

let mobile = false;
function toggleMobile(event){
    event.stopPropagation();
    if(!mobile) document.querySelector('.mobile-number').style.display = 'block';
    else document.querySelector('.mobile-number').style.display = 'none';

    mobile = !mobile;
}