// ==================== PRICE DATA ====================
const priceData = [
  // TRANSPORT
  {
    category: "transport",
    catLabel: "Transport",
    catIcon: "fa-bus",
    catNote: "Fares vary by route & time of day",
    items: [
      { name: "Matatu — town ride", price: "Ksh 50–100", note: "Within CBD" },
      {
        name: "Matatu — cross-town",
        price: "Ksh 100–200",
        note: "e.g. Westlands to Eastlands",
      },
      { name: "Boda boda — short ride", price: "Ksh 50–150", note: "1–3 km" },
      { name: "Boda boda — medium ride", price: "Ksh 150–300", note: "3–8 km" },
      {
        name: "Uber/Bolt — short ride",
        price: "Ksh 200–400",
        note: "Within town",
      },
      {
        name: "Uber/Bolt — airport",
        price: "Ksh 800–1,500",
        note: "JKIA ↔ CBD",
      },
      {
        name: "SGR Nairobi–Mombasa",
        price: "Ksh 1,000–3,000",
        note: "Economy–First class",
      },
      {
        name: "Long-distance bus",
        price: "Ksh 800–2,500",
        note: "e.g. NBO–KSM, NBO–MSA",
      },
      {
        name: "Tuk-tuk (Coast)",
        price: "Ksh 100–300",
        note: "Short trips in Mombasa",
      },
      {
        name: "Fuel — Petrol (per litre)",
        price: "Ksh 190–220",
        note: "Prices regulated monthly",
      },
      {
        name: "Fuel — Diesel (per litre)",
        price: "Ksh 175–200",
        note: "Prices regulated monthly",
      },
    ],
  },
  // FOOD & DRINKS
  {
    category: "food",
    catLabel: "Food & Drinks",
    catIcon: "fa-utensils",
    catNote: "Street food & restaurant prices",
    items: [
      { name: "Chapati", price: "Ksh 20–40", note: "Street vendor" },
      { name: "Tea (chai)", price: "Ksh 20–50", note: "Roadside / kibanda" },
      {
        name: "Ugali + sukuma + stew",
        price: "Ksh 80–150",
        note: "Standard plate",
      },
      { name: "Nyama choma plate", price: "Ksh 300–600", note: "With sides" },
      { name: "Pilau plate", price: "Ksh 100–200", note: "Standard portion" },
      { name: "Samosa", price: "Ksh 20–50", note: "Meat or veggie" },
      { name: "Mandazi (2 pcs)", price: "Ksh 20–30", note: "Street vendor" },
      {
        name: "Coffee (café)",
        price: "Ksh 150–350",
        note: "Java / Artcaffe level",
      },
      { name: "Soda 500ml", price: "Ksh 60–100", note: "Retail / restaurant" },
      { name: "Water 500ml", price: "Ksh 30–50", note: "Bottled" },
      {
        name: "Beer (bar)",
        price: "Ksh 200–350",
        note: "Tusker, White Cap etc.",
      },
      {
        name: "Smokie + kachumbari",
        price: "Ksh 30–50",
        note: "Street vendor",
      },
      {
        name: "Full breakfast",
        price: "Ksh 200–500",
        note: "Eggs, sausage, toast, tea",
      },
      {
        name: "Pizza (medium)",
        price: "Ksh 600–1,200",
        note: "Delivery / restaurant",
      },
      {
        name: "Burger",
        price: "Ksh 300–700",
        note: "Fast food / casual dining",
      },
    ],
  },
  // GROCERIES
  {
    category: "groceries",
    catLabel: "Groceries & Market",
    catIcon: "fa-carrot",
    catNote: "Supermarket & open-air market prices",
    items: [
      { name: "Unga (2kg)", price: "Ksh 150–200", note: "Maize flour" },
      { name: "Rice (1kg)", price: "Ksh 120–200", note: "Pishori / local" },
      { name: "Sugar (1kg)", price: "Ksh 160–200", note: "" },
      { name: "Cooking oil (1L)", price: "Ksh 250–380", note: "Vegetable" },
      { name: "Milk (500ml)", price: "Ksh 55–70", note: "Fresh / pasteurised" },
      { name: "Bread (loaf)", price: "Ksh 55–70", note: "Standard 400g" },
      { name: "Eggs (tray — 30)", price: "Ksh 350–480", note: "Farm / retail" },
      { name: "Tomatoes (1kg)", price: "Ksh 60–120", note: "Market price" },
      { name: "Onions (1kg)", price: "Ksh 60–100", note: "Market price" },
      { name: "Potatoes (1kg)", price: "Ksh 50–100", note: "Market price" },
      { name: "Chicken (1kg)", price: "Ksh 400–600", note: "Whole / fresh" },
      { name: "Beef (1kg)", price: "Ksh 500–700", note: "Butchery" },
      { name: "Avocado (1 pc)", price: "Ksh 10–30", note: "Season dependent" },
      { name: "Bananas (bunch)", price: "Ksh 50–100", note: "5–8 pcs" },
    ],
  },
  // HOUSING
  {
    category: "housing",
    catLabel: "Housing & Rent",
    catIcon: "fa-home",
    catNote: "Monthly rent in major towns",
    items: [
      {
        name: "Bedsitter (town)",
        price: "Ksh 6k–12k",
        note: "CBD / Eastlands",
      },
      {
        name: "Single room",
        price: "Ksh 3k–6k",
        note: "Pipeline, Kayole etc.",
      },
      { name: "1 Bedroom", price: "Ksh 10k–18k", note: "Moderate area" },
      {
        name: "1 Bedroom (upscale)",
        price: "Ksh 25k–50k",
        note: "Kilimani, Westlands",
      },
      { name: "2 Bedroom", price: "Ksh 15k–30k", note: "Moderate area" },
      { name: "Student hostel", price: "Ksh 4k–10k", note: "Near university" },
      { name: "Airbnb (per night)", price: "Ksh 2k–6k", note: "Studio / 1BR" },
      {
        name: "Security deposit",
        price: "1–2 months",
        note: "Standard requirement",
      },
    ],
  },
  // SERVICES
  {
    category: "services",
    catLabel: "Services",
    catIcon: "fa-wrench",
    catNote: "Common service charges",
    items: [
      { name: "Barber (men's cut)", price: "Ksh 100–300", note: "Kinyozi" },
      { name: "Salon (basic wash & set)", price: "Ksh 200–500", note: "" },
      {
        name: "Salon (braids)",
        price: "Ksh 500–3,000",
        note: "Depends on style",
      },
      {
        name: "Phone screen repair",
        price: "Ksh 1,500–5,000",
        note: "Depends on model",
      },
      { name: "Laundry (per kg)", price: "Ksh 50–100", note: "Laundromat" },
      { name: "Dry cleaning (suit)", price: "Ksh 300–600", note: "" },
      {
        name: "Cobbler (shoe repair)",
        price: "Ksh 100–300",
        note: "Basic fix",
      },
      { name: "Tailor (trouser alteration)", price: "Ksh 150–400", note: "" },
      { name: "Car wash", price: "Ksh 300–600", note: "Sedan / saloon" },
      {
        name: "Passport photos (set)",
        price: "Ksh 200–400",
        note: "4–6 photos",
      },
    ],
  },
  // UTILITIES
  {
    category: "utilities",
    catLabel: "Utilities & Telecom",
    catIcon: "fa-bolt",
    catNote: "Monthly estimates",
    items: [
      {
        name: "Electricity (token)",
        price: "Ksh 1k–3k",
        note: "Monthly average",
      },
      { name: "Water bill", price: "Ksh 500–1,500", note: "Nairobi Water" },
      {
        name: "WiFi (home)",
        price: "Ksh 2,500–5,000",
        note: "Safaricom, Zuku etc.",
      },
      {
        name: "Safaricom data (1GB)",
        price: "Ksh 50–250",
        note: "Bundle dependent",
      },
      { name: "Daily data bundle (250MB)", price: "Ksh 20–50", note: "" },
      { name: "Airtime top-up", price: "Ksh 10+", note: "Any amount" },
      { name: "DSTV (Access)", price: "Ksh 1,200", note: "Monthly" },
      {
        name: "Showmax subscription",
        price: "Ksh 300–1,050",
        note: "Mobile–Pro",
      },
      {
        name: "M-Pesa send (to 1k)",
        price: "Free–Ksh 7",
        note: "Same network",
      },
      {
        name: "M-Pesa withdraw (ATM)",
        price: "Ksh 34–197",
        note: "Varies by amount",
      },
    ],
  },
  // ENTERTAINMENT
  {
    category: "entertainment",
    catLabel: "Entertainment & Leisure",
    catIcon: "fa-film",
    catNote: "Fun stuff prices",
    items: [
      {
        name: "Cinema ticket",
        price: "Ksh 500–1,000",
        note: "IMAX / Standard",
      },
      { name: "Gym membership", price: "Ksh 2k–5k", note: "Monthly" },
      { name: "Swimming pool", price: "Ksh 200–500", note: "Public / hotel" },
      {
        name: "Game park entry (citizen)",
        price: "Ksh 300–1,000",
        note: "KWS parks",
      },
      { name: "Bowling (per game)", price: "Ksh 300–500", note: "" },
      {
        name: "Night club entry",
        price: "Ksh 500–2,000",
        note: "Varies by event",
      },
      { name: "Pool table (per game)", price: "Ksh 50–100", note: "" },
    ],
  },
  // HEALTH
  {
    category: "health",
    catLabel: "Health & Wellness",
    catIcon: "fa-heart-pulse",
    catNote: "Common medical costs",
    items: [
      {
        name: "Consultation (clinic)",
        price: "Ksh 500–1,500",
        note: "General doctor",
      },
      {
        name: "Consultation (hospital)",
        price: "Ksh 1,500–4,000",
        note: "Specialist",
      },
      { name: "Pharmacy — Panadol", price: "Ksh 30–50", note: "Pack" },
      { name: "Dental checkup", price: "Ksh 1,000–3,000", note: "" },
      { name: "Eye test", price: "Ksh 500–1,500", note: "Optician" },
      {
        name: "NHIF (employed)",
        price: "Ksh 1,700",
        note: "Monthly deduction",
      },
      {
        name: "Lab test (blood)",
        price: "Ksh 500–2,000",
        note: "Depends on test",
      },
    ],
  },
  // ELECTRONICS
  {
    category: "electronics",
    catLabel: "Electronics",
    catIcon: "fa-mobile-screen",
    catNote: "Phones, chargers & gadgets",
    items: [
      { name: "Samsung A-Series (Entry)", price: "Ksh 11k–18k", note: "e.g. A06, A07" },
      { name: "Samsung A-Series (Mid)", price: "Ksh 26k–47k", note: "e.g. A17, A36, A57" },
      { name: "Samsung Charger (Original)", price: "Ksh 2,000–3,300", note: "25W - 50W", link: "https://www.samsung.com/ke/" },
      { name: "General Charger", price: "Ksh 600–1,500", note: "Oraimo etc.", link: "https://ke.oraimo.com/" },
      { name: "Earbuds (Budget)", price: "Ksh 1,500–3,000", note: "Oraimo, Anker", link: "https://ke.oraimo.com/" },
      { name: "Earbuds (Premium)", price: "Ksh 11k–20k", note: "Samsung, Apple" },
      { name: "Screen Protector", price: "Ksh 200–500", note: "Glass / Ceramic" },
      { name: "Phone Cover", price: "Ksh 300–800", note: "Silicone / Rugged" },
    ]
  },
  // CONSTRUCTION
  {
    category: "construction",
    catLabel: "Construction",
    catIcon: "fa-trowel-bricks",
    catNote: "Materials prices 2025",
    items: [
      { name: "Cement (50kg)", price: "Ksh 650–750", note: "Simba, Blue Triangle", link: "https://www.simbacement.com/" },
      { name: "River Sand (Lorry 18t)", price: "Ksh 32k–38k", note: "Nairobi area" },
      { name: "Maize Seeds (2kg)", price: "Ksh 420", note: "Govt controlled price", link: "https://www.kenyaseed.com/" }, // Moved to Farming correctly in full file, but placing here for context if section matches
    ]
  },
  // BABY PRODUCTS
  {
    category: "baby",
    catLabel: "Baby Products",
    catIcon: "fa-baby-carriage",
    catNote: "Diapers & functional needs",
    items: [
      { name: "Diapers (Pack ~40pcs)", price: "Ksh 900–1,300", note: "Softcare, Molfix", link: "https://www.jumia.co.ke/diapers/" },
      { name: "Pampers / Huggies", price: "Ksh 1,600–2,000", note: "Premium brands", link: "https://www.carrefour.ke/" },
      { name: "Baby Wipes", price: "Ksh 200–400", note: "Packet" },
      { name: "Formula (NAN/Lactogen)", price: "Ksh 1,600–2,150", note: "400g Tin", link: "https://goodlife.co.ke/" },
    ]
  },
  // FARMING - Re-adding correct section content
  {
    category: "farming",
    catLabel: "Farming Inputs",
    catIcon: "fa-wheat-awn",
    catNote: "Seeds, fertilizer & inputs",
    items: [
      { name: "Fertilizer (DAP 50kg)", price: "Ksh 2,500–3,500", note: "Subsidized vs Retail", link: "https://kilimo.go.ke/" },
      { name: "Maize Seeds (2kg)", price: "Ksh 420", note: "Kenya Seed Co.", link: "https://www.kenyaseed.com/" },
      { name: "Dairy Meal (70kg)", price: "Ksh 2,800–3,500", note: "Unga Farm Care", link: "https://ungagroup.com/" },
    ]
  }
];

