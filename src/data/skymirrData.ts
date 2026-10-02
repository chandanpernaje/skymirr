export interface Product {
  id: string;
  name: string;
  category: 'router' | 'antenna' | 'tracker' | 'embedded';
  image: string;
  tagline: string;
  description: string;
  award?: string;
  specs: {
    frequency?: string;
    gain?: string;
    technology?: string;
    capacity?: string;
    reachBonus?: string;
    throughputBonus?: string;
    formFactor?: string;
    connectors?: string;
    dimensions?: string;
    power?: string;
    certification?: string;
  };
  features: string[];
  bands: string[];
  datasheetUrl?: string;
  hotspots?: { title: string; desc: string; x: number; y: number }[];
  isNew?: boolean;
  gallery?: string[];
  introduction?: string;
  application?: string;
  performanceData?: Array<{
    frequency?: string;
    efficiency?: string;
    peakGain?: string;
    vswr?: string;
    metric?: string;
    value?: string;
  }>;
}

export interface FrequencyBand {
  id: string;
  name: string;
  range: string;
  designation: string;
  useCase: string;
  vswr: string;
  gainDbi: number;
}

export interface Solution {
  id: string;
  title: string;
  tagline: string;
  description: string;
  metrics: string[];
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  category: 'leadership' | 'board' | 'advisory';
  credentials?: string;
  image?: string;
  bio?: string;
}

export interface Partner {
  name: string;
  category: 'Online Partner' | 'Distributor';
  image: string;
  url: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  publication: string;
  summary: string;
  badge: string;
  link?: string;
}

