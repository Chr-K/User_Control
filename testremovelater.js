document.getElementById('booton').addEventListener('click',makeit)


function makeit(){
    filltable('test_table',0,0,'input','input_email')
}



function filltable(tableid,row,cell,insertion,insertion_id)
{
    var table = document.getElementById(tableid)
    var new_row = table.insertRow(row)
    var new_cell = new_row.insertCell(cell)
    var new_insertion = document.createElement(insertion)
    new_insertion.id = insertion_id;
    new_cell.append(new_insertion)
}