let currentLevel = 1;

function checkPassword() {
    const input = document.getElementById('password-input').value;
    const message = document.getElementById('message');

    if (currentLevel === 1 && input === 'password') {
        nextLevel(2);
    } else if (currentLevel === 2 && input === 'OhMyGooooooood') {
        nextLevel(3);
    } else if (currentLevel === 3 && input === ': 12345678') {
        nextLevel(4);
    } else if (currentLevel === 5 && input === 'password') {
        message.textContent = "Incorrect, try again!";
    } else if (currentLevel === 5 && input === 'again') {
        nextLevel(6);
    } else if (currentLevel === 6 && input === 'emotionaldamage69420') {
        message.textContent = "Congratulations! You've beaten the game!";
    } else {
        message.textContent = "Wrong password, try again!";
    }
}

function nextLevel(level) {
    currentLevel = level;
    document.getElementById('message').textContent = "";

    if (level === 2) {
        document.querySelector('h2').textContent = "Level 2";
        window.scrollTo(0, document.body.scrollHeight);
    } else if (level === 3) {
        document.querySelector('h2').textContent = "Level 3";
        document.getElementById('level3-hint').classList.remove('hidden');
    } else if (level === 4) {
        document.querySelector('h2').textContent = "Level 4";
        document.getElementById('level4-menu').classList.remove('hidden');
    } else if (level === 5) {
        document.querySelector('h2').textContent = "Level 5";
    } else if (level === 6) {
        document.querySelector('h2').textContent = "Level 6";
        document.getElementById('level6-container').classList.remove('hidden');
    }
}

function openMenu() {
    const checkboxes = document.getElementById('checkbox-container');
    checkboxes.classList.remove('hidden');
    let lastChecked = 0;

    document.getElementById('checkbox-1').addEventListener('change', function() {
        if (this.checked) document.getElementById('checkbox-2').classList.remove('hidden');
    });

    document.getElementById('checkbox-2').addEventListener('change', function() {
        if (this.checked) document.getElementById('checkbox-3').classList.remove('hidden');
    });

    document.getElementById('checkbox-3').addEventListener('change', function() {
        if (this.checked) document.getElementById('checkbox-4').classList.remove('hidden');
    });

    document.getElementById('checkbox-4').addEventListener('change', function() {
        if (this.checked) document.getElementById('checkbox-5').classList.remove('hidden');
    });

    document.getElementById('checkbox-5').addEventListener('change', function() {
        if (this.checked) document.getElementById('checkbox-6').classList.remove('hidden');
    });

    document.getElementById('checkbox-6').addEventListener('change', function() {
        if (this.checked) document.getElementById('checkbox-7').classList.remove('hidden');
    });
}

function confirmPassword() {
    const allCheckboxes = [
        document.getElementById('checkbox-1').checked,
        document.getElementById('checkbox-2').checked,
        document.getElementById('checkbox-3').checked,
        document.getElementById('checkbox-4').checked,
        document.getElementById('checkbox-5').checked,
        document.getElementById('checkbox-6').checked,
        document.getElementById('checkbox-7').checked
    ];

    if (allCheckboxes.every((checked, index) => index < 6 && checked && !allCheckboxes[6])) {
        nextLevel(5);
    } else if (allCheckboxes[6]) {
        alert('You are locked out!');
        location.reload();
    } else {
        alert('Try again!');
    }
}

function dragButton(event) {
    const btn = event.target;
    const level6Container = document.getElementById('level6-container');
    
    let shiftX = event.clientX - btn.getBoundingClientRect().left;

    const moveAt = (pageX) => {
        btn.style.left = pageX - shiftX + 'px';
    }

    const onMouseMove = (event) => {
        moveAt(event.pageX);
    }

    document.addEventListener('mousemove', onMouseMove);

    btn.onmouseup = () => {
        document.removeEventListener('mousemove', onMouseMove);
        btn.onmouseup = null;

        // Reveal password after dragging
        if (parseInt(btn.style.left, 10) > 200) {
            document.getElementById('message').textContent = "Password is: emotionaldamage69420";
        }
    };
}
