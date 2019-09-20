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
        new Employee("John", "E12345678", 200, 14, 3200),
        new Employee("Alan", "E24780124", 120, 14, 2500),
        new Employee("Cindy", "E3313123", 720, 21, 3500)
       ];
    
    console.log(employees);
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
               $('#employee-number').text(each_employee.employee_number);
               $('#employee-duration').text(each_employee.duration);
               $('#employee-annual-leave').text(each_employee.annual_leave);
               $('#employee-salary').text(each_employee.salary);
           }
       }
    
    });
    
    $("#add-new-button").click(function(){
        let new_employee_name = $('#new-employee-name').val();
        let new_employee_object = new Employee(new_employee_name, "N/A", "N/A", "N/A", "N/A");
        employees.push(new_employee_object);
        initPageOne();
    })
})
