
export const elements = {
    secInput: document.getElementById('user_input'),
    pInput: document.getElementById('p_input'),
    h3Input: document.getElementById('h3_input'),
    baseIncImput: document.getElementById('baseInc'),
    finalIncImput: document.getElementById('finalInc'),
    submitBtn: document.getElementById('submit'),
    feedback: document.getElementById('feedback'),
    p_feedback: document.getElementById('p_feedback'),
    p_feedbackBtns: document.getElementById('p_feedbackBtns'),
    newIncBtn: document.getElementById('newInc_btn'),
}

export function updateFeedbackSection(baseInc, finalInc, tax) {
    elements.secInput.style.display = 'none';
    elements.feedback.style.display = 'block';
    elements.p_feedbackBtns.style.display = 'block';
    let feedback;
    const numFormat = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    if (baseInc === 0) {
        feedback = `<p>The total tax on an income of ${numFormat.format(finalInc)} is ${numFormat.format(tax)}.</p>`
    } else {
        feedback = `<p>The total tax on the ${numFormat.format(finalInc - baseInc)} earned between ${numFormat.format(baseInc)} and ${numFormat.format(finalInc)} is ${numFormat.format(tax)}.</p>`
    }
    elements.p_feedback.innerHTML = feedback;
}

export function getInputValue(id) {
    return document.getElementById(id).value
}

export function resetDOM() {
    elements.feedback.style.display = 'none';
    elements.secInput.style.display = 'block';
    elements.baseIncImput.value = '';
    elements.finalIncImput.value = '';
    elements.baseIncImput.focus();
}

// function formatMoney(number, decPlaces, decSep, thouSep) {
//     decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces;
//     decSep = typeof decSep === "undefined" ? "." : decSep;
//     thouSep = typeof thouSep === "undefined" ? "," : thouSep;
//     var sign = number < 0 ? "-" : "";
//     var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
//     var j = (j = i.length) > 3 ? j % 3 : 0;
    
//     return sign + '$' +
//         (j ? i.substr(0, j) + thouSep : "") +
//         i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
//         (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
//     }
    