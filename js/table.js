/*    HW Assignment 3
        File: table.js
        Joshua Sullivan, Joshua_Sullivan1@student.uml.edu
        10/26/2021   
        This javascript file builds the multicplication table for the file index.html
*/

function table(id) {

    //Gets the entered numbers from the forms
    var f_hnum = parseInt(document.getElementById("f_hnum").value)
    var l_hnum = parseInt(document.getElementById("l_hnum").value)
    var f_vnum = parseInt(document.getElementById("f_vnum").value)
    var l_vnum = parseInt(document.getElementById("l_vnum").value)

    //Erases previous Table
    if (document.getElementById(id)) { 
        var m_table = document.getElementById(id);
        var rows = m_table.rows.length;
        for (var i = 0; i < rows; i++) {
            m_table.deleteRow(0);
        }
    }

    //If statemenets check that the entered numbers are acceptable
    if ( isNaN(f_hnum) || isNaN(l_hnum) || isNaN(f_vnum) || isNaN(l_vnum)) {
        document.getElementById('notif').innerHTML = "Error: Incomplete input"
        return
    } else if ( (f_hnum >= 1000000000) || (l_hnum >= 1000000000) || (f_vnum >= 1000000000) || (l_vnum > 1000000000) ) {
        document.getElementById('notif').innerHTML = "Error: Out of bounds input."
        return
    } else if (((l_hnum - f_hnum) * (l_vnum - f_vnum)) > 100000) {
        document.getElementById('notif').innerHTML = "Error: The difference between values is too large."
        return
    } else if ( (f_hnum > l_hnum) && (f_vnum > l_vnum) ) {
        document.getElementById('notif').innerHTML = "Error: Both starting numbers are greater than the ending numbers"
        return
    } else if (f_hnum > l_hnum) {
        document.getElementById('notif').innerHTML = "Error: The horizontal starting numbers is greater than the ending number"
        return
    } else if (f_vnum > l_vnum) {
        document.getElementById('notif').innerHTML = "Error: The vertical starting numbers is greater than the ending number."
        return
    }

    //Erases any previous error messages
    document.getElementById('notif').innerHTML = '' 

    //Creates the new table
    for(let i = f_vnum; i <= l_vnum; i++) {
        let row = document.getElementById(id).insertRow(i-f_vnum); // create row
        for(let j = f_hnum; j <= l_hnum; j++) {
            let k = i * j
            var col = row.insertCell(j-f_hnum); //add cell to row
            col.innerHTML = k //put k in cell
        }
        var col = row.insertCell(0); 
        col.innerHTML = i            // Multiplicand 
    }
    let row = document.getElementById(id).insertRow(0);
    for (let j = l_hnum; j >= f_hnum; j--) {
        var col = row.insertCell(0); //add cell to row
        col.innerHTML = j   //multiplier
    }
    var col = row.insertCell(0);

}