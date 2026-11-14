import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type RefObject } from "react";
import "./App.css";

import logo from "./assets/logo-figma.png";
import splashLogo from "./assets/splash-logo.png";
import authEyeIcon from "./assets/auth-eye.svg";
import authEyeOffIcon from "./assets/auth-eye-off.svg";
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
import profileMenuCars from "./assets/profile-menu-cars.svg";
import profileMenuTestDrive from "./assets/profile-menu-testdrive.svg";
import profileMenuBilling from "./assets/profile-menu-billing.svg";
import profileMenuLanguage from "./assets/profile-menu-language.svg";
import languageCheckIcon from "./assets/language-check.svg";
import languageRadioIcon from "./assets/language-radio.svg";
import aboutUsIntro from "./assets/about-us-intro.jpg";
import aboutUsStory from "./assets/about-us-story.jpg";
import aboutUsGoal from "./assets/about-us-goal.jpg";
import blogByd from "./assets/blog-byd.webp";
import blogSkodaEpiq from "./assets/blog-skoda-epiq.webp";
import blogFerrari from "./assets/blog-ferrari.webp";
import blogTeslaRoadster from "./assets/blog-tesla-roadster.webp";
import blogSearchIcon from "./assets/blog-search.svg";
import profileMenuChevron from "./assets/profile-menu-chevron.svg";
import profileMenuAbout from "./assets/profile-menu-about.svg";
import profileMenuBlog from "./assets/profile-menu-blog.svg";
import profileMenuContact from "./assets/profile-menu-contact.svg";
import profileMenuTerms from "./assets/profile-menu-terms.svg";
import profileMenuPrivacy from "./assets/profile-menu-privacy.svg";
import profileMenuSignOut from "./assets/profile-menu-signout.svg";
import signOutIcon from "./assets/sign-out-icon.svg";
import contactEmailIcon from "./assets/contact-email.svg";
import contactClockIcon from "./assets/contact-clock.svg";
import contactLocationIcon from "./assets/contact-location.svg";
import { TERMS_CONDITIONS_BODY, TERMS_CONDITIONS_CONTACT } from "./termsConditions";
import { PRIVACY_POLICY_BODY, PRIVACY_POLICY_META } from "./privacyPolicy";
import settingsLockIcon from "./assets/settings-lock.svg";
import settingsEyeIcon from "./assets/settings-eye.svg";
import settingsTrashIcon from "./assets/settings-trash.svg";
import planLayersIcon from "./assets/plan-layers.svg";
import planBenefitFeesIcon from "./assets/plan-benefit-fees.svg";
import planBenefitVisibleIcon from "./assets/plan-benefit-visible.svg";
import planBenefitPaymentIcon from "./assets/plan-benefit-payment.svg";
import subPlanCheckIcon from "./assets/subscription/check.svg";
import subPlanLockSmIcon from "./assets/subscription/lock-sm.svg";
import subPlanLockWhyIcon from "./assets/subscription/lock-why.svg";
import subPlanLockWhyBlueIcon from "./assets/subscription/lock-why-blue.svg";
import subPlanCarIcon from "./assets/subscription/car.svg";
import subPlanCarBlueIcon from "./assets/subscription/car-blue.svg";
import subPlanPaymentIcon from "./assets/subscription/payment.svg";
import subPlanPaymentBlueIcon from "./assets/subscription/payment-blue.svg";
import billingRefreshIcon from "./assets/subscription/refresh.svg";
import paymentStripeIcon from "./assets/payment/stripe.svg";
import paymentPaypalIcon from "./assets/payment/paypal.svg";
import paymentFastpayIcon from "./assets/payment/fastpay.svg";
import paymentSslcommerzIcon from "./assets/payment/sslcommerz.svg";
import sellMenuIcon from "./assets/sell-menu.svg";
import myCarsSearchIcon from "./assets/my-cars-search.svg";
import myCarsSortIcon from "./assets/my-cars-sort.svg";
import addVehicleCameraIcon from "./assets/add-vehicle-camera.svg";
import addVehicleGalleryIcon from "./assets/add-vehicle-gallery.svg";
import addVehicleChevronIcon from "./assets/add-vehicle-chevron.svg";
import vehicleActionViewIcon from "./assets/vehicle-action-view.svg";
import vehicleActionEditIcon from "./assets/vehicle-action-edit.svg";
import vehicleActionPauseIcon from "./assets/vehicle-action-pause.svg";
import vehicleActionSoldIcon from "./assets/vehicle-action-sold.svg";
import vehicleActionDeleteIcon from "./assets/vehicle-action-delete.svg";
import tdrCalendarIcon from "./assets/tdr-calendar.svg";
import tdrDetailProfileIcon from "./assets/tdr-detail-profile.svg";
import tdrDetailMailIcon from "./assets/tdr-detail-mail.svg";
import tdrDetailCallIcon from "./assets/tdr-detail-call.svg";
import tdrDetailCarIcon from "./assets/tdr-detail-car.svg";
import tdrDetailCalendarIcon from "./assets/tdr-detail-calendar.svg";
import tdrDetailRejectIcon from "./assets/tdr-detail-reject.svg";
import tdrDetailAcceptIcon from "./assets/tdr-detail-accept.svg";
import listingPauseIcon from "./assets/listing-pause-icon.svg";
import listingDialogCloseIcon from "./assets/listing-dialog-close.svg";
import listingDeleteAlertIcon from "./assets/listing-delete-alert.svg";
import listingSoldCheckIcon from "./assets/listing-sold-check.svg";
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

const BRAND_DEFAULT_IMAGE: Record<BrandName, string> = {
  BMW: carBmwM4,
  Audi: carAudi,
  Mercedes: carMercedes,
  Toyota: carBmwX5,
  Honda: carBmwX3,
  Ford: carBmw330i,
  Volkswagen: carBmwX1,
  Nissan: carBmwI4,
};

const VEHICLE_CONDITIONS = ["New", "Used", "Demonstration", "Classic"] as const;
const VEHICLE_ACCIDENT = ["No", "Yes", "Repaired"] as const;
const VEHICLE_BODY_TYPES = ["Sedan", "SUV", "Wagon", "Coupe", "Convertible", "Hatchback", "Van"] as const;
const VEHICLE_WARRANTY = ["No warranty", "Factory warranty", "Dealer warranty"] as const;
const VEHICLE_SERVICE = ["Full service history", "Partial", "None", "Unknown"] as const;
const VEHICLE_IMPORT = ["No", "Yes"] as const;
const VEHICLE_FUEL = ["Petrol", "Diesel", "Electric", "Hybrid", "Plug-in Hybrid", "Gas"] as const;
const VEHICLE_DRIVE = ["FWD", "RWD", "AWD", "4x4"] as const;
const VEHICLE_TRANS = ["Automatic", "Manual", "Semi-automatic"] as const;
const VEHICLE_GEARS = ["5", "6", "7", "8", "9", "CVT"] as const;
const VEHICLE_CYLINDERS = ["3", "4", "5", "6", "8", "10", "12"] as const;
const VEHICLE_COLORS = ["Black", "White", "Silver", "Grey", "Blue", "Red", "Green", "Other"] as const;

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
  | "my-cars"
  | "test-drive-requests"
  | "test-drive-request-details"
  | "add-vehicle"
  | "edit-vehicle"
  | "app-settings"
  | "select-language"
  | "about-us"
  | "contact"
  | "terms"
  | "privacy"
  | "blog"
  | "blog-article"
  | "notifications"
  | "subscription-plan"
  | "subscription-billing";
type SimpleSort = "price-asc" | "price-desc";
type BillingInvoice = {
  id: string;
  dateLabel: string;
  amountLabel: string;
  description: string;
  status: "paid";
};
type BillingPlan = {
  name: string;
  amountLabel: string;
  periodSuffix: string;
  periodStart: string;
  nextRenewal: string;
  autoRenewal: "Active" | "Off";
  slotLimit: number;
};
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
  occupation: "",
  birthDate: "",
  address: "",
  city: "",
  zip: "",
  country: "Switzerland",
};

const PROFILE_GENDERS = ["Male", "Female", "Other", "Prefer not to say"];

const PROFILE_CITIES = [
  "Zürich",
  "Bern",
  "Genève",
  "Basel",
  "Lausanne",
  "Luzern",
  "St. Gallen",
  "Winterthur",
];

const PROFILE_COUNTRIES = ["Switzerland", "Germany", "France", "Italy", "Austria"];

function profileHubDisplayName(fullName: string) {
  const parts = fullName.replace(/^Md\.\s*/i, "").trim().split(/\s+/).filter(Boolean);
  return parts.find((part) => part.length > 3) ?? parts[0] ?? "Guest";
}

type AppLanguageCode = "EN" | "DE" | "FR" | "IT";

const APP_LANGUAGES: {
  code: AppLanguageCode;
  label: string;
  subtitle: string;
}[] = [
  { code: "EN", label: "English", subtitle: "English" },
  { code: "DE", label: "German", subtitle: "English" },
  { code: "FR", label: "French", subtitle: "English" },
  { code: "IT", label: "Italian", subtitle: "English" },
];

function appLanguageMenuMeta(code: AppLanguageCode) {
  return code.charAt(0) + code.slice(1).toLowerCase();
}

const PROFILE_MENU_SELLER = [
  { id: "cars", label: "My Cars", icon: profileMenuCars },
  { id: "testdrive", label: "Test Drive Requests", icon: profileMenuTestDrive },
  { id: "billing", label: "Subscription & Billing", icon: profileMenuBilling },
] as const;

const PROFILE_MENU_PRIMARY = [
  { id: "favourites", label: "My Favourites", icon: profileMenuFavourite },
  { id: "settings", label: "App Settings", icon: profileMenuSettings },
  { id: "language", label: "Select Language", icon: profileMenuLanguage },
] as const;

type AccountRole = "buyer" | "seller" | "dealer";
type SellerListingStatus = "active" | "inactive" | "sold";
type MyCarsStatusFilter = "all" | SellerListingStatus;
type TestDriveRequestStatus = "upcoming" | "accepted" | "rejected" | "completed";
type TestDriveRequest = {
  id: string;
  number: number;
  status: TestDriveRequestStatus;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAvatar: string;
  vehicleId: string;
  vehicleTitle: string;
  vehicleSubtitle: string;
  vehicleBrand: string;
  vehicleModel: string;
  vehicleYear: string;
  vehicleImage: string;
  vehiclePrice: number;
  dateLabel: string;
  dateDetailLabel: string;
  driveDateIso: string;
  cancelledByCustomer: boolean;
};

function parseDriveDateEnd(isoOrLabel: string) {
  const isoMatch = isoOrLabel.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    return new Date(
      Number(isoMatch[1]),
      Number(isoMatch[2]) - 1,
      Number(isoMatch[3]),
      23,
      59,
      59,
      999,
    );
  }
  const parsed = new Date(isoOrLabel);
  if (Number.isNaN(parsed.getTime())) return null;
  parsed.setHours(23, 59, 59, 999);
  return parsed;
}

function isTestDriveRequestLocked(request: TestDriveRequest) {
  if (request.status !== "accepted") return false;
  const end = parseDriveDateEnd(request.driveDateIso || request.dateDetailLabel);
  if (!end) return true;
  return Date.now() <= end.getTime();
}

function findActiveVehicleTestDriveLock(
  requests: TestDriveRequest[],
  vehicleId: string,
  excludeRequestId?: string,
) {
  return (
    requests.find(
      (item) =>
        item.vehicleId === vehicleId &&
        item.id !== excludeRequestId &&
        isTestDriveRequestLocked(item),
    ) ?? null
  );
}
type ListingActionDialog =
  | { type: "pause"; vehicleId: string }
  | { type: "sold"; vehicleId: string }
  | { type: "delete"; vehicleId: string; step: "confirm" | "otp" };
type MyCarsSort = "newest" | "oldest" | "price-asc" | "price-desc";
type MyCarsPageSize = 10 | 25 | 50 | 100;

function accountRoleLabel(role: AccountRole) {
  if (role === "dealer") return "Dealer";
  if (role === "seller") return "Seller";
  return "Buyer";
}

function accountRoleBadgeClass(role: AccountRole) {
  if (role === "dealer") return "profile-role profile-role-dealer";
  if (role === "seller") return "profile-role profile-role-seller";
  return "profile-role";
}

const ABOUT_US_SECTIONS = [
  {
    id: "about",
    lead: "About",
    accent: "Us",
    image: aboutUsIntro,
    tall: true,
    body: `Welcome to our automotive platform – your reliable partner for all things related to vehicles, mobility, and driving pleasure. We connect buyers, sellers, and car enthusiasts, creating a modern platform for simple, secure, and transparent vehicle trading. Whether you're looking for a new or used car, financing, leasing, or personalized advice, you'll find everything you need in one place. Our goal is to make buying and selling a car as straightforward as possible. With innovative technologies, a user-friendly platform, and personalized service, we support our customers every step of the way. Trust, quality, and customer satisfaction are our top priorities. That's why we work daily to offer the best digital solution for modern mobility. Find your next vehicle – quickly, easily, and reliably.`,
  },
  {
    id: "story",
    lead: "Our",
    accent: "story",
    image: aboutUsStory,
    tall: false,
    body: `As newcomers to the automotive industry, we founded our platform with a clear vision: to make the vehicle market more modern, transparent, and efficient. What began as an idea fueled by a passion for cars and digital innovation quickly evolved into a platform that seamlessly connects buyers and sellers. From the outset, our goal has been to create a user-friendly solution that prioritizes trust, quality, and service. Even though we are still at the beginning of our journey, we work every day to set new standards in digital vehicle trading. With fresh ideas, cutting-edge technology, and a dedicated team, we aim to actively shape the future of mobility. Our story is just beginning – and we look forward to continuing to grow together with our customers.`,
  },
  {
    id: "goal",
    lead: "Our",
    accent: "goal",
    image: aboutUsGoal,
    tall: false,
    body: `As a young and modern automotive platform, our goal is to make car trading simpler, more transparent, and accessible to everyone. We want to help people quickly and easily find the right vehicle or sell their car safely. We rely on trust, modern technologies, and customer-oriented service. Our focus is on creating a platform that not only connects people with vehicles but is also a reliable partner for all mobility-related questions. Step by step, we are working to offer innovative solutions and help shape the future of digital car trading. We are still at the beginning – but our goal is clear: to build a strong, modern, and trustworthy platform for the next generation of car traders.`,
  },
] as const;

type BlogCategory = "News";

type BlogArticle = {
  id: string;
  date: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  image: string;
  body: string[];
};

const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "byd-paris",
    date: "01.10.2026",
    category: "News",
    title: "BYD stock: New model at the Paris Motor Show",
    excerpt:
      "Riding the wave of a recovery in Chinese automotive stocks, BYD shares rose 4.2 percent on Friday, closing at €8.65. After...",
    image: blogByd,
    body: [
      "Riding the wave of a recovery in Chinese automotive stocks, BYD shares rose 4.2 percent on Friday, closing at €8.65. After a volatile trading year, investors are looking closely at BYD’s next model launches in Europe.",
      "At the Paris Motor Show, BYD presented a new concept that highlights the brand’s push into premium electric mobility. Analysts say strong order books in China and expanding dealer networks in Switzerland could support further growth.",
      "AutoPlaza will continue to track BYD listings as more Swiss dealers add electric models to their showrooms.",
    ],
  },
  {
    id: "skoda-epiq",
    date: "10.10.2026",
    category: "News",
    title: "The new 100% electric Skoda Epiq",
    excerpt:
      'The first 100% electric city SUV crossover – perfect for the city and beyond. Say "Ooooh," feel "Wooow," drive the Epiq. The...',
    image: blogSkodaEpiq,
    body: [
      'The first 100% electric city SUV crossover – perfect for the city and beyond. Say "Ooooh," feel "Wooow," drive the Epiq. The new Skoda Epiq brings a fresh silhouette to urban electric mobility with a focus on comfort, range, and straightforward technology.',
      "Built on a dedicated electric platform, the Epiq combines a compact footprint with generous interior space. Skoda targets young families and commuters who need a practical daily car that still feels modern and refined on longer weekend trips.",
      "Fast charging is a core part of the package: the brand promises competitive DC charging times and clear range figures for mixed city and motorway use. For Swiss buyers, transparent WLTP data and winter-range guidance matter as much as the sticker price.",
      "Design-wise, the Epiq follows Skoda's new electric visual language—clean surfaces, a confident stance, and functional details such as useful storage points and an intuitive cockpit layout.",
      "Skoda positions the Epiq as an accessible entry into its EV line-up within the wider Volkswagen Group portfolio. That means shared engineering standards, proven safety systems, and software updates over the life of the vehicle.",
      "Dealers across Switzerland are preparing demos and pre-order lists as homologation wraps up. AutoPlaza will list Epiq offers as soon as Swiss showrooms confirm pricing and first delivery windows.",
      "If you are comparing city EVs this season, the Epiq is worth a test drive for its balance of space, charging practicality, and everyday usability—whether your priority is school runs, commuting, or Alpine weekend routes.",
    ],
  },
  {
    id: "ferrari-maranello",
    date: "10.10.2026",
    category: "News",
    title: "MADE IN MARANELLO",
    excerpt:
      "Designed, engineered, and manufactured in Maranello. The home of Ferrari expertise and excellence. 100% FERRARI. The electri...",
    image: blogFerrari,
    body: [
      "Designed, engineered, and manufactured in Maranello. The home of Ferrari expertise and excellence. 100% FERRARI. The electric era at Ferrari balances tradition with new performance benchmarks.",
      "Maranello remains the centre for development, testing, and craftsmanship. Each model reflects decades of motorsport experience translated into road-legal engineering.",
      "Collectors and enthusiasts in Switzerland continue to follow Ferrari’s hybrid and electric strategy as new models are announced.",
    ],
  },
  {
    id: "tesla-roadster",
    date: "22.10.2026",
    category: "News",
    title: "Tesla Roadster II unveiled: Quite a leap – thanks to rocket technology",
    excerpt:
      "Tesla unveiled the Roadster II with active ground effect, which presses the car to the road, and cold gas thrusters that allo...",
    image: blogTeslaRoadster,
    body: [
      "Tesla is showing off the Roadster II with active ground effect, which presses the car to the ground, and cold gas thrusters that allow it to fly a little.",
      "“This car really sucks,” said Elon Musk at the unveiling of the Tesla Roadster. He meant it literally: The Tesla Roadster uses a fan to suck itself to the road, generating a g-force of up to 2 g. The ground effect, which race cars have used for decades to generate downforce in fast corners, is artificially generated in this Tesla. With cold gas thrusters, the Roadster can even jump short distances. A prototype demonstrated this at the presentation: This thing is a cross between SpaceX rockets and the 80s TV series Knight Rider.",
      "Elon Musk has announced that production will begin in 2028, with Tesla providing details on its official Roadster website. There will be three variants: the Tesla Roadster Performance, the Thrust, and the Rocket. To reserve a Roadster Performance with active ground effect, an initial deposit of $5,000 is required via credit card, with an additional $45,000 to be transferred within ten days. The final price of the models has not yet been revealed.",
      "Reaching 60 mph in 0.81 seconds, the Thrust Roadster also features a horizontal acceleration booster powered by cold-gas engines. The reservation fee for this model rises to a total of $250,000. The promise: a sprint to 60 mph in under a second. During the presentation, the prototype achieved 0.81 seconds, although this likely refers to 60 mph (96 km/h) rather than 100 km/h.",
      "The Tesla Roadster Rocket, capable of jumping, is produced by the company only “by invitation,” and this version is not approved for public road use. It thus serves as a fantasy or a mobile experiment for a select few of the super-rich. Elon Musk’s team wants to bring a piece of the aerospace company SpaceX to Earth. Designer Franz von Holzhausen has created an angular form whose surfaces are intended to evoke associations with space travel.",
      "Upside Down Thanks to Gravity: Let’s return to reality and put the Tesla Roadster into perspective: Almost two decades after the brand’s first electric car, the Roadster I based on the Lotus Elise, Tesla is promising the Roadster II. The concept car for a successor, shown around ten years ago, was never produced. Instead, it’s now supposed to be a kind of electric Lamborghini with active ground effect.",
      "The claim that it can hang upside down with 2g of gravity is believable. This system is well-known and proven: The McMurtry Speirling first caused a sensation five years ago at the Goodwood Festival of Speed in Great Britain. The Speirling accelerates to 60 mph in 1.4 seconds, and Tesla was clearly inspired by it.",
      "Tesla hasn’t yet revealed exactly how the cold gas engines in the Roadster Thrust and Rocket work – for example, which gas is used. What is clear is that Tesla, through SpaceX, has mastered the microcontrol of rockets. The jumps and rotations around its own axis, which the Roadster Rocket prototype demonstrated at its unveiling and which resembled a skateboard, are real.",
      "Musk: “Where we’re going, we don’t need wheels.” As has often been the case in the past, it’s worth paying attention to what Elon Musk says in passing. He clarifies that, in the long term, the Roadster is the only Tesla that can be driven by humans. Tesla is exclusively focused on autonomous vehicles. The Roadster’s steering wheel operates via steer-by-wire, meaning without a mechanical connection; this technology is considered a prerequisite for either manual or autonomous driving. The Roadster’s top speed could reach Mach 0.5 and even higher, says Elon Musk, which is half the speed of sound, and he adds: “Where we’re going, we don’t need wheels.”",
    ],
  },
];

const PROFILE_MENU_SECONDARY = [
  { id: "about", label: "About Us", icon: profileMenuAbout },
  { id: "blog", label: "Blog", icon: profileMenuBlog },
  { id: "contact", label: "Contact", icon: profileMenuContact },
  { id: "terms", label: "Terms & Conditions", icon: profileMenuTerms },
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
    icon: planBenefitFeesIcon,
  },
  {
    title: "Instantly online & visible",
    copy: "Your listing goes live immediately after checkout. Your vehicles will be presented to thousands of Swiss car buyers.",
    icon: planBenefitVisibleIcon,
  },
  {
    title: "Secure Stripe payment",
    copy: "Pay with all common payment methods: credit card, TWINT, Apple Pay or Google Pay with standard bank encryption.",
    icon: planBenefitPaymentIcon,
  },
] as const;

const PRIVATE_PLAN_FEATURES = [
  "1 vehicle listing",
  "30 days online",
  "Unlimited vehicle photos",
  "Detailed vehicle description",
  "Edit listing at any time",
  "Be contacted by interested buyers",
  "Receive test drive requests",
  "Fair and transparent pricing",
] as const;

const DEALER_PLAN_FEATURES = [
  "Bulk vehicle listings",
  "Priority placement in search results",
  "Dealer profile with branding",
  "Performance analytics dashboard",
  "Dedicated account manager",
  "Unlimited photos per vehicle",
  "Fair and transparent pricing",
] as const;

const DEALER_VEHICLE_OPTIONS = [5, 15, 10, 20, 30, 25, 50, 100, 150, 200, 250, 300, 400, 500, 1000] as const;

const DEALER_PLAN_PRICES: Record<number, number> = {
  5: 49,
  10: 89,
  15: 119,
  20: 149,
  25: 179,
  30: 209,
  50: 299,
  100: 499,
  150: 699,
  200: 899,
  250: 1099,
  300: 1299,
  400: 1599,
  500: 1899,
  1000: 2999,
};

type SubscriptionAudience = "private" | "dealers";

type PaymentGatewayId = "stripe" | "paypal" | "fastpay" | "sslcommerz";
type PaymentGatewayStep = "choose" | "pay";

const PAYMENT_GATEWAYS: {
  id: PaymentGatewayId;
  name: string;
  subtitle: string;
  tone: "stripe" | "paypal" | "fastpay" | "ssl";
  icon: string;
}[] = [
  {
    id: "stripe",
    name: "Stripe",
    subtitle: "Cards, Apple Pay, Google Pay",
    tone: "stripe",
    icon: paymentStripeIcon,
  },
  {
    id: "paypal",
    name: "PayPal",
    subtitle: "Pay with your PayPal balance",
    tone: "paypal",
    icon: paymentPaypalIcon,
  },
  {
    id: "fastpay",
    name: "FastPay",
    subtitle: "Quick mobile wallet checkout",
    tone: "fastpay",
    icon: paymentFastpayIcon,
  },
  {
    id: "sslcommerz",
    name: "SSLCommerz",
    subtitle: "Local cards, bKash & more",
    tone: "ssl",
    icon: paymentSslcommerzIcon,
  },
];

