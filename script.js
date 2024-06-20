
function toggleDropdown() {
    var dropdown = document.getElementById("cityDropdown");
    dropdown.classList.toggle("show");
}

function filterCities() {
    var input, filter, a, i;
    input = document.getElementById("citySearch");
    filter = input.value.toUpperCase();
    var dropdown = document.getElementById("cityDropdown");
    a = dropdown.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        var txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function selectCity(city, event) {
    event.preventDefault();
    document.getElementById("cityButton").innerText = city;
    toggleDropdown(); 
}


window.onclick = function(event) {
    if (!event.target.matches('#cityButton')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


document.getElementById('userIcon').addEventListener('click', () => {
    document.getElementById('loginModal').style.display = 'block';
});


document.getElementById('loginClose').addEventListener('click', () => {
    document.getElementById('loginModal').style.display = 'none';
});


window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
    if (event.target == document.getElementById('taskModal')) {
        document.getElementById('taskModal').style.display = 'none';
    }
    if (event.target == document.getElementById('thankYouModal')) {
        document.getElementById('thankYouModal').style.display = 'none';
    }
    if (event.target == document.getElementById('congratulationsModal')) {
        document.getElementById('congratulationsModal').style.display = 'none';
    }
};


document.getElementById('loginButton').addEventListener('click', () => {
    document.getElementById('loginModal').style.display = 'none';
});


document.querySelectorAll('.view-task-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('taskModal').style.display = 'block';
        currentTask = event.target.id; 

        
        const taskButton = event.target;
        taskButton.innerText = 'Задание выполняется';
        taskButton.style.backgroundColor = 'orange';
        taskButton.style.color = '#ffffff'; 
        taskButton.disabled = true;
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('taskModal').style.display = 'none';
});

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('taskModal').style.display = 'none';
    document.getElementById('thankYouModal').style.display = 'block';

    
    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0];
    if (file) {
        console.log('Загруженный файл:', file.name);
    }
});

document.getElementById('continueButton').addEventListener('click', function() {
    document.getElementById('thankYouModal').style.display = 'none';
    markTaskAsCompleted(currentTask);
});

let currentTask = '';
let completedTasks = 0;

function markTaskAsCompleted(taskId) {
    const taskButton = document.getElementById(taskId);
    taskButton.innerText = 'Задание выполнено';
    taskButton.style.backgroundColor = 'green';
    taskButton.style.color = '#ffffff'; 
    taskButton.disabled = true;

    const taskItem = taskButton.closest('.timeline-item');
    taskItem.classList.add('completed');
    taskItem.querySelector('.marker').classList.add('checked');

    completedTasks++;

    if (completedTasks === 5) {
        document.getElementById('congratulationsModal').style.display = 'block';
    }
}

document.getElementById('finalTestButton').addEventListener('click', function() {
    window.location.href = 'final-test.html';
});
