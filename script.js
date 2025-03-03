document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        const errorMessage = document.getElementById('error-message');
        document.body.classList.add('login-page');
        
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username === 'pitica' && password === 'açai') {
                errorMessage.textContent = '';
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'index.html';
            } else {
                errorMessage.textContent = 'Usuário ou senha incorretos';
                errorMessage.style.animation = 'shake 0.5s ease-in-out';
            }
        });
    } else {
   
        const memoryTexts = document.querySelectorAll('.memory-text');
        
        memoryTexts.forEach(text => {
            const description = text.querySelector('p');
            
            description.addEventListener('click', () => {
                const currentText = description.textContent;
                const input = document.createElement('textarea');
                input.value = currentText;
                input.style.width = '100%';
                input.style.padding = '0.5rem';
                input.style.border = '1px solid #ff4d4d';
                input.style.borderRadius = '4px';
                input.style.resize = 'vertical';
                
                description.replaceWith(input);
                input.focus();
                
                input.addEventListener('blur', () => {
                    const newDescription = document.createElement('p');
                    newDescription.textContent = input.value;
                    input.replaceWith(newDescription);
                });
                
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        input.blur();
                    }
                });
            });
        });
        
      
        document.documentElement.style.scrollBehavior = 'smooth';
    }
});


function switchVersion(targetPage) {
    document.body.classList.add('fade-out');
    
    setTimeout(() => {
        window.location.href = targetPage;
    }, 500);
}


window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});

document.body.addEventListener('animationend', (e) => {
    if (e.animationName === 'fadeIn') {
        document.body.classList.remove('fade-in');
    }
});