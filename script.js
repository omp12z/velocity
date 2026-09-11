/* VELOCITY30 — fastest car of each of the top 30 brands, ranked by top speed */

const cars = [
  {
    rank: 1,
    brand: "Koenigsegg",
    model: "Jesko Absolut",
    year: 2025,
    type: "gas",
    engine: "5.0L Twin-Turbo V8",
    power: "1,600 hp",
    torque: "1,500 Nm",
    drive: "RWD",
    trans: "9-Speed LST",
    topMph: 330,
    topKmh: 531,
    zeroSixty: 2.5,
    description:
      "Built for one purpose — to be the fastest production car on Earth. Koenigsegg stripped the wing, sculpted an \"Absolut\" body with a 0.278 drag coefficient, and filled it with a 5.0-liter twin-turbo V8 that makes a claimed 1,600 hp on E85. The company targets an all-out run beyond 330 mph, making this the ultimate expression of uncompromising speed."
  },
  {
    rank: 2,
    brand: "Bugatti",
    model: "Chiron Super Sport 300+",
    year: 2020,
    type: "gas",
    engine: "8.0L Quad-Turbo W16",
    power: "1,578 hp",
    torque: "1,600 Nm",
    drive: "AWD",
    trans: "7-Speed DCT",
    topMph: 304,
    topKmh: 490,
    zeroSixty: 2.3,
    description:
      "The first production car in history to break the 300 mph barrier, piloted to 304.77 mph by Le Mans winner Andy Wallace. Under the stretched longtail bodywork sits the legendary 8.0-liter quad-turbo W16, retuned to 1,578 hp. Just 30 were built, each a rolling monument to Bugatti's obsession with top speed."
  },
  {
    rank: 3,
    brand: "SSC North America",
    model: "Tuatara",
    year: 2020,
    type: "gas",
    engine: "5.9L Twin-Turbo V8",
    power: "1,750 hp",
    torque: "1,514 Nm",
    drive: "RWD",
    trans: "7-Speed SMG",
    topMph: 282,
    topKmh: 455,
    zeroSixty: 2.5,
    description:
      "An American engineering statement from SSC. The Tuatara's flat-plane-crank twin-turbo V8 makes up to 1,750 hp on E85 and, with a 0.279 drag coefficient and active aerodynamics, it has claimed a verified 282.9 mph top speed — a serious challenger to the European hypercar establishment."
  },
  {
    rank: 4,
    brand: "Hennessey",
    model: "Venom F5",
    year: 2022,
    type: "gas",
    engine: "6.6L Twin-Turbo V8 \"Fury\"",
    power: "1,817 hp",
    torque: "1,617 Nm",
    drive: "RWD",
    trans: "7-Speed Single-Clutch",
    topMph: 272,
    topKmh: 437,
    zeroSixty: 2.6,
    description:
      "Named after the most powerful tornado ever recorded, the Venom F5 is a 1,817 hp carbon-fiber missile from Texas-based Hennessey Performance. Its bespoke 6.6-liter \"Fury\" twin-turbo V8 and featherweight monocoque are projected to push it past 272 mph — raw American muscle elevated to hypercar status."
  },
  {
    rank: 5,
    brand: "Rimac",
    model: "Nevera",
    year: 2021,
    type: "ev",
    engine: "4× Electric Motors",
    power: "1,914 hp",
    torque: "2,360 Nm",
    drive: "AWD",
    trans: "Single-Speed",
    topMph: 258,
    topKmh: 415,
    zeroSixty: 1.85,
    description:
      "Croatia's electric hypercar and the fastest EV in the world, verified at 258 mph. Four independent electric motors deliver 1,914 hp and a staggering 2,360 Nm of torque, hurling the Nevera to 60 mph in 1.85 seconds. Its 120 kWh battery and torque-vectoring wizardry make it as agile as it is brutal."
  },
  {
    rank: 6,
    brand: "McLaren",
    model: "Speedtail",
    year: 2020,
    type: "hybrid",
    engine: "4.0L Twin-Turbo V8 + E-Motor",
    power: "1,035 hp",
    torque: "1,150 Nm",
    drive: "RWD",
    trans: "7-Speed Seamless Shift",
    topMph: 250,
    topKmh: 403,
    zeroSixty: 2.9,
    description:
      "McLaren's ultimate hyper-GT, with a central driving position and a claimed 250 mph top speed. The hybrid twin-turbo V8 generates 1,035 hp while the teardrop bodywork and carbon monocoque deliver extreme low drag. It's a grand tourer disguised as a land-speed record attempt."
  },
  {
    rank: 7,
    brand: "Aston Martin",
    model: "Valkyrie",
    year: 2021,
    type: "hybrid",
    engine: "6.5L NA V12 + Hybrid",
    power: "1,160 hp",
    torque: "900 Nm",
    drive: "RWD",
    trans: "7-Speed DCT",
    topMph: 250,
    topKmh: 402,
    zeroSixty: 2.6,
    description:
      "A road car co-developed with Red Bull Advanced Technologies, built around a screaming 6.5-liter naturally aspirated V12 that revs to 11,100 rpm. With hybrid boost the Valkyrie produces 1,160 hp, weighs under 1,030 kg and generates enormous downforce — Formula 1 performance with a license plate."
  },
  {
    rank: 8,
    brand: "Pagani",
    model: "Huayra BC",
    year: 2017,
    type: "gas",
    engine: "6.0L Twin-Turbo V12",
    power: "789 hp",
    torque: "1,050 Nm",
    drive: "RWD",
    trans: "7-Speed Automated Manual",
    topMph: 238,
    topKmh: 383,
    zeroSixty: 2.8,
    description:
      "Named after Benny Caiola, Pagani's late friend and first customer, the BC is a track-focused take on the Huayra. Its AMG-built twin-turbo V12 produces 789 hp, while the carbon-titanium body weighs just 1,218 kg. Every surface is hand-crafted art; every kilogram has been engineered away."
  },
  {
    rank: 9,
    brand: "Lucid",
    model: "Air Sapphire",
    year: 2023,
    type: "ev",
    engine: "3× Electric Motors",
    power: "1,234 hp",
    torque: "1,970 Nm",
    drive: "AWD",
    trans: "Single-Speed",
    topMph: 235,
    topKmh: 378,
    zeroSixty: 1.89,
    description:
      "The most powerful production sedan ever made and a verified 235 mph electric tour de force. Three motors drive all four wheels to 60 mph in 1.89 seconds, while Lucid's in-house motor tech and 900V architecture make the Sapphire the benchmark for electric performance luxury."
  },
  {
    rank: 10,
    brand: "Chevrolet",
    model: "Corvette ZR1",
    year: 2025,
    type: "gas",
    engine: "5.5L Twin-Turbo V8",
    power: "1,064 hp",
    torque: "1,122 Nm",
    drive: "RWD",
    trans: "8-Speed DCT",
    topMph: 233,
    topKmh: 375,
    zeroSixty: 2.3,
    description:
      "The fastest and most powerful Corvette ever built. The C8 ZR1's 5.5-liter flat-plane-crank twin-turbo V8 produces 1,064 hp and has been verified at 233 mph. Combined with the mid-engine layout and ZTK carbon aero package, it's American performance engineering at its peak — for a fraction of hypercar money."
  },
  {
    rank: 11,
    brand: "Mercedes-AMG",
    model: "One",
    year: 2022,
    type: "hybrid",
    engine: "1.6L Turbo V6 + 4 E-Motors",
    power: "1,063 hp",
    torque: "1,250 Nm",
    drive: "AWD",
    trans: "7-Speed Automated Manual",
    topMph: 219,
    topKmh: 352,
    zeroSixty: 2.9,
    description:
      "Formula 1 for the road. The AMG One's 1.6-liter V6 and four electric motors come straight from Mercedes' championship-winning hybrid powertrain, delivering 1,063 hp at 11,000 rpm. A combustion engine exceeding 50% thermal efficiency — wearing a license plate."
  },
  {
    rank: 12,
    brand: "Lamborghini",
    model: "Revuelto",
    year: 2023,
    type: "hybrid",
    engine: "6.5L NA V12 + 3 E-Motors",
    power: "1,001 hp",
    torque: "1,063 Nm",
    drive: "AWD",
    trans: "8-Speed DCT",
    topMph: 217,
    topKmh: 350,
    zeroSixty: 2.5,
    description:
      "The first Lamborghini HPEV hybrid. A naturally aspirated 6.5-liter V12 screaming to 9,500 rpm is joined by three electric motors for a combined 1,001 hp. Still mid-engine, still pure drama — now with electrons and a race-derived electric torque vectoring system."
  },
  {
    rank: 13,
    brand: "Pininfarina",
    model: "Battista",
    year: 2022,
    type: "ev",
    engine: "4× Electric Motors",
    power: "1,900 hp",
    torque: "2,300 Nm",
    drive: "AWD",
    trans: "Single-Speed",
    topMph: 217,
    topKmh: 350,
    zeroSixty: 1.79,
    description:
      "An Italian hypercar with Rimac DNA and the fastest 0-60 time in this list. Four electric motors produce 1,900 hp and a mind-bending 1.79-second sprint to 60 mph. Just 150 examples wear the celebrated Pininfarina badge, each one a sculptural statement of electric power."
  },
  {
    rank: 14,
    brand: "Lotus",
    model: "Evija",
    year: 2020,
    type: "ev",
    engine: "4× Electric Motors",
    power: "2,011 hp",
    torque: "1,700 Nm",
    drive: "AWD",
    trans: "Single-Speed",
    topMph: 217,
    topKmh: 350,
    zeroSixty: 2.8,
    description:
      "Lotus's first all-electric hypercar and the most powerful road car the British maker has ever built, targeting 2,011 hp. Four motors, a 70 kWh battery and a carbon-fiber monocoque give the Evija a claimed 217 mph top speed. Its name means \"the first in existence.\""
  },
  {
    rank: 15,
    brand: "Porsche",
    model: "911 GT2 RS",
    year: 2018,
    type: "gas",
    engine: "3.8L Twin-Turbo Flat-6",
    power: "700 hp",
    torque: "750 Nm",
    drive: "RWD",
    trans: "7-Speed PDK",
    topMph: 211,
    topKmh: 340,
    zeroSixty: 2.6,
    description:
      "The ultimate expression of the 911. A 700 hp twin-turbo flat-six, rear-wheel drive and a 1,470 kg curb weight made the GT2 RS the fastest road-legal 911 ever built, setting a 6:43.30 Nürburgring record that shook the industry. The benchmark by which all other sports cars are measured."
  },
  {
    rank: 16,
    brand: "Bentley",
    model: "Continental GT Speed",
    year: 2021,
    type: "gas",
    engine: "6.0L Twin-Turbo W12",
    power: "650 hp",
    torque: "900 Nm",
    drive: "AWD",
    trans: "8-Speed DCT",
    topMph: 208,
    topKmh: 335,
    zeroSixty: 3.5,
    description:
      "A 650 hp W12 grand tourer that reaches 60 mph in 3.5 seconds while cosseting its occupants in hand-stitched leather. The GT Speed is a beautiful contradiction: roughly 2.4 tonnes of opulence with genuine supercar pace and four-wheel steering for good measure."
  },
  {
    rank: 17,
    brand: "Tesla",
    model: "Model S Plaid",
    year: 2021,
    type: "ev",
    engine: "3× Electric Motors",
    power: "1,020 hp",
    torque: "1,420 Nm",
    drive: "AWD",
    trans: "Single-Speed",
    topMph: 200,
    topKmh: 322,
    zeroSixty: 1.99,
    description:
      "The sedan that rewrote the EV performance rulebook. Three motors produce 1,020 hp and 0-60 arrives in under two seconds, with the Track Package unlocking a 200 mph top speed. More than a spec sheet — the Plaid made electric cars the performance benchmark of an entire industry."
  },
  {
    rank: 18,
    brand: "Jaguar",
    model: "F-Type SVR",
    year: 2020,
    type: "gas",
    engine: "5.0L Supercharged V8",
    power: "575 hp",
    torque: "700 Nm",
    drive: "AWD",
    trans: "8-Speed Auto",
    topMph: 200,
    topKmh: 322,
    zeroSixty: 3.5,
    description:
      "Jaguar's final great supercharged V8. The 5.0-liter engine produces 575 hp and pushes the SVR to 200 mph with a soundtrack that echoes through the years. A fitting farewell to the internal-combustion F-Type era and one of the great sports car bargains ever."
  },
  {
    rank: 19,
    brand: "Audi",
    model: "R8 V10 GT RWD",
    year: 2023,
    type: "gas",
    engine: "5.2L NA V10",
    power: "620 hp",
    torque: "565 Nm",
    drive: "RWD",
    trans: "7-Speed S-Tronic",
    topMph: 199,
    topKmh: 320,
    zeroSixty: 3.3,
    description:
      "A farewell to the Audi V10. The R8 V10 GT is rear-wheel drive, limited to just 333 units, and packs a 620 hp naturally aspirated 5.2-liter V10 that sings to 8,700 rpm. The purest, most rewarding R8 Audi ever made — and the last of its kind."
  },
  {
    rank: 20,
    brand: "Ferrari",
    model: "SF90 XX Stradale",
    year: 2023,
    type: "hybrid",
    engine: "4.0L Twin-Turbo V8 + 3 E-Motors",
    power: "1,016 hp",
    torque: "800 Nm",
    drive: "AWD",
    trans: "8-Speed DCT",
    topMph: 199,
    topKmh: 320,
    zeroSixty: 2.3,
    description:
      "A road-legal special built from Ferrari's F1-derived hybrid architecture. The twin-turbo V8 and three electric motors deliver 1,016 hp and 0-60 in 2.3 seconds, with active aerodynamics straight from Maranello's track program. Extreme, loud, and unforgettable."
  },
  {
    rank: 21,
    brand: "Nissan",
    model: "GT-R Nismo",
    year: 2023,
    type: "gas",
    engine: "3.8L Twin-Turbo V6",
    power: "600 hp",
    torque: "652 Nm",
    drive: "AWD",
    trans: "6-Speed DCT",
    topMph: 196,
    topKmh: 315,
    zeroSixty: 2.9,
    description:
      "Godzilla, refined. The Nismo's 600 hp twin-turbo V6 is tuned for response, its body for downforce, and its chassis for the track, with NISMO-tuned Bilstein dampers and lightweight components throughout. A near-200 mph supercar-killer that still turns heads decades on."
  },
  {
    rank: 22,
    brand: "BMW",
    model: "M5 CS",
    year: 2021,
    type: "gas",
    engine: "4.4L Twin-Turbo V8",
    power: "627 hp",
    torque: "750 Nm",
    drive: "AWD",
    trans: "8-Speed Auto",
    topMph: 190,
    topKmh: 306,
    zeroSixty: 2.9,
    description:
      "The most powerful production BMW ever built at its launch. The 627 hp twin-turbo V8 hustles the lightweight, track-focused M5 CS to 60 mph in 2.9 seconds. Four doors, four seats and enough pace to embarrass far more expensive machinery."
  },
  {
    rank: 23,
    brand: "Ford",
    model: "Mustang Shelby GT500",
    year: 2022,
    type: "gas",
    engine: "5.2L Supercharged V8 \"Predator\"",
    power: "760 hp",
    torque: "847 Nm",
    drive: "RWD",
    trans: "7-Speed DCT",
    topMph: 180,
    topKmh: 290,
    zeroSixty: 3.3,
    description:
      "America's most powerful production Ford ever built. The 5.2-liter supercharged \"Predator\" V8 makes 760 hp, paired with a quick-shifting Tremec dual-clutch. It's a 180 mph muscle car with genuine circuit ability and a supercharger whine that sounds like an approaching storm."
  },
  {
    rank: 24,
    brand: "Honda",
    model: "Civic Type R",
    year: 2023,
    type: "gas",
    engine: "2.0L Turbo I4",
    power: "315 hp",
    torque: "420 Nm",
    drive: "FWD",
    trans: "6-Speed Manual",
    topMph: 171,
    topKmh: 275,
    zeroSixty: 4.9,
    description:
      "The benchmark front-wheel-drive hot hatch. A 315 hp 2.0-liter turbo, a helical limited-slip differential and a slick 6-speed manual make the Type R a track-day weapon that still does the school run. The fastest front-driver at its price — and one of the most engaging cars on sale."
  },
  {
    rank: 25,
    brand: "Dodge",
    model: "Challenger SRT Demon 170",
    year: 2023,
    type: "gas",
    engine: "6.2L Supercharged V8",
    power: "1,025 hp",
    torque: "1,280 Nm",
    drive: "RWD",
    trans: "8-Speed Auto",
    topMph: 168,
    topKmh: 270,
    zeroSixty: 1.66,
    description:
      "The final Demon, and a straight-line monster. Running on E85, its 6.2-liter supercharged V8 produces 1,025 hp and launches to 60 mph in 1.66 seconds — the quickest production car in the world when it debuted. No compromises, no roof on the drag strip, just results."
  },
  {
    rank: 26,
    brand: "Hyundai",
    model: "Ioniq 5 N",
    year: 2024,
    type: "ev",
    engine: "2× Electric Motors",
    power: "641 hp",
    torque: "770 Nm",
    drive: "AWD",
    trans: "Single-Speed",
    topMph: 162,
    topKmh: 261,
    zeroSixty: 3.3,
    description:
      "Hyundai's first performance EV, and it's a riot. With 641 hp, fake gearshifts, simulated engine sound and drift modes, the Ioniq 5 N brings genuine driver engagement to the electric era — proving an EV can be as thrilling as any combustion hot hatch."
  },
  {
    rank: 27,
    brand: "Kia",
    model: "EV6 GT",
    year: 2023,
    type: "ev",
    engine: "2× Electric Motors",
    power: "576 hp",
    torque: "740 Nm",
    drive: "AWD",
    trans: "Single-Speed",
    topMph: 162,
    topKmh: 260,
    zeroSixty: 3.4,
    description:
      "Kia's answer to the performance EV question. The EV6 GT's 576 hp dual-motor setup and 800V architecture enable ultra-fast charging and genuine supercar-slaying pace — with a drift mode for good measure. A practical crossover hiding a seriously quick machine."
  },
  {
    rank: 28,
    brand: "Toyota",
    model: "GR Supra",
    year: 2021,
    type: "gas",
    engine: "3.0L Turbo Inline-6",
    power: "382 hp",
    torque: "500 Nm",
    drive: "RWD",
    trans: "8-Speed Auto",
    topMph: 155,
    topKmh: 250,
    zeroSixty: 3.9,
    description:
      "The legend returns. Toyota's GR Supra pairs a 382 hp turbocharged inline-six with rear-wheel drive and a chassis tuned for perfect balance. Electronically limited to 155 mph, it's a modern icon that honors its legendary 90s forebear while bringing thoroughly modern pace."
  },
  {
    rank: 29,
    brand: "Rolls-Royce",
    model: "Spectre",
    year: 2023,
    type: "ev",
    engine: "2× Electric Motors",
    power: "584 hp",
    torque: "900 Nm",
    drive: "AWD",
    trans: "Single-Speed",
    topMph: 155,
    topKmh: 250,
    zeroSixty: 4.4,
    description:
      "The first fully electric Rolls-Royce. Two motors deliver 584 hp silently, carrying the Spectre to 60 mph in 4.4 seconds in absolute stillness — the \"Magic Carpet Ride\" it's famous for, now with instant torque. The ultimate luxury object, reimagined for the electric age."
  },
  {
    rank: 30,
    brand: "Polestar",
    model: "1",
    year: 2020,
    type: "hybrid",
    engine: "2.0L Turbo+Super I4 + 2 E-Motors",
    power: "619 hp",
    torque: "1,000 Nm",
    drive: "AWD",
    trans: "8-Speed Auto",
    topMph: 155,
    topKmh: 250,
    zeroSixty: 4.0,
    description:
      "A hand-built carbon-fiber coupe and Polestar's grand entrance as a standalone brand. The 619 hp plug-in hybrid pairs a turbocharged and supercharged four-cylinder with two electric motors — a Scandinavian-designed luxury grand tourer with genuine pace and a 78-mile electric range."
  }
];

