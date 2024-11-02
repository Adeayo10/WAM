# A report on the development of a Single Page Application for a Real Estate Property Listing Website

# Introduction
This report outlines the development of a Single Page Application (SPA) for a real estate property listing website. The application allows users to search for properties, view detailed information about each property, and book viewing. The report will cover the problem statement, objectives, scope, assumptions, constraints, stakeholders, definitions, and references. The report will also cover the approach to the problem, site map, layouts, and conclusion.

## Problem Statement
The goal is to develop a user-friendly SPA that enables users to search for properties, view detailed information, and book viewings. The application should be responsive, efficient, and provide a seamless user experience.

## Objective
The primary objective is to create an SPA that:

- Allows users to search for properties based on various criteria.
- Displays detailed information about each property.
- Provides a booking form for users to schedule viewings.
- Ensures a responsive and intuitive user interface.

## Scope
The scope of this project includes:

- Developing the front-end using HTML JavaScript and a CSS framework(Bootstrap).
- Simulating back-end data using a JSON file.
- Implementing search functionality, property details view, and booking form.
- Ensuring the application is responsive and works across different devices.

## Assumptions
- Users have access to modern web browsers.
- The JSON file contains accurate and up-to-date property data.
- Users have basic knowledge of navigating web applications.

## Constraints
- Limited time for development and testing.
- The application must be lightweight and load quickly.
- The JSON file size should be manageable to ensure performance.


## Definitions
- SPA (Single Page Application): A web application that loads a single HTML page and dynamically updates the content as the user interacts with the app.
- JSON (JavaScript Object Notation): A lightweight data-interchange format used to simulate back-end data.
- Dynamic Content: Content that changes based on user interactions without reloading the entire page.
- Responsive Design: Design approach that ensures the application adapts to different screen sizes and devices.
- Dynamic rendering: Rendering content on the client-side based on user interactions.
- ARIA (Accessible Rich Internet Applications): A set of attributes that define ways to make web content more accessible to people with disabilities.
- MVC (Model-View-Controller): A design pattern that separates an application into three main components: the model (data), the view (UI), and the controller (logic).
- DOM (Document Object Model): A programming interface for HTML and XML documents that represents the structure of the document as a tree of objects.
- BOM (Browser Object Model): A set of objects provided by the browser that allow interaction with the browser window.
- Wireframe: A visual representation of the layout and structure of a web application.
- Site Map: A diagram that shows the structure and navigation flow of a web application.
- Layout: The arrangement of elements on a web page, including the structure, spacing, and visual hierarchy.
- Separation of Concerns: A design principle that advocates breaking a program into distinct sections, each addressing a separate concern.
- Modular Code: Code that is organized into separate modules or components, making it easier to maintain and extend.
- Accessibility: The practice of designing web applications that are usable by people with disabilities.
- Semantic HTML: HTML elements that convey meaning and structure to both the browser and the developer.
- ARIA Attributes: Attributes that can be added to HTML elements to improve accessibility for users with disabilities.


# Approach 
## Approach to the problem
**Requirement Analysis:** The first step was to understand the requirement criteria for the property listing application, including the features needed such as property search, property details view, and booking a viewing.

**Technology Stack Selection:** The next decision was to choose the appropriate technologies for the front-end and back-end. For this project, we are using HTML CSS and JavaScript for the front-end,and a JSON file to simulate the back-end data.

**Designing the Application Structure:** This involved planning the structure of the application, including the main components and how they interact. This includes components for the property list, property details, search functionality, and booking form. The framing was done using excalidraw. 
![wireframing](/images/WAM.png)

**Creating a Site Map:** This had to do with developing a a site map to outline the different views and their relationships. This helps in understanding the navigation flow within the SPA.

**Implementing the Components:** Develop the individual components based on the planned structure. This includes creating templates for property cards and property details, and implementing the search functionality.

**Styling the Application:** Applied CSS to style the components and ensure a responsive design. Josh Comeu's CSS framework was used for this project. Also Implemented Boostrap for the project when desigining the carousal for the property details.

**Adding Interactivity:** Implement JavaScript to handle user interactions, such as searching for properties, viewing property details, and submitting the booking form.

