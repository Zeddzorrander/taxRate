export function updateTax(baseInc, finalInc) {
    ggbApplet.setValue('baseInc', baseInc);
    ggbApplet.setValue('finalInc', finalInc);
    setWindow(finalInc);
    return getRoundedValue('TotalTax', 2);
}

export function setValue(obj, value) {
    ggbApplet.setValue(obj, value);
}

export function resetWindow() {
    ggbApplet.setCoordSystem(-31500, 750000, -0.03, 0.45);
}

function setWindow(finalInc) {
    
    ggbApplet.setCoordSystem(0 - .1*finalInc, finalInc + .1*(finalInc), -0.03, 0.45);

}

function getRoundedValue(obj, places) {
    let mult = 10**places;
    return Math.round(mult * ggbApplet.getValue(obj)) / mult;
}

