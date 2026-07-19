# QualiFood – Malaysian Street Food Guide

QualiFood is a responsive web application that helps users explore Malaysian street food, popular local dishes, food streets, festivals, visitor tips, and nearby food destinations.

This website was developed as a group project using HTML, CSS, JavaScript, Bootstrap, browser storage, multimedia embedding, Google Maps services, and responsive web design techniques.

## Live Demo

- [GitHub Pages Deployment](https://tetsu19991209-blip.github.io/malaysian-street-food-guide/)
- [Original AWS S3 Deployment](https://qualifood.s3.us-east-1.amazonaws.com/Assignment/HTML/Home.html)

> Interactive Google Maps features require users to configure their own Google Maps API key.

## Main Features

### Popular Malaysian Dishes

- Displays popular Malaysian dishes and detailed food information
- Automatically scrolls food cards horizontally
- Creates an infinite scrolling effect by duplicating card content
- Dynamically displays the selected dish when a card is clicked
- Uses smooth scrolling to move users to the corresponding details
- Embeds food street locations through Google Maps iframes
- Supports responsive layouts for desktop and mobile screens

### Food Street Guide

- Presents popular food streets from different Malaysian states
- Provides real-time client-side search and filtering
- Sorts matching results based on search relevance
- Stores up to 10 recent searches using `sessionStorage`
- Supports search-history filtering, autofill, and individual deletion
- Dynamically updates food street descriptions and images
- Dynamically updates embedded Google Maps locations
- Dynamically switches YouTube videos according to the selected food street

### Discover by Food

- Displays Malaysian food categories in an interactive horizontal carousel
- Provides previous and next carousel controls
- Uses the browser Geolocation API to detect the user's current location
- Uses Google Places nearby search to find food locations
- Displays nearby place names, photographs, and addresses
- Uses a typing animation to display food descriptions
- Dynamically displays nearby food results without reloading the page

### Discover by Location

- Searches for locations in Malaysia
- Supports current-location detection
- Supports predefined city selection
- Uses Google Geocoding to convert location names into map coordinates
- Uses Reverse Geocoding to display readable addresses
- Searches for nearby street food and local food destinations
- Displays custom map markers
- Displays a configurable search-radius circle
- Sorts nearby results based on Google ratings
- Displays place photographs, addresses, and ratings
- Provides driving directions using Google Directions Service
- Stores recent location searches using `sessionStorage`

### Visitor Tips

- Provides travel and food-related visitor tips
- Organizes tips according to category and Malaysian state
- Allows users to save useful tips as bookmarks
- Restores the saved bookmark state when the page is opened again
- Provides visual notifications when bookmarks are added or removed

### Events and Festivals

- Displays Malaysian food-related events and festivals
- Allows users to bookmark selected events
- Stores event bookmarks using `localStorage`
- Dynamically updates bookmark icons based on their saved state
- Restores bookmark states after refreshing or reopening the website

### Bookmarked Page

- Displays all saved visitor tips and events
- Dynamically generates bookmark cards using JavaScript
- Allows users to remove bookmarks
- Updates the bookmark list immediately after removal
- Displays an empty-state message when no bookmarks are available
- Uses toast notifications to confirm bookmark removal

### Additional Interface Features

- Responsive navigation
- Bootstrap-based interface components
- Shared footer loaded dynamically using the Fetch API
- Cookie-consent interface
- Newsletter input validation
- Responsive CSS Grid and Flexbox layouts
- Font Awesome and Bootstrap icons
- Google Maps and YouTube iframe integration

## Technologies Used

### Core Technologies

- HTML5
- CSS3
- JavaScript
- jQuery 3.7.1

### UI and Responsive Design

- Bootstrap 5.3.2
- Bootstrap Icons
- Font Awesome
- CSS Grid
- Flexbox
- Media Queries
- Responsive Web Design

### JavaScript Techniques

- DOM manipulation
- Event listeners
- Event delegation
- Dynamic HTML rendering
- Timers with `setInterval()` and `setTimeout()`
- Smooth horizontal scrolling
- Fetch API
- Promises
- JSON serialization and deserialization
- Custom browser events
- Interface state restoration

### Browser APIs and Storage

- Geolocation API
- `localStorage`
- `sessionStorage`

### Google Services

- Google Maps JavaScript API
- Google Places API
- Google Geocoding Service
- Google Directions Service
- Google Maps Embed

### Multimedia and Deployment

- YouTube Embed
- iframe integration
- AWS S3 static website hosting
- GitHub Pages

## Infinite Food Carousel Implementation

The Popular Dishes page creates an infinite horizontal scrolling effect using JavaScript.

First, the food-card content is duplicated:

```javascript
wrapper.innerHTML += wrapper.innerHTML;
```

The horizontal scroll position is then continuously updated:

```javascript
wrapper.scrollLeft += scrollSpeed;
```

When the scrolling reaches the duplicated section, the scroll position is moved back to the equivalent location in the original section:

```javascript
if (wrapper.scrollLeft >= wrapper.scrollWidth / 2 - scrollSpeed) {
    wrapper.scrollLeft -= wrapper.scrollWidth / 2;
}
```

This creates a continuous scrolling effect without an obvious visual reset.

When a food card is clicked, JavaScript:

1. Identifies the selected dish.
2. Hides the other dish details.
3. Displays the corresponding dish information.
4. Smoothly scrolls to the selected dish section.

## Bookmark System Implementation

The bookmark system is implemented entirely on the client side using JavaScript and the browser's `localStorage`.

### Bookmark Data Structure

Each bookmark is represented as a JavaScript object containing information such as:

```javascript
{
    type: "visitor-tip",
    state: "Perak",
    name: "Local Food Tip",
    description: "Bookmark description",
    image: "../Images/example.jpg"
}
```

The bookmark array is converted into JSON before being stored:

```javascript
localStorage.setItem(
    "bookmarks",
    JSON.stringify(bookmarks)
);
```

Saved bookmark data is restored using:

```javascript
const bookmarks =
    JSON.parse(
        localStorage.getItem("bookmarks")
    ) || [];
```

### Adding and Removing Bookmarks

When a bookmark button is clicked, the system:

1. Reads the existing bookmarks from `localStorage`.
2. Checks whether the selected bookmark already exists.
3. Adds the item if it has not been saved.
4. Removes the item if it is already bookmarked.
5. Saves the updated bookmark array.
6. Updates the bookmark icon and button state.
7. Displays a confirmation message.

Duplicate bookmarks are prevented by comparing properties such as:

- Bookmark type
- State
- Item name

### Dynamic Bookmark Rendering

The Bookmarked Page dynamically generates bookmark cards from the saved data:

```javascript
bookmarks.forEach(item => {
    // Generate and display a bookmark card
});
```

This means the cards are created by JavaScript instead of being permanently written into the HTML page.

### Event Delegation

Event delegation is used to handle clicks on dynamically generated bookmark buttons:

```javascript
container.addEventListener(
    "click",
    function (event) {
        const button =
            event.target.closest(".bookmark-btn");
    }
);
```

This allows JavaScript to handle elements that were created after the page initially loaded.

### Bookmark Interface Feedback

The bookmark system provides:

- Active bookmark icons
- Add and remove notifications
- Toast messages
- Empty-bookmark state
- Automatic restoration of saved states
- Immediate interface updates after deletion

A custom `bookmarksUpdated` event is dispatched after bookmark changes so related interface components can refresh their data.

### Bookmark Storage Behaviour

Because the bookmark system uses `localStorage`:

- Bookmarks remain after refreshing the page.
- Bookmarks remain after closing and reopening the browser.
- Bookmark data is stored only in the current browser.
- Bookmark data is not synchronized between devices.
- No backend database or user account is required.

## Search History Implementation

The Food Street Guide and Discover by Location pages use `sessionStorage` to store recent searches.

The system supports:

- A maximum of 10 search records
- Real-time search-history filtering
- Search-history autofill
- Individual search-history deletion
- Automatic hiding when users click outside the history box

Example:

```javascript
sessionStorage.setItem(
    "searchHistory",
    JSON.stringify(searchHistory)
);
```

The stored search history is restored using:

```javascript
let searchHistory =
    JSON.parse(
        sessionStorage.getItem("searchHistory")
    ) || [];
```

Unlike `localStorage`, `sessionStorage` is cleared when the browser session ends.

## Dynamic Map and Video Integration

The Food Street Guide stores map and YouTube URLs inside JavaScript objects.

When a user selects a food street, JavaScript dynamically updates:

- Street name
- State
- Description
- Street image
- Google Maps iframe source
- YouTube iframe source
- Location information
- Opening hours

This allows the page to display different food streets without loading a separate page for every location.

## Browser Storage Summary

| Storage technology | Pages | Purpose |
|---|---|---|
| `localStorage` | Visitor Tips, Events & Festivals, Bookmarked Page | Persists bookmarks after refreshing or closing the browser |
| `sessionStorage` | Food Street Guide, Discover by Location | Stores recent searches during the current browser session |

## Google Maps Features

The project uses Google Maps services to implement:

- Interactive maps
- Nearby place searching
- Current-location detection
- Geocoding
- Reverse geocoding
- Custom map markers
- Search-radius visualization
- Place photographs
- Place ratings
- Driving directions
- Fixed map embedding with iframes

## Google Maps API Setup

This repository does not provide a Google Maps API key. Users must create and configure their own key.

### Required APIs

Enable the following services in Google Cloud Console:

- Maps JavaScript API
- Places API
- Geocoding API
- Directions API

### Configuration

Open these files:

```text
HTML/discover-food.html
HTML/discover-location.html
```

Find:

```text
YOUR_GOOGLE_MAPS_API_KEY
```

Replace it with your own API key.

Before deployment, restrict the key using:

- HTTP referrer restrictions
- Permitted Google API restrictions
- Usage quotas
- Billing alerts

Do not commit an unrestricted API key to a public repository.

## Running the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/tetsu19991209-blip/malaysian-street-food-guide.git
```

### 2. Open the Project

Open the cloned project folder in Visual Studio Code.

### 3. Configure Google Maps

Replace `YOUR_GOOGLE_MAPS_API_KEY` with your own restricted key if you want to use the interactive map features.

### 4. Start the Website

Install the Live Server extension in Visual Studio Code.

Open:

```text
index.html
```

Then select:

```text
Open with Live Server
```

The root `index.html` redirects users to:

```text
HTML/Home.html
```

## Team Contributions

| Team member | Main contributions |
|---|---|
| Chong Zhi Cong | Popular Dishes and Food Street Guide |
| Yap Ern Ru | Visitor Tips and Bookmarked Page |
| Shak Yong Sim | About & Contact and Events & Festivals |
| Jimmy Wong Jia Cheng | Discover by Food and Discover by Location |

## My Contribution

I developed the Popular Dishes and Food Street Guide sections.

My main contributions included:

- Developing the automatic horizontal food carousel
- Implementing the infinite scrolling effect
- Creating interactive food cards and dynamic dish details
- Implementing client-side food street search
- Filtering and sorting matching food street results
- Implementing search history using `sessionStorage`
- Supporting search-history autofill and deletion
- Dynamically updating food street descriptions and images
- Integrating Google Maps Embed through iframes
- Integrating and dynamically switching YouTube videos
- Loading the shared footer using the Fetch API
- Supporting responsive layouts across desktop and mobile screens

## Project Structure

```text
malaysian-street-food-guide/
├── CSS/
│   └── Page styling and responsive layouts
├── Food/
│   └── Food-related image assets
├── Header Photo/
│   └── Page header images
├── HTML/
│   └── Website pages
├── Images/
│   └── Shared image assets
├── JS/
│   └── JavaScript functionality
├── Team asset folders/
│   └── Member-specific images and content
├── index.html
│   └── Website entry point
└── README.md
    └── Project documentation
```

## Project Limitations

- Google Maps interactive features require a user-provided API key.
- Bookmark data is stored only in the user's current browser.
- Search history is cleared when the browser session ends.
- The project does not include a backend server.
- The project does not include user authentication.
- The newsletter form is a front-end demonstration and does not send emails.
- Some social links and asynchronous responses are simulated for demonstration.

## Notes

- This project was developed for educational purposes.
- It is a front-end web application without a backend database.
- The original project was deployed using AWS S3.
- A GitHub Pages version is also available for portfolio demonstration.