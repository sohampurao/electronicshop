import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Soham',
      email: 'sohampurao1@gmail.com',
      password: bcrypt.hashSync('soham2002'),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'iPhone 14 Pro Max',
      slug: 'iphone-14-pro-max-sliver',
      category: 'phone',
      image:
        'https://res.cloudinary.com/dsrioe4zy/image/upload/v1671278288/mhftjxuesxhqmh4x7bxc.jpg', //679px x 829px
      images: [
        'https://res.cloudinary.com/dsrioe4zy/image/upload/v1671278297/npemgohqosqivcelzi1s.jpg',
        'https://res.cloudinary.com/dsrioe4zy/image/upload/v1671278308/mqij0qgxtkc1iprttr5g.jpg',
        'https://res.cloudinary.com/dsrioe4zy/image/upload/v1671278316/xz0y3dtpcjdfg6jezm0r.jpg',
      ],
      price: 150,
      countInStock: 20,
      brand: 'Boat',
      rating: 5.0,
      numReviews: 1,
      description:
        '17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion Dynamic Island, a magical new way to interact with iPhone 48MP Main camera for up to 4x greater resolution Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos',
    },
    {
      // _id: '2',
      name: 'Xtend‌ watch',
      slug: 'xtend-watch',
      category: 'watch',
      image:
        'https://res.cloudinary.com/dsrioe4zy/image/upload/v1671279358/fdkx6ja9b2r7nu0fiihm.webp',
      images: [
        'https://res.cloudinary.com/dsrioe4zy/image/upload/v1671279375/ky2ryvno9anq2owmippt.webp',
        'https://res.cloudinary.com/dsrioe4zy/image/upload/v1671279385/sral2l8bmwrfhfhuo4ei.webp',
        'https://res.cloudinary.com/dsrioe4zy/image/upload/v1671279533/p2vw2bdeamwkcronkmdp.webp',
      ],
      price: 4500,
      countInStock: 14,
      brand: 'Boat',
      rating: 1,
      numReviews: 15,
      description:
        'boAt Xtend‌ | Built-in Alexa, 1.69" Big Square Display, 14 Sports Modes, 15 Watch Faces',
    },
    {
      // _id: '3',
      name: 'Iris Watch',
      slug: 'Iris-watch',
      category: 'watch',
      image: '/images/boAt-Iris.png',
      images: [
        'https://res.cloudinary.com/dsrioe4zy/image/upload/v1671278971/iuykevgkvbdktzo0azrj.webp',
        'https://res.cloudinary.com/dsrioe4zy/image/upload/v1671278982/b3xmib3souxzfj3ixf5e.webp',
        'https://res.cloudinary.com/dsrioe4zy/image/upload/v1671278991/vyzv9darabuddox2owku.webp',
      ],
      brand: 'Boat',
      description:
        'boAt Iris | Round Dial Smart Watch with 1.39" AMOLED Display, Multiple Watch Faces',
      price: 4499,
      countInStock: 23,
      rating: 5,
      numReviews: 1,
    },
    {
      // _id: '4',
      name: 'Rockerz 510 Headphones',
      slug: 'boAt-Rockerz',
      category: 'heaphone',
      image:
        'https://res.cloudinary.com/dsrioe4zy/image/upload/v1671277782/mflruf1r9egmcsqfzlg0.webp',
      images: [
        'https://res.cloudinary.com/dsrioe4zy/image/upload/v1671277858/pbrqm1g4nl4esel1vqqh.webp',
        'https://res.cloudinary.com/dsrioe4zy/image/upload/v1671277866/q9xo9zyudseuu7uta1a7.webp',
        'https://res.cloudinary.com/dsrioe4zy/image/upload/v1671277875/cr99nul9703ffhqzeo1q.webp',
      ],
      brand: 'Boat',
      description:
        'boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver, Adaptive Ear Cups and Headband, Get ready to rule with #DCYou',
      price: 1500,
      countInStock: 12,
      rating: 5,
      numReviews: 1,
    },
  ],
};

export default data;
