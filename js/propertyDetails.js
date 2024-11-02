window.toggleDescription = function () {
  const moreText = document.querySelector(".more-text");
  const viewMoreButton = document.querySelector(".view-more-button");
  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    viewMoreButton.textContent = "View Less";
  } else {
    moreText.style.display = "none";
    viewMoreButton.textContent = "View More";
  }
};
export const propertyCardTemplate = (property) => `
  <div class="property-card">
      <img src="${property.featuredMedia}" alt="${property.name}" class="property-image">
      <div class="property-details">
          <h2 class="property-name">${property.name}</h2>
          <p class="properity-location">${property.origin}, ${property.roastedIn}</p>
          <p class="property-price">Price: $${property.type}</p>
          <button onclick="viewProperty(${property.id})" class="view-button">View Property</button>
      </div>
  </div>
`;

/**
 * Generates an HTML template for displaying property details.
 *
 * @param {Object} property - The property object containing details to be displayed.
 * @param {string} property.featuredMedia - URL of the featured media image.
 * @param {string} property.name - Name of the property.
 * @param {string} property.origin - Origin of the property.
 * @param {string} property.roastedIn - Location where the property is roasted.
 * @param {string} property.type - Type of the property.
 * @param {string} property.caffinated - Caffination status of the property.
 * @param {number} [property.price=400] - Price of the property. Defaults to 400 if not provided.
 * @param {string} [property.location] - Location of the property.
 * @param {string} [property.energyRating] - Energy rating of the property.
 * @param {string} [property.details] - Additional details about the property.
 * @param {string} property.description - Description of the property.
 * @param {Array<Object>} property.otherMedia - Array of other media objects.
 * @param {string} property.otherMedia[].src - URL of the other media image.
 * @returns {string} HTML template string for the property details.
 */
export const reservationFormTemplate = () => `
    <form id="reservation-form">
            <h3>Book a Viewing</h3>
            <input type="text" id="name" placeholder="Your Name" required>
            <input type="email" id="email" placeholder="Your Email" required>
            <input type="date" id="date" required>
            <button type="submit">Submit</button>
    </form>
`;

export const propertyDetailsTemplate = (property) => `
    <div class="property-details-card">
            <img src="${property.featuredMedia}" alt="${
  property.name
}" class="property-details-image">
            <div class="property-details-info">
                <h2 class="property-details-name">${property.name}</h2>
                <p class="property-details-origin"><strong>Origin:</strong> ${
                  property.origin
                }</p>
                <p class="property-details-roasted"><strong>Roasted In:</strong> ${
                  property.roastedIn
                }</p>
                <p class="property-details-type"><strong>Type:</strong> ${
                  property.type
                }</p>
                <p class="property-details-caffinated"><strong>Caffinated:</strong> ${
                  property.caffinated
                }</p>
                <p class="property-details-price"><strong>Price:</strong> $${
                  property.price ? property.price : "400"
                }</p>
                <p class="property-details-location"><strong>Location:</strong> ${
                  property.location ? property.location : ""
                }</p>
                <p class="property-details-energyRating"><strong>Energy Rating:</strong> ${
                  property.energyRating ? property.energyRating : ""
                }</p>
                <p class="property-details-details"><strong>Details:</strong> ${
                  property.details ? property.details : ""
                }</p>
                <p class="property-details-description">
                        ${property.description.substring(0, 100)}...
                        <span class="more-text" style="display:none;">${property.description.substring(
                          100
                        )}</span>
                        <button class="view-more-button" onclick="toggleDescription()">View More</button>
                </p>
            </div>
            <div id="propertyCarousel" class="carousel slide property-details-media" data-ride="carousel">
                    <div class="carousel-inner">
                            ${property.otherMedia
                              .map(
                                (media, index) => `
                                    <div class="carousel-item ${
                                      index === 0 ? "active" : ""
                                    }">
                                            <img src="${
                                              media.src
                                            }" alt="Media" class="property-other-media">
                                    </div>
                            `
                              )
                              .join("")}
                    </div>
                    <a class="carousel-control-prev" href="#propertyCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#propertyCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                    </a>
            </div>      
            ${reservationFormTemplate()}
            <button onclick="goBack()">Back to Listings</button>
    </div>
`;

export function handleReservationFormSubmit(e) {
  e.preventDefault();
  alert("Viewing booked successfully!");
}
