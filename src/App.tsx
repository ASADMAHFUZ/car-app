import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

import logo from "./assets/logo-figma.png";
import hero from "./assets/hero.jpg";
import profilePhoto from "./assets/profile-photo.png";
import compareIcon from "./assets/compare.svg";
import unreadIcon from "./assets/unread.svg";
import notificationsIcon from "./assets/notifications.svg";
import signalIcon from "./assets/signal.svg";
import wifiIcon from "./assets/wifi.svg";
import batteryIcon from "./assets/battery.svg";
import carIcon from "./assets/icon-car.svg";
import slidersIcon from "./assets/sliders.svg";
import pinIcon from "./assets/pin.svg";
import searchIcon from "./assets/search-icon.svg";
import heartIcon from "./assets/heart.svg";
import calendarIcon from "./assets/calendar.svg";
import mileageIcon from "./assets/mileage.svg";
import homeIcon from "./assets/home.svg";
import searchNavIcon from "./assets/search-nav.svg";
import addIcon from "./assets/add.svg";
import profileIcon from "./assets/profile.svg";

import brandBmw from "./assets/brand-bmw.png";
import brandAudi from "./assets/brand-audi.png";
import brandMercedes from "./assets/brand-mercedes.svg";
import brandToyota from "./assets/brand-toyota.svg";
import brandHonda from "./assets/brand-honda.svg";
import brandFord from "./assets/brand-ford.png";
import brandVw from "./assets/brand-vw.svg";
import brandNissan from "./assets/brand-nissan.svg";

import carBmw from "./assets/car-bmw-m4.jpg";
import carAudi from "./assets/car-audi.jpg";
import carMercedes from "./assets/car-mercedes.jpg";

type BrandName =
  | "BMW"
  | "Audi"
  | "Mercedes"
  | "Toyota"
  | "Honda"
  | "Ford"
  | "Volkswagen"
  | "Nissan";

type Listing = {
  id: string;
  brand: BrandName;
  model: string;
  name: string;
  price: number;
  was: number;
  date: string;
  mileage: string;
  image: string;
  canton: string;
};

const BRANDS: { name: BrandName; src: string; width: number; height: number }[] = [
  { name: "BMW", src: brandBmw, width: 44, height: 31 },
  { name: "Audi", src: brandAudi, width: 44, height: 31 },
  { name: "Mercedes", src: brandMercedes, width: 31, height: 31 },
  { name: "Toyota", src: brandToyota, width: 44, height: 30 },
  { name: "Honda", src: brandHonda, width: 37, height: 30 },
  { name: "Ford", src: brandFord, width: 44, height: 17 },
  { name: "Volkswagen", src: brandVw, width: 31, height: 31 },
  { name: "Nissan", src: brandNissan, width: 36, height: 30 },
];

const MODELS: Record<BrandName, string[]> = {
  BMW: ["M4 Competition xDrive", "330i", "X5"],
  Audi: ["RS e-tron GT", "A6", "Q8"],
  Mercedes: ["AMG C 63 S", "E 220", "GLC 300"],
  Toyota: ["Corolla", "RAV4"],
  Honda: ["Civic", "CR-V"],
  Ford: ["Mustang", "Focus"],
  Volkswagen: ["Golf", "Tiguan"],
  Nissan: ["Qashqai", "Leaf"],
};

const PRICES = [
  { label: "CHF 20,000", value: 20000 },
  { label: "CHF 50,000", value: 50000 },
  { label: "CHF 100,000", value: 100000 },
  { label: "CHF 150,000", value: 150000 },
  { label: "Any price", value: Number.POSITIVE_INFINITY },
];

const CANTONS = [
  { label: "Zürich (ZH)", value: "ZH" },
  { label: "Bern (BE)", value: "BE" },
  { label: "Genève (GE)", value: "GE" },
  { label: "Basel (BS)", value: "BS" },
  { label: "Vaud (VD)", value: "VD" },
  { label: "Luzern (LU)", value: "LU" },
];

