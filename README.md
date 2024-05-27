#### Popcorn Plaza

Popcorn Plaza is a web-based application designed to help users find the perfect relaxing music. Using the Spotify API, this app curates playlists and offers music recommendations to enhance relaxation, meditation, or study sessions.


1. API Credentials
   - You will need a Spotify Client ID and Client Secret to interact with the Spotify API.
  
     CLIENT_ID=your_spotify_client_id
     CLIENT_SECRET=your_spotify_client_secret
     

2. Run the Application
  
   - Access the application by navigating to `http://localhost:3000/` in your web browser.

#### Navigating the Application
- Home Page: Displays a selection of playlists curated to help with relaxation. Users can explore these playlists and get details about each track.
- Search Functionality: Users can search for specific artists, albums, or tracks to find their preferred relaxation music. 
- Detailed Views: Clicking on any playlist or album opens a detailed view where users can learn more about the track list and listen to previews if available.

#### Functional Overview
- Data Handling: The application utilizes Spotify API to fetch data about playlists and albums, which are displayed based on user interaction.
- Efficient Navigation: Navigation between different sections of the application is designed to be efficient, with new GET requests fetching only the necessary data.
- Error Handling: Errors from network issues or API limits are handled gracefully, displaying user-friendly messages.

#### Styling
- The application uses CSS for styling, ensuring the interface is clean and responsive. Care has been taken to make sure text is readable and elements are well-spaced.

#### Contributing
- Contributions to Popcorn Plaza are welcome! If you have suggestions or enhancements, please fork the repository and submit a pull request.

#### Issues
- If you run into any issues or have suggestions, please use the repository’s issue tracker to let us know.



This README is designed to provide all necessary instructions for setting up and using Popcorn Plaza, ensuring users have a smooth experience right from the installation to navigating through the different functionalities of the app.