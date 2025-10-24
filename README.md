# Persona Builder

A React application for creating detailed user personas with live preview functionality.

## Features

- **Real-time Preview**: See your persona card update as you type
- **Comprehensive Form**: Capture all essential persona details:
  - Name
  - Age
  - Role
  - Goals
  - Frustrations
  - Image URL
- **Modern UI**: Beautiful, responsive design with gradient backgrounds
- **Mobile Friendly**: Optimized for all screen sizes

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd "Persona Builder"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. Fill out the form on the left side with persona details
2. Watch the persona card on the right update in real-time
3. Add an image URL to display a profile picture
4. The card will show an empty state until you start filling out the form

## Project Structure

```
src/
├── components/
│   ├── PersonaForm.js      # Form component
│   ├── PersonaForm.css     # Form styles
│   ├── PersonaCard.js      # Preview card component
│   └── PersonaCard.css     # Card styles
├── App.js                  # Main app component
├── App.css                 # App styles
├── index.js                # Entry point
└── index.css               # Global styles
```

## Technologies Used

- React 18
- CSS3 with modern features
- Responsive design
- Real-time state management
