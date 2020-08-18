export function updateTax(baseInc, finalInc) {
    ggbApplet.setValue('a', baseInc);
    ggbApplet.setValue('b', finalInc);
    return ggbApplet.getValue('T');
}


function getRoundedValue(obj) {
    return Math.round(100000 * parseFloat(ggbApplet.getValue(obj))) / 100000
}