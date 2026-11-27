import { test, expect } from '@playwright/test';

const API_URL = 'https://api.practicesoftwaretesting.com';

test('C4 Add to a cart', async ({ request }) => {
    let cartId: string | undefined;

    try {
        const createCartResponse = await request.post(`${API_URL}/carts`);

        expect(createCartResponse.status()).toBe(201);

        const cart = await createCartResponse.json();
        cartId = cart.id;

        expect(cartId).toBeTruthy();

        const productsResponse = await request.get(`${API_URL}/products`);

        expect(productsResponse.status()).toBe(200);

        const products = await productsResponse.json();

        expect(products.data.length).toBeGreaterThan(0);

        const productId = products.data[0].id;

        const addProductResponse = await request.post(
            `${API_URL}/carts/${cartId}`,
            {
                data: {
                    product_id: productId,
                    quantity: 1
                }
            }
        );

        expect(addProductResponse.status()).toBe(200);

        const addProductBody = await addProductResponse.json();

        expect(addProductBody).toHaveProperty(
            'result',
            'item added or updated'
        );

        // Retrieve the cart to verify the added product
        const getCartResponse = await request.get(
            `${API_URL}/carts/${cartId}`
        );

        expect(getCartResponse.status()).toBe(200);

        const cartDetails = await getCartResponse.json();

        expect(cartDetails.id).toBe(cartId);
        expect(cartDetails.cart_items).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    product_id: productId,
                    quantity: 1
                })
            ])
        );

    } finally {
        
        if (cartId) {
            const deleteCartResponse = await request.delete(
                `${API_URL}/carts/${cartId}`
            );

            expect(deleteCartResponse.status()).toBe(204);
        }
    }
});