const CAR_IMAGES = {
  1: "images/koenigsegg-jesko-absolut.jpg",
  2: "images/bugatti-chiron-super-sport-300.jpg",
  3: "images/ssc-tuatara.jpg",
  4: "images/hennessey-venom-f5.jpg",
  5: "images/rimac-nevera.jpg",
  6: "images/mclaren-speedtail.jpg",
  7: "images/aston-martin-valkyrie.jpg",
  8: "images/pagani-huayra-bc.jpg",
  9: "images/lucid-air-sapphire.jpg",
  10: "images/chevrolet-corvette-zr1.jpg",
  11: "images/mercedes-amg-one.jpg",
  12: "images/lamborghini-revuelto.jpg",
  13: "images/pininfarina-battista.jpg",
  14: "images/lotus-evija.jpg",
  15: "images/porsche-911-gt2-rs.jpg",
  16: "images/bentley-continental-gt-speed.jpg",
  17: "images/tesla-model-s-plaid.jpg",
  18: "images/jaguar-f-type-svr.jpg",
  19: "images/audi-r8-v10-gt.jpg",
  20: "images/ferrari-sf90-xx-stradale.jpg",
  21: "images/nissan-gt-r-nismo.jpg",
  22: "images/bmw-m5-cs.jpg",
  23: "images/ford-mustang-shelby-gt500.jpg",
  24: "images/honda-civic-type-r.jpg",
  25: "images/dodge-challenger-srt-demon.jpg",
  26: "images/hyundai-ioniq-5-n.jpg",
  27: "images/kia-ev6-gt.jpg",
  28: "images/toyota-gr-supra.jpg",
  29: "images/rolls-royce-spectre.jpg",
  30: "images/polestar-1.jpg",
};

