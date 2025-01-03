# Hackerman

Hackerman is a work-in-progress MMO hacking simulation game inspired by *hackmud*, *Uplink*, and *Hacknet*. Built in Node.js, it immerses players in a virtual world where they can hack, upgrade, and network computers to dominate the cyber realm.

## Features

### Gameplay
- **Hacking Simulation**: Utilize commands to infiltrate and compromise other players' computers.
- **File Management**: Computers can store various files, such as upgrades, software, or important data.
- **Computer Upgrades**: Enhance your computer's performance with:
  - **CPU**: Increase processing power for faster operations.
  - **RAM**: Boost memory capacity for handling complex tasks.
  - **Transfer Speed**: Improve data transfer rates.
- **Networking**: Pool resources across multiple computers to:
  - Strengthen defensive capabilities.
  - Protect the core computing node from adversaries.

### MMO Elements
- Create and manage your account through the server.
- Interact with other players in real-time.
- Explore a dynamic online environment where the strongest networks prevail.


---

## Architecture

Hackerman employs a robust architecture to handle server-client interactions and database management:

### Server
- **Built with Node.js**
- Manages player authentication and sessions.
- Handles commands executed on player and target computers.
- Facilitates communication between players.

### Client
- Provides an interface for users to:
  - Run commands on their virtual computers.
  - Interact with the game world.
- Designed for a seamless user experience.

### Databases
- **Redis**: High-speed data caching and session management. Redis is used to store:
  - Session data for logged-in users.
  - Temporary command results for faster access.
- **MongoDB**: Stores persistent player data. The database is structured with the following collections:
  - `users`: Contains account details such as usernames, hashed passwords, and authentication tokens.
  - `computers`: Stores individual computer configurations, including specifications (CPU, RAM, transfer speed), files, and upgrade history.
  - `files`: Tracks metadata for files stored on computers, such as file type, size, and content.
  - `networks`: Represents player-created computer networks, detailing connected nodes and their defensive parameters.

### Networking
- Allows players to link multiple computers into a network.
- Enables cooperative defense mechanisms against external attacks.

---

## Status
- The project is incomplete and undergoing active development.
- A rewrite in C++ or further enhancements in Node.js is under consideration.

---

## How to Contribute
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear description of your changes.

---

## Getting Started

### Prerequisites
- Node.js
- Redis
- MongoDB

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/hackerman.git
   ```
2. Navigate to the project directory:
   ```bash
   cd hackerman
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments
Special thanks to the creators of *hackmud*, *Uplink*, and *Hacknet* for inspiring this project.
