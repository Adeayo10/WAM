import {
  propertyDetailsTemplate,
  propertyCardTemplate,
  handleReservationFormSubmit /*toggleDescription*/,
} from "../js/propertyDetails.js";
document.addEventListener("DOMContentLoaded", () => {
  const propertyList = document.querySelector("#property-list");
  const propertyDetails = document.querySelector("#property-details");
  const searchBar = document.querySelector("#search-bar");
  const searchButton = document.querySelector("#search-button");

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
      propertyList.innerHTML = properties.map(propertyCardTemplate).join("");
    }

    static displayPropertyDetails(property) {
      propertyList.style.display = "none";
      propertyDetails.style.display = "block";
      searchBar.style.display = "none";
      searchButton.style.display = "none";
      propertyDetails.innerHTML = propertyDetailsTemplate(property);
      document
        .querySelector("#reservation-form")
        .addEventListener("submit", handleReservationFormSubmit);
    }
  }

  // class PropertyController {
  //     /**
  //      * Handles the search functionality for properties.
  //      * Filters properties based on the search input and displays the results.
  //      * If no properties are found, displays a "not found" message.
  //      *
  //      * @static
  //      * @async
  //      * @returns {Promise<void>}
  //      */
  //     static async handleSearch() {}

  //     /**
  //      * Displays a "Property not found" message.
  //      *
  //      * @static
  //      */
  //     static notFound() {}

  //     /**
  //      * Displays the details of a specific property based on the provided ID.
  //      *
  //      * @static
  //      * @async
  //      * @param {number} id - The ID of the property to view.
  //      * @returns {Promise<void>}
  //      */
  //     static async viewProperty(id) {}

  //     /**
  //      * Navigates back to the property list view from the property details view.
  //      *
  //      * @static
  //      */
  //     static goBack() {}
  // }

  class PropertyController {
    static async handleSearch() {
      const properties = await PropertyService.loadContent("./db.json");
      const searchTerm = searchBar.value.toLowerCase();
      const filteredProperties = properties.filter(
      (property) =>
        property.name.toLowerCase().includes(searchTerm) ||
        property.location.toLowerCase().includes(searchTerm) ||
        property.type.toLowerCase().includes(searchTerm) ||
        property.category.toLowerCase().includes(searchTerm) ||
        property.price.toLowerCase().includes(searchTerm) ||
        property.berRating.toLowerCase().includes(searchTerm)
      );

      if (filteredProperties.length === 0) {
      PropertyController.notFound();
      return;
      }

      // const sortBy = document.querySelector("#sort-by").value;
      // filteredProperties.sort((a, b) => {
      // if (a[sortBy] < b[sortBy]) return -1;
      // if (a[sortBy] > b[sortBy]) return 1;
      // return 0;
      // });

      PropertyRenderer.displayProperties(filteredProperties);
    }

    static notFound() {
      propertyList.innerHTML = "<h2>Property not found</h2>";
    }

    static async viewProperty(id) {
      const properties = await PropertyService.loadContent("./db.json");
      const property = properties.find((p) => p.id == id);
      if (property) {
        PropertyRenderer.displayPropertyDetails(property);
      }
    }

    static goBack() {
      propertyDetails.style.display = "none";
      propertyList.style.display = "flex";
      searchBar.style.display = "block";
      searchButton.style.display = "block";
    }
  }

  window.viewProperty = PropertyController.viewProperty;
  window.goBack = PropertyController.goBack;

  (async () => {
    const properties = await PropertyService.loadContent("./db.json");
    PropertyRenderer.displayProperties(properties);
  })();

  searchButton.addEventListener("click", PropertyController.handleSearch);
});
