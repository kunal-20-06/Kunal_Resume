// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll to sections
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation highlighting on scroll
window.addEventListener('scroll', () => {
    // Add shadow to navbar on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Highlight active section in navigation
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Core Competencies Data
const competenciesData = [
    {
        name: "Performance Marketing & CAC Optimization",
        description: "Strategic optimization of customer acquisition costs through data-driven channel attribution, behavioral analytics, and advanced segmentation.",
        example: "Reduced CAC by 22% at Loco.gg while increasing ARPU by 98%. Achieved CAC of Rs 210 per goal at Multipl (lowest in market). Used behavioral analytics, advanced segmentation, and A/B testing across channels.",
        framework: "CAC Optimization Framework: Channel Attribution → Behavioral Segmentation → A/B Testing → ROI Tracking",
        companies: ["Multipl", "Loco.gg", "Paytm", "ZeltaTech Labs"],
        metrics: "22-98% improvement range"
    },
    {
        name: "Product-Led Growth & Onboarding",
        description: "Designing seamless user journeys and onboarding experiences that drive activation and conversion without heavy sales involvement.",
        example: "Improved install-to-goal conversion from 8.7% to 23.2% at Multipl. Designed 6-step onboarding process (KYC → Profiling → Drip Campaigns) reducing sign-up-to-investment cycle by 41%.",
        framework: "PLG Framework: Frictionless Signup → Guided Onboarding → Value Recognition → First Action → Engagement",
        companies: ["Multipl", "Paytm", "Loco.gg"],
        metrics: "8.7% to 23.2% conversion lift, 41% cycle time reduction"
    },
    {
        name: "User Retention & Churn Reduction",
        description: "Comprehensive strategies for reducing churn, re-engaging inactive users, and maximizing lifetime value through segmentation and personalization.",
        example: "Designed Loco Gold gamified retention program: +19% engagement, -10% churn, +157% LTV. Re-engaged 22% inactive users at Multipl. Applied RARRA model at Quiz365.",
        framework: "Retention Framework: Churn Prediction → Segmentation → Re-engagement Campaigns → Gamification → LTV Tracking",
        companies: ["Loco.gg", "Multipl", "Quiz365", "RideAlly"],
        metrics: "10-157% improvement across retention metrics"
    },
    {
        name: "Customer Lifecycle Management & Segmentation",
        description: "Advanced segmentation and targeting strategies to deliver personalized experiences across user lifecycle stages.",
        example: "Created 4-persona investor profiles (Conservative, Moderate, Growth, Aggressive) at Multipl improving KYC completions. Built advanced segmentation at Paytm for cross-sell (₹736.4 Cr credit card remittance Oct 2023).",
        framework: "CLM Framework: Audience Segmentation → Persona Mapping → Journey Stages → Personalized Messaging → Conversion Tracking",
        companies: ["Multipl", "Paytm", "Loco.gg"],
        metrics: "₹736.4 Cr incremental revenue from segmentation"
    },
    {
        name: "Gamification & Engagement Loops",
        description: "Design of reward systems, leaderboards, and engagement loops that drive user participation and long-term platform adoption.",
        example: "Created Loco Gold in-app currency with real-world redemptions (vouchers, coupons). Built Streamer Categories (Noob, Normie, Pro) with tiered rewards. Implemented Streamer Spotlight with daily watch-time tracking.",
        framework: "Gamification Framework: Goal Setting → Progress Tracking → Reward Systems → Leaderboards → Real-World Redemption",
        companies: ["Loco.gg", "Multipl", "Nterprise.it"],
        metrics: "19% engagement lift, 157% LTV increase"
    },
    {
        name: "Go-to-Market Strategy & Execution",
        description: "End-to-end go-to-market planning including market positioning, audience targeting, channel strategy, and launch execution.",
        example: "Led comprehensive GTM for Airavat.io (Jan-Sep 2025): audience ID, brand voice, multi-platform social strategy. Executed MetroRide GTM with hyperlocal targeting and driver optimization (SharkTank Season 2).",
        framework: "GTM Framework: Market Analysis → Positioning → Channel Strategy → Campaign Planning → Launch Execution → Performance Tracking",
        companies: ["Airavat.io", "MetroRide", "Multipl", "Paytm"],
        metrics: "Multiple successful platform launches"
    },
    {
        name: "Data-Driven Growth & Analytics",
        description: "Advanced analytics, cohort analysis, attribution modeling, and data visualization to drive strategic growth decisions.",
        example: "Analyzed MAU vs depth identifying 3 low-engagement segments, launching nudges lifting depth by 27%. Built attribution models at Paytm tracking UPI market share to 14.7%. Cohort analysis and affinity modeling across demographic, financial, geographic, app-usage data.",
        framework: "Analytics Framework: Data Collection → Cohort Analysis → Attribution Modeling → Insight Generation → Strategic Recommendations",
        companies: ["Multipl", "Paytm", "Loco.gg", "ZeltaTech Labs"],
        metrics: "27% engagement lift, 14.7% market share growth"
    },
    {
        name: "Brand Partnerships & Revenue Optimization",
        description: "Strategic brand collaboration, co-marketing initiatives, and monetization strategies that drive incremental revenue.",
        example: "Partnered with 150+ lifestyle brands at Multipl embedding reward-linked incentives and co-branded promotions. Drove 39% ARPU increase through brand-integrated monetization. Increased brand redemption from 48.36% to 61.7%.",
        framework: "Partnership Framework: Partner Identification → Co-Branding Strategy → Integration Planning → Performance Tracking → Revenue Optimization",
        companies: ["Multipl", "Bigrin Café", "DBR"],
        metrics: "39% ARPU growth, 61.7% redemption rate"
    },
    {
        name: "Retention Marketing & Moment Marketing",
        description: "Real-time, event-driven marketing strategies leveraging cultural moments and user behavior triggers for maximum relevance.",
        example: "Launched Multipl Premier League with 150+ content pieces across 74 IPL matches using real-time nudges (food triggers during matches). Meme-driven strategy at Loco.gg increasing weekly CTR from 0.83% to 4.81%. Re-engaged users with event-driven campaigns.",
        framework: "Moment Marketing Framework: Trend Identification → Real-Time Planning → Content Creation → Targeted Delivery → Performance Monitoring",
        companies: ["Multipl", "Loco.gg", "Wubba Lubba Dub Dub"],
        metrics: "47% first-time investment lift, 4.81% CTR"
    }
];

// Modal functionality
const modal = document.getElementById('competencyModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalExample = document.getElementById('modalExample');
const modalFramework = document.getElementById('modalFramework');
const modalCompanies = document.getElementById('modalCompanies');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

function openCompetencyModal(index) {
    const competency = competenciesData[index];
    
    modalTitle.textContent = competency.name;
    modalDescription.textContent = competency.description;
    modalExample.innerHTML = competency.example;
    modalFramework.textContent = competency.framework;
    
    modalCompanies.innerHTML = '';
    competency.companies.forEach(company => {
        const badge = document.createElement('span');
        badge.className = 'company-badge';
        badge.textContent = company;
        modalCompanies.appendChild(badge);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCompetencyModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Competency card info button handlers
const competencyInfoButtons = document.querySelectorAll('.competency-info-btn');
competencyInfoButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = button.closest('.competency-card');
        const competencyIndex = parseInt(card.dataset.competency);
        openCompetencyModal(competencyIndex);
    });
});

// Close modal handlers
if (modalClose) {
    modalClose.addEventListener('click', closeCompetencyModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeCompetencyModal);
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeCompetencyModal();
    }
});