const ORIGINS = {
  1: { flag: "🇸🇪", country: "Sweden", hq: "Ängelholm, Sweden" },
  2: { flag: "🇫🇷", country: "France", hq: "Molsheim, France" },
  3: { flag: "🇺🇸", country: "United States", hq: "West Richland, United States" },
  4: { flag: "🇺🇸", country: "United States", hq: "Sealy, United States" },
  5: { flag: "🇭🇷", country: "Croatia", hq: "Sveta Nedelja, Croatia" },
  6: { flag: "🇬🇧", country: "United Kingdom", hq: "Woking, United Kingdom" },
  7: { flag: "🇬🇧", country: "United Kingdom", hq: "Gaydon, United Kingdom" },
  8: { flag: "🇮🇹", country: "Italy", hq: "San Cesario sul Panaro, Italy" },
  9: { flag: "🇺🇸", country: "United States", hq: "Newark, United States" },
  10: { flag: "🇺🇸", country: "United States", hq: "Detroit, United States" },
  11: { flag: "🇩🇪", country: "Germany", hq: "Affalterbach, Germany" },
  12: { flag: "🇮🇹", country: "Italy", hq: "Sant'Agata Bolognese, Italy" },
  13: { flag: "🇮🇹", country: "Italy", hq: "Cambiano, Italy" },
  14: { flag: "🇬🇧", country: "United Kingdom", hq: "Hethel, United Kingdom" },
  15: { flag: "🇩🇪", country: "Germany", hq: "Stuttgart, Germany" },
  16: { flag: "🇬🇧", country: "United Kingdom", hq: "Crewe, United Kingdom" },
  17: { flag: "🇺🇸", country: "United States", hq: "Austin, United States" },
  18: { flag: "🇬🇧", country: "United Kingdom", hq: "Coventry, United Kingdom" },
  19: { flag: "🇩🇪", country: "Germany", hq: "Ingolstadt, Germany" },
  20: { flag: "🇮🇹", country: "Italy", hq: "Maranello, Italy" },
  21: { flag: "🇯🇵", country: "Japan", hq: "Yokohama, Japan" },
  22: { flag: "🇩🇪", country: "Germany", hq: "Munich, Germany" },
  23: { flag: "🇺🇸", country: "United States", hq: "Dearborn, United States" },
  24: { flag: "🇯🇵", country: "Japan", hq: "Tokyo, Japan" },
  25: { flag: "🇺🇸", country: "United States", hq: "Auburn Hills, United States" },
  26: { flag: "🇰🇷", country: "South Korea", hq: "Seoul, South Korea" },
  27: { flag: "🇰🇷", country: "South Korea", hq: "Seoul, South Korea" },
  28: { flag: "🇯🇵", country: "Japan", hq: "Toyota City, Japan" },
  29: { flag: "🇬🇧", country: "United Kingdom", hq: "Goodwood, United Kingdom" },
  30: { flag: "🇸🇪", country: "Sweden", hq: "Gothenburg, Sweden" },
};

