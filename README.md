# GLTC ARK Ad Blocker

## Overview

The **GLTC ARK Ad Blocker** is a simple yet effective browser extension designed to enhance your browsing experience by blocking unwanted advertisements on web pages. Built with JavaScript, HTML, and CSS, this extension seamlessly integrates with your browser to hide or remove ad elements automatically upon page load, providing a cleaner and more enjoyable web experience. Additionally, users can manually block ads and pause or resume the ad blocking functionality as desired.

## Project Structure

The project consists of the following files:

### 1. `manifest.json`

The `manifest.json` file is the cornerstone of any Chrome extension. It contains metadata about the extension, such as its name, version, description, and permissions. In this project, the `manifest.json` file specifies the extension's manifest version, name, description, permissions required (e.g., scripting, webNavigation, and storage), and the files associated with the background script and popup.

### 2. `background.js`

The `background.js` file is a service worker script that runs in the background of the browser. It listens for the `onCompleted` event of `webNavigation`, which triggers when a webpage finishes loading. The script then checks if the ad blocker is paused using `chrome.storage.sync.get`. If not paused, it injects the `blockAds` function into the current tab to block ads automatically.

### 3. `popup.html`

The `popup.html` file defines the user interface of the extension's popup. It contains the structure and style of the popup, including buttons for blocking ads and pausing/resuming the ad blocker. The popup is styled with CSS to provide a modern and user-friendly experience. The HTML includes two buttons: one for manually blocking ads and another for pausing or resuming the ad blocker.

### 4. `popup.js`

The `popup.js` file handles the functionality of the buttons in the popup. It adds event listeners to the "Block Ads" and "Pause/Resume" buttons. When the "Block Ads" button is clicked, the script queries the current active tab and executes the `blockAds` function to hide or remove ad elements. The "Pause/Resume" button toggles the paused state of the ad blocker using `chrome.storage.sync.set`, updating its text accordingly.

### 5. `icons/`

The `icons/` directory contains the icon files used by the extension. Icons are provided in different sizes (16x16, 48x48, and 128x128 pixels) to be used in various parts of the browser UI, such as the toolbar and extension management page.

## Functionality

### Automatic Ad Blocking

The primary feature of the GLTC ARK Ad Blocker is its ability to block ads automatically upon webpage loading. The `blockAds` function in `background.js` is injected into the active tab and searches for elements that match common ad selectors. These elements are then hidden, removed, or modified to collapse their space, effectively removing ads from the user's view.

### Manual Ad Blocking

Users can manually trigger the ad blocking functionality by clicking the "Block Ads" button in the popup. This is particularly useful if new ads appear after the page has loaded or if the user wants to reapply the ad blocking after making changes to the page.

### Pause/Resume Functionality

The extension includes a pause/resume feature, allowing users to temporarily disable the ad blocking functionality. This is managed through a "Pause" button in the popup, which toggles to "Resume" when the ad blocker is paused. The state is stored using `chrome.storage.sync`, ensuring that the pause state persists across browser sessions.

## Design Choices

### Simplicity and Usability

The extension is designed to be simple and user-friendly. The popup interface is minimalistic, providing only the essential controls needed to manage ad blocking. This simplicity ensures that users can quickly understand and use the extension without a steep learning curve.

### Automatic vs. Manual Blocking

Automatic ad blocking on page load ensures that users have a clean browsing experience without needing to take any action. However, recognizing that some users may want control over when ads are blocked, we included a manual blocking button. This combination provides flexibility and caters to different user preferences.

### Pause/Resume Feature

The inclusion of a pause/resume feature acknowledges that there may be scenarios where users want to see ads, such as supporting a favorite website. By allowing users to easily toggle ad blocking, we provide a balanced approach that respects user choice.

### CSS Styling

The CSS styling in `popup.html` enhances the visual appeal and usability of the extension. The buttons are designed with clear, contrasting colors and hover effects, providing a modern and intuitive interface.

## Conclusion

The **GLTC ARK Ad Blocker** is a powerful yet straightforward browser extension that improves web browsing by blocking unwanted ads. Its combination of automatic and manual ad blocking, along with the ability to pause and resume the extension, offers a flexible and user-centric solution. We hope this extension enhances your browsing experience by providing a cleaner, ad-free environment.

If you have any feedback or suggestions, please feel free to reach out. We are committed to continually improving the extension to meet the needs of our users.
