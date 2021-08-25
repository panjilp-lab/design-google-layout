// smooth hide nav header
document.addEventListener("DOMContentLoaded", function(){
            
    elAutoHide = document.querySelector('.autohide');
    
    // jika diperlukan, tambahkan padding-top
    navbarHeight = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbarHeight + 'px';

    if(elAutoHide){
        
        var scrollTop = 30;
        window.addEventListener('scroll', function() {
               let scroll_top = window.scrollY;
           if(scroll_top < scrollTop) {
                elAutoHide.classList.remove('scrolled-down');
                elAutoHide.classList.add('scrolled-up');
            }
            else {
                elAutoHide.classList.remove('scrolled-up');
                elAutoHide.classList.add('scrolled-down');
            }
            scrollTop = scroll_top;

        }); 
        // window.addEventListener

    }
    // if
    
}); 
// DOMContentLoaded  end
