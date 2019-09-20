/* global $ */
$(function(){
    // when the webpage first loaded, we hide
    // all the pages but the first page
    $('.page').hide();
    $('#page-one').show();
    
    $('#page-two-link').click(function(){
        $('.page').hide();
        $('#page-two').show();
    })
})