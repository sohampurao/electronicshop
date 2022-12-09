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
      name: 'boat stone granade',
      slug: 'boat-stone-granade',
      category: 'speaker',
      image: '/images/boat-stone-granade.png', //679px x 829px
      price: 1500,
      countInStock: 0,
      brand: 'Boat',
      rating: 5.0,
      numReviews: 10,
      description:
        'boAt Stone Grenade | Bluetooth Speakers with 1.75” Full-range Drivers, High Fidelity Stereo Sound, Up to 7hrs Nonstop Playback',
    },
    {
      // _id: '2',
      name: 'boAt Wave Neo',
      slug: 'boAt-Wave-Neo',
      category: 'watch',
      image: '/images/boAt-Wave-Neo.png',
      price: 1799,
      countInStock: 14,
      brand: 'Boat',
      rating: 3.9,
      numReviews: 15,
      description:
        'boAt Wave Neo | 1.69" HD Display, Upto 7 Days Battery Life, IP68 Sweat & Water Resistant, 100+ Watch Faces',
    },
    {
      // _id: '3',
      name: 'boAt Iris',
      slug: 'boAt-Iris',
      category: 'watch',
      image: '/images/boAt-Iris.png',
      price: 4499,
      countInStock: 23,
      brand: 'Boat',
      rating: 3.5,
      numReviews: 18,
      description:
        'boAt Iris | Round Dial Smart Watch with 1.39" AMOLED Display, Multiple Watch Faces',
    },
    {
      // _id: '4',
      name: 'boAt Rockerz',
      slug: 'boAt-Rockerz',
      category: 'heaphone',
      image: '/images/boAt-Rockerz.png',
      price: 1500,
      countInStock: 12,
      brand: 'Boat',
      rating: 4.5,
      numReviews: 20,
      description:
        'boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver, Adaptive Ear Cups and Headband, Get ready to rule with #DCYou',
    },
  ],
};

export default data;
