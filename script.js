document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const hero = document.getElementById('hero');
    const landingPage = document.getElementById('landing-page');
    const mainApp = document.getElementById('main-app');
    const logoutBtn = document.getElementById('logout-btn');

    loginBtn.addEventListener('click', () => {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        hero.classList.add('hidden');
    });

    signupBtn.addEventListener('click', () => {
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        hero.classList.add('hidden');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        landingPage.classList.add('hidden');
        mainApp.classList.remove('hidden');
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        landingPage.classList.add('hidden');
        mainApp.classList.remove('hidden');
    });

    const templateSelection = document.getElementById('template-selection');
    const editorContainer = document.getElementById('editor-container');
    const templateCards = document.querySelectorAll('.template-card');

    templateCards.forEach(card => {
        card.addEventListener('click', () => {
            templateSelection.classList.add('hidden');
            editorContainer.classList.remove('hidden');
            dashboardView.classList.add('hidden');
            mainContent.classList.remove('hidden');
        });
    });

    logoutBtn.addEventListener('click', () => {
        mainApp.classList.add('hidden');
        landingPage.classList.remove('hidden');
        hero.classList.remove('hidden');
        loginForm.classList.add('hidden');
        signupForm.classList.add('hidden');
    });

    const editor = document.getElementById('editor');

    editor.addEventListener('paste', (e) => {
        e.preventDefault();
        alert('Pasting is disabled in Write real.');
    });

    editor.addEventListener('input', () => {
        const text = editor.innerHTML;
        if (text.includes('AI')) {
            editor.innerHTML = text.replace(/AI/g, '<span class="ai-detected">AI</span>');
            // Move cursor to the end
            const range = document.createRange();
            const sel = window.getSelection();
            range.selectNodeContents(editor);
            range.collapse(false);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    });

    const exportBtn = document.getElementById('export-btn');
    exportBtn.addEventListener('click', () => {
        alert('Exporting as PDF with watermark and QR code...');
    });

    const shareBtn = document.getElementById('share-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const shareModal = document.getElementById('share-modal');
    const settingsModal = document.getElementById('settings-modal');
    const closeBtns = document.querySelectorAll('.close-btn');

    shareBtn.addEventListener('click', () => {
        shareModal.classList.remove('hidden');
    });

    settingsBtn.addEventListener('click', () => {
        settingsModal.classList.remove('hidden');
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            shareModal.classList.add('hidden');
            settingsModal.classList.add('hidden');
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target == shareModal || e.target == settingsModal) {
            shareModal.classList.add('hidden');
            settingsModal.classList.add('hidden');
        }
    });

    const dashboardBtn = document.getElementById('dashboard-btn');
    const dashboardView = document.getElementById('dashboard-view');
    const mainContent = document.getElementById('main-content');
    const homeBtn = document.getElementById('home-btn');

    dashboardBtn.addEventListener('click', () => {
        mainContent.classList.add('hidden');
        dashboardView.classList.remove('hidden');
        dashboardBtn.classList.add('hidden');
        homeBtn.classList.remove('hidden');
    });

    homeBtn.addEventListener('click', () => {
        dashboardView.classList.add('hidden');
        mainContent.classList.remove('hidden');
        homeBtn.classList.add('hidden');
        dashboardBtn.classList.remove('hidden');
    });

    const fontBtn = document.getElementById('font-btn');
    const photoBtn = document.getElementById('photo-btn');
    const voiceBtn = document.getElementById('voice-btn');

    fontBtn.addEventListener('click', () => {
        alert('Font selection UI would appear here.');
    });

    photoBtn.addEventListener('click', () => {
        alert('Photo upload UI would appear here.');
    });

    voiceBtn.addEventListener('click', () => {
        alert('Voice-to-text recording would start here.');
    });

    const notificationsBell = document.getElementById('notifications-bell');
    const toastNotification = document.getElementById('toast-notification');

    notificationsBell.addEventListener('click', () => {
        alert('You have no new notifications.');
    });

    // Mock showing a reminder toast after a delay
    setTimeout(() => {
        toastNotification.classList.remove('hidden');
        setTimeout(() => {
            toastNotification.classList.add('hidden');
        }, 5000); // Hide after 5 seconds
    }, 3000); // Show after 3 seconds
});
