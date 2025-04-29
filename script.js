document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i> Menu';
    
    const nav = document.getElementById('main-nav');
    nav.insertBefore(mobileMenuButton, nav.firstChild);
    
    mobileMenuButton.addEventListener('click', function() {
        nav.classList.toggle('mobile-menu-open');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active link highlighting
    const navLinks = document.querySelectorAll('#main-nav a');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
    
    // Search functionality
    const searchButton = document.querySelector('.search-button');
    const searchBox = document.querySelector('.search-box');
    
    searchButton.addEventListener('click', function() {
        performSearch(searchBox.value);
    });
    
    searchBox.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(searchBox.value);
        }
    });
    
    function performSearch(query) {
        if (query.trim() !== '') {
            alert(`Searching for: ${query}\nThis would normally redirect to search results.`);
            // In a real implementation, you would redirect to search results:
            // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    }
    
    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effects to table rows
    const tableRows = document.querySelectorAll('tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});