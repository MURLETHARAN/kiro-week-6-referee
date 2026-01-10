const comparisons = {
    backend: {
        title: "Backend Framework Comparison",
        technologies: {
            nodejs: {
                name: "Node.js",
                pros: [
                    "Single language (JavaScript) for frontend and backend",
                    "Huge npm ecosystem with packages for everything",
                    "Fast development cycle and hot reloading",
                    "Great for real-time applications",
                    "Large talent pool",
                    "Excellent for APIs and microservices",
                    "Lower hosting costs"
                ],
                cons: [
                    "JavaScript's loose typing can lead to runtime errors",
                    "Callback hell and async complexity for beginners",
                    "Single-threaded nature limits CPU-intensive tasks",
                    "Rapid ecosystem changes can break dependencies",
                    "Less structured - easy to create messy code"
                ],
                bestFor: "Real-time apps, APIs, rapid prototyping, teams with frontend JavaScript experience"
            },
            django: {
                name: "Django (Python)",
                pros: [
                    "Batteries included - authentication, admin panel, ORM out of the box",
                    "Python's readable syntax is beginner-friendly",
                    "Excellent documentation and learning resources",
                    "Built-in security features and best practices",
                    "Strong convention over configuration",
                    "Great for content-heavy applications",
                    "Mature ecosystem with stable packages"
                ],
                cons: [
                    "Can be overkill for simple APIs",
                    "Python's performance limitations for high-traffic apps",
                    "Monolithic structure can feel restrictive",
                    "Steeper learning curve for the full framework",
                    "Less flexibility compared to micro-frameworks"
                ],
                bestFor: "Content management, e-commerce, data-driven applications, teams new to web development"
            },
            springboot: {
                name: "Spring Boot (Java)",
                pros: [
                    "Enterprise-grade with excellent tooling and IDE support",
                    "Strong typing catches errors at compile time",
                    "Exceptional performance and scalability",
                    "Comprehensive testing framework",
                    "Mature ecosystem with proven patterns",
                    "Great for complex business logic",
                    "Strong community and corporate backing"
                ],
                cons: [
                    "Steepest learning curve, especially for beginners",
                    "More verbose code compared to other options",
                    "Longer development cycles",
                    "Higher complexity for simple applications",
                    "Requires understanding of Java ecosystem",
                    "Can be overwhelming for small teams"
                ],
                bestFor: "Complex business applications, teams with Java experience, applications requiring high performance"
            }
        },
        matrix: [
            {
                factor: "Development Speed",
                nodejs: { rating: 5, label: "Excellent" },
                django: { rating: 4, label: "Good" },
                springboot: { rating: 2, label: "Slow" }
            },
            {
                factor: "Learning Curve",
                nodejs: { rating: 4, label: "Moderate" },
                django: { rating: 4, label: "Moderate" },
                springboot: { rating: 2, label: "Steep" }
            },
            {
                factor: "Talent Availability",
                nodejs: { rating: 5, label: "Abundant" },
                django: { rating: 3, label: "Good" },
                springboot: { rating: 4, label: "Good" }
            },
            {
                factor: "Hosting Costs",
                nodejs: { rating: 5, label: "Low" },
                django: { rating: 4, label: "Medium" },
                springboot: { rating: 3, label: "Higher" }
            },
            {
                factor: "Long-term Maintainability",
                nodejs: { rating: 3, label: "Fair" },
                django: { rating: 4, label: "Good" },
                springboot: { rating: 5, label: "Excellent" }
            },
            {
                factor: "Scalability Potential",
                nodejs: { rating: 4, label: "Good" },
                django: { rating: 3, label: "Fair" },
                springboot: { rating: 5, label: "Excellent" }
            }
        ]
    },
    hardware: {
        title: "Hardware Platform Comparison",
        technologies: {
            arduino: {
                name: "Arduino Uno",
                pros: [
                    "Simple, focused microcontroller",
                    "Real-time operation with predictable timing",
                    "Extremely low power consumption (20-50mA)",
                    "Beginner-friendly IDE and simplified C++",
                    "Huge community with countless tutorials",
                    "Plug-and-play with sensors and actuators",
                    "No operating system to crash",
                    "Instant boot (milliseconds)",
                    "Very affordable ($20-30)"
                ],
                cons: [
                    "Limited processing power (16MHz, 32KB storage)",
                    "No built-in networking (requires modules)",
                    "Basic debugging capabilities",
                    "Limited memory for complex programs",
                    "No multitasking - runs one program loop",
                    "Requires separate computer for programming"
                ],
                bestFor: "LED controllers, sensor monitoring, motor control, battery-powered projects, learning electronics"
            },
            raspberrypi: {
                name: "Raspberry Pi Zero 2 W",
                pros: [
                    "Full Linux computer with WiFi and Bluetooth",
                    "Much more processing power (1GHz quad-core)",
                    "Can run multiple programs simultaneously",
                    "Built-in networking for IoT projects",
                    "Supports cameras, displays, and USB devices",
                    "Can program directly on the device",
                    "Excellent for data logging and web interfaces",
                    "Strong Python ecosystem for beginners"
                ],
                cons: [
                    "Higher power consumption (150-400mA)",
                    "Requires microSD card that can corrupt",
                    "Boot time of 20-60 seconds",
                    "More complex setup and troubleshooting",
                    "Overkill for simple sensor reading",
                    "Requires proper shutdown to avoid corruption",
                    "More expensive with accessories ($35-55 total)"
                ],
                bestFor: "Home automation hubs, security cameras, weather stations, IoT projects, learning programming"
            }
        },
        matrix: [
            {
                factor: "Power Consumption",
                arduino: { rating: 5, label: "Excellent (20-50mA)" },
                raspberrypi: { rating: 2, label: "High (150-400mA)" }
            },
            {
                factor: "Programming Complexity",
                arduino: { rating: 3, label: "Moderate (C++)" },
                raspberrypi: { rating: 4, label: "Easy (Python)" }
            },
            {
                factor: "Processing Power",
                arduino: { rating: 2, label: "Limited (16MHz)" },
                raspberrypi: { rating: 4, label: "Good (1GHz quad)" }
            },
            {
                factor: "Real-time Control",
                arduino: { rating: 5, label: "Excellent" },
                raspberrypi: { rating: 2, label: "Limited" }
            },
            {
                factor: "Networking Capability",
                arduino: { rating: 2, label: "Requires modules" },
                raspberrypi: { rating: 5, label: "Built-in WiFi/BT" }
            },
            {
                factor: "Battery Life",
                arduino: { rating: 5, label: "Months" },
                raspberrypi: { rating: 2, label: "Days to weeks" }
            },
            {
                factor: "Setup Complexity",
                arduino: { rating: 4, label: "Simple" },
                raspberrypi: { rating: 2, label: "Complex" }
            }
        ]
    }
};

