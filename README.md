# Live Markdown Previewer
Explore a new Markdown previewer that makes editing easy. It uses React for a smooth interface and Node.js for strong features. This tool helps developers and creators work faster by showing changes right away.


## Run in your local environment

### Frontend

#### Setup

1. Install dependencies: `yarn`
2. Start the development server: `yarn dev`
3. The application will be running on `http://localhost:5173`


### Backend

#### Setup

1. Install dependencies: `yarn`
2. Start the server: `yarn start:dev`
3. The server will be running on `http://localhost:5000`
4. Run tests: `yarn test`

#### API Reference

- **API Endpoint:** `http://localhost:5000/convert-to-html`
- **Method**: `POST`
- **Request Body/Payload**
```json
{
    "markdown": "# Hello World!"
}
```
- Response
```json
{
    "html": "<h1>Hello world</h1>\n"
}
```


## Web App Live URL

- https://live-markdown-previewer.maheshmuttintidev.in

## Backend API URL

- https://live-markdown-api.staging.maheshmuttintidev.in/convert-to-html

## Preview

![Image](/frontend/public/banner_image.webp)


> Note: If you like it, tap on the star to this repo. Follow me on github.