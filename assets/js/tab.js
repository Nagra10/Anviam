

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('href');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
    document.addEventListener('click',function(e){
        // Hamburger menu
        if(e.target.classList.contains('hamburger-toggle')){
          e.target.children[0].classList.toggle('active');
        }
      })

      