const MAX_SPEED = 330;

const TYPE_LABELS = {
  gas: "Gasoline",
  ev: "Electric",
  hybrid: "Hybrid"
};

const TYPE_TAGS = {
  gas: "tag-gas",
  ev: "tag-ev",
  hybrid: "tag-hybrid"
};

function cardHTML(car) {
  const pct = Math.min(100, Math.round((car.topMph / MAX_SPEED) * 100));
  const img = CAR_IMAGES[car.rank];
  const origin = ORIGINS[car.rank];
  return `
    <article class="card reveal" data-type="${car.type}">
      <span class="ghost-rank">${String(car.rank).padStart(2, "0")}</span>
      ${img ? `<div class="card-img"><img src="${img}" alt="${car.brand} ${car.model}" loading="lazy"></div>` : ""}
      <div class="card-body">
      <div class="card-top">
        <span class="rank ${car.rank > 10 ? "rank-muted" : ""}">#${String(car.rank).padStart(2, "0")}</span>
        <div class="card-top-right">
          ${origin ? `<span class="origin" title="HQ: ${origin.hq}">${origin.flag} ${origin.country}</span>` : ""}
          <span class="tag ${TYPE_TAGS[car.type]}">${TYPE_LABELS[car.type]}</span>
          <span class="year">${car.year}</span>
        </div>
      </div>
      <p class="brand">${car.brand}</p>
      <h2 class="model">${car.model}</h2>
      <div class="specs">
        <div class="spec"><span class="spec-key">Engine</span><span class="spec-val">${car.engine}</span></div>
        <div class="spec"><span class="spec-key">Power</span><span class="spec-val">${car.power}</span></div>
        <div class="spec"><span class="spec-key">Torque</span><span class="spec-val">${car.torque}</span></div>
        <div class="spec"><span class="spec-key">Drivetrain</span><span class="spec-val">${car.drive}</span></div>
      </div>
      <div class="metrics">
        <div class="metric">
          <span class="metric-num">${car.topMph}</span>
          <span class="metric-unit">mph</span>
          <span class="metric-label">Top Speed</span>
        </div>
        <div class="metric">
          <span class="metric-num">${car.zeroSixty.toFixed(2)}</span>
          <span class="metric-unit">s</span>
          <span class="metric-label">0-60 mph</span>
        </div>
      </div>
      <div class="speedbar"><div class="speedbar-fill" data-width="${pct}"></div></div>
      <div class="speedbar-cap">
        <span>${car.topKmh} km/h</span>
        <span>${pct}% of #1</span>
      </div>
      <button type="button" class="compare-btn${compareRanks.has(car.rank) ? " active" : ""}" data-rank="${car.rank}" aria-pressed="${compareRanks.has(car.rank)}">
        ${compareRanks.has(car.rank) ? "Remove from compare" : "Add to compare"}
      </button>
      <p class="desc">${car.description}</p>
      </div>
    </article>
  `;
}

