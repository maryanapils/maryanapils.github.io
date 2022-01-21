"use strict"

addEventListener('keyup', (e) => {
    if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) { 
        insert(e.key)
    }

    switch (e.keyCode) {
        case 187:
            if (e.key === '+'){
                insert('+')
            }
            else {
                result();
            }
            break;
        case 189:
            insert('-')
            break;
        case 191:
            insert('/')
            break;
        case 8:
            clearLast();
            break;
        case 46:
            clearAll();
            break;
    }
});

function insert(item) {
    console.log('we here');
    document.forms[0].display.value =
    document.forms[0].display.value + item;
}

function clearAll() {
    document.forms[0].display.value = ""
}

function clearLast() {
    const value =  document.forms[0].display.value.split('');
    value.splice(value.length-1, 1)
    document.forms[0].display.value = value.join('')
}

function result() {
    const value =  document.forms[0].display.value;
    if(value) {
        document.forms[0].display.value = eval(value)
    }
}