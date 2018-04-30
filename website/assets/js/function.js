jQuery(document).ready(function($){
    function responsiveFeaturedProducts(){
        if($(window).width() < 576){
            var featuredProducts = $('.featured-products');
            var productItemContainer = $('.product-item-container');

            featuredProducts.addClass('carousel slide');
            featuredProducts.attr('data-ride', 'carousel');

            featuredProducts.find('.featured-products-wrapper').removeClass('row');
            productItemContainer.removeClass('col-md-4');

            featuredProducts.find('.featured-products-wrapper').addClass('carousel-inner');

            productItemContainer.eq(0).addClass('active');
            productItemContainer.addClass('carousel-item');
        }
    }
    responsiveFeaturedProducts();
})