const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ===== FULL MENU (same structure as JS for backend access) =====
const menuData = [
  {
    id: 'cakes-world',
    name: 'Cakes World',
    items: [
      { name: 'Lotus', price: 2590 },
      { name: 'Belgium Malt', price: 2480 },
      { name: 'Ferrero Rocher', price: 2480 },
      { name: 'Nutella', price: 2750 },
      { name: 'Red Velvet', price: 2150 },
      { name: 'Kit Kat', price: 2350 },
      { name: 'Fudge', price: 2350 },
      { name: 'Chocolate Mousse', price: 2350 },
      { name: 'NY Cheese Cake', price: 3800 },
      { name: 'Pine Apple', price: 2350 },
      { name: 'Black Forest', price: 2350 },
      { name: 'Cadbury', price: 2350 }
    ]
  },
  {
    id: 'dream-cakes',
    name: 'Dream Cakes',
    note: 'Available in Small (S), Medium (M), Large (L)',
    items: [
      { name: 'Dream Cake S', price: 690 },
      { name: 'Dream Cake M', price: 1250 },
      { name: 'Dream Cake L', price: 2480 }
    ]
  },
  {
    id: 'special-cakes',
    name: 'Cakoo Special Cakes',
    items: [
      { name: 'Pistachio', price: 2850 },
      { name: 'Mud Cake', price: 2350 },
      { name: 'Lava Cake', price: 2350 },
      { name: 'Tiramisu', price: 2750 },
      { name: 'Salted Caramel', price: 2480 }
    ]
  },
  {
    id: 'donuts',
    name: 'Donuts',
    note: 'Rs 190 each',
    items: [
      { name: 'Chocolate', price: 190 }, { name: 'Cotton Candy', price: 190 },
      { name: 'Ferrero Rocher', price: 190 }, { name: 'Kit Kat', price: 190 },
      { name: 'Lotus', price: 190 }, { name: 'Matt Chocolate', price: 190 },
      { name: 'Nutella', price: 190 }, { name: 'Oreo', price: 190 },
      { name: 'Glazzy', price: 190 }, { name: 'Strawberry', price: 190 }
    ]
  },
  {
    id: 'brownies',
    name: 'Brownies',
    note: 'Rs 230 each',
    items: [
      { name: 'Chocolate', price: 230 }, { name: 'Nutella', price: 230 },
      { name: 'Fudge', price: 230 }, { name: 'Belgian Malt', price: 230 },
      { name: 'Walnut', price: 230 }, { name: 'Special', price: 230 },
      { name: 'Cadbury', price: 230 }
    ]
  },
  {
    id: 'other-bakes',
    name: 'Other Bakes',
    items: [
      { name: 'Macarons (pack of 6)', price: 350 },
      { name: 'Cookies', price: 250 }, { name: 'Muffins', price: 290 },
      { name: 'Cup Cakes', price: 230 }, { name: 'Banana Bread', price: 150 },
      { name: 'Carrot Bread', price: 150 }
    ]
  },
  {
    id: 'sundaes',
    name: 'Sundaes',
    note: 'Rs 370 each',
    items: [
      { name: 'Red Velvet Sundae', price: 370 },
      { name: 'Three Milk Sundae', price: 370 },
      { name: 'Nutella Sundae', price: 370 },
      { name: 'Lotus Sundae', price: 370 },
      { name: 'Pistachio Sundae', price: 370 }
    ]
  }
];

// ===== API ROUTES =====

// GET /api/menu — returns full categorized menu
app.get('/api/menu', (req, res) => {
  res.json({ success: true, data: menuData });
});

// GET /api/menu/:category — returns a single category
app.get('/api/menu/:category', (req, res) => {
  const cat = menuData.find(c => c.id === req.params.category);
  if (!cat) return res.status(404).json({ success: false, error: 'Category not found' });
  res.json({ success: true, data: cat });
});

// POST /api/orders — accepts an order inquiry, returns WhatsApp deep link
app.post('/api/orders', (req, res) => {
  const { name, branch, items, message } = req.body;
  if (!items || !items.length) {
    return res.status(400).json({ success: false, error: 'Order must include at least one item' });
  }
  const orderSummary = items.map(i => `${i.name}${i.qty ? ` x${i.qty}` : ''}`).join(', ');
  const waMsg = `Hi Cakoo!${name ? ` My name is ${name}.` : ''} I'd like to order from ${branch || 'Attock'}: ${orderSummary}${message ? `. ${message}` : ''}`;
  const waLink = `https://wa.me/923299927777?text=${encodeURIComponent(waMsg)}`;
  res.json({ success: true, waLink, message: 'Order inquiry ready. Tap the link to send via WhatsApp.' });
});

// ===== SERVE PAGES =====
const pages = ['index.html', 'menu.html', 'gallery.html', 'about.html', 'contact.html'];
pages.forEach(page => {
  app.get(`/${page === 'index.html' ? '' : page.replace('.html', '')}`, (req, res) => {
    res.sendFile(path.join(__dirname, page));
  });
});

app.listen(PORT, () => {
  console.log(`Cakoo Bakery server running at http://localhost:${PORT}`);
});