// Work experience card expansion
const workCards = document.querySelectorAll('.work-card');

workCards.forEach(card => {
    const header = card.querySelector('.work-header');
    const expandBtn = card.querySelector('.expand-btn');
    
    header.addEventListener('click', () => {
        // Close other cards
        workCards.forEach(otherCard => {
            if (otherCard !== card && otherCard.classList.contains('expanded')) {
                otherCard.classList.remove('expanded');
            }
        });
        
        // Toggle current card
        card.classList.toggle('expanded');
    });
});

// Mentorship card expansion
const mentorshipCards = document.querySelectorAll('.mentorship-card');

mentorshipCards.forEach(card => {
    const header = card.querySelector('.mentorship-header');
    const expandBtn = card.querySelector('.expand-btn');
    
    header.addEventListener('click', () => {
        // Close other cards
        mentorshipCards.forEach(otherCard => {
            if (otherCard !== card && otherCard.classList.contains('expanded')) {
                otherCard.classList.remove('expanded');
            }
        });
        
        // Toggle current card
        card.classList.toggle('expanded');
    });
});

// Skill category collapse/expand
const skillCategories = document.querySelectorAll('.skill-category');

skillCategories.forEach(category => {
    const header = category.querySelector('.skill-category-header');
    
    header.addEventListener('click', () => {
        category.classList.toggle('collapsed');
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
const animateElements = document.querySelectorAll('.work-card, .competency-card, .skill-category, .tool-badge, .education-card, .reference-card, .contact-item');

animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Copy to clipboard functionality (optional enhancement)
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Add copy functionality to contact items (optional)
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach(item => {
    item.addEventListener('dblclick', () => {
        const text = item.querySelector('a')?.textContent || item.textContent;
        copyToClipboard(text);
        
        // Visual feedback
        const originalBg = item.style.background;
        item.style.background = 'rgba(23, 162, 184, 0.2)';
        setTimeout(() => {
            item.style.background = originalBg;
        }, 500);
    });
});

// Journey Stage Interactions
const journeyStages = document.querySelectorAll('.journey-stage');

journeyStages.forEach((stage, index) => {
    stage.addEventListener('mouseenter', () => {
        stage.style.transform = 'translateY(-10px) scale(1.08)';
        stage.style.zIndex = '10';
        
        // Highlight connected arrows
        const arrows = document.querySelectorAll('.journey-arrow');
        if (index < arrows.length) {
            arrows[index].style.color = '#17a2b8';
            arrows[index].style.transform = 'scale(1.3)';
        }
        if (index > 0) {
            arrows[index - 1].style.color = '#17a2b8';
            arrows[index - 1].style.transform = 'scale(1.3)';
        }
    });
    
    stage.addEventListener('mouseleave', () => {
        stage.style.transform = '';
        stage.style.zIndex = '';
        
        // Reset arrows
        const arrows = document.querySelectorAll('.journey-arrow');
        arrows.forEach(arrow => {
            arrow.style.color = '';
            arrow.style.transform = '';
        });
    });
    
    // Click to show detailed popup
    stage.addEventListener('click', () => {
        const stageName = stage.getAttribute('data-stage');
        showJourneyStagePopup(stageName, stage);
    });
});

// Journey Stage Popup
function showJourneyStagePopup(stageName, element) {
    const popupData = {
        awareness: {
            title: 'Awareness Stage',
            description: 'Building brand recognition and reaching potential users through multi-channel marketing.',
            metrics: ['Impressions: 2.9M+ daily (Multipl BEST buses)', 'Brand Recall: 3x increase Gen Z', 'Organic Reach: 83% monthly growth (Bigrin Café)'],
            tactics: ['OOH campaigns', 'SEO optimization', 'Social media presence', 'Content marketing']
        },
        acquisition: {
            title: 'Acquisition Stage',
            description: 'Converting awareness into sign-ups through optimized funnels and CAC-efficient channels.',
            metrics: ['CAC Reduction: 20-31% (Multipl)', 'Install Growth: 43% (organic uplift)', 'Conversion Rate: 11% landing page (fintech event)'],
            tactics: ['Performance marketing', 'Channel attribution', 'Landing page optimization', 'Paid campaigns']
        },
        activation: {
            title: 'Activation Stage',
            description: 'Driving users to first value moment through seamless onboarding and engagement.',
            metrics: ['Activation: 8.7% → 23.2% (Multipl)', 'Time Reduction: 41% (sign-up to investment)', 'KYC Completion: 86% improvement (Paytm)'],
            tactics: ['Onboarding flows', 'KYC optimization', 'Drip campaigns', 'Progressive profiling']
        },
        retention: {
            title: 'Retention Stage',
            description: 'Keeping users engaged through personalized experiences and behavioral triggers.',
            metrics: ['Churn Reduction: 10% (Loco Gold)', 'Retention Lift: 24% (90-day, Multipl TVF)', 'Re-engagement: 22% inactive users'],
            tactics: ['Cohort analysis', 'Behavioral segmentation', 'Nudge campaigns', 'Gamification']
        },
        revenue: {
            title: 'Revenue Stage',
            description: 'Monetizing engaged users through upsells, cross-sells, and value optimization.',
            metrics: ['ARPPU Increase: 87% (Multipl)', 'ARPU Growth: 98% (Loco.gg)', 'Revenue: ₹736.4 Cr (Paytm credit cards)'],
            tactics: ['Dynamic pricing', 'Upsell campaigns', 'Brand partnerships', 'CLV optimization']
        },
        referral: {
            title: 'Referral Stage',
            description: 'Turning satisfied users into advocates who drive organic growth.',
            metrics: ['Organic Growth: 83% monthly (Bigrin)', 'Referral Programs: Implemented at DBR', 'NPS Improvement: Through feedback loops'],
            tactics: ['Referral programs', 'Loyalty rewards', 'Community building', 'Advocacy campaigns']
        }
    };
    
    const data = popupData[stageName] || {};
    
    // Create temporary popup
    const popup = document.createElement('div');
    popup.className = 'journey-popup';
    popup.innerHTML = `
        <div class="journey-popup-content">
            <button class="journey-popup-close">&times;</button>
            <h3>${data.title}</h3>
            <p class="journey-popup-desc">${data.description}</p>
            <div class="journey-popup-section">
                <h4>📊 Key Metrics</h4>
                <ul>
                    ${data.metrics.map(m => `<li>${m}</li>`).join('')}
                </ul>
            </div>
            <div class="journey-popup-section">
                <h4>🎯 Tactics Used</h4>
                <div class="journey-popup-tactics">
                    ${data.tactics.map(t => `<span class="tactic-badge">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    setTimeout(() => popup.classList.add('active'), 10);
    
    const closeBtn = popup.querySelector('.journey-popup-close');
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
        setTimeout(() => popup.remove(), 300);
    });
    
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
            setTimeout(() => popup.remove(), 300);
        }
    });
}

