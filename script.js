/* global $ */
$(function() {
    // when the webpage first loaded, we hide
    // all the pages but the first page
    $('.page').hide();
    $('#page-one').show();


    $(".nav-link").click(function(){
        // extract out the value of data-dest attribute for the
        // clicked link
        let page = $(this).data('dest');
        $('.page').hide();
        $('#' + page).show();
    })

    // VERSION 1 CODE - the easiest and most straightforward method
    // but is not scalable:
    
    // $('#page-one-link').click(function() {
    //     $('.page').hide(); // hide all the other pages
    //     $('#page-one').show(); // show the page that the user wants to see
    // })

    // $('#page-two-link').click(function() {
    //     $('.page').hide();
    //     $('#page-two').show();
    // })

    // $('#page-three-link').click(function() {
    //     $('.page').hide();
    //     $('#page-three').show();
    // })
})
