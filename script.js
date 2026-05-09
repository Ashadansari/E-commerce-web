
// ==================== DATA ====================
const categories = [
  {id:'electronics',name:'Electronics',icon:'💻',count:24},
  {id:'fashion',name:'Fashion',icon:'👗',count:38},
  {id:'home',name:'Home & Living',icon:'🏠',count:22},
  {id:'beauty',name:'Beauty',icon:'💄',count:19},
  {id:'sports',name:'Sports',icon:'⚽',count:17},
  {id:'books',name:'Books',icon:'📚',count:31},
];

const catColors = {
  electronics:'#dbeafe',fashion:'#fce7f3',home:'#dcfce7',
  beauty:'#fef9c3',sports:'#ffedd5',books:'#ede9fe'
};

const products = [
  // Electronics
  {id:1,name:'Premium Wireless Headphones',price:129.99,orig:179.99,cat:'electronics',icon:'🎧',badge:'New',rating:4.8,reviews:342,desc:'Studio-quality sound with active noise cancellation, 30-hour battery life, and premium leather ear cushions.'},
  {id:2,name:'Smart 4K LED TV 55"',price:449.99,orig:599.99,cat:'electronics',icon:'📺',badge:'Sale',rating:4.7,reviews:218,desc:'Crisp 4K resolution, HDR10 support, built-in streaming apps, and a sleek borderless design.'},
  {id:3,name:'Fitness Smartwatch Pro',price:159.99,orig:199.99,cat:'electronics',icon:'⌚',badge:'Popular',rating:4.6,reviews:512,desc:'Track heart rate, sleep, workouts, and more. Water-resistant with a 7-day battery.'},
  {id:4,name:'Bluetooth Mechanical Keyboard',price:89.99,orig:null,cat:'electronics',icon:'⌨️',badge:null,rating:4.5,reviews:187,desc:'Tactile mechanical switches, RGB backlight, wireless + wired dual mode.'},
  {id:5,name:'Portable Bluetooth Speaker',price:59.99,orig:79.99,cat:'electronics',icon:'🔊',badge:'Sale',rating:4.4,reviews:423,desc:'360° surround sound, IPX7 waterproof, 24-hour playtime, built-in mic.'},
  {id:6,name:'Wireless Charging Pad',price:29.99,orig:null,cat:'electronics',icon:'🔋',badge:'New',rating:4.3,reviews:296,desc:'15W fast wireless charging for all Qi-compatible devices. Slim & lightweight design.'},
  // Fashion
  {id:7,name:'Designer Leather Jacket',price:249.99,orig:349.99,cat:'fashion',icon:'🧥',badge:'Best',rating:4.9,reviews:156,desc:'Genuine Italian leather, YKK zippers, quilted lining. Timeless style that lasts a lifetime.'},
  {id:8,name:'Premium Cotton T-Shirt',price:34.99,orig:null,cat:'fashion',icon:'👕',badge:null,rating:4.5,reviews:682,desc:'100% Pima cotton, preshrunk, available in 12 colors. Perfectly fitted cut.'},
  {id:9,name:'Classic Denim Jeans',price:79.99,orig:99.99,cat:'fashion',icon:'👖',badge:'Sale',rating:4.6,reviews:411,desc:'Slim-fit stretch denim, reinforced stitching, five-pocket design. Everyday essential.'},
  {id:10,name:'Floral Summer Dress',price:54.99,orig:null,cat:'fashion',icon:'👗',badge:'New',rating:4.7,reviews:234,desc:'Lightweight chiffon fabric, adjustable straps, perfect for warm weather occasions.'},
  {id:11,name:'Casual Sneakers',price:89.99,orig:119.99,cat:'fashion',icon:'👟',badge:'Popular',rating:4.8,reviews:528,desc:'Memory foam insole, breathable mesh upper, non-slip rubber sole.'},
  {id:12,name:'Leather Wallet',price:44.99,orig:null,cat:'fashion',icon:'👜',badge:null,rating:4.4,reviews:319,desc:'Full-grain leather, RFID blocking, 8 card slots, slim profile.'},
  // Home & Living
  {id:13,name:'Minimalist Desk Lamp',price:59.99,orig:null,cat:'home',icon:'💡',badge:null,rating:4.6,reviews:203,desc:'5 color temperatures, touch dimmer, USB-C charging port, adjustable arm.'},
  {id:14,name:'Scented Soy Candle Set',price:39.99,orig:null,cat:'home',icon:'🕯️',badge:'New',rating:4.8,reviews:477,desc:'Set of 4 premium soy wax candles in relaxing scents: lavender, vanilla, citrus, and eucalyptus.'},
  {id:15,name:'Bamboo Cutting Board',price:34.99,orig:44.99,cat:'home',icon:'🪵',badge:'Sale',rating:4.5,reviews:344,desc:'Organic bamboo, juice groove, non-slip feet. Dishwasher-safe and eco-friendly.'},
  {id:16,name:'Coffee Pour-Over Set',price:49.99,orig:null,cat:'home',icon:'☕',badge:'Popular',rating:4.9,reviews:289,desc:'Borosilicate glass carafe, stainless steel filter, perfect for coffee enthusiasts.'},
  {id:17,name:'Throw Blanket – Sherpa',price:44.99,orig:59.99,cat:'home',icon:'🛋️',badge:'Sale',rating:4.7,reviews:512,desc:'Ultra-soft double-sided sherpa fleece. Machine washable, 150×200cm.'},
  {id:18,name:'Ceramic Plant Pots Set',price:29.99,orig:null,cat:'home',icon:'🪴',badge:'New',rating:4.4,reviews:178,desc:'Set of 3 modern ceramic pots with drainage holes and bamboo trays included.'},
  // Beauty
  {id:19,name:'Organic Skincare Set',price:89.99,orig:119.99,cat:'beauty',icon:'🧴',badge:'Popular',rating:4.8,reviews:641,desc:'10-step Korean skincare routine. All-natural ingredients, cruelty-free & vegan certified.'},
  {id:20,name:'Hydrating Face Serum',price:49.99,orig:null,cat:'beauty',icon:'✨',badge:'New',rating:4.7,reviews:389,desc:'2% Hyaluronic Acid + Vitamin C complex. Deep hydration and brightening in one bottle.'},
  {id:21,name:'Luxury Perfume – Noir',price:79.99,orig:99.99,cat:'beauty',icon:'🌸',badge:'Best',rating:4.9,reviews:223,desc:'Woody floral fragrance with notes of sandalwood, jasmine, and black pepper. 75ml EDP.'},
  {id:22,name:'Professional Makeup Brush Set',price:54.99,orig:null,cat:'beauty',icon:'💅',badge:null,rating:4.5,reviews:455,desc:'24-piece cruelty-free brush set with premium synthetic bristles and a travel pouch.'},
  // Sports
  {id:23,name:'Yoga Mat Premium',price:49.99,orig:69.99,cat:'sports',icon:'🧘',badge:'Sale',rating:4.7,reviews:634,desc:'6mm thick non-slip natural rubber. Alignment lines, carry strap included, eco-certified.'},
  {id:24,name:'Resistance Bands Set',price:24.99,orig:null,cat:'sports',icon:'💪',badge:'New',rating:4.6,reviews:812,desc:'Set of 5 latex-free bands in varying resistance levels. Ideal for home workouts.'},
  {id:25,name:'Running Water Bottle',price:19.99,orig:null,cat:'sports',icon:'🚰',badge:null,rating:4.4,reviews:567,desc:'800ml BPA-free Tritan plastic, leak-proof lid, one-handed drinking button.'},
  {id:26,name:'Football – Pro Match',price:39.99,orig:54.99,cat:'sports',icon:'⚽',badge:'Sale',rating:4.8,reviews:234,desc:'FIFA-approved match ball, thermally bonded panels, butyl bladder for air retention.'},
  // Books
  {id:27,name:'The Midnight Library',price:14.99,orig:null,cat:'books',icon:'📖',badge:'Best',rating:4.9,reviews:2341,desc:'A dazzling novel about all the lives we could have lived. Matt Haig\'s masterpiece.'},
  {id:28,name:'Atomic Habits',price:16.99,orig:null,cat:'books',icon:'📗',badge:'Popular',rating:4.9,reviews:5621,desc:'James Clear\'s proven framework for building good habits and breaking bad ones.'},
  {id:29,name:'Dune – Frank Herbert',price:12.99,orig:null,cat:'books',icon:'📕',badge:null,rating:4.8,reviews:1876,desc:'The greatest science fiction novel ever written. A sweeping tale of politics and prophecy.'},
  {id:30,name:'Python Crash Course',price:29.99,orig:39.99,cat:'books',icon:'💻',badge:'Sale',rating:4.7,reviews:1234,desc:'A hands-on, project-based introduction to programming for absolute beginners.'},
];