// Enhanced Heatmap Effect on Hover
const heatmapZones = document.querySelectorAll('.heatmap-zone');

heatmapZones.forEach(zone => {
    zone.addEventListener('mouseenter', () => {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'heatmap-ripple';
        zone.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 2000);
    });
});

// Scroll-based keyword banner speed control
let lastScrollY = window.scrollY;
const keywordsBanner = document.querySelector('.keywords-scroll');

window.addEventListener('scroll', () => {
    const scrollSpeed = Math.abs(window.scrollY - lastScrollY);
    const animationSpeed = Math.max(20, 40 - scrollSpeed * 0.5);
    
    if (keywordsBanner) {
        keywordsBanner.style.animationDuration = `${animationSpeed}s`;
    }
    
    lastScrollY = window.scrollY;
});

// Competency Card Enhanced Interactions
const competencyCards = document.querySelectorAll('.competency-card');

competencyCards.forEach((card, index) => {
    // Staggered entrance animation
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Add glow effect on hover
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = `0 0 30px rgba(23, 162, 184, 0.4), 0 15px 40px rgba(23, 162, 184, 0.25)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
    });
});

// Framework Tags Interaction
const frameworkTags = document.querySelectorAll('.framework-tag');

frameworkTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.15) rotate(2deg)';
        tag.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.3)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = '';
        tag.style.boxShadow = '';
    });
});

// Expertise Badges Animation
const expertiseBadges = document.querySelectorAll('.expertise-badge');

expertiseBadges.forEach((badge, index) => {
    badge.style.animationDelay = `${index * 0.2}s`;
    
    badge.addEventListener('click', () => {
        badge.style.animation = 'badgePop 0.6s ease';
        setTimeout(() => {
            badge.style.animation = '';
        }, 600);
    });
});

// Timeline Indicator Pulse
const timelineIndicators = document.querySelectorAll('.timeline-indicator');

timelineIndicators.forEach(indicator => {
    indicator.addEventListener('mouseenter', () => {
        indicator.style.animation = 'pulse 0.8s ease-in-out infinite';
    });
    
    indicator.addEventListener('mouseleave', () => {
        indicator.style.animation = '';
    });
});

// Add CSS for new animations and popups dynamically
const style = document.createElement('style');
style.textContent = `
    .heatmap-ripple {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(23, 162, 184, 0.4) 0%, transparent 70%);
        animation: rippleEffect 2s ease-out;
        pointer-events: none;
        z-index: 0;
    }
    
    @keyframes rippleEffect {
        0% {
            width: 0;
            height: 0;
            opacity: 1;
            transform: translate(-50%, -50%);
        }
        100% {
            width: 500px;
            height: 500px;
            opacity: 0;
            transform: translate(-50%, -50%);
        }
    }
    
    @keyframes badgePop {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2) rotate(5deg);
        }
    }
    
    .journey-popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3000;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 20px;
    }
    
    .journey-popup.active {
        opacity: 1;
    }
    
    .journey-popup-content {
        background: #1a2332;
        border: 2px solid rgba(23, 162, 184, 0.4);
        border-radius: 16px;
        padding: 30px;
        max-width: 600px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
        animation: popupSlideIn 0.3s ease;
    }
    
    @keyframes popupSlideIn {
        from {
            transform: scale(0.8) translateY(-30px);
            opacity: 0;
        }
        to {
            transform: scale(1) translateY(0);
            opacity: 1;
        }
    }
    
    .journey-popup-close {
        position: absolute;
        top: 15px;
        right: 15px;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: #fff;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        line-height: 1;
        transition: all 0.3s ease;
    }
    
    .journey-popup-close:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: rotate(90deg);
    }
    
    .journey-popup-content h3 {
        color: #17a2b8;
        font-size: 1.8rem;
        margin-bottom: 15px;
    }
    
    .journey-popup-desc {
        color: #b8b8b8;
        line-height: 1.6;
        margin-bottom: 25px;
    }
    
    .journey-popup-section {
        margin-bottom: 25px;
    }
    
    .journey-popup-section h4 {
        color: #fff;
        font-size: 1.1rem;
        margin-bottom: 12px;
    }
    
    .journey-popup-section ul {
        list-style: none;
        padding: 0;
    }
    
    .journey-popup-section li {
        padding: 10px;
        padding-left: 25px;
        position: relative;
        color: #d0d0d0;
        line-height: 1.6;
        background: rgba(23, 162, 184, 0.05);
        margin-bottom: 8px;
        border-radius: 8px;
        border-left: 3px solid #17a2b8;
    }
    
    .journey-popup-section li::before {
        content: '✓';
        position: absolute;
        left: 8px;
        color: #17a2b8;
        font-weight: bold;
    }
    
    .journey-popup-tactics {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    
    .tactic-badge {
        background: rgba(23, 162, 184, 0.15);
        color: #17a2b8;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        border: 1px solid rgba(23, 162, 184, 0.3);
    }
`;
document.head.appendChild(style);

// Initialize - trigger scroll event once to set initial state
window.dispatchEvent(new Event('scroll'));