const grid = document.getElementById("grid");
const countEl = document.getElementById("count");
const filters = document.getElementById("filters");

let activeFilter = "all";

function render() {
  const base =
    activeFilter === "all" ? cars : cars.filter((c) => c.type === activeFilter);
  const list = sortCars(base);

  grid.innerHTML = list.map(cardHTML).join("");
  countEl.textContent = `${list.length} of 30 cars shown`;

  const cards = grid.querySelectorAll(".card");
  requestAnimationFrame(() => {
    cards.forEach((card) => {
      const fill = card.querySelector(".speedbar-fill");
      const w = fill.dataset.width;
      fill.style.width = "0%";
      requestAnimationFrame(() => (fill.style.width = w + "%"));
    });
  });

  revealCards();
  renderCompareTray();
}

function animateCounts() {
  const els = document.querySelectorAll("[data-count]");
  if (!els.length || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.count);
        const duration = 1400;
        const start = performance.now();
        function tick(now) {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased);
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  els.forEach((el) => io.observe(el));
}

function revealCards() {
  const cards = grid.querySelectorAll(".card.reveal");
  if (!("IntersectionObserver" in window)) {
    cards.forEach((c) => c.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  cards.forEach((c) => io.observe(c));
}

filters.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  activeFilter = chip.dataset.filter;
  document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === chip));
  render();
});

