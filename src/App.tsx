import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type RefObject } from "react";
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
import dealersPromo from "./assets/dealers-promo.webp";
import searchIcon from "./assets/search-icon.svg";
import heartIcon from "./assets/heart.svg";
import heartFavActive from "./assets/heart-fav-active.svg";
import heartFavInactive from "./assets/heart-fav-inactive.svg";
import calendarIcon from "./assets/calendar.svg";
import mileageIcon from "./assets/mileage.svg";
import specMileageIcon from "./assets/spec-mileage.svg";
import specPowerIcon from "./assets/spec-power.svg";
import specFuelIcon from "./assets/spec-fuel.svg";
import specGearboxIcon from "./assets/spec-gearbox.svg";
import specDriveIcon from "./assets/spec-drive.svg";
import specYearIcon from "./assets/spec-year.svg";
import homeNavInactiveIcon from "./assets/home-nav-inactive.svg";
import homeNavActiveIcon from "./assets/home-nav-active.svg";
import searchNavInactiveIcon from "./assets/search-nav-inactive.svg";
import searchNavActiveIcon from "./assets/search-nav-active.svg";
import searchNavIcon from "./assets/search-nav.svg";
import addNavInactiveIcon from "./assets/add-nav-inactive.svg";
import addNavActiveIcon from "./assets/add-nav-active.svg";
import profileNavInactiveIcon from "./assets/profile-nav-inactive.svg";
import profileNavActiveIcon from "./assets/profile-nav-active.svg";
import profileMenuFavourite from "./assets/profile-menu-favourite.svg";
import profileMenuSettings from "./assets/profile-menu-settings.svg";
import profileMenuLanguage from "./assets/profile-menu-language.svg";
import profileMenuChevron from "./assets/profile-menu-chevron.svg";
import profileMenuAbout from "./assets/profile-menu-about.svg";
import profileMenuBlog from "./assets/profile-menu-blog.svg";
import profileMenuContact from "./assets/profile-menu-contact.svg";
import profileMenuTerms from "./assets/profile-menu-terms.svg";
import profileMenuPrivacy from "./assets/profile-menu-privacy.svg";
import profileMenuSignOut from "./assets/profile-menu-signout.svg";
import settingsLockIcon from "./assets/settings-lock.svg";
import settingsEyeIcon from "./assets/settings-eye.svg";
import settingsTrashIcon from "./assets/settings-trash.svg";
import planLayersIcon from "./assets/plan-layers.svg";
import planBenefitIcon from "./assets/plan-benefit.svg";

import brandBmw from "./assets/brand-bmw.png";
import brandAudi from "./assets/brand-audi.png";
import brandMercedes from "./assets/brand-mercedes.svg";
import brandToyota from "./assets/brand-toyota.svg";
import brandHonda from "./assets/brand-honda.svg";
import brandFord from "./assets/brand-ford.png";
import brandVw from "./assets/brand-vw.svg";
import brandNissan from "./assets/brand-nissan.svg";

import carBmwM4 from "./assets/car-bmw-m4.jpg";
import carBmwX5 from "./assets/car-bmw-x5.jpg";
import carBmw330i from "./assets/car-bmw-330i.jpg";
import carBmwX3 from "./assets/car-bmw-x3.jpg";
import carBmwX1 from "./assets/car-bmw-x1.jpg";
import carBmwI4 from "./assets/car-bmw-i4.jpg";
import carBmw520d from "./assets/car-bmw-520d.jpg";
import carBmwM5 from "./assets/car-bmw-m5.jpg";
import carBmwZ4 from "./assets/car-bmw-z4.jpg";
import carBmw218i from "./assets/car-bmw-218i.jpg";
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
  BMW: ["M4 Competition xDrive", "330i", "X5", "X3", "X1", "i4", "520d", "M5 Competition", "Z4", "218i"],
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
    image: carBmwM4,
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
  {
    id: "bmw-x5",
    brand: "BMW",
    model: "X5",
    name: "BMW X5 xDrive40i",
    price: 68900,
    was: 72900,
    date: "05.2021",
    mileage: "41,200 km",
    image: carBmwX5,
    canton: "ZH",
  },
  {
    id: "audi-a6",
    brand: "Audi",
    model: "A6",
    name: "Audi A6 Avant 45 TFSI",
    price: 42900,
    was: 46900,
    date: "08.2020",
    mileage: "56,800 km",
    image: carAudi,
    canton: "BE",
  },
  {
    id: "mb-e220",
    brand: "Mercedes",
    model: "E 220",
    name: "Mercedes-Benz E 220 d",
    price: 38500,
    was: 41900,
    date: "03.2019",
    mileage: "74,300 km",
    image: carMercedes,
    canton: "GE",
  },
  {
    id: "toyota-rav4",
    brand: "Toyota",
    model: "RAV4",
    name: "Toyota RAV4 Hybrid",
    price: 34900,
    was: 37900,
    date: "06.2021",
    mileage: "48,500 km",
    image: carBmwM4,
    canton: "VD",
  },
  {
    id: "vw-golf",
    brand: "Volkswagen",
    model: "Golf",
    name: "Volkswagen Golf GTI",
    price: 28900,
    was: 31500,
    date: "01.2020",
    mileage: "61,000 km",
    image: carAudi,
    canton: "BS",
  },
  {
    id: "honda-crv",
    brand: "Honda",
    model: "CR-V",
    name: "Honda CR-V Hybrid",
    price: 31900,
    was: 34500,
    date: "10.2021",
    mileage: "39,700 km",
    image: carMercedes,
    canton: "LU",
  },
  {
    id: "nissan-leaf",
    brand: "Nissan",
    model: "Leaf",
    name: "Nissan Leaf e+",
    price: 24900,
    was: 27900,
    date: "04.2022",
    mileage: "22,100 km",
    image: carBmwM4,
    canton: "ZH",
  },
  {
    id: "ford-mustang",
    brand: "Ford",
    model: "Mustang",
    name: "Ford Mustang GT",
    price: 45900,
    was: 49900,
    date: "07.2021",
    mileage: "33,400 km",
    image: carMercedes,
    canton: "BE",
  },
  {
    id: "bmw-330i",
    brand: "BMW",
    model: "330i",
    name: "BMW 330i xDrive",
    price: 37900,
    was: 41500,
    date: "12.2020",
    mileage: "52,800 km",
    image: carBmw330i,
    canton: "ZH",
  },
  {
    id: "bmw-x3",
    brand: "BMW",
    model: "X3",
    name: "BMW X3 xDrive30e",
    price: 54900,
    was: 58900,
    date: "08.2022",
    mileage: "28,600 km",
    image: carBmwX3,
    canton: "BE",
  },
  {
    id: "bmw-x1",
    brand: "BMW",
    model: "X1",
    name: "BMW X1 sDrive18i",
    price: 32900,
    was: 35900,
    date: "04.2021",
    mileage: "36,400 km",
    image: carBmwX1,
    canton: "VD",
  },
  {
    id: "bmw-i4",
    brand: "BMW",
    model: "i4",
    name: "BMW i4 eDrive40",
    price: 59900,
    was: 64900,
    date: "01.2023",
    mileage: "12,800 km",
    image: carBmwI4,
    canton: "ZH",
  },
  {
    id: "bmw-520d",
    brand: "BMW",
    model: "520d",
    name: "BMW 520d Touring",
    price: 41900,
    was: 45500,
    date: "06.2019",
    mileage: "91,200 km",
    image: carBmw520d,
    canton: "GE",
  },
  {
    id: "bmw-m5",
    brand: "BMW",
    model: "M5 Competition",
    name: "BMW M5 Competition",
    price: 98900,
    was: 106500,
    date: "03.2022",
    mileage: "19,700 km",
    image: carBmwM5,
    canton: "ZH",
  },
  {
    id: "bmw-z4",
    brand: "BMW",
    model: "Z4",
    name: "BMW Z4 M40i",
    price: 52900,
    was: 56900,
    date: "09.2021",
    mileage: "24,100 km",
    image: carBmwZ4,
    canton: "BS",
  },
  {
    id: "bmw-218i",
    brand: "BMW",
    model: "218i",
    name: "BMW 218i Gran Coupé",
    price: 27900,
    was: 30900,
    date: "11.2020",
    mileage: "47,900 km",
    image: carBmw218i,
    canton: "LU",
  },
  {
    id: "toyota-corolla",
    brand: "Toyota",
    model: "Corolla",
    name: "Toyota Corolla Hybrid",
    price: 22900,
    was: 24900,
    date: "03.2021",
    mileage: "44,200 km",
    image: carAudi,
    canton: "VD",
  },
  {
    id: "honda-civic",
    brand: "Honda",
    model: "Civic",
    name: "Honda Civic Sport",
    price: 26900,
    was: 28900,
    date: "09.2020",
    mileage: "58,100 km",
    image: carMercedes,
    canton: "BS",
  },
  {
    id: "vw-tiguan",
    brand: "Volkswagen",
    model: "Tiguan",
    name: "Volkswagen Tiguan R-Line",
    price: 35900,
    was: 38900,
    date: "02.2021",
    mileage: "47,600 km",
    image: carBmwM4,
    canton: "LU",
  },
  {
    id: "nissan-qashqai",
    brand: "Nissan",
    model: "Qashqai",
    name: "Nissan Qashqai Tekna",
    price: 27900,
    was: 30900,
    date: "05.2020",
    mileage: "63,200 km",
    image: carAudi,
    canton: "GE",
  },
  {
    id: "ford-focus",
    brand: "Ford",
    model: "Focus",
    name: "Ford Focus ST-Line",
    price: 21900,
    was: 24500,
    date: "11.2019",
    mileage: "71,500 km",
    image: carMercedes,
    canton: "ZH",
  },
];

const ALL_LISTING_IDS = LISTINGS.map((car) => car.id);

const DEFAULTS = {
  brand: "all" as const,
  model: "any",
  maxPrice: 50000,
  canton: "ZH",
};

type HeroSlide = {
  id: string;
  image: string;
  alt: string;
  badge?: string;
  title?: string;
  accent?: string;
  subtitle?: string;
  tone?: "image" | "dark";
};

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "dream",
    image: hero,
    alt: "Dein Traumauto wartet auf dich!",
    tone: "image",
  },
  {
    id: "marketplace",
    image: carMercedes,
    alt: "Buy & Sell Cars in Switzerland",
    badge: "Swiss Marketplace",
    title: "Buy & Sell Cars",
    accent: "in Switzerland.",
    subtitle: "Trusted dealers and private sellers nationwide.",
    tone: "dark",
  },
  {
    id: "premium",
    image: carAudi,
    alt: "Premium vehicles across Switzerland",
    badge: "Premium Picks",
    title: "Drive what you love",
    accent: "every day.",
    subtitle: "Fresh verified listings updated daily.",
    tone: "dark",
  },
];

const BODY_TYPES = ["All", "Sedan", "SUV", "Coupe", "Hatchback", "Convertible"];
const CONDITIONS = ["All", "New", "Used"];
const FUELS = ["All", "Petrol", "Diesel", "Hybrid", "Electric"];
const GEARBOXES = ["All", "Automatic", "Manual"];
const DRIVE_TYPES = ["All", "FWD", "RWD", "AWD", "4x4"];
const GEAR_COUNTS = ["All", "4", "5", "6", "7", "8", "9+"];
const POWER_RANGES = ["0 PS – 1500 PS+", "0 – 100 PS", "100 – 200 PS", "200 – 400 PS", "400+ PS"];
const ENGINE_RANGES = ["0 cm³ – 8000 cm³", "0 – 1000 cm³", "1000 – 2000 cm³", "2000 – 3000 cm³", "3000+ cm³"];
const CYLINDER_RANGES = ["1 – 16 cylinders", "3", "4", "6", "8", "12"];
const EV_RANGE_RANGES = ["0 km – 700+ km", "0 – 200 km", "200 – 400 km", "400 – 600 km", "600+ km"];
const BATTERY_CAPACITY_RANGES = ["1 kWh – 100+ kWh", "1 – 40 kWh", "40 – 70 kWh", "70 – 100 kWh", "100+ kWh"];
const CURB_WEIGHT_RANGES = ["0 kg – 7500+ kg", "0 – 1500 kg", "1500 – 2000 kg", "2000 – 2500 kg", "2500+ kg"];
const TOTAL_WEIGHT_RANGES = ["0 kg – 7500+ kg", "0 – 2000 kg", "2000 – 3000 kg", "3000 – 4000 kg", "4000+ kg"];
const TOWING_CAPACITY_RANGES = ["0 kg – 5000+ kg", "0 – 1000 kg", "1000 – 2000 kg", "2000 – 3500 kg", "3500+ kg"];
const YEAR_RANGES = ["1958 - 2025", "2015 - 2025", "2020 - 2025"];
const ADV_YEAR_RANGES = ["1950 – 2026", "2015 – 2026", "2020 – 2026"];
const PRICE_RANGES = ["CHF 0 - 1,000,000+", "CHF 0 - 50,000", "CHF 50,000 - 150,000"];
const MILEAGE_RANGES = ["0 - 800,000+ km", "0 - 50,000 km", "0 - 100,000 km"];
const ADV_MILEAGE_RANGES = ["0 km – 400,000+ km", "0 km – 50,000 km", "0 km – 100,000 km"];
const ACCIDENT_OPTIONS = ["All", "No accident", "Damaged", "Repaired"];
const VEHICLE_CATEGORIES = ["All", "Passenger car", "SUV / Off-road", "Van", "Convertible"];
const SEAT_OPTIONS = ["All", "2", "4", "5", "7+"];
const DOOR_OPTIONS = ["All", "2", "3", "4", "5"];
const CONSUMPTION_RANGES = ["0 l/100 km – 30+ l/100 km", "0 – 5 l/100 km", "0 – 8 l/100 km"];
const CO2_RANGES = ["0 g/km – 560+ g/km", "0 – 100 g/km", "0 – 150 g/km"];
const ENERGY_CLASSES = ["A–G", "A", "B", "C", "D", "E", "F", "G"];
const EURO_STANDARDS = ["Euro 1 – Euro 6", "Euro 6", "Euro 5", "Euro 4"];
const EURO6_STANDARDS = ["6a–6e", "6a", "6b", "6c", "6d", "6e"];
const RADIUS_OPTIONS = ["Max km", "Within 10 km", "Within 25 km", "Within 50 km", "Within 100 km"];
const EQUIPMENT_OPTIONS = [
  "360° camera",
  "ABS",
  "Adaptive Cruise Control",
  "Adaptive cornering lights",
  "Adaptive headlights",
  "Adaptive lighting",
  "Air suspension",
  "Alarm system",
  "Alloy wheels",
  "Ambient lighting",
  "Android Auto",
  "Apple CarPlay",
  "Armrest",
  "Autom. dimming interior mirror",
  "Automatic air conditioning",
  "Auxiliary heating",
  "Bi-xenon headlights",
  "Blind spot assist",
  "Bluetooth",
  "Cargo barrier",
  "CD player",
  "Central locking",
  "Cruise control",
  "DAB radio",
  "Daytime running lights",
  "Digital cockpit",
  "Distance warning system",
  "Electric heated rear seats",
  "Electric seat adjustment",
  "Electric side mirror",
  "Electric tailgate",
  "Electric windows",
  "Emergency brake assist",
  "Emergency call system",
  "Emergency tyre repair kit",
  "ESP",
  "Fatigue warning system",
  "Fog lamp",
  "Four wheel drive",
  "Full Service History",
  "Glare-free high beam headlights",
  "Hands-free kit",
  "Head-up display",
  "Headlight washer system",
  "Heated seats",
  "Heated steering wheel",
  "Heated windshield",
  "High beam assist",
  "Hill-start assist",
  "Immobilizer",
  "Induction charging for smartphones",
  "Integrated music streaming",
  "Isofix",
  "Keyless central locking",
  "Lane change assist",
  "Lane departure warning system",
  "Leather steering wheel",
  "LED daytime running lights",
  "LED headlights",
  "Light sensor",
  "Lumbar support",
  "Manual air conditioning",
  "Massage seats",
  "Multifunction steering wheel",
  "Navigation system",
  "Night view assist",
  "Non-smoker vehicle",
  "On-board computer",
  "Paddle shifters",
  "Panoramic roof",
  "Parking assist system camera",
  "Parking sensors front",
  "Parking sensors rear",
  "Parking sensors",
  "Particulate filter",
  "Passenger seat ISOFIX point",
  "Power Assisted Steering",
  "Rain sensor",
  "Roof rack",
  "Seat ventilation",
  "Ski bag",
  "Sound system",
  "Speed limit control system",
  "Sports package",
  "Sports seats",
  "Sports suspension",
  "Start-stop system",
  "Steel wheels",
  "Summer tyres",
  "Sunroof",
  "Touchscreen",
  "Traction control",
  "Traffic sign recognition",
  "Trailer coupling, detachable",
  "Trailer coupling, fix",
  "Trailer coupling, swiveling",
  "Tuner/radio",
  "TV",
  "Tyre pressure monitoring",
  "USB port",
  "Voice control",
  "Winter package",
  "Winter tyres",
  "WLAN / WiFi hotspot",
  "Xenon headlights",
];
const EXTERIOR_COLORS = [
  { name: "Red", hex: "#E11D48" },
  { name: "Black", hex: "#111827" },
  { name: "Green", hex: "#16A34A" },
  { name: "Silver", hex: "#C0C4CC" },
  { name: "Turquoise", hex: "#14B8A6" },
  { name: "Violet", hex: "#7C3AED" },
  { name: "Beige", hex: "#D6C3A3" },
  { name: "Blue", hex: "#2563EB" },
  { name: "White", hex: "#F8FAFC" },
  { name: "Yellow", hex: "#EAB308" },
  { name: "Anthracite", hex: "#374151" },
  { name: "Gold", hex: "#D4A017" },
  { name: "Brown", hex: "#8B5E3C" },
  { name: "Bordeaux", hex: "#7F1D1D" },
];
type OpenField = "brand" | "model" | "price" | "canton" | null;
type TabId = "home" | "search" | "plan" | "profile";
type Screen =
  | "home"
  | "search-hub"
  | "simple-search"
  | "search-results"
  | "advanced-search"
  | "popular-brands"
  | "vehicle-dealers"
  | "dealer-details"
  | "vehicle-details"
  | "test-drive"
  | "comparisons"
  | "my-profile"
  | "my-favourites"
  | "app-settings"
  | "notifications";