// ==================== STATE ====================
let cart = [];
let currentPage = 'home';
let detailProductId = null;
let filteredProducts = [...products];
let isLoggedIn = false;
let currentUser = null;

// ==================== NAVIGATION ====================
function navigate(page, productId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const map = {home:'Home',shop:'Shop',categories:'Categories',about:'About',contact:'Contact'};
  document.querySelectorAll('.nav-link').forEach(l => { if(l.textContent===map[page]) l.classList.add('active'); });
  currentPage = page;
  window.scrollTo(0,0);
  if(page==='shop') renderShopProducts();
  if(page==='categories') renderAllCategories();
  if(page==='product' && productId) renderProductDetail(productId);
}

// ==================== RENDER HELPERS ====================
function renderProductCard(p, mini=false) {
  const badgeClass = {New:'badge-new',Sale:'badge-sale',Popular:'badge-popular',Best:'badge-best'}[p.badge]||'badge-new';
  return `<div class="product-card" onclick="navigate('product',${p.id})">
    <div class="p-thumb" style="background:${catColors[p.cat]||'#f9fafb'}">
      <span style="font-size:${mini?'3rem':'4rem'}">${p.icon}</span>
      ${p.badge?`<span class="p-badge ${badgeClass}">${p.badge}</span>`:''}
    </div>
    <div class="p-body">
      <div class="p-cat">${categories.find(c=>c.id===p.cat)?.name||p.cat}</div>
      <div class="p-name">${p.name}</div>
      <div class="p-rating"><span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}</span><span class="rating-count">(${p.reviews})</span></div>
      <div class="p-price-row">
        <span class="p-price">$${p.price.toFixed(2)}</span>
        ${p.orig?`<span class="p-original">$${p.orig.toFixed(2)}</span>`:''}
      </div>
      <div class="p-actions" onclick="event.stopPropagation()">
        <button class="add-btn" onclick="addToCart(${p.id})">🛒 Add to Cart</button>
        <button class="wish-btn" onclick="toggleWish(this)">♡</button>
      </div>
    </div>
  </div>`;
}