const LISTINGS: Listing[] = [
  {
    id: "bmw-m4",
    brand: "BMW",
    model: "M4 Competition xDrive",
    name: "BMW M4 Competition xDrive",
    price: 15000,
    was: 16000,
    date: "02.2020",
    mileage: "82,000 km",
    image: carBmw,
    canton: "ZH",
  },
  {
    id: "audi-rs",
    brand: "Audi",
    model: "RS e-tron GT",
    name: "Audi RS e-tron GT",
    price: 129900,
    was: 139000,
    date: "11.2022",
    mileage: "18,400 km",
    image: carAudi,
    canton: "ZH",
  },
  {
    id: "amg-c63",
    brand: "Mercedes",
    model: "AMG C 63 S",
    name: "Mercedes-AMG C 63 S",
    price: 78500,
    was: 84900,
    date: "09.2021",
    mileage: "24,600 km",
    image: carMercedes,
    canton: "ZH",
  },
];

const DEFAULTS = {
  brand: "all" as const,
  model: "any",
  maxPrice: 50000,
  canton: "ZH",
};

type OpenField = "brand" | "model" | "price" | "canton" | null;
type TabId = "home" | "search" | "plan" | "profile";
type Screen = "home" | "search-hub";

type Destination = {
  id: string;
  title: string;
  subtitle: string;
  tone: "blue" | "violet" | "slate";
  icon: "search" | "sliders" | "people";
};

const DESTINATIONS: Destination[] = [
  {
    id: "simple",
    title: "Simple Search",
    subtitle: "Quick filters and results",
    tone: "blue",
    icon: "search",
  },
  {
    id: "advanced",
    title: "Advanced Search",
    subtitle: "Detailed filters and options",
    tone: "violet",
    icon: "sliders",
  },
  {
    id: "comparisons",
    title: "Comparisons",
    subtitle: "Side-by-side vehicle review",
    tone: "slate",
    icon: "people",
  },
  {
    id: "dealers",
    title: "Vehicle Dealers",
    subtitle: "Search the in area",
    tone: "blue",
    icon: "search",
  },
];

function money(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}

function IconChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M12 4.5L6.5 10 12 15.5"
        stroke="#0f172a"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M7 4.5L11.5 9 7 13.5"
        stroke="#94a3b8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DestinationGlyph({ icon }: { icon: Destination["icon"] }) {
  if (icon === "sliders") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="6" cy="5" r="1.5" fill="currentColor" />
        <circle cx="12" cy="9" r="1.5" fill="currentColor" />
        <circle cx="8" cy="13" r="1.5" fill="currentColor" />
      </svg>
    );
  }
  if (icon === "people") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="6.5" cy="6" r="2.3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="7" r="2" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M2.5 15c.7-2.1 2.4-3.2 4-3.2s3.3 1.1 4 3.2M10.5 15c.5-1.5 1.6-2.3 3-2.3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function App() {
  const [brand, setBrand] = useState<string>(DEFAULTS.brand);
  const [model, setModel] = useState(DEFAULTS.model);
  const [maxPrice, setMaxPrice] = useState(DEFAULTS.maxPrice);
  const [canton, setCanton] = useState(DEFAULTS.canton);
  const [searched, setSearched] = useState(false);
  const [open, setOpen] = useState<OpenField>(null);
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [tab, setTab] = useState<TabId>("home");
  const [screen, setScreen] = useState<Screen>("home");
  const [hubQuery, setHubQuery] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointer(event: PointerEvent) {
      if (!cardRef.current?.contains(event.target as Node)) setOpen(null);
    }
    window.addEventListener("pointerdown", onPointer);
    return () => window.removeEventListener("pointerdown", onPointer);
  }, []);

  const modelOptions = brand === "all" ? Object.values(MODELS).flat() : MODELS[brand as BrandName];

  const priceLabel = PRICES.find((item) => item.value === maxPrice)?.label ?? "CHF 50,000";
  const cantonLabel = CANTONS.find((item) => item.value === canton)?.label ?? "Zürich (ZH)";

  const visible = useMemo(() => {
    return LISTINGS.filter((car) => {
      if (brand !== "all" && car.brand !== brand) return false;
      if (!searched) return true;
      if (model !== "any" && car.model !== model) return false;
      if (car.price > maxPrice) return false;
      if (car.canton !== canton) return false;
      return true;
    });
  }, [brand, canton, maxPrice, model, searched]);

  function chooseBrand(next: string) {
    setBrand(next);
    setModel("any");
    setOpen(null);
  }

  function resetFilters() {
    setBrand(DEFAULTS.brand);
    setModel(DEFAULTS.model);
    setMaxPrice(DEFAULTS.maxPrice);
    setCanton(DEFAULTS.canton);
    setSearched(false);
    setOpen(null);
  }

  function runSearch() {
    setSearched(true);
    setOpen(null);
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const filteredDestinations = useMemo(() => {
    const needle = hubQuery.trim().toLowerCase();
    if (!needle) return DESTINATIONS;
    return DESTINATIONS.filter(
      (item) =>
        item.title.toLowerCase().includes(needle) || item.subtitle.toLowerCase().includes(needle),
    );
  }, [hubQuery]);

  function goHome() {
    setTab("home");
    setScreen("home");
    setHubQuery("");
    setOpen(null);
  }

  function openSearchHub() {
    setTab("search");
    setScreen("search-hub");
    setOpen(null);
  }

  const onHomeTab = screen === "home" && tab === "home";

  return (
    <div className="stage">
      <div className="phone">
        <header className="status">
          <p className="time">09:41</p>
          <div className="status-icons">
            <img src={signalIcon} width={20} height={12} alt="" />
            <img src={wifiIcon} width={17} height={13} alt="" />
            <img src={batteryIcon} width={27} height={13} alt="" />
          </div>
        </header>

        {screen === "home" && (
          <div className="header">
            <img className="logo" src={logo} alt="AutoPlaza.ch" />
            <div className="header-actions">
              <button className="icon-btn" type="button" aria-label="Compare">
                <img className="glyph" src={compareIcon} width={16} height={16} alt="" />
                <img className="unread" src={unreadIcon} width={10} height={10} alt="" />
              </button>
              <button type="button" aria-label="Notifications">
                <img src={notificationsIcon} width={36} height={36} alt="" />
              </button>
              <img className="avatar" src={profilePhoto} width={36} height={36} alt="Profile" />
            </div>
          </div>
        )}

        <main className={screen === "search-hub" ? "scroll scroll-search-hub" : "scroll"}>
          {screen === "search-hub" ? (
            <div className="search-hub">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Back to home" onClick={goHome}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title">Search</h1>
              </div>

              <label className="hub-search">
                <img src={searchNavIcon} width={16} height={16} alt="" />
                <input
                  type="search"
                  value={hubQuery}
                  onChange={(event) => setHubQuery(event.target.value)}
                  placeholder="Search brand, model, keyword..."
                  aria-label="Search brand, model, keyword"
                />
              </label>

              <p className="hub-section-label">Search destinations</p>

              <div className="hub-destinations">
                {filteredDestinations.map((item) => (
                  <button key={item.id} className="hub-card" type="button">
                    <span className={`hub-icon hub-icon-${item.tone}`}>
                      <DestinationGlyph icon={item.icon} />
                    </span>
                    <span className="hub-card-copy">
                      <span className="hub-card-title">{item.title}</span>
                      <span className="hub-card-sub">{item.subtitle}</span>
                    </span>
                    <IconChevronRight />
                  </button>
                ))}
                {filteredDestinations.length === 0 && (
                  <p className="hub-empty">No matching destinations</p>
                )}
              </div>
            </div>
          ) : (
          <div className="home">
            <section className="hero-wrap" aria-label="Featured">
              <div className="hero">
                <img src={hero} alt="Dein Traumauto wartet auf dich!" />
                <div className="hero-shade" />
              </div>
            </section>

            <section className="search-wrap" aria-label="Vehicle search">
              <div className="search-card" ref={cardRef}>
                <div className="search-head">
                  <h2>VEHICLE SEARCH</h2>
                  <button className="reset" type="button" onClick={resetFilters}>
                    Reset Filters
                  </button>
                </div>

                <div className="filter-row">
                  <div className="field-wrap">
                    <button
                      className="field"
                      type="button"
                      aria-expanded={open === "brand"}
                      onClick={() => setOpen(open === "brand" ? null : "brand")}
                    >
                      <img src={carIcon} width={12} height={12} alt="" />
                      <span className="field-copy">
                        <span className="field-label">Brand</span>
                        <span className="field-value">{brand === "all" ? "All Brands" : brand}</span>
                      </span>
                    </button>
                    {open === "brand" && (
                      <div className="menu" role="listbox" aria-label="Brand">
                        <button type="button" role="option" aria-selected={brand === "all"} onClick={() => chooseBrand("all")}>
                          All Brands
                        </button>
                        {BRANDS.map((item) => (
                          <button
                            key={item.name}
                            type="button"
                            role="option"
                            aria-selected={brand === item.name}
                            onClick={() => chooseBrand(item.name)}
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="field-wrap">
                    <button
                      className="field"
                      type="button"
                      aria-expanded={open === "model"}
                      onClick={() => setOpen(open === "model" ? null : "model")}
                    >
                      <img src={slidersIcon} width={12} height={12} alt="" />
                      <span className="field-copy">
                        <span className="field-label">Model</span>
                        <span className="field-value">{model === "any" ? "Any Model" : model}</span>
                      </span>
                    </button>
                    {open === "model" && (
                      <div className="menu" role="listbox" aria-label="Model">
                        <button
                          type="button"
                          role="option"
                          aria-selected={model === "any"}
                          onClick={() => {
                            setModel("any");
                            setOpen(null);
                          }}
                        >
                          Any Model
                        </button>
                        {modelOptions.map((item) => (
                          <button
                            key={item}
                            type="button"
                            role="option"
                            aria-selected={model === item}
                            onClick={() => {
                              setModel(item);
                              setOpen(null);
                            }}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="filter-row">
                  <div className="field-wrap">
                    <button
                      className="field"
                      type="button"
                      aria-expanded={open === "price"}
                      onClick={() => setOpen(open === "price" ? null : "price")}
                    >
                      <span className="franc">₣</span>
                      <span className="field-copy">
                        <span className="field-label">Max Price</span>
                        <span className="field-value">{priceLabel}</span>
                      </span>
                    </button>
                    {open === "price" && (
                      <div className="menu" role="listbox" aria-label="Max price">
                        {PRICES.map((item) => (
                          <button
                            key={item.label}
                            type="button"
                            role="option"
                            aria-selected={maxPrice === item.value}
                            onClick={() => {
                              setMaxPrice(item.value);
                              setOpen(null);
                            }}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="field-wrap">
                    <button
                      className="field"
                      type="button"
                      aria-expanded={open === "canton"}
                      onClick={() => setOpen(open === "canton" ? null : "canton")}
                    >
                      <img src={pinIcon} width={9} height={12} alt="" />
                      <span className="field-copy">
                        <span className="field-label">Canton</span>
                        <span className="field-value">{cantonLabel}</span>
                      </span>
                    </button>
                    {open === "canton" && (
                      <div className="menu" role="listbox" aria-label="Canton">
                        {CANTONS.map((item) => (
                          <button
                            key={item.value}
                            type="button"
                            role="option"
                            aria-selected={canton === item.value}
                            onClick={() => {
                              setCanton(item.value);
                              setOpen(null);
                            }}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <button className="search-btn" type="button" onClick={runSearch}>
                  <img src={searchIcon} width={14} height={14} alt="" />
                  Search 24,820 Listings
                </button>
              </div>
            </section>

            <section className="brands" aria-label="Popular brands">
              <div className="section-title">
                <h2>Popular Brands</h2>
              </div>
              <div className="brand-scroller">
                {BRANDS.map((item) => (
                  <button
                    key={item.name}
                    className="brand"
                    type="button"
                    aria-pressed={brand === item.name}
                    onClick={() => chooseBrand(brand === item.name ? "all" : item.name)}
                  >
                    <span className="brand-art">
                      <img src={item.src} width={item.width} height={item.height} alt="" />
                    </span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="cars" aria-label="Popular cars" ref={listRef}>
              <div className="cars-head">
                <div className="cars-heading">
                  <h2>Popular Cars in Switzerland</h2>
                  <p>Top current listings from dealers</p>
                </div>
                <button className="view-all" type="button" onClick={resetFilters}>
                  View All
                </button>
              </div>
              <div className="list">
                {visible.map((car) => (
                  <article className="card" key={car.id}>
                    <div className="photo">
                      <img src={car.image} alt="" />
                      <button
                        className="fav"
                        type="button"
                        aria-pressed={Boolean(saved[car.id])}
                        aria-label={saved[car.id] ? `Remove ${car.name} from saved` : `Save ${car.name}`}
                        onClick={() => setSaved((current) => ({ ...current, [car.id]: !current[car.id] }))}
                      >
                        <img src={heartIcon} width={12} height={12} alt="" />
                      </button>
                    </div>
                    <div className="details">
                      <div>
                        <h3>{car.name}</h3>
                        <p className="price">
                          <span className="price-now">{money(car.price)}</span>
                          <span className="price-sep">/</span>
                          <span className="price-was">{money(car.was)}</span>
                        </p>
                      </div>
                      <div className="meta">
                        <span className="meta-item">
                          <img src={calendarIcon} width={16} height={16} alt="" />
                          {car.date}
                        </span>
                        <span className="meta-item">
                          <img src={mileageIcon} width={16} height={16} alt="" />
                          {car.mileage}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
                {visible.length === 0 && (
                  <p className="empty">No listings match these filters. Reset filters to see every car.</p>
                )}
              </div>
            </section>
          </div>
          )}
        </main>

        {screen === "home" && (
          <nav className="nav" aria-label="Primary">
            <div className="nav-items">
              <button
                className={onHomeTab ? "tab tab-active" : "tab"}
                type="button"
                aria-current={onHomeTab ? "page" : undefined}
                onClick={goHome}
              >
                <span className="tab-icon">
                  <img src={homeIcon} width={16} height={16} alt="" />
                </span>
                <span>Home</span>
              </button>
              <button
                className={tab === "search" ? "tab tab-active" : "tab"}
                type="button"
                onClick={openSearchHub}
              >
                <span className="tab-icon">
                  <img src={searchNavIcon} width={16} height={16} alt="" />
                </span>
                <span>Search</span>
              </button>
              <button className="tab" type="button" onClick={() => setTab("plan")}>
                <span className="tab-icon">
                  <img src={addIcon} width={16} height={16} alt="" />
                </span>
                <span>Plan</span>
              </button>
              <button className="tab" type="button" onClick={() => setTab("profile")}>
                <span className="tab-icon">
                  <img src={profileIcon} width={16} height={16} alt="" />
                </span>
                <span>Profile</span>
              </button>
            </div>
            <div className="home-bar" />
          </nav>
        )}

        {screen === "search-hub" && <div className="home-bar home-bar-standalone" />}
      </div>
    </div>
  );
}
