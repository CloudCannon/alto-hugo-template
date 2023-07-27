import Alpine from 'alpinejs';

window.Alpine = Alpine;

function darkModeToggle() {
    return {
        mode: Alpine.store('mode', ''),
        toggleMode() {
            const isDark = this.mode === 'dark';
            this.mode = isDark ? 'light' : 'dark';
            localStorage.setItem('mode', this.mode);
        },
        init() {
            this.mode = localStorage.getItem('mode') || 'light';
        }
    };
}
window.darkModeToggle = darkModeToggle;



Alpine.start();
