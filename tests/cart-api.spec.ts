import { test, expect } from '@playwright/test';

const API_URL = 'https://api.practicesoftwaretesting.com';

test('Create a cart and add a product', async ({ request }) => {

    let cartId: string | undefined;

    try {
        // Create a new cart
        const createCartResponse = await request.post(`${API_URL}/carts`);

        expect(createCartResponse.status()).toBe(201);

        const cart = await createCartResponse.json();

        // Save the cart ID for cleanup
        cartId = cart.id;

        // Verify cart response fields
        expect(cart).toHaveProperty('id');
        expect(typeof cart.id).toBe('string');

        console.log('Created cart ID:', cartId);


        // Retrieve available products
        const productsResponse = await request.get(`${API_URL}/products`);

        expect(productsResponse.status()).toBe(200);

        const products = await productsResponse.json();

        // Verify that products are available
        expect(products.data.length).toBeGreaterThan(0);

        // Get the ID of the first available product
        const productId = products.data[0].id;

        expect(typeof productId).toBe('string');


        // Add a product to the cart
        const addProductResponse = await request.post(
            `${API_URL}/carts/${cartId}`,
            {
                data: {
                    product_id: productId,
                    quantity: 1
                }
            }
        );

        console.log('Add product status:', addProductResponse.status());

        // Verify add-product response
        expect(addProductResponse.status()).toBe(200);

        const addProductBody = await addProductResponse.json();

        expect(addProductBody).toHaveProperty(
            'result',
            'item added or updated'
        );

        console.log('Add product response:', addProductBody);

    } finally {

        // Delete the cart, even if the test fails
        if (cartId) {
            const deleteCartResponse = await request.delete(
                `${API_URL}/carts/${cartId}`
            );

            console.log('Cart cleanup status:', deleteCartResponse.status());

            expect(deleteCartResponse.status()).toBe(204);
        }
    }
});


test('Request a cart that does not exist', async ({ request }) => {

    // Request a non-existent cart
    const response = await request.get(
        `${API_URL}/carts/nonexistentcart123456`
    );

    // Verify the status code
    expect(response.status()).toBe(404);

    const responseBody = await response.json();

    // Verify the error message
    expect(responseBody).toHaveProperty('message');
    expect(responseBody.message).toBe('Requested item not found');

    console.log('Error response:', responseBody);
});