function renderCategoryCard(c) {
  return `<div class="category-card" onclick="navigate('categories');showCatProducts('${c.id}')">
    <div class="cat-thumb" style="background:${catColors[c.id]}">${c.icon}</div>
    <div class="cat-body"><div class="cat-name">${c.name}</div><div class="cat-count">${c.count} products</div></div>
  </div>`;
}

// ==================== HOME ====================
function renderHome() {
  document.getElementById('homeCats').innerHTML = categories.map(renderCategoryCard).join('');
  const featured = products.filter(p=>p.badge==='Popular'||p.badge==='Best').slice(0,4);
  document.getElementById('homeFeatured').innerHTML = featured.map(p=>renderProductCard(p)).join('');
  const newArr = products.filter(p=>p.badge==='New').slice(0,4);
  document.getElementById('homeNew').innerHTML = newArr.map(p=>renderProductCard(p)).join('');
}

// ==================== SHOP ====================
function renderShopProducts() {
  const html = filteredProducts.map(p=>renderProductCard(p)).join('');
  document.getElementById('shopProducts').innerHTML = html || '<p style="color:var(--gray);padding:2rem">No products match your filters.</p>';
  document.getElementById('productCount').textContent = `Showing ${filteredProducts.length} products`;
}

function filterProducts() {
  const cats = [];
  if(document.getElementById('fElec').checked) cats.push('electronics');
  if(document.getElementById('fFash').checked) cats.push('fashion');
  if(document.getElementById('fHome').checked) cats.push('home');
  if(document.getElementById('fBeau').checked) cats.push('beauty');
  if(document.getElementById('fSport').checked) cats.push('sports');
  if(document.getElementById('fBook').checked) cats.push('books');
  const allChecked = document.getElementById('fAll').checked;
  const maxPrice = parseInt(document.getElementById('priceRange').value);
  const minRating = parseFloat(document.querySelector('input[name="rating"]:checked').value);
  filteredProducts = products.filter(p => {
    const catOk = allChecked || cats.length===0 || cats.includes(p.cat);
    const priceOk = p.price <= maxPrice;
    const ratingOk = p.rating >= minRating;
    return catOk && priceOk && ratingOk;
  });
  renderShopProducts();
}

function updatePrice() {
  document.getElementById('priceVal').textContent = document.getElementById('priceRange').value;
  filterProducts();
}

function sortProducts(val) {
  if(val==='price-low') filteredProducts.sort((a,b)=>a.price-b.price);
  else if(val==='price-high') filteredProducts.sort((a,b)=>b.price-a.price);
  else if(val==='rating') filteredProducts.sort((a,b)=>b.rating-a.rating);
  else if(val==='newest') filteredProducts.sort((a,b)=>b.id-a.id);
  else filteredProducts = [...products];
  renderShopProducts();
}