/* ---------- SORT ---------- */
const sortSelect = document.getElementById("sort");
let activeSort = "topSpeed";

function parsePower(val) {
  const n = parseInt(String(val).replace(/[^0-9]/g, ""), 10);
  return Number.isFinite(n) ? n : 0;
}

function sortKey(car) {
  switch (activeSort) {
    case "power":
      return parsePower(car.power);
    case "zeroSixty":
      return car.zeroSixty;
    case "year":
      return car.year;
    default:
      return car.topMph;
  }
}

function sortCars(list) {
  const asc = activeSort === "zeroSixty";
  return list.slice().sort((a, b) => {
    const av = sortKey(a);
    const bv = sortKey(b);
    return asc ? av - bv : bv - av;
  });
}

sortSelect.addEventListener("change", () => {
  activeSort = sortSelect.value;
  render();
});

/* ---------- COMPARE ---------- */
const MAX_COMPARE = 3;
const compareRanks = new Set();

function carByRank(rank) {
  return cars.find((c) => c.rank === rank);
}

function renderCompareTray() {
  const tray = document.getElementById("compareTray");
  const items = document.getElementById("compareItems");
  const openBtn = document.getElementById("compareOpen");
  const hasSelection = compareRanks.size > 0;
  tray.hidden = !hasSelection;
  openBtn.disabled = compareRanks.size < 2;
  items.innerHTML = [...compareRanks]
    .map((rank) => {
      const car = carByRank(rank);
      return `<span class="compare-item" data-rank="${rank}">
        ${car ? `${car.brand} ${car.model}` : ""}
        <button type="button" class="compare-item-remove" data-rank="${rank}" aria-label="Remove ${car ? car.model : ""}">×</button>
      </span>`;
    })
    .join("");
}

