export function updateTax(baseInc, finalInc) {
    ggbApplet.setValue('baseInc', baseInc);
    ggbApplet.setValue('finalInc', finalInc);
    return getRoundedValue('TotalTax', 2);
}

export function setValue(obj, value) {
    ggbApplet.setValue(obj, value);
}

function getRoundedValue(obj, places) {
    let mult = 10**places;
    return Math.round(mult * ggbApplet.getValue(obj)) / mult;
}