// Re-map specifically for existing categories that need links
const transportIndex = priceData.findIndex(c => c.category === 'transport');
if(transportIndex >= 0) {
    const tItems = priceData[transportIndex].items;
    tItems.find(i => i.name.includes("SGR")).link = "https://metickets.krc.co.ke/";
    tItems.find(i => i.name.includes("Uber")).link = "https://www.uber.com/ke/en/";
    tItems.find(i => i.name.includes("Fuel")).link = "https://epra.go.ke/";
}

const utilIndex = priceData.findIndex(c => c.category === 'utilities');
if(utilIndex >= 0) {
    const uItems = priceData[utilIndex].items;
    uItems.find(i => i.name.includes("Electricity")).link = "https://kplc.co.ke/"; // KPLC
    uItems.find(i => i.name.includes("Water")).link = "https://www.nairobiwater.co.ke/"; // Nairobi Water
    uItems.find(i => i.name.includes("Showmax")).link = "https://www.showmax.com/";
    uItems.find(i => i.name.includes("DSTV")).link = "https://www.dstv.com/en-ke";
    uItems.find(i => i.name.includes("Safaricom")).link = "https://www.safaricom.co.ke/";
}

const healthIndex = priceData.findIndex(c => c.category === 'health');
if(healthIndex >= 0) {
    const hItems = priceData[healthIndex].items;
    hItems.find(i => i.name.includes("NHIF")).link = "https://sha.go.ke/"; // SHA/NHIF
}


