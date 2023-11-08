import { Product } from "../model/object.js";

export const DATA = [];
export function countKind(kind) {
    let sum = 0;
    for (let i = 0; i < DATA.length; i++) {
        if (DATA[i].kind === kind)
            sum++;
    }
    return sum;
}
DATA.push(new Product(
    1,
    "Tiramisu Classico Cake",
    "Cake",
    120000,
    "asset/photos/cake/cake2/1.jpg",
    "Two layers of coffee washed cake are filled with a light buttercream and topped with a delectable coffee whipped cream."
    + " As an extra touch, this delight is then sprinkled with dark chocolate and cocoa. "
    + "With just the right mixture of coffee and chocolate, you can be sure that this Italian favorite will perk up anyone's day."
    + " Includes a Greeting Card and is packaged in an elegant gift box",
    "Serves 6 to 8\n"
    + "7 inches in diameter\n"
    + "Best used upon receipt for maximum freshness. Store in an airtight container for 5 days, refrigerated. Store up to 2 months frozen.\n"
    + "*ALLERGY INFORMATION: Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts. Our facility is not Gluten Free.",
    "Our gifts are perishable and on-time delivery is of utmost importance! As such, we cannot be held responsible for incorrect or incomplete addresses. "
    + "Apartment numbers and suites for residential and business deliveries, as well as business names, must be included. Please ensure you have the full address - "
    + "delays due to missing or wrong information will nullify guaranteed delivery. We want your gift to arrive fresh and delicious!"
));

