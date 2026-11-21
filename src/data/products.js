export const products = [
  { id: 'rose-box', name: 'The Blush Rose Box', category: 'Flowers', price: 68, rating: 4.9, tag: 'Bestseller', image: 'photo-1490750967868-88aa4486c946', description: 'A hand-tied gathering of blush garden roses, wrapped with care and made to brighten their whole week.', color: 'Blush pink' },
  { id: 'little-luxe', name: 'A Little Bit of Luxe', category: 'Gift Hampers', price: 92, rating: 4.8, tag: 'Thoughtful pick', image: 'photo-1549465220-1a8b9238cd48', description: 'A lovely little collection of artisan treats, candlelight and everyday indulgences.', color: 'Warm ivory' },
  { id: 'forever-teddy', name: 'Forever & Always Bear', category: 'Teddy Bears', price: 48, rating: 5, tag: 'Customer favourite', image: 'photo-1559454403-b8fb88521f11', description: 'An impossibly soft companion, ready for a very big hug and a forever place on the bed.', color: 'Honey brown' },
  { id: 'sweet-notes', name: 'Sweet Notes Chocolate Box', category: 'Chocolates', price: 36, rating: 4.7, tag: 'Made with love', image: 'photo-1548907040-4d42cfc78f1e', description: 'A beautiful box of silky, small-batch chocolates for the person with the sweetest taste.', color: 'Cocoa' },
  { id: 'golden-hour', name: 'Golden Hour Necklace', category: 'Jewellery', price: 74, rating: 4.9, tag: 'Just arrived', image: 'photo-1611652022419-a9419f74343d', description: 'A delicate gold-plated everyday necklace that catches the light just right.', color: 'Gold' },
  { id: 'soft-sunday', name: 'Soft Sunday Eau de Parfum', category: 'Perfumes', price: 88, rating: 4.8, tag: 'A little luxury', image: 'photo-1541643600914-78b084683601', description: 'Fresh bergamot and soft musk come together in a comforting scent.', color: 'Clear' },
  { id: 'timeless', name: 'The Timeless Watch', category: 'Watches', price: 115, rating: 4.9, tag: 'For keeps', image: 'photo-1524805444758-089113d48a6d', description: 'A considered, classic timepiece made for all the moments still to come.', color: 'Sand' },
  { id: 'wildflower', name: 'Wildflower Wishes', category: 'Flowers', price: 58, rating: 4.8, tag: 'Seasonal', image: 'photo-1525310072745-f49212b5ac6d', description: 'A joyful, loose bouquet of seasonal blooms in natural beauty.', color: 'Mixed' },
  { id: 'birthday-magic', name: 'Birthday Magic Set', category: 'Birthday Gifts', price: 54, rating: 4.9, tag: 'Celebration ready', image: 'photo-1530103862676-de8c9debad1d', description: 'A little bundle of birthday joy, beautifully wrapped and ready to make their day.', color: 'Pastel mix' },
  { id: 'love-letter', name: 'Love Letter Hamper', category: 'Anniversary Gifts', price: 104, rating: 5, tag: 'Made for two', image: 'photo-1518199266791-5375a83190b7', description: 'A romantic collection of keepsakes and treats for celebrating your favourite person.', color: 'Rose' },
  { id: 'bright-future', name: 'Bright Future Gift Set', category: 'Graduation Gifts', price: 62, rating: 4.8, tag: 'Big things ahead', image: 'photo-1523580494863-6f3031224c94', description: 'A thoughtful little send-off for a graduate ready to take on something wonderful.', color: 'Blue' },
  { id: 'just-because', name: 'Just Because Flowers', category: 'Personalised Gifts', price: 52, rating: 4.9, tag: 'No reason needed', image: 'photo-1508610048659-a06b669e3321', description: 'A bunch of beautiful blooms, because the best surprises need no special occasion.', color: 'Seasonal' }
];

