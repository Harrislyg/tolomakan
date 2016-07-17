var seeder = require('mongoose-seed')

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI, function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/makan.js'
  ])

  // Clear specified collections
  seeder.clearModels(['Makan'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data)
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'Makan',
    'documents': [
      {
        'name': 'Xi Xiang Feng Yong Tau Fu',
        'latitude': 1.372184,
        'longitude': 103.846598,
        'address': '#01-23, Ang Mo Kio Food Centre, 724 Ang Mo Kio Avenue 6, 560724',
        'type': 'Hawker',
        'categories': 'Chinese',
        'price': 5
      },
      {
        'name': 'Takagi Ramen',
        'latitude': 1.372622,
        'longitude': 103.847911,
        'address': '721 Ang Mo Kio Ave 8, 560721',
        'type': 'Coffeeshop',
        'categories': 'Japanese',
        'price': 5
      },
      {
        'name': 'Fish & Co',
        'latitude': 1.369404,
        'longitude': 103.848535,
        'address': '53 Ang Mo Kio Avenue 3 #02-03, 569933',
        'type': 'Shopping Centre',
        'categories': 'Western',
        'price': 20
      },
      {
        'name': 'Broadway Claypot Rice',
        'latitude': 1.372757,
        'longitude': 103.845735,
        'address': '728 Ang Mo Kio Ave 6, #01-4200, 560728',
        'type': 'Coffeeshop',
        'categories': 'Chinese',
        'price': 10
      },
      {
        'name': 'New Lucky Claypot Rice',
        'latitude': 1.372757,
        'longitude': 1.3081851,
        'address': '44 Holland Dr, 270044',
        'type': 'Hawker',
        'categories': 'Chinese',
        'price': 10
      },
      {
        'name': 'Nakhon Kitchen (Holland Village)',
        'latitude': 1.310318,
        'longitude': 103.794872,
        'address': '27 Lorong Liput, 277738',
        'type': 'Restaurant',
        'categories': 'Thai',
        'price': 15
      },
      {
        'name': 'Hua Soon Western Food',
        'latitude': 1.310318,
        'longitude': 103.795231,
        'address': '30 Lorong Mambong, 277688',
        'type': 'Hawker',
        'categories': 'Western',
        'price': 5
      },
      {
        'name': 'Master Crab Seafood Restaurant',
        'latitude': 1.31151,
        'longitude': 103.7882624,
        'address': '19 Ghim Moh Rd Block 19, 270019',
        'type': 'Restaurant',
        'categories': 'Chinese',
        'price': 25
      },
      {
        'name': 'Flock Cafe',
        'latitude': 1.3103805,
        'longitude': 103.7886997,
        'address': '21 Ghim Moh Rd, 270021',
        'type': 'Cafe',
        'categories': 'Western',
        'price': 15
      },
      {
        'name': 'The Daily Roundup',
        'latitude': 1.2789591,
        'longitude': 103.8414418,
        'address': '1 Keong Saik Rd ,089109',
        'type': 'Restaurant',
        'categories': 'Western',
        'price': 20
      },
      {
        'name': 'The Salad Corner',
        'latitude': 1.2770121,
        'longitude': 103.843119,
        'address': '7 Tanjong Pagar Plaza, 081006',
        'type': 'Cafe',
        'categories': 'Western',
        'price': 5
      },
      {
        'name': 'Chicken Up',
        'latitude': 1.2792825,
        'longitude': 103.8438331,
        'address': '48 Tanjong Pagar Rd, 088469',
        'type': 'Restaurant',
        'categories': 'Korean',
        'price': 15
      },
      {
        'name': 'Churn Creamery',
        'latitude': 1.2776249,
        'longitude': 103.8434633,
        'address': '124 Tanjong Pagar Rd, 088533',
        'type': 'Cafe',
        'categories': 'Western',
        'price': 5
      },
      {
        'name': 'Ramen Keisuke Tonkotsu King',
        'latitude': 1.276993,
        'longitude': 103.843891,
        'address': '1 Tras Link, 078867',
        'type': 'Restaurant',
        'categories': 'Japanese',
        'price': 15
      },
      {
        'name': 'Foong Kee Coffee Shop',
        'latitude': 1.2794509,
        'longitude': 103.841602,
        'address': '6 Keong Saik Rd ,089114',
        'type': 'Hawker',
        'categories': 'Chinese',
        'price': 5
      }
    ]
  }
]
