export function navScroll() {
    const nav = document.getElementById('navbar');
    const arrow = document.getElementById('arrow');
    if (nav !== null && arrow !== null) {

        const navHeight = nav.offsetHeight;
      //  var gWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var gHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
        const containActive = () => nav.classList.contains('_active');
        const containTransparent = () => nav.classList.contains('_transparent');
       // const containArrowTransparent = () => arrow.classList.contains('_arrow-transparent');
        const defaultOffset = navHeight + 10;
        const changeOffset = gHeight - navHeight;


        window.addEventListener('scroll', () => {

            if (scrollPosition() > changeOffset && !containActive() ) {
                //scroll down
                nav.classList.remove('_transparent');
                nav.classList.add('_active')
                arrow.classList.remove('_arrow-transparent');

            } else if (scrollPosition() < changeOffset && containActive()) {
                //scroll up
                nav.classList.remove('_active');
                arrow.classList.add('_arrow-transparent');

            } else if (scrollPosition() > defaultOffset && !containTransparent() && scrollPosition() < changeOffset){

                nav.classList.add('_transparent')

            } else if (scrollPosition() < defaultOffset && containTransparent()) {
                
                nav.classList.remove('_transparent')
            };

        })
    }
}




