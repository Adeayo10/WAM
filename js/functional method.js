document.addEventListener('DOMContentLoaded', () => {
    const propertyList = document.querySelector('#property-list');
    const propertyDetails = document.querySelector('#property-details');
    const searchBar = document.querySelector('#search-bar');
    const searchButton = document.querySelector('#search-button');

    const loadContent = async (url) => {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    };

    const displayProperties = (properties) => {
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
    };

    const displayPropertyDetails = (property) => {
        propertyList.style.display = 'none';
        propertyDetails.style.display = 'block';
        searchBar.style.display = 'none';
        searchButton.style.display = 'none';
        propertyDetails.innerHTML = `
            <h2>${property.name}</h2>
            <img src="${property.image}" alt="${property.name}">
            <p>Price: $${property.price}</p>
            <p>Location: ${property.location}</p>
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
    };

    const handleSearch = async () => {
        const properties = await loadContent('./db.json');
        const filteredProperties = properties.filter(property =>
            property.title.toLowerCase().includes(searchBar.value.toLowerCase()) ||
            property.address.state.toLowerCase().includes(searchBar.value.toLowerCase()) ||
            property.address.city.toLowerCase().includes(searchBar.value.toLowerCase())
        );
        displayProperties(filteredProperties);
    };

    window.viewProperty = async (id) => {
        const properties = await loadContent('./db.json');
        const property = properties.find(p => p.id == id);
        if (property) {
            displayPropertyDetails(property);
        }
    };

    window.goBack = () => {
        propertyDetails.style.display = 'none';
        propertyList.style.display = 'flex';
        searchBar.style.display = 'block';
        searchButton.style.display = 'block';
    };

    (async () => {
        const properties = await loadContent('./db.json');
        displayProperties(properties);
    })();

    searchButton.addEventListener('click', handleSearch);
});