function formatDealerPrice(count: number) {
  const amount = DEALER_PLAN_PRICES[count] ?? Math.round(count * 8.9);
  return amount.toFixed(2);
}

const DEMO_BILLING_PLAN: BillingPlan = {
  name: "DEALER PRO",
  amountLabel: "CHF 200.00",
  periodSuffix: "/ 30 days",
  periodStart: "Oct 5, 2026",
  nextRenewal: "Nov 5, 2026",
  autoRenewal: "Active",
  slotLimit: 200,
};

const DEMO_BILLING_INVOICES: BillingInvoice[] = [
  {
    id: "YZA80AMK-0001",
    dateLabel: "Oct 5, 2026",
    amountLabel: "CHF 200.00",
    description: "1 × DEALER PRO (at CHF 200.00 / 30 days)",
    status: "paid",
  },
  {
    id: "YZA32AMK-01251",
    dateLabel: "Oct 5, 2026",
    amountLabel: "CHF 200.00",
    description: "1 × DEALER PRO (at CHF 200.00 / 30 days)",
    status: "paid",
  },
];

function formatBillingDateLabel(date = new Date()) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function addBillingDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function formatCardNumberInput(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, "$1 ")
    .trim();
}

function formatCardExpiryInput(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

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

type ListingDetailOverride = Partial<{
  bodyType: string;
  gearbox: string;
  fuel: string;
  power: string;
  drive: string;
  description: string;
  color: string;
  doors: string;
  seats: string;
  condition: string;
  accident: string;
  directImport: string;
  serviceHistory: string;
  warranty: string;
  lastMfk: string;
  fuelConsumption: string;
  co2: string;
  euroStandard: string;
  battery: string;
  range: string;
  curbWeight: string;
  totalWeight: string;
  towing: string;
  engine: string;
  cylinders: string;
  gears: string;
  transmission: string;
  equipment: Record<string, boolean>;
}>;

function getListingExtras(
  car: Listing,
  dealer: Dealer,
  override?: ListingDetailOverride | null,
) {
  const cantonName =
    CANTONS.find((item) => item.value === car.canton)?.label.replace(/\s*\([^)]*\)/, "").trim() ??
    car.canton;
  const year = listingYear(car.date);
  const sporty = car.name.includes("M") || car.name.includes("RS") || car.name.includes("AMG");
  const hybrid = !sporty;
  const base = {
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
    warranty: "3 months",
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
  if (!override) return base;
  const merged = { ...base };
  (Object.keys(override) as (keyof ListingDetailOverride)[]).forEach((key) => {
    if (key === "equipment") return;
    const value = override[key];
    if (typeof value === "string" && value.trim()) {
      (merged as Record<string, string>)[key] = value;
    }
  });
  return merged;
}

function matchVehicleOption(value: string, options: readonly string[]) {
  if (!value) return "";
  if (options.includes(value)) return value;
  const lower = value.toLowerCase();
  return options.find((item) => lower.includes(item.toLowerCase()) || item.toLowerCase().includes(lower)) ?? "";
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

function BlogArticleCard({
  article,
  compact = false,
  onSelect,
}: {
  article: BlogArticle;
  compact?: boolean;
  onSelect: () => void;
}) {
  return (
    <article
      className={compact ? "blog-card blog-card-compact" : "blog-card"}
      tabIndex={0}
      role="link"
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
    >
      <div className="blog-card-figure">
        <img className="blog-card-photo" src={article.image} alt="" />
      </div>
      <div className="blog-card-body">
        <p className="blog-card-meta">
          <img src={calendarIcon} width={14} height={14} alt="" />
          <time dateTime={article.date.replace(/\./g, "-")}>{article.date}</time>
          <span className="blog-card-category">· {article.category}</span>
        </p>
        <h3 className="blog-card-title">{article.title}</h3>
        <p className="blog-card-excerpt">{article.excerpt}</p>
        <span className="blog-card-read">
          Read more
          <IconChevronRight />
        </span>
      </div>
    </article>
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

function PasswordVisibilityButton({
  visible,
  onToggle,
}: {
  visible: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className="app-settings-eye auth-eye-btn"
      aria-label={visible ? "Hide password" : "Show password"}
      aria-pressed={visible}
      onMouseDown={(event) => event.preventDefault()}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onToggle();
      }}
    >
      <img
        src={visible ? authEyeOffIcon : authEyeIcon}
        width={18}
        height={18}
        alt=""
        aria-hidden="true"
      />
    </button>
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
  const [showSplash, setShowSplash] = useState(true);
  const [splashLeaving, setSplashLeaving] = useState(false);
  const [splashKey, setSplashKey] = useState(0);
  const [authGate, setAuthGate] = useState<
    | "login"
    | "register"
    | "personal-info"
    | "buy-subscription"
    | "forgot"
    | "reset-code"
    | "reset-password"
    | "app"
  >("login");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authShowPassword, setAuthShowPassword] = useState(false);
  const [authRememberMe, setAuthRememberMe] = useState(false);
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [registerShowPassword, setRegisterShowPassword] = useState(false);
  const [registerShowConfirm, setRegisterShowConfirm] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotNote, setForgotNote] = useState<string | null>(null);
  const [forgotOtpCode, setForgotOtpCode] = useState("");
  const [forgotOtpInput, setForgotOtpInput] = useState("");
  const [forgotOtpSeconds, setForgotOtpSeconds] = useState(180);
  const [subscriptionAudience, setSubscriptionAudience] =
    useState<SubscriptionAudience>("private");
  const [dealerVehicleCount, setDealerVehicleCount] = useState(10);
  const [subscriptionNote, setSubscriptionNote] = useState<string | null>(null);
  const [activeSubscription, setActiveSubscription] = useState<string | null>(null);
  const [billingPlan, setBillingPlan] = useState<BillingPlan | null>(DEMO_BILLING_PLAN);
  const [billingInvoices, setBillingInvoices] =
    useState<BillingInvoice[]>(DEMO_BILLING_INVOICES);
  const [billingNote, setBillingNote] = useState<string | null>(null);
  const [accountRole, setAccountRole] = useState<AccountRole>("buyer");
  const [sellerSlotLimit, setSellerSlotLimit] = useState(0);
  const [sellerListingIds, setSellerListingIds] = useState<string[]>([]);
  const [sellerListingStatus, setSellerListingStatus] = useState<
    Record<string, SellerListingStatus>
  >({});
  const [sellPageSize, setSellPageSize] = useState<1 | 2 | 3>(1);
  const [sellPage, setSellPage] = useState(1);
  const [sellMenuOpenId, setSellMenuOpenId] = useState<string | null>(null);
  const [ownerDetailsMenuOpen, setOwnerDetailsMenuOpen] = useState(false);
  const [listingActionDialog, setListingActionDialog] = useState<ListingActionDialog | null>(
    null,
  );
  const [listingDeleteOtpCode, setListingDeleteOtpCode] = useState("");
  const [listingDeleteOtpInput, setListingDeleteOtpInput] = useState("");
  const [listingDeleteOtpError, setListingDeleteOtpError] = useState<string | null>(null);
  const [sellNote, setSellNote] = useState<string | null>(null);
  const [myCarsQuery, setMyCarsQuery] = useState("");
  const [myCarsStatus, setMyCarsStatus] = useState<MyCarsStatusFilter>("all");
  const [myCarsSort, setMyCarsSort] = useState<MyCarsSort>("newest");
  const [myCarsPageSize, setMyCarsPageSize] = useState<MyCarsPageSize>(25);
  const [myCarsPage, setMyCarsPage] = useState(1);
  const [myCarsNote, setMyCarsNote] = useState<string | null>(null);
  const [customListings, setCustomListings] = useState<Listing[]>([]);
  const [listingDetailOverrides, setListingDetailOverrides] = useState<
    Record<string, ListingDetailOverride>
  >({});
  const [editingVehicleId, setEditingVehicleId] = useState<string | null>(null);
  const [editVehicleReturnTo, setEditVehicleReturnTo] = useState<"my-cars" | "vehicle-details">(
    "my-cars",
  );
  const [addVehicleError, setAddVehicleError] = useState<string | null>(null);
  const [avTitle, setAvTitle] = useState("");
  const [avBrand, setAvBrand] = useState<BrandName | "">("");
  const [avModel, setAvModel] = useState("");
  const [avYear, setAvYear] = useState("2014");
  const [avCondition, setAvCondition] = useState("");
  const [avMileage, setAvMileage] = useState("120000");
  const [avAccident, setAvAccident] = useState("");
  const [avBody, setAvBody] = useState("");
  const [avMfk, setAvMfk] = useState("");
  const [avWarranty, setAvWarranty] = useState("No warranty");
  const [avService, setAvService] = useState("");
  const [avImport, setAvImport] = useState("");
  const [avAbout, setAvAbout] = useState("");
  const [avPrice, setAvPrice] = useState("");
  const [avFuel, setAvFuel] = useState("");
  const [avDrive, setAvDrive] = useState("");
  const [avTrans, setAvTrans] = useState("");
  const [avGears, setAvGears] = useState("");
  const [avHp, setAvHp] = useState("150");
  const [avCc, setAvCc] = useState("2000");
  const [avCylinders, setAvCylinders] = useState("");
  const [avReach, setAvReach] = useState("");
  const [avBattery, setAvBattery] = useState("");
  const [avEmptyWeight, setAvEmptyWeight] = useState("");
  const [avTotalWeight, setAvTotalWeight] = useState("");
  const [avTowing, setAvTowing] = useState("");
  const [avColor, setAvColor] = useState("");
  const [avSeats, setAvSeats] = useState("5");
  const [avDoors, setAvDoors] = useState("4");
  const [avConsumption, setAvConsumption] = useState("");
  const [avCo2, setAvCo2] = useState("");
  const [avEuro, setAvEuro] = useState("");
  const [avEquipment, setAvEquipment] = useState<Record<string, boolean>>({});
  const [avMainPhoto, setAvMainPhoto] = useState<string | null>(null);
  const [avExtraPhotos, setAvExtraPhotos] = useState<(string | null)[]>([null, null, null]);
  const avMainPhotoInputRef = useRef<HTMLInputElement | null>(null);
  const avExtraPhotoInputRefs = useRef<Array<HTMLInputElement | null>>([null, null, null]);
  const canSell = accountRole === "seller" || accountRole === "dealer";
  const isSeller = canSell;
  const [paymentGatewayOpen, setPaymentGatewayOpen] = useState(false);
  const [paymentGatewayStep, setPaymentGatewayStep] = useState<PaymentGatewayStep>("choose");
  const [selectedPaymentGateway, setSelectedPaymentGateway] =
    useState<PaymentGatewayId | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [payCardName, setPayCardName] = useState("");
  const [payCardNumber, setPayCardNumber] = useState("");
  const [payCardExpiry, setPayCardExpiry] = useState("");
  const [payCardCvc, setPayCardCvc] = useState("");
  const [payPaypalEmail, setPayPaypalEmail] = useState("");
  const [payPaypalPassword, setPayPaypalPassword] = useState("");
  const [payFastpayMobile, setPayFastpayMobile] = useState("");
  const [payFastpayPin, setPayFastpayPin] = useState("");
  const [paySslMobile, setPaySslMobile] = useState("");
  const [paySslMethod, setPaySslMethod] = useState("card");
  const [resetPassword, setResetPassword] = useState("");
  const [resetConfirmPassword, setResetConfirmPassword] = useState("");
  const [resetShowPassword, setResetShowPassword] = useState(false);
  const [resetShowConfirm, setResetShowConfirm] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
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
  const [selectedTestDriveRequestId, setSelectedTestDriveRequestId] = useState<string | null>(
    null,
  );
  const [testDriveRequestNote, setTestDriveRequestNote] = useState<string | null>(null);
  const [testDriveRequests, setTestDriveRequests] = useState<TestDriveRequest[]>(() => {
    const bmw = LISTINGS.find((car) => car.id === "bmw-m4");
    const bmwImage = bmw?.image ?? carBmwM4;
    return [
      {
        id: "tdr-demo-1",
        number: 1,
        status: "upcoming",
        customerName: "Md.Asadujjaman Mahfuz",
        customerEmail: "mdasadujjaman101@gmail.com",
        customerPhone: "01953512253",
        customerAvatar: profilePhoto,
        vehicleId: "bmw-m4",
        vehicleTitle: "BMWW",
        vehicleSubtitle: "BMW - BMW M5",
        vehicleBrand: "BMW",
        vehicleModel: "BMW M5",
        vehicleYear: "2004",
        vehicleImage: bmwImage,
        vehiclePrice: 731,
        dateLabel: "28 Nov 2026",
        dateDetailLabel: "28 November 2026",
        driveDateIso: "2026-11-28",
        cancelledByCustomer: false,
      },
      {
        id: "tdr-demo-2",
        number: 2,
        status: "upcoming",
        customerName: "Sara Keller",
        customerEmail: "sara.keller@example.com",
        customerPhone: "079 555 12 34",
        customerAvatar: profilePhoto,
        vehicleId: "bmw-m4",
        vehicleTitle: "BMW M4",
        vehicleSubtitle: "BMW - M4 Competition xDrive",
        vehicleBrand: "BMW",
        vehicleModel: "M4 Competition xDrive",
        vehicleYear: listingYear(bmw?.date ?? "02.2020"),
        vehicleImage: bmwImage,
        vehiclePrice: bmw?.price ?? 15000,
        dateLabel: "05 Dec 2026",
        dateDetailLabel: "05 December 2026",
        driveDateIso: "2026-12-05",
        cancelledByCustomer: false,
      },
    ];
  });
  const [profileFullName, setProfileFullName] = useState(PROFILE_DEFAULTS.fullName);
  const [profileEmail, setProfileEmail] = useState(PROFILE_DEFAULTS.email);
  const [profilePhone, setProfilePhone] = useState(PROFILE_DEFAULTS.phone);
  const [profileGender, setProfileGender] = useState(PROFILE_DEFAULTS.gender);
  const [profileOccupation, setProfileOccupation] = useState(PROFILE_DEFAULTS.occupation);
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
  const [settingsOtpOpen, setSettingsOtpOpen] = useState(false);
  const [settingsOtpPurpose, setSettingsOtpPurpose] = useState<"password" | "delete" | null>(null);
  const [settingsOtpCode, setSettingsOtpCode] = useState("");
  const [settingsOtpInput, setSettingsOtpInput] = useState("");
  const [settingsOtpError, setSettingsOtpError] = useState<string | null>(null);
  const [settingsPendingNewPassword, setSettingsPendingNewPassword] = useState("");
  const [appLanguageCode, setAppLanguageCode] = useState<AppLanguageCode>("EN");
  const [contactFullName, setContactFullName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactNote, setContactNote] = useState<string | null>(null);
  const [contactNoteTone, setContactNoteTone] = useState<"success" | "error">("success");
  const [signOutOpen, setSignOutOpen] = useState(false);
  const [blogQuery, setBlogQuery] = useState("");
  const [blogCategory, setBlogCategory] = useState<"all" | "news">("all");
  const [selectedBlogArticleId, setSelectedBlogArticleId] = useState<string | null>(null);
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
  const mainScrollRef = useRef<HTMLElement>(null);
  const screenRef = useRef<Screen>(screen);
  screenRef.current = screen;

  useEffect(() => {
    document.documentElement.lang = "en";
  }, [appLanguageCode]);

  useEffect(() => {
    setShowSplash(true);
    setSplashLeaving(false);
    const fadeTimer = window.setTimeout(() => setSplashLeaving(true), 5200);
    const hideTimer = window.setTimeout(() => {
      setShowSplash(false);
      setAuthGate("login");
    }, 5600);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [splashKey]);

  useEffect(() => {
    mainScrollRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [screen]);

  useEffect(() => {
    if (authGate === "app" || showSplash) return;
    const node = document.querySelector(".auth-page");
    if (node instanceof HTMLElement) node.scrollTo({ top: 0, behavior: "auto" });
  }, [authGate, showSplash]);

  useEffect(() => {
    if (authGate !== "reset-code") return;
    const timer = window.setInterval(() => {
      setForgotOtpSeconds((seconds) => (seconds <= 0 ? 0 : seconds - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [authGate, forgotOtpCode]);

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
    setOwnerDetailsMenuOpen(false);
    setHistory((stack) => {
      if (stack.length === 0) {
        setScreen("home");
        screenRef.current = "home";
        setTab(
          leaving === "subscription-plan"
            ? "plan"
            : leaving === "my-cars" ||
                leaving === "test-drive-requests" ||
                leaving === "test-drive-request-details" ||
                leaving === "add-vehicle" ||
                leaving === "edit-vehicle" ||
                leaving === "my-favourites" ||
                leaving === "my-profile" ||
                leaving === "app-settings" ||
                leaving === "select-language" ||
                leaving === "about-us" ||
                leaving === "contact" ||
                leaving === "terms" ||
                leaving === "privacy" ||
                leaving === "blog" ||
                leaving === "blog-article" ||
                leaving === "subscription-billing"
              ? "profile"
              : "home",
        );
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
              leaving === "my-cars" ||
              leaving === "test-drive-requests" ||
              leaving === "test-drive-request-details" ||
              leaving === "add-vehicle" ||
              leaving === "edit-vehicle" ||
              leaving === "app-settings" ||
              leaving === "select-language" ||
              leaving === "about-us" ||
              leaving === "contact" ||
              leaving === "terms" ||
              leaving === "privacy" ||
              leaving === "blog" ||
              leaving === "blog-article" ||
              leaving === "subscription-billing"
            ? "profile"
            : leaving === "subscription-plan"
              ? "plan"
              : "home"
          : previous === "my-profile" ||
              previous === "blog" ||
              previous === "blog-article" ||
              previous === "about-us" ||
              previous === "contact" ||
              previous === "terms" ||
              previous === "privacy" ||
              previous === "select-language" ||
              previous === "app-settings" ||
              previous === "my-favourites" ||
              previous === "my-cars" ||
              previous === "test-drive-requests" ||
              previous === "test-drive-request-details" ||
              previous === "add-vehicle" ||
              previous === "edit-vehicle" ||
              previous === "subscription-billing"
            ? "profile"
            : previous === "subscription-plan"
              ? "plan"
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
    setSellMenuOpenId(null);
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

  function openMyCars() {
    setMyCarsQuery("");
    setMyCarsStatus("all");
    setMyCarsSort("newest");
    setMyCarsPageSize(25);
    setMyCarsPage(1);
    setMyCarsNote(null);
    setSellMenuOpenId(null);
    navigateTo("my-cars", "profile");
  }

  function openTestDriveRequests() {
    setMyCarsNote(null);
    navigateTo("test-drive-requests", "profile");
  }

  function openTestDriveRequestDetails(requestId: string) {
    setSelectedTestDriveRequestId(requestId);
    setTestDriveRequestNote(null);
    setMyCarsNote(null);
    navigateTo("test-drive-request-details", "profile");
  }

  function formatTestDriveDateLabel(value: string, style: "short" | "long" = "short") {
    if (!value) return "Date TBD";
    const parsed = new Date(`${value}T12:00:00`);
    if (Number.isNaN(parsed.getTime())) return value;
    return parsed.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: style === "long" ? "long" : "short",
      year: "numeric",
    });
  }

  function acceptTestDriveRequest(requestId: string) {
    const request = testDriveRequests.find((item) => item.id === requestId);
    if (!request || request.status !== "upcoming") return;

    const existingLock = findActiveVehicleTestDriveLock(
      testDriveRequests,
      request.vehicleId,
      requestId,
    );
    if (existingLock) {
      setTestDriveRequestNote(
        `This car is already locked for ${existingLock.customerName} until ${existingLock.dateDetailLabel}.`,
      );
      return;
    }

    setTestDriveRequests((current) =>
      current.map((item) =>
        item.id === requestId ? { ...item, status: "accepted" as const } : item,
      ),
    );
    setTestDriveRequestNote(null);
  }

  function rejectTestDriveRequest(requestId: string) {
    const request = testDriveRequests.find((item) => item.id === requestId);
    if (!request || request.status !== "upcoming") return;

    setTestDriveRequests((current) => current.filter((item) => item.id !== requestId));
    setSelectedTestDriveRequestId(null);
    setTestDriveRequestNote(null);
    setMyCarsNote(`Test drive request #${request.number} was rejected and removed.`);
    if (screenRef.current === "test-drive-request-details") {
      goBack();
    }
  }

  function completeTestDriveRequest(requestId: string) {
    const request = testDriveRequests.find((item) => item.id === requestId);
    if (!request || request.status !== "accepted") return;

    setTestDriveRequests((current) =>
      current.map((item) =>
        item.id === requestId ? { ...item, status: "completed" as const } : item,
      ),
    );
    setSelectedTestDriveRequestId(null);
    setTestDriveRequestNote(null);
    setMyCarsNote(`Test drive #${request.number} marked as completed.`);
    if (screenRef.current === "test-drive-request-details") {
      goBack();
    }
  }

  function resetAddVehicleForm() {
    setAddVehicleError(null);
    setEditingVehicleId(null);
    setEditVehicleReturnTo("my-cars");
    setAvTitle("");
    setAvBrand("");
    setAvModel("");
    setAvYear("2014");
    setAvCondition("");
    setAvMileage("120000");
    setAvAccident("");
    setAvBody("");
    setAvMfk("");
    setAvWarranty("No warranty");
    setAvService("");
    setAvImport("");
    setAvAbout("");
    setAvPrice("");
    setAvFuel("");
    setAvDrive("");
    setAvTrans("");
    setAvGears("");
    setAvHp("150");
    setAvCc("2000");
    setAvCylinders("");
    setAvReach("");
    setAvBattery("");
    setAvEmptyWeight("");
    setAvTotalWeight("");
    setAvTowing("");
    setAvColor("");
    setAvSeats("5");
    setAvDoors("4");
    setAvConsumption("");
    setAvCo2("");
    setAvEuro("");
    setAvEquipment({});
    setAvMainPhoto(null);
    setAvExtraPhotos([null, null, null]);
  }

  function findSellerListingById(vehicleId: string) {
    return (
      customListings.find((car) => car.id === vehicleId) ??
      LISTINGS.find((car) => car.id === vehicleId) ??
      null
    );
  }

  function fillVehicleFormFromListing(car: Listing) {
    const dealer =
      DEALERS.find((item) => item.vehicleIds.includes(car.id)) ?? DEALERS[0];
    const extras = getListingExtras(car, dealer, listingDetailOverrides[car.id]);
    const override = listingDetailOverrides[car.id];
    setAddVehicleError(null);
    setEditingVehicleId(car.id);
    setAvTitle(car.name);
    setAvBrand(car.brand);
    setAvModel(car.model);
    setAvYear(listingYear(car.date));
    setAvCondition(matchVehicleOption(extras.condition, VEHICLE_CONDITIONS));
    setAvMileage(car.mileage.replace(/[^\d]/g, "") || "0");
    setAvAccident(matchVehicleOption(extras.accident, VEHICLE_ACCIDENT));
    setAvBody(matchVehicleOption(extras.bodyType, VEHICLE_BODY_TYPES));
    setAvMfk(extras.lastMfk);
    setAvWarranty(
      matchVehicleOption(extras.warranty, VEHICLE_WARRANTY) ||
        (extras.warranty.toLowerCase().includes("no") ? "No warranty" : "Dealer warranty"),
    );
    setAvService(
      matchVehicleOption(extras.serviceHistory, VEHICLE_SERVICE) ||
        (extras.serviceHistory === "Yes" ? "Full service history" : ""),
    );
    setAvImport(matchVehicleOption(extras.directImport, VEHICLE_IMPORT));
    setAvAbout(extras.description);
    setAvPrice(String(car.price));
    setAvFuel(matchVehicleOption(extras.fuel, VEHICLE_FUEL));
    setAvDrive(matchVehicleOption(extras.drive, VEHICLE_DRIVE));
    setAvTrans(matchVehicleOption(extras.transmission, VEHICLE_TRANS));
    setAvGears(matchVehicleOption(extras.gears, VEHICLE_GEARS));
    setAvHp(extras.power.replace(/[^\d]/g, "") || "150");
    setAvCc(extras.engine.replace(/[^\d]/g, "") || "2000");
    setAvCylinders(matchVehicleOption(extras.cylinders, VEHICLE_CYLINDERS));
    setAvReach(extras.range === "—" ? "" : extras.range.replace(/[^\d]/g, ""));
    setAvBattery(extras.battery === "—" ? "" : extras.battery.replace(/[^\d.]/g, ""));
    setAvEmptyWeight(extras.curbWeight.replace(/[^\d]/g, ""));
    setAvTotalWeight(extras.totalWeight.replace(/[^\d]/g, ""));
    setAvTowing(extras.towing.replace(/[^\d]/g, ""));
    setAvColor(matchVehicleOption(extras.color, VEHICLE_COLORS));
    setAvSeats(extras.seats.replace(/[^\d]/g, "") || "5");
    setAvDoors(extras.doors.replace(/[^\d]/g, "") || "4");
    setAvConsumption(extras.fuelConsumption.replace(/[^\d.]/g, ""));
    setAvCo2(extras.co2.replace(/[^\d]/g, ""));
    setAvEuro(extras.euroStandard);
    setAvEquipment(override?.equipment ?? {});
    setAvMainPhoto(car.image);
    setAvExtraPhotos([null, null, null]);
  }

  function openAddVehicle() {
    setMyCarsNote(null);
    setSellMenuOpenId(null);
    setOwnerDetailsMenuOpen(false);
    resetAddVehicleForm();
    if (sellerListingIds.length >= sellerSlotLimit) {
      setAddVehicleError(
        "No remaining slots on your plan. You can still review the form, then View Plans from Sell to add more listings.",
      );
    }
    navigateTo("add-vehicle", "profile");
  }

  function openEditVehicle(vehicleId: string) {
    const car = findSellerListingById(vehicleId);
    if (!car) return;
    setMyCarsNote(null);
    setSellNote(null);
    setSellMenuOpenId(null);
    setOwnerDetailsMenuOpen(false);
    setEditVehicleReturnTo(
      screenRef.current === "vehicle-details" ? "vehicle-details" : "my-cars",
    );
    fillVehicleFormFromListing(car);
    navigateTo("edit-vehicle", "profile");
  }

  function buildVehicleFormOverride(): ListingDetailOverride {
    const hpDigits = avHp.replace(/[^\d]/g, "");
    const ccDigits = avCc.replace(/[^\d]/g, "");
    return {
      bodyType: avBody || undefined,
      gearbox: avTrans || undefined,
      fuel: avFuel || undefined,
      power: hpDigits ? `${hpDigits} PS` : undefined,
      drive: avDrive || undefined,
      description: avAbout.trim() || undefined,
      color: avColor || undefined,
      doors: avDoors || undefined,
      seats: avSeats || undefined,
      condition: avCondition || undefined,
      accident: avAccident || undefined,
      directImport: avImport || undefined,
      serviceHistory: avService || undefined,
      warranty: avWarranty || undefined,
      lastMfk: avMfk.trim() || undefined,
      fuelConsumption: avConsumption.trim() ? `${avConsumption.trim()} l/100 km` : undefined,
      co2: avCo2.trim() ? `${avCo2.trim()} g/km` : undefined,
      euroStandard: avEuro || undefined,
      battery: avBattery.trim() ? `${avBattery.trim()} kWh` : undefined,
      range: avReach.trim() ? `${avReach.trim()} km` : undefined,
      curbWeight: avEmptyWeight.trim() ? `${Number(avEmptyWeight.replace(/\D/g, "") || 0).toLocaleString("en-US")} kg` : undefined,
      totalWeight: avTotalWeight.trim() ? `${Number(avTotalWeight.replace(/\D/g, "") || 0).toLocaleString("en-US")} kg` : undefined,
      towing: avTowing.trim() ? `${Number(avTowing.replace(/\D/g, "") || 0).toLocaleString("en-US")} kg` : undefined,
      engine: ccDigits ? `${ccDigits} cm³` : undefined,
      cylinders: avCylinders || undefined,
      gears: avGears || undefined,
      transmission: avTrans || undefined,
      equipment: avEquipment,
    };
  }

  function readVehiclePhoto(file: File | undefined, onDone: (url: string) => void) {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") onDone(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function validateVehicleForm() {
    setAddVehicleError(null);
    if (!avBrand) {
      setAddVehicleError("Please select a brand.");
      return null;
    }
    if (!avModel.trim()) {
      setAddVehicleError("Please select or enter a model.");
      return null;
    }
    const priceValue = Number(avPrice.replace(/[^\d.]/g, ""));
    if (!Number.isFinite(priceValue) || priceValue <= 0) {
      setAddVehicleError("Please enter a valid price.");
      return null;
    }
    const title = avTitle.trim() || `${avBrand} ${avModel}`.trim();
    const year = avYear.replace(/\D/g, "").slice(0, 4) || "2020";
    const mileageDigits = avMileage.replace(/\D/g, "") || "0";
    const mileageLabel = `${Number(mileageDigits).toLocaleString("en-US")} km`;
    return {
      brand: avBrand,
      model: avModel.trim(),
      name: title,
      price: Math.round(priceValue),
      year,
      mileageLabel,
    };
  }

  function finishVehicleForm(destination: "my-cars" | "vehicle-details" = "my-cars") {
    resetAddVehicleForm();
    setScreen(destination);
    screenRef.current = destination;
    setHistory((stack) => {
      const withoutForm = stack.filter(
        (item) => item !== "add-vehicle" && item !== "edit-vehicle",
      );
      if (destination === "my-cars") {
        if (withoutForm[withoutForm.length - 1] === "my-cars") return withoutForm.slice(0, -1);
        if (withoutForm.includes("home") || withoutForm.length === 0) return withoutForm;
        return withoutForm;
      }
      return withoutForm.filter((item) => item !== "vehicle-details");
    });
    setTab("profile");
  }

  function confirmAddVehicle() {
    if (sellerListingIds.length >= sellerSlotLimit) {
      setAddVehicleError("No remaining slots. Go back and view plans to add more listings.");
      return;
    }
    const parsed = validateVehicleForm();
    if (!parsed) return;
    const id = `custom-${Date.now()}`;
    const listing: Listing = {
      id,
      brand: parsed.brand,
      model: parsed.model,
      name: parsed.name,
      price: parsed.price,
      was: Math.round(parsed.price * 1.08),
      date: `01.${parsed.year}`,
      mileage: parsed.mileageLabel,
      image: avMainPhoto ?? BRAND_DEFAULT_IMAGE[parsed.brand],
      canton: "ZH",
    };
    const override = buildVehicleFormOverride();
    setCustomListings((current) => [listing, ...current]);
    setListingDetailOverrides((current) => ({ ...current, [id]: override }));
    setSellerListingIds((ids) => [...ids, id]);
    setSellerListingStatus((current) => ({ ...current, [id]: "active" }));
    setMyCarsNote(`${listing.name} added to your listings.`);
    setSellNote(`${listing.name} added to your listings.`);
    finishVehicleForm("my-cars");
  }

  function confirmSaveEditVehicle() {
    if (!editingVehicleId) {
      setAddVehicleError("No vehicle selected to edit.");
      return;
    }
    const parsed = validateVehicleForm();
    if (!parsed) return;
    const existing = findSellerListingById(editingVehicleId);
    if (!existing) {
      setAddVehicleError("Vehicle could not be found.");
      return;
    }
    const listing: Listing = {
      ...existing,
      brand: parsed.brand,
      model: parsed.model,
      name: parsed.name,
      price: parsed.price,
      was: Math.max(existing.was, Math.round(parsed.price * 1.08)),
      date: `01.${parsed.year}`,
      mileage: parsed.mileageLabel,
      image: avMainPhoto ?? existing.image ?? BRAND_DEFAULT_IMAGE[parsed.brand],
    };
    const override = buildVehicleFormOverride();
    setCustomListings((current) => {
      const without = current.filter((car) => car.id !== listing.id);
      return [listing, ...without];
    });
    setListingDetailOverrides((current) => ({ ...current, [listing.id]: override }));
    setSelectedVehicleId(listing.id);
    setMyCarsNote(`${listing.name} updated.`);
    setSellNote(`${listing.name} updated.`);
    finishVehicleForm(editVehicleReturnTo);
  }

  function openAppSettings() {
    setSettingsMessage(null);
    setSettingsOtpOpen(false);
    setSettingsOtpPurpose(null);
    setSettingsOtpInput("");
    setSettingsOtpError(null);
    setSettingsPendingNewPassword("");
    navigateTo("app-settings", "profile");
  }

  function openSelectLanguage() {
    navigateTo("select-language", "profile");
  }

  function openAboutUs() {
    navigateTo("about-us", "profile");
  }

  function openContact() {
    setContactNote(null);
    setContactFullName(profileFullName);
    setContactPhone(profilePhone);
    setContactEmail(profileEmail);
    setContactMessage("");
    navigateTo("contact", "profile");
  }

  function openTerms() {
    navigateTo("terms", "profile");
  }

  function openPrivacy() {
    navigateTo("privacy", "profile");
  }

  function openSignOutConfirm() {
    setSignOutOpen(true);
  }

  function closeSignOutConfirm() {
    setSignOutOpen(false);
  }

  function confirmSignOut() {
    setSignOutOpen(false);
    setAuthError(null);
    setAuthPassword("");
    setRegisterPassword("");
    setRegisterConfirmPassword("");
    setScreen("home");
    screenRef.current = "home";
    setHistory([]);
    setTab("home");
    setHubQuery("");
    setOpen(null);
    setAuthGate("login");
    setSplashKey((key) => key + 1);
  }

  function enterAppFromAuth() {
    setAuthError(null);
    setAuthGate("app");
    setScreen("home");
    screenRef.current = "home";
    setHistory([]);
    setTab("home");
  }

  function submitLogin() {
    const email = authEmail.trim();
    if (email) setProfileEmail(email);
    enterAppFromAuth();
  }

  function clearForgotResetState() {
    setForgotNote(null);
    setForgotOtpCode("");
    setForgotOtpInput("");
    setForgotOtpSeconds(180);
    setResetPassword("");
    setResetConfirmPassword("");
    setResetShowPassword(false);
    setResetShowConfirm(false);
  }

  function openAuthRegister() {
    setAuthError(null);
    clearForgotResetState();
    setAuthGate("register");
  }

  function openAuthLogin() {
    setAuthError(null);
    clearForgotResetState();
    setAuthGate("login");
  }

  function openForgotPassword() {
    setAuthError(null);
    clearForgotResetState();
    setForgotEmail(authEmail);
    setAuthGate("forgot");
  }

  function formatOtpCountdown(totalSeconds: number) {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}s`;
  }

  function issueForgotOtp() {
    const code = generateEmailOtp();
    setForgotOtpCode(code);
    setForgotOtpInput("");
    setForgotOtpSeconds(180);
    setAuthError(null);
  }

  function submitForgotPassword() {
    setAuthError(null);
    setForgotNote(null);
    const email = forgotEmail.trim();
    if (!email) {
      setAuthError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setAuthError("Please enter a valid email address.");
      return;
    }
    setAuthEmail(email);
    issueForgotOtp();
    setAuthGate("reset-code");
  }

  function resendForgotOtp() {
    issueForgotOtp();
  }

  function submitForgotOtp() {
    const entered = forgotOtpInput.trim();
    if (!/^\d{6}$/.test(entered)) {
      setAuthError("Enter the 6-digit verification code.");
      return;
    }
    if (forgotOtpSeconds <= 0) {
      setAuthError("This code has expired. Please resend a new code.");
      return;
    }
    if (entered !== forgotOtpCode) {
      setAuthError("Incorrect verification code. Please try again.");
      return;
    }
    setAuthError(null);
    setResetPassword("");
    setResetConfirmPassword("");
    setResetShowPassword(false);
    setResetShowConfirm(false);
    setAuthGate("reset-password");
  }

  function submitResetPassword() {
    const nextPassword = resetPassword.trim();
    const confirm = resetConfirmPassword.trim();
    if (nextPassword && confirm && nextPassword !== confirm) {
      setAuthError("Passwords do not match.");
      return;
    }
    if (nextPassword) {
      setAccountPassword(nextPassword);
      setAuthPassword(nextPassword);
    }
    openAuthLogin();
  }

  function submitRegister() {
    setAuthError(null);
    const name = registerName.trim();
    const email = registerEmail.trim();
    const password = registerPassword.trim();
    const confirm = registerConfirmPassword.trim();
    if (!name) {
      setAuthError("Please enter a user name.");
      return;
    }
    if (!email) {
      setAuthError("Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setAuthError("Please enter a valid email address.");
      return;
    }
    if (password && confirm && password !== confirm) {
      setAuthError("Passwords do not match.");
      return;
    }
    setProfileFullName(name);
    setProfileEmail(email);
    setAuthEmail(email);
    if (password) setAccountPassword(password);
    setProfilePhone("");
    setProfileGender("");
    setProfileOccupation("");
    setProfileBirthDate("");
    setProfileAddress("");
    setProfileCity("");
    setProfileZip("");
    setProfileCountry(PROFILE_DEFAULTS.country);
    setAuthGate("personal-info");
  }

  function submitPersonalInformation() {
    setAuthError(null);
    setAuthGate("buy-subscription");
  }

  function skipBuySubscription() {
    enterAppFromAuth();
  }

  function openSubscriptionBilling() {
    setBillingNote(null);
    navigateTo("subscription-billing", "profile");
  }

  function openSubscriptionPlans() {
    setSubscriptionAudience("private");
    setDealerVehicleCount(10);
    setSubscriptionNote(null);
    navigateTo("subscription-plan", "plan");
  }

  function openSubscriptionPlansFromBilling() {
    setSubscriptionAudience(accountRole === "dealer" ? "dealers" : "private");
    setSubscriptionNote(null);
    navigateTo("subscription-plan", "plan");
  }

  function refreshSubscriptionBilling() {
    setBillingNote("Billing overview refreshed.");
  }

  function downloadBillingInvoice(invoiceId: string) {
    setBillingNote(`Invoice ${invoiceId} PDF is ready to download.`);
  }

  function viewPlansFromOnboarding() {
    setAuthError(null);
    setAuthGate("app");
    setSubscriptionAudience("private");
    setDealerVehicleCount(10);
    setSubscriptionNote(null);
    setScreen("subscription-plan");
    screenRef.current = "subscription-plan";
    setHistory([]);
    setTab("plan");
  }

  function subscriptionCheckoutAmount() {
    if (subscriptionAudience === "private") return "CHF 14.90";
    return `CHF ${formatDealerPrice(dealerVehicleCount)}`;
  }

  function subscriptionPackageLabel() {
    if (subscriptionAudience === "private") {
      return "Private Sale · 1 vehicle / month";
    }
    return `Dealers · ${dealerVehicleCount} vehicles / month`;
  }

  function resetPaymentFormFields() {
    setPaymentError(null);
    setPayCardName("");
    setPayCardNumber("");
    setPayCardExpiry("");
    setPayCardCvc("");
    setPayPaypalEmail("");
    setPayPaypalPassword("");
    setPayFastpayMobile("");
    setPayFastpayPin("");
    setPaySslMobile("");
    setPaySslMethod("card");
  }

  function openPaymentGateway() {
    setSubscriptionNote(null);
    setSelectedPaymentGateway(null);
    setPaymentGatewayStep("choose");
    resetPaymentFormFields();
    setPaymentGatewayOpen(true);
  }

  function closePaymentGateway() {
    setPaymentGatewayOpen(false);
    setPaymentGatewayStep("choose");
    setSelectedPaymentGateway(null);
    resetPaymentFormFields();
  }

  function confirmSubscriptionPlan() {
    openPaymentGateway();
  }

  function openGatewayPaymentPage(gatewayId: PaymentGatewayId) {
    setSelectedPaymentGateway(gatewayId);
    setPaymentGatewayStep("pay");
    resetPaymentFormFields();
  }

  function backToPaymentGatewayList() {
    setPaymentGatewayStep("choose");
    setSelectedPaymentGateway(null);
    resetPaymentFormFields();
  }

  function confirmPaymentPurchase() {
    const gateway = PAYMENT_GATEWAYS.find((item) => item.id === selectedPaymentGateway);
    if (!gateway) {
      setPaymentError("Please choose a payment gateway.");
      return;
    }

    if (gateway.id === "stripe") {
      if (!payCardName.trim()) {
        setPaymentError("Please enter the cardholder name.");
        return;
      }
      if (payCardNumber.replace(/\s/g, "").length < 16) {
        setPaymentError("Please enter a valid 16-digit card number.");
        return;
      }
      if (!/^\d{2}\/\d{2}$/.test(payCardExpiry)) {
        setPaymentError("Please enter expiry as MM/YY.");
        return;
      }
      if (payCardCvc.replace(/\D/g, "").length < 3) {
        setPaymentError("Please enter a valid CVC.");
        return;
      }
    }

    if (gateway.id === "paypal") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payPaypalEmail.trim())) {
        setPaymentError("Please enter a valid PayPal email.");
        return;
      }
      if (payPaypalPassword.trim().length < 4) {
        setPaymentError("Please enter your PayPal password.");
        return;
      }
    }

    if (gateway.id === "fastpay") {
      if (payFastpayMobile.replace(/\D/g, "").length < 10) {
        setPaymentError("Please enter a valid FastPay mobile number.");
        return;
      }
      if (payFastpayPin.replace(/\D/g, "").length < 4) {
        setPaymentError("Please enter your FastPay PIN.");
        return;
      }
    }

    if (gateway.id === "sslcommerz") {
      if (paySslMobile.replace(/\D/g, "").length < 10) {
        setPaymentError("Please enter a valid mobile number for SSLCommerz.");
        return;
      }
    }

    const amount = subscriptionCheckoutAmount();
    const packageLabel = subscriptionPackageLabel();
    const nextRole: AccountRole = subscriptionAudience === "dealers" ? "dealer" : "seller";
    const roleLabel = accountRoleLabel(nextRole);
    const addedSlots = subscriptionAudience === "private" ? 1 : dealerVehicleCount;
    const nextLimit = sellerSlotLimit + addedSlots;
    const periodStart = new Date();
    const nextRenewal = addBillingDays(periodStart, 30);
    const planName =
      subscriptionAudience === "dealers"
        ? `DEALER PRO · ${dealerVehicleCount}`
        : "PRIVATE SALE";
    setActiveSubscription(`${packageLabel} · ${amount}`);
    setBillingPlan({
      name: planName,
      amountLabel: amount,
      periodSuffix: "/ 30 days",
      periodStart: formatBillingDateLabel(periodStart),
      nextRenewal: formatBillingDateLabel(nextRenewal),
      autoRenewal: "Active",
      slotLimit: nextLimit,
    });
    setBillingInvoices((current) => [
      {
        id: `YZA${Date.now().toString(36).toUpperCase().slice(-6)}-${String(current.length + 1).padStart(4, "0")}`,
        dateLabel: formatBillingDateLabel(periodStart),
        amountLabel: amount,
        description: `1 × ${planName} (at ${amount} / 30 days)`,
        status: "paid",
      },
      ...current,
    ]);
    setSellerSlotLimit(nextLimit);
    if (!canSell) {
      const seedIds = LISTINGS.slice(0, Math.min(2, nextLimit)).map((car) => car.id);
      setSellerListingIds(seedIds);
      setSellerListingStatus(
        Object.fromEntries(seedIds.map((id) => [id, "active" as SellerListingStatus])),
      );
      setSellPage(1);
    }
    setAccountRole(nextRole);
    setSubscriptionNote(
      `Payment confirmed with ${gateway.name}. Your package is active: ${packageLabel} for ${amount}. Your account is now ${roleLabel}.`,
    );
    setSellNote(null);
    closePaymentGateway();
    setHistory([]);
    setScreen("home");
    screenRef.current = "home";
    setTab("profile");
  }

  function closeListingActionDialog() {
    setListingActionDialog(null);
    setListingDeleteOtpCode("");
    setListingDeleteOtpInput("");
    setListingDeleteOtpError(null);
  }

  function openPauseListingDialog(vehicleId: string) {
    setSellMenuOpenId(null);
    setOwnerDetailsMenuOpen(false);
    setListingActionDialog({ type: "pause", vehicleId });
  }

  function openSoldListingDialog(vehicleId: string) {
    setSellMenuOpenId(null);
    setOwnerDetailsMenuOpen(false);
    setListingActionDialog({ type: "sold", vehicleId });
  }

  function openDeleteListingDialog(vehicleId: string) {
    setSellMenuOpenId(null);
    setOwnerDetailsMenuOpen(false);
    setListingDeleteOtpCode("");
    setListingDeleteOtpInput("");
    setListingDeleteOtpError(null);
    setListingActionDialog({ type: "delete", vehicleId, step: "confirm" });
  }

  function goToMyCarsWithStatus(status: MyCarsStatusFilter, note: string) {
    setMyCarsQuery("");
    setMyCarsStatus(status);
    setMyCarsSort("newest");
    setMyCarsPageSize(25);
    setMyCarsPage(1);
    setMyCarsNote(note);
    setSellNote(note);
    setSellMenuOpenId(null);
    setOwnerDetailsMenuOpen(false);
    if (screenRef.current !== "my-cars") {
      navigateTo("my-cars", "profile");
    }
  }

  function removeSellerVehicle(vehicleId: string) {
    const wasOnDetails =
      screenRef.current === "vehicle-details" && selectedVehicleId === vehicleId;
    setSellerListingIds((ids) => ids.filter((id) => id !== vehicleId));
    setSellerListingStatus((current) => {
      const next = { ...current };
      delete next[vehicleId];
      return next;
    });
    setCustomListings((current) => current.filter((car) => car.id !== vehicleId));
    setListingDetailOverrides((current) => {
      const next = { ...current };
      delete next[vehicleId];
      return next;
    });
    setSellMenuOpenId(null);
    setOwnerDetailsMenuOpen(false);
    closeListingActionDialog();
    setSellNote("Vehicle removed from your listings.");
    setMyCarsNote("Vehicle removed from your listings.");
    if (wasOnDetails) {
      goBack();
    } else if (screenRef.current !== "my-cars") {
      navigateTo("my-cars", "profile");
    }
  }

  function setSellerVehicleStatus(vehicleId: string, status: SellerListingStatus) {
    setSellerListingStatus((current) => ({ ...current, [vehicleId]: status }));
    setSellMenuOpenId(null);
    setOwnerDetailsMenuOpen(false);
    const label = status.charAt(0).toUpperCase() + status.slice(1);
    const note = `Listing marked as ${label}.`;
    if (status === "inactive" || status === "sold") {
      goToMyCarsWithStatus(status, note);
      return;
    }
    setMyCarsNote(note);
    setSellNote(note);
  }

  function confirmPauseListing() {
    if (!listingActionDialog || listingActionDialog.type !== "pause") return;
    const vehicleId = listingActionDialog.vehicleId;
    setSellerListingStatus((current) => ({ ...current, [vehicleId]: "inactive" }));
    closeListingActionDialog();
    goToMyCarsWithStatus("inactive", "Listing paused. You can reactivate it anytime.");
  }

  function confirmSoldListing() {
    if (!listingActionDialog || listingActionDialog.type !== "sold") return;
    const vehicleId = listingActionDialog.vehicleId;
    setSellerListingStatus((current) => ({ ...current, [vehicleId]: "sold" }));
    closeListingActionDialog();
    goToMyCarsWithStatus("sold", "Listing marked as Sold.");
  }

  function requestDeleteListingOtp() {
    if (!listingActionDialog || listingActionDialog.type !== "delete") return;
    if (!profileEmail.trim()) {
      setListingDeleteOtpError("Add your registered email on My Profile first.");
      return;
    }
    const code = generateEmailOtp();
    setListingDeleteOtpCode(code);
    setListingDeleteOtpInput("");
    setListingDeleteOtpError(null);
    setListingActionDialog({
      type: "delete",
      vehicleId: listingActionDialog.vehicleId,
      step: "otp",
    });
  }

  function confirmDeleteListingOtp() {
    if (!listingActionDialog || listingActionDialog.type !== "delete") return;
    const entered = listingDeleteOtpInput.trim();
    if (entered.length !== 6) {
      setListingDeleteOtpError("Enter the 6-digit verification code.");
      return;
    }
    if (entered !== listingDeleteOtpCode) {
      setListingDeleteOtpError("Invalid verification code. Check your email and try again.");
      return;
    }
    removeSellerVehicle(listingActionDialog.vehicleId);
  }

  function bulkUpdateSellerVehicles() {
    setSellMenuOpenId(null);
    if (sellerListingIds.length === 0) {
      const message = "Add vehicles first, then use Bulk Update.";
      setSellNote(message);
      setMyCarsNote(message);
      return;
    }
    const message = `Bulk update ready for ${sellerListingIds.length} vehicle(s).`;
    setSellNote(message);
    setMyCarsNote(message);
  }

  function handleSellerMenu(id: (typeof PROFILE_MENU_SELLER)[number]["id"]) {
    switch (id) {
      case "cars":
        openMyCars();
        break;
      case "testdrive":
        openTestDriveRequests();
        break;
      case "billing":
        openSubscriptionBilling();
        break;
      default:
        break;
    }
  }

  function handleProfileSecondaryMenu(id: (typeof PROFILE_MENU_SECONDARY)[number]["id"]) {
    switch (id) {
      case "about":
        openAboutUs();
        break;
      case "blog":
        openBlog();
        break;
      case "contact":
        openContact();
        break;
      case "terms":
        openTerms();
        break;
      case "privacy":
        openPrivacy();
        break;
      default:
        break;
    }
  }

  function sendContactMessage() {
    setContactNote(null);
    const name = contactFullName.trim();
    const phone = contactPhone.trim();
    const email = contactEmail.trim();
    const message = contactMessage.trim();
    if (!name) {
      setContactNoteTone("error");
      setContactNote("Please enter your full name.");
      return;
    }
    if (!phone) {
      setContactNoteTone("error");
      setContactNote("Please enter your phone number.");
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setContactNoteTone("error");
      setContactNote("Please enter a valid email address.");
      return;
    }
    if (!message) {
      setContactNoteTone("error");
      setContactNote("Please enter a message.");
      return;
    }
    setContactNoteTone("success");
    setContactNote("Thank you. Your message has been sent. Our team will get back to you soon.");
    setContactMessage("");
  }

  function openBlog() {
    setBlogQuery("");
    setBlogCategory("all");
    setSelectedBlogArticleId(null);
    navigateTo("blog", "profile");
  }

  function openBlogArticle(articleId: string) {
    setSelectedBlogArticleId(articleId);
    if (screenRef.current !== "blog-article") {
      navigateTo("blog-article", "profile");
    }
  }

  async function shareBlogArticle(article: BlogArticle) {
    const shareText = `${article.title}\n\n${article.excerpt}`;
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title: article.title, text: shareText });
      } catch {
        /* user dismissed share */
      }
      return;
    }
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(shareText);
    }
  }

  function selectAppLanguage(code: AppLanguageCode) {
    setAppLanguageCode(code);
  }

  function generateEmailOtp() {
    return String(Math.floor(100000 + Math.random() * 900000));
  }

  function clearPasswordFieldsAfterUpdate() {
    setSettingsCurrentPassword("");
    setSettingsNewPassword("");
    setSettingsConfirmPassword("");
    setSettingsShowCurrent(false);
    setSettingsShowNew(false);
    setSettingsShowConfirm(false);
    setSettingsPendingNewPassword("");
    setSettingsOtpCode("");
    setSettingsOtpInput("");
    setSettingsOtpError(null);
    setSettingsOtpOpen(false);
    setSettingsOtpPurpose(null);
  }

  function closeSettingsOtpModal() {
    setSettingsOtpOpen(false);
    setSettingsOtpPurpose(null);
    setSettingsOtpInput("");
    setSettingsOtpError(null);
    setSettingsPendingNewPassword("");
    setSettingsOtpCode("");
  }

  function performAccountDeletion() {
    setProfileFullName(PROFILE_DEFAULTS.fullName);
    setProfileEmail(PROFILE_DEFAULTS.email);
    setProfilePhone(PROFILE_DEFAULTS.phone);
    setProfileGender(PROFILE_DEFAULTS.gender);
    setProfileOccupation(PROFILE_DEFAULTS.occupation);
    setProfileBirthDate(PROFILE_DEFAULTS.birthDate);
    setProfileAddress(PROFILE_DEFAULTS.address);
    setProfileCity(PROFILE_DEFAULTS.city);
    setProfileZip(PROFILE_DEFAULTS.zip);
    setProfileCountry(PROFILE_DEFAULTS.country);
    setProfileMapCoords(null);
    setSaved({});
    setNotifications([]);
    setCompareIds([]);
    setCompareCatalog({});
    setAccountPassword("");
    setSettingsCurrentPassword("");
    setSettingsNewPassword("");
    setSettingsConfirmPassword("");
    setSettingsShowCurrent(false);
    setSettingsShowNew(false);
    setSettingsShowConfirm(false);
    setSettingsMessage(null);
    setActiveSubscription(null);
    setBillingPlan(null);
    setBillingInvoices([]);
    setBillingNote(null);
    setAccountRole("buyer");
    setSellerSlotLimit(0);
    setSellerListingIds([]);
    setSellerListingStatus({});
    setCustomListings([]);
    setListingDetailOverrides({});
    setTestDriveRequests([]);
    setSelectedTestDriveRequestId(null);
    setSellPage(1);
    setSellMenuOpenId(null);
    setSellNote(null);
    setMyCarsQuery("");
    setMyCarsStatus("all");
    setMyCarsPage(1);
    setMyCarsNote(null);
    closeListingActionDialog();
    resetAddVehicleForm();
    setSubscriptionNote(null);
    closeSettingsOtpModal();
    goHome();
  }

  function updateAccountPassword() {
    setSettingsMessage(null);
    setSettingsOtpError(null);

    if (!profileEmail.trim()) {
      setSettingsMessageTone("error");
      setSettingsMessage("Add your registered email on My Profile first.");
      return;
    }
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

    const code = generateEmailOtp();
    setSettingsOtpPurpose("password");
    setSettingsPendingNewPassword(settingsNewPassword);
    setSettingsOtpCode(code);
    setSettingsOtpInput("");
    setSettingsOtpOpen(true);
  }

  function requestDeleteAccount() {
    setSettingsMessage(null);
    setSettingsOtpError(null);

    if (!profileEmail.trim()) {
      setSettingsMessageTone("error");
      setSettingsMessage("Add your registered email on My Profile first.");
      return;
    }

    const code = generateEmailOtp();
    setSettingsOtpPurpose("delete");
    setSettingsPendingNewPassword("");
    setSettingsOtpCode(code);
    setSettingsOtpInput("");
    setSettingsOtpOpen(true);
  }

  function confirmSettingsOtp() {
    const entered = settingsOtpInput.trim();
    if (entered.length !== 6) {
      setSettingsOtpError("Enter the 6-digit verification code.");
      return;
    }
    if (entered !== settingsOtpCode) {
      setSettingsOtpError("Invalid verification code. Check your email and try again.");
      return;
    }

    if (settingsOtpPurpose === "delete") {
      performAccountDeletion();
      return;
    }

    setAccountPassword(settingsPendingNewPassword);
    clearPasswordFieldsAfterUpdate();
    setSettingsMessageTone("success");
    setSettingsMessage("Password updated successfully.");
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
          setProfileCountry((current) => current || "Switzerland");
          setProfileCity((current) => current || "Current location");
        },
        () => {
          setProfileMapCoords(null);
          setProfileCity("Zürich");
          setProfileZip("8001");
          setProfileCountry("Switzerland");
          setProfileAddress((current) => current || "Bahnhofstrasse 1");
        },
        { enableHighAccuracy: true, timeout: 8000 },
      );
      return;
    }
    setProfileMapCoords(null);
    setProfileCity("Zürich");
    setProfileZip("8001");
    setProfileCountry("Switzerland");
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
    setSellMenuOpenId(null);
    setOwnerDetailsMenuOpen(false);
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
    const vehicle = selectedVehicle;
    const vehicleLabel = vehicle?.name ?? "this vehicle";
    if (!vehicle) {
      setTestDriveNote("Select a vehicle before requesting a test drive.");
      return;
    }

    const activeLock = findActiveVehicleTestDriveLock(testDriveRequests, vehicle.id);
    if (activeLock) {
      setTestDriveNote(
        `This car is locked for ${activeLock.customerName} until ${activeLock.dateDetailLabel}.`,
      );
      return;
    }

    if (!testDriveDate.trim()) {
      setTestDriveNote("Please choose a test drive date.");
      return;
    }

    setTestDriveRequests((current) => {
      const nextNumber =
        current.reduce((max, item) => Math.max(max, item.number), 0) + 1;
      const request: TestDriveRequest = {
        id: `tdr-${Date.now()}`,
        number: nextNumber,
        status: "upcoming",
        customerName: testDriveName.trim() || profileFullName || "Guest",
        customerEmail: testDriveEmail.trim() || profileEmail || "—",
        customerPhone: testDrivePhone.trim() || profilePhone || "—",
        customerAvatar: profilePhoto,
        vehicleId: vehicle.id,
        vehicleTitle: vehicle.name,
        vehicleSubtitle: `${vehicle.brand} - ${vehicle.model}`,
        vehicleBrand: vehicle.brand,
        vehicleModel: vehicle.model,
        vehicleYear: listingYear(vehicle.date),
        vehicleImage: vehicle.image,
        vehiclePrice: vehicle.price,
        dateLabel: formatTestDriveDateLabel(testDriveDate, "short"),
        dateDetailLabel: formatTestDriveDateLabel(testDriveDate, "long"),
        driveDateIso: testDriveDate,
        cancelledByCustomer: false,
      };
      return [request, ...current];
    });
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

  function activateSellerListing(vehicleId: string) {
    setSellerListingStatus((current) => ({ ...current, [vehicleId]: "active" }));
    setSellMenuOpenId(null);
    setOwnerDetailsMenuOpen(false);
    goToMyCarsWithStatus("active", "Listing is active again.");
  }

  function renderSellerVehicleCard(car: Listing) {
    const menuOpen = sellMenuOpenId === car.id;
    const listingStatus = sellerListingStatus[car.id] ?? "active";
    const isInactive = listingStatus === "inactive";

    return (
      <article className="card sell-vehicle-card" key={car.id}>
        <button
          className="sell-vehicle-photo"
          type="button"
          onClick={() => openVehicleDetails(car.id)}
          aria-label={`View details for ${car.name}`}
        >
          <img src={car.image} alt="" />
        </button>
        <div className="details">
          <div className="sell-vehicle-identity">
            <h3>{car.name}</h3>
            <div className="sell-vehicle-menu-wrap">
              <button
                className="sell-vehicle-menu-btn"
                type="button"
                aria-label={`Manage ${car.name}`}
                aria-expanded={menuOpen}
                onClick={(event) => {
                  event.stopPropagation();
                  setSellMenuOpenId((current) => (current === car.id ? null : car.id));
                }}
              >
                <img src={sellMenuIcon} width={16} height={16} alt="" />
              </button>
              {menuOpen && (
                <div className="sell-vehicle-menu" role="menu" aria-label="ACTIONS">
                  <div className="sell-vehicle-menu-head">ACTIONS</div>
                  <button
                    type="button"
                    role="menuitem"
                    className="sell-vehicle-menu-item"
                    onClick={() => {
                      setSellMenuOpenId(null);
                      openVehicleDetails(car.id);
                    }}
                  >
                    <img src={vehicleActionViewIcon} width={14} height={14} alt="" />
                    <span>View Listing</span>
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    className="sell-vehicle-menu-item"
                    onClick={() => {
                      setSellMenuOpenId(null);
                      openEditVehicle(car.id);
                    }}
                  >
                    <img src={vehicleActionEditIcon} width={14} height={14} alt="" />
                    <span>Edit Vehicle</span>
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    className={
                      isInactive
                        ? "sell-vehicle-menu-item sell-vehicle-menu-activate"
                        : "sell-vehicle-menu-item sell-vehicle-menu-pause"
                    }
                    onClick={() =>
                      isInactive
                        ? activateSellerListing(car.id)
                        : openPauseListingDialog(car.id)
                    }
                  >
                    <span
                      className={
                        isInactive
                          ? "sell-vehicle-menu-icon sell-vehicle-menu-icon-activate"
                          : "sell-vehicle-menu-icon sell-vehicle-menu-icon-pause"
                      }
                      aria-hidden="true"
                    >
                      <img src={vehicleActionPauseIcon} width={8} height={8} alt="" />
                    </span>
                    <span>{isInactive ? "Activate Listing" : "Pause / Deactivate"}</span>
                  </button>
                  <button
                    type="button"
                    role="menuitem"
                    className="sell-vehicle-menu-item sell-vehicle-menu-sold"
                    onClick={() => openSoldListingDialog(car.id)}
                  >
                    <span className="sell-vehicle-menu-icon sell-vehicle-menu-icon-sold" aria-hidden="true">
                      <img src={vehicleActionSoldIcon} width={10} height={10} alt="" />
                    </span>
                    <span>Mark as Sold</span>
                  </button>
                  <div className="sell-vehicle-menu-divider" role="presentation" />
                  <button
                    type="button"
                    role="menuitem"
                    className="sell-vehicle-menu-item sell-vehicle-menu-danger"
                    onClick={() => openDeleteListingDialog(car.id)}
                  >
                    <img src={vehicleActionDeleteIcon} width={14} height={14} alt="" />
                    <span>Delete Listing</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          <p className="price">
            <span className="price-now">{money(car.price)}</span>
            <span className="price-sep">/</span>
            <span className="price-was">{money(car.was)}</span>
          </p>
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

  const sellerListings = useMemo(
    () =>
      sellerListingIds
        .map(
          (id) =>
            customListings.find((car) => car.id === id) ??
            LISTINGS.find((car) => car.id === id),
        )
        .filter((car): car is Listing => Boolean(car)),
    [customListings, sellerListingIds],
  );

  const testDriveRequestStats = useMemo(
    () => ({
      upcoming: testDriveRequests.filter((item) => item.status === "upcoming").length,
      accepted: testDriveRequests.filter((item) => item.status === "accepted").length,
      rejected: testDriveRequests.filter((item) => item.status === "rejected").length,
      completed: testDriveRequests.filter((item) => item.status === "completed").length,
    }),
    [testDriveRequests],
  );

  const selectedTestDriveRequest = useMemo(
    () =>
      testDriveRequests.find((item) => item.id === selectedTestDriveRequestId) ?? null,
    [selectedTestDriveRequestId, testDriveRequests],
  );

  const addVehicleModels = avBrand ? MODELS[avBrand] ?? [] : [];

  const usedSellerSlots = sellerListingIds.length;
  const remainingSellerSlots = Math.max(0, sellerSlotLimit - usedSellerSlots);
  const sellSlotProgress =
    sellerSlotLimit > 0 ? Math.min(100, (usedSellerSlots / sellerSlotLimit) * 100) : 0;
  const billingTotalLimit =
    sellerSlotLimit > 0 ? sellerSlotLimit : billingPlan?.slotLimit ?? 0;
  const billingUsedCars =
    sellerSlotLimit > 0 ? usedSellerSlots : billingPlan ? Math.min(2, billingTotalLimit) : 0;
  const billingRemainingSlots = Math.max(0, billingTotalLimit - billingUsedCars);
  const billingSlotProgress =
    billingTotalLimit > 0
      ? Math.min(100, (billingUsedCars / billingTotalLimit) * 100)
      : 0;
  const sellTotalPages = Math.max(1, Math.ceil(Math.max(usedSellerSlots, 1) / sellPageSize));

  const pagedSellerListings = useMemo(() => {
    const start = (sellPage - 1) * sellPageSize;
    return sellerListings.slice(start, start + sellPageSize);
  }, [sellerListings, sellPage, sellPageSize]);

  useEffect(() => {
    const maxPage = Math.max(1, Math.ceil(Math.max(sellerListingIds.length, 1) / sellPageSize));
    if (sellPage > maxPage) setSellPage(maxPage);
  }, [sellerListingIds.length, sellPage, sellPageSize]);

  const myCarsFiltered = useMemo(() => {
    const needle = myCarsQuery.trim().toLowerCase();
    const rows = sellerListings.filter((car) => {
      const status = sellerListingStatus[car.id] ?? "active";
      if (myCarsStatus !== "all" && status !== myCarsStatus) return false;
      if (!needle) return true;
      return (
        car.name.toLowerCase().includes(needle) ||
        car.brand.toLowerCase().includes(needle) ||
        car.model.toLowerCase().includes(needle)
      );
    });
    return [...rows].sort((a, b) => {
      if (myCarsSort === "price-asc") return a.price - b.price;
      if (myCarsSort === "price-desc") return b.price - a.price;
      const aIndex = sellerListingIds.indexOf(a.id);
      const bIndex = sellerListingIds.indexOf(b.id);
      return myCarsSort === "oldest" ? aIndex - bIndex : bIndex - aIndex;
    });
  }, [
    myCarsQuery,
    myCarsSort,
    myCarsStatus,
    sellerListingIds,
    sellerListingStatus,
    sellerListings,
  ]);

  const myCarsTotalPages = Math.max(1, Math.ceil(Math.max(myCarsFiltered.length, 1) / myCarsPageSize));
  const pagedMyCars = useMemo(() => {
    const start = (myCarsPage - 1) * myCarsPageSize;
    return myCarsFiltered.slice(start, start + myCarsPageSize);
  }, [myCarsFiltered, myCarsPage, myCarsPageSize]);

  useEffect(() => {
    const maxPage = Math.max(1, Math.ceil(Math.max(myCarsFiltered.length, 1) / myCarsPageSize));
    if (myCarsPage > maxPage) setMyCarsPage(maxPage);
  }, [myCarsFiltered.length, myCarsPage, myCarsPageSize]);

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

  const filteredBlogArticles = useMemo(() => {
    const needle = blogQuery.trim().toLowerCase();
    return BLOG_ARTICLES.filter((article) => {
      if (blogCategory === "news" && article.category !== "News") return false;
      if (!needle) return true;
      return (
        article.title.toLowerCase().includes(needle) ||
        article.excerpt.toLowerCase().includes(needle)
      );
    });
  }, [blogQuery, blogCategory]);

  const selectedBlogArticle = useMemo(
  () =>
    BLOG_ARTICLES.find((article) => article.id === selectedBlogArticleId) ??
    BLOG_ARTICLES[0] ??
    null,
  [selectedBlogArticleId],
  );

  const relatedBlogArticles = useMemo(() => {
    if (!selectedBlogArticle) return [];
    return BLOG_ARTICLES.filter((article) => article.id !== selectedBlogArticle.id);
  }, [selectedBlogArticle]);

  const activeNotification = useMemo(
    () => notifications.find((item) => item.id === activeNotificationId) ?? null,
    [activeNotificationId, notifications],
  );

  const selectedDealer = useMemo(
    () => DEALERS.find((dealer) => dealer.id === selectedDealerId) ?? null,
    [selectedDealerId],
  );

  const selectedVehicle = useMemo(
    () =>
      customListings.find((car) => car.id === selectedVehicleId) ??
      LISTINGS.find((car) => car.id === selectedVehicleId) ??
      null,
    [customListings, selectedVehicleId],
  );

  const isOwnListing = Boolean(
    selectedVehicle && sellerListingIds.includes(selectedVehicle.id),
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
        .join(", ") || "Switzerland";
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

  if (showSplash) {
    return (
      <div className="stage">
        <div className={splashLeaving ? "phone splash-phone splash-phone-leave" : "phone splash-phone"}>
          <header className="status">
            <p className="time">09:41</p>
            <div className="status-icons">
              <img src={signalIcon} width={20} height={12} alt="" />
              <img src={wifiIcon} width={17} height={13} alt="" />
              <img src={batteryIcon} width={27} height={13} alt="" />
            </div>
          </header>
          <main className="splash-screen" aria-label="AutoPlaza splash screen">
            <img
              className="splash-logo"
              src={splashLogo}
              width={262}
              height={98}
              alt="AutoPlaza.ch"
            />
            <div className="splash-loading">
              <span className="splash-spinner" aria-hidden="true" />
              <p>Data is Loading</p>
            </div>
          </main>
          <footer className="phone-footer" aria-hidden="true">
            <div className="phone-footer-surface" />
            <div className="phone-footer-indicator" />
          </footer>
        </div>
      </div>
    );
  }

  if (authGate === "buy-subscription") {
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

          <div className="header plan-header">
            <h1 className="plan-header-title">Buy Subscription Plan</h1>
          </div>

          <main className="buy-subscription-page">
            <div className="plan-page buy-subscription-content">
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
                <button className="plan-view-btn" type="button" onClick={viewPlansFromOnboarding}>
                  View Plans
                </button>
              </div>

              <section className="plan-why" aria-labelledby="buy-plan-why-title">
                <h3 id="buy-plan-why-title">WHY AUTOPLAZA.CH is the best choice?</h3>
                <p className="plan-why-lead">
                  Full cost certainty, maximum reach in Switzerland and state-of-the-art sales tools.
                </p>
                <ul className="plan-benefits">
                  {PLAN_BENEFITS.map((benefit) => (
                    <li key={benefit.title} className="plan-benefit-card">
                      <img
                        className="plan-benefit-icon"
                        src={benefit.icon}
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

            <div className="buy-subscription-footer">
              <button
                className="buy-subscription-skip"
                type="button"
                onClick={skipBuySubscription}
              >
                Skip
              </button>
            </div>
          </main>

          <footer className="phone-footer" aria-hidden="true">
            <div className="phone-footer-surface" />
            <div className="phone-footer-indicator" />
          </footer>
        </div>
      </div>
    );
  }

  if (authGate !== "app") {
    const isRegister = authGate === "register";
    const isPersonalInfo = authGate === "personal-info";
    const isForgot = authGate === "forgot";
    const isResetCode = authGate === "reset-code";
    const isResetPassword = authGate === "reset-password";
    const isForgotFlow = isForgot || isResetCode || isResetPassword;
    const hideAuthSwitch = isForgotFlow || isPersonalInfo;
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

          <main
            className={
              isRegister || isPersonalInfo
                ? "auth-page auth-page-register"
                : isForgotFlow
                  ? "auth-page auth-page-login auth-page-forgot"
                  : "auth-page auth-page-login"
            }
          >
            <div className="auth-body">
              <div className="auth-brand">
                <img className="auth-logo" src={splashLogo} width={160} height={60} alt="AutoPlaza.ch" />
              </div>

              {isForgot ? (
                <section className="auth-card" aria-labelledby="auth-forgot-title">
                  <h1 id="auth-forgot-title">Forgot password?</h1>
                  <p className="auth-lead">Enter your email below to reset your password</p>

                  <label className="app-settings-field">
                    <span>Email</span>
                    <span className="app-settings-input">
                      <input
                        type="email"
                        value={forgotEmail}
                        onChange={(event) => setForgotEmail(event.target.value)}
                        placeholder="Enter your email"
                        autoComplete="email"
                      />
                    </span>
                  </label>

                  <button
                    className="auth-link auth-link-underline auth-back-login"
                    type="button"
                    onClick={openAuthLogin}
                  >
                    Back to login
                  </button>

                  {authError && (
                    <p className="auth-error" role="alert">
                      {authError}
                    </p>
                  )}
                  {forgotNote && (
                    <p className="auth-success" role="status">
                      {forgotNote}
                    </p>
                  )}

                  <button
                    className="app-settings-primary"
                    type="button"
                    onClick={submitForgotPassword}
                  >
                    Send reset link
                  </button>
                </section>
              ) : isResetCode ? (
                <section className="auth-card" aria-labelledby="auth-reset-code-title">
                  <h1 id="auth-reset-code-title">Enter 6 digits code</h1>
                  <p className="auth-lead">Enter the six-digit code that was emailed to you.</p>

                  <label className="app-settings-field">
                    <span>Verification Code</span>
                    <span className="app-settings-input auth-otp-input">
                      <input
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        maxLength={6}
                        value={forgotOtpInput}
                        onChange={(event) => {
                          const digits = event.target.value.replace(/\D/g, "").slice(0, 6);
                          setForgotOtpInput(digits);
                          setAuthError(null);
                        }}
                        placeholder="123456"
                        aria-invalid={Boolean(authError)}
                      />
                    </span>
                  </label>

                  <div className="auth-otp-meta">
                    <p className="auth-otp-expiry">
                      <span>This code will expire in </span>
                      <span className="auth-otp-timer">{formatOtpCountdown(forgotOtpSeconds)}</span>
                    </p>
                    <button
                      className="auth-link auth-link-underline"
                      type="button"
                      onClick={resendForgotOtp}
                    >
                      Resend code
                    </button>
                  </div>

                  <button
                    className="auth-link auth-link-underline auth-back-login"
                    type="button"
                    onClick={openAuthLogin}
                  >
                    Back to login
                  </button>

                  <p className="auth-otp-demo" aria-live="polite">
                    Demo code (no email server): <strong>{forgotOtpCode}</strong>
                  </p>

                  {authError && (
                    <p className="auth-error" role="alert">
                      {authError}
                    </p>
                  )}

                  <button
                    className="app-settings-primary"
                    type="button"
                    onClick={submitForgotOtp}
                  >
                    Verify
                  </button>
                </section>
              ) : isResetPassword ? (
                <section className="auth-card" aria-labelledby="auth-reset-password-title">
                  <h1 id="auth-reset-password-title">Create New Password</h1>
                  <p className="auth-lead">
                    Your new password must be different from previous passwords.
                  </p>

                  <label className="app-settings-field">
                    <span>password</span>
                    <span className="app-settings-input">
                      <input
                        type={resetShowPassword ? "text" : "password"}
                        value={resetPassword}
                        onChange={(event) => {
                          setResetPassword(event.target.value);
                          setAuthError(null);
                        }}
                        placeholder="Enter new password"
                        autoComplete="new-password"
                      />
                      <PasswordVisibilityButton
                        visible={resetShowPassword}
                        onToggle={() => setResetShowPassword((value) => !value)}
                      />
                    </span>
                  </label>

                  <label className="app-settings-field">
                    <span>Confirm Password</span>
                    <span className="app-settings-input">
                      <input
                        type={resetShowConfirm ? "text" : "password"}
                        value={resetConfirmPassword}
                        onChange={(event) => {
                          setResetConfirmPassword(event.target.value);
                          setAuthError(null);
                        }}
                        placeholder="Enter new password"
                        autoComplete="new-password"
                      />
                      <PasswordVisibilityButton
                        visible={resetShowConfirm}
                        onToggle={() => setResetShowConfirm((value) => !value)}
                      />
                    </span>
                  </label>

                  {authError && (
                    <p className="auth-error" role="alert">
                      {authError}
                    </p>
                  )}

                  <button
                    className="app-settings-primary"
                    type="button"
                    onClick={submitResetPassword}
                  >
                    Confirm Password
                  </button>
                </section>
              ) : isRegister ? (
                <section className="auth-card" aria-labelledby="auth-register-title">
                  <h1 id="auth-register-title">Registration</h1>
                  <p className="auth-lead">Join AutoPlaza.ch to manage your vehicles</p>

                  <label className="app-settings-field">
                    <span>
                      User Name<span className="auth-required">*</span>
                    </span>
                    <span className="app-settings-input">
                      <input
                        type="text"
                        value={registerName}
                        onChange={(event) => setRegisterName(event.target.value)}
                        placeholder="Enter user name"
                        autoComplete="username"
                      />
                    </span>
                  </label>

                  <label className="app-settings-field">
                    <span>
                      Email<span className="auth-required">*</span>
                    </span>
                    <span className="app-settings-input">
                      <input
                        type="email"
                        value={registerEmail}
                        onChange={(event) => setRegisterEmail(event.target.value)}
                        placeholder="Enter your email"
                        autoComplete="email"
                      />
                    </span>
                  </label>

                  <div className="auth-divider" role="presentation" />

                  <div className="app-settings-field">
                    <span>
                      password<span className="auth-required">*</span>
                    </span>
                    <span className="app-settings-input">
                      <input
                        type={registerShowPassword ? "text" : "password"}
                        value={registerPassword}
                        onChange={(event) => setRegisterPassword(event.target.value)}
                        placeholder="Enter new password"
                        autoComplete="new-password"
                      />
                      <PasswordVisibilityButton
                        visible={registerShowPassword}
                        onToggle={() => setRegisterShowPassword((open) => !open)}
                      />
                    </span>
                  </div>

                  <div className="app-settings-field">
                    <span>
                      Confirm password<span className="auth-required">*</span>
                    </span>
                    <span className="app-settings-input">
                      <input
                        type={registerShowConfirm ? "text" : "password"}
                        value={registerConfirmPassword}
                        onChange={(event) => setRegisterConfirmPassword(event.target.value)}
                        placeholder="Enter new password"
                        autoComplete="new-password"
                      />
                      <PasswordVisibilityButton
                        visible={registerShowConfirm}
                        onToggle={() => setRegisterShowConfirm((open) => !open)}
                      />
                    </span>
                  </div>

                  {authError && (
                    <p className="auth-error" role="alert">
                      {authError}
                    </p>
                  )}

                  <button className="app-settings-primary" type="button" onClick={submitRegister}>
                    Create Account
                  </button>
                </section>
              ) : isPersonalInfo ? (
                <section className="auth-card" aria-labelledby="auth-personal-title">
                  <h1 id="auth-personal-title">Personal Information</h1>
                  <p className="auth-lead">Please Enter Your Personal Data</p>

                  <label className="app-settings-field">
                    <span>Contact No</span>
                    <span className="app-settings-input">
                      <input
                        type="tel"
                        value={profilePhone}
                        onChange={(event) => setProfilePhone(event.target.value)}
                        placeholder="Enter contact number"
                        autoComplete="tel"
                      />
                    </span>
                  </label>

                  <label className="app-settings-field">
                    <span>Gender</span>
                    <span className="app-settings-input auth-select-input">
                      <select
                        value={profileGender}
                        onChange={(event) => setProfileGender(event.target.value)}
                        aria-label="Gender"
                      >
                        <option value="">Select gender</option>
                        {PROFILE_GENDERS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <IconChevronDown />
                    </span>
                  </label>

                  <label className="app-settings-field">
                    <span>Occupation</span>
                    <span className="app-settings-input">
                      <input
                        type="text"
                        value={profileOccupation}
                        onChange={(event) => setProfileOccupation(event.target.value)}
                        placeholder="Enter occupation"
                        autoComplete="organization-title"
                      />
                    </span>
                  </label>

                  <label className="app-settings-field">
                    <span>Date of Birth</span>
                    <span className="app-settings-input auth-date-input">
                      <input
                        type="date"
                        value={profileBirthDate}
                        onChange={(event) => setProfileBirthDate(event.target.value)}
                        aria-label="Date of birth"
                      />
                      <img src={calendarIcon} width={16} height={16} alt="" aria-hidden="true" />
                    </span>
                  </label>

                  <label className="app-settings-field">
                    <span>Address</span>
                    <span className="app-settings-input">
                      <input
                        type="text"
                        value={profileAddress}
                        onChange={(event) => {
                          setProfileMapCoords(null);
                          setProfileAddress(event.target.value);
                        }}
                        placeholder="Enter address"
                        autoComplete="street-address"
                      />
                    </span>
                  </label>

                  <label className="app-settings-field">
                    <span>City</span>
                    <span className="app-settings-input auth-select-input">
                      <select
                        value={profileCity}
                        onChange={(event) => {
                          setProfileMapCoords(null);
                          setProfileCity(event.target.value);
                        }}
                        aria-label="City"
                      >
                        <option value="">Select city</option>
                        {PROFILE_CITIES.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <IconChevronDown />
                    </span>
                  </label>

                  <label className="app-settings-field">
                    <span>Zip Code</span>
                    <span className="app-settings-input">
                      <input
                        type="text"
                        value={profileZip}
                        onChange={(event) => {
                          setProfileMapCoords(null);
                          setProfileZip(event.target.value);
                        }}
                        placeholder="Enter zip code"
                        autoComplete="postal-code"
                      />
                    </span>
                  </label>

                  <label className="app-settings-field">
                    <span>Country</span>
                    <span className="app-settings-input auth-select-input">
                      <select
                        value={profileCountry}
                        onChange={(event) => {
                          setProfileMapCoords(null);
                          setProfileCountry(event.target.value);
                        }}
                        aria-label="Country"
                      >
                        <option value="">Select country</option>
                        {PROFILE_COUNTRIES.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <IconChevronDown />
                    </span>
                  </label>

                  {authError && (
                    <p className="auth-error" role="alert">
                      {authError}
                    </p>
                  )}

                  <button
                    className="app-settings-primary"
                    type="button"
                    onClick={submitPersonalInformation}
                  >
                    Continue
                  </button>
                </section>
              ) : (
                <section className="auth-card" aria-labelledby="auth-login-title">
                  <h1 id="auth-login-title">Welcome Back !</h1>
                  <p className="auth-lead">Enter your credentials to continue</p>

                  <label className="app-settings-field">
                    <span>Email</span>
                    <span className="app-settings-input">
                      <input
                        type="email"
                        value={authEmail}
                        onChange={(event) => setAuthEmail(event.target.value)}
                        placeholder="Enter your email"
                        autoComplete="email"
                      />
                    </span>
                  </label>

                  <div className="app-settings-field">
                    <span>password</span>
                    <span className="app-settings-input">
                      <input
                        type={authShowPassword ? "text" : "password"}
                        value={authPassword}
                        onChange={(event) => setAuthPassword(event.target.value)}
                        placeholder="Enter new password"
                        autoComplete="current-password"
                      />
                      <PasswordVisibilityButton
                        visible={authShowPassword}
                        onToggle={() => setAuthShowPassword((open) => !open)}
                      />
                    </span>
                  </div>

                  <div className="auth-row">
                    <label className="auth-remember">
                      <span className="auth-checkbox" aria-hidden="true">
                        <input
                          type="checkbox"
                          checked={authRememberMe}
                          onChange={(event) => setAuthRememberMe(event.target.checked)}
                        />
                      </span>
                      <span>Remember me</span>
                    </label>
                    <button
                      className="auth-link auth-link-underline"
                      type="button"
                      onClick={openForgotPassword}
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {authError && (
                    <p className="auth-error" role="alert">
                      {authError}
                    </p>
                  )}

                  <button className="app-settings-primary" type="button" onClick={submitLogin}>
                    Log In
                  </button>
                </section>
              )}
            </div>

            {!hideAuthSwitch && (
              <p className="auth-switch">
                {isRegister ? (
                  <>
                    <span>Already have an account?</span>
                    <button
                      type="button"
                      className="auth-link auth-link-switch"
                      onClick={openAuthLogin}
                    >
                      Sign In
                    </button>
                  </>
                ) : (
                  <>
                    <span>Have no account?</span>
                    <button
                      type="button"
                      className="auth-link auth-link-switch"
                      onClick={openAuthRegister}
                    >
                      Registration
                    </button>
                  </>
                )}
              </p>
            )}
          </main>

          <footer className="phone-footer" aria-hidden="true">
            <div className="phone-footer-surface" />
            <div className="phone-footer-indicator" />
          </footer>
        </div>
      </div>
    );
  }

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
            <h1 className="plan-header-title">{isSeller ? "Sell" : "Plan"}</h1>
          </div>
        )}

        {screen === "home" && onProfileTab && (
          <div className="header plan-header">
            <h1 className="plan-header-title">Profile</h1>
          </div>
        )}

        {screen === "subscription-plan" && (
          <div className="header plan-header sub-plan-header">
            <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
              <IconChevronLeft />
            </button>
            <h1 className="plan-header-title">Subscription Plan</h1>
          </div>
        )}

        {screen === "subscription-billing" && (
          <div className="header plan-header sub-plan-header">
            <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
              <IconChevronLeft />
            </button>
            <h1 className="plan-header-title">Subscription & Billing</h1>
          </div>
        )}

        {screen === "my-cars" && (
          <div className="header plan-header sub-plan-header">
            <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
              <IconChevronLeft />
            </button>
            <h1 className="plan-header-title">My Cars</h1>
          </div>
        )}

        {screen === "test-drive-requests" && (
          <div className="header plan-header sub-plan-header">
            <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
              <IconChevronLeft />
            </button>
            <h1 className="plan-header-title">Test Drive Requests</h1>
          </div>
        )}

        {screen === "test-drive-request-details" && (
          <div className="header plan-header sub-plan-header">
            <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
              <IconChevronLeft />
            </button>
            <h1 className="plan-header-title">Test Drive Details</h1>
          </div>
        )}

        {screen === "add-vehicle" && (
          <div className="header plan-header sub-plan-header">
            <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
              <IconChevronLeft />
            </button>
            <h1 className="plan-header-title">Add New Vehicle</h1>
          </div>
        )}

        {screen === "edit-vehicle" && (
          <div className="header plan-header sub-plan-header">
            <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
              <IconChevronLeft />
            </button>
            <h1 className="plan-header-title">Edit Vehicle</h1>
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
          ref={mainScrollRef}
          className={
            screen === "vehicle-details"
              ? "scroll scroll-vehicle-details"
              : screen === "test-drive"
                ? "scroll scroll-test-drive"
              : screen === "my-profile"
                ? "scroll scroll-search-hub scroll-my-profile"
              : screen === "contact"
                ? "scroll scroll-search-hub scroll-contact"
              : screen === "terms" || screen === "privacy"
                ? "scroll scroll-search-hub scroll-terms"
              : showTabNavigation
                ? "scroll"
                : "scroll scroll-search-hub"
          }
        >
          {screen === "subscription-billing" ? (
            <div className="billing-page">
              <div className="billing-intro">
                <p>
                  Overview of your active plan, vehicle listing quotas, payment methods, and
                  invoices.
                </p>
                <button
                  type="button"
                  className="billing-refresh"
                  aria-label="Refresh billing overview"
                  onClick={refreshSubscriptionBilling}
                >
                  <img src={billingRefreshIcon} width={18} height={18} alt="" />
                </button>
              </div>

              {billingNote && (
                <p className="billing-note" role="status">
                  {billingNote}
                </p>
              )}

              <section className="billing-plan-card" aria-labelledby="billing-plan-title">
                <div className="billing-plan-status-row">
                  <span
                    className={
                      billingPlan
                        ? "billing-status-pill billing-status-active"
                        : "billing-status-pill billing-status-inactive"
                    }
                  >
                    ● {billingPlan ? "Active" : "Inactive"}
                  </span>
                </div>

                <div className="billing-plan-copy">
                  <h2 id="billing-plan-title">{billingPlan?.name ?? "No active plan"}</h2>
                  <div className="billing-plan-price">
                    <strong>{billingPlan?.amountLabel ?? "CHF 0.00"}</strong>
                    <span>{billingPlan?.periodSuffix ?? "/ 30 days"}</span>
                  </div>
                </div>

                <div className="billing-renewal-box">
                  <div className="billing-renewal-row">
                    <span>Period Start</span>
                    <strong>{billingPlan?.periodStart ?? "—"}</strong>
                  </div>
                  <div className="billing-renewal-row">
                    <span>Next Renewal</span>
                    <strong>{billingPlan?.nextRenewal ?? "—"}</strong>
                  </div>
                  <div className="billing-renewal-row">
                    <span>Automatic Renewal</span>
                    <strong>{billingPlan?.autoRenewal ?? "Off"}</strong>
                  </div>
                </div>

                <button
                  type="button"
                  className="billing-view-plans"
                  onClick={openSubscriptionPlansFromBilling}
                >
                  View Plans
                </button>
              </section>

              <section className="billing-slots-card" aria-labelledby="billing-slots-title">
                <div className="billing-slots-head">
                  <h2 id="billing-slots-title">Add New Vehicles</h2>
                </div>
                <div
                  className="billing-slots-progress"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={billingTotalLimit}
                  aria-valuenow={billingUsedCars}
                  aria-label="Used listing slots"
                >
                  <span style={{ width: `${billingSlotProgress}%` }} />
                </div>
                <div className="billing-slots-stats">
                  <div className="billing-slot-stat billing-slot-remaining">
                    <strong>{billingRemainingSlots}</strong>
                    <span>Remaining Slots</span>
                  </div>
                  <div className="billing-slot-stat">
                    <strong>{billingUsedCars}</strong>
                    <span>Used Cars</span>
                  </div>
                  <div className="billing-slot-stat">
                    <strong>{billingTotalLimit}</strong>
                    <span>Total Limit</span>
                  </div>
                </div>
              </section>

              <section className="billing-invoices-card" aria-labelledby="billing-invoices-title">
                <div className="billing-invoices-head">
                  <h2 id="billing-invoices-title">Invoices & Payment History</h2>
                  <p>Download receipts and official invoice PDFs</p>
                </div>

                <button
                  type="button"
                  className="billing-portal-link"
                  onClick={() =>
                    setBillingNote("Full invoice history opens in the Stripe customer portal.")
                  }
                >
                  View full page↗
                </button>

                {billingInvoices.length === 0 ? (
                  <p className="billing-invoices-empty">No invoices yet.</p>
                ) : (
                  <div className="billing-invoice-list">
                    {billingInvoices.map((invoice) => (
                      <article key={invoice.id} className="billing-invoice">
                        <div className="billing-invoice-top">
                          <strong>{invoice.id}</strong>
                          <span className="billing-invoice-paid">Paid</span>
                        </div>
                        <div className="billing-invoice-summary">
                          <span>{invoice.dateLabel}</span>
                          <em>{invoice.amountLabel}</em>
                        </div>
                        <p className="billing-invoice-desc">{invoice.description}</p>
                        <button
                          type="button"
                          className="billing-invoice-pdf"
                          onClick={() => downloadBillingInvoice(invoice.id)}
                        >
                          PDF
                        </button>
                      </article>
                    ))}
                  </div>
                )}

                <p className="billing-stripe-note">
                  Invoices and tax details are securely processed by Stripe.
                </p>
              </section>
            </div>
          ) : screen === "subscription-plan" ? (
            <div
              className={
                subscriptionAudience === "dealers"
                  ? "sub-plan-page sub-plan-page-dealers"
                  : "sub-plan-page"
              }
            >
              <div className="sub-plan-segment" role="tablist" aria-label="Plan audience">
                <button
                  type="button"
                  role="tab"
                  className={
                    subscriptionAudience === "private"
                      ? "sub-plan-seg sub-plan-seg-active sub-plan-seg-private"
                      : "sub-plan-seg"
                  }
                  aria-selected={subscriptionAudience === "private"}
                  onClick={() => {
                    setSubscriptionAudience("private");
                    setSubscriptionNote(null);
                  }}
                >
                  <span className="sub-plan-seg-dot" aria-hidden="true" />
                  Private Sale
                </button>
                <button
                  type="button"
                  role="tab"
                  className={
                    subscriptionAudience === "dealers"
                      ? "sub-plan-seg sub-plan-seg-active sub-plan-seg-dealers"
                      : "sub-plan-seg"
                  }
                  aria-selected={subscriptionAudience === "dealers"}
                  onClick={() => {
                    setSubscriptionAudience("dealers");
                    setSubscriptionNote(null);
                  }}
                >
                  <span className="sub-plan-seg-dot" aria-hidden="true" />
                  Dealers
                </button>
              </div>

              {subscriptionAudience === "private" ? (
                <section className="sub-plan-card" aria-labelledby="sub-plan-private-title">
                  <div className="sub-plan-card-head">
                    <h2 id="sub-plan-private-title">Sell your vehicle</h2>
                    <p>Advertise easily. Sell quickly.</p>
                  </div>

                  <div className="sub-plan-price-box sub-plan-price-box-private">
                    <strong>CHF 14.90</strong>
                    <span>per vehicle / month</span>
                  </div>

                  <ul className="sub-plan-features">
                    {PRIVATE_PLAN_FEATURES.map((feature) => (
                      <li key={feature}>
                        <span className="sub-plan-check sub-plan-check-private" aria-hidden="true">
                          <img src={subPlanCheckIcon} width={12} height={12} alt="" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="sub-plan-cta sub-plan-cta-private"
                    type="button"
                    onClick={confirmSubscriptionPlan}
                  >
                    Advertise now for CHF 14.90
                  </button>

                  <p className="sub-plan-fine">
                    <img src={subPlanLockSmIcon} width={14} height={14} alt="" />
                    Cancel monthly anytime · Secure payment via Stripe
                  </p>
                </section>
              ) : (
                <section className="sub-plan-card" aria-labelledby="sub-plan-dealer-title">
                  <div className="sub-plan-card-head">
                    <h2 id="sub-plan-dealer-title">Choose your dealer package</h2>
                    <p>Choose the number of vehicles you want to advertise simultaneously.</p>
                  </div>

                  <div className="sub-plan-price-box sub-plan-price-box-dealers">
                    <span className="sub-plan-price-label">Your selected package</span>
                    <strong className="sub-plan-price-vehicles">
                      {dealerVehicleCount} vehicles
                    </strong>
                    <strong className="sub-plan-price-amount">
                      CHF {formatDealerPrice(dealerVehicleCount)}
                    </strong>
                    <span>per month</span>
                  </div>

                  <div className="sub-plan-vehicle-selector">
                    <p className="sub-plan-vehicle-label">Number of vehicles</p>
                    <label className="sub-plan-slider">
                      <input
                        type="range"
                        min={1}
                        max={50}
                        value={Math.min(dealerVehicleCount, 50)}
                        onChange={(event) => {
                          setDealerVehicleCount(Number(event.target.value));
                          setSubscriptionNote(null);
                        }}
                        aria-label="Number of vehicles"
                      />
                      <span className="sub-plan-slider-ends">
                        <span>1</span>
                        <span>50</span>
                      </span>
                    </label>
                    <div className="sub-plan-count-grid" role="listbox" aria-label="Vehicle packages">
                      {DEALER_VEHICLE_OPTIONS.map((count) => (
                        <button
                          key={count}
                          type="button"
                          role="option"
                          aria-selected={dealerVehicleCount === count}
                          className={
                            dealerVehicleCount === count
                              ? "sub-plan-count sub-plan-count-active"
                              : "sub-plan-count"
                          }
                          onClick={() => {
                            setDealerVehicleCount(count);
                            setSubscriptionNote(null);
                          }}
                        >
                          {count}
                        </button>
                      ))}
                    </div>
                  </div>

                  <ul className="sub-plan-features">
                    {DEALER_PLAN_FEATURES.map((feature) => (
                      <li key={feature}>
                        <span className="sub-plan-check sub-plan-check-dealers" aria-hidden="true">
                          <img src={subPlanCheckIcon} width={12} height={12} alt="" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="sub-plan-cta sub-plan-cta-dealers"
                    type="button"
                    onClick={confirmSubscriptionPlan}
                  >
                    Get Started · CHF {formatDealerPrice(dealerVehicleCount)}/month
                  </button>

                  <p className="sub-plan-fine">
                    <img src={subPlanLockSmIcon} width={14} height={14} alt="" />
                    Cancel monthly anytime · Secure payment via Stripe
                  </p>
                </section>
              )}

              {activeSubscription && (
                <p className="sub-plan-active" role="status">
                  Active package: {activeSubscription}
                </p>
              )}
              {subscriptionNote && (
                <p className="sub-plan-note" role="status">
                  {subscriptionNote}
                </p>
              )}

              <section className="sub-plan-why" aria-labelledby="sub-plan-why-title">
                <h3 id="sub-plan-why-title">Why AutoPlaza.ch is the best choice</h3>
                <p>
                  Full cost transparency, maximum reach in Switzerland and modern selling tools.
                </p>
                <div className="sub-plan-why-cards">
                  <article className="sub-plan-why-card">
                    <span className="sub-plan-why-icon" aria-hidden="true">
                      <img
                        src={
                          subscriptionAudience === "dealers"
                            ? subPlanLockWhyBlueIcon
                            : subPlanLockWhyIcon
                        }
                        width={20}
                        height={20}
                        alt=""
                      />
                    </span>
                    <strong>No Hidden Fees</strong>
                    <p>
                      {subscriptionAudience === "dealers"
                        ? "Transparent monthly pricing in CHF."
                        : "Transparent CHF prices. No automatic renewal for private listings."}
                    </p>
                  </article>
                  <article className="sub-plan-why-card">
                    <span className="sub-plan-why-icon" aria-hidden="true">
                      <img
                        src={
                          subscriptionAudience === "dealers" ? subPlanCarBlueIcon : subPlanCarIcon
                        }
                        width={20}
                        height={20}
                        alt=""
                      />
                    </span>
                    <strong>Instant Online</strong>
                    <p>
                      {subscriptionAudience === "dealers"
                        ? "Listings go live immediately for Swiss buyers."
                        : "Your listing goes live immediately. Shown to Swiss buyers."}
                    </p>
                  </article>
                  <article className="sub-plan-why-card">
                    <span className="sub-plan-why-icon" aria-hidden="true">
                      <img
                        src={
                          subscriptionAudience === "dealers"
                            ? subPlanPaymentBlueIcon
                            : subPlanPaymentIcon
                        }
                        width={20}
                        height={14}
                        alt=""
                      />
                    </span>
                    <strong>Secure Payment</strong>
                    <p>
                      {subscriptionAudience === "dealers"
                        ? "TWINT, Apple Pay or Google Pay supported."
                        : "Pay via TWINT, Apple Pay or Google Pay with bank encryption."}
                    </p>
                  </article>
                </div>
              </section>
            </div>
          ) : screen === "popular-brands" ? (
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
                <button className="app-settings-danger" type="button" onClick={requestDeleteAccount}>
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

              {settingsOtpOpen && settingsOtpPurpose && (
                <div
                  className="settings-otp-modal"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="settings-otp-title"
                >
                  <button
                    className="settings-otp-backdrop"
                    type="button"
                    aria-label="Cancel verification"
                    onClick={closeSettingsOtpModal}
                  />
                  <div
                    className={
                      settingsOtpPurpose === "delete"
                        ? "settings-otp-card settings-otp-card-danger"
                        : "settings-otp-card"
                    }
                  >
                    <h2 id="settings-otp-title">
                      {settingsOtpPurpose === "delete"
                        ? "Confirm account deletion"
                        : "Confirm verification code"}
                    </h2>
                    <p className="settings-otp-lead">
                      {settingsOtpPurpose === "delete" ? (
                        <>
                          We sent a 6-digit code to{" "}
                          <strong>{profileEmail || "your registered email"}</strong>. Enter it below
                          to permanently delete your account and all saved data.
                        </>
                      ) : (
                        <>
                          We sent a 6-digit code to{" "}
                          <strong>{profileEmail || "your registered email"}</strong>. Enter it below
                          to confirm your new password.
                        </>
                      )}
                    </p>
                    <p className="settings-otp-demo" aria-live="polite">
                      Demo code (no email server): <strong>{settingsOtpCode}</strong>
                    </p>
                    <label className="settings-otp-field">
                      <span>Verification code</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        maxLength={6}
                        value={settingsOtpInput}
                        onChange={(event) =>
                          setSettingsOtpInput(event.target.value.replace(/\D/g, "").slice(0, 6))
                        }
                        placeholder="Enter 6-digit OTP"
                        aria-invalid={Boolean(settingsOtpError)}
                      />
                    </label>
                    {settingsOtpError && (
                      <p className="settings-otp-error" role="alert">
                        {settingsOtpError}
                      </p>
                    )}
                    <button
                      className={
                        settingsOtpPurpose === "delete"
                          ? "app-settings-danger settings-otp-confirm"
                          : "app-settings-primary settings-otp-confirm"
                      }
                      type="button"
                      onClick={confirmSettingsOtp}
                    >
                      {settingsOtpPurpose === "delete" ? "Confirm delete account" : "Confirm OTP"}
                    </button>
                    <button
                      className="settings-otp-cancel"
                      type="button"
                      onClick={closeSettingsOtpModal}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : screen === "select-language" ? (
            <div className="select-language-page">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title select-language-title">Select Language</h1>
              </div>

              <div className="select-language-intro">
                <img src={profileMenuLanguage} width={24} height={24} alt="" />
                <h2>Choose your language</h2>
              </div>
              <p className="select-language-lead">
                AutoPlaza is shown in English. Your preferred language is saved on your profile for
                future updates.
              </p>

              <div className="select-language-list" role="radiogroup" aria-label="Available languages">
                {APP_LANGUAGES.map((language) => {
                  const selected = appLanguageCode === language.code;
                  return (
                    <button
                      key={language.code}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      className={
                        selected ? "select-language-option select-language-option-active" : "select-language-option"
                      }
                      onClick={() => selectAppLanguage(language.code)}
                    >
                      <span className="select-language-code">{language.code}</span>
                      <span className="select-language-copy">
                        <strong>{language.label}</strong>
                        <span>{language.subtitle}</span>
                      </span>
                      <img
                        src={selected ? languageCheckIcon : languageRadioIcon}
                        width={22}
                        height={22}
                        alt=""
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          ) : screen === "about-us" ? (
            <div className="about-us-page">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title about-us-title">About Us</h1>
              </div>

              {ABOUT_US_SECTIONS.map((section) => (
                <section key={section.id} className="about-us-section">
                  <h2 className="about-us-heading">
                    {section.lead} <span>{section.accent}</span>
                  </h2>
                  <div className={section.tall ? "about-us-figure about-us-figure-tall" : "about-us-figure"}>
                    <img className="about-us-photo" src={section.image} alt="" />
                  </div>
                  <p className="about-us-body">{section.body}</p>
                </section>
              ))}
            </div>
          ) : screen === "contact" ? (
            <div className="contact-page">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title contact-title">Contact</h1>
              </div>

              <h2 className="contact-heading">Contact Us</h2>
              <p className="contact-lead">
                Have questions or need assistance? Our expert team is here to help you buy or sell your
                car with complete confidence and transparency.
              </p>

              <section className="contact-card" aria-label="Contact details">
                <div className="contact-info-row">
                  <img className="contact-info-icon" src={contactEmailIcon} width={20} height={20} alt="" />
                  <div className="contact-info-copy">
                    <span className="contact-info-label">Email</span>
                    <a className="contact-info-value" href="mailto:support@autoplaza.ch">
                      support@autoplaza.ch
                    </a>
                  </div>
                </div>
                <div className="contact-info-row">
                  <img className="contact-info-icon" src={contactClockIcon} width={20} height={20} alt="" />
                  <div className="contact-info-copy">
                    <span className="contact-info-label">Opening hours</span>
                    <p className="contact-info-value">Mon - Fri: 08:00-12:00 / 13:00-17:00</p>
                  </div>
                </div>
                <div className="contact-info-row">
                  <img className="contact-info-icon" src={contactLocationIcon} width={20} height={20} alt="" />
                  <div className="contact-info-copy">
                    <span className="contact-info-label">Location</span>
                    <p className="contact-info-value">Switzerland</p>
                  </div>
                </div>
              </section>

              <section className="contact-card" aria-labelledby="contact-form-title">
                <h2 id="contact-form-title" className="contact-form-title">
                  Send us a message
                </h2>

                <label className="app-settings-field">
                  <span>Full Name</span>
                  <span className="app-settings-input">
                    <input
                      type="text"
                      value={contactFullName}
                      onChange={(event) => setContactFullName(event.target.value)}
                      placeholder="Enter your full name"
                      autoComplete="name"
                    />
                  </span>
                </label>

                <label className="app-settings-field">
                  <span>Phone Number</span>
                  <span className="app-settings-input">
                    <input
                      type="tel"
                      value={contactPhone}
                      onChange={(event) => setContactPhone(event.target.value)}
                      placeholder="Enter your phone number"
                      autoComplete="tel"
                    />
                  </span>
                </label>

                <label className="app-settings-field">
                  <span>Email</span>
                  <span className="app-settings-input">
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(event) => setContactEmail(event.target.value)}
                      placeholder="Enter your email address"
                      autoComplete="email"
                    />
                  </span>
                </label>

                <label className="app-settings-field contact-field-message">
                  <span>Message</span>
                  <span className="app-settings-input contact-message-input">
                    <textarea
                      value={contactMessage}
                      onChange={(event) => setContactMessage(event.target.value)}
                      placeholder="How can we help you?"
                      rows={5}
                    />
                  </span>
                </label>

                <button className="app-settings-primary" type="button" onClick={sendContactMessage}>
                  Send Message
                </button>
              </section>

              {contactNote && (
                <p
                  className={
                    contactNoteTone === "success"
                      ? "app-settings-note app-settings-note-success"
                      : "app-settings-note app-settings-note-error"
                  }
                  role="status"
                >
                  {contactNote}
                </p>
              )}
            </div>
          ) : screen === "terms" ? (
            <div className="terms-page">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title terms-title">Terms &amp; Conditions</h1>
              </div>

              <header className="terms-intro">
                <h2 className="terms-brand">AutoPlaza.ch</h2>
                <p className="terms-subtitle">General Terms and Conditions (GTC)</p>
                <p className="terms-date">As of: October 2026</p>
              </header>

              <article className="terms-body" aria-label="Terms and conditions text">
                <div className="terms-body-main">{TERMS_CONDITIONS_BODY}</div>
                <div className="terms-body-contact">{TERMS_CONDITIONS_CONTACT}</div>
              </article>
            </div>
          ) : screen === "privacy" ? (
            <div className="terms-page privacy-page">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title terms-title">Privacy Policy</h1>
              </div>

              <header className="terms-intro">
                <h2 className="terms-brand">{PRIVACY_POLICY_META.brand}</h2>
                <p className="terms-subtitle">{PRIVACY_POLICY_META.subtitle}</p>
                <p className="terms-date">{PRIVACY_POLICY_META.status}</p>
                <p className="terms-date">{PRIVACY_POLICY_META.validFrom}</p>
              </header>

              <article className="terms-body" aria-label="Privacy policy text">
                <div className="terms-body-main">{PRIVACY_POLICY_BODY}</div>
              </article>
            </div>
          ) : screen === "blog" ? (
            <div className="blog-page">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title blog-title">Blog</h1>
              </div>

              <div className="blog-intro">
                <p className="blog-kicker">AutoPlaza Magazine &amp; News</p>
                <h2 className="blog-headline">Latest Automotive News &amp; Insights</h2>
                <p className="blog-lead">
                  Discover in-depth reports, new models, electromobility and valuable tips for buying
                  and selling cars in Switzerland.
                </p>
              </div>

              <label className="blog-search">
                <img className="blog-search-icon" src={blogSearchIcon} width={18} height={18} alt="" />
                <input
                  type="search"
                  value={blogQuery}
                  onChange={(event) => setBlogQuery(event.target.value)}
                  placeholder="Browse articles..."
                  aria-label="Browse articles"
                />
              </label>

              <div className="blog-filters" role="tablist" aria-label="Article categories">
                <button
                  type="button"
                  role="tab"
                  aria-selected={blogCategory === "all"}
                  className={blogCategory === "all" ? "blog-filter blog-filter-active" : "blog-filter"}
                  onClick={() => setBlogCategory("all")}
                >
                  All posts
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={blogCategory === "news"}
                  className={blogCategory === "news" ? "blog-filter blog-filter-active" : "blog-filter"}
                  onClick={() => setBlogCategory("news")}
                >
                  News
                </button>
              </div>

              <p className="blog-count" role="status">
                {filteredBlogArticles.length} item{filteredBlogArticles.length === 1 ? "" : "s"} found
              </p>

              <div className="blog-list">
                {filteredBlogArticles.map((article) => (
                  <BlogArticleCard
                    key={article.id}
                    article={article}
                    onSelect={() => openBlogArticle(article.id)}
                  />
                ))}
                {filteredBlogArticles.length === 0 && (
                  <p className="blog-empty">No articles match your search.</p>
                )}
              </div>
            </div>
          ) : screen === "blog-article" && selectedBlogArticle ? (
            <div className="blog-article-page">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title blog-article-title">Blog Article Details</h1>
              </div>

              <div className="blog-article-content">
                <div className="blog-article-toolbar">
                  <button
                    type="button"
                    className="blog-article-share"
                    onClick={() => shareBlogArticle(selectedBlogArticle)}
                  >
                    <IconShareLink />
                    Share
                  </button>
                </div>

                <header className="blog-article-head">
                  <h2 className="blog-article-heading">{selectedBlogArticle.title}</h2>
                </header>

                <div className="blog-article-figure">
                  <img className="blog-article-hero" src={selectedBlogArticle.image} alt="" />
                </div>

                <article className="blog-article-body-card" aria-label="Article body">
                  {selectedBlogArticle.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </article>
              </div>

              <section className="blog-article-related" aria-labelledby="blog-related-title">
                <h2 id="blog-related-title" className="blog-article-related-title">
                  Related Articles
                </h2>
                <p className="blog-article-related-lead">
                  Discover more news and guides on AutoPlaza
                </p>
                {relatedBlogArticles.map((article) => (
                  <BlogArticleCard
                    key={article.id}
                    article={article}
                    compact
                    onSelect={() => openBlogArticle(article.id)}
                  />
                ))}
              </section>
            </div>
          ) : screen === "add-vehicle" || screen === "edit-vehicle" ? (
            <div className="add-vehicle-page">
              <section className="av-card av-images" aria-labelledby="av-images-title">
                <h2 id="av-images-title">Vehicle Images</h2>
                <div className="av-image-row">
                  <button
                    type="button"
                    className={avMainPhoto ? "av-main-upload av-main-upload-filled" : "av-main-upload"}
                    onClick={() => avMainPhotoInputRef.current?.click()}
                  >
                    {avMainPhoto ? (
                      <img src={avMainPhoto} alt="" />
                    ) : (
                      <>
                        <img src={addVehicleCameraIcon} width={24} height={24} alt="" />
                        <span>Main Photo</span>
                      </>
                    )}
                  </button>
                  <input
                    ref={avMainPhotoInputRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(event) => {
                      readVehiclePhoto(event.target.files?.[0], setAvMainPhoto);
                      event.target.value = "";
                    }}
                  />
                  <div className="av-extra-uploads">
                    {avExtraPhotos.map((photo, index) => (
                      <button
                        key={`extra-${index}`}
                        type="button"
                        className={photo ? "av-extra-upload av-extra-upload-filled" : "av-extra-upload"}
                        onClick={() => avExtraPhotoInputRefs.current[index]?.click()}
                        aria-label={`Upload extra photo ${index + 1}`}
                      >
                        {photo ? (
                          <img src={photo} alt="" />
                        ) : (
                          <img src={addVehicleGalleryIcon} width={16} height={16} alt="" />
                        )}
                      </button>
                    ))}
                    {avExtraPhotos.map((_, index) => (
                      <input
                        key={`extra-input-${index}`}
                        ref={(node) => {
                          avExtraPhotoInputRefs.current[index] = node;
                        }}
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(event) => {
                          readVehiclePhoto(event.target.files?.[0], (url) => {
                            setAvExtraPhotos((current) => {
                              const next = [...current];
                              next[index] = url;
                              return next;
                            });
                          });
                          event.target.value = "";
                        }}
                      />
                    ))}
                  </div>
                </div>
              </section>

              <section className="av-card" aria-labelledby="av-basic-title">
                <h2 id="av-basic-title">Basic data</h2>
                <label className="av-field">
                  <span>Vehicle Description</span>
                  <span className="av-control">
                    <img src={carIcon} width={16} height={16} alt="" />
                    <input
                      type="text"
                      value={avTitle}
                      onChange={(event) => setAvTitle(event.target.value)}
                      placeholder="e.g. BMW 3 Series"
                    />
                  </span>
                </label>
                <div className="av-row">
                  <label className="av-field">
                    <span>Brand</span>
                    <span className="av-control">
                      <img src={carIcon} width={16} height={16} alt="" />
                      <select
                        value={avBrand}
                        onChange={(event) => {
                          const next = event.target.value as BrandName | "";
                          setAvBrand(next);
                          setAvModel("");
                        }}
                      >
                        <option value="">Select Brand</option>
                        {BRANDS.map((brand) => (
                          <option key={brand.name} value={brand.name}>
                            {brand.name}
                          </option>
                        ))}
                      </select>
                      <img src={addVehicleChevronIcon} width={16} height={16} alt="" />
                    </span>
                  </label>
                  <label className="av-field">
                    <span>Model</span>
                    <span className="av-control">
                      <img src={carIcon} width={16} height={16} alt="" />
                      <select
                        value={avModel}
                        onChange={(event) => setAvModel(event.target.value)}
                        disabled={!avBrand}
                      >
                        <option value="">Select Model</option>
                        {addVehicleModels.map((model) => (
                          <option key={model} value={model}>
                            {model}
                          </option>
                        ))}
                      </select>
                      <img src={addVehicleChevronIcon} width={16} height={16} alt="" />
                    </span>
                  </label>
                </div>
                <div className="av-row">
                  <label className="av-field">
                    <span>Registration (Year)</span>
                    <span className="av-control">
                      <img src={calendarIcon} width={16} height={16} alt="" />
                      <input
                        type="number"
                        min={1980}
                        max={2030}
                        value={avYear}
                        onChange={(event) => setAvYear(event.target.value)}
                      />
                    </span>
                  </label>
                  <label className="av-field">
                    <span>Condition</span>
                    <span className="av-control">
                      <select
                        value={avCondition}
                        onChange={(event) => setAvCondition(event.target.value)}
                      >
                        <option value="">Choose</option>
                        {VEHICLE_CONDITIONS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <img src={addVehicleChevronIcon} width={16} height={16} alt="" />
                    </span>
                  </label>
                </div>
                <div className="av-row">
                  <label className="av-field">
                    <span>Mileage</span>
                    <span className="av-control">
                      <img src={mileageIcon} width={16} height={16} alt="" />
                      <input
                        type="text"
                        inputMode="numeric"
                        value={avMileage}
                        onChange={(event) => setAvMileage(event.target.value)}
                      />
                      <em>km</em>
                    </span>
                  </label>
                  <label className="av-field">
                    <span>Accident Vehicle</span>
                    <span className="av-control">
                      <select
                        value={avAccident}
                        onChange={(event) => setAvAccident(event.target.value)}
                      >
                        <option value="">Choose</option>
                        {VEHICLE_ACCIDENT.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <img src={addVehicleChevronIcon} width={16} height={16} alt="" />
                    </span>
                  </label>
                </div>
                <div className="av-row">
                  <label className="av-field">
                    <span>Body Type</span>
                    <span className="av-control">
                      <select value={avBody} onChange={(event) => setAvBody(event.target.value)}>
                        <option value="">Choose</option>
                        {VEHICLE_BODY_TYPES.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <img src={addVehicleChevronIcon} width={16} height={16} alt="" />
                    </span>
                  </label>
                  <label className="av-field">
                    <span>Last MFK</span>
                    <span className="av-control">
                      <img src={calendarIcon} width={16} height={16} alt="" />
                      <input
                        type="text"
                        value={avMfk}
                        onChange={(event) => setAvMfk(event.target.value)}
                        placeholder="DD.MM.YYYY"
                      />
                    </span>
                  </label>
                </div>
                <div className="av-row">
                  <label className="av-field">
                    <span>Warranty</span>
                    <span className="av-control">
                      <select
                        value={avWarranty}
                        onChange={(event) => setAvWarranty(event.target.value)}
                      >
                        {VEHICLE_WARRANTY.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <img src={addVehicleChevronIcon} width={16} height={16} alt="" />
                    </span>
                  </label>
                  <label className="av-field">
                    <span>Service History</span>
                    <span className="av-control">
                      <select
                        value={avService}
                        onChange={(event) => setAvService(event.target.value)}
                      >
                        <option value="">Choose</option>
                        {VEHICLE_SERVICE.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <img src={addVehicleChevronIcon} width={16} height={16} alt="" />
                    </span>
                  </label>
                </div>
                <label className="av-field">
                  <span>Direct Import</span>
                  <span className="av-control">
                    <select value={avImport} onChange={(event) => setAvImport(event.target.value)}>
                      <option value="">Choose</option>
                      {VEHICLE_IMPORT.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <img src={addVehicleChevronIcon} width={16} height={16} alt="" />
                  </span>
                </label>
              </section>

              <section className="av-card" aria-labelledby="av-about-title">
                <h2 id="av-about-title">About the car</h2>
                <label className="av-field">
                  <span>Vehicle Description</span>
                  <span className="av-hint">Rich text (paragraphs, bullets, bold)</span>
                  <textarea
                    className="av-textarea"
                    value={avAbout}
                    onChange={(event) => setAvAbout(event.target.value)}
                    rows={5}
                    placeholder="Describe the vehicle in detail (condition, equipment highlights, history, service, accessories)..."
                  />
                </label>
              </section>

              <section className="av-card" aria-labelledby="av-prices-title">
                <h2 id="av-prices-title">Prices</h2>
                <label className="av-field">
                  <span>Price</span>
                  <span className="av-control">
                    <span className="av-chf">CHF</span>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={avPrice}
                      onChange={(event) => setAvPrice(event.target.value)}
                      placeholder="0.00"
                    />
                  </span>
                </label>
              </section>

              <section className="av-card" aria-labelledby="av-tech-title">
                <h2 id="av-tech-title">Technical Specifications</h2>
                <div className="av-row">
                  <label className="av-field">
                    <span>Fuel Type</span>
                    <span className="av-control">
                      <select value={avFuel} onChange={(event) => setAvFuel(event.target.value)}>
                        <option value="">Choose</option>
                        {VEHICLE_FUEL.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <img src={addVehicleChevronIcon} width={16} height={16} alt="" />
                    </span>
                  </label>
                  <label className="av-field">
                    <span>Drive Type</span>
                    <span className="av-control">
                      <select value={avDrive} onChange={(event) => setAvDrive(event.target.value)}>
                        <option value="">Choose</option>
                        {VEHICLE_DRIVE.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <img src={addVehicleChevronIcon} width={16} height={16} alt="" />
                    </span>
                  </label>
                </div>
                <div className="av-row">
                  <label className="av-field">
                    <span>Transmission</span>
                    <span className="av-control">
                      <select value={avTrans} onChange={(event) => setAvTrans(event.target.value)}>
                        <option value="">Choose</option>
                        {VEHICLE_TRANS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <img src={addVehicleChevronIcon} width={16} height={16} alt="" />
                    </span>
                  </label>
                  <label className="av-field">
                    <span>Gears</span>
                    <span className="av-control">
                      <select value={avGears} onChange={(event) => setAvGears(event.target.value)}>
                        <option value="">Choose</option>
                        {VEHICLE_GEARS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <img src={addVehicleChevronIcon} width={16} height={16} alt="" />
                    </span>
                  </label>
                </div>
                <div className="av-row">
                  <label className="av-field">
                    <span>Performance</span>
                    <span className="av-control">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={avHp}
                        onChange={(event) => setAvHp(event.target.value)}
                      />
                      <em>HP</em>
                    </span>
                  </label>
                  <label className="av-field">
                    <span>Engine Displacement</span>
                    <span className="av-control">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={avCc}
                        onChange={(event) => setAvCc(event.target.value)}
                      />
                      <em>cc</em>
                    </span>
                  </label>
                </div>
                <label className="av-field">
                  <span>Cylinders</span>
                  <span className="av-control">
                    <select
                      value={avCylinders}
                      onChange={(event) => setAvCylinders(event.target.value)}
                    >
                      <option value="">Choose</option>
                      {VEHICLE_CYLINDERS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <img src={addVehicleChevronIcon} width={16} height={16} alt="" />
                  </span>
                </label>
              </section>

              <section className="av-card" aria-labelledby="av-electric-title">
                <h2 id="av-electric-title">Electric & Hybrid</h2>
                <div className="av-row">
                  <label className="av-field">
                    <span>Reach</span>
                    <span className="av-control">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={avReach}
                        onChange={(event) => setAvReach(event.target.value)}
                        placeholder="350"
                      />
                      <em>WLTP/km</em>
                    </span>
                  </label>
                  <label className="av-field">
                    <span>Battery Capacity</span>
                    <span className="av-control">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={avBattery}
                        onChange={(event) => setAvBattery(event.target.value)}
                        placeholder="75"
                      />
                      <em>kWh</em>
                    </span>
                  </label>
                </div>
              </section>

              <section className="av-card" aria-labelledby="av-weight-title">
                <h2 id="av-weight-title">Weight Information</h2>
                <div className="av-row">
                  <label className="av-field">
                    <span>Empty Weight</span>
                    <span className="av-control">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={avEmptyWeight}
                        onChange={(event) => setAvEmptyWeight(event.target.value)}
                        placeholder="1500"
                      />
                      <em>kg</em>
                    </span>
                  </label>
                  <label className="av-field">
                    <span>Total Weight</span>
                    <span className="av-control">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={avTotalWeight}
                        onChange={(event) => setAvTotalWeight(event.target.value)}
                        placeholder="2000"
                      />
                      <em>kg</em>
                    </span>
                  </label>
                </div>
                <label className="av-field">
                  <span>Towing Capacity</span>
                  <span className="av-control">
                    <input
                      type="text"
                      inputMode="numeric"
                      value={avTowing}
                      onChange={(event) => setAvTowing(event.target.value)}
                      placeholder="1500"
                    />
                    <em>kg</em>
                  </span>
                </label>
              </section>

              <section className="av-card" aria-labelledby="av-color-title">
                <h2 id="av-color-title">Color</h2>
                <label className="av-field">
                  <span>Exterior Color</span>
                  <span className="av-control">
                    <select value={avColor} onChange={(event) => setAvColor(event.target.value)}>
                      <option value="">Choose</option>
                      {VEHICLE_COLORS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <img src={addVehicleChevronIcon} width={16} height={16} alt="" />
                  </span>
                </label>
              </section>

              <section className="av-card" aria-labelledby="av-seats-title">
                <h2 id="av-seats-title">Seats & Doors</h2>
                <div className="av-row">
                  <label className="av-field">
                    <span>Seats</span>
                    <span className="av-control">
                      <input
                        type="number"
                        min={1}
                        max={9}
                        value={avSeats}
                        onChange={(event) => setAvSeats(event.target.value)}
                      />
                    </span>
                  </label>
                  <label className="av-field">
                    <span>Doors</span>
                    <span className="av-control">
                      <input
                        type="number"
                        min={2}
                        max={5}
                        value={avDoors}
                        onChange={(event) => setAvDoors(event.target.value)}
                      />
                    </span>
                  </label>
                </div>
              </section>

              <section className="av-card" aria-labelledby="av-energy-title">
                <h2 id="av-energy-title">Energy & Emissions</h2>
                <div className="av-row">
                  <label className="av-field">
                    <span>Consumption</span>
                    <span className="av-control">
                      <input
                        type="text"
                        value={avConsumption}
                        onChange={(event) => setAvConsumption(event.target.value)}
                        placeholder="6.5"
                      />
                      <em>l/100km</em>
                    </span>
                  </label>
                  <label className="av-field">
                    <span>CO₂</span>
                    <span className="av-control">
                      <input
                        type="text"
                        value={avCo2}
                        onChange={(event) => setAvCo2(event.target.value)}
                        placeholder="120"
                      />
                      <em>g/km</em>
                    </span>
                  </label>
                </div>
              </section>

              <section className="av-card" aria-labelledby="av-euro-title">
                <h2 id="av-euro-title">Emission Standard</h2>
                <label className="av-field">
                  <span>Euro Norm</span>
                  <span className="av-control">
                    <select value={avEuro} onChange={(event) => setAvEuro(event.target.value)}>
                      <option value="">Choose</option>
                      {["Euro 4", "Euro 5", "Euro 6", "Euro 6d", "Euro 6e"].map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <img src={addVehicleChevronIcon} width={16} height={16} alt="" />
                  </span>
                </label>
              </section>

              <section className="av-card" aria-labelledby="av-equip-title">
                <div className="av-equip-head">
                  <h2 id="av-equip-title">Equipment</h2>
                  <button
                    type="button"
                    className="av-equip-toggle"
                    onClick={() => {
                      const allSelected = EQUIPMENT_OPTIONS.every((item) => avEquipment[item]);
                      setAvEquipment(
                        allSelected
                          ? {}
                          : Object.fromEntries(EQUIPMENT_OPTIONS.map((item) => [item, true])),
                      );
                    }}
                  >
                    {EQUIPMENT_OPTIONS.every((item) => avEquipment[item])
                      ? "Clear all"
                      : "Select all"}
                  </button>
                </div>
                <div className="av-equip-list">
                  {EQUIPMENT_OPTIONS.map((item) => (
                    <label className="av-equip-option" key={item}>
                      <input
                        type="checkbox"
                        checked={Boolean(avEquipment[item])}
                        onChange={() =>
                          setAvEquipment((current) => ({
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

              {addVehicleError && (
                <p className="av-error" role="alert">
                  {addVehicleError}
                </p>
              )}

              <button
                className="av-confirm-btn"
                type="button"
                onClick={screen === "edit-vehicle" ? confirmSaveEditVehicle : confirmAddVehicle}
              >
                {screen === "edit-vehicle" ? "Save & Edit" : "Confirm Vehicle"}
              </button>
            </div>
          ) : screen === "my-cars" ? (
            <div className="my-cars-page">
              <section className="my-cars-intro" aria-labelledby="my-cars-intro-title">
                <h2 id="my-cars-intro-title">My Vehicles</h2>
                <p>
                  Manage your vehicle listings, update specifications, and monitor your listing
                  quota.
                </p>
              </section>

              <section className="sell-slots-card" aria-labelledby="my-cars-slots-title">
                <div className="sell-slots-head">
                  <h2 id="my-cars-slots-title">Add New Vehicles</h2>
                  <button
                    className="sell-bulk-btn"
                    type="button"
                    onClick={bulkUpdateSellerVehicles}
                  >
                    Bulk Update
                  </button>
                </div>
                <div
                  className="sell-slots-progress"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={sellerSlotLimit}
                  aria-valuenow={usedSellerSlots}
                  aria-label="Used listing slots"
                >
                  <span style={{ width: `${sellSlotProgress}%` }} />
                </div>
                <div className="sell-slots-stats">
                  <div className="sell-stat sell-stat-remaining">
                    <strong>{remainingSellerSlots}</strong>
                    <span>Remaining Slots</span>
                  </div>
                  <div className="sell-stat">
                    <strong>{usedSellerSlots}</strong>
                    <span>Used Cars</span>
                  </div>
                  <div className="sell-stat">
                    <strong>{sellerSlotLimit}</strong>
                    <span>Total Limit</span>
                  </div>
                </div>
              </section>

              <section className="my-cars-controls" aria-label="Vehicle listing controls">
                <label className="my-cars-search">
                  <img src={myCarsSearchIcon} width={18} height={18} alt="" />
                  <input
                    type="search"
                    value={myCarsQuery}
                    onChange={(event) => {
                      setMyCarsQuery(event.target.value);
                      setMyCarsPage(1);
                    }}
                    placeholder="Search vehicles by make or model..."
                    aria-label="Search vehicles by make or model"
                  />
                </label>

                <button className="my-cars-add-btn" type="button" onClick={openAddVehicle}>
                  + Add Vehicle
                </button>

                <div className="my-cars-filters" role="tablist" aria-label="Listing status">
                  {(
                    [
                      { id: "all", label: "All" },
                      { id: "active", label: "Active" },
                      { id: "inactive", label: "Inactive" },
                      { id: "sold", label: "Sold" },
                    ] as const
                  ).map((filter) => (
                    <button
                      key={filter.id}
                      type="button"
                      role="tab"
                      className={
                        myCarsStatus === filter.id
                          ? `my-cars-filter my-cars-filter-${filter.id} my-cars-filter-active-state`
                          : `my-cars-filter my-cars-filter-${filter.id}`
                      }
                      aria-selected={myCarsStatus === filter.id}
                      onClick={() => {
                        setMyCarsStatus(filter.id);
                        setMyCarsPage(1);
                        setSellMenuOpenId(null);
                      }}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>

                <div className="my-cars-results-row">
                  <p>
                    {myCarsFiltered.length} Vehicle{myCarsFiltered.length === 1 ? "" : "s"}
                  </p>
                  <label className="my-cars-sort">
                    <select
                      value={myCarsSort}
                      onChange={(event) => {
                        setMyCarsSort(event.target.value as MyCarsSort);
                        setMyCarsPage(1);
                      }}
                      aria-label="Sort vehicles"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="price-asc">Price: Low to High</option>
                    </select>
                    <img src={myCarsSortIcon} width={14} height={14} alt="" />
                  </label>
                </div>

                <div className="sell-page-size" aria-label="Vehicles per page">
                  <span>Per page:</span>
                  {([10, 25, 50, 100] as const).map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={
                        myCarsPageSize === size
                          ? "sell-page-size-btn sell-page-size-btn-active"
                          : "sell-page-size-btn"
                      }
                      aria-pressed={myCarsPageSize === size}
                      onClick={() => {
                        setMyCarsPageSize(size);
                        setMyCarsPage(1);
                        setSellMenuOpenId(null);
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </section>

              {myCarsNote && (
                <p className="sell-note" role="status">
                  {myCarsNote}
                </p>
              )}

              {pagedMyCars.length === 0 ? (
                <p className="empty">No vehicles match these filters.</p>
              ) : (
                <div className="list sell-vehicle-list my-cars-list">
                  {pagedMyCars.map((car) => renderSellerVehicleCard(car))}
                </div>
              )}

              {myCarsFiltered.length > myCarsPageSize && (
                <div className="sell-pagination">
                  <button
                    type="button"
                    className="sell-page-nav"
                    disabled={myCarsPage <= 1}
                    onClick={() => {
                      setSellMenuOpenId(null);
                      setMyCarsPage((page) => Math.max(1, page - 1));
                    }}
                  >
                    Previous
                  </button>
                  <span>
                    Page {myCarsPage} of {myCarsTotalPages}
                  </span>
                  <button
                    type="button"
                    className="sell-page-nav"
                    disabled={myCarsPage >= myCarsTotalPages}
                    onClick={() => {
                      setSellMenuOpenId(null);
                      setMyCarsPage((page) => Math.min(myCarsTotalPages, page + 1));
                    }}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          ) : screen === "test-drive-requests" ? (
            <div className="tdr-page">
              <section className="tdr-summary" aria-label="Request status totals">
                <div className="tdr-summary-row">
                  <article className="tdr-stat tdr-stat-stack">
                    <strong className="tdr-stat-upcoming">{testDriveRequestStats.upcoming}</strong>
                    <span>Upcoming</span>
                  </article>
                  <article className="tdr-stat tdr-stat-stack">
                    <strong className="tdr-stat-accepted">{testDriveRequestStats.accepted}</strong>
                    <span>Accepted</span>
                  </article>
                </div>
                <div className="tdr-summary-row">
                  <article className="tdr-stat tdr-stat-inline">
                    <strong>{testDriveRequestStats.rejected}</strong>
                    <span>Rejected</span>
                  </article>
                  <article className="tdr-stat tdr-stat-inline">
                    <strong>{testDriveRequestStats.completed}</strong>
                    <span>Completed</span>
                  </article>
                </div>
              </section>

              {myCarsNote && (
                <p className="tdr-detail-note" role="status">
                  {myCarsNote}
                </p>
              )}

              {testDriveRequests.length === 0 ? (
                <p className="empty">No test drive requests yet.</p>
              ) : (
                <div className="tdr-list">
                  {testDriveRequests.map((request) => {
                    const locked = isTestDriveRequestLocked(request);
                    return (
                    <button
                      key={request.id}
                      type="button"
                      className={locked ? "tdr-card tdr-card-locked" : "tdr-card"}
                      onClick={() => openTestDriveRequestDetails(request.id)}
                      aria-label={`Open ${request.vehicleTitle} request details`}
                    >
                      <div className="tdr-card-top">
                        <span className="tdr-card-id">#{request.number}</span>
                        <span className={`tdr-status tdr-status-${request.status}`}>
                          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                        </span>
                      </div>

                      <div className="tdr-customer">
                        <img
                          className="tdr-avatar"
                          src={request.customerAvatar}
                          width={40}
                          height={40}
                          alt=""
                        />
                        <div className="tdr-customer-copy">
                          <strong>{request.customerName}</strong>
                          <span>{request.customerEmail}</span>
                          <span className="tdr-customer-phone">{request.customerPhone}</span>
                        </div>
                      </div>

                      <div className="tdr-vehicle">
                        <img src={request.vehicleImage} width={88} height={64} alt="" />
                        <div className="tdr-vehicle-copy">
                          <strong>{request.vehicleTitle}</strong>
                          <span>{request.vehicleSubtitle}</span>
                        </div>
                      </div>

                      <div className="tdr-date">
                        <img src={tdrCalendarIcon} width={18} height={18} alt="" />
                        <span>Date</span>
                        <strong>{request.dateLabel}</strong>
                      </div>
                      {locked && (
                        <p className="tdr-card-lock-note">
                          Locked until {request.dateDetailLabel}
                        </p>
                      )}
                    </button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : screen === "test-drive-request-details" && selectedTestDriveRequest ? (
            <div className="tdr-detail-page">
              <section className="tdr-detail-card" aria-labelledby="tdr-customer-title">
                <div className="tdr-detail-card-head">
                  <img src={tdrDetailProfileIcon} width={18} height={18} alt="" />
                  <h2 id="tdr-customer-title">Customer Information</h2>
                </div>
                <hr className="tdr-detail-rule" />
                <div className="tdr-detail-customer">
                  <img
                    className="tdr-detail-avatar"
                    src={selectedTestDriveRequest.customerAvatar}
                    width={52}
                    height={52}
                    alt=""
                  />
                  <div className="tdr-detail-customer-copy">
                    <h3>{selectedTestDriveRequest.customerName}</h3>
                    <p>
                      <img src={tdrDetailMailIcon} width={14} height={14} alt="" />
                      <span>{selectedTestDriveRequest.customerEmail}</span>
                    </p>
                    <p>
                      <img src={tdrDetailCallIcon} width={14} height={14} alt="" />
                      <span>{selectedTestDriveRequest.customerPhone}</span>
                    </p>
                  </div>
                </div>
              </section>

              <section className="tdr-detail-card" aria-labelledby="tdr-vehicle-title">
                <div className="tdr-detail-card-head">
                  <img src={tdrDetailCarIcon} width={18} height={18} alt="" />
                  <h2 id="tdr-vehicle-title">Vehicle Information</h2>
                </div>
                <hr className="tdr-detail-rule" />
                <div className="tdr-detail-vehicle">
                  <img
                    src={selectedTestDriveRequest.vehicleImage}
                    width={96}
                    height={72}
                    alt=""
                  />
                  <div className="tdr-detail-vehicle-copy">
                    <h3>{selectedTestDriveRequest.vehicleTitle}</h3>
                    <p>
                      <span>Brand:</span> {selectedTestDriveRequest.vehicleBrand}
                    </p>
                    <p>
                      <span>Model:</span> {selectedTestDriveRequest.vehicleModel}
                    </p>
                    <p>
                      <span>Year:</span> {selectedTestDriveRequest.vehicleYear}
                    </p>
                  </div>
                </div>
              </section>

              <section className="tdr-detail-card" aria-labelledby="tdr-booking-title">
                <div className="tdr-detail-card-head">
                  <img src={tdrDetailCalendarIcon} width={18} height={18} alt="" />
                  <h2 id="tdr-booking-title">Booking Details</h2>
                </div>
                <hr className="tdr-detail-rule" />
                <div className="tdr-detail-booking">
                  <div className="tdr-detail-booking-row">
                    <div className="tdr-detail-booking-field">
                      <span>Date</span>
                      <strong>{selectedTestDriveRequest.dateDetailLabel}</strong>
                    </div>
                    <div className="tdr-detail-booking-field">
                      <span>Status</span>
                      <em
                        className={`tdr-detail-status tdr-detail-status-${selectedTestDriveRequest.status}`}
                      >
                        {selectedTestDriveRequest.status.charAt(0).toUpperCase() +
                          selectedTestDriveRequest.status.slice(1)}
                      </em>
                    </div>
                  </div>
                  <hr className="tdr-detail-rule tdr-detail-rule-soft" />
                  <div className="tdr-detail-booking-row">
                    <div className="tdr-detail-booking-field">
                      <span>Price</span>
                      <strong>CHF {selectedTestDriveRequest.vehiclePrice.toLocaleString("en-US")}</strong>
                    </div>
                    <div className="tdr-detail-booking-field">
                      <span>Cancelled by customer</span>
                      <strong>{selectedTestDriveRequest.cancelledByCustomer ? "YES" : "NO"}</strong>
                    </div>
                  </div>
                </div>
              </section>

              {(() => {
                const locked = isTestDriveRequestLocked(selectedTestDriveRequest);
                const canDecide = selectedTestDriveRequest.status === "upcoming";
                const canComplete = selectedTestDriveRequest.status === "accepted";
                const isCompleted = selectedTestDriveRequest.status === "completed";

                return (
                  <>
                    {locked && (
                      <p className="tdr-detail-lock" role="status">
                        Accepted. This car is locked for{" "}
                        <strong>{selectedTestDriveRequest.customerName}</strong> until{" "}
                        <strong>{selectedTestDriveRequest.dateDetailLabel}</strong>.
                      </p>
                    )}
                    {canComplete && !locked && (
                      <p className="tdr-detail-note" role="status">
                        Test drive date has passed. Mark the drive complete when finished.
                      </p>
                    )}
                    {isCompleted && (
                      <p className="tdr-detail-note" role="status">
                        This test drive is completed.
                      </p>
                    )}
                    {testDriveRequestNote && canDecide && (
                      <p className="tdr-detail-note" role="status">
                        {testDriveRequestNote}
                      </p>
                    )}
                    {canDecide && (
                      <div className="tdr-detail-actions">
                        <button
                          type="button"
                          className="tdr-detail-reject"
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            rejectTestDriveRequest(selectedTestDriveRequest.id);
                          }}
                        >
                          <img src={tdrDetailRejectIcon} width={16} height={16} alt="" />
                          Reject
                        </button>
                        <button
                          type="button"
                          className="tdr-detail-accept"
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            acceptTestDriveRequest(selectedTestDriveRequest.id);
                          }}
                        >
                          <img src={tdrDetailAcceptIcon} width={16} height={16} alt="" />
                          Accept
                        </button>
                      </div>
                    )}
                    {canComplete && (
                      <div className="tdr-detail-actions">
                        <button
                          type="button"
                          className="tdr-detail-complete"
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            completeTestDriveRequest(selectedTestDriveRequest.id);
                          }}
                        >
                          <img src={tdrDetailAcceptIcon} width={16} height={16} alt="" />
                          Complete Drive
                        </button>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          ) : screen === "my-favourites" ? (
            <div className="favourites-page">
              <div className="search-hub-top">
                <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                  <IconChevronLeft />
                </button>
                <h1 className="search-hub-title favourites-title">My Favourites</h1>
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
                  <span className={accountRoleBadgeClass(accountRole)}>
                    {accountRoleLabel(accountRole)}
                  </span>
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
                      {PROFILE_GENDERS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <IconChevronDown />
                  </span>
                </label>

                <label className="profile-field">
                  <span>Occupation</span>
                  <input
                    type="text"
                    value={profileOccupation}
                    onChange={(event) => setProfileOccupation(event.target.value)}
                    placeholder="Enter occupation"
                    aria-label="Occupation"
                  />
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
              const extras = getListingExtras(
                selectedVehicle,
                selectedVehicleDealer,
                listingDetailOverrides[selectedVehicle.id],
              );
              const year = listingYear(selectedVehicle.date);
              const dealerListings = isOwnListing
                ? sellerListingIds.length
                : LISTINGS.filter((car) =>
                    selectedVehicleDealer.vehicleIds.includes(car.id),
                  ).length;
              const ownerLocationLabel = [profileZip, profileCity]
                .filter(Boolean)
                .join(" ");
              const displayLocation = isOwnListing
                ? ownerLocationLabel || extras.location
                : extras.location;
              const sellerLocation = isOwnListing
                ? `${displayLocation} · ${accountRoleLabel(accountRole)}`
                : `${extras.location} · Seller`;
              const glance = [
                { label: "Mileage", value: selectedVehicle.mileage, icon: specMileageIcon },
                { label: "Power", value: extras.power, icon: specPowerIcon },
                { label: "Fuel Type", value: extras.fuel, icon: specFuelIcon },
                { label: "Gearbox", value: extras.gearbox, icon: specGearboxIcon },
                { label: "Drive", value: extras.drive, icon: specDriveIcon },
                { label: "Year", value: year, icon: specYearIcon },
              ];
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
                { label: "Location", value: displayLocation },
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
                <div
                  className={
                    isOwnListing
                      ? "vehicle-details vehicle-details-owner"
                      : "vehicle-details"
                  }
                >
                  <div className="search-hub-top vehicle-details-top">
                    <button className="hub-back" type="button" aria-label="Go back" onClick={goBack}>
                      <IconChevronLeft />
                    </button>
                    <h1 className="search-hub-title">Car Details</h1>
                    {isOwnListing ? (
                      <div className="vehicle-details-actions vehicle-details-owner-menu-wrap">
                        <button
                          className="vehicle-details-icon-btn"
                          type="button"
                          aria-label={`Manage ${selectedVehicle.name}`}
                          aria-expanded={ownerDetailsMenuOpen}
                          onClick={() =>
                            setOwnerDetailsMenuOpen((current) => !current)
                          }
                        >
                          <img src={sellMenuIcon} width={16} height={16} alt="" />
                        </button>
                        {ownerDetailsMenuOpen && (
                          <div
                            className="sell-vehicle-menu vehicle-details-owner-menu"
                            role="menu"
                            aria-label="ACTIONS"
                          >
                            <div className="sell-vehicle-menu-head">ACTIONS</div>
                            <button
                              type="button"
                              role="menuitem"
                              className="sell-vehicle-menu-item"
                              onClick={() => {
                                setOwnerDetailsMenuOpen(false);
                                openEditVehicle(selectedVehicle.id);
                              }}
                            >
                              <img src={vehicleActionEditIcon} width={14} height={14} alt="" />
                              <span>Edit Vehicle</span>
                            </button>
                            <button
                              type="button"
                              role="menuitem"
                              className={
                                (sellerListingStatus[selectedVehicle.id] ?? "active") === "inactive"
                                  ? "sell-vehicle-menu-item sell-vehicle-menu-activate"
                                  : "sell-vehicle-menu-item sell-vehicle-menu-pause"
                              }
                              onClick={() =>
                                (sellerListingStatus[selectedVehicle.id] ?? "active") === "inactive"
                                  ? activateSellerListing(selectedVehicle.id)
                                  : openPauseListingDialog(selectedVehicle.id)
                              }
                            >
                              <span
                                className={
                                  (sellerListingStatus[selectedVehicle.id] ?? "active") ===
                                  "inactive"
                                    ? "sell-vehicle-menu-icon sell-vehicle-menu-icon-activate"
                                    : "sell-vehicle-menu-icon sell-vehicle-menu-icon-pause"
                                }
                                aria-hidden="true"
                              >
                                <img src={vehicleActionPauseIcon} width={8} height={8} alt="" />
                              </span>
                              <span>
                                {(sellerListingStatus[selectedVehicle.id] ?? "active") === "inactive"
                                  ? "Activate Listing"
                                  : "Pause / Deactivate"}
                              </span>
                            </button>
                            <button
                              type="button"
                              role="menuitem"
                              className="sell-vehicle-menu-item sell-vehicle-menu-sold"
                              onClick={() => openSoldListingDialog(selectedVehicle.id)}
                            >
                              <span
                                className="sell-vehicle-menu-icon sell-vehicle-menu-icon-sold"
                                aria-hidden="true"
                              >
                                <img src={vehicleActionSoldIcon} width={10} height={10} alt="" />
                              </span>
                              <span>Mark as Sold</span>
                            </button>
                            <div className="sell-vehicle-menu-divider" role="presentation" />
                            <button
                              type="button"
                              role="menuitem"
                              className="sell-vehicle-menu-item sell-vehicle-menu-danger"
                              onClick={() => openDeleteListingDialog(selectedVehicle.id)}
                            >
                              <img src={vehicleActionDeleteIcon} width={14} height={14} alt="" />
                              <span>Delete Listing</span>
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
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
                          aria-label={
                            saved[selectedVehicle.id] ? "Remove from saved" : "Save vehicle"
                          }
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
                    )}
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
                          {displayLocation}
                        </p>
                        {!isOwnListing && (
                          <>
                            <hr className="vehicle-details-divider" />
                            <div className="vehicle-details-dealer-row">
                              <span>
                                <strong>{dealerListings}</strong> Vehicles online
                              </span>
                              <button
                                type="button"
                                className="vehicle-details-dealer-link"
                                onClick={() =>
                                  openVehicleDealerFromListing(selectedVehicleDealer.id)
                                }
                              >
                                vehicles from this dealer
                                <IconChevronRight />
                              </button>
                            </div>
                          </>
                        )}
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
                        {isOwnListing ? (
                          <button
                            type="button"
                            className="vehicle-details-seller-card vehicle-details-owner-card"
                            onClick={openMyProfile}
                            aria-label="Open My Profile"
                          >
                            <img
                              className="vehicle-details-owner-avatar"
                              src={profilePhoto}
                              width={52}
                              height={52}
                              alt=""
                            />
                            <div className="vehicle-details-seller-copy">
                              <h4>{profileFullName || "Your name"}</h4>
                              <p>
                                <IconPinSmall />
                                {sellerLocation}
                              </p>
                              <span className="vehicle-details-dealer-stock">
                                {dealerListings} vehicles online
                              </span>
                            </div>
                          </button>
                        ) : (
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
                                onClick={() =>
                                  openVehicleDealerFromListing(selectedVehicleDealer.id)
                                }
                              >
                                {dealerListings} vehicles online
                              </button>
                            </div>
                          </div>
                        )}
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

                  {!isOwnListing && (
                    <div className="vehicle-details-cta">
                      <div>
                        <span>Total Price</span>
                        <strong>{chfMoney(selectedVehicle.price)}</strong>
                      </div>
                      <a
                        className="vehicle-details-email"
                        href={`mailto:${selectedVehicleDealer.email}`}
                      >
                        <IconMail />
                        Email
                      </a>
                      <a
                        className="vehicle-details-contact"
                        href={`tel:${selectedVehicleDealer.phone}`}
                      >
                        <IconPhone />
                        Contact
                      </a>
                    </div>
                  )}
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
                  <span className={accountRoleBadgeClass(accountRole)}>
                    {accountRoleLabel(accountRole)}
                  </span>
                </div>
              </button>

              <div className="profile-menu">
                <div className="profile-menu-group">
                  {canSell &&
                    PROFILE_MENU_SELLER.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className="profile-menu-item"
                        onClick={() => handleSellerMenu(item.id)}
                      >
                        <span className="profile-menu-label">
                          <img src={item.icon} width={16} height={16} alt="" />
                          <span>{item.label}</span>
                        </span>
                        <span className="profile-menu-trail">
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
                        if (item.id === "language") openSelectLanguage();
                      }}
                    >
                      <span className="profile-menu-label">
                        <img src={item.icon} width={16} height={16} alt="" />
                        <span>{canSell && item.id === "favourites" ? "My Favourite" : item.label}</span>
                      </span>
                      <span className="profile-menu-trail">
                        {item.id === "language" ? (
                          <span className="profile-menu-meta">{appLanguageMenuMeta(appLanguageCode)}</span>
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
                    <button
                      key={item.id}
                      type="button"
                      className="profile-menu-item"
                      onClick={() => handleProfileSecondaryMenu(item.id)}
                    >
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
                  <button
                    type="button"
                    className="profile-menu-item profile-menu-item-danger"
                    onClick={openSignOutConfirm}
                  >
                    <span className="profile-menu-label">
                      <img src={profileMenuSignOut} width={14} height={14} alt="" />
                      <span>Sign Out</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ) : onPlanTab ? (
            isSeller ? (
              <div className="sell-page">
                <div className="plan-subscription-card">
                  <div className="plan-subscription-symbol" aria-hidden="true">
                    <img src={planLayersIcon} width={20} height={20} alt="" />
                  </div>
                  <div className="plan-subscription-copy">
                    <h2>Need More Vehicle Listings?</h2>
                    <p>
                      Add another subscription plan to list more vehicles. Your current plan stays
                      active.
                    </p>
                  </div>
                  <button className="plan-view-btn" type="button" onClick={openSubscriptionPlans}>
                    View Plans
                  </button>
                </div>

                <section className="sell-slots-card" aria-labelledby="sell-slots-title">
                  <div className="sell-slots-head">
                    <h2 id="sell-slots-title">Add New Vehicles</h2>
                    <button
                      className="sell-bulk-btn"
                      type="button"
                      onClick={bulkUpdateSellerVehicles}
                    >
                      Bulk Update
                    </button>
                  </div>
                  <div
                    className="sell-slots-progress"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={sellerSlotLimit}
                    aria-valuenow={usedSellerSlots}
                    aria-label="Used listing slots"
                  >
                    <span style={{ width: `${sellSlotProgress}%` }} />
                  </div>
                  <div className="sell-slots-stats">
                    <div className="sell-stat sell-stat-remaining">
                      <strong>{remainingSellerSlots}</strong>
                      <span>Remaining Slots</span>
                    </div>
                    <div className="sell-stat">
                      <strong>{usedSellerSlots}</strong>
                      <span>Used Cars</span>
                    </div>
                    <div className="sell-stat">
                      <strong>{sellerSlotLimit}</strong>
                      <span>Total Limit</span>
                    </div>
                  </div>
                </section>

                <div className="sell-divider" aria-hidden="true" />

                <section className="sell-manage" aria-labelledby="sell-manage-title">
                  <div className="sell-manage-head">
                    <div>
                      <h2 id="sell-manage-title">Manage My Vehicles</h2>
                      <p>Manage and add you cars</p>
                    </div>
                  </div>

                  {(sellNote || subscriptionNote) && (
                    <p className="sell-note" role="status">
                      {sellNote ?? subscriptionNote}
                    </p>
                  )}

                  <div className="sell-results-row">
                    <p>
                      {usedSellerSlots} Vehicle{usedSellerSlots === 1 ? "" : "s"}
                    </p>
                  </div>

                  <div className="sell-page-size" aria-label="Vehicles per page">
                    <span>Per page:</span>
                    {([1, 2, 3] as const).map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={
                          sellPageSize === size
                            ? "sell-page-size-btn sell-page-size-btn-active"
                            : "sell-page-size-btn"
                        }
                        aria-pressed={sellPageSize === size}
                        onClick={() => {
                          setSellPageSize(size);
                          setSellPage(1);
                          setSellMenuOpenId(null);
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>

                  {pagedSellerListings.length === 0 ? (
                    <p className="empty">
                      No vehicles listed yet.
                    </p>
                  ) : (
                    <div className="list sell-vehicle-list">
                      {pagedSellerListings.map((car) => renderSellerVehicleCard(car))}
                    </div>
                  )}

                  {usedSellerSlots > sellPageSize && (
                    <div className="sell-pagination">
                      <button
                        type="button"
                        className="sell-page-nav"
                        disabled={sellPage <= 1}
                        onClick={() => {
                          setSellMenuOpenId(null);
                          setSellPage((page) => Math.max(1, page - 1));
                        }}
                      >
                        Previous
                      </button>
                      <span>
                        Page {sellPage} of {sellTotalPages}
                      </span>
                      <button
                        type="button"
                        className="sell-page-nav"
                        disabled={sellPage >= sellTotalPages}
                        onClick={() => {
                          setSellMenuOpenId(null);
                          setSellPage((page) => Math.min(sellTotalPages, page + 1));
                        }}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </section>
              </div>
            ) : (
              <div className="plan-page">
                <div className="plan-subscription-card">
                  <div className="plan-subscription-symbol" aria-hidden="true">
                    <img src={planLayersIcon} width={20} height={20} alt="" />
                  </div>
                  <div className="plan-subscription-copy">
                    <h2>Choose a Subscription Plan</h2>
                    <p>
                      Unlock more vehicle listings, faster visibility, and premium tools to sell
                      faster on AutoPlaza.
                    </p>
                  </div>
                  <button className="plan-view-btn" type="button" onClick={openSubscriptionPlans}>
                    View Plans
                  </button>
                </div>

                <section className="plan-why" aria-labelledby="plan-why-title">
                  <h3 id="plan-why-title">WHY AUTOPLAZA.CH is the best choice?</h3>
                  <p className="plan-why-lead">
                    Full cost certainty, maximum reach in Switzerland and state-of-the-art sales
                    tools.
                  </p>
                  <ul className="plan-benefits">
                    {PLAN_BENEFITS.map((benefit) => (
                      <li key={benefit.title} className="plan-benefit-card">
                        <img
                          className="plan-benefit-icon"
                          src={benefit.icon}
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
            )
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
                <span className="tab-label">{isSeller ? "Sell" : "Plan"}</span>
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

        {listingActionDialog &&
          (() => {
            const dialogVehicle =
              customListings.find((car) => car.id === listingActionDialog.vehicleId) ??
              LISTINGS.find((car) => car.id === listingActionDialog.vehicleId) ??
              null;
            const vehicleLabel = dialogVehicle?.name ?? dialogVehicle?.brand ?? "Vehicle";

            if (listingActionDialog.type === "pause") {
              return (
                <div
                  className="listing-action-modal"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="listing-pause-title"
                >
                  <button
                    className="listing-action-backdrop"
                    type="button"
                    aria-label="Dismiss deactivate listing"
                    onClick={closeListingActionDialog}
                  />
                  <div className="listing-action-card listing-pause-card">
                    <div className="listing-action-head">
                      <span className="listing-pause-emblem" aria-hidden="true">
                        <span className="listing-pause-ring">
                          <img src={listingPauseIcon} width={12} height={12} alt="" />
                        </span>
                      </span>
                      <div className="listing-action-titles">
                        <h2 id="listing-pause-title">Deactivate Listing</h2>
                        <p>{vehicleLabel}</p>
                      </div>
                      <button
                        type="button"
                        className="listing-action-close"
                        aria-label="Close"
                        onClick={closeListingActionDialog}
                      >
                        <img src={listingDialogCloseIcon} width={24} height={24} alt="" />
                      </button>
                    </div>
                    <div className="listing-action-body">
                      <hr className="listing-action-rule" />
                      <p className="listing-action-copy">
                        Are you sure you want to deactivate this listing? It will be taken offline
                        and moved to Inactive. You can reactivate it anytime.
                      </p>
                      <hr className="listing-action-rule" />
                    </div>
                    <div className="listing-action-actions">
                      <button
                        type="button"
                        className="listing-action-cancel"
                        onClick={closeListingActionDialog}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="listing-pause-confirm"
                        onClick={confirmPauseListing}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            if (listingActionDialog.type === "sold") {
              return (
                <div
                  className="listing-action-modal"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="listing-sold-title"
                >
                  <button
                    className="listing-action-backdrop"
                    type="button"
                    aria-label="Dismiss mark as sold"
                    onClick={closeListingActionDialog}
                  />
                  <div className="listing-action-card listing-sold-card">
                    <div className="listing-action-head">
                      <span className="listing-sold-emblem" aria-hidden="true">
                        <span className="listing-sold-ring">
                          <img src={listingSoldCheckIcon} width={12} height={12} alt="" />
                        </span>
                      </span>
                      <div className="listing-action-titles">
                        <h2 id="listing-sold-title">Mark as Sold</h2>
                        <p>{vehicleLabel}</p>
                      </div>
                      <button
                        type="button"
                        className="listing-action-close"
                        aria-label="Close"
                        onClick={closeListingActionDialog}
                      >
                        <img src={listingDialogCloseIcon} width={20} height={20} alt="" />
                      </button>
                    </div>
                    <div className="listing-action-body">
                      <hr className="listing-action-rule" />
                      <p className="listing-action-copy listing-sold-copy">
                        Are you sure you want to mark this vehicle as sold? The listing will be set
                        offline and auto-renewal in Stripe will be permanently terminated.
                      </p>
                      <hr className="listing-action-rule" />
                    </div>
                    <div className="listing-action-actions">
                      <button
                        type="button"
                        className="listing-action-cancel"
                        onClick={closeListingActionDialog}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="listing-sold-confirm"
                        onClick={confirmSoldListing}
                      >
                        Yes, Mark as Sold
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                className="listing-action-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="listing-delete-title"
              >
                <button
                  className="listing-action-backdrop"
                  type="button"
                  aria-label="Dismiss delete listing"
                  onClick={closeListingActionDialog}
                />
                <div className="listing-action-card listing-delete-card">
                  {listingActionDialog.step === "confirm" ? (
                    <>
                      <div className="listing-action-head">
                        <span className="listing-delete-emblem" aria-hidden="true">
                          <img src={listingDeleteAlertIcon} width={20} height={20} alt="" />
                        </span>
                        <div className="listing-action-titles">
                          <h2 id="listing-delete-title">Delete Vehicle</h2>
                          <p>{vehicleLabel}</p>
                        </div>
                        <button
                          type="button"
                          className="listing-action-close"
                          aria-label="Close"
                          onClick={closeListingActionDialog}
                        >
                          <img src={listingDialogCloseIcon} width={20} height={20} alt="" />
                        </button>
                      </div>
                      <div className="listing-action-body">
                        <hr className="listing-action-rule" />
                        <p className="listing-action-copy">
                          Are you sure you want to delete this listing? The vehicle will be removed
                          and automatic renewal will be cancelled automatically.
                        </p>
                        <hr className="listing-action-rule" />
                      </div>
                      <div className="listing-action-actions">
                        <button
                          type="button"
                          className="listing-action-cancel"
                          onClick={closeListingActionDialog}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="listing-delete-confirm"
                          onClick={requestDeleteListingOtp}
                        >
                          Delete Listing
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="listing-action-head">
                        <span className="listing-delete-emblem" aria-hidden="true">
                          <img src={listingDeleteAlertIcon} width={20} height={20} alt="" />
                        </span>
                        <div className="listing-action-titles">
                          <h2 id="listing-delete-title">Confirm deletion</h2>
                          <p>{vehicleLabel}</p>
                        </div>
                        <button
                          type="button"
                          className="listing-action-close"
                          aria-label="Close"
                          onClick={closeListingActionDialog}
                        >
                          <img src={listingDialogCloseIcon} width={20} height={20} alt="" />
                        </button>
                      </div>
                      <div className="listing-action-body listing-delete-otp-body">
                        <hr className="listing-action-rule" />
                        <p className="listing-action-copy">
                          We sent a 6-digit code to{" "}
                          <strong>{profileEmail || "your registered email"}</strong>. Enter it
                          below to permanently delete this listing.
                        </p>
                        <p className="listing-delete-otp-demo" aria-live="polite">
                          Demo code (no email server): <strong>{listingDeleteOtpCode}</strong>
                        </p>
                        <label className="listing-delete-otp-field">
                          <span>Verification code</span>
                          <input
                            type="text"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            maxLength={6}
                            value={listingDeleteOtpInput}
                            onChange={(event) => {
                              setListingDeleteOtpInput(
                                event.target.value.replace(/\D/g, "").slice(0, 6),
                              );
                              setListingDeleteOtpError(null);
                            }}
                            placeholder="Enter 6-digit OTP"
                            aria-invalid={Boolean(listingDeleteOtpError)}
                          />
                        </label>
                        {listingDeleteOtpError && (
                          <p className="listing-delete-otp-error" role="alert">
                            {listingDeleteOtpError}
                          </p>
                        )}
                        <hr className="listing-action-rule" />
                      </div>
                      <div className="listing-action-actions">
                        <button
                          type="button"
                          className="listing-action-cancel"
                          onClick={closeListingActionDialog}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="listing-delete-confirm"
                          onClick={confirmDeleteListingOtp}
                        >
                          Confirm OTP
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })()}

        {signOutOpen && (
          <div
            className="sign-out-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sign-out-title"
          >
            <button
              className="sign-out-backdrop"
              type="button"
              aria-label="Dismiss sign out"
              onClick={closeSignOutConfirm}
            />
            <div className="sign-out-card">
              <div className="sign-out-symbol" aria-hidden="true">
                <img src={signOutIcon} width={25} height={25} alt="" />
              </div>
              <div className="sign-out-copy">
                <h2 id="sign-out-title">Sign Out?</h2>
                <p>Are you sure you want to sign out of your AutoPlaza account?</p>
                <p className="sign-out-note">
                  Your saved vehicles will be here when you sign in again.
                </p>
              </div>
              <div className="sign-out-actions">
                <button className="sign-out-confirm" type="button" onClick={confirmSignOut}>
                  Sign Out
                </button>
                <button className="sign-out-cancel" type="button" onClick={closeSignOutConfirm}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {paymentGatewayOpen && (
          <div
            className="payment-gateway-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-gateway-title"
          >
            <button
              className="payment-gateway-backdrop"
              type="button"
              aria-label="Dismiss payment gateway"
              onClick={closePaymentGateway}
            />
            <div className="payment-gateway-card">
              {paymentGatewayStep === "choose" || !selectedPaymentGateway ? (
                <>
                  <div className="payment-gateway-copy">
                    <h2 id="payment-gateway-title">Choose payment method</h2>
                    <p>
                      Complete your subscription for{" "}
                      <strong>{subscriptionCheckoutAmount()}</strong>
                      {subscriptionAudience === "dealers"
                        ? ` · ${dealerVehicleCount} vehicles / month`
                        : " per vehicle / month"}
                      .
                    </p>
                  </div>

                  <div className="payment-gateway-list" role="listbox" aria-label="Payment gateways">
                    {PAYMENT_GATEWAYS.map((gateway) => (
                      <button
                        key={gateway.id}
                        type="button"
                        role="option"
                        aria-selected={selectedPaymentGateway === gateway.id}
                        className={`payment-gateway-option payment-gateway-${gateway.tone}`}
                        onClick={() => openGatewayPaymentPage(gateway.id)}
                      >
                        <img
                          className="payment-gateway-icon"
                          src={gateway.icon}
                          width={40}
                          height={40}
                          alt=""
                        />
                        <span className="payment-gateway-option-copy">
                          <strong>{gateway.name}</strong>
                          <span>{gateway.subtitle}</span>
                        </span>
                      </button>
                    ))}
                  </div>

                  <button
                    className="payment-gateway-cancel"
                    type="button"
                    onClick={closePaymentGateway}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  {(() => {
                    const gateway = PAYMENT_GATEWAYS.find(
                      (item) => item.id === selectedPaymentGateway,
                    );
                    if (!gateway) return null;
                    return (
                      <>
                        <div className="payment-gateway-pay-head">
                          <button
                            className="payment-gateway-back"
                            type="button"
                            onClick={backToPaymentGatewayList}
                          >
                            Back
                          </button>
                          <div className="payment-gateway-pay-brand">
                            <img src={gateway.icon} width={40} height={40} alt="" />
                            <div>
                              <h2 id="payment-gateway-title">{gateway.name} payment</h2>
                              <p>
                                Pay <strong>{subscriptionCheckoutAmount()}</strong> for{" "}
                                {subscriptionPackageLabel()}.
                              </p>
                            </div>
                          </div>
                        </div>

                        {gateway.id === "stripe" && (
                          <div className="payment-gateway-form">
                            <label className="payment-gateway-field">
                              <span>Cardholder name</span>
                              <input
                                type="text"
                                value={payCardName}
                                onChange={(event) => {
                                  setPayCardName(event.target.value);
                                  setPaymentError(null);
                                }}
                                placeholder="Name on card"
                                autoComplete="cc-name"
                              />
                            </label>
                            <label className="payment-gateway-field">
                              <span>Card number</span>
                              <input
                                type="text"
                                inputMode="numeric"
                                value={payCardNumber}
                                onChange={(event) => {
                                  setPayCardNumber(formatCardNumberInput(event.target.value));
                                  setPaymentError(null);
                                }}
                                placeholder="ACCT-000035"
                                autoComplete="cc-number"
                              />
                            </label>
                            <div className="payment-gateway-row">
                              <label className="payment-gateway-field">
                                <span>Expiry</span>
                                <input
                                  type="text"
                                  inputMode="numeric"
                                  value={payCardExpiry}
                                  onChange={(event) => {
                                    setPayCardExpiry(formatCardExpiryInput(event.target.value));
                                    setPaymentError(null);
                                  }}
                                  placeholder="MM/YY"
                                  autoComplete="cc-exp"
                                />
                              </label>
                              <label className="payment-gateway-field">
                                <span>CVC</span>
                                <input
                                  type="password"
                                  inputMode="numeric"
                                  value={payCardCvc}
                                  onChange={(event) => {
                                    setPayCardCvc(event.target.value.replace(/\D/g, "").slice(0, 4));
                                    setPaymentError(null);
                                  }}
                                  placeholder="123"
                                  autoComplete="cc-csc"
                                />
                              </label>
                            </div>
                          </div>
                        )}

                        {gateway.id === "paypal" && (
                          <div className="payment-gateway-form">
                            <label className="payment-gateway-field">
                              <span>PayPal email</span>
                              <input
                                type="email"
                                value={payPaypalEmail}
                                onChange={(event) => {
                                  setPayPaypalEmail(event.target.value);
                                  setPaymentError(null);
                                }}
                                placeholder="name@example.com"
                                autoComplete="email"
                              />
                            </label>
                            <label className="payment-gateway-field">
                              <span>PayPal password</span>
                              <input
                                type="password"
                                value={payPaypalPassword}
                                onChange={(event) => {
                                  setPayPaypalPassword(event.target.value);
                                  setPaymentError(null);
                                }}
                                placeholder="Enter password"
                                autoComplete="current-password"
                              />
                            </label>
                          </div>
                        )}

                        {gateway.id === "fastpay" && (
                          <div className="payment-gateway-form">
                            <label className="payment-gateway-field">
                              <span>FastPay mobile number</span>
                              <input
                                type="tel"
                                value={payFastpayMobile}
                                onChange={(event) => {
                                  setPayFastpayMobile(event.target.value.replace(/[^\d+\s]/g, ""));
                                  setPaymentError(null);
                                }}
                                placeholder="01XXXXXXXXX"
                                autoComplete="tel"
                              />
                            </label>
                            <label className="payment-gateway-field">
                              <span>FastPay PIN</span>
                              <input
                                type="password"
                                inputMode="numeric"
                                value={payFastpayPin}
                                onChange={(event) => {
                                  setPayFastpayPin(event.target.value.replace(/\D/g, "").slice(0, 6));
                                  setPaymentError(null);
                                }}
                                placeholder="Enter PIN"
                              />
                            </label>
                          </div>
                        )}

                        {gateway.id === "sslcommerz" && (
                          <div className="payment-gateway-form">
                            <label className="payment-gateway-field">
                              <span>Payment option</span>
                              <select
                                value={paySslMethod}
                                onChange={(event) => {
                                  setPaySslMethod(event.target.value);
                                  setPaymentError(null);
                                }}
                              >
                                <option value="card">Visa / Mastercard</option>
                                <option value="bkash">bKash</option>
                                <option value="nagad">Nagad</option>
                                <option value="rocket">Rocket</option>
                              </select>
                            </label>
                            <label className="payment-gateway-field">
                              <span>Mobile number</span>
                              <input
                                type="tel"
                                value={paySslMobile}
                                onChange={(event) => {
                                  setPaySslMobile(event.target.value.replace(/[^\d+\s]/g, ""));
                                  setPaymentError(null);
                                }}
                                placeholder="01XXXXXXXXX"
                                autoComplete="tel"
                              />
                            </label>
                          </div>
                        )}

                        {paymentError && (
                          <p className="payment-gateway-error" role="alert">
                            {paymentError}
                          </p>
                        )}

                        <button
                          className="payment-gateway-confirm"
                          type="button"
                          onClick={confirmPaymentPurchase}
                        >
                          Confirm payment
                        </button>
                        <button
                          className="payment-gateway-cancel"
                          type="button"
                          onClick={closePaymentGateway}
                        >
                          Cancel
                        </button>
                      </>
                    );
                  })()}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