// ==================== RENDER ====================
const container = document.getElementById("priceContainer");
const filterBar = document.getElementById("filterBar");
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
const resultCount = document.getElementById("resultCount");
const noResults = document.createElement("div");
noResults.className = "no-results";
noResults.innerHTML =
  '<i class="fas fa-search"></i><h3>No items found</h3><p>Try a different search term</p>';

let totalItemCount = 0;

// Build filter tags + sections
priceData.forEach((cat, index) => {
  // Filter tag
  const tag = document.createElement("button");
  tag.className = "filter-tag";
  tag.dataset.cat = cat.category;
  tag.textContent = cat.catLabel;
  filterBar.appendChild(tag);

  // Section
  const section = document.createElement("section");
  section.className = `category-section cat-${cat.category}`;
  section.dataset.cat = cat.category;
  section.style.animationDelay = `${0.1 * index}s`;

  let headerHTML = `
    <div class="category-header">
      <div class="category-icon"><i class="fas ${cat.catIcon}"></i></div>
      <div>
        <h2 class="category-title">${cat.catLabel}</h2>
        <div class="category-subtitle">${cat.catNote}</div>
      </div>
    </div>`;

  let gridHTML = '<div class="price-grid">';
  cat.items.forEach((item) => {
    totalItemCount++;
    
    // Determine Link
    let itemUrl = item.link;
    let linkIcon = '<i class="fas fa-external-link-alt"></i>';
    let linkTitle = "Visit Website";
    
    // If no specific link, generate a Google Search link
    if (!itemUrl) {
        itemUrl = `https://www.google.com/search?q=${encodeURIComponent(item.name + " price Kenya")}`;
        linkIcon = '<i class="fab fa-google"></i>';
        linkTitle = "Search on Google";
    }

    gridHTML += `
      <div class="price-card" data-search="${(item.name + " " + item.note + " " + cat.catLabel).toLowerCase()}">
        <div class="item-info">
          <div class="item-name">
            ${item.name}
            <a href="${itemUrl}" target="_blank" rel="noopener noreferrer" class="item-link" title="${linkTitle}" aria-label="${linkTitle}">
               ${linkIcon}
            </a>
          </div>
          ${item.note ? `<div class="item-note">${item.note}</div>` : ""}
        </div>
        <div class="price-tag">${item.price}</div>
      </div>`;
  });
  gridHTML += "</div>";

  section.innerHTML = headerHTML + gridHTML;
  container.appendChild(section);
});

