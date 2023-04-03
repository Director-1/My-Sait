// JavaScript source code
const s_0 = [100, 90, 200, 150, 170, 230, 200, 130, 177, 133, 247];
const s_1 = [false, false, false, false, false, false, false, false, false, false, false,];
var s_m = 0;
var s_m_0 = 0;
var txt = "";

function sam_0(e) {
    s_1[e] = ~s_1[e];
    if (s_1[e]) {
        s_m = s_m + s_0[e];
        s_m_0++;
    }
    else {
        s_m = s_m - s_0[e];
        s_m_0--;
    }
    txt = "Общая сумма: " + s_m + "<br />" + "Общее колличество: " + s_m_0;
    return txt;
}