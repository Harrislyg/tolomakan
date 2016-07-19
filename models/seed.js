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
        'loc': [103.846598, 1.372184],
        'latitude': 1.372184,
        'longitude': 103.846598,
        'address': '#01-23, Ang Mo Kio Food Centre, 724 Ang Mo Kio Avenue 6, 560724',
        'type': 'Hawker',
        'categories': 'Chinese',
        'mapId': 'ChIJUTuowOcW2jER9Sero-2KrbI',
        'price': 5
      },
      {
        'name': 'Takagi Ramen',
        'latitude': 1.372622,
        'longitude': 103.847911,
        'address': '721 Ang Mo Kio Ave 8, 560721',
        'type': 'Coffeeshop',
        'categories': 'Japanese',
        'mapId': 'ChIJJSaPReYW2jEREuPzcKz3ABM',
        'price': 5
      },
      {
        'name': 'Fish & Co',
        'latitude': 1.369404,
        'longitude': 103.848535,
        'address': '53 Ang Mo Kio Avenue 3 #02-03, 569933',
        'type': 'Shopping Centre',
        'categories': 'Western',
        'mapId': 'ChIJg54QwuYW2jERr1OA-8Kkgpc',
        'price': 20
      },
      {
        'name': 'Broadway Claypot Rice',
        'latitude': 1.372757,
        'longitude': 103.845735,
        'address': '728 Ang Mo Kio Ave 6, #01-4200, 560728',
        'type': 'Coffeeshop',
        'categories': 'Chinese',
        'mapId': 'ChIJCb1S7ucW2jERkOghZA5akuc',
        'price': 10
      },
      {
        'name': 'New Lucky Claypot Rice',
        'latitude': 1.372757,
        'longitude': 1.3081851,
        'address': '44 Holland Dr, 270044',
        'type': 'Hawker',
        'categories': 'Chinese',
        'mapId': 'ChIJzw5DAGoa2jERt8_c3_Tf4BU',
        'price': 10
      },
      {
        'name': 'Nakhon Kitchen (Holland Village)',
        'latitude': 1.310318,
        'longitude': 103.794872,
        'address': '27 Lorong Liput, 277738',
        'type': 'Restaurant',
        'categories': 'Thai',
        'mapId': 'ChIJ0zpLTWoa2jERWxGSkVorZcs',
        'price': 15
      },
      {
        'name': 'Hua Soon Western Food',
        'latitude': 1.310318,
        'longitude': 103.795231,
        'address': '30 Lorong Mambong, 277688',
        'type': 'Hawker',
        'categories': 'Western',
        'mapId': 'ChIJVeEulmsa2jERZWfzcKz3ABM',
        'price': 5
      },
      {
        'name': 'Master Crab Seafood Restaurant',
        'latitude': 1.31151,
        'longitude': 103.7882624,
        'address': '19 Ghim Moh Rd Block 19, 270019',
        'type': 'Restaurant',
        'categories': 'Chinese',
        'mapId': 'ChIJ5QFOv2ga2jERcq_ycKz3ABM',
        'price': 25
      },
      {
        'name': 'Flock Cafe',
        'latitude': 1.3103805,
        'longitude': 103.7886997,
        'address': '21 Ghim Moh Rd, 270021',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJ368b-Wga2jERCpPncKz3ABM',
        'price': 15
      },
      {
        'name': 'The Daily Roundup',
        'latitude': 1.2789591,
        'longitude': 103.8414418,
        'address': '1 Keong Saik Rd ,089109',
        'type': 'Restaurant',
        'categories': 'Western',
        'mapId': 'ChIJKzgDm20Z2jER-afMKsumo_8',
        'price': 20
      },
      {
        'name': 'The Salad Corner',
        'latitude': 1.2770121,
        'longitude': 103.843119,
        'address': '7 Tanjong Pagar Plaza, 081006',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJKcgO6WwZ2jERj8vb3LjSWGM',
        'price': 5
      },
      {
        'name': 'Chicken Up',
        'latitude': 1.2792825,
        'longitude': 103.8438331,
        'address': '48 Tanjong Pagar Rd, 088469',
        'type': 'Restaurant',
        'categories': 'Korean',
        'mapId': 'ChIJZWyIXG0Z2jERpNIvzy4gLdg',
        'price': 15
      },
      {
        'name': 'Churn Creamery',
        'latitude': 1.2776249,
        'longitude': 103.8434633,
        'address': '124 Tanjong Pagar Rd, 088533',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJe_ddIm0Z2jERqStahXFc4Lg',
        'price': 5
      },
      {
        'name': 'Ramen Keisuke Tonkotsu King',
        'latitude': 1.276993,
        'longitude': 103.843891,
        'address': '1 Tras Link, 078867',
        'type': 'Restaurant',
        'categories': 'Japanese',
        'mapId': 'ChIJm0Ov22wZ2jER2k1dfRsReJM',
        'price': 15
      },
      {
        'name': 'Foong Kee Coffee Shop',
        'latitude': 1.2794509,
        'longitude': 103.841602,
        'address': '6 Keong Saik Rd ,089114',
        'type': 'Hawker',
        'categories': 'Chinese',
        'mapId': 'ChIJNyBYgW0Z2jER6LFXYOlFg6A',
        'price': 5
      },
      {
        'name': 'Carpenter and Cook',
        'latitude': 1.341761,
        'longitude': 103.773741,
        'address': '19 Lorong Kilat, 598120',
        'type': 'Cafe',
        'categories': 'Pastries',
        'mapId': 'ChIJDSSoi2EQ2jERc7rgcKz3ABM',
        'price': 5
      },
      {
        'name': 'Kok Sen Restaurant',
        'latitude': 1.2802561,
        'longitude': 103.8417121,
        'address': '30-32 Keong Saik Road, 089137',
        'type': 'Coffeeshop',
        'categories': 'Chinese',
        'mapId': 'ChIJ1UPefHIZ2jERXuryXM_uwM8',
        'price': 20
      },
      {
        'name': 'Riders Cafe',
        'latitude': 1.343066,
        'longitude': 103.797242,
        'address': '51 Fairways Drive, 286965 ',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJFZXh_b0Q2jER75ifsyreO2M',
        'price': 20
      },
      {
        'name': 'Kilo At Pact',
        'latitude': 1.300499,
        'longitude': 103.840329,
        'address': '#02-16/17/18/19, Orchard Central, 181 Orchard Road, 238879',
        'type': 'Restaurant',
        'categories': 'Japanese',
        'mapId': 'ChIJ3-AJUvMZ2jERwnf5cKz3ABM',
        'price': 15
      },
      {
        'name': 'Common Man Coffee Roasters',
        'latitude': 1.291825,
        'longitude': 103.838409,
        'address': '#01-00, 22 Martin Road, 239058',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJgVIRL5wZ2jERMxD8bYgUDX4',
        'price': 5
      },
      {
        'name': ' 49 Seats (Kreta Ayer)',
        'latitude': 1.281098,
        'longitude': 103.842125,
        'address': '49 Kreta Ayer Road, 089007',
        'type': 'Restaurant',
        'categories': 'Western',
        'mapId': 'ChIJZ1x39XIZ2jERQoMVizkrq5g',
        'price': 10
      },
      {
        'name': 'Peach Blossoms',
        'latitude': 1.290989,
        'longitude': 103.857422,
        'address': '#05-00, Marina Mandarin, 6 Raffles Boulevard, 039594',
        'type': 'Restaurant',
        'categories': 'Chinese',
        'mapId': 'ChIJq1Gtk6gZ2jERKsjucKz3ABM',
        'price': 50
      },
      {
        'name': 'Alkaff Mansion Ristorante',
        'latitude': 1.278821,
        'longitude': 103.813194,
        'address': '10 Telok Blangah Green, 109178',
        'type': 'Restaurant',
        'categories': 'Italian',
        'mapId': 'ChIJJ8m4Ydob2jERPTaLyzkNU0c',
        'price': 50
      },
      {
        'name': 'Strangers Reunion',
        'latitude': 1.276918,
        'longitude': 103.836435,
        'address': '35 Kampong Bahru Rd, 169356',
        'type': 'Cafe',
        'categories': 'Italian',
        'mapId': 'ChIJbQG9_G4Z2jERnElx_kQkrQs',
        'price': 50
      },
      {
        'name': 'Symmetry',
        'latitude': 1.303802,
        'longitude': 103.859248,
        'address': '9 Jln Kubor, 199206',
        'type': 'Restaurant',
        'categories': 'French',
        'mapId': 'ChIJuW8HJ7cZ2jERsmE9dbR-zU0',
        'price': 15
      },
      {
        'name': 'Sunday Folks',
        'latitude': 1.311694,
        'longitude': 103.796814,
        'address': '44 Jalan Merah Saga, #01-52 Chip Bee Gardens, 278116',
        'type': 'Cafe',
        'categories': 'Dessert',
        'mapId': 'ChIJXybVG2sa2jERE5H7jq33AB0',
        'price': 10
      },
      {
        'name': 'Salted Caramel',
        'latitude': 1.353742,
        'longitude': 103.83437,
        'address': '246 Upper Thomson Rd, 574370',
        'type': 'Cafe',
        'categories': 'Dessert',
        'mapId': 'ChIJP8IIvzoX2jERO_LXzaI7kRk',
        'price': 10
      },
      {
        'name': 'Mad About Sucre',
        'latitude': 1.279797,
        'longitude': 103.840834,
        'address': '27 Teo Hong Rd, 088334',
        'type': 'Restaurant',
        'categories': 'French',
        'mapId': 'ChIJySLpiW0Z2jER_ItaBiawvRE',
        'price': 20
      },
      {
        'name': 'Hyde & Co.',
        'latitude': 1.303832,
        'longitude': 103.860016,
        'address': '785 North Bridge Rd, 198753',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJuwhl27YZ2jERnuxbb23612k',
        'price': 25
      },
      {
        'name': 'Artistry',
        'latitude': 1.302908,
        'longitude': 103.858272,
        'address': '17 Jalan Pinang, 199149',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJWZuDzLAZ2jERx9lQ0ZKPwa8',
        'price': 15
      },
      {
        'name': 'I Am',
        'latitude': 1.301757,
        'longitude': 103.858413,
        'address': '674 North Bridge Road, 199486',
        'type': 'Cafe',
        'categories': 'Europe',
        'mapId': 'ChIJf2l-CLEZ2jERD95MRU2NOQY',
        'price': 20
      },
      {
        'name': 'Masizzim Singapore',
        'latitude': 1.301259,
        'longitude': 103.838561,
        'address': '313 Orchard Road, 238895',
        'type': 'Restaurant',
        'categories': 'Korean',
        'mapId': 'ChIJp00lJpEZ2jERhCa3U4A_0KM',
        'price': 20
      },
      {
        'name': 'Ah Bong Italian',
        'latitude': 1.283818,
        'longitude': 103.834237,
        'address': '56 Eng Hoon Street, 160056',
        'type': 'Restaurant',
        'categories': 'Italian',
        'mapId': 'ChIJJUf0rXAZ2jERs29PMQX2O9k',
        'price': 10
      },
      {
        'name': 'Choupinette',
        'latitude': 1.324341,
        'longitude': 103.809611,
        'address': '607 Bukit Timah Rd, 269708',
        'type': 'Restaurant',
        'categories': 'French',
        'mapId': 'ChIJvzcShwga2jERsgFGLUFd7K4',
        'price': 25
      },
      {
        'name': 'The Fabulous Baker Boy',
        'latitude': 1.291792,
        'longitude': 103.846024,
        'address': '70 River Valley Rd, 179037',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJ57i6z6EZ2jER0uSXBj-BpaE',
        'price': 25
      },
      {
        'name': 'The Cold Pantry',
        'latitude': 1.31546,
        'longitude': 103.853398,
        'address': '131 Rangoon Rd, 218409',
        'type': 'Cafe',
        'categories': 'Dessert',
        'mapId': 'ChIJc8oH_cQZ2jERJHB5AmBH0nQ',
        'price': 10
      },
      {
        'name': 'Nunsaram Korean Dessert Cafe',
        'latitude': 1.300609,
        'longitude': 103.840034,
        'address': '181 Orchard Rd, 238896',
        'type': 'Cafe',
        'categories': 'Korean',
        'mapId': 'ChIJH-sL2JYZ2jER2rzmYzWed0U',
        'price': 5
      },
      {
        'name': 'The LoKal',
        'latitude': 1.278399,
        'longitude': 103.840872,
        'address': '136 Neil Rd, 088865',
        'type': 'Cafe',
        'categories': 'Aussie',
        'mapId': 'ChIJ7zUyvG0Z2jERINlzoYjfjCc',
        'price': 25
      }
    ]
  }
]
