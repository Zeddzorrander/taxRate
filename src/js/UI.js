

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
    if (baseInc === 0) {
        feedback = `<p>The total tax on an income of $${finalInc} is $${tax}.</p>`
    } else {
        feedback = `<p>The total tax on the $${finalInc - baseInc} earned between $${baseInc} and $${finalInc} is $${tax}.</p>`
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
