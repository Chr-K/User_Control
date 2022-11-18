var email_input = document.getElementById('login_input_email')
var password_input = document.getElementById('login_input_password')
document.addEventListener('mouseup',focus_manager)
document.addEventListener('keyup',focus_manager)
document.getElementById('login_submit_button').addEventListener('click',login_submit)
document.getElementById('signup_form_button').addEventListener('click',signup_button)

function focus_manager(){
    var active_element = document.activeElement.id;

    if(active_element === 'login_input_email')
    {
        if (email_input.value === 'Email')
        {
            email_input.value = ''
        }
    }
    if(active_element !== 'login_input_email')
    {
        if(email_input.value === '')
        {
            email_input.value ='Email'
        }
    }
    if (active_element === 'login_input_password')
    {
        password_input.type = 'password'
        if (password_input.value === 'Password')
        {
            password_input.value = ''
        }
    }
    if (active_element!== 'login_input_password')
    {
        if (password_input.value === '')
        {
            password_input.type = 'text'
            password_input.value = 'Password'
        }
    }
}
function login_submit(){
    alert (email_input.value + '\n' + password_input.value)
}
function signup_button(){
    document.getElementById('login_table').style.animationName = 'fadeout'
    document.getElementById('login_table').style.animationDuration = '2s'
    document.getElementById('login_table').style.animationFillMode = 'forwards'
    if(document.getElementById('signup_table')===null)
    {
        var signup_table = document.createElement('table')
        signup_table.id = 'signup_table'
        document.getElementById('container_main').append(signup_table)
        fill()
    }
    

    

}

function fill(){

    var fillpromise = new Promise(function(resolve,reject){
        filltable('signup_table',0,0,'input','signup_input_Email')
        if(document.getElementById('signup_input_Email')!==null)
        {
            resolve()
        }
        else{
            reject(console.log('regject'))
        }
    })
    fillpromise
    .then (filltable('signup_table',0,1,'input','signup_input_Phone'))
    .then (filltable('signup_table',1,0,'input','signup_input_Firstname'))
    .then (filltable('signup_table',1,1,'input','signup_input_Lastname'))
    .then (filltable('signup_table',2,0,'input','signup_input_Password'))
    .then (filltable('signup_table',2,1,'input','signup_input_Password_Confirm'))
    .then ((signup_assign_values()))




}

function filltable(tableid,row,cell,insertion,insertion_id)
{

    var table = document.getElementById(tableid)

    if (document.getElementById(tableid + row)===null){
    var new_row = table.insertRow(row)
    new_row.id = tableid + row
    var new_cell = new_row.insertCell(cell)
    var new_insertion = document.createElement(insertion)
    new_insertion.id = insertion_id;
    new_cell.append(new_insertion)
    }
    else{
        var edit_row = document.getElementById(tableid + row)
        var new_cell = edit_row.insertCell(cell)
        var new_insertion = document.createElement(insertion)
        new_insertion.id = insertion_id
        new_cell.append(new_insertion);
    }
 
}

function signup_assign_values(){
    document.getElementById('signup_input_Email').value = 'Email';
    document.getElementById('signup_input_Phone').value = 'Phone Number';
    document.getElementById('signup_input_First_Name').value = 'First name';
    document.getElementById('signup_input_Last_Name').value = 'Last name';
    document.getElementById('signup_input_Password').value = 'Password'
    document.getElementById('signup_input_Password_Confirm').value = 'Confirm Password'
    document.addEventListener('mouseup',signup_focus_manager)
    document.addEventListener('keyup',signup_focus_manager)

}



function signup_focus_manager(){
var sui = 'signup_input_'
elem_arr = [
sui+'Email',sui+'Phone',sui+'First_name',sui+'Last_name',sui+'Password',sui+'Password_confirm']
    for (var i = 0; i < elem_arr.length; i++ )
    {
        
        if (document.activeElement.id === elem_arr[i])
        {
            if(document.getElementById(elem_arr[i]).value === elem_arr[i].slice(13))
            {
                alert(document.activeElement.id)
            }
        }
    }
}

