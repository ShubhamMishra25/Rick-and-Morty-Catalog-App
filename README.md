
# Rick and Morty Catalog App

A modern Expo/React Native app for browsing Rick and Morty characters, episodes, and locations. Built with best practices for theming, navigation, and code organization.

## Features
- Dark theme with centralized color palette
- Drawer and stack navigation (custom drawer, back/hamburger logic)
- Character, episode, and location detail screens
- Reusable components (CharacterItem, EpisodeItem, InfoItem, etc.)
- Data fetching from the Rick and Morty API
- Loading and error states
- Responsive, clean UI

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation
```bash
# Install dependencies
yarn install
# or
npm install
```

### Running the App
```bash
# Start the Expo development server
expo start
```
Scan the QR code with the Expo Go app or run on an emulator/simulator.

### Clearing Cache (if you see stale assets or theme issues)
```bash
expo start -c
```

## Project Structure
```
app/
  _layout.tsx           # Root navigation
  characters/           # Character list and detail screens
  episodes/             # Episode list and detail screens
  locations/            # Location list and detail screens
components/             # Reusable UI components
constants/Colors.ts     # Centralized color palette
services/               # API service files
assets/                 # Fonts and images
```

## Code Quality
- All colors and backgrounds use the palette in `constants/Colors.ts`.
- Navigation logic is separated and clean.
- Data fetching is handled in `services/`.
- Components are typed and reusable.
- Loading and error states are handled with `LoadingContainer`.

## API
- [Rick and Morty API](https://rickandmortyapi.com/)

## License
MIT