function resetFilters() {
  document.getElementById('fAll').checked=true;
  ['fElec','fFash','fHome','fBeau','fSport','fBook'].forEach(id=>document.getElementById(id).checked=false);
  document.getElementById('priceRange').value=500;
  document.getElementById('priceVal').textContent='500';
  document.querySelector('input[name="rating"][value="0"]').checked=true;
  filteredProducts=[...products];
  renderShopProducts();
}

// ==================== CATEGORIES ====================
function renderAllCategories() {
  document.getElementById('allCats').innerHTML = categories.map(renderCategoryCard).join('');
  document.getElementById('catProducts').innerHTML='';
}

function showCatProducts(catId) {
  const cat = categories.find(c=>c.id===catId);
  const catProds = products.filter(p=>p.cat===catId);
  document.getElementById('catProducts').innerHTML=`
    <div class="section-head"><h2 class="section-title">${cat.icon} ${cat.name}</h2></div>
    <div class="products">${catProds.map(p=>renderProductCard(p)).join('')}</div>`;
  document.getElementById('catProducts').scrollIntoView({behavior:'smooth',block:'start'});
}

// ==================== PRODUCT DETAIL ====================
function renderProductDetail(id) {
  detailProductId = id;
  const p = products.find(x=>x.id===id);
  if(!p) return;
  const cat = categories.find(c=>c.id===p.cat);
  document.getElementById('breadcrumb').innerHTML=`
    <span onclick="navigate('home')">Home</span><span class="breadcrumb-sep">›</span>
    <span onclick="navigate('categories');showCatProducts('${p.cat}')">${cat?.name}</span><span class="breadcrumb-sep">›</span>
    <span style="color:var(--dark)">${p.name}</span>`;
  document.getElementById('productDetail').innerHTML=`
    <div class="pd-thumb" style="background:${catColors[p.cat]}">${p.icon}</div>
    <div class="pd-info">
      <div class="p-cat">${cat?.name}</div>
      <h1>${p.name}</h1>
      <div class="p-rating"><span class="stars" style="font-size:1rem">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}</span> <strong>${p.rating}</strong> <span class="rating-count">(${p.reviews} reviews)</span></div>
      <div class="pd-price-row"><span class="pd-price">$${p.price.toFixed(2)}</span>${p.orig?`<span class="pd-original">$${p.orig.toFixed(2)}</span><span style="background:#fef9c3;color:#92400e;font-size:.78rem;padding:.2rem .6rem;border-radius:999px;font-weight:600">${Math.round((1-p.price/p.orig)*100)}% OFF</span>`:''}</div>
      <p class="pd-desc">${p.desc}</p>
      <div class="pd-meta">
        <div><span>Category:</span><strong>${cat?.name}</strong></div>
        <div><span>Availability:</span><strong style="color:var(--secondary)">✓ In Stock</strong></div>
        <div><span>SKU:</span><strong>ASH-${String(p.id).padStart(4,'0')}</strong></div>
      </div>
      <div class="qty-row">
        <label>Qty:</label>
        <div class="qty-control">
          <button onclick="changeQty(-1)">−</button>
          <span id="detailQty">1</span>
          <button onclick="changeQty(1)">+</button>
        </div>
      </div>
      <div class="pd-btns">
        <button class="btn btn-primary" onclick="addToCartDetail(${p.id})">🛒 Add to Cart</button>
        <button class="btn btn-sec" onclick="showToast('❤️ Added to wishlist!')">♡ Wishlist</button>
      </div>
    </div>`;
  const related = products.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,4);
  document.getElementById('relatedProducts').innerHTML = related.map(x=>renderProductCard(x,true)).join('');
}

let detailQty = 1;
function changeQty(d) {
  detailQty = Math.max(1, detailQty+d);
  const el = document.getElementById('detailQty');
  if(el) el.textContent=detailQty;
}
function addToCartDetail(id) {
  if (!checkLoginForCart()) return;
  
  for(let i=0;i<detailQty;i++) addToCart(id);
  detailQty=1;
  const el = document.getElementById('detailQty');
  if(el) el.textContent=1;
}

// ==================== SEARCH ====================
function handleSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  if(!q) return;
  filteredProducts = products.filter(p=>p.name.toLowerCase().includes(q)||categories.find(c=>c.id===p.cat)?.name.toLowerCase().includes(q));
  navigate('shop');
}

