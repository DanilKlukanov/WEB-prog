function trap_area(b, a, h){
    return (((+a + +b) / 2) * h);
}

function button1(){
    b1 = document.getElementById("b").value;
    a1 = document.getElementById("a").value;
    h1 = document.getElementById("h").value;
    if ((b1 <= 0) || (a1 <= 0) || (h1 <= 0)){
        alert("Неверное значение!")
    }
    else{ 
        round1 = document.getElementById("round").value;
        if ((round1 > 10) || (round1 <= 0)){
            alert("Значение 0 или значение большее 10");
        }
        else{
            document.getElementById("res").innerHTML= trap_area(b1, a1, h1).toFixed(round1);
        }
    }
}

function button2(){
    var x = 1;
    var y = 100;
    var n = 25;
    var j = 0;
    for (i = 0; i <= 25; i++){
        j = j + (x * y);
        x = x + 2;
        y = y - 2;
    }
    document.getElementById("resul").innerHTML = j;
}

function button3(){
    ad = document.getElementsByClassName("element");
    for (c = 0; c < 7; c++){
        for (i = 0; i < 4; i++){
            for (j = i + 1; j < 5; j++){
                if (Number(ad[i * 7 + c].value) > Number(ad[j * 7 + c].value)){
                    buf = ad[i * 7 + c].value;
                    ad[i * 7 + c].value = ad[j * 7 + c].value;
                    ad[j * 7 + c].value = buf;
                }
            }
        }
    }
}

function compare(a, b) {
    return a - b;
}

function compares(a, b) {
    return b - a;
}

function getRandomInt(min, max){
    return Math.round(min - 0.5 + Math.random() * (max - min));
}

function getArray (){
    min = document.getElementById("min").value;
    max = document.getElementById("max").value;
    n = document.getElementById("n").value;
    
    var v = [];
    if (Number(n) <= 0 || Number(min) >= Number(max)){
        alert("Неверное значение!");
        return false;
    }
    
    for (i = 0; i < n * n; i++){
        v.push(getRandomInt(min, max));
    }
    
    console.log(v);
    getResultArray(v);
}

function getResultArray(v){
    if (v.length > 0){
        array(v.sort(compare));
    }
}

function array(v){
    var n = v.length**(.5);
    var matrix = [];
    for (i = 0; i < n; i++){
        matrix.push([]);
    }
    
    if (v.length > 0){
        v = v.sort(compares);
    }
    
    var c = 0;
    for (row = 0; row < n; row++){
        if (row % 2 == 0){
            for (col = 0; col < n; col++){
                matrix[row][col] = v[c++];
            }
        }

        if (row % 2 != 0){
            for (col = n - 1; col >= 0; col--){
                matrix[row][col] = v[c++];
            }
        }
    }
    console.log(matrix);

    var tb = '<table>';
    for (i = 0; i < n; i++){
        tb += '<tr>';
        for (j = 0; j < n; j++){
            tb += '<td>' + " " + matrix[i][j] + " " + '</td>';
        }
        tb += '</tr>';
    }
    tb += '</table>';
    document.getElementById('matrix').innerHTML = tb;
}
