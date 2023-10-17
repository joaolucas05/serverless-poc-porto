# Serverless API

This is a serverless API hosted on Vercel. It has a unique endpoint `/` and only supports the `POST` method. The API expects the following parameters:

- `originalPrice`: The original price of the product.
- `newPrice`: The new price of the product.
- `productId`: The ID of the product.
  
## Usage

To use the API, send a `POST` request to the endpoint `/` with the required parameters in the request body. Here's an example using `curl`:

    ```bash
    curl -X POST https://serverless-api.vercel.app/api/ -d '{"originalPrice": 100, "newPrice": 80, "productId": "1234"}'
    ```
The api is gonna save the data in a database and return the following response:

    ```json
    {
        "originalPrice": 100,
        "newPrice": 80,
        "productId": "1234",
        "aproved": true,
        "manualAproveNeed": false,
    }
    ```