function toggleCompare(rank) {
  if (compareRanks.has(rank)) {
    compareRanks.delete(rank);
  } else if (compareRanks.size < MAX_COMPARE) {
    compareRanks.add(rank);
  }
  render();
}

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".compare-btn");
  if (!btn) return;
  toggleCompare(Number(btn.dataset.rank));
});

document.getElementById("compareItems").addEventListener("click", (e) => {
  const btn = e.target.closest(".compare-item-remove");
  if (!btn) return;
  compareRanks.delete(Number(btn.dataset.rank));
  render();
});

document.getElementById("compareClear").addEventListener("click", () => {
  compareRanks.clear();
  render();
});

function compareTableHTML() {
  const list = [...compareRanks].map(carByRank).filter(Boolean);
  if (!list.length) return "";
  const bestMph = Math.max(...list.map((c) => c.topMph));
  const bestZero = Math.min(...list.map((c) => c.zeroSixty));
  const rows = [
    ["Brand", (c) => c.brand, () => false],
    ["Model", (c) => c.model, () => false],
    ["Country", (c) => {
      const o = ORIGINS[c.rank];
      return o ? `${o.flag} ${o.country}` : "—";
    }, () => false],
    ["Year", (c) => String(c.year), () => false],
    ["Type", (c) => TYPE_LABELS[c.type], () => false],
    ["Engine", (c) => c.engine, () => false],
    ["Power", (c) => c.power, () => false],
    ["Torque", (c) => c.torque, () => false],
    ["Drivetrain", (c) => c.drive, () => false],
    ["Top Speed", (c) => `${c.topMph} mph / ${c.topKmh} km/h`, (c) => c.topMph === bestMph],
    ["0-60 mph", (c) => `${c.zeroSixty.toFixed(2)} s`, (c) => c.zeroSixty === bestZero],
  ];
  const head = `<thead><tr><th></th>${list
    .map((c) => `<th>${c.brand}</th>`)
    .join("")}</tr></thead>`;
  const body = rows
    .map(
      ([key, val, isBest]) =>
        `<tr><td>${key}</td>${list
          .map((c) => `<td class="${isBest(c) ? "best" : ""}">${val(c)}</td>`)
          .join("")}</tr>`
    )
    .join("");
  return `<table>${head}<tbody>${body}</tbody></table>`;
}

