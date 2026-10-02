import { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Cpu, Radio, Shield, RefreshCw, Layers } from 'lucide-react';
import { generateRfRecommendation } from '../services/geminiService';

interface RecommendedProduct {
  name: string;
  category: string;
  reasoning: string;
  estimatedGain: string;
}

interface AiRecommendation {
  executiveSummary: string;
  recommendedProducts: RecommendedProduct[];
  frequencyBands: string[];
  carrierOptimization: string;
  topologyGuidance: string;
}

const PRESET_SCENARIOS = [
  {
    title: 'Retail Branch Deployment',
    desc: '10 new locations needing primary broadband gateway, POS zero-downtime, and fiber backup.',
  },
  {
    title: 'First Responder & Fleet',
    desc: 'Emergency vehicles requiring T-Priority Band 14, dual SIM failover, and high-speed Wi-Fi 7.',
  },
  {
    title: 'Rural Extended Range',
    desc: 'Fringe cell tower distance (>10 km) through heavy foliage requiring Band 71 low-frequency gain.',
  },
  {
    title: 'Metal Warehouse Telemetry',
    desc: 'Dense shipping container storage yard requiring GPS and cellular lock through metal walls.',
  },
];

interface AiRfAdvisorSectionProps {
  onOpenQuoteWithAiResult: (summary: string) => void;
}

export function AiRfAdvisorSection({ onOpenQuoteWithAiResult }: AiRfAdvisorSectionProps) {
  const [scenarioInput, setScenarioInput] = useState(
    'A national retailer opening 10 locations with fiber delays, needing primary 5G wireless gateways with mesh Wi-Fi 7 and dual-SIM failover.'
  );
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<AiRecommendation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRunAiAnalysis = async (customPrompt?: string) => {
    const promptToUse = customPrompt || scenarioInput;
    if (!promptToUse.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const data = await generateRfRecommendation(promptToUse);
      setRecommendation(data);
    } catch (err: any) {
      console.error('AI Analysis failed:', err);
      setError(err.message || 'Unable to generate AI recommendation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-advisor" className="py-20 bg-white border-t border-slate-200 relative overflow-hidden rf-grid">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Anti-Slop Editorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 tracking-wider uppercase mb-2 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" />
            <span>AI-Powered Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight uppercase [text-wrap:balance]">
            SkyMirr AI RF Deployment Architect
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
            Describe your enterprise connectivity challenge. Our Gemini-powered RF system engineer analyzes path loss,
            frequency bands, and carrier certification to recommend the optimal MuLCAT® hardware blueprint.
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Scenario Input & Presets */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-xs">
              <label htmlFor="rf-scenario" className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">
                Deployment Requirements &amp; Environment
              </label>
              <textarea
                id="rf-scenario"
                rows={4}
                value={scenarioInput}
                onChange={(e) => setScenarioInput(e.target.value)}
                placeholder="e.g. We have a 40,000 sq ft logistics facility with metal racks and weak cellular coverage..."
                className="w-full text-xs sm:text-sm text-slate-900 bg-white border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all resize-none font-sans"
              />

              {/* Action Button */}
              <div className="mt-3">
                <button
                  onClick={() => handleRunAiAnalysis()}
                  disabled={loading || !scenarioInput.trim()}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Synthesizing RF Architecture...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Generate AI Engineering Blueprint</span>
                    </>
                  )}
                </button>
              </div>

              {error && (
                <div className="mt-3 p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-xs">
                  {error}
                </div>
              )}
            </div>

            {/* Presets */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                Or select an enterprise scenario:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PRESET_SCENARIOS.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setScenarioInput(preset.desc);
                      handleRunAiAnalysis(preset.desc);
                    }}
                    className="text-left p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 transition-colors shadow-xs group cursor-pointer"
                  >
                    <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 font-display">
                      {preset.title}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                      {preset.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: AI Output Blueprint */}
          <div className="lg:col-span-7">
            {recommendation ? (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-slate-800 uppercase">
                      AI Hardware Recommendation
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200/80 font-bold">
                    Gemini 3.8 Flash Verified
                  </span>
                </div>

                {/* Executive Summary */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Executive Summary
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200">
                    {recommendation.executiveSummary}
                  </p>
                </div>

                {/* Recommended Products */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Recommended SkyMirr Hardware
                  </h4>
                  <div className="space-y-2.5">
                    {recommendation.recommendedProducts.map((prod, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-950 font-display">
                              {prod.name}
                            </span>
                            <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                              {prod.category}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1">
                            {prod.reasoning}
                          </p>
                        </div>
                        <div className="shrink-0 text-right">
                          <span className="inline-block text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200/80">
                            {prod.estimatedGain}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frequency & Carrier Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-3.5">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1">
                      Optimal Frequency Bands
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {recommendation.frequencyBands.map((band, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200"
                        >
                          {band}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-3.5">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1">
                      Carrier Network Strategy
                    </span>
                    <p className="text-xs text-slate-700 font-medium mt-0.5">
                      {recommendation.carrierOptimization}
                    </p>
                  </div>
                </div>

                {/* Deployment Topology */}
                <div className="bg-white border border-slate-200 rounded-xl p-3.5">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1">
                    Topology &amp; Antenna Placement Guidance
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    {recommendation.topologyGuidance}
                  </p>
                </div>

                {/* Bottom CTA to Quote Modal */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 font-medium">
                    Ready to evaluate this architecture in the field?
                  </span>
                  <button
                    onClick={() =>
                      onOpenQuoteWithAiResult(
                        `AI RF Recommendation: ${recommendation.executiveSummary} - Hardware: ${recommendation.recommendedProducts.map((p) => p.name).join(', ')}`
                      )
                    }
                    className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request RFP for This Hardware Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              /* Empty state placeholder */
              <div className="h-full min-h-[380px] bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4 shadow-xs">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  AI RF Architecture Engine Ready
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mt-1 leading-relaxed">
                  Enter your scenario or pick a preset on the left to generate an authentic hardware recommendation, frequency band plan, and link budget calculation.
                </p>
                <div className="mt-5 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <Layers className="w-3.5 h-3.5 text-blue-500" />
                  <span>Powered by Gemini 3.8 Flash &amp; MuLCAT® Physics</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
