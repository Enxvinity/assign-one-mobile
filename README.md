# Spotify Mobile UI Clone

This project is a mobile user interface clone of the Spotify app, built using React Native and Expo with TypeScript. It was developed to demonstrate proficiency in creating mobile layouts, utilizing Flexbox, managing scrollable views, and organizing code into reusable components.

## Features

- **High-Fidelity UI Match**: Accurately replicates the layout, colors, and typography of the provided Spotify screenshot using React Native's core components.
- **Modular Component Architecture**: Utilizes reusable components (`PlaylistCard` and `AlbumCard`) to keep the main screen clean and maintainable.
- **Horizontal & Vertical Scrolling**: Implements `ScrollView` for both the main vertical feed and the horizontal "Jump back in" album section.
- **Sticky Mini-Player & Navigation**: Features a bottom mini-player and navigation bar that remain anchored while the main content scrolls underneath.
- **Cross-Platform Event Handling**: Includes an interactive Alert button that works seamlessly across iOS, Android, and Web environments.

## ⚠️ Important Note for Testing

**If you are testing this application on an Android device, an iOS device, or any simulator with a smaller screen size, you will need to scroll down to the bottom of the main page to find the "Alert" button.** It is intentionally placed at the end of the scrollable content area to demonstrate vertical scrolling functionality.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Expo Go app on your physical mobile device (optional, for testing).

## Installation and Setup

1. **Clone the repository** (if applicable):

   ```bash
   git clone <your-repository-link>
   cd <project-folder>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the Expo server**:
   ```bash
   npx expo start
   ```

## Running the Application

Once the Expo development server is running, you can open the app in several ways:

- **Web**: Press `w` in the terminal to open the app in your local web browser.
- **iOS Simulator**: Press `i` in the terminal (requires Xcode installed on macOS).
- **Android Emulator**: Press `a` in the terminal (requires Android Studio installed).
- **Physical Device**: Scan the QR code displayed in the terminal using the Expo Go app on your phone.

## Project Structure

- `app/index.tsx`: The main entry point and primary screen layout combining all UI elements.
- `app/_layout.tsx`: The root Expo Router layout file.
- `components/PlaylistCard.tsx`: Reusable component for displaying the two-column playlist grid items.
- `components/AlbumCard.tsx`: Reusable component for displaying the horizontal scrolling album covers.

## Built With

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/) (MaterialCommunityIcons)
  <br>

> _Disclaimer: This README file was generated with the assistance of AI._
