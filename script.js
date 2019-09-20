/* global $ */
$(function() {
    // when the webpage first loaded, we hide
    // all the pages but the first page
    $('.page').hide();
    $('#page-one').show();


    $('#page-one-link').click(function() {
        $('.page').hide(); // hide all the other pages
        $('#page-two').show(); // show the page that the user wants to see
    })

    $('#page-two-link').click(function() {
        $('.page').hide();
        $('#page-two').show();
    })

    $('#page-three-link').click(function() {
        $('.page').hide();
        $('#page-three').show();
    })
})