export const SKYMIRR_DATA = {
  company: {
    name: 'SkyMirr',
    legalName: 'SkyMirr Technologies, Inc.',
    tagline: 'Antenna-First 5G & RF Connectivity',
    slogan: 'SIGNAL WITHOUT LIMITS',
    secondarySlogan: 'WHEN IT HAS TO CONNECT, IT HAS TO BE SKYMIRR',
    mission: 'Revolutionizing wireless connectivity by engineering high-performance systems from the electromagnetic field outwards with patented MuLCAT® technology.',
    founded: '2021',
    headquarters: '930 S. Harbor City Blvd, Suite 403, Melbourne, FL 32901',
    rdLab: 'Songdo Bio-IT Complex, Incheon, South Korea',
    phone: '321-393-1039',
    salesEmail: 'sales@skymirr.com',
    supportEmail: 'support@skymirr.com',
    logoUrl: '/images/skymirr-logo-3d.png',
    footerLogoUrl: '/images/skymirr-logo-footer.png',
  },

  stats: [
    { value: '+42%', label: 'Extended Tower Reach', detail: 'Compared to conventional 5G CPE systems' },
    { value: '2.0x', label: 'Cell-Edge Throughput', detail: 'In fringe signal & high-interference zones' },
    { value: '10x', label: 'Bandwidth Expansion', detail: 'Multi-octave coverage via MuLCAT® positive coupling' },
    { value: '512', label: 'Concurrent Clients', detail: 'Managed effortlessly with Wi-Fi 7 tri-band' },
  ],

  certifications: [
    { name: 'CES® 2026 Honoree', category: 'Mobile Devices & Apps', detail: 'Recognized for Sky5G™ Router engineering excellence' },
    { name: 'T-Mobile 5G Certified', category: 'Carrier Integration', detail: 'Approved for nationwide ultra-capacity 5G network' },
    { name: 'T-Priority Approved', category: 'First Responders', detail: 'Mission-critical priority tier for emergency services' },
    { name: 'AT&T Certified', category: 'Network Certification', detail: 'Certified for expanding carrier choice & reliability' },
    { name: 'FCC & CE Compliant', category: 'Regulatory Standards', detail: 'RoHS 3, PTCRB, and global RF safety certifications' },
  ],

  productCategories: [
    {
      id: 'antennas',
      title: 'Antennas',
      subtitle: 'Powered by Patented MuLCAT® Technology',
      image: '/images/antennas-new.jpg',
      description: 'World-class 4G/5G Sub-6 and Wi-Fi 6E/7 omnidirectional antennas engineered for exceptional lower-band efficiency and zero dipole degradation.',
      items: ['SkyBlade™ TAMP141 (Ultra-Wideband 617-5925 MHz)', 'SkyBlade™ TAMP161 (MIMO Broadband Module)', 'SkyBlade™ TAMP159 / TAMP154 (Wi-Fi 7 Omnis)'],
    },
    {
      id: 'routers',
      title: '5G Routers',
      subtitle: 'Award-Winning Sky5G™ / TCPA-117 Gateway',
      image: '/images/5g-routers.jpg',
      description: 'Carrier-certified next-generation 5G CPE router featuring internal MuLCAT® antenna arrays, Wi-Fi 7 (802.11be), dual SIM failover, and +42% reach to cell towers.',
      items: ['CES® 2026 Innovation Honoree', 'T-Mobile & AT&T Certified', 'T-Priority FirstNet Ready'],
    },
    {
      id: 'trackers',
      title: 'Asset Trackers & IoT',
      subtitle: 'Ruggedized Remote Telemetry',
      image: '/images/asset-trackers.jpg',
      description: 'Ultra-low-power, long-range cellular tracking devices and embedded NFC micro-antennas built for harsh industrial environments, cold chain, and medical biosensors.',
      items: ['Industrial GPS / Cellular Trackers', 'BioTrack™ MAEP103 NFC Sensor Coils', 'Extended Multi-Year Battery Architecture'],
    },
  ],

  products: [
    {
      id: 'sky5g-router',
      name: 'Sky5G™ Wireless Router (TCPA-117)',
      category: 'router',
      image: '/images/5g-routers.jpg',
      tagline: 'Unleashing Reliable Connectivity Anywhere',
      description: 'Meet the SkyMirr Sky5G Router—engineered for businesses, communities, and users who demand fast, resilient, and secure broadband. Fully certified on T-Mobile’s 5G network and T-Priority, Sky5G sets a new standard for performance.',
      introduction: 'In rugged landscapes and dense urban environments, millions struggle with slow, unstable internet. Weak RF signals and limited fiber access create persistent connectivity gaps. Unlike traditional routers where antennas are an afterthought, SkyMirr’s exclusive MuLCAT® antenna-first engineering puts signal strength and reliability front and center. Experience up to 42% farther reach to cell towers, enhanced indoor coverage, and consistently high speeds—even during network congestion or in remote locations.\n\nSky5G is a CES2026 Innovation Award Honoree.',
      application: 'Versatile Use Cases:\n• Rural Areas: Small offices, farms, community centers, schools\n• Professional Offices: Cloud apps, VoIP & video, multi-device networks\n• Retail & Restaurants: POS uptime, guest/staff Wi-Fi, digital signage, security cameras\n• Public Safety: Mobile command, emergency operations, disaster recovery, EOC backup\n• Construction & Field Services: Portable broadband, trailer connectivity, project uploads, inspections',
      award: 'CES® 2026 Innovation Awards Honoree',
      specs: {
        technology: '4×4 MIMO 5G, Wi-Fi 7 (4×4 MU-MIMO)',
        frequency: 'Full FR1 band support (600 MHz–6 GHz)',
        capacity: 'Supports up to 512 devices, 311 ft Wi-Fi radius',
        connectors: '2.5 Gbps LAN/WAN, Optional external SMA antenna ports',
        management: 'TR-069 remote management, Dual firmware images & auto-recovery',
        security: 'VPN: IPSec, SSL, WireGuard',
        certification: 'T-Mobile 5G, T-Priority, AT&T Standard 5G',
      },
      features: [
        'MuLCAT® Antenna: AI-driven, real-time optimization ensures peak performance',
        'Wi-Fi 7 Integration: Delivers seamless, high-speed connections for streaming & remote work',
        '2x Coverage Area: Connect more users and devices across broader spaces',
        '50% Power Savings: Lower energy consumption for cost-effective operations',
        'Real-Time Optimization: Automatic adjustments keep your connection strong in tough conditions',
      ],
      performanceData: [
        { metric: 'Cellular Reach', value: '42% farther reach to cell towers' },
        { metric: 'Download Speed', value: 'Up to 3.4 Gbps download speeds' },
        { metric: 'Coverage Area', value: 'Twice the coverage area compared to standard solutions' },
        { metric: 'Indoor Penetration', value: 'Reliable indoor penetration for homes and businesses' },
      ],
      bands: ['Full FR1 band support (600 MHz–6 GHz)'],
      datasheetUrl: 'https://skymirr.com/wp-content/uploads/2026/09/Sky5G-Datasheet.pdf',
      hotspots: [
        { title: 'MuLCAT® Integrated Array', desc: 'Custom multi-layer coupling antenna core eliminating blind spots and cross-interference.', x: 48, y: 22 },
        { title: 'Wi-Fi 7 Tri-Band Engine', desc: '320 MHz channel width delivering ultra-low 2ms wireless latency for mission-critical tasks.', x: 74, y: 45 },
        { title: 'Quad Gigabit + 2.5G WAN', desc: 'Hardware line-rate packet processing with redundant WAN auto-fallback.', x: 26, y: 76 },
        { title: 'Active Thermal Exhaust', desc: 'Acoustically tuned silent heat pipe keeping RF amplifiers in peak efficiency envelope.', x: 80, y: 82 },
      ],
    },
    {
      id: 'tamp-114',
      name: 'TAMP 114',
      category: 'antenna',
      image: '/images/tamp114.png',
      tagline: '4G LTE / 5G Wideband Omni Antenna',
      description: 'The TAMP 114 is a compact high-efficiency 4G/5G cellular antenna engineered for reliable MIMO performance in mobile and fixed applications.',
      introduction: 'Its low-profile design and optimized isolation deliver strong signal integrity in space-constrained and high-interference environments.',
      application: 'Ideal for fleet telematics, industrial IoT gateways, enterprise routers, and cellular failover applications. The TAMP114 supports mobile and fixed installations requiring dependable connectivity, stable throughput, and consistent performance across challenging RF environments.',
      specs: {
        frequency: '824–960 MHz / 1710–2170 MHz / 2500–2690 MHz',
        gain: 'Peak Gain: 1.1 ~ 3.8 dBi',
        efficiency: 'High Efficiency up to 80%',
        dimensions: '125.5 x Φ13mm',
        connectors: 'SMA (male), 50 ohm',
        impedance: '50Ω',
        polarization: 'Vertical',
        directivity: 'Omni Directional',
        certification: 'RoHS compliance',
      },
      features: [
        'External Antenna without Hinge Covering Key 4G/5G Sub6 Bands',
        'Antenna Size: 125.5 x Φ13mm',
        'Connector: SMA (male)',
        'Color: Black / White',
        'Operating Frequency Bands: 824~960MHz, 1710~2170MHz, 2500~2690MHz',
        'High Efficiency up to 80%',
        'Peak Gain: 1.1 ~ 3.8 dBi',
        '50 ohm / SMA male connector',
        'RoHS compliance'
      ],
      bands: ['824 - 960 MHz', '1710 - 2170 MHz', '2500 - 2690 MHz'],
      datasheetUrl: 'https://skymirr.com/wp-content/uploads/2026/06/TAMP114.pdf',
      isNew: true,
      performanceData: [
        { frequency: '824', efficiency: '64.4', peakGain: '1.11' },
        { frequency: '880', efficiency: '66.5', peakGain: '1.51' },
        { frequency: '894', efficiency: '75.7', peakGain: '2.21' },
        { frequency: '960', efficiency: '77.9', peakGain: '2.09' },
        { frequency: '1710', efficiency: '46.4', peakGain: '2.65' },
        { frequency: '1880', efficiency: '64.0', peakGain: '3.87' },
        { frequency: '1920', efficiency: '56.9', peakGain: '3.06' },
        { frequency: '2170', efficiency: '41.3', peakGain: '1.30' },
        { frequency: '2500', efficiency: '53.3', peakGain: '1.97' },
        { frequency: '2690', efficiency: '61.6', peakGain: '2.76' }
      ]
    },
    {
      id: 'skyblade-tamp141',
      name: 'TAMP 141',
      category: 'antenna',
      image: '/images/tamp141.png',
      tagline: '4G LTE / 5G Ultra Broadband Omni Antenna',
      description: 'The TAMP141 antenna is an ultra-wideband omnidirectional, connectorized antenna used for connecting wireless communication devices such as wireless Consumer Premise Equipment (CPE) / repeaters to a network base station for any IoT device connecting to the cellular network.',
      introduction: 'With the ever-expanding allocation of new frequency bands for 5G communications worldwide, many of the Radio Frequency (RF) components and solutions in use today are tailored for specific countries. This is primarily due to the challenge in covering essentially a wide bandwidth of more than three octaves from 600 MHz to 6 GHz necessary to support all the various regional allocations. To address this challenge, SkyMirr has applied its patent-pending Multilayer Coupling Controlled Antenna Technology (MulCAT®) to create the world’s first ultra-wideband external antenna that works equally well in all worldwide 5G frequency bands from 600 MHz to 6 GHz. The TAMP141 works especially well in the low 600 MHz bands where new FWA is deployed in rural locations.',
      application: 'Typical applications include: Enhanced coverage range in rural areas, Upgrade from 4G/LTE to 5G service coverage, HD Video / high data rates over mobile',
      specs: {
        frequency: '600 MHz to 6GHz',
        gain: 'Omnidirectional peak gain from -1.0 to +2.1 dBi',
        efficiency: 'Greater than 40% efficiency (peak = 80%)',
        formFactor: 'Horizontal or Vertical orientation',
        connectors: 'SMA Male connector type',
        colors: 'Comes in both white and black colors'
      },
      features: [
        'Best in class ultra-wideband operation for 4G LTE bands from 600 MHz to 6GHz',
        'Omnidirectional peak gain from -1.0 to +2.1 dBi throughout the entire band',
        'Greater than 40% efficiency (peak = 80%) throughout the entire band',
        'Horizontal or Vertical orientation',
        'SMA Male connector type. Comes in both white and black colors.'
      ],
      bands: ['600 MHz - 6 GHz'],
      datasheetUrl: 'SkyBlade_TAMP141_Datasheet.pdf',
    },
    {
      id: 'skyblade-tamp161',
      name: 'SkyBlade™ TAMP161 MIMO',
      category: 'antenna',
      image: '/images/tamp161.png',
      tagline: '4G LTE / 5G High-Performance Broadband MIMO Module',
      description: 'Integrated dual-polarization omnidirectional antenna module engineered for high-density IoT telemetry, industrial automation gateways, and autonomous fleet vehicles requiring rugged multi-path reception.',
      specs: {
        frequency: '617 MHz – 5850 MHz Full Sub-6',
        gain: '5.5 dBi omnidirectional',
        formFactor: 'Low-profile ruggedized puck / module mount',
        connectors: 'Dual SMA / RP-SMA with low-loss RG58 cabling',
        dimensions: '140 mm diameter x 45 mm profile',
        certification: 'IP67 waterproof, MIL-STD-810H shock and vibration',
      },
      features: [
        'Dual cross-polarized elements for maximum spatial multiplexing',
        'Ultra-low ground plane dependency',
        'High inter-port isolation (>20 dB across all active bands)',
      ],
      bands: ['Sub-6 5G', '4G LTE-A', 'CBRS 3.5GHz'],
      isNew: true,
    },
    {
      id: 'tamp-172',
      name: 'SkyBlade™ TAMP 172',
      category: 'antenna',
      image: '/images/tamp172.png',
      tagline: 'High-Gain Magnetic Mount Mobile Antenna',
      description: 'The TAMP 172 is a versatile high-gain mobile antenna featuring a heavy-duty magnetic base, designed for rapid deployment and robust performance in vehicular and temporary field applications.',
      specs: {
        frequency: '617 - 5925 MHz',
        gain: '5.0 dBi Peak Gain',
        formFactor: 'Magnetic Base Whip',
        connectors: 'SMA Male with 3m Low-Loss Cable',
        impedance: '50Ω',
        polarization: 'Vertical',
      },
      features: [
        'Integrated center-load coil for enhanced lower-band resonance',
        'Strong rare-earth magnetic base for secure roof mounting at highway speeds',
        'Spring-loaded strain relief for maximum durability',
        'Ideal for fleet management, emergency responders, and mobile RV setups',
      ],
      bands: ['4G LTE', '5G Sub-6', 'CBRS'],
      isNew: true,
    },
    {
      id: 'tamp-173',
      name: 'SkyBlade™ TAMP 173',
      category: 'antenna',
      image: '/images/tamp173.png',
      tagline: 'Low-Profile Puck Antenna',
      description: 'An ultra-rugged, low-profile dome antenna designed for permanent through-hole mounting on vehicles, kiosks, and outdoor enclosures where vandalism or impact is a concern.',
      specs: {
        frequency: '698 - 3800 MHz',
        gain: '3.0 dBi Omnidirectional',
        formFactor: 'Low-Profile Dome',
        connectors: 'N-Type Female / SMA Male options',
        dimensions: '80mm diameter, ultra-low clearance',
        certification: 'IP67 Waterproof, IK10 Vandal-Resistant',
      },
      features: [
        'Aerodynamic puck design minimizes wind drag on high-speed vehicles',
        'Robust threaded nut mounting system for watertight seal',
        'Excellent wideband coverage without a ground plane requirement',
        'UV-stabilized high-impact radome',
      ],
      bands: ['4G LTE', '5G Sub-6', 'Wi-Fi'],
    },
    {
      id: 'tamp-163',
      name: 'SkyBlade™ TAMP 163',
      category: 'antenna',
      image: '/images/tamp163.png',
      tagline: 'Rugged Fiberglass Omni Antenna',
      description: 'A heavy-duty fiberglass omnidirectional antenna built to withstand harsh marine, industrial, and extreme weather environments while delivering maximum reach.',
      specs: {
        frequency: '617 - 2700 MHz',
        gain: '6.0 - 8.0 dBi High Gain',
        formFactor: 'Cylindrical Fiberglass',
        connectors: 'N-Type Female Base',
        dimensions: '400mm x 35mm',
        certification: 'IP67 Waterproof, Salt-Fog Tested',
      },
      features: [
        'Thick-walled fiberglass radome for ultimate environmental protection',
        'Machined aluminum base with standard marine threading',
        'Optimized collinear dipole array for concentrated horizon radiation',
        'Perfect for base stations, offshore rigs, and remote IoT gateways',
      ],
      bands: ['4G LTE', 'IoT', 'M2M'],
    },
    {
      id: 'skyblade-tamp159',
      name: 'SkyBlade™ TAMP159 Wi-Fi 7',
      category: 'antenna',
      image: '/images/tamp159.png',
      tagline: 'High-Gain Dual/Tri-Band Wi-Fi 6E & 7 Omni Antenna',
      description: 'Precision-tuned omnidirectional antenna engineered specifically for 2.4 GHz, 5.8 GHz, and the 6 GHz Wi-Fi 6E/7 bands. Provides uniform 360-degree toroidal radiation with high front-to-back symmetry.',
      specs: {
        frequency: '2400–2500 MHz / 5150–5850 MHz / 5925–7125 MHz',
        gain: '4.8 dBi / 6.2 dBi peak gain',
        formFactor: 'Articulated high-gain dipole',
        connectors: 'RP-SMA Male',
        dimensions: '165 mm H x 20 mm W',
        certification: 'RoHS 3 compliant',
      },
      features: [
        'Covers ultra-wide 6 GHz channels (up to 320 MHz channel allocation)',
        'Low dielectric loss fluoropolymer internal insulators',
        'Interference mitigation from adjacent cellular bands',
      ],
      bands: ['2.4 GHz', '5 GHz', '6 GHz Wi-Fi 7'],
    },
    {
      id: 'skytracker-lipa122',
      name: 'SkyTracker (LIPA122)',
      category: 'tracker',
      image: '/images/lipa122.png',
      tagline: 'Unmatched Real-Time IoT Asset Tracking',
      description: 'The ultimate real-time IoT asset tracker engineered for critical cargo visibility and control—leapfrogging conventional RFID and GPS solutions.',
      introduction: 'The Challenge: Evolving Risks Demand Real-Time Insight\nTraditional RFID and GPS tracking are no longer enough for high-value shipments. They report past locations but leave you blind to immediate risks and events. Meanwhile, cargo theft and in-transit loss are surging to record highs—over 3,600 incidents in the U.S. and Canada in 2024 alone—fueled by increasingly sophisticated, deception-based theft methods. Only real-time actionable intelligence can protect your assets in today’s hostile logistics landscape.\n\nThe Solution: SkyMirr SkyTracker – Zero Compromise, Full Control\nSkyMirr SkyTracker delivers true real-time asset intelligence throughout your cargo’s journey. Get instant updates at any moment—on demand, not just at preset intervals or after delivery. Define your safety thresholds once; SkyTracker immediately alerts you the moment conditions cross your limits, empowering you to intervene before a problem spirals into a loss.',
      application: 'Dual-Mode Operation for Total Protection\n\nNormal Logistics Mode: Achieve seamless, continuous visibility of both location and cargo condition. Minimize spoilage, damage, and uncertainty for every high-value shipment.\n\nRecovery Mode: Activate rapid response during critical events. If boxes detach from pallets or pallets leave the trailer, SkyTracker instantly issues warnings, putting you in control when every second counts.',
      specs: {
        dimensions: '4.8 × 3.2 × 0.75 in (122 × 82 × 19 mm)',
        temperature: '-20°C to +50°C',
        humidity: '5% to 100% RH',
        impact: '0.1g to ±10g',
        weight: '0 to 2,000 kg (with remote pallet sensor)',
        capacity: 'Gyroscope/Orientation: X/Y/Z axes',
        connectors: 'Barometric Pressure/Altitude: Accurate within ~3 feet',
        technology: 'GNSS Positioning: Within ~10 feet',
        reachBonus: 'Real-time event response: Within ~2 minutes',
        power: 'Internal lithium, wireless rechargeable',
        formFactor: 'Optional: Magnetic mounting attachment for flexible installation'
      },
      features: [
        'All-in-one unit with multiple integrated sensors for 24/7 monitoring and instant exception alerts.',
        'Superior signal penetration and up to double the trailer coverage of typical trackers, thanks to advanced antennas and efficient “report-on-demand” design.',
        'Optimized for 600/700 MHz bands—delivering unmatched connectivity in tough environments.',
        'Persistent WLAN link maintains resilient, real-time cargo monitoring, even inside trailers.',
        'Vertical Height (Z-axis) tracking using barometric sensing pinpoints not just the row, but the exact shelf your cargo occupies.'
      ],
      performanceData: [
        { metric: 'Updates', value: 'Receive updates exactly when you need them—real time, on demand.' },
        { metric: 'Alerts', value: 'Instant alerts the moment any threshold is breached.' },
        { metric: 'Conditions', value: 'Know immediately if your cargo is lost, moved, removed, impacted, or exposed to unsafe temperature or humidity.' },
        { metric: 'Response Time', value: 'Respond to critical events in real time—within approximately two minutes.' },
        { metric: 'Recovery', value: 'Cargo Recovery Mode provides immediate notification if boxes separate from pallets or pallets are removed from trailers.' },
      ],
      gallery: [
        '/images/lipa122-diagram.png',
        '/images/lipa122-trucks.png',
        '/images/lipa122-theft.png'
      ],
      datasheetUrl: 'https://skymirr.com/wp-content/uploads/2026/02/SkyTracker-Data-Sheet-final.pdf',
      bands: ['4G LTE', 'IoT', 'WLAN'],
    },
    {
      id: 'tamp-154',
      name: 'SkyBlade™ TAMP 154',
      category: 'antenna',
      image: '/images/tamp154.png',
      tagline: 'High Gain Broadband 4G/5G External MIMO Directional Antenna Module',
      description: 'Directional MIMO antenna optimized for fixed wireless applications, maximizing gain for 4G LTE and 5G networks.',
      specs: {
        frequency: '617 - 5925 MHz',
        formFactor: 'Directional Panel',
        technology: 'MuLCAT®',
      },
      features: ['High Gain Directional', '4G/5G External MIMO'],
      bands: ['Sub-6 5G', '4G LTE-A'],
      isNew: true,
    },
    {
      id: 'tamp-118',
      name: 'SkyBlade™ TAMP 118',
      category: 'antenna',
      image: '/images/tamp118.png',
      tagline: 'Wi-Fi 6e/7 Dual Band External Antenna with Hinge',
      description: 'Precision dual-band external antenna with an articulating hinge for optimized Wi-Fi 6E/7 coverage and flexibility.',
      specs: {
        frequency: 'Wi-Fi 6E / Wi-Fi 7',
        formFactor: 'Hinged External',
        technology: 'MuLCAT®',
      },
      features: ['Articulating hinge for optimal positioning', 'Supports Wi-Fi 6E and Wi-Fi 7 bands'],
      bands: ['2.4 GHz', '5 GHz', '6 GHz'],
    },
    {
      id: 'taep-121',
      name: 'SkyBlade™ TAEP 121',
      category: 'antenna',
      image: '/images/temp121.png',
      tagline: 'Wi-Fi 6 Dual Band Internal Antenna with Connectorized Cable',
      description: 'Internal Wi-Fi 6 dual-band antenna solution with connectorized cables for easy integration into compact device enclosures.',
      specs: {
        frequency: '2.4 / 5 GHz',
        formFactor: 'Internal Embedded',
        technology: 'MuLCAT®',
      },
      features: ['Dual-band Wi-Fi 6 support', 'Pre-connectorized cabling'],
      bands: ['2.4 GHz', '5 GHz'],
      isNew: true,
    },
    {
      id: 'maep-103',
      name: 'BioTrack™ MAEP 103',
      category: 'embedded',
      image: '/images/maep-103.png',
      tagline: 'Ultra Compact Wireless Healthcare NFC Antenna',
      description: 'Miniaturized NFC antenna coil engineered specifically for secure wireless healthcare applications, wearables, and medical telemetry.',
      specs: {
        frequency: '13.56 MHz NFC',
        formFactor: 'Ultra Compact Coil',
        technology: 'MuLCAT®',
      },
      features: ['Optimized for healthcare/medical telemetry', 'Ultra-low profile design'],
      bands: ['NFC'],
    },
    {
      id: 'tamp-125',
      name: 'SkyBlade™ TAMP 125',
      category: 'antenna',
      image: '/images/tamp125-1.png',
      tagline: '4G LTE/5G Broadband MIMO Antenna Module',
      description: 'Versatile broadband MIMO antenna module providing consistent high-performance 4G LTE and 5G connectivity for enterprise routing.',
      specs: {
        frequency: '617 - 5925 MHz',
        formFactor: 'External MIMO Module',
        technology: 'MuLCAT®',
      },
      features: ['Broadband MIMO coverage', 'High inter-port isolation'],
      bands: ['Sub-6 5G', '4G LTE-A'],
    },
    {
      id: 'taep-134',
      name: 'SkyBlade™ TAEP 134',
      category: 'antenna',
      image: '/images/antennas-new.jpg',
      tagline: '4G LTE/ 5G Sub6 and GNSS L1Ultra-Broadband FPCB Antenna',
      description: 'Ultra-broadband flexible printed circuit board antenna covering 4G/5G and GNSS.',
      specs: { frequency: 'Sub-6 5G & GNSS L1', formFactor: 'FPCB', technology: 'MuLCAT®' },
      features: ['Ultra-broadband', 'Flexible mounting'],
      bands: ['4G/5G', 'GNSS'],
    },
    {
      id: 'taep-135',
      name: 'SkyBlade™ TAEP 135',
      category: 'antenna',
      image: '/images/tamp159.png',
      tagline: 'WiFi 6e/7 Triple Band FPCB Antenna',
      description: 'Flexible Triple Band Wi-Fi 6E/7 antenna for compact embedded devices.',
      specs: { frequency: 'Wi-Fi 6e/7', formFactor: 'FPCB', technology: 'MuLCAT®' },
      features: ['Triple Band', 'Embedded FPCB'],
      bands: ['2.4 GHz', '5 GHz', '6 GHz'],
    },
    {
      id: 'cgmp165',
      name: 'BioTrack™ CGMP165',
      category: 'embedded',
      image: '/images/asset-tracker.png',
      tagline: 'GPS and GLONASS SMD Antenna',
      description: 'Surface mount GPS and GLONASS antenna for precision tracking.',
      specs: { frequency: 'GPS/GLONASS', formFactor: 'SMD', technology: 'Ceramic' },
      features: ['High precision', 'SMD Mount'],
      bands: ['GNSS'],
    },
    {
      id: 'cgmp168',
      name: 'BioTrack™ CGMP168',
      category: 'embedded',
      image: '/images/maep-103.png',
      tagline: 'Single feed Multi-band Patch Antenna',
      description: 'Single-feed multi-band patch antenna optimized for navigation and telemetry.',
      specs: { frequency: 'Multi-band', formFactor: 'Patch', technology: 'Ceramic' },
      features: ['Single feed', 'Multi-band support'],
      bands: ['GNSS'],
    },
    {
      id: 'cgma174',
      name: 'SkyTrack™ CGMA174',
      category: 'antenna',
      image: '/images/asset-tracker.png',
      tagline: 'GPS/GNSS Antenna with Magnet and LNA',
      description: 'Active GPS/GNSS antenna with magnetic mount and Low Noise Amplifier for vehicle tracking.',
      specs: { frequency: 'GPS/GNSS', formFactor: 'Magnetic Mount', technology: 'Active LNA' },
      features: ['Magnetic Mount', 'Integrated LNA'],
      bands: ['GNSS'],
    },
    {
      id: 'cgma175',
      name: 'SkyTrack™ CGMA175',
      category: 'antenna',
      image: '/images/asset-tracker.png',
      tagline: 'GPS/GNSS Antenna with LNA',
      description: 'High-gain active GNSS antenna with LNA for accurate geolocation.',
      specs: { frequency: 'GPS/GNSS', formFactor: 'External', technology: 'Active LNA' },
      features: ['High precision', 'LNA amplification'],
      bands: ['GNSS'],
    },
    {
      id: 'taep-177',
      name: 'SkyBlade™ TAEP 177',
      category: 'antenna',
      image: '/images/tamp141.png',
      tagline: '5G GNSS Antenna',
      description: 'Combined 5G cellular and GNSS tracking antenna for comprehensive IoT connectivity.',
      specs: { frequency: '5G Sub-6 & GNSS', formFactor: 'Combo Antenna', technology: 'MuLCAT®' },
      features: ['5G Cellular', 'GNSS Tracking'],
      bands: ['5G', 'GNSS'],
    },
    {
      id: 'taep-186',
      name: 'SkyBlade™ TAEP 186',
      category: 'antenna',
      image: '/images/tamp161.png',
      tagline: 'Customized Antenna',
      description: 'Custom-tuned antenna configuration meeting specific enterprise operational requirements.',
      specs: { frequency: 'Custom', formFactor: 'Custom', technology: 'MuLCAT®' },
      features: ['Custom tuning', 'Enterprise deployment'],
      bands: ['Custom'],
    },
    {
      id: 'lte-mag-mount',
      name: 'SkyBlade™ LTE Mag Mount',
      category: 'antenna',
      image: '/images/tamp172.png',
      tagline: 'LTE Omni Antenna with Magnetic Mount',
      description: 'Portable omnidirectional LTE antenna with magnetic base for rapid vehicle deployment.',
      specs: { frequency: 'LTE Bands', formFactor: 'Magnetic Mount', technology: 'Omni' },
      features: ['Magnetic base', 'Omnidirectional'],
      bands: ['4G LTE'],
    },
    {
      id: 'direct-to-satellite',
      name: 'SkyBlade™ Satellite-NTN',
      category: 'antenna',
      image: '/images/skymirr-next-gen-antennas.jpg',
      tagline: 'Direct-to-Satellite 4G/5G Cellular Antenna',
      description: 'Advanced NTN (Non-Terrestrial Network) antenna for direct satellite 4G/5G communications.',
      specs: { frequency: 'Satellite / 5G NTN', formFactor: 'External', technology: 'MuLCAT® NTN' },
      features: ['Direct-to-Satellite', '5G NTN support'],
      bands: ['Satellite', '5G'],
    },
  ] as Product[],

  partners: [
    { name: 'Amazon', category: 'Online Partner', image: '/images/partner-amazon.jpg', url: 'https://www.amazon.com' },
    { name: 'Walmart', category: 'Online Partner', image: '/images/partner-walmart.jpg', url: 'https://www.walmart.com' },
    { name: 'DigiKey', category: 'Online Partner', image: '/images/partner-digikey.jpg', url: 'https://www.digikey.com' },
    { name: 'Central Computers', category: 'Online Partner', image: '/images/partner-central-computers.png', url: 'https://www.centralcomputer.com' },
    { name: 'B&H Photo Video', category: 'Online Partner', image: '/images/partner-bandh.jpg', url: 'https://www.bhphotovideo.com' },
    { name: 'ThinkEdu', category: 'Online Partner', image: '/images/partner-think-edu.png', url: 'https://www.thinkedu.com' },
    { name: 'Semikart', category: 'Distributor', image: '/images/partner-semikart.jpg', url: 'https://www.semikart.com' },
    { name: 'D&H Distributing', category: 'Distributor', image: '/images/partner-dandh.jpg', url: 'https://www.dandh.com' },
    { name: 'CellHub', category: 'Distributor', image: '/images/partner-cellhub.jpg', url: 'https://www.cellhub.com' },
    { name: 'Advent', category: 'Distributor', image: '/images/partner-advent.jpg', url: 'https://skymirr.com' },
    { name: 'Aqtronics', category: 'Distributor', image: '/images/partner-aqtronics.jpg', url: 'https://skymirr.com' },
  ] as Partner[],

  team: [
    {
      name: 'Eric (Youngmin) Jo, Ph.D.',
      role: 'Co-Founder and Chief Executive Officer',
      category: 'leadership',
      image: '/images/team/eric-jo.jpg',
      bio: 'Over 25 years of experience in RF/antenna technology and operations management. Former global VP of Operations at Taoglas, Co-Founder/CEO of SkyCross with 600 employees, and executive at Samsung Electronics. Holds over 35 patents for antenna and RF systems. Ph.D. in Electrical Engineering from Florida Tech.',
    },
    {
      name: 'Christopher Morton, Ph.D.',
      role: 'Co-Founder and Board Chairman',
      category: 'leadership',
      image: '/images/team/chris-morton.jpg',
      bio: 'Over 30 years of executive leadership in IT, display, and wireless communications. CEO of NanoPhotonica, Operating Partner in Orchid Black, with over $85M raised from leading institutional VCs. Ph.D. in Communication Systems from University of Pennsylvania.',
    },
    {
      name: 'Kerry Greer, MSEE, MBA',
      role: 'CSO and Co-Founder',
      category: 'leadership',
      image: '/images/team/kerry-greer.jpg',
      bio: 'Over 30 years leading R&D, business development, volume manufacturing, and systems engineering at Globalstar, L3Harris Communications, and ACR Electronics. Holds 10+ patents in RF communications. MSEE and MBA from University of Florida.',
    },
    {
      name: 'Natasha Tamaskar, Ph.D.',
      role: 'Chief Revenue Officer',
      category: 'leadership',
      image: '/images/team/natasha-tamaskar.jpg',
      bio: 'Global technology executive with deep experience leading commercialization, product strategy, and market expansion across telecommunications and cloud infrastructure. Ph.D. in Physics and MBA, passionate about applied generative AI for digital transformation.',
    },
    {
      name: 'Greg Khachatrian',
      role: 'Board Director',
      category: 'board',
      image: '/images/team/greg-khachatrian.jpg',
      bio: 'Experienced venture board director, business strategist, and corporate governance leader specializing in scaling hardware technology companies and global institutional partnerships.',
    },
    {
      name: 'Dr. Donna Hamlin, Ph.D.',
      role: 'Independent Board Member',
      category: 'board',
      image: '/images/team/donna-hamlin.jpg',
      bio: 'Board director and advisor in strategy, corporate governance, and business transformation. Developer of CASCADE® and Board Bona Fide® management tools. Founder of Boardwise, Inc. Ph.D. and M.S. from Rensselaer Polytechnic Institute.',
    },
    {
      name: 'David Carrier',
      role: 'Advisory Board Member',
      category: 'advisory',
      image: '/images/team/david-carrier.jpg',
      bio: 'Industrial sales and manufacturing expert. Founder and President of QuantumFlo, Inc., an international leader in advanced variable-speed pump systems. Advisory board chairman in GrowFL. BS from University of South Florida.',
    },
    {
      name: 'Yoshioki Chika',
      role: 'Advisory Board Member',
      category: 'advisory',
      image: '/images/team/yoshioki-chika.jpg',
      bio: 'Telecommunications mobile carrier expert, former CTO of mobile carriers in Japan and senior advisor to Sprint CTO. Board member of MulteFire Alliance, former VP of Softbank Solution Strategy, and 20 years at KDDI. Degree in Physics from Ibaraki University.',
    },
    {
      name: 'Alex Wissner-Gross, Ph.D.',
      role: 'Advisory Board Member',
      category: 'advisory',
      image: '/images/team/alex-wissner-gross.jpg',
      bio: 'Award-winning computer scientist, entrepreneur, and investor. President and Chief Scientist of Gemedy, taught at Harvard and MIT. Founded/invested in 27 companies with combined valuation >$850M. Ph.D. in Physics from Harvard and S.B. from MIT.',
    },
  ] as TeamMember[],

  mulcatTechnology: {
    title: 'Proprietary MuLCAT® Technology',
    subtitle: 'Multi-Layer Coupling Controlled Antenna Technology',
    lead: 'For decades, wireless engineers fought antenna coupling as a destructive parasite that causes return loss, detuning, and signal cancellation. SkyMirr inverted the paradigm.',
    mechanism: 'MuLCAT® uses positive electromagnetic coupling through proprietary multi-layer dielectric resonator geometries. Rather than isolating elements with bulky chokes or lossy shielding, MuLCAT® constructively aligns the phase of adjacent fields to amplify radiation efficiency and multiply usable bandwidth.',
    advantages: [
      {
        title: '10x Usable Bandwidth',
        desc: 'Broadband multi-resonance across 617 MHz to 6000 MHz without costly active switching circuitry or mechanical relays.',
      },
      {
        title: '+92% Data Recognition Distance',
        desc: 'Higher received signal-to-noise ratio (SNR) allows transceivers to lock into high-order modulation schemes at nearly double the physical range.',
      },
      {
        title: '+65% Greater Antenna Gain',
        desc: 'Constructive phase reinforcement focuses isotropic energy towards the horizon rather than wasting it in skyward side-lobes.',
      },
      {
        title: 'Downlink Interference Rejection',
        desc: 'Spatial and multi-layer filtering selectively suppresses adjacent channel jamming and cell tower harmonic cross-talk.',
      },
      {
        title: 'Real-Time Dynamic Optimization',
        desc: 'Algorithmic phase adjustment that stabilizes impedance even when objects, walls, or human hands approach the device.',
      },
    ],
  },

  firmwareDownloads: [
    {
      version: 'v2.4.1 Stable (Latest)',
      releaseDate: 'October 2026',
      device: 'Sky5G™ Router (TCPA-117)',
      notes: 'Enhanced 5G Standalone SA Carrier Aggregation, Wi-Fi 7 Multi-Link Operation (MLO) stability, and AT&T band roaming optimization.',
      fileSize: '48.2 MB',
    },
    {
      version: 'v2.3.8',
      releaseDate: 'July 2026',
      device: 'Sky5G™ Router (TCPA-117)',
      notes: 'T-Priority First Responder QoS prioritization patch, automated APN profile detection, and IPsec tunnel keepalive fix.',
      fileSize: '46.9 MB',
    },
  ],

  frequencyBands: [
    { id: 'b71', name: 'Low Band (n71 / B71)', range: '617 - 698 MHz', designation: 'Rural & Deep Indoor Coverage', useCase: 'T-Mobile extended range 5G, massive geographical reach through forest and walls.', vswr: '< 1.8:1', gainDbi: 3.5 },
    { id: 'b14', name: 'Public Safety (B14 / FirstNet)', range: '758 - 798 MHz', designation: 'T-Priority & FirstNet Emergency', useCase: 'First responder priority bandwidth with guaranteed quality of service.', vswr: '< 1.7:1', gainDbi: 4.2 },
    { id: 'mid', name: 'Mid Band (n41 / n25 / n66)', range: '1710 - 2690 MHz', designation: 'Suburban High-Speed 5G', useCase: 'High capacity carrier aggregation, enterprise primary connectivity.', vswr: '< 1.6:1', gainDbi: 5.0 },
    { id: 'cband', name: 'C-Band & CBRS (n77 / n78)', range: '3300 - 4200 MHz', designation: 'Ultra-Capacity Urban Grid', useCase: 'Gigabit-speed fixed wireless access for enterprise campuses and dense urban centers.', vswr: '< 1.9:1', gainDbi: 6.0 },
    { id: 'wifi7', name: 'Wi-Fi 7 Sub-6 (Unlicensed)', range: '5150 - 5925 MHz', designation: 'Local High-Throughput Fabric', useCase: 'Low latency links for VR, 4K multi-stream cameras, and autonomous robotics.', vswr: '< 1.8:1', gainDbi: 5.8 },
  ] as FrequencyBand[],

  solutions: [
    {
      id: 'first-responders',
      title: 'First Responders & Tactical Defense',
      tagline: 'Certified T-Priority & FirstNet Resilient Communications',
      description: 'When cell towers are damaged or emergency convoys enter radio dead zones, SkyMirr hardware maintains stable mission-critical voice, video telemetry, and GPS data.',
      metrics: ['100% T-Priority Certified', 'Zero Packet Drop at Cell Edge', 'Sub-2ms Wi-Fi 7 Vehicle Area Network'],
      icon: 'ShieldCheck',
    },
    {
      id: 'rural-fwa',
      title: 'Rural Fixed Wireless & Digital Equity',
      tagline: 'Bridging the Connectivity Divide without Trenching Fiber',
      description: 'Deliver true fiber-like broadband to rural communities and agricultural hubs located miles beyond standard cell tower coverage radii using Sky5G’s 42% extended range.',
      metrics: ['+42% Farther Tower Reach', '2x Sustained Speed in Fringe Zones', 'Easy DIY Setup & High Gain Antennas'],
      icon: 'Radio',
    },
    {
      id: 'enterprise-sdwan',
      title: 'Enterprise Branch & SD-WAN Failover',
      tagline: 'Zero-Downtime High-Capacity Primary & Backup Wireless',
      description: 'Keep retail registers, branch office VoIP, and financial transactions running seamlessly with automated carrier-redundant cellular failover and multi-gigabit throughput.',
      metrics: ['Sub-Second Carrier Switchover', '512 Concurrent Devices Supported', 'Enterprise IPsec / WireGuard Tunneling'],
      icon: 'Network',
    },
    {
      id: 'industrial-iot',
      title: 'Industrial IoT & Smart Infrastructure',
      tagline: 'Electromagnetically Hardened for Harsh Environments',
      description: 'Connect distributed solar fields, water treatment plants, autonomous port cranes, and smart transit corridors where electrical noise degrades ordinary wireless devices.',
      metrics: ['Superior Downlink Rejection', 'IP67 Ruggedized Enclosure Options', 'Operating Temp: -40°C to +85°C'],
      icon: 'Cpu',
    },
  ] as Solution[],

  labInfo: {
    location: 'Incheon, South Korea',
    facility: 'Songdo 3D RF Anechoic Chamber & Advanced Measurement Suite',
    description: 'Our state-of-the-art Incheon R&D center houses a calibrated full-anechoic microwave chamber equipped with multi-axis automated positioning turntables, vector network analyzers up to 50 GHz, and active 3D beamforming characterization.',
    capabilities: [
      'Full 3D Spherical Radiation Pattern Characterization',
      'Over-The-Air (OTA) TRP & TIS Measurement for 5G NR',
      'High-Temperature and Moisture Environmental Stress Simulation',
      'Electromagnetic Near-Field Scanner for Multi-Layer Coupling Verification',
    ],
  },

  news: [
    {
      id: 'att-cert',
      date: 'September 2026',
      title: 'SkyMirr Sky5G Router Achieves AT&T Network Certification',
      publication: 'Business Wire & Telecom Insights',
      summary: 'Expanding carrier choice for reliable connectivity, the Sky5G router successfully passes AT&T certification across nationwide sub-6 5G and LTE bands.',
      badge: 'Carrier Certification',
    },
    {
      id: 'antenna-expand',
      date: 'August 2026',
      title: 'SkyMirr Expands Its Antenna Portfolio with New High-Performance 4G/5G and Wi-Fi Solutions',
      publication: 'Microwave Journal',
      summary: 'Unveiling new MIMO modules, dual-polarization vehicle arrays, and Wi-Fi 7 omnidirectional whips powered by patented MuLCAT® architecture.',
      badge: 'Product Launch',
    },
    {
      id: 'ces-2026',
      date: 'January 2026',
      title: 'SkyMirr Sky5G™ Router Named CES® 2026 Innovation Awards Honoree',
      publication: 'Consumer Technology Association',
      summary: 'Honored in the Mobile Devices, Accessories & Apps category for bringing antenna-first physics and Wi-Fi 7 to commercial 5G customer premises equipment.',
      badge: 'Award Recognition',
    },
    {
      id: 'rf-layer',
      date: 'November 2025',
      title: 'Antenna-First Design: Why Real-World 5G Performance Starts at the RF Layer',
      publication: 'SkyMirr Technical Whitepaper',
      summary: 'An engineering treatise on why modern multi-gigabit modems cannot overcome physics if the electromagnetic antenna system lacks sufficient isolation.',
      badge: 'Whitepaper',
    },
  ] as NewsItem[],

  heroSlides: [
    {
      id: 'slide-1',
      image: '/images/slider1.jpg',
      tagline: 'ANTENNA-FIRST WIRELESS',
      title: 'SIGNAL WITHOUT LIMITS',
      description: 'We develop and manufacture advanced RF technology-based products that better connect the world, such as cost-effective better-performing broadband wireless for everyone.',
      ctaText: 'How do we do that?',
      ctaLink: '#technology',
      badge: 'Patented MuLCAT® Technology',
    },
    {
      id: 'slide-2',
      image: '/images/slider2.jpg',
      tagline: 'MISSION-CRITICAL CONNECTIVITY',
      title: 'WHEN IT HAS TO CONNECT, IT HAS TO BE SKYMIRR',
      description: 'We develop/manufacture advanced RF technology-based products that better our lives, such as cost-effective, better performing, broadband wireless communications for everyone and medical applications that treat serious disease far more effectively.',
      ctaText: 'Explore Technology',
      ctaLink: '#technology',
      badge: 'Up to 42% Farther Reach',
    },
    {
      id: 'slide-3',
      image: '/images/skymirr-next-gen-antennas.jpg',
      tagline: 'NEXT-GENERATION 5G & WI-FI 7',
      title: 'NEXT GENERATION ANTENNAS',
      description: 'Powered by MuLCAT® Technology — Ultra-wideband omnidirectional 4G/5G, Sub-6 GHz, C-Band, and Wi-Fi 7 solutions engineered from the electromagnetic field outward.',
      ctaText: 'View Product Portfolio',
      ctaLink: '#products-grid',
      badge: 'CES® 2026 Innovation Honoree',
    },
  ],

  customerSuccess: {
    badge: 'Customer Success Scenario',
    title: 'Retail Expansion Without Connectivity Delays',
    client: 'National Multi-Location Retail Chain',
    challenge: 'A national retailer was opening ten new locations. Fiber installation delays threatened store launches, POS deployment, inventory synchronization, and staff onboarding.',
    solution: 'The retailer implemented Sky5G Routers as primary broadband gateways. Mesh Networking extended coverage across sales floors and warehouses, while MuLCAT® technology maintained stable connectivity through concrete and metal structures.',
    result: 'All 10 stores launched on schedule with zero retail downtime, processing thousands of POS transactions per day with full failover redundancy.',
    metrics: [
      { label: 'Stores Launched', value: '10 / 10' },
      { label: 'Retail Downtime', value: '0 Hours' },
      { label: 'Carrier Redundancy', value: '100% Dual-SIM' },
    ],
  },
};