const compareModal = document.getElementById("compareModal");
const compareTable = document.getElementById("compareTable");

function openCompare() {
  compareTable.innerHTML = compareTableHTML();
  compareModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeCompare() {
  compareModal.hidden = true;
  document.body.classList.remove("modal-open");
}

document.getElementById("compareOpen").addEventListener("click", openCompare);

compareModal.querySelectorAll("[data-close]").forEach((el) =>
  el.addEventListener("click", closeCompare)
);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !compareModal.hidden) closeCompare();
});

/* ---------- THEME ---------- */
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  themeToggle.querySelector(".sun").classList.toggle("active", isLight);
  themeToggle.querySelector(".moon").classList.toggle("active", !isLight);
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
}

themeToggle.addEventListener("click", () => {
  const current =
    document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  const next = current === "light" ? "dark" : "light";
  try {
    localStorage.setItem("velocity30-theme", next);
  } catch (e) {}
  applyTheme(next);
});

applyTheme(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");

/* ---------- MUSIC ---------- */
const musicToggle = document.getElementById("musicToggle");
const music = new Audio("https://open.spotify.com/track/5jQfCESa66fpDY1FZrVsAL?si=7ca98227a04143ef");
music.loop = true;
music.volume = 0.5;
music.preload = "auto";

function setMusicState(playing) {
  musicToggle.classList.toggle("active", playing);
  musicToggle.setAttribute("aria-pressed", String(playing));
  musicToggle.querySelector(".m-icon-play").classList.toggle("active", playing);
  musicToggle.querySelector(".m-icon-mute").classList.toggle("active", !playing);
}

function tryPlay() {
  if (music.paused) {
    music.play().then(() => setMusicState(true)).catch(() => setMusicState(false));
  }
}

musicToggle.addEventListener("click", () => {
  if (music.paused) {
    tryPlay();
  } else {
    music.pause();
    setMusicState(false);
  }
});

music.play().then(() => setMusicState(true)).catch(() => {});

document.addEventListener(
  "pointerdown",
  (e) => {
    if (e.target.closest("#musicToggle")) return;
    tryPlay();
  },
  { once: true, passive: true }
);

document.addEventListener("keydown", tryPlay, { once: true, passive: true });

document.addEventListener("DOMContentLoaded", render);
animateCounts();
