const mongoose = require('mongoose');

const productDetails = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 1 Detail',
    description: 'Vivamus at vestibulum purus. Fusce varius urna id scelerisque gravida. In in ex orci. Duis maximus sapien quis lorem feugiat, eget efficitur felis suscipit. Quisque ut erat at mi dictum congue vel eget velit. Ut non elit aliquam, finibus metus sit amet, vestibulum libero. Duis eget ante sollicitudin ligula feugiat efficitur ac in leo. Morbi dictum, mi sed mollis volutpat, est leo tristique nulla, eu luctus massa sapien vel mi. Curabitur suscipit neque at lectus varius, sit amet consectetur nibh ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et nisi pretium, interdum velit molestie, aliquet nisl. Integer convallis ut nulla eget dictum. Etiam leo mi, varius eget vulputate quis, sagittis non ante. Duis et risus ac arcu auctor tincidunt malesuada non diam.',
    price: 100,
    imageURL: '/assets/photo-1.jpg',
    stockQuantity: 10,
    createdAt: new Date('2023-01-01'),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 2 Detail',
    description: 'Vivamus at vestibulum purus. Fusce varius urna id scelerisque gravida. In in ex orci. Duis maximus sapien quis lorem feugiat, eget efficitur felis suscipit. Quisque ut erat at mi dictum congue vel eget velit. Ut non elit aliquam, finibus metus sit amet, vestibulum libero. Duis eget ante sollicitudin ligula feugiat efficitur ac in leo. Morbi dictum, mi sed mollis volutpat, est leo tristique nulla, eu luctus massa sapien vel mi. Curabitur suscipit neque at lectus varius, sit amet consectetur nibh ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et nisi pretium, interdum velit molestie, aliquet nisl. Integer convallis ut nulla eget dictum. Etiam leo mi, varius eget vulputate quis, sagittis non ante. Duis et risus ac arcu auctor tincidunt malesuada non diam.',
    price: 75,
    imageURL: '/assets/photo-2.jpg',
    stockQuantity: 15,
    createdAt: new Date('2023-01-05'),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 3 Detail',
    description: 'Vivamus at vestibulum purus. Fusce varius urna id scelerisque gravida. In in ex orci. Duis maximus sapien quis lorem feugiat, eget efficitur felis suscipit. Quisque ut erat at mi dictum congue vel eget velit. Ut non elit aliquam, finibus metus sit amet, vestibulum libero. Duis eget ante sollicitudin ligula feugiat efficitur ac in leo. Morbi dictum, mi sed mollis volutpat, est leo tristique nulla, eu luctus massa sapien vel mi. Curabitur suscipit neque at lectus varius, sit amet consectetur nibh ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et nisi pretium, interdum velit molestie, aliquet nisl. Integer convallis ut nulla eget dictum. Etiam leo mi, varius eget vulputate quis, sagittis non ante. Duis et risus ac arcu auctor tincidunt malesuada non diam.',
    price: 50,
    imageURL: '/assets/photo-3.jpg',
    stockQuantity: 20,
    createdAt: new Date('2023-01-10'),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 4 Detail',
    description: 'Vivamus at vestibulum purus. Fusce varius urna id scelerisque gravida. In in ex orci. Duis maximus sapien quis lorem feugiat, eget efficitur felis suscipit. Quisque ut erat at mi dictum congue vel eget velit. Ut non elit aliquam, finibus metus sit amet, vestibulum libero. Duis eget ante sollicitudin ligula feugiat efficitur ac in leo. Morbi dictum, mi sed mollis volutpat, est leo tristique nulla, eu luctus massa sapien vel mi. Curabitur suscipit neque at lectus varius, sit amet consectetur nibh ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et nisi pretium, interdum velit molestie, aliquet nisl. Integer convallis ut nulla eget dictum. Etiam leo mi, varius eget vulputate quis, sagittis non ante. Duis et risus ac arcu auctor tincidunt malesuada non diam.',
    price: 120,
    imageURL: '/assets/photo-4.jpg',
    stockQuantity: 8,
    createdAt: new Date('2023-01-15'),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 5 Detail',
    description: 'Vivamus at vestibulum purus. Fusce varius urna id scelerisque gravida. In in ex orci. Duis maximus sapien quis lorem feugiat, eget efficitur felis suscipit. Quisque ut erat at mi dictum congue vel eget velit. Ut non elit aliquam, finibus metus sit amet, vestibulum libero. Duis eget ante sollicitudin ligula feugiat efficitur ac in leo. Morbi dictum, mi sed mollis volutpat, est leo tristique nulla, eu luctus massa sapien vel mi. Curabitur suscipit neque at lectus varius, sit amet consectetur nibh ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et nisi pretium, interdum velit molestie, aliquet nisl. Integer convallis ut nulla eget dictum. Etiam leo mi, varius eget vulputate quis, sagittis non ante. Duis et risus ac arcu auctor tincidunt malesuada non diam.',
    price: 90,
    imageURL: '/assets/photo-5.jpg',
    stockQuantity: 12,
    createdAt: new Date('2023-01-20'),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 6 Detail',
    description: 'Vivamus at vestibulum purus. Fusce varius urna id scelerisque gravida. In in ex orci. Duis maximus sapien quis lorem feugiat, eget efficitur felis suscipit. Quisque ut erat at mi dictum congue vel eget velit. Ut non elit aliquam, finibus metus sit amet, vestibulum libero. Duis eget ante sollicitudin ligula feugiat efficitur ac in leo. Morbi dictum, mi sed mollis volutpat, est leo tristique nulla, eu luctus massa sapien vel mi. Curabitur suscipit neque at lectus varius, sit amet consectetur nibh ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et nisi pretium, interdum velit molestie, aliquet nisl. Integer convallis ut nulla eget dictum. Etiam leo mi, varius eget vulputate quis, sagittis non ante. Duis et risus ac arcu auctor tincidunt malesuada non diam.',
    price: 60,
    imageURL: '/assets/photo-6.jpg',
    stockQuantity: 18,
    createdAt: new Date('2023-01-25'),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 7 Detail',
    description: 'Vivamus at vestibulum purus. Fusce varius urna id scelerisque gravida. In in ex orci. Duis maximus sapien quis lorem feugiat, eget efficitur felis suscipit. Quisque ut erat at mi dictum congue vel eget velit. Ut non elit aliquam, finibus metus sit amet, vestibulum libero. Duis eget ante sollicitudin ligula feugiat efficitur ac in leo. Morbi dictum, mi sed mollis volutpat, est leo tristique nulla, eu luctus massa sapien vel mi. Curabitur suscipit neque at lectus varius, sit amet consectetur nibh ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et nisi pretium, interdum velit molestie, aliquet nisl. Integer convallis ut nulla eget dictum. Etiam leo mi, varius eget vulputate quis, sagittis non ante. Duis et risus ac arcu auctor tincidunt malesuada non diam.',
    price: 85,
    imageURL: '/assets/photo-7.jpg',
    stockQuantity: 14,
    createdAt: new Date('2023-01-30'),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 8 Detail',
    description: 'Vivamus at vestibulum purus. Fusce varius urna id scelerisque gravida. In in ex orci. Duis maximus sapien quis lorem feugiat, eget efficitur felis suscipit. Quisque ut erat at mi dictum congue vel eget velit. Ut non elit aliquam, finibus metus sit amet, vestibulum libero. Duis eget ante sollicitudin ligula feugiat efficitur ac in leo. Morbi dictum, mi sed mollis volutpat, est leo tristique nulla, eu luctus massa sapien vel mi. Curabitur suscipit neque at lectus varius, sit amet consectetur nibh ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et nisi pretium, interdum velit molestie, aliquet nisl. Integer convallis ut nulla eget dictum. Etiam leo mi, varius eget vulputate quis, sagittis non ante. Duis et risus ac arcu auctor tincidunt malesuada non diam.',
    price: 70,
    imageURL: '/assets/photo-8.jpg',
    stockQuantity: 16,
    createdAt: new Date('2023-02-05'),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 9 Detail',
    description: 'Vivamus at vestibulum purus. Fusce varius urna id scelerisque gravida. In in ex orci. Duis maximus sapien quis lorem feugiat, eget efficitur felis suscipit. Quisque ut erat at mi dictum congue vel eget velit. Ut non elit aliquam, finibus metus sit amet, vestibulum libero. Duis eget ante sollicitudin ligula feugiat efficitur ac in leo. Morbi dictum, mi sed mollis volutpat, est leo tristique nulla, eu luctus massa sapien vel mi. Curabitur suscipit neque at lectus varius, sit amet consectetur nibh ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et nisi pretium, interdum velit molestie, aliquet nisl. Integer convallis ut nulla eget dictum. Etiam leo mi, varius eget vulputate quis, sagittis non ante. Duis et risus ac arcu auctor tincidunt malesuada non diam.',
    price: 110,
    imageURL: '/assets/photo-9.jpg',
    stockQuantity: 9,
    createdAt: new Date('2023-02-10'),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 10 Detail',
    description: 'Vivamus at vestibulum purus. Fusce varius urna id scelerisque gravida. In in ex orci. Duis maximus sapien quis lorem feugiat, eget efficitur felis suscipit. Quisque ut erat at mi dictum congue vel eget velit. Ut non elit aliquam, finibus metus sit amet, vestibulum libero. Duis eget ante sollicitudin ligula feugiat efficitur ac in leo. Morbi dictum, mi sed mollis volutpat, est leo tristique nulla, eu luctus massa sapien vel mi. Curabitur suscipit neque at lectus varius, sit amet consectetur nibh ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et nisi pretium, interdum velit molestie, aliquet nisl. Integer convallis ut nulla eget dictum. Etiam leo mi, varius eget vulputate quis, sagittis non ante. Duis et risus ac arcu auctor tincidunt malesuada non diam.',
    price: 95,
    imageURL: '/assets/photo-10.jpg',
    stockQuantity: 11,
    createdAt: new Date('2023-02-15'),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 11 Detail',
    description: 'Vivamus at vestibulum purus. Fusce varius urna id scelerisque gravida. In in ex orci. Duis maximus sapien quis lorem feugiat, eget efficitur felis suscipit. Quisque ut erat at mi dictum congue vel eget velit. Ut non elit aliquam, finibus metus sit amet, vestibulum libero. Duis eget ante sollicitudin ligula feugiat efficitur ac in leo. Morbi dictum, mi sed mollis volutpat, est leo tristique nulla, eu luctus massa sapien vel mi. Curabitur suscipit neque at lectus varius, sit amet consectetur nibh ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et nisi pretium, interdum velit molestie, aliquet nisl. Integer convallis ut nulla eget dictum. Etiam leo mi, varius eget vulputate quis, sagittis non ante. Duis et risus ac arcu auctor tincidunt malesuada non diam.',
    price: 65,
    imageURL: '/assets/photo-11.jpg',
    stockQuantity: 17,
    createdAt: new Date('2023-02-20'),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 12 Detail',
    description: 'Vivamus at vestibulum purus. Fusce varius urna id scelerisque gravida. In in ex orci. Duis maximus sapien quis lorem feugiat, eget efficitur felis suscipit. Quisque ut erat at mi dictum congue vel eget velit. Ut non elit aliquam, finibus metus sit amet, vestibulum libero. Duis eget ante sollicitudin ligula feugiat efficitur ac in leo. Morbi dictum, mi sed mollis volutpat, est leo tristique nulla, eu luctus massa sapien vel mi. Curabitur suscipit neque at lectus varius, sit amet consectetur nibh ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et nisi pretium, interdum velit molestie, aliquet nisl. Integer convallis ut nulla eget dictum. Etiam leo mi, varius eget vulputate quis, sagittis non ante. Duis et risus ac arcu auctor tincidunt malesuada non diam.',
    price: 105,
    imageURL: '/assets/photo-12.jpg',
    stockQuantity: 7,
    createdAt: new Date('2023-02-25'),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 13 Detail',
    description: 'Vivamus at vestibulum purus. Fusce varius urna id scelerisque gravida. In in ex orci. Duis maximus sapien quis lorem feugiat, eget efficitur felis suscipit. Quisque ut erat at mi dictum congue vel eget velit. Ut non elit aliquam, finibus metus sit amet, vestibulum libero. Duis eget ante sollicitudin ligula feugiat efficitur ac in leo. Morbi dictum, mi sed mollis volutpat, est leo tristique nulla, eu luctus massa sapien vel mi. Curabitur suscipit neque at lectus varius, sit amet consectetur nibh ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et nisi pretium, interdum velit molestie, aliquet nisl. Integer convallis ut nulla eget dictum. Etiam leo mi, varius eget vulputate quis, sagittis non ante. Duis et risus ac arcu auctor tincidunt malesuada non diam.',
    price: 80,
    imageURL: '/assets/photo-13.jpg',
    stockQuantity: 13,
    createdAt: new Date('2023-03-01'),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 14 Detail',
    description: 'Vivamus at vestibulum purus. Fusce varius urna id scelerisque gravida. In in ex orci. Duis maximus sapien quis lorem feugiat, eget efficitur felis suscipit. Quisque ut erat at mi dictum congue vel eget velit. Ut non elit aliquam, finibus metus sit amet, vestibulum libero. Duis eget ante sollicitudin ligula feugiat efficitur ac in leo. Morbi dictum, mi sed mollis volutpat, est leo tristique nulla, eu luctus massa sapien vel mi. Curabitur suscipit neque at lectus varius, sit amet consectetur nibh ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et nisi pretium, interdum velit molestie, aliquet nisl. Integer convallis ut nulla eget dictum. Etiam leo mi, varius eget vulputate quis, sagittis non ante. Duis et risus ac arcu auctor tincidunt malesuada non diam.',
    price: 55,
    imageURL: '/assets/photo-14.jpg',
    stockQuantity: 19,
    createdAt: new Date('2023-03-05'),
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 15 Detail',
    description: 'Vivamus at vestibulum purus. Fusce varius urna id scelerisque gravida. In in ex orci. Duis maximus sapien quis lorem feugiat, eget efficitur felis suscipit. Quisque ut erat at mi dictum congue vel eget velit. Ut non elit aliquam, finibus metus sit amet, vestibulum libero. Duis eget ante sollicitudin ligula feugiat efficitur ac in leo. Morbi dictum, mi sed mollis volutpat, est leo tristique nulla, eu luctus massa sapien vel mi. Curabitur suscipit neque at lectus varius, sit amet consectetur nibh ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et nisi pretium, interdum velit molestie, aliquet nisl. Integer convallis ut nulla eget dictum. Etiam leo mi, varius eget vulputate quis, sagittis non ante. Duis et risus ac arcu auctor tincidunt malesuada non diam.',
    price: 115,
    imageURL: '/assets/photo-15.jpg',
    stockQuantity: 6,
    createdAt: new Date('2023-03-10'),
  },
];