// DOM elements
const categorySelect = document.getElementById('category');
const comparisonContainer = document.getElementById('comparison-container');
const techCardsContainer = document.getElementById('tech-cards');
const matrixContent = document.getElementById('matrix-content');

// Event listeners
categorySelect.addEventListener('change', handleCategoryChange);

function handleCategoryChange() {
    const selectedCategory = categorySelect.value;
    
    if (!selectedCategory) {
        comparisonContainer.classList.add('hidden');
        return;
    }
    
    const comparison = comparisons[selectedCategory];
    if (comparison) {
        renderComparison(comparison);
        comparisonContainer.classList.remove('hidden');
    }
}

function renderComparison(comparison) {
    // Render technology cards
    renderTechCards(comparison.technologies);
    
    // Render comparison matrix
    renderMatrix(comparison.matrix, Object.keys(comparison.technologies));
}

function renderTechCards(technologies) {
    techCardsContainer.innerHTML = '';
    
    Object.entries(technologies).forEach(([key, tech]) => {
        const card = document.createElement('div');
        card.className = 'tech-card';
        
        card.innerHTML = `
            <h3>${tech.name}</h3>
            
            <div class="pros">
                <h4>✅ Pros</h4>
                <ul>
                    ${tech.pros.map(pro => `<li>${pro}</li>`).join('')}
                </ul>
            </div>
            
            <div class="cons">
                <h4>❌ Cons</h4>
                <ul>
                    ${tech.cons.map(con => `<li>${con}</li>`).join('')}
                </ul>
            </div>
            
            <div class="best-for">
                <strong>Best for:</strong> ${tech.bestFor}
            </div>
        `;
        
        techCardsContainer.appendChild(card);
    });
}

function renderMatrix(matrix, techKeys) {
    const table = document.createElement('table');
    table.className = 'matrix-table';
    
    // Create header
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Factor</th>
        ${techKeys.map(key => `<th>${comparisons[categorySelect.value].technologies[key].name}</th>`).join('')}
    `;
    table.appendChild(headerRow);
    
    // Create rows
    matrix.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${row.factor}</strong></td>
            ${techKeys.map(key => {
                const rating = row[key];
                return `
                    <td>
                        <div class="rating">
                            <div class="rating-bar">
                                <div class="rating-fill rating-${getRatingClass(rating.rating)}" 
                                     style="width: ${(rating.rating / 5) * 100}%"></div>
                            </div>
                            <span>${rating.label}</span>
                        </div>
                    </td>
                `;
            }).join('')}
        `;
        table.appendChild(tr);
    });
    
    matrixContent.innerHTML = '';
    matrixContent.appendChild(table);
}

function getRatingClass(rating) {
    if (rating >= 4) return 'high';
    if (rating >= 3) return 'medium';
    return 'low';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {

});
