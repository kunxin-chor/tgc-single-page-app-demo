/* global $ */

$(function() {
    
    function initPageOne()
    {
        $('#employee-list li').remove();
        for (let each_employee of employees)
        {
            let each_name = each_employee.name;
            let each_employee_number = each_employee.employee_number;
            $("#employee-list")
            .append(`<li class='employee-link' data-employee-number='${each_employee_number}'>${each_name}`);
       
        }
    }
    
    // employee is our 'database'
    let employees = [
        {
            'name': 'John',
            'employee_number': 'E1234567',
            'duration': 200,
            'annual_leave': 14,
            'salary': 3200
        }, 
        {
            'name': 'Alan',
            'employee_number': 'E2121212',
            'duration': 720,
            'annual_leave': 14,
            'salary': 4500
        },
        {
            'name': 'Cindy',
            'employee_number': 'E11223344',
            'duration': 720,
            'annual_leave': 21,
            'salary': 4500
        }];
    
    // when the webpage first loaded, we hide
    // all the pages but the first page
    $('.page').hide();
    $('#page-one').show();
    
    initPageOne();

    $(".nav-link").click(function(){
        // extract out the value of data-dest attribute for the
        // clicked link
        let page = $(this).data('dest');
        $('.page').hide();
        $('#' + page).show();
    })

    $('#page-one-link').click(function(){
        // for each employee, extract out
        // the link and display it in the
        // employee-list <ul>
      
       initPageOne();
    });

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
    
    // EVENT DELGATION
    $('#employee-list').on('click', '.employee-link', function(){
       let employee_number= $(this).data('employee-number');
       
       // linear search
       for (let each_employee of employees)
       {
           if (each_employee.employee_number == employee_number) {
               $('#employee-name').text(each_employee.name);
               $('#employee-employee-number').text(each_employee.employee_number);
               $('#employee-duration').text(each_employee.duration);
               $('#employee-annual-leave').text(each_employee.annual_leave);
               $('#employee-salary').text(each_employee.salary);
           }
       }
    
    });
    
    $("#add-new-button").click(function(){
        let new_employee_name = $('#new-employee-name').val();
        let new_employee_object = {
            'name': new_employee_name,
            'employee_number': 'N/A',
            'duration':'N/A',
            'annual_leave': 'N/A',
            'salary': 'N/A'
        }
        employees.push(new_employee_object);
        initPageOne();
    })
})
