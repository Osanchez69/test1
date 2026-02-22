const radioYes = document.getElementById('q1_yes');
const radioNo = document.getElementById('q1_no');
const followUpSection = document.getElementById('followUpSection');

function toffleFollowUp() {
    if (radioYes.checked) {
        followUpSection.style.display = 'block'
    } else {
        followUpSection.style.display = 'none'
    }
}

radioYes.addEventListener('change', toffleFollowUp);
radioNo.addEventListener('change', toffleFollowUp);