// ==================== CART ====================
function addToCart(id) {
  if (!checkLoginForCart()) return;
  
  const p = products.find(x=>x.id===id);
  if(!p) return;
  const ex = cart.find(i=>i.id===id);
  if(ex) ex.qty++;
  else cart.push({...p,qty:1});
  updateCartUI();
  showToast('✅ '+p.name+' added to cart!');
}

function removeFromCart(id) {
  cart = cart.filter(i=>i.id!==id);
  updateCartUI();
}

function changeItemQty(id, delta) {
  const item = cart.find(i=>i.id===id);
  if(!item) return;
  item.qty = Math.max(0, item.qty+delta);
  if(item.qty===0) cart=cart.filter(i=>i.id!==id);
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const count = cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cartCount').textContent=count;
  document.getElementById('cartTitle').textContent=`Your Cart (${count})`;
  document.getElementById('cartTotal').textContent='$'+total.toFixed(2);
  const body = document.getElementById('cartBody');
  if(cart.length===0){
    body.innerHTML=`<div class="empty-cart"><div class="ei">🛒</div><p style="font-weight:600;margin-bottom:.3rem">Your cart is empty</p><p style="font-size:.85rem">Start shopping to add items!</p></div>`;
    return;
  }
  body.innerHTML=cart.map(item=>`
    <div class="cart-item">
      <div class="ci-thumb" style="background:${catColors[item.cat]}">${item.icon}</div>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-price">$${item.price.toFixed(2)}</div>
        <div class="ci-controls">
          <div class="qty-btn" onclick="changeItemQty(${item.id},-1)">−</div>
          <span class="qty-val">${item.qty}</span>
          <div class="qty-btn" onclick="changeItemQty(${item.id},1)">+</div>
          <span class="rm-btn" onclick="removeFromCart(${item.id})">Remove</span>
        </div>
      </div>
    </div>`).join('');
}

// ==================== CART TOGGLE ====================
document.getElementById('cartBtn').onclick=()=>{
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('overlay').classList.add('active');
};
document.getElementById('closeCart').onclick=closeCartSidebar;
document.getElementById('closeLogin').onclick=closeLoginModal;
document.getElementById('overlay').onclick=function(){
  closeCartSidebar();
  closeLoginModal();
};
function closeCartSidebar(){
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

// ==================== LOGIN ====================
function showLoginModal() {
  const modal = document.getElementById('loginModal');
  const loginForm = document.getElementById('loginForm');
  const userInfo = document.getElementById('userInfo');
  
  if (isLoggedIn) {
    loginForm.style.display = 'none';
    userInfo.style.display = 'block';
    document.getElementById('userName').textContent = `Welcome, ${currentUser.name}!`;
    document.getElementById('userEmail').textContent = currentUser.email;
  } else {
    loginForm.style.display = 'block';
    userInfo.style.display = 'none';
  }
  
  modal.classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeLoginModal() {
  document.getElementById('loginModal').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}

function login() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  
  if (!email || !password) {
    showToast('❌ Please fill in all fields');
    return;
  }
  
  // Simple demo login - accept any email/password
  isLoggedIn = true;
  currentUser = {
    name: email.split('@')[0],
    email: email
  };
  
  // Save to localStorage
  localStorage.setItem('ashadmart_user', JSON.stringify(currentUser));
  
  updateLoginUI();
  closeLoginModal();
  showToast('✅ Welcome back!');
  
  // Clear form
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
}

function logout() {
  isLoggedIn = false;
  currentUser = null;
  localStorage.removeItem('ashadmart_user');
  updateLoginUI();
  closeLoginModal();
  showToast('👋 Logged out successfully');
}

function updateLoginUI() {
  const loginBtn = document.getElementById('loginBtn');
  if (isLoggedIn) {
    loginBtn.textContent = '👤 ' + currentUser.name;
  } else {
    loginBtn.textContent = '👤';
  }
}

function checkLoginForCart() {
  if (!isLoggedIn) {
    showLoginModal();
    showToast('🔒 Please login to add items to cart');
    return false;
  }
  return true;
}

// ==================== WISHLIST ====================
function toggleWish(btn){
  btn.classList.toggle('active');
  btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
}

// ==================== TOAST ====================
function showToast(msg) {
  const t=document.getElementById('toast');
  t.textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}

// ==================== INIT ====================
function initApp() {
  // Load login state
  const savedUser = localStorage.getItem('ashadmart_user');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    isLoggedIn = true;
  }
  
  renderHome();
  updateCartUI();
  updateLoginUI();
  navigate('home');
}

// Initialize app
initApp();