DATA.push(new Product(
    2,
    "Chocolate Mousse Torte Cake",
    "Cake",
    110000,
    "asset/photos/cake/cake1/1.jpg",
    "Two layers of coffee washed cake are filled with a light buttercream and topped with a delectable coffee whipped cream."
    + " As an extra touch, this delight is then sprinkled with dark chocolate and cocoa. "
    + "With just the right mixture of coffee and chocolate, you can be sure that this Italian favorite will perk up anyone's day."
    + " Includes a Greeting Card and is packaged in an elegant gift box",
    "Serves 6 to 8\n"
    + "7 inches in diameter\n"
    + "Best used upon receipt for maximum freshness. Store in an airtight container for 5 days, refrigerated. Store up to 2 months frozen.\n"
    + "*ALLERGY INFORMATION: Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts. Our facility is not Gluten Free.",
    "Our gifts are perishable and on-time delivery is of utmost importance! As such, we cannot be held responsible for incorrect or incomplete addresses. "
    + "Apartment numbers and suites for residential and business deliveries, as well as business names, must be included. Please ensure you have the full address - "
    + "delays due to missing or wrong information will nullify guaranteed delivery. We want your gift to arrive fresh and delicious!"
));
DATA.push(new Product(
    3,
    "Black and White Mousse Cake",
    "Cake",
    100000,
    "asset/photos/cake/cake3/1.jpg",
    "This delicious fusion of flavor will make your taste buds explode! This decadent, "
    + "two-layered chocolate cake is filled with a mixture of whipped buttercream and chocolate cream, "
    + "and then coated in a thick layer of dark chocolate fudge frosting—talk about icing on the cake! For the final, "
    + "decorative touch, the cake is then embellished with white chocolate drizzles and shavings."
    + "This delectable cake is delivered with a greeting card, defining your loved ones occasion.",
    "Serves 6 to 8\n"
    + "7 inches in diameter\n"
    + "Best used upon receipt for maximum freshness. Store in an airtight container for 5 days, refrigerated. Store up to 2 months frozen.\n"
    + "*ALLERGY INFORMATION: Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts. Our facility is not Gluten Free.",
    "Our gifts are perishable and on-time delivery is of utmost importance! As such, we cannot be held responsible for incorrect or incomplete addresses. "
    + "Apartment numbers and suites for residential and business deliveries, as well as business names, must be included. Please ensure you have the full address - "
    + "delays due to missing or wrong information will nullify guaranteed delivery. We want your gift to arrive fresh and delicious!"
));
DATA.push(new Product(
    4,
    "Dutch Apple Pie",
    "Pie",
    90000,
    "asset/photos/pie/pie1/1.jpg",
    "A traditional favorite that is sure to please! This over-the-top pie is bursting with juicy apple flavor and overflowing with a buttery crumb topping. "
    + "Each pie arrives in an elegant gift box with a greeting card you can personalize",
    "Serves 6 to 8\n"
    + "7 inches in diameter\n"
    + "Best used upon receipt for maximum freshness. Store in an airtight container for 5 days, refrigerated. Store up to 2 months frozen.\n"
    + "*ALLERGY INFORMATION: Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts. Our facility is not Gluten Free.",
    "Our gifts are perishable and on-time delivery is of utmost importance! As such, we cannot be held responsible for incorrect or incomplete addresses. "
    + "Apartment numbers and suites for residential and business deliveries, as well as business names, must be included. Please ensure you have the full address - "
    + "delays due to missing or wrong information will nullify guaranteed delivery. We want your gift to arrive fresh and delicious!"
));
DATA.push(new Product(
    5,
    "Sour Cherry Pie",
    "Pie",
    95000,
    "asset/photos/pie/pie2/1.jpg",
    "Plump cherries combine in a delightful duet with tender flaky crust, making this sour cherry pie the perfect treat for a summer picnic. "
    + "Send your cherry lover one today and let them indulge in fruit decadence! Arrives in an elegant gift box with the greeting card of your choice.",
    "Serves 6 to 8\n"
    + "7 inches in diameter\n"
    + "Best used upon receipt for maximum freshness. Store in an airtight container for 5 days, refrigerated. Store up to 2 months frozen.\n"
    + "*ALLERGY INFORMATION: Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts. Our facility is not Gluten Free.",
    "Our gifts are perishable and on-time delivery is of utmost importance! As such, we cannot be held responsible for incorrect or incomplete addresses. "
    + "Apartment numbers and suites for residential and business deliveries, as well as business names, must be included. Please ensure you have the full address - "
    + "delays due to missing or wrong information will nullify guaranteed delivery. We want your gift to arrive fresh and delicious!"
));
DATA.push(new Product(
    6,
    "Classic Pecan Pie",
    "Pie",
    95000,
    "asset/photos/pie/pie3/1.jpg",
    "Every party deserves a stellar dessert to finish the meal - and our classic Southern pecan pie does just that. Delicious, "
    + "plump pecans mixed into a sugary sweet filling with a delectable butter crust! "
    + "Each gift includes a greeting card that you can personalize and arrives packaged in an elegant gift box.",
    "Serves 6 to 8Pie is 8 Inches RoundCertified Kosher\n"
    + "*ALLERGY INFORMATION: Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts. Our facility is not Gluten Free.",
    "Our gifts are perishable and on-time delivery is of utmost importance! As such, we cannot be held responsible for incorrect or incomplete addresses. "
    + "Apartment numbers and suites for residential and business deliveries, as well as business names, must be included. Please ensure you have the full address - "
    + "delays due to missing or wrong information will nullify guaranteed delivery. We want your gift to arrive fresh and delicious!"
));
DATA.push(new Product(
    7,
    "Deluxe Sandwich Cookie Selection",
    "Cookie",
    55000,
    "asset/photos/cookie/cookie1/1.jpg",
    "Creamy fillings are sandwiched between two delicious soft-baked cookies for a treat that is unlike any other! "
    + "We include 3 Vanilla cookies with a sweet Caramel filling, 3 Vanilla cookies with a rich Chocolate Hazelnut filling, "
    + "3 Chocolate Chip cookies with creamy Vanilla buttercream and finally, 3 hearty Oatmeal cookies, also with a Vanilla buttercream.",
    "Serves 6-8 People\n"
    + "Certified Kosher\n"
    + "*ALLERGY INFORMATION: Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts. Our facility is not Gluten Free.",
    "Our gifts are perishable and on-time delivery is of utmost importance! As such, we cannot be held responsible for incorrect or incomplete addresses. "
    + "Apartment numbers and suites for residential and business deliveries, as well as business names, must be included. Please ensure you have the full address - "
    + "delays due to missing or wrong information will nullify guaranteed delivery. We want your gift to arrive fresh and delicious!"
));
DATA.push(new Product(
    8,
    "Sampler Snack Basket",
    "Cookie",
    60000,
    "asset/photos/cookie/cookie2/1.jpg",
    "This charming gold tray is filled with a collection of treats. Perfect for making a statement. "
    + "This gift includes 6 Gourmet Brownies (Chocolate Truffle, Chocolate Truffle with Walnut, Marble Cheesecake and Cookies & Cream)"
    + " and 6 Gourmet Cookies (Triple Chocolate, Chocolate Chunk, Oatmeal Raisin and Vanilla Sugar)",
    "Serves 3-4\n"
    + "Kosher Product\n"
    + "Ships Nationwide from M-F, Saturday to most locations\n"
    + "*ALLERGY INFORMATION: Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts. Our facility is not Gluten Free.",
    "Our gifts are perishable and on-time delivery is of utmost importance! As such, we cannot be held responsible for incorrect or incomplete addresses. "
    + "Apartment numbers and suites for residential and business deliveries, as well as business names, must be included. Please ensure you have the full address - "
    + "delays due to missing or wrong information will nullify guaranteed delivery. We want your gift to arrive fresh and delicious!"
));
DATA.push(new Product(
    9,
    "Gluten-Free Cookie and Brownie Crate",
    "Cookie",
    45000,
    "asset/photos/cookie/cookie3/1.jpg",
    "Skip the bells and whistles and send the best of the best. We wanted to present only the finest, "
    + "best-tasting cookies and brownies in a single snack box, so we combined twelve gourmet gluten-free cookies "
    + "(Chocolate Chip & Snickerdoodle) and ten decadent gluten-free brownies and blondies. "
    + "Each serving is individually wrapped for the perfect grab-and-go gift, built in a sturdy little crate that will last a lifetime. "
    + "WARNING! This product does not contain Gluten, however our facility is not Gluten Free.",
    "Serves 20\n"
    + "Kosher Product\n"
    + "Gluten-FreeShips Nationwide from M-F, Saturday to most locations\n"
    + "*ALLERGY INFORMATION: Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts. Our facility is not Gluten Free.",
    "Our gifts are perishable and on-time delivery is of utmost importance! As such, we cannot be held responsible for incorrect or incomplete addresses. "
    + "Apartment numbers and suites for residential and business deliveries, as well as business names, must be included. Please ensure you have the full address - "
    + "delays due to missing or wrong information will nullify guaranteed delivery. We want your gift to arrive fresh and delicious!"
));
