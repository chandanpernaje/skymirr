import { GoogleGenAI, Type } from '@google/genai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SKYMIRR_SYSTEM_PROMPT = `You are SkyMirr's Senior AI RF Systems Engineer.
SkyMirr is an antenna-first wireless hardware technology company with headquarters in Melbourne, Florida and an advanced 3D microwave anechoic chamber R&D laboratory in Songdo Incheon, South Korea.
SkyMirr invented and patented MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology). While traditional RF engineering fights antenna coupling as destructive interference, MuLCAT® harnesses positive electromagnetic coupling to constructive phase-align adjacent fields. This delivers:
- Up to 42% farther reach to cell towers
- 2x throughput at the cell edge in low SNR environments
- 10x usable bandwidth across 617 MHz to 6000 MHz without lossy RF switches

SkyMirr's Authentic Products:
1. Sky5G™ Wireless Router (TCPA-117): Next-Generation High-Gain 5G Sub-6 NSA/SA & Wi-Fi 7 (802.11be) CPE Gateway. Dual SIM auto-failover, 2.5G WAN + 4x Gigabit LAN, 4x External SMA RF ports, certified for T-Mobile 5G, T-Priority (First Responders), AT&T network certified, CES® 2026 Innovation Awards Honoree.
2. SkyBlade™ TAMP141: World's first true global 5G ultra-wideband omnidirectional whip antenna covering 617 MHz to 5925 MHz, peak gain up to 6.0 dBi, VSWR < 2.0:1, rugged UV polycarbonate radome, precision gold-plated SMA Male connector.
3. SkyBlade™ TAMP161 MIMO: Dual cross-polarized 4G/5G broadband omnidirectional module for industrial IoT, autonomous robotics, and emergency vehicles. IP67 waterproof, MIL-STD-810H rated.
4. SkyBlade™ TAMP159 & TAMP154: High-Gain Dual/Tri-Band Wi-Fi 6E & 7 Omnidirectional antennas covering 2.4 GHz, 5.8 GHz, and the 6 GHz Wi-Fi 7 band (up to 320 MHz channel allocation).
5. SkyTrack™ Industrial Asset Tracker: Heavy-duty global LTE-M / NB-IoT & active GPS tracker with internal MuLCAT® patch antennas maintaining lock inside metal shipping containers and rail cars. IP68 submersible, up to 7-year battery life, ATEX Zone 2 certified.
6. Medical Microwave Systems: RF technology for cancer detection and microwave thermal ablation therapies.