container.appendChild(noResults);

// Stats
document.getElementById("totalItems").textContent = totalItemCount;
document.getElementById("totalCategories").textContent = priceData.length;

// ==================== FILTER LOGIC ====================
let activeCategory = "all";

filterBar.addEventListener("click", (e) => {
  const tag = e.target.closest(".filter-tag");
  if (!tag) return;

  filterBar
    .querySelectorAll(".filter-tag")
    .forEach((t) => t.classList.remove("active"));
  tag.classList.add("active");
  activeCategory = tag.dataset.cat;
  applyFilters();
});

// ==================== SEARCH LOGIC ====================
searchInput.addEventListener("input", () => {
  searchClear.classList.toggle("show", searchInput.value.length > 0);
  applyFilters();
});

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  searchClear.classList.remove("show");
  applyFilters();
  searchInput.focus();
});

function applyFilters() {
  const query = searchInput.value.toLowerCase().trim();
  const sections = container.querySelectorAll(".category-section");
  let visibleCount = 0;

  sections.forEach((section) => {
    const sectionCat = section.dataset.cat;
    const catMatch = activeCategory === "all" || sectionCat === activeCategory;

    if (!catMatch) {
      section.style.display = "none";
      return;
    }

    const cards = section.querySelectorAll(".price-card");
    let sectionVisible = 0;

    cards.forEach((card) => {
      const text = card.dataset.search;
      const match = !query || text.includes(query);
      card.style.display = match ? "" : "none";
      if (match) {
        sectionVisible++;
        visibleCount++;
      }
    });

    section.style.display = sectionVisible > 0 ? "" : "none";
  });

  const showCount = query.length > 0;
  resultCount.classList.toggle("show", showCount);
  if (showCount) {
    resultCount.textContent = `${visibleCount} item${visibleCount !== 1 ? "s" : ""} found`;
  }

  noResults.classList.toggle("show", visibleCount === 0);
}

