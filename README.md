# BookApiProject

by Danijel Boskovic

The search bar submits a query to the Google Books API and gets the data back as an array of objects. The data is then cleaned up and the keys pertaining to image thumbnail, title, authors and description destructured and used to populate dynamically generated cards to display the information in a gallery. Some challenges were accounting for missing information (sometimes no picture or no description), and at this stage done with innerHTML rather than react components, which would probably be nicer to work with for something like this.