**Index.html and Component Interaction:** The index.html file serves as the main entry point for the application. It includes the basic structure of the page and links to the necessary CSS and JavaScript files. The HTML file contains placeholders (e.g., <div id="propertyList"></div>, <div id="propertyDetails"></div>) where the dynamic content will be injected by the JavaScript components. The components are responsible for rendering the property list, property details, and handling user interactions.

**Using Classes for MVC and Separation of Concerns:** The main.js file uses classes to separate the application into different layers, following the Model-View-Controller (MVC) pattern. This creates a horizontal separation of concerns, making the code more modular and maintainable. The PropertyController class handles the business logic and user interactions, the PropertyRenderer class is responsible for updating the DOM with the property data, and the PropertyService class manages data fetching and manipulation.

**Modular and Extensible Code:** The PropertyDetailsTemplate module was created to make the code more modular and extensible. This approach allows for easier maintenance and the addition of new features in the future. By separating the templates into their own modules, we ensure that the codebase is organized and components are reusable.


## Site Map

The site map outlines the different views and their relationships within the SPA. It helps in understanding the navigation flow and the hierarchy of the application. The site map for the property listing application is as follows:
![site map](/images/siteMap.png)

- **Home (/)**

The main entry point of the application, which redirects to the property list view.

- **Property List (/properties)**

Displays a list of properties with a search bar to filter properties.
Each property is represented by a property card component.

- **Property Details (/properties/:id)**

Displays detailed information about a specific property.
Includes components for the property image, description, details, media carousel, and booking form.

- **Not Found (/not-found)**

Displays a "Property not found" message if the property ID does not exist.


# Layouts

### Approach for Deciding the Layouts
The layout decisions were based on the wireframe design and the site map. The wireframe design provided a visual representation of the application's structure and helped in deciding the layout for each view. The site map outlined the navigation flow and the hierarchy of the application, which influenced the layout decisions. The following factors were considered when deciding the layouts:

**SPA Layout Approach:** The application follows a single-page layout, where the content is dynamically updated without page reloads. This provides a seamless user experience and faster navigation.
The application uses a modular approach, with separate components for the property list, property details, and booking form. This separation of concerns makes the code more maintainable and extensible.
Responsive Design: Ensure the application works well on different devices, including desktops, tablets, and mobile phones. Use a CSS framework like Bootstrap to achieve this.

**Intuitive Navigation:** The layout was designed to provide easy navigation between the property list and property details views. clear and conssitent navigation was implemented to enhance the user experience.

**Consistent Styling:** consistent styling was applied using Josh comeu default styling across the application to provide a cohesive look and feel.

**User Experience:** Focused on providing a seamless user experience by minimizing page reloads and using dynamic content updates. Implemented features like "View More" for long descriptions to enhance readability.

**Accessibility:**  we Ensured that the application is accessible to all users, including those with disabilities. By Using semantic HTML elements and ARIA attributes where necessary.

The layout structure was influenced by the wireframe design and the site map. The property list view displays a flex display of property cards with basic information, while the property details view shows detailed information about a specific property. 
modular code structure and separation of concerns made the application more maintainable and extensible. 

# Conclusion
The development of the SPA for property listings involved careful planning and execution. By following a structured approach, we were able to create a user-friendly and responsive application that meets the requirements. The use of modern web technologies and best practices ensured a seamless user experience. The site map and layout decisions played a crucial role in achieving the desired functionality and usability. The modular code structure and separation of concerns made the application more maintainable and extensible. Overall, the project was a success, and the application is ready for deployment.

## References
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- [W3Schools](https://www.w3schools.com/)
- [Stack Overflow](https://stackoverflow.com/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [JSON.org](https://www.json.org/json-en.html)
- [Building an SPA](https://matthieubertrand5.medium.com/build-a-javascript-single-page-application-a0e0e2c92965)
- [Rendering Dynamic content](https://www.youtube.com/watch?v=PDzB2hI0esQ)
- [Building a SPA](https://www.sencha.com/blog/building-single-page-applications-spas-with-javascript-frameworks/)
- [Difference etween DOM and BOM](https://www.geeksforgeeks.org/what-is-the-difference-between-dom-and-bom/)

- [Writing javascrit documentation](https://dev.to/stephencweiss/how-to-write-javascript-documentation-4c1l)
- [Accesibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
```