// ==================== STICKY SHADOW ====================
const searchSection = document.getElementById("searchSection");
window.addEventListener(
  "scroll",
  () => {
    searchSection.classList.toggle("scrolled", window.scrollY > 200);
  },
  { passive: true },
);

// ==================== SCROLL TO TOP ====================
const scrollTopBtn = document.getElementById("scrollTop");
window.addEventListener(
  "scroll",
  () => {
    scrollTopBtn.classList.toggle("show", window.scrollY > 600);
  },
  { passive: true },
);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==================== SHARE ====================
const siteURL = "https://poe.com";
const shareText =
  "Kenya Quick Prices — Know the real price before you pay! Check everyday costs so you don't get overcharged.";

document.getElementById("shareWA").addEventListener("click", () => {
  window.open(
    `https://wa.me/?text=${encodeURIComponent(shareText + " " + siteURL)}`,
    "_blank",
    "noopener,noreferrer"
  );
});

document.getElementById("shareTW").addEventListener("click", () => {
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(siteURL)}`,
    "_blank",
    "noopener,noreferrer"
  );
});

document.getElementById("copyLink").addEventListener("click", () => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(siteURL)
      .then(() => showToast("Link copied!"));
  }
});

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

// ==================== DARK MODE ====================
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.documentElement.classList.add("dark");
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (event.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