Always provide accurate, professional, authoritative electromagnetic engineering guidance.`;

function getDomainFallbackRecommendation(scenario: string) {
  const isRetail = /retail|pos|store|branch|fiber/i.test(scenario);
  const isFleet = /first responder|vehicle|fleet|emergency|police|ambulance|truck/i.test(scenario);
  const isTracker = /tracker|asset|container|gps|cargo|pallet|metal/i.test(scenario);

  if (isRetail) {
    return {
      executiveSummary:
        'For multi-location retail branch operations facing fiber delays, SkyMirr recommends deploying Sky5G™ CPE Routers (TCPA-117) with dual-SIM carrier failover to provide primary zero-downtime POS connectivity and multi-gigabit Wi-Fi 7 coverage.',
      recommendedProducts: [
        {
          name: 'Sky5G™ Wireless Router (TCPA-117)',
          category: 'Primary Carrier Gateway',
          reasoning: 'Provides high-gain internal MuLCAT® array with automated T-Mobile and AT&T dual-SIM failover to keep point-of-sale systems live.',
          estimatedGain: '+42% Cell-Edge Range / 2x SNR',
        },
        {
          name: 'SkyBlade™ TAMP159 Wi-Fi 7 Omni',
          category: 'Access Point Expansion',
          reasoning: 'Extends 6 GHz Wi-Fi 7 wireless coverage across sales floors, payment kiosks, and stockrooms with 320 MHz channels.',
          estimatedGain: '6.2 dBi Peak Omnidirectional Gain',
        },
      ],
      frequencyBands: ['n71 (600 MHz Low-Band)', 'n41 (2.5 GHz Ultra Capacity)', 'n77/n78 (3.5-3.8 GHz C-Band)', '6 GHz Wi-Fi 7'],
      carrierOptimization: 'T-Mobile 5G Standalone SA primary with AT&T cellular failover for 99.999% POS availability.',
      topologyGuidance: 'Place the Sky5G router high on perimeter walls facing the nearest carrier macro cell; connect 2.5G WAN to in-store core switch.',
    };
  }

  if (isFleet) {
    return {
      executiveSummary:
        'For mission-critical fleets and public safety vehicles, SkyMirr recommends the Sky5G™ Router paired with the SkyBlade™ TAMP161 MIMO module for priority T-Priority Band 14 operation and rugged vibration resistance.',
      recommendedProducts: [
        {
          name: 'SkyBlade™ TAMP161 Broadband MIMO Module',
          category: 'Vehicle Radome Module',
          reasoning: 'Dual cross-polarized omnidirectional antenna element designed for roof-mounting on emergency vehicles (IP67 & MIL-STD-810H).',
          estimatedGain: '5.5 dBi Omnidirectional Gain',
        },
        {
          name: 'Sky5G™ Wireless Router (TCPA-117)',
          category: 'In-Vehicle Mobile Gateway',
          reasoning: 'T-Priority first-responder tier certified with hardware IPsec VPN tunnels back to dispatch and command centers.',
          estimatedGain: 'Carrier Priority QoS Tier',
        },
      ],
      frequencyBands: ['Band 14 (FirstNet / T-Priority 700 MHz)', 'n71 (600 MHz)', 'n25/n66 (Mid-Band)', '5.8 GHz Wi-Fi'],
      carrierOptimization: 'T-Priority emergency first responder priority network tier with low-latency preemption.',
      topologyGuidance: 'Roof-mount TAMP161 puck on vehicle center line; route low-loss RG58 cabling to shock-mounted Sky5G gateway under console.',
    };
  }

  if (isTracker) {
    return {
      executiveSummary:
        'For industrial tracking inside metal containers or railcars, SkyMirr recommends the SkyTrack™ Industrial Asset Tracker utilizing internal MuLCAT® dielectric resonators to overcome metallic signal attenuation.',
      recommendedProducts: [
        {
          name: 'SkyTrack™ Industrial Asset Tracker',
          category: 'Telemetry Terminal',
          reasoning: 'Hermetic IP68 polycarbonate housing with internal positive-coupling patch antenna maintaining cellular lock through container walls.',
          estimatedGain: 'Active High-Sensitivity GPS + LTE-M',
        },
      ],
      frequencyBands: ['Global LTE Cat-M1', 'NB-IoT', 'Quad-Band 2G GSM', 'GPS L1 / GLONASS'],
      carrierOptimization: 'Global multi-IMSI roaming profile switching dynamically between AT&T, T-Mobile, and regional LTE-M networks.',
      topologyGuidance: 'Magnetic or bolt mounting on upper container corner or refrigerated chassis frame with 7-year LiSOCl2 battery pack.',
    };
  }

  return {
    executiveSummary:
      'SkyMirr recommends our flagship Sky5G™ Router (TCPA-117) paired with external SkyBlade™ TAMP141 ultra-wideband omnidirectional whip antennas for maximum coverage across all sub-6 5G and C-Band spectrum.',
    recommendedProducts: [
      {
        name: 'Sky5G™ Wireless Router (TCPA-117)',
        category: 'Carrier Gateway',
        reasoning: 'Patented MuLCAT® positive coupling array eliminates traditional dipole loss and delivers +42% farther reach to macro cell towers.',
        estimatedGain: '+42% Extended Cell Tower Acquisition',
      },
      {
        name: 'SkyBlade™ TAMP141 Ultra-Wideband Omni',
        category: 'External Whip Antenna',
        reasoning: 'Continuous 617 MHz to 5925 MHz multi-octave resonance eliminates regional antenna swapping and maximizes fringe signal SNR.',
        estimatedGain: 'Up to 6.0 dBi Peak Gain',
      },
    ],
    frequencyBands: ['617 - 960 MHz (Low-Band)', '1710 - 2690 MHz (Mid-Band)', '3300 - 4200 MHz (C-Band)', '5150 - 5925 MHz (Wi-Fi 7)'],
    carrierOptimization: 'Dual-carrier aggregation with T-Mobile 5G SA and AT&T network roaming.',
    topologyGuidance: 'Mount external TAMP141 antennas at 90-degree orthogonal polarization on building exterior; link to Sky5G SMA ports.',
  };
}

export async function generateRfRecommendation(scenario: string) {
  if (!apiKey) {
    return getDomainFallbackRecommendation(scenario);
  }

  // Model strategy: try gemini-3.1-flash-lite first for instant low latency, with fallback to gemini-3.8-flash, then domain expert
  const models = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];

  for (const model of models) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents: `Analyze the following customer deployment requirements and provide a structured SkyMirr RF hardware and deployment recommendation:
