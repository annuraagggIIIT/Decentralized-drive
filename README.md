# D-Drive: Ethereum and IPFS File Storage 

https://decentralized-drive.netlify.app/
D-Drive is a decentralized file storage application built on Ethereum and IPFS. Users can upload files to IPFS and manage access permissions through smart contracts deployed on the Ethereum blockchain. This README provides an overview of the application's structure and how to set it up.

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Metamask](https://metamask.io/) extension installed in your browser
- An Ethereum wallet with testnet Ether for testing

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/d-drive.git
   cd d-drive
   npm install
   REACT_APP_PINATA_API_KEY=your-pinata-api-key
   REACT_APP_PINATA_SECRET_API_KEY=your-pinata-secret-api-key
   npm start

 ## Application Structure

   ### 1. App.js

- The main React component responsible for connecting to Metamask.
- Initializes the Ethereum provider and sets up the smart contract.
- Manages the overall structure and state of the application.

### 2. components/FileUpload.js

- Handles file uploads to IPFS.
- Updates the Ethereum smart contract with file information.
- Allows users to interact with the file upload functionality.

### 3. components/Display.js

- Displays files uploaded to IPFS.
- Manages access permissions using the Ethereum smart contract.
- Provides a user interface for file management.

### 4. components/Modal.js

- Modal component for additional user interactions.
- Enhances the user experience with pop-up dialogs or modals.

### 5. components/Footer.js

- Footer component for displaying additional information.
- May include links, credits, or any other relevant details.  


## Usage

1. **Connect your Metamask wallet to the application.**

   Ensure that your Metamask wallet is connected to the application for Ethereum interactions. If you don't have Metamask installed, you can download and install it from [Metamask](https://metamask.io/).

2. **Utilize the "File Upload" component to upload files to IPFS and update the Ethereum smart contract.**

   Use the "File Upload" feature to upload files to IPFS. This will also update the Ethereum smart contract with relevant file information. Follow the on-screen instructions for a seamless file uploading experience.

3. **Explore the "Display" component to view and manage uploaded files and access permissions.**

   Navigate to the "Display" section to view the files you've uploaded to IPFS. Manage access permissions for each file through interactions with the Ethereum smart contract. This component provides a user-friendly interface for file management.

4. **Interact with modals for additional user interactions.**

   Additional user interactions and functionalities may be available through modals. Keep an eye out for pop-up dialogs or modals that enhance the user experience and provide additional features or settings.

Feel free to explore and interact with the various components to make the most out of the decentralized file storage application!


  
