const prisma = require("../src/utils/prisma.js");

async function seed() {
  const createdCategories = await prisma.category.createMany({
    data: [
      {
        name: "Clothes",
        imageURL: "https://i.imgur.com/QkIa5tT.jpeg",
      },
      {
        name: "Electronics",
        imageURL: "https://i.imgur.com/ZANVnHE.jpeg",
      },
      {
        name: "Furniture",
        imageURL: "https://i.imgur.com/Qphac99.jpeg",
      },
      {
        name: "Shoes",
        imageURL: "https://i.imgur.com/qNOjJje.jpeg",
      },
      {
        name: "Miscellaneous",
        imageURL: "https://i.imgur.com/BG8J0Fj.jpg",
      },
    ],
  });
  console.log("Created categories:", createdCategories);

  const createdProducts = await prisma.product.createMany({
    data: [
      {
        title: "Majestic Mountain Graphic T-Shirt",
        price: 44,
        description:
          "Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic. Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift, this t-shirt is a versatile addition to any collection.",
        imageURL: "https://i.imgur.com/QkIa5tT.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic Red Pullover Hoodie",
        price: 10,
        description:
          "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.",
        imageURL: "https://i.imgur.com/1twoaDy.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic Heather Gray Hoodie",
        price: 69,
        description:
          "Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual dayout or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.",
        imageURL: "https://i.imgur.com/cHddUCu.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic Grey Hooded Sweatshirt",
        price: 90,
        description:
          "Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for asnug fit. Perfect for those chilly evenings or lazy weekends, it pairs effortlessly with your favorite jeans or joggers.",
        imageURL: "https://i.imgur.com/R2PN9Wq.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic Black Hooded Sweatshirt",
        price: 79,
        description:
          "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or acasual outing.",
        imageURL: "https://i.imgur.com/cSytoSD.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic Comfort Fit Joggers",
        price: 25,
        description:
          "Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.",
        imageURL: "https://i.imgur.com/ZKGofuB.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic Comfort Drawstring Joggers",
        price: 79,
        description:
          "Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.",
        imageURL: "https://i.imgur.com/mp3rUty.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic Red Jogger Sweatpants",
        price: 98,
        description:
          "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband,adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
        imageURL: "https://i.imgur.com/9LFjwpI.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic Navy Blue Baseball Cap",
        price: 61,
        description:
          "Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes fromthe sun and complement your casual looks with this versatile and timeless accessory.",
        imageURL: "https://i.imgur.com/R3iobJA.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic Blue Baseball Cap",
        price: 86,
        description:
          "Top off your casual look with our Classic Blue Baseball Cap, made from high-quality materials for lasting comfort. Featuring a timeless six-panel design with a pre-curved visor, this adjustable cap offers both style and practicality for everyday wear.",
        imageURL: "https://i.imgur.com/wXuQ7bm.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic Red Baseball Cap",
        price: 35,
        description:
          "Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all. Perfect for sunny days or adding a sporty touch to your outfit.",
        imageURL: "https://i.imgur.com/cBuLvBi.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic Black Baseball Cap",
        price: 58,
        description:
          "Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or justrunning errands, this cap adds a touch of style to any outfit.",
        imageURL: "https://i.imgur.com/KeqG6r4.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic Olive Chino Shorts",
        price: 84,
        description:
          "Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.",
        imageURL: "https://i.imgur.com/UsFIvYs.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic High-Waisted Athletic Shorts",
        price: 43,
        description:
          "Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place duringany activity, these shorts are perfect for the gym, running, or even just casual wear.",
        imageURL: "https://i.imgur.com/eGOUveI.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic White Crew Neck T-Shirt",
        price: 39,
        description:
          "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well withvirtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
        imageURL: "https://i.imgur.com/axsyGpD.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic White Tee - Timeless Style and Comfort",
        price: 73,
        description:
          "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easyto care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with yourfavorite jeans or layer it under a jacket for a smart look.",
        imageURL: "https://i.imgur.com/Y54Bt8J.jpeg",
        categoryId: 1,
      },
      {
        title: "Classic Black T-Shirt",
        price: 35,
        description:
          "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
        imageURL: "https://i.imgur.com/9DqEOV5.jpeg",
        categoryId: 1,
      },
      {
        title: "Sleek White & Orange Wireless Gaming Controller",
        price: 69,
        description:
          "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
        imageURL: "https://i.imgur.com/ZANVnHE.jpeg",
        categoryId: 2,
      },
      {
        title: "Sleek Wireless Headphone & Inked Earbud Set",
        price: 44,
        description:
          "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set a lso includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
        imageURL: "https://i.imgur.com/yVeIeDa.jpeg",
        categoryId: 2,
      },
      {
        title: "Sleek Comfort-Fit Over-Ear Headphones",
        price: 28,
        description:
          "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
        imageURL: "https://i.imgur.com/SolkFEB.jpeg",
        categoryId: 2,
      },
      {
        title: "Efficient 2-Slice Toaster",
        price: 48,
        description:
          "Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning. This compact and stylish appliance is perfect for any kitchen, ensuring your toast is always golden brown and delicious.",
        imageURL: "https://i.imgur.com/keVCVIa.jpeg",
        categoryId: 2,
      },
      {
        title: "Sleek Wireless Computer Mouse",
        price: 10,
        description:
          "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color toyour workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
        imageURL: "https://i.imgur.com/w3Y8NwQ.jpeg",
        categoryId: 2,
      },
      {
        title: "Sleek Modern Laptop with Ambient Lighting",
        price: 43,
        description:
          "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality toyour tech collection, making it as stylish as it is functional.",
        imageURL: "https://i.imgur.com/OKn1KFI.jpeg",
        categoryId: 2,
      },
      {
        title: "Sleek Modern Laptop for Professionals",
        price: 97,
        description:
          "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
        imageURL: "https://i.imgur.com/ItHcq7o.jpeg",
        categoryId: 2,
      },
      {
        title: "Stylish Red & Silver Over-Ear Headphones",
        price: 39,
        description:
          "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
        imageURL: "https://i.imgur.com/YaSqa06.jpeg",
        categoryId: 2,
      },
      {
        title: "Sleek Mirror Finish Phone Case",
        price: 27,
        description:
          "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
        imageURL: "https://i.imgur.com/yb9UQKL.jpeg",
        categoryId: 2,
      },
      {
        title: "Sleek Smartwatch with Vibrant Display",
        price: 16,
        description:
          "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
        imageURL: "https://i.imgur.com/LGk9Jn2.jpeg",
        categoryId: 2,
      },
      {
        title: "Sleek Modern Leather Sofa",
        price: 53,
        description:
          "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
        imageURL: "https://i.imgur.com/Qphac99.jpeg",
        categoryId: 3,
      },
      {
        title: "Mid-Century Modern Wooden Dining Table",
        price: 24,
        description:
          "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
        imageURL: "https://i.imgur.com/DMQHGA0.jpeg",
        categoryId: 3,
      },
      {
        title: "Elegant Golden-Base Stone Top Dining Table",
        price: 66,
        description:
          "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
        imageURL: "https://i.imgur.com/NWIJKUj.jpeg",
        categoryId: 3,
      },
      {
        title: "Modern Elegance Teal Armchair",
        price: 25,
        description:
          "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
        imageURL: "https://i.imgur.com/6wkyyIN.jpeg",
        categoryId: 3,
      },
      {
        title: "Elegant Solid Wood Dining Table",
        price: 67,
        description:
          "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
        imageURL: "https://i.imgur.com/4lTaHfF.jpeg",
        categoryId: 3,
      },
      {
        title: "Modern Minimalist Workstation Setup",
        price: 49,
        description:
          "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
        imageURL: "https://i.imgur.com/3oXNBst.jpeg",
        categoryId: 3,
      },
      {
        title: "Modern Ergonomic Office Chair",
        price: 71,
        description:
          "Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism, smooth-rolling casters for easy mobility, and a cushioned seat for extended comfort. The clean lines and minimalist white design make it a versatile addition to any contemporary workspace.",
        imageURL: "https://i.imgur.com/3dU0m72.jpeg",
        categoryId: 3,
      },
      {
        title: "Futuristic Holographic Soccer Cleats",
        price: 39,
        description:
          "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect forthe fashion-forward athlete who wants to make a statement.",
        imageURL: "https://i.imgur.com/qNOjJje.jpeg",
        categoryId: 4,
      },
      {
        title: "Rainbow Glitter High Heels",
        price: 39,
        description:
          "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
        imageURL: "https://i.imgur.com/62gGzeF.jpeg",
        categoryId: 4,
      },
      {
        title: "Chic Summer Denim Espadrille Sandals",
        price: 33,
        description:
          "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
        imageURL: "https://i.imgur.com/9qrmE1b.jpeg",
        categoryId: 4,
      },
      {
        title: "Vibrant Runners: Bold Orange & Blue Sneakers",
        price: 27,
        description:
          "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushionedinsoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
        imageURL: "https://i.imgur.com/hKcMNJs.jpeg",
        categoryId: 4,
      },
      {
        title: "Vibrant Pink Classic Sneakers",
        price: 84,
        description:
          "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
        imageURL: "https://i.imgur.com/mcW42Gi.jpeg",
        categoryId: 4,
      },
      {
        title: "Futuristic Silver and Gold High-Top Sneaker",
        price: 68,
        description:
          "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
        imageURL: "https://i.imgur.com/npLfCGq.jpeg",
        categoryId: 4,
      },
      {
        title: "Futuristic Chic High-Heel Boots",
        price: 36,
        description:
          "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
        imageURL: "https://i.imgur.com/HqYqLnW.jpeg",
        categoryId: 4,
      },
      {
        title: "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
        price: 53,
        description:
          "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
        imageURL: "https://i.imgur.com/AzAY4Ed.jpeg",
        categoryId: 4,
      },
      {
        title: "Elegant Purple Leather Loafers",
        price: 17,
        description:
          "Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classicloafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design anddurable soles ensure both style and functionality for the modern man.",
        imageURL: "https://i.imgur.com/Au8J9sX.jpeg",
        categoryId: 4,
      },
      {
        title: "Classic Blue Suede Casual Shoes",
        price: 39,
        description:
          "Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.",
        imageURL: "https://i.imgur.com/sC0ztOB.jpeg",
        categoryId: 4,
      },
      {
        title: "Sleek Futuristic Electric Bicycle",
        price: 22,
        description:
          "This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame, enhanced battery life, and integrated tech capabilities, it's perfect for the eco-conscious commuter looking to navigate the city with ease.",
        imageURL: "https://i.imgur.com/BG8J0Fj.jpg",
        categoryId: 5,
      },
      {
        title: "Sleek All-Terrain Go-Kart",
        price: 37,
        description:
          "Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racingor exploring local trails.",
        imageURL: "https://i.imgur.com/Ex5x3IU.jpg",
        categoryId: 5,
      },
      {
        title: "Radiant Citrus Eau de Parfum",
        price: 73,
        description:
          "Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle with a bold orange cap, this fragrance embodies freshness and elegance. Perfect fordaily wear, it's an olfactory delight that leaves a lasting, zesty impression.",
        imageURL: "https://i.imgur.com/xPDwUb3.jpg",
        categoryId: 5,
      },
      {
        title: "Sleek Olive Green Hardshell Carry-On Luggage",
        price: 48,
        description:
          "Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.",
        imageURL: "https://i.imgur.com/jVfoZnP.jpg",
        categoryId: 5,
      },
      {
        title: "Chic Transparent Fashion Handbag",
        price: 61,
        description:
          "Elevate your style with our Chic Transparent Fashion Handbag, perfect for showcasing your essentials with a clear, modern edge. This trendy accessory features durable acrylic construction, luxe gold-tone hardware, and an elegant chain strap. Its compact size ensures you can carry your day-to-day items with ease and sophistication.",
        imageURL: "https://i.imgur.com/Lqaqz59.jpg",
        categoryId: 5,
      },
      {
        title: "Trendy Pink-Tinted Sunglasses",
        price: 38,
        description:
          "Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare. Their bold color and contemporary design make these shades a must-have accessory for any trendsetter looking to add a pop of color to their ensemble.",
        imageURL: "https://i.imgur.com/0qQBkxX.jpg",
        categoryId: 5,
      },
      {
        title: "Elegant Glass Tumbler Set",
        price: 50,
        description:
          "Enhance your drinkware collection with our sophisticated set of glass tumblers, perfect for serving your favorite beverages. This versatile set includes both clear and subtly tinted glasses, lending a modern touch to any table setting. Crafted with quality materials, these durable tumblers are designed to withstand daily use while maintaining their elegant appeal.",
        imageURL: "https://i.imgur.com/TF0pXdL.jpg",
        categoryId: 5,
      },
    ],
  });

  console.log("Created Products:", createdProducts);

  process.exit(0);
}

seed()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  })
  .finally(() => process.exit(1));