const products = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 1',
    price: 100,
    imageURL: '/assets/photo-1.jpg',
    stockQuantity: 10,
    createdAt: new Date('2023-01-01'),
    productDetail: productDetails[0]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 2',
    price: 75,
    imageURL: '/assets/photo-2.jpg',
    stockQuantity: 15,
    createdAt: new Date('2023-01-05'),
    productDetail: productDetails[1]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 3',
    price: 50,
    imageURL: '/assets/photo-3.jpg',
    stockQuantity: 20,
    createdAt: new Date('2023-01-10'),
    productDetail: productDetails[2]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 4',
    price: 120,
    imageURL: '/assets/photo-4.jpg',
    stockQuantity: 8,
    createdAt: new Date('2023-01-15'),
    productDetail: productDetails[3]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 5',
    price: 90,
    imageURL: '/assets/photo-5.jpg',
    stockQuantity: 12,
    createdAt: new Date('2023-01-20'),
    productDetail: productDetails[4]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 6',
    price: 60,
    imageURL: '/assets/photo-6.jpg',
    stockQuantity: 18,
    createdAt: new Date('2023-01-25'),
    productDetail: productDetails[5]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 7',
    price: 85,
    imageURL: '/assets/photo-7.jpg',
    stockQuantity: 14,
    createdAt: new Date('2023-01-30'),
    productDetail: productDetails[6]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 8',
    price: 70,
    imageURL: '/assets/photo-8.jpg',
    stockQuantity: 16,
    createdAt: new Date('2023-02-05'),
    productDetail: productDetails[7]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 9',
    price: 110,
    imageURL: '/assets/photo-9.jpg',
    stockQuantity: 9,
    createdAt: new Date('2023-02-10'),
    productDetail: productDetails[8]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 10',
    price: 95,
    imageURL: '/assets/photo-10.jpg',
    stockQuantity: 11,
    createdAt: new Date('2023-02-15'),
    productDetail: productDetails[9]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 11',
    price: 65,
    imageURL: '/assets/photo-11.jpg',
    stockQuantity: 17,
    createdAt: new Date('2023-02-20'),
    productDetail: productDetails[10]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 12',
    price: 105,
    imageURL: '/assets/photo-12.jpg',
    stockQuantity: 7,
    createdAt: new Date('2023-02-25'),
    productDetail: productDetails[11]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 13',
    price: 80,
    imageURL: '/assets/photo-13.jpg',
    stockQuantity: 13,
    createdAt: new Date('2023-03-01'),
    productDetail: productDetails[12]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 14',
    price: 55,
    imageURL: '/assets/photo-14.jpg',
    stockQuantity: 19,
    createdAt: new Date('2023-03-05'),
    productDetail: productDetails[13]._id,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: 'Product 15',
    price: 115,
    imageURL: '/assets/photo-15.jpg',
    stockQuantity: 6,
    createdAt: new Date('2023-03-10'),
    productDetail: productDetails[14]._id,
  },
];

module.exports = { productDetails, products };