type SimpleSort = "price-asc" | "price-desc";
type SimpleView = "full" | "filters";

type AppNotification = {
  id: string;
  title: string;
  body: string;
  detail: string;
  time: string;
  tone: "blue" | "green" | "amber" | "slate";
  unread: boolean;
};

const INITIAL_NOTIFICATIONS: AppNotification[] = [
  {
    id: "n1",
    title: "Price drop alert",
    body: "BMW M4 Competition xDrive is now $15,000 — $1,000 lower than yesterday.",
    detail:
      "The seller reduced the asking price from $16,000 to $15,000. This listing still matches your saved filters for BMW in Zürich. Open the vehicle card to compare recent market prices or contact the dealer.",
    time: "2 min ago",
    tone: "green",
    unread: true,
  },
  {
    id: "n2",
    title: "New dealer near you",
    body: "Autopark Zürich AG listed 3 new vehicles in your area.",
    detail:
      "Autopark Zürich AG just published 3 new certified listings within 25 km of your saved location. Browse their inventory from Vehicle Dealers or open their profile to call and request a viewing.",
    time: "1 hour ago",
    tone: "blue",
    unread: true,
  },
  {
    id: "n3",
    title: "Saved vehicle update",
    body: "Audi RS e-tron GT still matches your filters. 2 people viewed it today.",
    detail:
      "Your saved Audi RS e-tron GT is getting more attention today. Price and mileage are unchanged. If you are still interested, message the dealer soon to reserve a test drive.",
    time: "Yesterday",
    tone: "amber",
    unread: true,
  },
  {
    id: "n4",
    title: "Comparison reminder",
    body: "You have 4 vehicles selected. Continue your side-by-side review.",
    detail:
      "Your comparison list still includes 4 vehicles. Open Comparisons from Search to review specs side by side, remove cars you no longer need, or jump to a specific vehicle number.",
    time: "Yesterday",
    tone: "slate",
    unread: false,
  },
  {
    id: "n5",
    title: "Dealer message",
    body: "Garage Leman SA replied about Mercedes-AMG C 63 S viewing availability.",
    detail:
      "Garage Leman SA confirmed weekend viewing slots for the Mercedes-AMG C 63 S. Call the dealer from their profile page or reply with your preferred time to schedule a visit.",
    time: "2 days ago",
    tone: "blue",
    unread: false,
  },
  {
    id: "n6",
    title: "Weekly digest",
    body: "10 new listings matched your Simple Search preferences this week.",
    detail:
      "This week we found 10 new vehicles matching your Simple Search preferences for brand, price, and canton. Open Search to review the latest results and save any favourites.",
    time: "3 days ago",
    tone: "slate",
    unread: false,
  },
];

const PROFILE_DEFAULTS = {
  fullName: "Md. Asadujjaman Mahfuz",
  email: "md.asadujjaman04@gmail.com",
  phone: "",
  gender: "",
  birthDate: "",
  address: "",
  city: "",
  zip: "",
  country: "Schweiz",
};

function profileHubDisplayName(fullName: string) {
  const parts = fullName.replace(/^Md\.\s*/i, "").trim().split(/\s+/).filter(Boolean);
  return parts.find((part) => part.length > 3) ?? parts[0] ?? "Guest";
}

const PROFILE_MENU_PRIMARY = [
  { id: "favourites", label: "My Favourite", icon: profileMenuFavourite },
  { id: "settings", label: "App Settings", icon: profileMenuSettings },
  { id: "language", label: "Select Language", icon: profileMenuLanguage, meta: "En" },
] as const;

const PROFILE_MENU_SECONDARY = [
  { id: "about", label: "About US", icon: profileMenuAbout },
  { id: "blog", label: "Blog", icon: profileMenuBlog },
  { id: "contact", label: "Contact", icon: profileMenuContact },
  { id: "terms", label: "Teams & Conditions", icon: profileMenuTerms },
  { id: "privacy", label: "Privacy policy", icon: profileMenuPrivacy },
] as const;

type Destination = {
  id: string;
  title: string;
  subtitle: string;
  tone: "blue" | "violet" | "slate";
  icon: "search" | "sliders" | "people";
};

type Dealer = {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  zipLabel: string;
  verified?: boolean;
  vehicleIds: string[];
};

type CompareVehicle = {
  id: string;
  name: string;
  trim: string;
  price: number;
  image: string;
  title: string;
  brand: string;
  model: string;
  accident: string;
  bodyType: string;
  fuel: string;
  transmission: string;
  performance: string;
  driveType: string;
  engine: string;
  cylinders: string;
  year: string;
  exterior: string;
  interior: string;
  range: string;
  battery: string;
  curbWeight: string;
  totalWeight: string;
  towing: string;
  seats: string;
  doors: string;
  consumption: string;
  co2: string;
  energyClass: string;
};

type CompareField = { key: keyof CompareVehicle; label: string };
type CompareSection = { title: string; fields: CompareField[] };

const PLAN_BENEFITS = [
  {
    title: "No hidden fees",
    copy: "Transparent pricing in Swiss francs (CHF). No automatic renewal for private listings – you decide.",
  },
  {
    title: "Instantly online & visible",
    copy: "Your listing goes live immediately after checkout. Your vehicles will be presented to thousands of Swiss car buyers.",
  },
  {
    title: "Secure Stripe payment",
    copy: "Pay with all common payment methods: credit card, TWINT, Apple Pay or Google Pay with standard bank encryption.",
  },
] as const;

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

const COMPARE_SECTIONS: CompareSection[] = [
  {
    title: "Basic Information",
    fields: [
      { key: "title", label: "Title" },
      { key: "brand", label: "Brand" },
      { key: "model", label: "Model" },
      { key: "accident", label: "Accident vehicle" },
      { key: "bodyType", label: "Body type" },
    ],
  },
  {
    title: "Technical Information",
    fields: [
      { key: "fuel", label: "Fuel type" },
      { key: "transmission", label: "Transmission" },
      { key: "performance", label: "Performance" },
      { key: "driveType", label: "Drive type" },
      { key: "engine", label: "Engine displacement" },
      { key: "cylinders", label: "Cylinders" },
      { key: "year", label: "Year" },
    ],
  },
  {
    title: "Color Information",
    fields: [
      { key: "exterior", label: "Exterior color" },
      { key: "interior", label: "Interior color" },
    ],
  },
  {
    title: "Electric & Hybrid Specific",
    fields: [
      { key: "range", label: "Range" },
      { key: "battery", label: "Battery capacity" },
    ],
  },
  {
    title: "Weight Information",
    fields: [
      { key: "curbWeight", label: "Curb weight" },
      { key: "totalWeight", label: "Total weight" },
      { key: "towing", label: "Towing capacity" },
    ],
  },
  {
    title: "Seats & Doors",
    fields: [
      { key: "seats", label: "Seats" },
      { key: "doors", label: "Doors" },
    ],
  },
  {
    title: "Fuel Consumption",
    fields: [
      { key: "consumption", label: "Consumption" },
      { key: "co2", label: "CO₂ emissions" },
      { key: "energyClass", label: "Energy efficiency class" },
    ],
  },
];

const COMPARE_VEHICLES: CompareVehicle[] = [
  {
    id: "renault-espace",
    name: "Renault Espace",
    trim: "Initiale Paris",
    price: 7800,
    image: carBmwM4,
    title: "Renault Espace Initiale Paris",
    brand: "RENAULT",
    model: "Espace",
    accident: "No accident",
    bodyType: "Bus",
    fuel: "Diesel",
    transmission: "Automatic",
    performance: "173 PS",
    driveType: "FWD",
    engine: "1997 cm³",
    cylinders: "4",
    year: "2011",
    exterior: "Red",
    interior: "Black",
    range: "—",
    battery: "—",
    curbWeight: "1,840 kg",
    totalWeight: "2,605 kg",
    towing: "2,000 kg",
    seats: "7",
    doors: "5",
    consumption: "7.2 l/100 km",
    co2: "189 g/km",
    energyClass: "E",
  },
  {
    id: "mb-v250d",
    name: "Mercedes-Benz V250d",
    trim: "Exclusive",
    price: 48900,
    image: carMercedes,
    title: "Mercedes-Benz V250d Exclusive",
    brand: "MERCEDES-BENZ",
    model: "V-Class",
    accident: "No accident",
    bodyType: "Bus",
    fuel: "Diesel",
    transmission: "Automatic",
    performance: "190 PS",
    driveType: "AWD",
    engine: "2143 cm³",
    cylinders: "4",
    year: "2018",
    exterior: "Black",
    interior: "Beige",
    range: "—",
    battery: "—",
    curbWeight: "2,210 kg",
    totalWeight: "3,100 kg",
    towing: "2,500 kg",
    seats: "7",
    doors: "5",
    consumption: "6.5 l/100 km",
    co2: "171 g/km",
    energyClass: "D",
  },
  {
    id: "citroen-c4",
    name: "Citroën C4",
    trim: "Exclusive",
    price: 2900,
    image: carAudi,
    title: "Citroën C4 Exclusive",
    brand: "CITROEN",
    model: "C4",
    accident: "No accident",
    bodyType: "Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    performance: "120 PS",
    driveType: "FWD",
    engine: "1598 cm³",
    cylinders: "4",
    year: "2009",
    exterior: "Brown",
    interior: "Anthracite",
    range: "—",
    battery: "—",
    curbWeight: "1,350 kg",
    totalWeight: "1,820 kg",
    towing: "1,200 kg",
    seats: "5",
    doors: "5",
    consumption: "8.1 l/100 km",
    co2: "190 g/km",
    energyClass: "F",
  },
  {
    id: "mb-s500",
    name: "Mercedes-Benz S500",
    trim: "V8",
    price: 9900,
    image: carMercedes,
    title: "Mercedes-Benz S500 V8",
    brand: "MERCEDES-BENZ",
    model: "S-Class",
    accident: "No accident",
    bodyType: "Coupe",
    fuel: "Petrol",
    transmission: "Automatic",
    performance: "455 PS",
    driveType: "AWD",
    engine: "5461 cm³",
    cylinders: "8",
    year: "2007",
    exterior: "Black",
    interior: "Black",
    range: "—",
    battery: "—",
    curbWeight: "2,045 kg",
    totalWeight: "2,580 kg",
    towing: "2,100 kg",
    seats: "4",
    doors: "2",
    consumption: "12.4 l/100 km",
    co2: "288 g/km",
    energyClass: "G",
  },
];

const DEALERS: Dealer[] = [
  {
    id: "autopark-zurich",
    name: "Autopark Zürich AG",
    address: "Badenerstrasse 142, 8004 Zürich",
    phone: "0441234567",
    email: "info@autopark-zurich.ch",
    zipLabel: "ZIP: Zürich",
    verified: true,
    vehicleIds: ALL_LISTING_IDS,
  },
  {
    id: "garage-leman",
    name: "Garage Leman SA",
    address: "Route de Lausanne 45, 1202 Genève",
    phone: "0223456789",
    email: "contact@garage-leman.ch",
    zipLabel: "ZIP: Genève",
    verified: true,
    vehicleIds: ALL_LISTING_IDS,
  },
  {
    id: "parking-lausanne",
    name: "Parking Service Lausanne",
    address: "Avenue de la Gare 10, 1003 Lausanne",
    phone: "0213214567",
    email: "hello@parking-lausanne.ch",
    zipLabel: "ZIP: Lausanne",
    verified: true,
    vehicleIds: ALL_LISTING_IDS,
  },
  {
    id: "auto-center-basel",
    name: "Auto Center Basel AG",
    address: "Hardstrasse 55, 4052 Basel",
    phone: "0612987654",
    email: "sales@autocenter-basel.ch",
    zipLabel: "ZIP: Basel",
    verified: true,
    vehicleIds: ALL_LISTING_IDS,
  },
  {
    id: "bern-motors",
    name: "Bern Motors GmbH",
    address: "Wankdorfstrasse 18, 3014 Bern",
    phone: "0313334455",
    email: "info@bern-motors.ch",
    zipLabel: "ZIP: Bern",
    verified: true,
    vehicleIds: ALL_LISTING_IDS,
  },
  {
    id: "luzern-autohaus",
    name: "Luzern Autohaus AG",
    address: "Pilatusstrasse 29, 6003 Luzern",
    phone: "0412112233",
    email: "team@luzern-autohaus.ch",
    zipLabel: "ZIP: Luzern",
    verified: true,
    vehicleIds: ALL_LISTING_IDS,
  },
  {
    id: "ticino-auto",
    name: "Ticino Auto SA",
    address: "Via Pretorio 12, 6900 Lugano",
    phone: "0919101112",
    email: "info@ticino-auto.ch",
    zipLabel: "ZIP: Lugano",
    verified: true,
    vehicleIds: ALL_LISTING_IDS,
  },
  {
    id: "winterthur-garage",
    name: "Winterthur Garage AG",
    address: "Technikumstrasse 8, 8400 Winterthur",
    phone: "0522002200",
    email: "service@winterthur-garage.ch",
    zipLabel: "ZIP: Winterthur",
    verified: true,
    vehicleIds: ALL_LISTING_IDS,
  },
];

function money(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}

function chfMoney(value: number) {
  return `CHF ${value.toLocaleString("de-CH")}.–`;
}

