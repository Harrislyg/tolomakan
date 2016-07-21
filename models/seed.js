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
        'loc': [103.847911, 1.372622],
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
        'loc': [103.848535, 1.369404],
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
        'loc': [103.845735, 1.372757],
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
        'loc': [1.3081851, 1.372757],
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
        'loc': [103.794872, 1.310318],
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
        'loc': [103.795231, 1.310318],
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
        'loc': [103.7882624, 1.31151],
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
        'loc': [103.7886997, 1.3103805],
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
        'loc': [103.8414418, 1.2789591],
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
        'loc': [103.843119, 1.2770121],
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
        'loc': [103.8438331, 1.2792825],
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
        'loc': [103.8434633, 1.2776249],
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
        'loc': [103.843891, 1.276993],
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
        'loc': [103.841602, 1.2794509],
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
        'loc': [103.773741, 1.341761],
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
        'loc': [103.8417121, 1.2802561],
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
        'loc': [103.797242, 1.343066],
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
        'loc': [103.840329, 1.300499],
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
        'loc': [103.838409, 1.291825],
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
        'loc': [103.842125, 1.281098],
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
        'loc': [103.857422, 1.290989],
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
        'loc': [103.813194, 1.278821],
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
        'loc': [103.836435, 1.276918],
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
        'loc': [103.859248, 1.303802],
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
        'loc': [103.796814, 1.311694],
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
        'loc': [103.83437, 1.353742],
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
        'loc': [103.840834, 1.279797],
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
        'loc': [103.860016, 1.303832],
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
        'loc': [103.858272, 1.302908],
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
        'loc': [103.858413, 1.301757],
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
        'loc': [103.838561, 1.301259],
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
        'loc': [103.834237, 1.283818],
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
        'loc': [103.809611, 1.324341],
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
        'loc': [103.846024, 1.291792],
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
        'loc': [103.853398, 1.31546],
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
        'loc': [103.840034, 1.300609],
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
        'loc': [103.840872, 1.278399],
        'latitude': 1.278399,
        'longitude': 103.840872,
        'address': '136 Neil Rd, 088865',
        'type': 'Cafe',
        'categories': 'Aussie',
        'mapId': 'ChIJ7zUyvG0Z2jERINlzoYjfjCc',
        'price': 25
      },
      {
        'name': 'Oma Spoon',
        'loc': [103.838561, 1.301259],
        'latitude': 1.301259,
        'longitude': 103.838561,
        'address': '#04-20/32, 313@Somerset, 313 Orchard Rd, 238895',
        'type': 'Cafe',
        'categories': 'Korean',
        'mapId': 'ChIJp00lJpEZ2jERhCa3U4A_0KM',
        'price': 10

      },
      {
        'name': 'A Noodle Story',
        'loc': [103.846674, 1.279431],
        'latitude': 1.279431,
        'longitude': 103.846674,
        'address': '#01-39 069891, 7 Maxwell Rd, 069111',
        'type': 'Hawker',
        'categories': 'Chinese',
        'mapId': 'ChIJ642LmRIZ2jERpAlKinakrcE',
        'price': 5
      },
      {
        'name': 'The Wicked Garlic',
        'loc': [103.846362, 1.276167],
        'latitude': 1.276167,
        'longitude': 103.846362,
        'address': '10 Anson Road, #01-37, International Plaza, 079903',
        'type': 'Cafe',
        'categories': 'Italian',
        'mapId': 'ChIJdSRrWxMZ2jERg4X5jq33AB0',
        'price': 15
      },
      {
        'name': 'Ginza Tendon Itsuki',
        'loc': [103.843754, 1.277318],
        'latitude': 1.277318,
        'longitude': 103.843754,
        'address': '101 Tanjong Pagar Rd, 088522',
        'type': 'Restaurant',
        'categories': 'Japanese',
        'mapId': 'ChIJMaG_2GwZ2jERtl0csWETlDc',
        'price': 20
      },
      {
        'name': 'Brothers Ramen',
        'loc': [103.846269, 1.275934],
        'latitude': 1.275934,
        'longitude': 103.846269,
        'address': 'International Plaza #01-20, 10 Anson Road, 079903',
        'type': 'Coffeeshop',
        'categories': 'Japanese',
        'mapId': 'ChIJdSRrWxMZ2jERg4X5jq33AB0',
        'price': 15
      },
      {
        'name': 'Sing HK Cafe',
        'loc': [103.84009, 1.276955],
        'latitude': 1.276955,
        'longitude': 103.84009,
        'address': 'Block #01-42, 4 Everton Park, Block 4, 080004',
        'type': 'Cafe',
        'categories': 'Chinese',
        'mapId': 'ChIJNWrLMGwZ2jERfgBvkpmMkQM',
        'price': 5
      },
      {
        'name': 'Munch SaladSmith',
        'loc': [103.848881, 1.279253],
        'latitude': 1.279253,
        'longitude': 103.848881,
        'address': '112 Robinson Rd, Robinson 112, #01-01, 068902',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJT3BedBIZ2jERqElrS0B47qA',
        'price': 15
      },
      {
        'name': 'Imperial Treasure Noodle & Congee House',
        'loc': [103.843549, 1.274929],
        'latitude': 1.274929,
        'longitude': 103.843549,
        'address': '100 Tras Street, 079027	',
        'type': 'Restaurant',
        'categories': 'Chinese',
        'mapId': 'ChIJIZCqX2sZ2jERYvpfRzrbnvE',
        'price': 20
      },
      {
        'name': '2D1N Soju Bang',
        'loc': [103.843819, 1.279351],
        'latitude': 1.279351,
        'longitude': 103.843819,
        'address': '44/46 Tanjong Pagar Rd, 088465',
        'type': 'Restaurant',
        'categories': 'Korean',
        'mapId': 'ChIJIZUqXG0Z2jER29HucKz3ABM',
        'price': 25
      },
      {
        'name': 'Xiu Ji Ikan Bilis Yong Tau Fu',
        'loc': [103.843098, 1.282573],
        'latitude': 1.282573,
        'longitude': 103.843098,
        'address': 'Smith St, Chinatown Silk House, 050335',
        'type': 'Hawker',
        'categories': 'Chinese',
        'mapId': 'ChIJAenlH3MZ2jER7D351vE8fgo',
        'price': 5
      },
      {
        'name': 'Afterglow',
        'loc': [103.84167, 1.280102],
        'latitude': 1.280102,
        'longitude': 103.84167,
        'address': '24 Keong Saik Rd, 089131',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJBVdQfHIZ2jERkv_5-eIKycQ',
        'price': 25
      },
      {
        'name': 'Potato Head Folk',
        'loc': [103.8417, 1.280639],
        'latitude': 1.280639,
        'longitude': 103.8417,
        'address': '36 Keong Saik Rd, 089143',
        'type': 'Restaurant',
        'categories': 'Western',
        'mapId': 'ChIJ908dY3IZ2jERtc-dqh3jOEM',
        'price': 20
      },
      {
        'name': 'The Populus Coffee & Food Co.',
        'loc': [103.84075, 1.278195],
        'latitude': 1.278195,
        'longitude': 103.84075,
        'address': '146 Neil Rd, 088875',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJIQ0quW0Z2jERoyEo9Sbz8pY',
        'price': 25
      },
      {
        'name': 'Drury Lane',
        'loc': [103.843762, 1.278283],
        'latitude': 1.278283,
        'longitude': 103.843762,
        'address': '94 Tg Pagar Rd, 088515',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJHS-tOG0Z2jERKEayWY8eq5k',
        'price': 15
      },
      {
        'name': 'Tong Ah Eating House',
        'loc': [103.84144, 1.280103],
        'latitude': 1.280103,
        'longitude': 103.84144,
        'address': '35 Keong Saik Rd, 089142',
        'type': 'Coffeeshop',
        'categories': 'Chinese',
        'mapId': 'ChIJzTtVenIZ2jER_1V4DZQU_t0',
        'price': 5
      },
      {
        'name': 'Twins',
        'loc': [103.843009, 1.277508],
        'latitude': 1.277508,
        'longitude': 103.843009,
        'address': '7 Craig Rd, 089667',
        'type': 'Restaurant',
        'categories': 'Korean',
        'mapId': 'ChIJS9ty52wZ2jERxXHAxofkpZg',
        'price': 25
      },
      {
        'name': 'Xiao Ya Tou',
        'loc': [103.842912, 1.279229],
        'latitude': 1.279229,
        'longitude': 103.842912,
        'address': '6 Duxton Hill, 089592',
        'type': 'Cafe',
        'categories': 'Chinese',
        'mapId': 'ChIJVcNIZG0Z2jERTOtBSXG_R14',
        'price': 50
      },
      {
        'name': 'Taratata Bistrot',
        'loc': [103.841451, 1.280183],
        'latitude': 1.280183,
        'longitude': 103.841451,
        'address': '35A Keong Saik Road, 089142',
        'type': 'Restaurant',
        'categories': 'French',
        'mapId': 'ChIJzTtVenIZ2jER_1V4DZQU_t0',
        'price': 25
      },
      {
        'name': 'Todamgol Korean',
        'loc': [103.844003, 1.27924],
        'latitude': 1.27924,
        'longitude': 103.844003,
        'address': '31 Tanjong Pagar Rd, 088454',
        'type': 'Restaurant',
        'categories': 'Korean',
        'mapId': 'ChIJ04qkUG0Z2jER2KkBpRfUVo0',
        'price': 25
      },
      {
        'name': 'Pince & Pints',
        'loc': [103.843432, 1.279097],
        'latitude': 1.279097,
        'longitude': 103.843432,
        'address': '32-33 Duxton Rd, 089496',
        'type': 'Cafe',
        'categories': 'Dessert',
        'mapId': 'ChIJp-DcQm0Z2jERTYIW2In-ECQ',
        'price': 10
      },
      {
        'name': 'Ninja Bowl',
        'loc': [103.843359, 1.27975],
        'latitude': 1.27975,
        'longitude': 103.843359,
        'address': '15 Duxton Rd, 089481',
        'type': 'Restaurant',
        'categories': 'Japanese',
        'mapId': 'ChIJuaJzoHIZ2jEReYDppeFlH5Q',
        'price': 20
      },
      {
        'name': '999.99 Five Nines',
        'loc': [103.841516, 1.27998],
        'latitude': 1.27998,
        'longitude': 103.841516,
        'address': '29 Keong Saik Rd, 089136',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJ1egrenIZ2jER70AVskQVg9U',
        'price': 30
      },
      {
        'name': 'Lolla',
        'loc': [103.845703, 1.281046],
        'latitude': 1.281046,
        'longitude': 103.845703,
        'address': '22 Ann Siang Rd, 069702',
        'type': 'Restaurant',
        'categories': 'Western',
        'mapId': 'ChIJb-g4OA0Z2jER5ywLUTLl_4Y',
        'price': 10
      },
      {
        'name': 'Park Bench Deli',
        'loc': [103.847277, 1.279872],
        'latitude': 1.279872,
        'longitude': 103.847277,
        'address': '179 Telok Ayer St, 068627',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJVejXfQ0Z2jER2GBCXob58d0',
        'price': 15
      },
      {
        'name': 'Gaest',
        'loc': [103.847336, 1.2796],
        'latitude': 1.2796,
        'longitude': 103.847336,
        'address': '21 McCallum St, 069047',
        'type': 'Cafe',
        'categories': 'Italian',
        'mapId': 'ChIJs1OCgxIZ2jER5eWkuKZL02E',
        'price': 15
      },
      {
        'name': 'The Disgruntled Chef',
        'loc': [103.84584, 1.280869],
        'latitude': 1.280869,
        'longitude': 103.84584,
        'address': '28 Ann Siang Rd, 069708',
        'type': 'Restaurant',
        'categories': 'Western',
        'mapId': 'ChIJGaY_Rw0Z2jER8_oqyyiHrLk',
        'price': 20
      },
      {
        'name': 'Wanton Seng Noodle Bar',
        'loc': [103.846812, 1.280175],
        'latitude': 1.280175,
        'longitude': 103.846812,
        'address': '52 Amoy Street, 069878',
        'type': 'Cafe',
        'categories': 'Chinese',
        'mapId': 'ChIJE3H-ZA0Z2jERpxvI4x1fY_Q',
        'price': 20
      },
      {
        'name': 'Otto Ristorante Italiano',
        'loc': [103.846528, 1.27728],
        'latitude': 1.27728,
        'longitude': 103.846528,
        'address': '32 Maxwell Road, #01-02/03 Maxwell Chambers, Maxwell Chambers, 069115',
        'type': 'Cafe',
        'categories': 'Chinese',
        'mapId': 'ChIJ6-b0GBMZ2jERMOSs_i-W_EY',
        'price': 5
      },
      {
        'name': 'Dapper Coffe',
        'loc': [103.846796, 1.280263],
        'latitude': 1.280263,
        'longitude': 103.846796,
        'address': '73 Amoy St, 069892',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJaXTPaA0Z2jER0Xo3ieVQ3-0',
        'price': 15
      },
      {
        'name': 'The Market Grill',
        'loc': [103.847188, 1.279952],
        'latitude': 1.279952,
        'longitude': 103.847188,
        'address': '208 Telok Ayer St, Singapore 068642',
        'type': 'Restaurant',
        'categories': 'Chinese',
        'mapId': 'ChIJP-6efA0Z2jERrsKOO8jHd90',
        'price': 20
      },
      {
        'name': 'Hopscotch Bar',
        'loc': [103.845722, 1.278277],
        'latitude': 1.278277,
        'longitude': 103.845722,
        'address': '28 Maxwell Rd, #01-04 Red Dot Traffic Building, Red Dot Traffic Building, 069120',
        'type': 'Restaurant',
        'categories': 'Korean',
        'mapId': 'ChIJqStVxBIZ2jER_tEYgpadVGw',
        'price': 25
      },
      {
        'name': 'Muchachos',
        'loc': [103.841658, 1.280058],
        'latitude': 1.280058,
        'longitude': 103.841658,
        'address': '22 Keong Saik Road, 089129',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJj6E3fHIZ2jER83dvb1-4YBg',
        'price': 15
      },
      {
        'name': 'Lime House',
        'loc': [103.841715, 1.279684],
        'latitude': 1.279684,
        'longitude': 103.841715,
        'address': '2 Jiak Chuan Rd, 089260',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJ8QACgW0Z2jERd6XijkzoaFg',
        'price': 5
      },
      {
        'name': 'Luxe Sydney',
        'loc': [103.841485, 1.279102],
        'latitude': 1.279102,
        'longitude': 103.841485,
        'address': '1 Keong Saik Road #01-04 The Working Capitol Building, The Working Capitol, 089109',
        'type': 'Restaurant',
        'categories': 'Western',
        'mapId': 'ChIJKzgDm20Z2jER-afMKsumo_8',
        'price': 20
      },
      {
        'name': 'The Study',
        'loc': [103.841647, 1.28052],
        'latitude': 1.28052,
        'longitude': 103.841647,
        'address': '49 Keong Saik Rd, 089153',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJf4lAYHIZ2jERZdueU0XUaKo',
        'price': 35
      },
      {
        'name': 'in Italy',
        'loc': [103.841968, 1.278308],
        'latitude': 1.278308,
        'longitude': 103.841968,
        'address': '38 Craig Rd, 089676',
        'type': 'Cafe',
        'categories': 'Italian',
        'mapId': 'ChIJx40NCm0Z2jERgqLycKz3ABM',
        'price': 15
      },
      {
        'name': 'Roosevelt Diner & Bar',
        'loc': [103.824935, 1.276209],
        'latitude': 1.276209,
        'longitude': 103.824935,
        'address': '331 New Bridge Road #01-04, 099764',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJ2Qc3tmMZ2jER9KKj8cw2jUA',
        'price': 30
      },
      {
        'name': 'Boca',
        'loc': [103.841019, 1.278769],
        'latitude': 1.278769,
        'longitude': 103.841019,
        'address': '6 Bukit Pasoh Rd, 089820',
        'type': 'Restaurant',
        'categories': 'Western',
        'mapId': 'ChIJBUsrkW0Z2jERVp7hmA99f1I',
        'price': 15
      },
      {
        'name': 'Yi Xin Vegetarian',
        'loc': [103.843848, 1.283032],
        'latitude': 1.283032,
        'longitude': 103.843848,
        'address': '39 Temple St, 058584',
        'type': 'Cafe',
        'categories': 'Vegetarian',
        'mapId': 'ChIJc6_nO3MZ2jER1NI6vhX2KHg',
        'price': 15
      },
      {
        'name': 'Chiew Kee Noodle House',
        'loc': [103.845125, 1.284141],
        'latitude': 1.284141,
        'longitude': 103.845125,
        'address': '32 Upper Cross St, 058339',
        'type': 'Coffeeshop',
        'categories': 'Chinese',
        'mapId': 'ChIJ1yOGqwwZ2jERp9A4fXsdyqM',
        'price': 5
      },
      {
        'name': 'Sawasdee Thai Food',
        'loc': [103.844681, 1.283352],
        'latitude': 1.283352,
        'longitude': 103.844681,
        'address': '32 Pagoda St, 059191',
        'type': 'Restaurant',
        'categories': 'Thai',
        'mapId': 'ChIJG-PuSnMZ2jERsgTVglu8rgc',
        'price': 25
      },
      {
        'name': 'YOLO',
        'loc': [103.844552, 1.275185],
        'latitude': 1.275185,
        'longitude': 103.844552,
        'address': '01-01, 12 Gopeng St, 078877',
        'type': 'Cafe',
        'categories': 'Western',
        'mapId': 'ChIJHc46qmwZ2jERDGu-vS1WZIU',
        'price': 15
      },
      {
        'name': 'Napoleon Food & Wine Bar',
        'loc': [103.847211, 1.280002],
        'latitude': 1.280002,
        'longitude': 103.847211,
        'address': '206 Telok Ayer St, 068641',
        'type': 'Restaurant',
        'categories': 'Western',
        'mapId': 'ChIJJU9vew0Z2jER9NWHMktgZQI',
        'price': 15
      },
      {
        'name': 'Binomio',
        'loc': [103.842299, 1.278053],
        'latitude': 1.278053,
        'longitude': 103.842299,
        'address': '20 Craig Rd, Craig Place #01-02, 089692',
        'type': 'Restaurant',
        'categories': 'Western',
        'mapId': 'ChIJgQZtD20Z2jERWAd5FCfwaLk',
        'price': 50
      }
    ]
  }
]
