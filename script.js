function compute()
{
    let p=document.getElementById('amount').value;
    let select = document.getElementById('years');
    let t = select.options[select.selectedIndex].value;
    let r=document.getElementById('rate').value;
    let  SI=(p*t*r)/100;

    let currentTime = new Date();
    let year = currentTime.getFullYear().toString();
    year = parseInt(year) + parseInt(t);

    document.getElementById('result').innerHTML="<br><b>If you deposit <span class='amarillo'>$ "+ number_format(p,0,",",".") +"</span><br>"+"at an interest rate of <span class='amarillo'>"+r+"%</span><br>You will receive an amount of <span class='amarillo'>$ "+number_format(SI,0,",",".")+"</span>,<br> in the year <span class='amarillo'>"+year+"</span></b>";
    
    
}

function showVal(v){
    document.getElementById('ratechange').innerHTML=v + "%";
}

function number_format(number, decimals, dec_point, thousands_point) {

    if (number == null || !isFinite(number)) {
        throw new TypeError("number is not valid");
    }

    if (!decimals) {
        var len = number.toString().split('.').length;
        decimals = len > 1 ? len : 0;
    }

    if (!dec_point) {
        dec_point = '.';
    }

    if (!thousands_point) {
        thousands_point = ',';
    }

    number = parseFloat(number).toFixed(decimals);

    number = number.replace(".", dec_point);

    var splitNum = number.split(dec_point);
    splitNum[0] = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_point);
    number = splitNum.join(dec_point);

    return number;
}
        