function listingYear(date: string) {
  const parts = date.split(".");
  return parts.length >= 2 ? parts[1] : date;
}

const MAX_COMPARE_VEHICLES = 4;

function dealerForListing(carId: string): Dealer {
  return DEALERS.find((dealer) => dealer.vehicleIds.includes(carId)) ?? DEALERS[0];
}

function buildCompareVehicle(car: Listing, dealer: Dealer): CompareVehicle {
  const extras = getListingExtras(car, dealer);
  const year = listingYear(car.date);
  return {
    id: car.id,
    name: `${car.brand} ${car.model}`,
    trim: car.name,
    price: car.price,
    image: car.image,
    title: car.name,
    brand: car.brand.toUpperCase(),
    model: car.model,
    accident: extras.accident === "No" ? "No accident" : extras.accident,
    bodyType: extras.bodyType,
    fuel: extras.fuel,
    transmission: extras.transmission,
    performance: extras.power,
    driveType: extras.drive,
    engine: extras.engine,
    cylinders: extras.cylinders,
    year,
    exterior: extras.color,
    interior: extras.interiorColor,
    range: extras.range,
    battery: extras.battery,
    curbWeight: extras.curbWeight,
    totalWeight: extras.totalWeight,
    towing: extras.towing,
    seats: extras.seats,
    doors: extras.doors,
    consumption: extras.fuelConsumption,
    co2: extras.co2,
    energyClass: extras.energyClass,
  };
}

function getListingExtras(car: Listing, dealer: Dealer) {
  const cantonName =
    CANTONS.find((item) => item.value === car.canton)?.label.replace(/\s*\([^)]*\)/, "").trim() ??
    car.canton;
  const year = listingYear(car.date);
  const sporty = car.name.includes("M") || car.name.includes("RS") || car.name.includes("AMG");
  const hybrid = !sporty;
  return {
    bodyType: car.brand === "BMW" || car.brand === "Mercedes" ? "Sedan" : "SUV",
    gearbox: "Automatic",
    fuel: sporty ? "Petrol" : "Hybrid",
    power: sporty ? "510 PS" : "190 PS",
    drive: sporty ? "AWD" : "FWD",
    location: `8000 ${cantonName}, ${car.canton}`,
    description: `${car.name} in excellent condition. First registration ${car.date}, ${car.mileage}. Available now at ${dealer.name}.`,
    color: "Black",
    doors: "5",
    seats: "5",
    condition: "Used",
    accident: "No",
    directImport: "No",
    serviceHistory: "Yes",
    warranty: "3 Monate",
    lastMfk: `16.01.${year}`,
    interiorColor: "Black",
    fuelConsumption: sporty ? "8.5 l/100 km" : "6 l/100 km",
    co2: sporty ? "195 g/km" : "120 g/km",
    energyClass: sporty ? "E" : "F",
    euroStandard: "Euro 6",
    euro6: "6d",
    battery: hybrid ? "45 kWh" : "—",
    range: hybrid ? "56 km" : "—",
    curbWeight: sporty ? "1,720 kg" : "1,500 kg",
    totalWeight: sporty ? "2,100 kg" : "2,000 kg",
    towing: sporty ? "2,100 kg" : "555 kg",
    engine: sporty ? "2998 cm³" : "2000 cm³",
    cylinders: sporty ? "6" : "4",
    gears: sporty ? "8" : "5",
    transmission: "Automatic",
  };
}

