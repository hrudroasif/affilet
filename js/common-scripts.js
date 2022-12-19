(function ($) {
    $(function () {

        $('.affiliate-sidebar-tab-item').eq(0).find('ul').show()
        $('.affiliate-sidebar-tab-item').each(function () {
            var $$this = $(this);
            $$this.find('h3').click(function () {
                $$this.find('ul').slideToggle();
            })
        })


        $('.affiliate-sidebar-tab-item ul li:first-child a').addClass('active');
        $('.affiliate-tab-item').hide();
        $('.affiliate-tab-item:first').show();

        // Click function
        $('.affiliate-sidebar-tab-item ul li a').click(function () {
            $('.affiliate-sidebar-tab-item ul li a').removeClass('active');
            $(this).addClass('active');
            $('.affiliate-tab-item').hide();

            var activeTab = $(this).attr('href');
            $(activeTab).show();
            return false;
        });

    })
})(jQuery)