"${scenario}"`,
        config: {
          systemInstruction: SKYMIRR_SYSTEM_PROMPT,
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              executiveSummary: {
                type: Type.STRING,
                description: 'A 2-sentence executive summary of the recommended solution.',
              },
              recommendedProducts: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING, description: 'Product name (e.g. Sky5G™ Router TCPA-117)' },
                    category: { type: Type.STRING, description: 'Hardware category' },
                    reasoning: { type: Type.STRING, description: 'Why this product solves this specific scenario' },
                    estimatedGain: { type: Type.STRING, description: 'Estimated dB gain or SNR reach improvement' },
                  },
                  required: ['name', 'category', 'reasoning', 'estimatedGain'],
                },
                description: 'List of recommended SkyMirr hardware items.',
              },
              frequencyBands: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'Optimal cellular or Wi-Fi bands for this deployment.',
              },
              carrierOptimization: {
                type: Type.STRING,
                description: 'Carrier network strategy (e.g. T-Mobile 5G SA, AT&T failover, T-Priority QoS).',
              },
              topologyGuidance: {
                type: Type.STRING,
                description: 'Concise physical placement, antenna separation, and cabling topology recommendations.',
              },
            },
            required: [
              'executiveSummary',
              'recommendedProducts',
              'frequencyBands',
              'carrierOptimization',
              'topologyGuidance',
            ],
          },
        },
      });

      const text = response.text?.trim();
      if (text) {
        return JSON.parse(text);
      }
    } catch (err: any) {
      console.warn(`Model ${model} error:`, err.message);
    }
  }

  // Graceful fallback to domain recommendation
  return getDomainFallbackRecommendation(scenario);
}

export async function askRfEngineer(question: string, history: Array<{ role: string; content: string }> = []) {
  if (!apiKey) {
    return 'SkyMirr patented MuLCAT® technology uses positive dielectric coupling to deliver +42% farther reach to cell towers and 2x higher throughput in fringe signal environments. For direct evaluation units, call 321-393-1039 or submit an RFP quote request.';
  }

  const formattedHistory = history.slice(-6).map((h) => ({
    role: h.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: h.content }],
  }));

  const contents = [
    ...formattedHistory,
    {
      role: 'user',
      parts: [{ text: question }],
    },
  ];

  const models = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];

  for (const model of models) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction: `${SKYMIRR_SYSTEM_PROMPT}
You are answering an engineer or customer visiting skymirr.com. Keep answers technical, concise, authoritative, and focused on SkyMirr's patented MuLCAT® technology and hardware specs.`,
        },
      });

      if (response.text) {
        return response.text;
      }
    } catch (err: any) {
      console.warn(`Model ${model} chat error:`, err.message);
    }
  }

  return 'SkyMirr patented MuLCAT® technology harnesses positive dielectric coupling across 617 MHz to 6000 MHz to deliver +42% farther reach to cell towers and 2x higher throughput in low SNR environments. For specifications and evaluation units, please call 321-393-1039.';
}