function renderVehicleDetailTable(title: string, rows: { label: string; value: string }[]) {
  return (
    <div className="vehicle-detail-table">
      <div className="vehicle-detail-table-head">{title}</div>
      {rows.map((row) => (
        <div key={row.label} className="vehicle-detail-table-row">
          <span>{row.label}</span>
          <strong>{row.value}</strong>
        </div>
      ))}
    </div>
  );
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

function IconChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3.5 5.25 7 8.75l3.5-3.5"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconReset() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.2 8a4.8 4.8 0 0 1 8.2-3.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.8 8a4.8 4.8 0 0 1-8.2 3.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M11.2 2.8v2.6H8.6M4.8 13.2V10.6h2.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconFilter() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 4.5h10M2 9.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="5.5" cy="4.5" r="1.6" fill="currentColor" />
      <circle cx="8.5" cy="9.5" r="1.6" fill="currentColor" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4.2 2.8c.3-.3.8-.3 1.1 0l1.4 1.4c.3.3.3.8 0 1.1L5.9 6.1c.5 1.1 1.4 2 2.5 2.5l.8-.8c.3-.3.8-.3 1.1 0l1.4 1.4c.3.3.3.8 0 1.1l-.7.7c-.4.4-1 .5-1.5.4C6.5 10.8 3.2 7.5 2.7 4.4c-.1-.5 0-1.1.4-1.5l.1-.1Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDealerAvatar() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4.5 17.5c1.2-2.6 3.4-4 6.5-4s5.3 1.4 6.5 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="3.5" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.2 4.8 8 8.2l4.8-3.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconShareLink() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="12" cy="3.5" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="4" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12.5" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.8 7.1l4.5-2.4M5.8 8.9l4.5 2.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconPinSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 14s4.5-4.1 4.5-7.2A4.5 4.5 0 0 0 8 2.3a4.5 4.5 0 0 0-4.5 4.5C3.5 9.9 8 14 8 14Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="8" cy="6.8" r="1.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 14V4.5A1.5 1.5 0 0 1 5 3h6a1.5 1.5 0 0 1 1.5 1.5V14" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 14h11M6 6h1.2M8.8 6H10M6 8.5h1.2M8.8 8.5H10M6 11h1.2M8.8 11H10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconVerified() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 6.2 4.8 8.5 9.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M3 3l6 6M9 3 3 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function chf(value: number) {
  return `CHF ${value.toLocaleString("en-US")}`;
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
  const [saved, setSaved] = useState<Record<string, boolean>>({ "bmw-m4": true });
  const [tab, setTab] = useState<TabId>("home");
  const [screen, setScreen] = useState<Screen>("home");
  const [, setHistory] = useState<Screen[]>([]);
  const [hubQuery, setHubQuery] = useState("");
  const [dealerLocation, setDealerLocation] = useState("");
  const [selectedDealerId, setSelectedDealerId] = useState<string | null>(null);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
  const [vehiclePhotoIndex, setVehiclePhotoIndex] = useState(0);
  const [testDriveName, setTestDriveName] = useState("");
  const [testDrivePhone, setTestDrivePhone] = useState("");
  const [testDriveEmail, setTestDriveEmail] = useState("");
  const [testDriveDate, setTestDriveDate] = useState("");
  const [testDriveNote, setTestDriveNote] = useState("");
  const [profileFullName, setProfileFullName] = useState(PROFILE_DEFAULTS.fullName);
  const [profileEmail, setProfileEmail] = useState(PROFILE_DEFAULTS.email);
  const [profilePhone, setProfilePhone] = useState(PROFILE_DEFAULTS.phone);
  const [profileGender, setProfileGender] = useState(PROFILE_DEFAULTS.gender);
  const [profileBirthDate, setProfileBirthDate] = useState(PROFILE_DEFAULTS.birthDate);
  const [profileAddress, setProfileAddress] = useState(PROFILE_DEFAULTS.address);
  const [profileCity, setProfileCity] = useState(PROFILE_DEFAULTS.city);
  const [profileZip, setProfileZip] = useState(PROFILE_DEFAULTS.zip);
  const [profileCountry, setProfileCountry] = useState(PROFILE_DEFAULTS.country);
  const [profileSavedNote, setProfileSavedNote] = useState(false);
  const [accountPassword, setAccountPassword] = useState("");
  const [settingsCurrentPassword, setSettingsCurrentPassword] = useState("");
  const [settingsNewPassword, setSettingsNewPassword] = useState("");
  const [settingsConfirmPassword, setSettingsConfirmPassword] = useState("");
  const [settingsShowCurrent, setSettingsShowCurrent] = useState(false);
  const [settingsShowNew, setSettingsShowNew] = useState(false);
  const [settingsShowConfirm, setSettingsShowConfirm] = useState(false);
  const [settingsMessage, setSettingsMessage] = useState<string | null>(null);
  const [settingsMessageTone, setSettingsMessageTone] = useState<"success" | "error">("success");
  const [profileMapCoords, setProfileMapCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [notifications, setNotifications] = useState<AppNotification[]>(INITIAL_NOTIFICATIONS);
  const [activeNotificationId, setActiveNotificationId] = useState<string | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [compareCatalog, setCompareCatalog] = useState<Record<string, CompareVehicle>>({});
  const [compareLimitMessage, setCompareLimitMessage] = useState("");
  const [comparePage, setComparePage] = useState(0);
  const compareScrollRef = useRef<HTMLDivElement>(null);
  const [popularBrand, setPopularBrand] = useState<BrandName>("BMW");
  const [popularSort, setPopularSort] = useState<SimpleSort>("price-asc");
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const heroDragRef = useRef<{ x: number; index: number } | null>(null);
  const [simpleQuery, setSimpleQuery] = useState("");
  const [simpleBrand, setSimpleBrand] = useState("all");
  const [simpleModel, setSimpleModel] = useState("any");
  const [bodyType, setBodyType] = useState("All");
  const [condition, setCondition] = useState("All");
  const [fuel, setFuel] = useState("All");
  const [gearbox, setGearbox] = useState("All");
  const [yearRange, setYearRange] = useState(YEAR_RANGES[0]);
  const [priceRange, setPriceRange] = useState(PRICE_RANGES[0]);
  const [mileageRange, setMileageRange] = useState(MILEAGE_RANGES[0]);
  const [driveType, setDriveType] = useState("All");
  const [simpleSort, setSimpleSort] = useState<SimpleSort>("price-asc");
  const [resultsSort, setResultsSort] = useState<SimpleSort>("price-asc");
  const [simpleView, setSimpleView] = useState<SimpleView>("full");
  const [filterReturnScreen, setFilterReturnScreen] = useState<Screen>("search-results");
  const [resultsFiltersOpen, setResultsFiltersOpen] = useState(false);
  const [advQuery, setAdvQuery] = useState("");
  const [advMake, setAdvMake] = useState("all");
  const [advModel, setAdvModel] = useState("any");
  const [advCategory, setAdvCategory] = useState(VEHICLE_CATEGORIES[0]);
  const [advBodyType, setAdvBodyType] = useState("All");
  const [advPriceRange, setAdvPriceRange] = useState(PRICE_RANGES[0]);
  const [advYearRange, setAdvYearRange] = useState(ADV_YEAR_RANGES[0]);
  const [advMileageRange, setAdvMileageRange] = useState(ADV_MILEAGE_RANGES[0]);
  const [advCondition, setAdvCondition] = useState("All");
  const [advAccident, setAdvAccident] = useState("All");
  const [advFuel, setAdvFuel] = useState("All");
  const [advGearbox, setAdvGearbox] = useState("All");
  const [advDriveType, setAdvDriveType] = useState("All");
  const [advGears, setAdvGears] = useState("All");
  const [advPower, setAdvPower] = useState(POWER_RANGES[0]);
  const [advEngine, setAdvEngine] = useState(ENGINE_RANGES[0]);
  const [advCylinders, setAdvCylinders] = useState(CYLINDER_RANGES[0]);
  const [advEvRange, setAdvEvRange] = useState(EV_RANGE_RANGES[0]);
  const [advBattery, setAdvBattery] = useState(BATTERY_CAPACITY_RANGES[0]);
  const [advCurbWeight, setAdvCurbWeight] = useState(CURB_WEIGHT_RANGES[0]);
  const [advTotalWeight, setAdvTotalWeight] = useState(TOTAL_WEIGHT_RANGES[0]);
  const [advTowing, setAdvTowing] = useState(TOWING_CAPACITY_RANGES[0]);
  const [advSeats, setAdvSeats] = useState("All");
  const [advDoors, setAdvDoors] = useState("All");
  const [advConsumption, setAdvConsumption] = useState(CONSUMPTION_RANGES[0]);
  const [advCo2, setAdvCo2] = useState(CO2_RANGES[0]);
  const [advEnergyClass, setAdvEnergyClass] = useState(ENERGY_CLASSES[0]);
  const [advEuro, setAdvEuro] = useState(EURO_STANDARDS[0]);
  const [advEuro6, setAdvEuro6] = useState(EURO6_STANDARDS[0]);
  const [advLocation, setAdvLocation] = useState("");
  const [advRadius, setAdvRadius] = useState(RADIUS_OPTIONS[0]);
  const [advEquipment, setAdvEquipment] = useState<Record<string, boolean>>({});
  const [advExterior, setAdvExterior] = useState<Record<string, boolean>>({});
  const [advInterior, setAdvInterior] = useState<Record<string, boolean>>({});
  const cardRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const resultsInputRef = useRef<HTMLInputElement>(null);
  const screenRef = useRef<Screen>(screen);
  screenRef.current = screen;

  useEffect(() => {
    function onPointer(event: PointerEvent) {
      if (!cardRef.current?.contains(event.target as Node)) setOpen(null);
    }
    window.addEventListener("pointerdown", onPointer);
    return () => window.removeEventListener("pointerdown", onPointer);
  }, []);

  useEffect(() => {
    if (screen === "search-results") {
      resultsInputRef.current?.focus();
    }
  }, [screen]);

  useEffect(() => {
    if (screen !== "search-results" || !resultsFiltersOpen) return;
    setBrand(simpleBrand);
    setModel(simpleModel);
    setSearched(true);
  }, [screen, resultsFiltersOpen, simpleBrand, simpleModel]);

  useEffect(() => {
    if (screen !== "home" || heroPaused) return;
    const timer = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [screen, heroPaused, heroIndex]);

  useEffect(() => {
    if (compareIds.length === 0) {
      setComparePage(0);
      return;
    }
    setComparePage((page) => Math.min(page, compareIds.length - 1));
  }, [compareIds.length]);

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
    setSimpleBrand(brand);
    setSimpleModel(model);
    const queryParts: string[] = [];
    if (brand !== "all") queryParts.push(brand);
    if (model !== "any") queryParts.push(model);
    if (queryParts.length > 0) setHubQuery(queryParts.join(" "));
    navigateTo("search-results", "search");
  }

  const filteredDestinations = DESTINATIONS;

  function navigateTo(next: Screen, nextTab: TabId = next === "home" ? "home" : "search") {
    const current = screenRef.current;
    if (current !== next) {
      setHistory((stack) => [...stack, current]);
      setScreen(next);
      screenRef.current = next;
    }
    if (next !== "search-results") {
      setResultsFiltersOpen(false);
    }
    setTab(nextTab);
    setOpen(null);
  }

  function goBack() {
    const leaving = screenRef.current;
    setHistory((stack) => {
      if (stack.length === 0) {
        setScreen("home");
        screenRef.current = "home";
        setTab("home");
        setHubQuery("");
        return [];
      }
      const previous = stack[stack.length - 1];
      setScreen(previous);
      screenRef.current = previous;
      setTab(
        previous === "home" || previous === "popular-brands"
          ? leaving === "my-profile" ||
              leaving === "my-favourites" ||
              leaving === "app-settings"
            ? "profile"
            : "home"
          : previous === "my-profile"
            ? "profile"
            : "search",
      );
      return stack.slice(0, -1);
    });
    setOpen(null);
  }

  function goHome() {
    setTab("home");
    setScreen("home");
    screenRef.current = "home";
    setHistory([]);
    setHubQuery("");
    setOpen(null);
  }

  function openPlan() {
    setScreen("home");
    screenRef.current = "home";
    setHistory([]);
    setHubQuery("");
    setTab("plan");
    setOpen(null);
  }

  function openProfileTab() {
    setScreen("home");
    screenRef.current = "home";
    setHistory([]);
    setHubQuery("");
    setTab("profile");
    setOpen(null);
  }

  function openMyProfile() {
    setProfileSavedNote(false);
    navigateTo("my-profile", "profile");
  }

  function openMyFavourites() {
    navigateTo("my-favourites", "profile");
  }

  function openAppSettings() {
    setSettingsMessage(null);
    navigateTo("app-settings", "profile");
  }

  function updateAccountPassword() {
    setSettingsMessage(null);
    if (accountPassword && settingsCurrentPassword !== accountPassword) {
      setSettingsMessageTone("error");
      setSettingsMessage("Current password is incorrect.");
      return;
    }
    if (!accountPassword && !settingsCurrentPassword && !settingsNewPassword) {
      setSettingsMessageTone("error");
      setSettingsMessage("Enter a new password.");
      return;
    }
    if (settingsNewPassword.length < 8) {
      setSettingsMessageTone("error");
      setSettingsMessage("New password must be at least 8 characters.");
      return;
    }
    if (settingsNewPassword !== settingsConfirmPassword) {
      setSettingsMessageTone("error");
      setSettingsMessage("New passwords do not match.");
      return;
    }
    setAccountPassword(settingsNewPassword);
    setSettingsCurrentPassword("");
    setSettingsNewPassword("");
    setSettingsConfirmPassword("");
    setSettingsShowCurrent(false);
    setSettingsShowNew(false);
    setSettingsShowConfirm(false);
    setSettingsMessageTone("success");
    setSettingsMessage("Password updated successfully.");
  }

  function deleteAccount() {
    const confirmed = window.confirm(
      "Delete your account permanently? All saved data will be removed.",
    );
    if (!confirmed) return;
    setProfileFullName(PROFILE_DEFAULTS.fullName);
    setProfileEmail(PROFILE_DEFAULTS.email);
    setProfilePhone(PROFILE_DEFAULTS.phone);
    setProfileGender(PROFILE_DEFAULTS.gender);
    setProfileBirthDate(PROFILE_DEFAULTS.birthDate);
    setProfileAddress(PROFILE_DEFAULTS.address);
    setProfileCity(PROFILE_DEFAULTS.city);
    setProfileZip(PROFILE_DEFAULTS.zip);
    setProfileCountry(PROFILE_DEFAULTS.country);
    setSaved({});
    setNotifications([]);
    setCompareIds([]);
    setCompareCatalog({});
    setAccountPassword("");
    setSettingsCurrentPassword("");
    setSettingsNewPassword("");
    setSettingsConfirmPassword("");
    setSettingsMessage(null);
    goHome();
  }

  function openNotifications() {
    setActiveNotificationId(null);
    navigateTo("notifications");
  }

  function markNotificationRead(id: string) {
    setNotifications((current) =>
      current.map((item) => (item.id === id ? { ...item, unread: false } : item)),
    );
  }

  function openNotificationDetails(id: string) {
    markNotificationRead(id);
    setActiveNotificationId(id);
  }

  function closeNotificationDetails() {
    setActiveNotificationId(null);
  }

  function markAllNotificationsRead() {
    setNotifications((current) => current.map((item) => ({ ...item, unread: false })));
  }

  function saveProfileChanges() {
    setProfileSavedNote(true);
  }

  function useCurrentLocation() {
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setProfileMapCoords({ lat: latitude, lng: longitude });
          setProfileCountry((current) => current || "Schweiz");
          setProfileCity((current) => current || "Current location");
        },
        () => {
          setProfileMapCoords(null);
          setProfileCity("Zürich");
          setProfileZip("8001");
          setProfileCountry("Schweiz");
          setProfileAddress((current) => current || "Bahnhofstrasse 1");
        },
        { enableHighAccuracy: true, timeout: 8000 },
      );
      return;
    }
    setProfileMapCoords(null);
    setProfileCity("Zürich");
    setProfileZip("8001");
    setProfileCountry("Schweiz");
    setProfileAddress((current) => current || "Bahnhofstrasse 1");
  }

  function openSearchHub() {
    navigateTo("search-hub");
  }

  function openSimpleSearch() {
    setSimpleView("full");
    setFilterReturnScreen("search-hub");
    navigateTo("simple-search");
  }

  function toggleResultsFilters() {
    setResultsFiltersOpen((open) => {
      if (!open) {
        setSimpleBrand(brand);
        setSimpleModel(model);
        setSimpleQuery(hubQuery);
        setSearched(true);
      }
      return !open;
    });
  }

  function applySimpleFilters() {
    setBrand(simpleBrand);
    setModel(simpleModel);
    setHubQuery(simpleQuery);
    setSearched(true);
    setSimpleView("full");
    navigateTo("search-results", "search");
  }

  function leaveSimpleFilters() {
    if (filterReturnScreen === "search-results") {
      navigateTo("search-results", "search");
      return;
    }
    setSimpleView("full");
  }

  function openVehiclesFilters() {
    if (screen === "search-results") {
      toggleResultsFilters();
      return;
    }
    if (screen === "simple-search" && simpleView === "full") {
      setFilterReturnScreen("search-hub");
      setSimpleView("filters");
    }
  }

  function openAdvancedSearch() {
    navigateTo("advanced-search");
  }

  function openPopularBrands(nextBrand: BrandName) {
    setPopularBrand(nextBrand);
    setPopularSort("price-asc");
    navigateTo("popular-brands", "home");
  }

  function openVehicleDealers() {
    setDealerLocation("");
    navigateTo("vehicle-dealers");
  }

  function openDealerDetails(dealerId: string) {
    setSelectedDealerId(dealerId);
    navigateTo("dealer-details");
  }

  function openVehicleDetails(vehicleId: string) {
    setSelectedVehicleId(vehicleId);
    setVehiclePhotoIndex(0);
    navigateTo("vehicle-details");
  }

  function openTestDrive() {
    setTestDriveName(profileFullName);
    setTestDrivePhone(profilePhone);
    setTestDriveEmail(profileEmail);
    setTestDriveDate("");
    setTestDriveNote("");
    navigateTo("test-drive");
  }

  function confirmTestDrive() {
    const vehicleLabel = selectedVehicle?.name ?? "this vehicle";
    setTestDriveNote(`Your test drive request for ${vehicleLabel} has been sent to the seller.`);
  }

  function openVehicleDealerFromListing(dealerId: string) {
    setSelectedDealerId(dealerId);
    navigateTo("dealer-details");
  }

  function openComparisons() {
    setCompareLimitMessage("");
    setComparePage(0);
    navigateTo("comparisons");
  }

  function addVehicleToComparisons(car: Listing) {
    setCompareLimitMessage("");

    if (compareIds.includes(car.id)) {
      setComparePage(compareIds.indexOf(car.id));
      navigateTo("comparisons");
      return;
    }

    if (compareIds.length >= MAX_COMPARE_VEHICLES) {
      setCompareLimitMessage("You can compare up to 4 vehicles. Remove one to add another.");
      navigateTo("comparisons");
      return;
    }

    const entry = buildCompareVehicle(car, dealerForListing(car.id));
    setCompareCatalog((catalog) => ({ ...catalog, [car.id]: entry }));
    setCompareIds((current) => [...current, car.id]);
    setComparePage(compareIds.length);
    navigateTo("comparisons");
  }

  function openSearchResults(query = hubQuery) {
    setHubQuery(query);
    navigateTo("search-results");
  }

  function openDestination(id: string) {
    if (id === "simple") openSimpleSearch();
    if (id === "advanced") openAdvancedSearch();
    if (id === "dealers") openVehicleDealers();
    if (id === "comparisons") openComparisons();
  }

  function removeCompareVehicle(id: string) {
    const removedIndex = compareIds.indexOf(id);
    const nextIds = compareIds.filter((item) => item !== id);

    setCompareIds(nextIds);
    setCompareCatalog((catalog) => {
      const next = { ...catalog };
      delete next[id];
      return next;
    });
    setCompareLimitMessage("");

    if (nextIds.length === 0) {
      setComparePage(0);
      compareScrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    setComparePage((page) => {
      if (removedIndex >= 0 && page > removedIndex) return page - 1;
      return Math.min(page, nextIds.length - 1);
    });

    window.requestAnimationFrame(() => {
      const node = compareScrollRef.current;
      if (!node) return;
      const colWidth = 168;
      const nextPage =
        removedIndex >= 0 && comparePage > removedIndex
          ? comparePage - 1
          : Math.min(comparePage, nextIds.length - 1);
      node.scrollTo({ left: Math.max(0, nextPage) * colWidth, behavior: "smooth" });
    });
  }

  function onCompareScroll() {
    const node = compareScrollRef.current;
    if (!node) return;
    const colWidth = 168;
    const page = Math.round(node.scrollLeft / colWidth);
    setComparePage(Math.max(0, Math.min(page, Math.max(compareIds.length - 1, 0))));
  }

  function goToComparePage(index: number) {
    const node = compareScrollRef.current;
    if (!node) return;
    const colWidth = 168;
    node.scrollTo({ left: index * colWidth, behavior: "smooth" });
    setComparePage(index);
  }

  function resetAdvancedFilters() {
    setAdvQuery("");
    setAdvMake("all");
    setAdvModel("any");
    setAdvCategory(VEHICLE_CATEGORIES[0]);
    setAdvBodyType("All");
    setAdvPriceRange(PRICE_RANGES[0]);
    setAdvYearRange(ADV_YEAR_RANGES[0]);
    setAdvMileageRange(ADV_MILEAGE_RANGES[0]);
    setAdvCondition("All");
    setAdvAccident("All");
    setAdvFuel("All");
    setAdvGearbox("All");
    setAdvDriveType("All");
    setAdvGears("All");
    setAdvPower(POWER_RANGES[0]);
    setAdvEngine(ENGINE_RANGES[0]);
    setAdvCylinders(CYLINDER_RANGES[0]);
    setAdvEvRange(EV_RANGE_RANGES[0]);
    setAdvBattery(BATTERY_CAPACITY_RANGES[0]);
    setAdvCurbWeight(CURB_WEIGHT_RANGES[0]);
    setAdvTotalWeight(TOTAL_WEIGHT_RANGES[0]);
    setAdvTowing(TOWING_CAPACITY_RANGES[0]);
    setAdvSeats("All");
    setAdvDoors("All");
    setAdvConsumption(CONSUMPTION_RANGES[0]);
    setAdvCo2(CO2_RANGES[0]);
    setAdvEnergyClass(ENERGY_CLASSES[0]);
    setAdvEuro(EURO_STANDARDS[0]);
    setAdvEuro6(EURO6_STANDARDS[0]);
    setAdvLocation("");
    setAdvRadius(RADIUS_OPTIONS[0]);
    setAdvEquipment({});
    setAdvExterior({});
    setAdvInterior({});
  }

  function showAdvancedResults() {
    if (advMake !== "all") {
      setSimpleBrand(advMake);
      setSimpleModel(advModel === "any" ? "any" : advModel);
    } else {
      setSimpleBrand("all");
      setSimpleModel("any");
    }
    setSimpleQuery(advQuery);
    setBodyType(advBodyType);
    setCondition(advCondition);
    setFuel(advFuel);
    setGearbox(advGearbox);
    setDriveType(advDriveType);
    setYearRange(YEAR_RANGES[0]);
    setPriceRange(advPriceRange);
    setMileageRange(MILEAGE_RANGES[0]);
    navigateTo("simple-search");
  }

  function onHubSearchChange(value: string) {
    setHubQuery(value);
    if (value.trim()) openSearchResults(value);
  }

  function onHubSearchKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      openSearchResults(hubQuery);
    }
  }

  function renderVehiclesSearchBar(options: {
    value: string;
    onChange: (value: string) => void;
    onFilterClick?: () => void;
    filterActive?: boolean;
    filterExpanded?: boolean;
    showFilter?: boolean;
    inputRef?: RefObject<HTMLInputElement | null>;
    autoFocus?: boolean;
  }) {
    const showFilter = options.showFilter !== false;

    return (
      <div
        className={
          showFilter ? "hub-search hub-search--vehicles" : "hub-search hub-search--vehicles hub-search--no-filter"
        }
      >
        <img src={searchNavIcon} width={16} height={16} alt="" />
        <input
          ref={options.inputRef}
          type="search"
          value={options.value}
          onChange={(event) => options.onChange(event.target.value)}
          placeholder="Find your choice"
          aria-label="Find your choice"
          autoFocus={options.autoFocus}
        />
        {showFilter && (
          <button
            className={options.filterActive ? "hub-search-filter active" : "hub-search-filter"}
            type="button"
            aria-label={options.filterExpanded ? "Hide filters" : "Show filters"}
            aria-expanded={options.filterExpanded ?? options.filterActive ?? false}
            onClick={options.onFilterClick}
          >
            <img src={slidersIcon} width={16} height={16} alt="" />
          </button>
        )}
      </div>
    );
  }

  function renderVehicleCard(car: Listing) {
    function activateDetails() {
      openVehicleDetails(car.id);
    }

    function onCardKey(event: KeyboardEvent<HTMLElement>) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activateDetails();
      }
    }

    return (
      <article
        className="card card-clickable"
        key={car.id}
        role="button"
        tabIndex={0}
        onClick={activateDetails}
        onKeyDown={onCardKey}
        aria-label={`View details for ${car.name}`}
      >
        <div className="photo">
          <img src={car.image} alt="" />
          <button
            className="fav"
            type="button"
            aria-pressed={Boolean(saved[car.id])}
            aria-label={saved[car.id] ? `Remove ${car.name} from saved` : `Save ${car.name}`}
            onClick={(event) => {
              event.stopPropagation();
              setSaved((current) => ({ ...current, [car.id]: !current[car.id] }));
            }}
          >
            <img
              src={saved[car.id] ? heartFavActive : heartFavInactive}
              width={12}
              height={12}
              alt=""
            />
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
    );
  }

  const simpleModels =
    simpleBrand === "all" ? Object.values(MODELS).flat() : MODELS[simpleBrand as BrandName] ?? [];

  function renderVehicleFiltersSection(options: {
    title: string;
    className?: string;
    showAdvancedLink?: boolean;
  }) {
    return (
      <section
        className={options.className ? `simple-filters ${options.className}` : "simple-filters"}
        aria-label="Vehicle filters"
      >
        <h2 className="simple-filters-title">{options.title}</h2>

        <div className="simple-grid">
          <label className="simple-field">
            <span>Brand</span>
            <span className="simple-select">
              <select
                value={simpleBrand}
                onChange={(event) => {
                  setSimpleBrand(event.target.value);
                  setSimpleModel("any");
                }}
              >
                <option value="all">Select brand</option>
                {BRANDS.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              <IconChevronDown />
            </span>
          </label>

          <label className="simple-field">
            <span>Model</span>
            <span className="simple-select">
              <select
                value={simpleModel}
                onChange={(event) => setSimpleModel(event.target.value)}
                disabled={simpleBrand === "all"}
              >
                <option value="any">{simpleBrand === "all" ? "Select brand first" : "Any model"}</option>
                {simpleModels.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <IconChevronDown />
            </span>
          </label>

          <label className="simple-field">
            <span>Body type</span>
            <span className="simple-select">
              <select value={bodyType} onChange={(event) => setBodyType(event.target.value)}>
                {BODY_TYPES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <IconChevronDown />
            </span>
          </label>

          <label className="simple-field">
            <span>Condition</span>
            <span className="simple-select">
              <select value={condition} onChange={(event) => setCondition(event.target.value)}>
                {CONDITIONS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <IconChevronDown />
            </span>
          </label>

          <label className="simple-field">
            <span>Fuel</span>
            <span className="simple-select">
              <select value={fuel} onChange={(event) => setFuel(event.target.value)}>
                {FUELS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <IconChevronDown />
            </span>
          </label>

          <label className="simple-field">
            <span>Gearbox</span>
            <span className="simple-select">
              <select value={gearbox} onChange={(event) => setGearbox(event.target.value)}>
                {GEARBOXES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <IconChevronDown />
            </span>
          </label>
        </div>

        <label className="simple-field simple-field-full">
          <span>Year</span>
          <span className="simple-select">
            <select value={yearRange} onChange={(event) => setYearRange(event.target.value)}>
              {YEAR_RANGES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <IconChevronDown />
          </span>
        </label>

        <label className="simple-field simple-field-full">
          <span>Price</span>
          <span className="simple-select">
            <select value={priceRange} onChange={(event) => setPriceRange(event.target.value)}>
              {PRICE_RANGES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <IconChevronDown />
          </span>
        </label>

        <label className="simple-field simple-field-full">
          <span>Mileage (km)</span>
          <span className="simple-select">
            <select value={mileageRange} onChange={(event) => setMileageRange(event.target.value)}>
              {MILEAGE_RANGES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <IconChevronDown />
          </span>
        </label>

        <label className="simple-field simple-field-full">
          <span>Drive type</span>
          <span className="simple-select">
            <select value={driveType} onChange={(event) => setDriveType(event.target.value)}>
              {DRIVE_TYPES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <IconChevronDown />
          </span>
        </label>

        {options.showAdvancedLink !== false && (
          <button className="advanced-link" type="button" onClick={openAdvancedSearch}>
            Advanced search +
          </button>
        )}
      </section>
    );
  }

  const simpleResults = useMemo(() => {
    const needle = simpleQuery.trim().toLowerCase();
    const rows = LISTINGS.filter((car) => {
      if (simpleBrand !== "all" && car.brand !== simpleBrand) return false;
      if (simpleModel !== "any" && car.model !== simpleModel) return false;
      if (!needle) return true;
      return (
        car.name.toLowerCase().includes(needle) ||
        car.brand.toLowerCase().includes(needle) ||
        car.model.toLowerCase().includes(needle)
      );
    });
    return [...rows].sort((a, b) =>
      simpleSort === "price-asc" ? a.price - b.price : b.price - a.price,
    );
  }, [simpleBrand, simpleModel, simpleQuery, simpleSort]);

  const keywordResults = useMemo(() => {
    const needle = hubQuery.trim().toLowerCase();
    const rows = LISTINGS.filter((car) => {
      if (searched) {
        if (brand !== "all" && car.brand !== brand) return false;
        if (model !== "any" && car.model !== model) return false;
        if (car.price > maxPrice) return false;
        if (car.canton !== canton) return false;
      }
      if (!needle) return true;
      return (
        car.name.toLowerCase().includes(needle) ||
        car.brand.toLowerCase().includes(needle) ||
        car.model.toLowerCase().includes(needle)
      );
    });
    return [...rows].sort((a, b) =>
      resultsSort === "price-asc" ? a.price - b.price : b.price - a.price,
    );
  }, [brand, canton, hubQuery, maxPrice, model, resultsSort, searched]);

  const favouriteListings = useMemo(
    () => LISTINGS.filter((car) => saved[car.id]),
    [saved],
  );

  const popularBrandResults = useMemo(() => {
    const rows = LISTINGS.filter((car) => car.brand === popularBrand);
    return [...rows].sort((a, b) =>
      popularSort === "price-asc" ? a.price - b.price : b.price - a.price,
    );
  }, [popularBrand, popularSort]);

  const onHomeTab = tab === "home";
  const onSearchTab = tab === "search";
  const onPlanTab = tab === "plan";
  const onProfileTab = screen === "home" && tab === "profile";
  const onProfileNavActive = tab === "profile";
  const showTabNavigation = screen === "home";

  const unreadNotificationCount = useMemo(
    () => notifications.filter((item) => item.unread).length,
    [notifications],
  );

  const activeNotification = useMemo(
    () => notifications.find((item) => item.id === activeNotificationId) ?? null,
    [activeNotificationId, notifications],
  );

  const selectedDealer = useMemo(
    () => DEALERS.find((dealer) => dealer.id === selectedDealerId) ?? null,
    [selectedDealerId],
  );

  const selectedVehicle = useMemo(
    () => LISTINGS.find((car) => car.id === selectedVehicleId) ?? null,
    [selectedVehicleId],
  );

  const selectedVehicleDealer = useMemo(() => {
    if (!selectedVehicle) return null;
    return DEALERS.find((dealer) => dealer.vehicleIds.includes(selectedVehicle.id)) ?? DEALERS[0];
  }, [selectedVehicle]);

  const dealerVehicles = useMemo(() => {
    if (!selectedDealer) return [];
    return LISTINGS.filter((car) => selectedDealer.vehicleIds.includes(car.id));
  }, [selectedDealer]);

  const profileMapSrc = useMemo(() => {
    if (profileMapCoords) {
      const point = `${profileMapCoords.lat},${profileMapCoords.lng}`;
      return `https://maps.google.com/maps?q=${encodeURIComponent(point)}&z=14&output=embed`;
    }
    const query =
      [profileAddress, profileCity, profileZip, profileCountry]
        .map((value) => value.trim())
        .filter(Boolean)
        .join(", ") || "Schweiz";
    return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=13&output=embed`;
  }, [profileAddress, profileCity, profileCountry, profileMapCoords, profileZip]);

  const compareVehicles = useMemo(
    () =>
      compareIds
        .map((id) => compareCatalog[id] ?? COMPARE_VEHICLES.find((car) => car.id === id))
        .filter((car): car is CompareVehicle => Boolean(car)),
    [compareIds, compareCatalog],
  );

  const visibleDealers = useMemo(() => {
    const needle = dealerLocation.trim().toLowerCase();
    if (!needle) return DEALERS;
    return DEALERS.filter(
      (dealer) =>
        dealer.name.toLowerCase().includes(needle) ||
        dealer.address.toLowerCase().includes(needle),
    );
  }, [dealerLocation]);

  const advModels = advMake === "all" ? Object.values(MODELS).flat() : MODELS[advMake as BrandName] ?? [];
  const advMatchCount = useMemo(() => {
    const needle = advQuery.trim().toLowerCase();
    return LISTINGS.filter((car) => {
      if (advMake !== "all" && car.brand !== advMake) return false;
      if (advModel !== "any" && car.model !== advModel) return false;
      if (!needle) return true;
      return (
        car.name.toLowerCase().includes(needle) ||
        car.brand.toLowerCase().includes(needle) ||
        car.model.toLowerCase().includes(needle)
      );
    }).length;
  }, [advMake, advModel, advQuery]);

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

        {screen === "home" && onPlanTab && (
          <div className="header plan-header">
            <h1 className="plan-header-title">Plan</h1>
          </div>
        )}

        {screen === "home" && onProfileTab && (
          <div className="header plan-header">
            <h1 className="plan-header-title">Profile</h1>
          </div>
        )}

        {screen === "home" && !onPlanTab && !onProfileTab && (
          <div className="header">
            <img className="logo" src={logo} alt="AutoPlaza.ch" />
            <div className="header-actions">
              <button className="icon-btn" type="button" aria-label="Compare" onClick={openComparisons}>
                <img className="glyph" src={compareIcon} width={16} height={16} alt="" />
                <img className="unread" src={unreadIcon} width={10} height={10} alt="" />
              </button>
              <button
                className="notify-btn"
                type="button"
                aria-label={
                  unreadNotificationCount > 0
                    ? `Notifications, ${unreadNotificationCount} unread`
                    : "Notifications"
                }
                onClick={openNotifications}
              >
                <img src={notificationsIcon} width={36} height={36} alt="" />
                {unreadNotificationCount > 0 && (
                  <span className="notify-dot" aria-hidden="true">
                    {unreadNotificationCount > 9 ? "9+" : unreadNotificationCount}
                  </span>
                )}
              </button>
              <button className="avatar-btn" type="button" aria-label="Open my profile" onClick={openMyProfile}>
                <img className="avatar" src={profilePhoto} width={36} height={36} alt="" />
              </button>
            </div>
          </div>
        )}

        <main
          className={
            screen === "vehicle-details"
              ? "scroll scroll-vehicle-details"
              : screen === "test-drive"
                ? "scroll scroll-test-drive"
              : showTabNavigation
                ? "scroll"
                : "scroll scroll-search-hub"
          }
        >
          {screen === "popular-brands" ? (
            <div className="popular-brands-page">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title">Popular Brands</h1>
              </div>

              <div className="brand-scroller popular-brand-scroller" role="listbox" aria-label="Popular brands">
                {BRANDS.map((item) => (
                  <button
                    key={item.name}
                    className="brand"
                    type="button"
                    role="option"
                    aria-selected={popularBrand === item.name}
                    aria-pressed={popularBrand === item.name}
                    onClick={() => setPopularBrand(item.name)}
                  >
                    <span className="brand-art">
                      <img src={item.src} width={item.width} height={item.height} alt="" />
                    </span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>

              <section className="popular-brands-results" aria-label={`${popularBrand} vehicles`}>
                <div className="popular-brands-summary">
                  <h2>
                    {popularBrandResults.length} vehicle{popularBrandResults.length === 1 ? "" : "s"} found
                  </h2>
                  <span className="popular-brands-filtered">Filtered</span>
                </div>

                <label className="popular-brands-sort">
                  <span>Sort by</span>
                  <span className="simple-select">
                    <select
                      value={popularSort}
                      onChange={(event) => setPopularSort(event.target.value as SimpleSort)}
                      aria-label="Sort by"
                    >
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                    </select>
                    <IconChevronDown />
                  </span>
                </label>

                <div className="list">
                  {popularBrandResults.map((car) => renderVehicleCard(car))}
                  {popularBrandResults.length === 0 && (
                    <p className="empty">No vehicles found for {popularBrand}.</p>
                  )}
                </div>
              </section>
            </div>
          ) : screen === "notifications" ? (
            <div className="notifications-page">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title">Notifications</h1>
                {unreadNotificationCount > 0 && (
                  <button className="notify-mark-all" type="button" onClick={markAllNotificationsRead}>
                    Mark all read
                  </button>
                )}
              </div>

              <p className="notify-summary">
                {unreadNotificationCount > 0
                  ? `${unreadNotificationCount} unread update${unreadNotificationCount === 1 ? "" : "s"}`
                  : "You're all caught up"}
              </p>

              <div className="notify-list">
                {notifications.map((item) => (
                  <button
                    key={item.id}
                    className={item.unread ? "notify-card notify-card-unread" : "notify-card"}
                    type="button"
                    onClick={() => openNotificationDetails(item.id)}
                  >
                    <span className={`notify-icon notify-icon-${item.tone}`} aria-hidden="true">
                      <img src={notificationsIcon} width={18} height={18} alt="" />
                    </span>
                    <span className="notify-copy">
                      <span className="notify-card-top">
                        <strong>{item.title}</strong>
                        <time>{item.time}</time>
                      </span>
                      <span className="notify-body">{item.body}</span>
                    </span>
                    {item.unread && <span className="notify-unread-dot" aria-hidden="true" />}
                  </button>
                ))}
              </div>

              {activeNotification && (
                <div className="notify-modal" role="dialog" aria-modal="true" aria-labelledby="notify-detail-title">
                  <button
                    className="notify-modal-backdrop"
                    type="button"
                    aria-label="Close notification details"
                    onClick={closeNotificationDetails}
                  />
                  <div className="notify-modal-card">
                    <div className="notify-modal-head">
                      <span className={`notify-icon notify-icon-${activeNotification.tone}`} aria-hidden="true">
                        <img src={notificationsIcon} width={18} height={18} alt="" />
                      </span>
                      <div className="notify-modal-head-copy">
                        <h2 id="notify-detail-title">{activeNotification.title}</h2>
                        <time>{activeNotification.time}</time>
                      </div>
                    </div>
                    <p className="notify-modal-body">{activeNotification.body}</p>
                    <p className="notify-modal-detail">{activeNotification.detail}</p>
                    <button className="notify-modal-done" type="button" onClick={closeNotificationDetails}>
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : screen === "app-settings" ? (
            <div className="app-settings-page">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title app-settings-title">App Settings</h1>
              </div>

              <section className="app-settings-card" aria-labelledby="app-settings-password-title">
                <div className="app-settings-card-head">
                  <img src={settingsLockIcon} width={20} height={20} alt="" />
                  <h2 id="app-settings-password-title">Change Password</h2>
                </div>
                <p className="app-settings-lead">
                  For your security, please use a strong password (at least 8 characters).
                </p>

                <label className="app-settings-field">
                  <span>Current password</span>
                  <span className="app-settings-input">
                    <input
                      type={settingsShowCurrent ? "text" : "password"}
                      value={settingsCurrentPassword}
                      onChange={(event) => setSettingsCurrentPassword(event.target.value)}
                      placeholder="Enter current password"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      className="app-settings-eye"
                      aria-label={settingsShowCurrent ? "Hide password" : "Show password"}
                      aria-pressed={settingsShowCurrent}
                      onClick={() => setSettingsShowCurrent((open) => !open)}
                    >
                      <img src={settingsEyeIcon} width={18} height={18} alt="" />
                    </button>
                  </span>
                </label>

                <label className="app-settings-field">
                  <span>New password</span>
                  <span className="app-settings-input">
                    <input
                      type={settingsShowNew ? "text" : "password"}
                      value={settingsNewPassword}
                      onChange={(event) => setSettingsNewPassword(event.target.value)}
                      placeholder="Enter new password"
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className="app-settings-eye"
                      aria-label={settingsShowNew ? "Hide password" : "Show password"}
                      aria-pressed={settingsShowNew}
                      onClick={() => setSettingsShowNew((open) => !open)}
                    >
                      <img src={settingsEyeIcon} width={18} height={18} alt="" />
                    </button>
                  </span>
                </label>
                <p className="app-settings-hint">Minimum 8 characters.</p>

                <label className="app-settings-field">
                  <span>Confirm new password</span>
                  <span className="app-settings-input">
                    <input
                      type={settingsShowConfirm ? "text" : "password"}
                      value={settingsConfirmPassword}
                      onChange={(event) => setSettingsConfirmPassword(event.target.value)}
                      placeholder="Re-enter new password"
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className="app-settings-eye"
                      aria-label={settingsShowConfirm ? "Hide password" : "Show password"}
                      aria-pressed={settingsShowConfirm}
                      onClick={() => setSettingsShowConfirm((open) => !open)}
                    >
                      <img src={settingsEyeIcon} width={18} height={18} alt="" />
                    </button>
                  </span>
                </label>

                <button className="app-settings-primary" type="button" onClick={updateAccountPassword}>
                  Update password
                </button>
              </section>

              <section className="app-settings-card app-settings-card-danger" aria-labelledby="app-settings-delete-title">
                <div className="app-settings-card-head app-settings-card-head-danger">
                  <img src={settingsTrashIcon} width={20} height={20} alt="" />
                  <h2 id="app-settings-delete-title">Delete Account</h2>
                </div>
                <p className="app-settings-lead">
                  Once you delete your account, there is no going back. All your vehicle listings,
                  test drive requests, and account data will be permanently removed.
                </p>
                <button className="app-settings-danger" type="button" onClick={deleteAccount}>
                  Delete Account
                </button>
              </section>

              {settingsMessage && (
                <p
                  className={
                    settingsMessageTone === "success"
                      ? "app-settings-note app-settings-note-success"
                      : "app-settings-note app-settings-note-error"
                  }
                  role="status"
                >
                  {settingsMessage}
                </p>
              )}
            </div>
          ) : screen === "my-favourites" ? (
            <div className="favourites-page">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title favourites-title">My Favourite</h1>
              </div>

              <section className="favourites-intro" aria-labelledby="favourites-intro-title">
                <div className="favourites-intro-copy">
                  <h2 id="favourites-intro-title">Your saved vehicles</h2>
                  <p>
                    Keep your favourites in one place. Tap the heart on a vehicle to save or remove it.
                  </p>
                </div>
                <p className="favourites-count">
                  {favouriteListings.length === 1
                    ? "1 saved vehicle"
                    : `${favouriteListings.length} saved vehicles`}
                </p>
              </section>

              {favouriteListings.length > 0 ? (
                <div className="favourites-list list">
                  {favouriteListings.map((car) => renderVehicleCard(car))}
                </div>
              ) : (
                <p className="favourites-empty">
                  No saved vehicles yet. Browse listings and tap the heart to add favourites here.
                </p>
              )}
            </div>
          ) : screen === "my-profile" ? (
            <div className="my-profile">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title">My Profile</h1>
              </div>

              <section className="profile-hero" aria-label="Account summary">
                <img className="profile-hero-avatar" src={profilePhoto} width={56} height={56} alt="" />
                <div className="profile-hero-copy">
                  <h2>{profileFullName || "Your name"}</h2>
                  <p>{profileEmail || "Add your email"}</p>
                  <span className="profile-role">Buyer</span>
                </div>
              </section>

              <section className="profile-form-card" aria-label="Manage your personal data">
                <h2>Manage your personal data</h2>

                <label className="profile-field">
                  <span>Full Name or Company Name</span>
                  <input
                    type="text"
                    value={profileFullName}
                    onChange={(event) => setProfileFullName(event.target.value)}
                    aria-label="Full name or company name"
                  />
                </label>

                <label className="profile-field">
                  <span>Email Address</span>
                  <input
                    type="email"
                    value={profileEmail}
                    onChange={(event) => setProfileEmail(event.target.value)}
                    aria-label="Email address"
                  />
                </label>

                <label className="profile-field">
                  <span>Phone Number</span>
                  <input
                    type="tel"
                    value={profilePhone}
                    onChange={(event) => setProfilePhone(event.target.value)}
                    placeholder="Enter phone number"
                    aria-label="Phone number"
                  />
                </label>

                <label className="profile-field">
                  <span>Gender</span>
                  <span className="simple-select">
                    <select
                      value={profileGender}
                      onChange={(event) => setProfileGender(event.target.value)}
                      aria-label="Gender"
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                    <IconChevronDown />
                  </span>
                </label>

                <label className="profile-field">
                  <span>Date of Birth</span>
                  <span className="profile-date">
                    <input
                      type="date"
                      value={profileBirthDate}
                      onChange={(event) => setProfileBirthDate(event.target.value)}
                      aria-label="Date of birth"
                    />
                    <img src={calendarIcon} width={16} height={16} alt="" />
                  </span>
                </label>

                <label className="profile-field">
                  <span>Address</span>
                  <input
                    type="text"
                    value={profileAddress}
                    onChange={(event) => {
                      setProfileMapCoords(null);
                      setProfileAddress(event.target.value);
                    }}
                    placeholder="Enter address"
                    aria-label="Address"
                  />
                </label>

                <label className="profile-field">
                  <span>City</span>
                  <input
                    type="text"
                    value={profileCity}
                    onChange={(event) => {
                      setProfileMapCoords(null);
                      setProfileCity(event.target.value);
                    }}
                    placeholder="Location"
                    aria-label="City"
                  />
                </label>

                <label className="profile-field">
                  <span>Zip Code</span>
                  <input
                    type="text"
                    value={profileZip}
                    onChange={(event) => {
                      setProfileMapCoords(null);
                      setProfileZip(event.target.value);
                    }}
                    placeholder="Enter zip code"
                    aria-label="Zip code"
                  />
                </label>

                <label className="profile-field">
                  <span>Country</span>
                  <input
                    type="text"
                    value={profileCountry}
                    onChange={(event) => {
                      setProfileMapCoords(null);
                      setProfileCountry(event.target.value);
                    }}
                    aria-label="Country"
                  />
                </label>

                <div className="profile-map">
                  <iframe
                    className="profile-map-frame"
                    title="Profile location map"
                    src={profileMapSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                <button className="profile-location-btn" type="button" onClick={useCurrentLocation}>
                  <IconPinSmall />
                  Use my current location
                </button>

                <button className="profile-save-btn" type="button" onClick={saveProfileChanges}>
                  Save Changes
                </button>
                {profileSavedNote && <p className="profile-saved-note">Profile changes saved.</p>}
              </section>
            </div>
          ) : screen === "search-hub" ? (
            <div className="search-hub">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title">Search</h1>
              </div>

              <label className="hub-search">
                <img src={searchNavIcon} width={16} height={16} alt="" />
                <input
                  type="search"
                  value={hubQuery}
                  onChange={(event) => onHubSearchChange(event.target.value)}
                  onKeyDown={onHubSearchKeyDown}
                  placeholder="Search brand, model, keyword..."
                  aria-label="Search brand, model, keyword"
                />
              </label>

              <p className="hub-section-label">Search destinations</p>

              <div className="hub-destinations">
                {filteredDestinations.map((item) => (
                  <button
                    key={item.id}
                    className="hub-card"
                    type="button"
                    onClick={() => openDestination(item.id)}
                  >
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
          ) : screen === "comparisons" ? (
            <div className="comparisons">
              <div className="comparisons-head">
                <div className="search-hub-top">
                  <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                    <IconChevronLeft />
                  </button>
                  <h1 className="search-hub-title">Comparisons</h1>
                </div>

                <div className="compare-summary">
                  <div className="compare-summary-row">
                    <span className="compare-summary-icon" aria-hidden="true">
                      <img src={compareIcon} width={24} height={24} alt="" />
                    </span>
                    <p className="compare-summary-title">
                      {compareVehicles.length} vehicle{compareVehicles.length === 1 ? "" : "s"} selected
                    </p>
                  </div>
                  <p className="compare-summary-copy">
                    Compare your selected vehicles side by side, two at a time.
                  </p>
                  {compareLimitMessage && (
                    <p className="compare-limit-note" role="status">
                      {compareLimitMessage}
                    </p>
                  )}
                  {compareVehicles.length > 0 && (
                    <div className="compare-vehicle-nos" aria-label="Vehicle number">
                      <span className="compare-vehicle-nos-label">Vehicle no:</span>
                      <div className="compare-vehicle-nos-list">
                        {compareVehicles.map((car, index) => (
                          <button
                            key={car.id}
                            className={
                              index === comparePage
                                ? "compare-vehicle-no compare-vehicle-no-active"
                                : "compare-vehicle-no"
                            }
                            type="button"
                            aria-label={`Go to vehicle ${index + 1}`}
                            aria-current={index === comparePage ? "true" : undefined}
                            onClick={() => goToComparePage(index)}
                          >
                            {index + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {compareVehicles.length === 0 ? (
                <p className="hub-empty">No vehicles selected for comparison.</p>
              ) : (
                <div
                  className="compare-board"
                  ref={compareScrollRef}
                  onScroll={onCompareScroll}
                >
                  <div
                    className="compare-table"
                    style={{ width: `${compareVehicles.length * 168}px` }}
                  >
                    <div className="compare-table-row">
                      {compareVehicles.map((car) => (
                        <div className="compare-col compare-vehicle-slot" key={`head-${car.id}`}>
                          <div className="compare-thumb-wrap">
                            <img className="compare-thumb" src={car.image} alt={car.name} />
                            <button
                              className="compare-remove"
                              type="button"
                              aria-label={`Remove ${car.name}`}
                              onClick={(event) => {
                                event.stopPropagation();
                                event.preventDefault();
                                removeCompareVehicle(car.id);
                              }}
                            >
                              <IconClose />
                            </button>
                          </div>
                          <h2>{car.name}</h2>
                          <p className="compare-trim">{car.trim}</p>
                          <p className="compare-price">{chf(car.price)}</p>
                          <p className="compare-tax">incl. tax and VAT</p>
                        </div>
                      ))}
                    </div>
                    {COMPARE_SECTIONS.map((section) => (
                      <div className="compare-section-block" key={section.title}>
                        <div className="compare-table-row">
                          {compareVehicles.map((car, carIndex) => (
                            <div
                              className="compare-col compare-section-title"
                              key={`${car.id}-${section.title}-label`}
                            >
                              {carIndex === 0 ? section.title : "\u00a0"}
                            </div>
                          ))}
                        </div>
                        {section.fields.map((field) => (
                          <div className="compare-table-row" key={field.key}>
                            {compareVehicles.map((car) => (
                              <div
                                className="compare-col compare-row-value"
                                key={`${car.id}-${field.key}`}
                              >
                                {car[field.key]}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : screen === "vehicle-dealers" ? (
            <div className="vehicle-dealers">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title">Vehicle Dealers</h1>
              </div>

              <label className="hub-search dealers-search">
                <img src={pinIcon} width={12} height={16} alt="" />
                <input
                  type="search"
                  value={dealerLocation}
                  onChange={(event) => setDealerLocation(event.target.value)}
                  placeholder="Enter postal code or city (e.g. 8001 Zürich)..."
                  aria-label="Enter postal code or city"
                />
              </label>

              <div className="dealers-intro">
                <h2>Certified Dealers in Switzerland</h2>
                <p>Find partner showrooms and garages nearby</p>
              </div>

              <div className="dealers-list">
                {visibleDealers.map((dealer) => (
                  <article className="dealer-card" key={dealer.id}>
                    <div className="dealer-card-main">
                      <span className="dealer-avatar" aria-hidden="true">
                        <IconDealerAvatar />
                      </span>
                      <div className="dealer-info">
                        <div className="dealer-info-top">
                          <h3>{dealer.name}</h3>
                          {dealer.verified !== false && <span className="dealer-verified">Verified</span>}
                        </div>
                        <p className="dealer-address">{dealer.address}</p>
                      </div>
                    </div>
                    <div className="dealer-actions">
                      <a className="dealer-call" href={`tel:${dealer.phone}`}>
                        <IconPhone />
                        Call
                      </a>
                      <button
                        className="dealer-profile"
                        type="button"
                        onClick={() => openDealerDetails(dealer.id)}
                      >
                        View Profile
                      </button>
                    </div>
                  </article>
                ))}
                {visibleDealers.length === 0 && (
                  <p className="hub-empty">No dealers match this location.</p>
                )}
              </div>
            </div>
          ) : screen === "dealer-details" && selectedDealer ? (
            <div className="dealer-details">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title">Dealer Details</h1>
              </div>

              <section className="dealer-detail-card" aria-label="Dealer profile">
                <div className="dealer-detail-head">
                  <span className="dealer-detail-avatar" aria-hidden="true">
                    <IconDealerAvatar />
                  </span>
                  <div className="dealer-detail-identity">
                    <h2>{selectedDealer.name}</h2>
                    {selectedDealer.verified !== false && (
                      <span className="dealer-detail-verified">
                        <IconVerified />
                        Verified
                      </span>
                    )}
                  </div>
                </div>

                <ul className="dealer-detail-meta">
                  <li>
                    <span className="dealer-detail-meta-icon" aria-hidden="true">
                      <IconMail />
                    </span>
                    <a href={`mailto:${selectedDealer.email}`}>{selectedDealer.email}</a>
                  </li>
                  <li>
                    <span className="dealer-detail-meta-icon" aria-hidden="true">
                      <IconPinSmall />
                    </span>
                    <span>{selectedDealer.address}</span>
                  </li>
                  <li>
                    <span className="dealer-detail-meta-icon" aria-hidden="true">
                      <IconBuilding />
                    </span>
                    <span>{selectedDealer.zipLabel}</span>
                  </li>
                  <li>
                    <span className="dealer-detail-meta-icon" aria-hidden="true">
                      <IconPhone />
                    </span>
                    <a href={`tel:${selectedDealer.phone}`}>{selectedDealer.phone}</a>
                  </li>
                </ul>

                <a className="dealer-detail-call" href={`tel:${selectedDealer.phone}`}>
                  <IconPhone />
                  Call
                </a>
              </section>

              <section className="dealer-detail-vehicles" aria-label="Vehicles from this dealer">
                <div className="dealer-detail-vehicles-head">
                  <h2>Vehicles from this Dealer</h2>
                  <span>
                    {dealerVehicles.length} Vehicle{dealerVehicles.length === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="list">
                  {dealerVehicles.map((car) => renderVehicleCard(car))}
                  {dealerVehicles.length === 0 && (
                    <p className="empty">No vehicles listed for this dealer.</p>
                  )}
                </div>
              </section>
            </div>
          ) : screen === "vehicle-details" && selectedVehicle && selectedVehicleDealer ? (
            (() => {
              const extras = getListingExtras(selectedVehicle, selectedVehicleDealer);
              const year = listingYear(selectedVehicle.date);
              const dealerListings = LISTINGS.filter((car) =>
                selectedVehicleDealer.vehicleIds.includes(car.id),
              ).length;
              const glance = [
                { label: "Mileage", value: selectedVehicle.mileage, icon: specMileageIcon },
                { label: "Power", value: extras.power, icon: specPowerIcon },
                { label: "Fuel Type", value: extras.fuel, icon: specFuelIcon },
                { label: "Gearbox", value: extras.gearbox, icon: specGearboxIcon },
                { label: "Drive", value: extras.drive, icon: specDriveIcon },
                { label: "Year", value: year, icon: specYearIcon },
              ];
              const sellerLocation = `${extras.location} · Seller`;
              const basicRows = [
                { label: "Brand", value: selectedVehicle.brand },
                { label: "Model", value: selectedVehicle.model },
                { label: "Vehicle Type", value: extras.bodyType },
                { label: "Year", value: year },
                { label: "Mileage", value: selectedVehicle.mileage },
                { label: "Color", value: extras.color },
                { label: "Doors", value: extras.doors },
                { label: "Seats", value: extras.seats },
                { label: "Last MFK", value: extras.lastMfk },
                { label: "Condition", value: extras.condition },
                { label: "Accident Vehicle", value: extras.accident },
                { label: "Service History", value: extras.serviceHistory },
                { label: "Warranty", value: extras.warranty },
                { label: "Price", value: chfMoney(selectedVehicle.price) },
                { label: "Location", value: extras.location },
              ];
              const technicalRows = [
                { label: "Engine Displacement", value: extras.engine },
                { label: "Cylinders", value: extras.cylinders },
                { label: "Gears", value: extras.gears },
                { label: "Transmission", value: extras.transmission },
                { label: "Power", value: extras.power },
                { label: "Fuel Type", value: extras.fuel },
                { label: "Drive Type", value: extras.drive },
              ];
              const seatsRows = [
                { label: "Doors", value: extras.doors },
                { label: "Seats", value: extras.seats },
                { label: "Exterior Color", value: extras.color },
                { label: "Interior Color", value: extras.interiorColor },
              ];
              const energyRows = [
                { label: "Fuel Consumption", value: extras.fuelConsumption },
                { label: "CO2 Emissions", value: extras.co2 },
                { label: "Energy Efficiency", value: extras.energyClass },
                { label: "Euro Standard", value: extras.euroStandard },
                { label: "Euro 6 Standard", value: extras.euro6 },
                { label: "Battery Capacity", value: extras.battery },
                { label: "Range", value: extras.range },
              ];
              const weightRows = [
                { label: "Curb Weight", value: extras.curbWeight },
                { label: "Total Weight", value: extras.totalWeight },
                { label: "Braked Towing Capacity", value: extras.towing },
              ];
              const historyRows = [
                { label: "Condition", value: extras.condition },
                { label: "Accident Vehicle", value: extras.accident },
                { label: "Direct Import", value: extras.directImport },
                { label: "Last MFK", value: extras.lastMfk },
                { label: "Warranty", value: extras.warranty },
                { label: "Service History", value: extras.serviceHistory },
              ];

              return (
                <div className="vehicle-details">
                  <div className="search-hub-top vehicle-details-top">
                    <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                      <IconChevronLeft />
                    </button>
                    <h1 className="search-hub-title">Car Details</h1>
                    <div className="vehicle-details-actions">
                      <button
                        className="vehicle-details-icon-btn"
                        type="button"
                        aria-label="Schedule test drive"
                        onClick={openTestDrive}
                      >
                        <img src={calendarIcon} width={18} height={18} alt="" />
                      </button>
                      <button
                        className="vehicle-details-icon-btn"
                        type="button"
                        aria-label="Add to comparisons"
                        aria-pressed={compareIds.includes(selectedVehicle.id)}
                        onClick={() => addVehicleToComparisons(selectedVehicle)}
                      >
                        <img src={compareIcon} width={18} height={18} alt="" />
                      </button>
                      <button
                        className="vehicle-details-icon-btn"
                        type="button"
                        aria-label={saved[selectedVehicle.id] ? "Remove from saved" : "Save vehicle"}
                        aria-pressed={Boolean(saved[selectedVehicle.id])}
                        onClick={() =>
                          setSaved((current) => ({
                            ...current,
                            [selectedVehicle.id]: !current[selectedVehicle.id],
                          }))
                        }
                      >
                        <img src={heartIcon} width={16} height={16} alt="" />
                      </button>
                    </div>
                  </div>

                  <div className="vehicle-details-scroll">
                    <div className="vehicle-details-gallery">
                      <img src={selectedVehicle.image} alt="" />
                      <div className="vehicle-details-dots" aria-hidden="true">
                        {[0, 1, 2, 3].map((index) => (
                          <button
                            key={index}
                            type="button"
                            className={
                              index === vehiclePhotoIndex
                                ? "vehicle-details-dot active"
                                : "vehicle-details-dot"
                            }
                            onClick={() => setVehiclePhotoIndex(index)}
                            tabIndex={-1}
                          />
                        ))}
                      </div>
                    </div>

                    <section className="vehicle-details-panel">
                      <div className="vehicle-details-headline">
                        <div className="vehicle-details-title-row">
                          <h2>{selectedVehicle.name}</h2>
                          <button type="button" className="vehicle-details-share">
                            <IconShareLink />
                            Share Link
                          </button>
                        </div>
                        <p className="vehicle-details-subtitle">
                          {extras.bodyType} · {year} · {extras.gearbox}
                        </p>
                        <p className="vehicle-details-price">{chfMoney(selectedVehicle.price)}</p>
                        <p className="vehicle-details-location">
                          <img src={pinIcon} width={16} height={16} alt="" />
                          {extras.location}
                        </p>
                        <hr className="vehicle-details-divider" />
                        <div className="vehicle-details-dealer-row">
                          <span>
                            <strong>{dealerListings}</strong> Vehicles online
                          </span>
                          <button
                            type="button"
                            className="vehicle-details-dealer-link"
                            onClick={() => openVehicleDealerFromListing(selectedVehicleDealer.id)}
                          >
                            vehicles from this dealer
                            <IconChevronRight />
                          </button>
                        </div>
                      </div>
                    </section>

                    <section className="vehicle-details-gap" aria-hidden="true" />

                    <section className="vehicle-details-panel">
                      <div className="vehicle-details-glance">
                        <h3>Vehicle at a Glance</h3>
                        <div className="vehicle-details-spec-grid">
                          {glance.map((item) => (
                            <article key={item.label} className="vehicle-details-spec">
                              <img src={item.icon} width={20} height={20} alt="" />
                              <span>{item.label}</span>
                              <strong>{item.value}</strong>
                            </article>
                          ))}
                        </div>
                      </div>
                    </section>

                    <section className="vehicle-details-gap" aria-hidden="true" />

                    <section className="vehicle-details-panel">
                      <div className="vehicle-details-seller">
                        <h3>Seller Information</h3>
                        <div className="vehicle-details-seller-card">
                          <span className="dealer-detail-avatar" aria-hidden="true">
                            <IconDealerAvatar />
                          </span>
                          <div className="vehicle-details-seller-copy">
                            <h4>{selectedVehicleDealer.name}</h4>
                            <p>
                              <IconPinSmall />
                              {sellerLocation}
                            </p>
                            <button
                              type="button"
                              className="vehicle-details-dealer-stock"
                              onClick={() => openVehicleDealerFromListing(selectedVehicleDealer.id)}
                            >
                              {dealerListings} vehicles online
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="vehicle-details-panel">
                      <div className="vehicle-details-description">
                        <h3>Description</h3>
                        <p>{extras.description}</p>
                      </div>
                    </section>

                    <section className="vehicle-details-gap" aria-hidden="true" />

                    <section className="vehicle-details-panel vehicle-details-specs">
                      <div>
                        <h3>Vehicle Details</h3>
                        {renderVehicleDetailTable("Basic Data", basicRows)}
                        {renderVehicleDetailTable("Technical Data", technicalRows)}
                        {renderVehicleDetailTable("Seats & Doors", seatsRows)}
                        {renderVehicleDetailTable("Energy Data", energyRows)}
                        {renderVehicleDetailTable("Weight Information", weightRows)}
                        {renderVehicleDetailTable("Vehicle History", historyRows)}
                      </div>
                    </section>

                    <section className="vehicle-details-gap" aria-hidden="true" />
                    <section className="vehicle-details-tail" aria-hidden="true" />
                  </div>

                  <div className="vehicle-details-cta">
                    <div>
                      <span>Total Price</span>
                      <strong>{chfMoney(selectedVehicle.price)}</strong>
                    </div>
                    <a className="vehicle-details-email" href={`mailto:${selectedVehicleDealer.email}`}>
                      <IconMail />
                      Email
                    </a>
                    <a className="vehicle-details-contact" href={`tel:${selectedVehicleDealer.phone}`}>
                      <IconPhone />
                      Contact
                    </a>
                  </div>
                </div>
              );
            })()
          ) : screen === "test-drive" && selectedVehicle ? (
            <div className="test-drive-page">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title">Test Drive</h1>
              </div>

              <p className="test-drive-intro">
                Book a test drive for {selectedVehicle.name}
              </p>

              <section className="test-drive-card" aria-label="Test drive request form">
                <h2>Simple filters</h2>

                <label className="test-drive-field">
                  <span>Full Name</span>
                  <input
                    type="text"
                    value={testDriveName}
                    onChange={(event) => setTestDriveName(event.target.value)}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </label>

                <label className="test-drive-field">
                  <span>Phone No</span>
                  <input
                    type="tel"
                    value={testDrivePhone}
                    onChange={(event) => setTestDrivePhone(event.target.value)}
                    placeholder="Your phone number"
                    autoComplete="tel"
                  />
                </label>

                <label className="test-drive-field">
                  <span>Email</span>
                  <input
                    type="email"
                    value={testDriveEmail}
                    onChange={(event) => setTestDriveEmail(event.target.value)}
                    placeholder="Your email"
                    autoComplete="email"
                  />
                </label>

                <label className="test-drive-field">
                  <span>Date</span>
                  <span className="test-drive-date">
                    <input
                      type="date"
                      value={testDriveDate}
                      onChange={(event) => setTestDriveDate(event.target.value)}
                      aria-label="Select a date"
                    />
                    <img src={calendarIcon} width={16} height={16} alt="" />
                  </span>
                </label>
              </section>

              {testDriveNote && <p className="test-drive-success">{testDriveNote}</p>}

              <button
                className="test-drive-confirm"
                type="button"
                onClick={confirmTestDrive}
                disabled={!testDriveName.trim() || !testDrivePhone.trim() || !testDriveEmail.trim() || !testDriveDate}
              >
                Confirm Test Drive
              </button>
            </div>
          ) : screen === "search-results" ? (
            <div className="search-results">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title">Vehicles</h1>
              </div>

              {renderVehiclesSearchBar({
                value: hubQuery,
                onChange: setHubQuery,
                onFilterClick: openVehiclesFilters,
                filterActive: resultsFiltersOpen,
                filterExpanded: resultsFiltersOpen,
                inputRef: resultsInputRef,
                autoFocus: true,
              })}

              {resultsFiltersOpen &&
                renderVehicleFiltersSection({
                  title: "Filter vehicles",
                  className: "results-filters-panel",
                  showAdvancedLink: true,
                })}

              <section className="results-toolbar" aria-label="Search results">
                <h2 className="results-count">
                  {keywordResults.length} vehicle{keywordResults.length === 1 ? "" : "s"} found
                </h2>
                <label className="simple-sort results-sort">
                  <span>Sort by</span>
                  <span className="simple-select compact">
                    <select
                      value={resultsSort}
                      onChange={(event) => setResultsSort(event.target.value as SimpleSort)}
                      aria-label="Sort by"
                    >
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
              </section>

              <div className="list">
                {keywordResults.map((car) => renderVehicleCard(car))}
                {keywordResults.length === 0 && (
                  <p className="empty">No vehicles match “{hubQuery.trim() || "your search"}”.</p>
                )}
              </div>
            </div>
          ) : screen === "advanced-search" ? (
            <div className="advanced-search">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title">Advanced Search</h1>
              </div>

              <div className="advanced-toolbar">
                <p className="advanced-subtitle">Refine your search with precise filters</p>
                <button className="advanced-reset" type="button" onClick={resetAdvancedFilters}>
                  <IconReset />
                  Reset filters
                </button>
              </div>

              <section className="advanced-card" aria-label="Basic data">
                <h2>Basic Data</h2>

                <label className="simple-field simple-field-full">
                  <span>Keyword search</span>
                  <span className="simple-select">
                    <input
                      type="search"
                      value={advQuery}
                      onChange={(event) => setAdvQuery(event.target.value)}
                      placeholder="Brand, model or keyword..."
                      aria-label="Keyword search"
                    />
                    <IconChevronDown />
                  </span>
                </label>

                <label className="simple-field simple-field-full">
                  <span>Brand</span>
                  <span className="simple-select">
                    <select
                      value={advMake}
                      onChange={(event) => {
                        setAdvMake(event.target.value);
                        setAdvModel("any");
                      }}
                    >
                      <option value="all">Select brand</option>
                      {BRANDS.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>

                <label className="simple-field simple-field-full">
                  <span>Model</span>
                  <span className="simple-select">
                    <select
                      value={advModel}
                      onChange={(event) => setAdvModel(event.target.value)}
                      disabled={advMake === "all"}
                    >
                      <option value="any">{advMake === "all" ? "Select brand first" : "Any model"}</option>
                      {advModels.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>

                <div className="simple-grid">
                  <label className="simple-field">
                    <span>Body type</span>
                    <span className="simple-select">
                      <select value={advBodyType} onChange={(event) => setAdvBodyType(event.target.value)}>
                        {BODY_TYPES.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <IconChevronDown />
                    </span>
                  </label>
                  <label className="simple-field">
                    <span>Condition</span>
                    <span className="simple-select">
                      <select value={advCondition} onChange={(event) => setAdvCondition(event.target.value)}>
                        {CONDITIONS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <IconChevronDown />
                    </span>
                  </label>
                </div>

                <label className="simple-field simple-field-full">
                  <span>Year</span>
                  <span className="simple-select">
                    <select value={advYearRange} onChange={(event) => setAdvYearRange(event.target.value)}>
                      {ADV_YEAR_RANGES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>

                <label className="simple-field simple-field-full">
                  <span>Mileage</span>
                  <span className="simple-select">
                    <select
                      value={advMileageRange}
                      onChange={(event) => setAdvMileageRange(event.target.value)}
                    >
                      {ADV_MILEAGE_RANGES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>

                <div className="simple-grid">
                  <label className="simple-field">
                    <span>Accident vehicle</span>
                    <span className="simple-select">
                      <select value={advAccident} onChange={(event) => setAdvAccident(event.target.value)}>
                        {ACCIDENT_OPTIONS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <IconChevronDown />
                    </span>
                  </label>
                  <label className="simple-field">
                    <span>Fuel</span>
                    <span className="simple-select">
                      <select value={advFuel} onChange={(event) => setAdvFuel(event.target.value)}>
                        {FUELS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <IconChevronDown />
                    </span>
                  </label>
                </div>
              </section>

              <section className="advanced-card" aria-label="Vehicle category">
                <h2>Category</h2>
                <label className="simple-field simple-field-full">
                  <span>Vehicle category</span>
                  <span className="simple-select">
                    <select value={advCategory} onChange={(event) => setAdvCategory(event.target.value)}>
                      {VEHICLE_CATEGORIES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
              </section>

              <section className="advanced-card" aria-label="Prices">
                <h2>Prices</h2>
                <label className="simple-field simple-field-full">
                  <span>Price range</span>
                  <span className="simple-select">
                    <select value={advPriceRange} onChange={(event) => setAdvPriceRange(event.target.value)}>
                      {PRICE_RANGES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
              </section>

              <section className="advanced-card" aria-label="Technical data">
                <h2>Technical Data</h2>
                <label className="simple-field simple-field-full">
                  <span>Drive type</span>
                  <span className="simple-select">
                    <select value={advDriveType} onChange={(event) => setAdvDriveType(event.target.value)}>
                      {DRIVE_TYPES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
                <label className="simple-field simple-field-full">
                  <span>Gears</span>
                  <span className="simple-select">
                    <select value={advGears} onChange={(event) => setAdvGears(event.target.value)}>
                      {GEAR_COUNTS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
                <label className="simple-field simple-field-full">
                  <span>Transmission</span>
                  <span className="simple-select">
                    <select value={advGearbox} onChange={(event) => setAdvGearbox(event.target.value)}>
                      {GEARBOXES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
                <label className="simple-field simple-field-full">
                  <span>Power</span>
                  <span className="simple-select">
                    <select value={advPower} onChange={(event) => setAdvPower(event.target.value)}>
                      {POWER_RANGES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
                <label className="simple-field simple-field-full">
                  <span>Engine displacement</span>
                  <span className="simple-select">
                    <select value={advEngine} onChange={(event) => setAdvEngine(event.target.value)}>
                      {ENGINE_RANGES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
                <label className="simple-field simple-field-full">
                  <span>Cylinders</span>
                  <span className="simple-select">
                    <select value={advCylinders} onChange={(event) => setAdvCylinders(event.target.value)}>
                      {CYLINDER_RANGES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
              </section>

              <section className="advanced-card" aria-label="Electric and hybrid">
                <h2>Electric &amp; Hybrid</h2>
                <label className="simple-field simple-field-full">
                  <span>Range</span>
                  <span className="simple-select">
                    <select value={advEvRange} onChange={(event) => setAdvEvRange(event.target.value)}>
                      {EV_RANGE_RANGES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
                <label className="simple-field simple-field-full">
                  <span>Battery capacity</span>
                  <span className="simple-select">
                    <select value={advBattery} onChange={(event) => setAdvBattery(event.target.value)}>
                      {BATTERY_CAPACITY_RANGES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
              </section>

              <section className="advanced-card" aria-label="Weight information">
                <h2>Weight Information</h2>
                <label className="simple-field simple-field-full">
                  <span>Curb weight</span>
                  <span className="simple-select">
                    <select value={advCurbWeight} onChange={(event) => setAdvCurbWeight(event.target.value)}>
                      {CURB_WEIGHT_RANGES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
                <label className="simple-field simple-field-full">
                  <span>Total weight</span>
                  <span className="simple-select">
                    <select value={advTotalWeight} onChange={(event) => setAdvTotalWeight(event.target.value)}>
                      {TOTAL_WEIGHT_RANGES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
                <label className="simple-field simple-field-full">
                  <span>Braked towing capacity</span>
                  <span className="simple-select">
                    <select value={advTowing} onChange={(event) => setAdvTowing(event.target.value)}>
                      {TOWING_CAPACITY_RANGES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
              </section>

              <section className="advanced-card" aria-label="Exterior color">
                <h2>Exterior color</h2>
                <div className="color-grid">
                  {EXTERIOR_COLORS.map((color) => (
                    <label className="color-option" key={`ext-${color.name}`}>
                      <input
                        type="checkbox"
                        checked={Boolean(advExterior[color.name])}
                        onChange={() =>
                          setAdvExterior((current) => ({
                            ...current,
                            [color.name]: !current[color.name],
                          }))
                        }
                      />
                      <span className="color-swatch" style={{ background: color.hex }} />
                      <span>{color.name}</span>
                    </label>
                  ))}
                </div>
              </section>

              <section className="advanced-card" aria-label="Interior color">
                <h2>Interior color</h2>
                <div className="color-grid">
                  {EXTERIOR_COLORS.map((color) => (
                    <label className="color-option" key={`int-${color.name}`}>
                      <input
                        type="checkbox"
                        checked={Boolean(advInterior[color.name])}
                        onChange={() =>
                          setAdvInterior((current) => ({
                            ...current,
                            [color.name]: !current[color.name],
                          }))
                        }
                      />
                      <span className="color-swatch" style={{ background: color.hex }} />
                      <span>{color.name}</span>
                    </label>
                  ))}
                </div>
              </section>

              <section className="advanced-card" aria-label="Seats and doors">
                <h2>Seats &amp; Doors</h2>
                <label className="simple-field simple-field-full">
                  <span>Seats</span>
                  <span className="simple-select">
                    <select value={advSeats} onChange={(event) => setAdvSeats(event.target.value)}>
                      {SEAT_OPTIONS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
                <label className="simple-field simple-field-full">
                  <span>Doors</span>
                  <span className="simple-select">
                    <select value={advDoors} onChange={(event) => setAdvDoors(event.target.value)}>
                      {DOOR_OPTIONS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
              </section>

              <section className="advanced-card" aria-label="Energy and environment">
                <h2>Energy and Environment</h2>
                <label className="simple-field simple-field-full">
                  <span>Consumption</span>
                  <span className="simple-select">
                    <select
                      value={advConsumption}
                      onChange={(event) => setAdvConsumption(event.target.value)}
                    >
                      {CONSUMPTION_RANGES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
                <label className="simple-field simple-field-full">
                  <span>CO₂ emissions</span>
                  <span className="simple-select">
                    <select value={advCo2} onChange={(event) => setAdvCo2(event.target.value)}>
                      {CO2_RANGES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
                <label className="simple-field simple-field-full">
                  <span>Energy efficiency class</span>
                  <span className="simple-select">
                    <select
                      value={advEnergyClass}
                      onChange={(event) => setAdvEnergyClass(event.target.value)}
                    >
                      {ENERGY_CLASSES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
              </section>

              <section className="advanced-card" aria-label="Euro standard">
                <h2>Euro Standard</h2>
                <label className="simple-field simple-field-full">
                  <span>Euro standard</span>
                  <span className="simple-select">
                    <select value={advEuro} onChange={(event) => setAdvEuro(event.target.value)}>
                      {EURO_STANDARDS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
                <label className="simple-field simple-field-full">
                  <span>Euro 6 standard</span>
                  <span className="simple-select">
                    <select value={advEuro6} onChange={(event) => setAdvEuro6(event.target.value)}>
                      {EURO6_STANDARDS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
              </section>

              <section className="advanced-card" aria-label="Location">
                <h2>Location</h2>
                <label className="simple-field simple-field-full">
                  <span>Postal code / City</span>
                  <span className="simple-select">
                    <input
                      type="text"
                      value={advLocation}
                      onChange={(event) => setAdvLocation(event.target.value)}
                      placeholder="Enter postal code or city"
                      aria-label="Postal code or city"
                    />
                  </span>
                </label>
                <label className="simple-field simple-field-full">
                  <span>Radius</span>
                  <span className="simple-select">
                    <select value={advRadius} onChange={(event) => setAdvRadius(event.target.value)}>
                      {RADIUS_OPTIONS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>
              </section>

              <section className="advanced-card" aria-label="Equipment">
                <div className="advanced-card-head">
                  <h2>Equipment</h2>
                  <button
                    className="equipment-select-all"
                    type="button"
                    onClick={() => {
                      const allSelected = EQUIPMENT_OPTIONS.every((item) => advEquipment[item]);
                      if (allSelected) {
                        setAdvEquipment({});
                        return;
                      }
                      setAdvEquipment(
                        Object.fromEntries(EQUIPMENT_OPTIONS.map((item) => [item, true])),
                      );
                    }}
                  >
                    {EQUIPMENT_OPTIONS.every((item) => advEquipment[item]) ? "Clear all" : "Select all"}
                  </button>
                </div>
                <p className="equipment-copy">
                  Choose the features the vehicle must have · {EQUIPMENT_OPTIONS.length} options
                </p>
                <div className="equipment-list">
                  {EQUIPMENT_OPTIONS.map((item) => (
                    <label className="equipment-option" key={item}>
                      <input
                        type="checkbox"
                        checked={Boolean(advEquipment[item])}
                        onChange={() =>
                          setAdvEquipment((current) => ({
                            ...current,
                            [item]: !current[item],
                          }))
                        }
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </section>

              <div className="advanced-cta">
                <button className="advanced-show" type="button" onClick={showAdvancedResults}>
                  Show {advMatchCount} Vehicles
                </button>
              </div>
            </div>
          ) : screen === "simple-search" ? (
            <div className={`simple-search${simpleView === "filters" ? " simple-search-filters" : ""}`}>
              <div className="search-hub-top">
                <button
                  className="hub-back"
                  type="button"
                  aria-label="Go back"
                  onClick={simpleView === "filters" ? leaveSimpleFilters : goBack}
                >
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title">{simpleView === "filters" ? "Filters" : "Simple Search"}</h1>
              </div>

              {renderVehiclesSearchBar({
                value: simpleQuery,
                onChange: setSimpleQuery,
                showFilter: false,
              })}

              {renderVehicleFiltersSection({
                title: simpleView === "filters" ? "Filter vehicles" : "Simple filters",
              })}

              {simpleView === "filters" ? (
                <button className="filters-apply" type="button" onClick={applySimpleFilters}>
                  Show {simpleResults.length} vehicle{simpleResults.length === 1 ? "" : "s"}
                </button>
              ) : (
                <section className="simple-results" aria-label="Search results">
                  <div className="simple-results-head">
                    <h2>{simpleResults.length} vehicles found</h2>
                    <label className="simple-sort">
                      <span>Sort by</span>
                      <span className="simple-select compact">
                        <select
                          value={simpleSort}
                          onChange={(event) => setSimpleSort(event.target.value as SimpleSort)}
                          aria-label="Sort by"
                        >
                          <option value="price-asc">Price: Low to High</option>
                          <option value="price-desc">Price: High to Low</option>
                        </select>
                        <IconChevronDown />
                      </span>
                    </label>
                  </div>

                  <div className="list">
                    {simpleResults.map((car) => renderVehicleCard(car))}
                    {simpleResults.length === 0 && (
                      <p className="empty">No vehicles match these filters.</p>
                    )}
                  </div>
                </section>
              )}
            </div>
          ) : onProfileTab ? (
            <div className="profile-page">
              <button
                type="button"
                className="profile-account-card"
                aria-label="Open My Profile"
                onClick={openMyProfile}
              >
                <img
                  className="profile-account-photo"
                  src={profilePhoto}
                  width={56}
                  height={56}
                  alt=""
                />
                <div className="profile-account-copy">
                  <strong>{profileHubDisplayName(profileFullName)}</strong>
                  <p>{profileEmail}</p>
                  <span className="profile-role">Buyer</span>
                </div>
              </button>

              <div className="profile-menu">
                <div className="profile-menu-group">
                  {PROFILE_MENU_PRIMARY.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={
                        item.id === "language"
                          ? "profile-menu-item profile-menu-item-language"
                          : "profile-menu-item"
                      }
                      onClick={() => {
                        if (item.id === "favourites") openMyFavourites();
                        if (item.id === "settings") openAppSettings();
                      }}
                    >
                      <span className="profile-menu-label">
                        <img src={item.icon} width={16} height={16} alt="" />
                        <span>{item.label}</span>
                      </span>
                      <span className="profile-menu-trail">
                        {"meta" in item && item.meta ? (
                          <span className="profile-menu-meta">{item.meta}</span>
                        ) : null}
                        <img
                          className="profile-menu-chevron"
                          src={profileMenuChevron}
                          width={6}
                          height={10}
                          alt=""
                        />
                      </span>
                    </button>
                  ))}
                </div>

                <div className="profile-menu-divider" role="presentation" />

                <div className="profile-menu-group">
                  {PROFILE_MENU_SECONDARY.map((item) => (
                    <button key={item.id} type="button" className="profile-menu-item">
                      <span className="profile-menu-label">
                        <img src={item.icon} width={16} height={16} alt="" />
                        <span>{item.label}</span>
                      </span>
                      <img
                        className="profile-menu-chevron"
                        src={profileMenuChevron}
                        width={6}
                        height={10}
                        alt=""
                      />
                    </button>
                  ))}
                  <button type="button" className="profile-menu-item profile-menu-item-danger">
                    <span className="profile-menu-label">
                      <img src={profileMenuSignOut} width={14} height={14} alt="" />
                      <span>Sign Out</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ) : onPlanTab ? (
            <div className="plan-page">
              <div className="plan-subscription-card">
                <div className="plan-subscription-symbol" aria-hidden="true">
                  <img src={planLayersIcon} width={20} height={20} alt="" />
                </div>
                <div className="plan-subscription-copy">
                  <h2>Choose a Subscription Plan</h2>
                  <p>
                    Unlock more vehicle listings, faster visibility, and premium tools to sell faster
                    on AutoPlaza.
                  </p>
                </div>
                <button className="plan-view-btn" type="button">
                  View Plans
                </button>
              </div>

              <section className="plan-why" aria-labelledby="plan-why-title">
                <h3 id="plan-why-title">WHY AUTOPLAZA.CH is the best choice?</h3>
                <p className="plan-why-lead">
                  Full cost certainty, maximum reach in Switzerland and state-of-the-art sales tools.
                </p>
                <ul className="plan-benefits">
                  {PLAN_BENEFITS.map((benefit) => (
                    <li key={benefit.title} className="plan-benefit-card">
                      <img
                        className="plan-benefit-icon"
                        src={planBenefitIcon}
                        width={40}
                        height={40}
                        alt=""
                      />
                      <div className="plan-benefit-copy">
                        <strong>{benefit.title}</strong>
                        <p>{benefit.copy}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          ) : (
          <div className="home">
            <section className="hero-wrap" aria-label="Featured">
              <div
                className="hero"
                onPointerEnter={() => setHeroPaused(true)}
                onPointerLeave={() => {
                  setHeroPaused(false);
                  heroDragRef.current = null;
                }}
                onPointerDown={(event) => {
                  heroDragRef.current = { x: event.clientX, index: heroIndex };
                  setHeroPaused(true);
                }}
                onPointerUp={(event) => {
                  const drag = heroDragRef.current;
                  heroDragRef.current = null;
                  setHeroPaused(false);
                  if (!drag) return;
                  const delta = event.clientX - drag.x;
                  if (Math.abs(delta) < 40) return;
                  setHeroIndex((current) =>
                    delta < 0
                      ? (current + 1) % HERO_SLIDES.length
                      : (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
                  );
                }}
                onPointerCancel={() => {
                  heroDragRef.current = null;
                  setHeroPaused(false);
                }}
              >
                <div
                  className="hero-track"
                  style={{ transform: `translateX(-${heroIndex * 100}%)` }}
                >
                  {HERO_SLIDES.map((slide) => (
                    <article className={`hero-slide tone-${slide.tone ?? "image"}`} key={slide.id}>
                      <img src={slide.image} alt={slide.alt} draggable={false} />
                      <div className="hero-shade" />
                      {slide.tone !== "image" && (
                        <div className="hero-copy">
                          {slide.badge && <span className="hero-badge">{slide.badge}</span>}
                          <h2>
                            {slide.title}
                            {slide.accent ? (
                              <>
                                <br />
                                <span>{slide.accent}</span>
                              </>
                            ) : null}
                          </h2>
                          {slide.subtitle && <p>{slide.subtitle}</p>}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
                <div className="hero-dots" role="tablist" aria-label="Hero slides">
                  {HERO_SLIDES.map((slide, index) => (
                    <button
                      key={slide.id}
                      className={index === heroIndex ? "hero-dot active" : "hero-dot"}
                      type="button"
                      role="tab"
                      aria-label={`Show slide ${index + 1}`}
                      aria-selected={index === heroIndex}
                      onClick={() => setHeroIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section className="search-wrap" aria-label="Vehicle search">
              <div className="search-card" ref={cardRef}>
                <div className="search-head">
                  <h2>VEHICLE SEARCH</h2>
                  <div className="search-head-actions">
                    <button
                      className="search-reset-icon"
                      type="button"
                      aria-label="Reset filters"
                      onClick={resetFilters}
                    >
                      <IconReset />
                    </button>
                    <button
                      className="search-advanced-link"
                      type="button"
                      onClick={openAdvancedSearch}
                    >
                      <IconFilter />
                      Advance Search
                    </button>
                  </div>
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
                    onClick={() => openPopularBrands(item.name)}
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
                {visible.map((car) => renderVehicleCard(car))}
                {visible.length === 0 && (
                  <p className="empty">No listings match these filters. Reset filters to see every car.</p>
                )}
              </div>
            </section>

            <section className="dealers-promo" aria-label="Find your nearest Dealers">
              <h2>Find your nearest Dealers</h2>
              <div className="dealers-promo-art">
                <img src={dealersPromo} alt="" />
              </div>
              <div className="dealers-promo-note">
                <img src={pinIcon} width={12} height={16} alt="" />
                <p>First of all, take a look at what's around the corner from you?</p>
              </div>
              <button className="dealers-promo-btn" type="button" onClick={openVehicleDealers}>
                Find dealers
              </button>
            </section>
          </div>
          )}
        </main>

        {showTabNavigation ? (
          <nav className="nav" aria-label="Primary">
            <div className="nav-items">
              <button
                className={onHomeTab ? "tab tab-active" : "tab"}
                type="button"
                aria-current={onHomeTab ? "page" : undefined}
                onClick={goHome}
              >
                <span className="tab-icon">
                  <img
                    src={onHomeTab ? homeNavActiveIcon : homeNavInactiveIcon}
                    width={16}
                    height={16}
                    alt=""
                  />
                </span>
                <span className="tab-label">Home</span>
              </button>
              <button
                className={onSearchTab ? "tab tab-active" : "tab"}
                type="button"
                aria-current={onSearchTab ? "page" : undefined}
                onClick={openSearchHub}
              >
                <span className="tab-icon">
                  <img
                    src={onSearchTab ? searchNavActiveIcon : searchNavInactiveIcon}
                    width={16}
                    height={16}
                    alt=""
                  />
                </span>
                <span className="tab-label">Search</span>
              </button>
              <button
                className={onPlanTab ? "tab tab-active" : "tab"}
                type="button"
                aria-current={onPlanTab ? "page" : undefined}
                onClick={openPlan}
              >
                <span className="tab-icon">
                  <img
                    src={onPlanTab ? addNavActiveIcon : addNavInactiveIcon}
                    width={16}
                    height={16}
                    alt=""
                  />
                </span>
                <span className="tab-label">Plan</span>
              </button>
              <button
                className={onProfileNavActive ? "tab tab-active" : "tab"}
                type="button"
                aria-current={onProfileNavActive ? "page" : undefined}
                onClick={openProfileTab}
              >
                <span className="tab-icon">
                  <img
                    src={onProfileNavActive ? profileNavActiveIcon : profileNavInactiveIcon}
                    width={16}
                    height={16}
                    alt=""
                  />
                </span>
                <span className="tab-label">Profile</span>
              </button>
            </div>
            <div className="home-bar" />
          </nav>
        ) : (
          <footer className="phone-footer" aria-hidden="true">
            <div className="phone-footer-surface" />
            <div className="phone-footer-indicator" />
          </footer>
        )}
      </div>
    </div>
  );
}
