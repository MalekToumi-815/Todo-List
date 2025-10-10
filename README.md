# Todo-List

A simple Todo List web application built with vanilla JavaScript, modular architecture, and Webpack.

## Features

- Add, edit, and delete todo items
- Organize todos by categories
- Set priorities and due dates for each todo
- Dynamic UI updates
- Category management (add/delete categories)

## Project Structure

```
src/
  index.js           # Main entry point
  DOMHandler.js      # Handles DOM updates
  TodosHandler.js    # Todo logic and data
  CategoryHandler.js # Category logic
  styles.css         # App styles
  template.html      # HTML template
  icons/             # SVG and PNG icons
	 close-svgrepo-com.svg
	 edit-3-svgrepo-com.svg
	 garbage-svgrepo-com.png
webpack.config.js    # Webpack configuration
package.json         # Project metadata and scripts
README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:
	```
	git clone https://github.com/MalekToumi-815/Todo-List.git
	cd Todo-List
	```
2. Install dependencies:
	```
	npm install
	```

### Running the App

Start the development server:
```
npm start
```
This will launch the app in your default browser using Webpack Dev Server.

## Usage

- Add a new todo by filling out the form and clicking "Add".
- Select a category to filter todos.
- Delete todos or categories using the provided buttons/icons.

## Development

- All source code is in the `src/` folder.
- Webpack handles bundling and asset management.
- Edit `src/styles.css` for custom styles.

## License

ISC