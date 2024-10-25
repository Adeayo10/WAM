document.addEventListener('DOMContentLoaded', () => {
    const propertyList = document.querySelector('#property-list');
    const propertyDetails = document.querySelector('#property-details');
    const searchBar = document.querySelector('#search-bar');
    const searchButton = document.querySelector('#search-button');

    class PropertyService {
        static async loadContent(url) {
            try {
                const response = await fetch(url);
                return await response.json();
            } catch (error) {
                console.error(error);
            }
        }
    }

    class PropertyRenderer {
        static displayProperties(properties) {
            propertyList.innerHTML = properties.map(property => `
                <div class="property-card">
                    <img src="${property.images[0] || property.images[1]}" alt="${property.title}" class="property-image">
                    <div class="property-details">
                        <h2 class="property-name">${property.title}</h2>
                        <p class="property-location">${property.address.city}, ${property.address.state}</p>
                        <p class="property-price">Price: $${property.price}</p>
                        <button onclick="viewProperty(${property.id})" class="view-button">View Property</button>
                    </div>
                </div>
            `).join('');
        }

        static displayPropertyDetails(property) {
            propertyList.style.display = 'none';
            propertyDetails.style.display = 'block';
            searchBar.style.display = 'none';
            searchButton.style.display = 'none';
            propertyDetails.innerHTML = `
                <h2>${property.title}</h2>
                <img src="${property.images[0] || property.images[1]}" alt="${property.title}">
                <p>Price: $${property.price}</p>
                <p>Location: ${property.address.city}, ${property.address.state}</p>
                <p>Energy Rating: ${property.energyRating}</p>
                <p>Details: ${property.details}</p>
                <p>Features: ${property.features.join(', ')}</p>
                <form id="reservation-form">
                    <h3>Book a Viewing</h3>
                    <input type="text" id="name" placeholder="Your Name" required>
                    <input type="email" id="email" placeholder="Your Email" required>
                    <input type="date" id="date" required>
                    <button type="submit">Submit</button>
                </form>
                <button onclick="goBack()">Back to Listings</button>
            `;

            document.querySelector('#reservation-form').addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Viewing booked successfully!');
            });
        }
    }

    class PropertyController {
        static async handleSearch() {
            const properties = await PropertyService.loadContent('./db.json');
            const filteredProperties = properties.filter(property =>
                property.title.toLowerCase().includes(searchBar.value.toLowerCase()) ||
                property.address.state.toLowerCase().includes(searchBar.value.toLowerCase()) ||
                property.address.city.toLowerCase().includes(searchBar.value.toLowerCase())
            );
            PropertyRenderer.displayProperties(filteredProperties);
        }

        static async viewProperty(id) {
            const properties = await PropertyService.loadContent('./db.json');
            const property = properties.find(p => p.id == id);
            if (property) {
                PropertyRenderer.displayPropertyDetails(property);
            }
        }

        static goBack() {
            propertyDetails.style.display = 'none';
            propertyList.style.display = 'flex';
            searchBar.style.display = 'block';
            searchButton.style.display = 'block';
        }
    }

    window.viewProperty = PropertyController.viewProperty;
    window.goBack = PropertyController.goBack;

    (async () => {
        const properties = await PropertyService.loadContent('./db.json');
        PropertyRenderer.displayProperties(properties);
    })();

    searchButton.addEventListener('click', PropertyController.handleSearch);
});
