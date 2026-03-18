# 🎵 Music Playlist – React Project

## 📷 Project Preview

![Music Playlist](https://assets.ccbp.in/frontend/content/react-js/music-playlist-output.mp4)

---

## 📌 Project Overview

This project is a **Music Playlist application** built using **React**. It demonstrates how to manage and manipulate lists dynamically using **Lists and Keys**, along with features like **search filtering** and **deleting items**.

Users can view a list of songs, search for tracks by name, and remove songs from the playlist. If no songs match the search or all songs are deleted, a **"No Songs Found"** message is displayed.

---

# 🚀 Features

- Display a list of music tracks
- Search songs by name (case-insensitive)
- Delete tracks from the playlist
- Dynamic UI updates based on state changes
- Show **"No Songs Found"** when no results exist
- Styled using **styled-components**

---

# 🧠 Concepts Practiced

This project covers important React concepts:

- **Lists and Keys**
- **State Management**
- **Event Handling**
- **Filtering Data**
- **Conditional Rendering**
- **Component-Based Architecture**
- **Styled Components**

---

# 🏗️ Project Structure

```id="q3ptj2"
src
 ├── components
 │     └── TrackItem
 │           ├── index.js
 │           └── styledComponents.js
 │
 ├── styledComponents.js
 ├── App.js
 └── index.js
```

---

# ⚙️ Technologies Used

- **React JS**
- **Styled Components**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**

---

# 📦 Installation

Clone the repository

```id="0g92wo"
git clone https://github.com/LawanGoud/Music_playlist.git
```

Navigate into the project folder

```id="x2pk0g"
cd Music_playlist
```

Install dependencies

```id="1q3z3q"
npm install
```

Start the development server

```id="piv0ee"
npm start
```

The application will run at:

```id="8d0c0n"
http://localhost:3000
```

---

# 🖥️ How It Works

1. The app displays a list of songs from `initialTracksList`.
2. The user can type in the search bar:

   - The playlist filters songs based on the search input
   - Search is **case-insensitive**

3. Each track has a **Delete** button:

   - Clicking it removes the track from the playlist

4. If:

   - No songs match the search OR
   - All songs are deleted → The app displays **"No Songs Found"**

---

# 🎯 Learning Outcome

After completing this project, you will understand how to:

- Render dynamic lists in React
- Use **keys** for efficient rendering
- Filter data using JavaScript methods
- Manage UI state effectively
- Handle user interactions (search & delete)
- Build responsive UI using **styled-components**

---

# 👨‍💻 Author

**Lawan Goud**

GitHub Repository https://github.com/LawanGoud/Music_playlist.git

---

# ⭐ Acknowledgement

This project was built as part of a **React learning exercise focusing on Lists and Keys with real-world functionality**.