const catalog = [
  {
    name: 'Flowers',
    images: ['photo-1490750967868-88aa4486c946', 'photo-1525310072745-f49212b5ac6d', 'photo-1508610048659-a06b669e3321', 'photo-1494625927555-6ec4433b1571'],
    description: 'Freshly arranged by hand, these blooms bring a little colour and joy to their day.',
    gifts: [
      ['Coral Sunset Bouquet', 64, 'Coral'], ['Garden Party Tulips', 46, 'Pastel mix'], ['Blush Peony Bunch', 78, 'Blush pink'],
      ['Meadow Daisy Posy', 39, 'White and yellow'], ['White Lily Stem Set', 62, 'Ivory'], ['Wildflower Morning Jar', 44, 'Mixed'],
      ['Soft Peach Roses', 71, 'Peach'], ['Sunny Day Sunflowers', 48, 'Sunshine yellow'], ['Orchid Keepsake Planter', 82, 'Violet'],
      ['Lavender Field Bunch', 43, 'Lavender'], ['Pink Ranunculus Wrap', 59, 'Rose pink'], ['Seasonal Market Bunch', 52, 'Seasonal'],
      ['Everlasting Dried Blooms', 55, 'Natural']
    ]
  },
  {
    name: 'Gift Hampers',
    images: ['photo-1549465220-1a8b9238cd48', 'photo-1513475382585-d06e58bcb0e0', 'photo-1511795409834-ef04bbd61622', 'photo-1515003197210-e0cd7184f8b5'],
    description: 'This thoughtfully packed collection brings together little treats for an easy, lovely surprise.',
    gifts: [
      ['Sunday Brunch Hamper', 86, 'Warm ivory'], ['Cozy Night In Basket', 94, 'Cocoa'], ['Tea Time Treasures', 68, 'Sage'],
      ['The Little Indulgence Box', 72, 'Blush'], ['Artisan Pantry Selection', 105, 'Natural'], ['Coffee Lover Crate', 79, 'Coffee brown'],
      ['Movie Night Treats', 58, 'Midnight blue'], ['Self Care Sunday Hamper', 88, 'Lavender'], ['Welcome Home Basket', 92, 'Cream'],
      ['Picnic for Two Kit', 112, 'Garden green'], ['Sweet and Savoury Mix', 64, 'Honey'], ['New Parent Nibbles Box', 83, 'Soft yellow'],
      ['Book Lover Gift Basket', 76, 'Oatmeal'], ['Fireside Snack Box', 69, 'Autumn']
    ]
  },
  {
    name: 'Teddy Bears',
    images: ['photo-1559454403-b8fb88521f11', 'photo-1535572290543-960a8046f5af', 'photo-1562040506-a9b9b9351b8f'],
    description: 'Soft, huggable, and ready to become a keepsake they will want to hold on to.',
    gifts: [
      ['Honey Hug Bear', 42, 'Honey brown'], ['Pocket Sized Pal', 28, 'Caramel'], ['Cloud Soft Bunny', 36, 'Cream'],
      ['Sleepytime Teddy', 45, 'Toffee'], ['Little Star Bear', 39, 'Oatmeal'], ['Big Cuddle Bear', 68, 'Chestnut'],
      ['Rose Ribbon Bear', 44, 'Rose pink'], ['Storytime Panda', 38, 'Black and white'], ['Tiny Birthday Bear', 32, 'Pastel'],
      ['Adventure Cub', 41, 'Golden brown'], ['Blush Heart Bear', 46, 'Blush pink'], ['Woodland Fox Plush', 40, 'Rust'],
      ['Gentle Giant Teddy', 92, 'Cocoa'], ['First Hug Keepsake Bear', 52, 'Ivory']
    ]
  },
  {
    name: 'Chocolates',
    images: ['photo-1548907040-4d42cfc78f1e', 'photo-1606313564200-e75d5e30476c', 'photo-1481391319762-47dff72954d9'],
    description: 'Made for sharing (or keeping), this chocolate treat adds a little sweetness to their day.',
    gifts: [
      ['Sea Salt Caramel Truffles', 32, 'Cocoa'], ['Velvet Praline Collection', 44, 'Dark chocolate'], ['Chocolate Dipped Berries', 38, 'Berry red'],
      ['Hazelnut Crunch Box', 29, 'Hazelnut'], ['Midnight Cocoa Selection', 42, 'Dark cocoa'], ['Pistachio Dream Squares', 36, 'Pistachio'],
      ['Honeycomb Chocolate Slab', 24, 'Honey'], ['Milk Chocolate Love Hearts', 26, 'Milk chocolate'], ['Raspberry Ganache Bites', 34, 'Raspberry'],
      ['Caramel and Sea Salt Bar Set', 28, 'Caramel'], ['The Chocolate Tasting Flight', 48, 'Mixed cocoa'], ['Orange Zest Truffle Tin', 31, 'Citrus'],
      ['Brownie Bites Gift Tin', 30, 'Brownie'], ['Luxury Cocoa Night Box', 52, 'Cocoa']
    ]
  },
  {
    name: 'Jewellery',
    images: ['photo-1611652022419-a9419f74343d', 'photo-1617038220319-276d3cfab638', 'photo-1611591437281-460bfbe1220a'],
    description: 'A thoughtful little keepsake designed to add a special touch to everyday moments.',
    gifts: [
      ['Dainty Pearl Studs', 46, 'Pearl'], ['Sunbeam Pendant', 68, 'Gold'], ['Everyday Hoops', 52, 'Gold'],
      ['Birthstone Charm Bracelet', 64, 'Rose gold'], ['Silver Moon Necklace', 72, 'Silver'], ['Tiny Heart Studs', 38, 'Rose gold'],
      ['Golden Hour Cuff', 58, 'Gold'], ['Initial Disc Necklace', 76, 'Gold'], ['Freshwater Pearl Bracelet', 62, 'Pearl'],
      ['Celestial Layering Chain', 81, 'Gold'], ['Little Clover Pendant', 55, 'Gold'], ['Daisy Chain Anklet', 42, 'Silver'],
      ['Classic Signet Ring', 69, 'Gold'], ['Starlight Drop Earrings', 73, 'Silver']
    ]
  },
  {
    name: 'Perfumes',
    images: ['photo-1541643600914-78b084683601', 'photo-1594035910387-fea47794261f', 'photo-1592945403244-b3fbafd7f539'],
    description: 'A lovely fragrance gift with a memorable scent for the moments they want to keep close.',
    gifts: [
      ['Citrus Garden Eau de Parfum', 82, 'Clear'], ['Rosewater Veil', 76, 'Blush'], ['Amber Evening Scent', 96, 'Amber'],
      ['Fresh Linen Cologne', 68, 'Ivory'], ['Wild Fig Fragrance', 88, 'Green'], ['Vanilla Cloud Perfume', 74, 'Cream'],
      ['Coastal Breeze Eau de Toilette', 72, 'Sea glass'], ['Soft Petals Scent Set', 98, 'Rose'], ['Cedar and Citrus Cologne', 84, 'Wood'],
      ['Moonflower Travel Duo', 56, 'Violet'], ['Golden Hour Perfume Oil', 48, 'Gold'], ['Jasmine Daydream', 92, 'White'],
      ['Everyday Discovery Set', 64, 'Mixed'], ['Midnight Bloom Eau de Parfum', 105, 'Plum']
    ]
  },
  {
    name: 'Watches',
    images: ['photo-1524805444758-089113d48a6d', 'photo-1523170335258-f5ed11844a49', 'photo-1524592094714-0f0654e20314'],
    description: 'A considered timepiece that makes a lasting gift for the milestones still to come.',
    gifts: [
      ['Minimalist Rose Gold Watch', 128, 'Rose gold'], ['Classic Leather Strap Watch', 118, 'Tan'], ['Petite Pearl Face Watch', 142, 'Pearl'],
      ['Midnight Dial Watch', 136, 'Midnight blue'], ['Everyday Silver Mesh Watch', 124, 'Silver'], ['Vintage-Inspired Gold Watch', 148, 'Gold'],
      ['Two Tone Keepsake Watch', 154, 'Gold and silver'], ['Soft Blush Dial Watch', 132, 'Blush'], ['Weekend Canvas Watch', 88, 'Olive'],
      ['Heritage Brown Leather Watch', 144, 'Chestnut'], ['Modern Square Face Watch', 138, 'Black'], ['Slimline Mesh Watch', 116, 'Champagne'],
      ['Sunrise Dial Watch', 126, 'Coral'], ['Timeless Gift Watch Set', 165, 'Sand']
    ]
  },
  {
    name: 'Birthday Gifts',
    images: ['photo-1530103862676-de8c9debad1d', 'photo-1531058020387-3be344556be6', 'photo-1513151233558-d860c5398176'],
    description: 'A celebration-ready surprise to help make their birthday feel extra special.',
    gifts: [
      ['Birthday Candle and Cake Set', 42, 'Pastel'], ['Confetti Celebration Box', 58, 'Rainbow'], ['Party Day Gift Hamper', 84, 'Bright mix'],
      ['Birthday Bloom Bundle', 65, 'Mixed flowers'], ['Make a Wish Keepsake', 48, 'Gold'], ['Birthday Breakfast Box', 56, 'Sunny yellow'],
      ['Cheers to You Gift Set', 72, 'Champagne'], ['Little Birthday Treat Box', 36, 'Pastel'], ['Birthday Star Gift Bag', 44, 'Blue'],
      ['Celebration Balloon Bundle', 52, 'Bright mix'], ['Birthday Pamper Kit', 78, 'Blush'], ['Sweet Birthday Chocolate Tin', 34, 'Cocoa'],
      ['Birthday Tea Party Set', 62, 'Rose'], ['The Big Day Gift Box', 96, 'Mixed']
    ]
  },
  {
    name: 'Anniversary Gifts',
    images: ['photo-1518199266791-5375a83190b7', 'photo-1516589178581-6cd7833ae3b2', 'photo-1511895426328-dc8714191300'],
    description: 'A keepsake for celebrating the story, little rituals, and favourite moments you share.',
    gifts: [
      ['Our Story Photo Album', 58, 'Rose'], ['Date Night at Home Box', 86, 'Warm ivory'], ['Two Hearts Keepsake Frame', 64, 'Gold'],
      ['Couples Cocoa and Blanket Set', 92, 'Cocoa'], ['Anniversary Rose Dome', 78, 'Red'], ['Love Notes Memory Jar', 42, 'Blush'],
      ['Together Time Gift Hamper', 112, 'Champagne'], ['Engraved Promise Bracelet', 88, 'Silver'], ['Romantic Dinner Set for Two', 98, 'Cream'],
      ['The Year We Met Print', 54, 'Natural'], ['Forever Kindred Candles', 46, 'Rose'], ['Anniversary Sweetheart Box', 62, 'Red'],
      ['A Dozen Reasons Keepsake', 38, 'Pink'], ['Milestone Moments Gift Set', 124, 'Gold']
    ]
  },
  {
    name: 'Graduation Gifts',
    images: ['photo-1523580494863-6f3031224c94', 'photo-1523050854058-8df90110c9f1', 'photo-1523240795612-9a054b0db644'],
    description: 'A thoughtful little send-off to celebrate everything they have achieved and what comes next.',
    gifts: [
      ['The Next Chapter Journal Set', 48, 'Navy'], ['Bright Future Desk Kit', 62, 'Blue'], ['Grad Day Celebration Box', 72, 'Gold'],
      ['New Beginnings Planner', 44, 'Sage'], ['First Job Confidence Kit', 68, 'Charcoal'], ['Proud of You Flower Box', 56, 'Mixed'],
      ['Graduate Coffee Starter Set', 58, 'Coffee brown'], ['Big Dreams Book Bundle', 52, 'Blue'], ['Cap and Tassel Keepsake Frame', 46, 'Black'],
      ['Career Launch Organizer', 64, 'Navy'], ['You Did It Chocolate Set', 36, 'Gold'], ['Graduate Self Care Hamper', 82, 'Lavender'],
      ['Next Adventure Travel Pouch', 42, 'Olive'], ['Achievement Star Necklace', 74, 'Silver']
    ]
  },
  {
    name: 'Personalised Gifts',
    images: ['photo-1508610048659-a06b669e3321', 'photo-1513475382585-d06e58bcb0e0', 'photo-1549465220-1a8b9238cd48'],
    description: 'A personal touch turns this thoughtful gift into something made just for them.',
    gifts: [
      ['Custom Name Keepsake Box', 68, 'Natural'], ['Personalised Message Mug', 32, 'Cream'], ['Initial Charm Bracelet', 58, 'Gold'],
      ['Custom Photo Desk Calendar', 42, 'Mixed'], ['Monogram Travel Pouch', 48, 'Blush'], ['Engraved Wooden Memory Box', 74, 'Oak'],
      ['Personalised Flower Wrap', 56, 'Seasonal'], ['Name and Date Print', 38, 'Black and white'], ['Custom Recipe Notebook', 34, 'Sage'],
      ['Personalised Birthstone Necklace', 82, 'Gold'], ['Photo Story Gift Album', 62, 'Rose'], ['Custom Initial Candle', 36, 'Ivory'],
      ['Made for You Gift Hamper', 96, 'Natural'], ['Personalised Milestone Frame', 54, 'White']
    ]
  }
];

const tags = ['Thoughtful pick', 'Just arrived', 'Made with love', 'A little luxury', 'Customer favourite'];
const slug = value => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

for (const group of catalog) {
  const existing = products.filter(product => product.category === group.name).length;
  const needed = Math.max(0, 15 - existing);
  group.gifts.slice(0, needed).forEach(([name, price, color], index) => {
    products.push({
      id: 'gift-' + slug(name),
      name,
      category: group.name,
      price,
      rating: Number((4.7 + (index % 4) * 0.1).toFixed(1)),
      tag: tags[index % tags.length],
      image: group.images[index % group.images.length],
      description: group.description + ' ' + name + ' is ready to make their day feel special.',
      color
    });
  });
}

export const categories = catalog.map(group => ({ name: group.name, image: group.images[0] }));

export const imageUrl = (id, width = 800) =>
  'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=' + width + '&q=85';

