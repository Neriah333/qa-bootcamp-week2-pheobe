Feature: Adding a product to cart

Scenario: A shopper selects a product they want.
Given the shopper is on the ToolShop home page
And the product "Hammer" is available and in stock
When the shopper selects the product "Hammer"
And clicks the Add to Cart button for "Hammer"
Then the product should be added to the shopping cart
And the cart should display the product name and price
And the cart quantity should increase by one

