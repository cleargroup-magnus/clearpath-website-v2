import { useEffect, useState } from "react";

const B  = "oklch(0.62 0.22 260)";
const BL = "oklch(0.72 0.18 260)";
const G  = "oklch(0.62 0.20 150)";
const GL = "oklch(0.72 0.18 150)";

/* ── Phase cycling: 0 = before · 1 = process · 2 = result ───────────── */
export function usePhase(active: boolean, d0 = 2200, d1 = 1800, d2 = 2400): number {
  const [phase, setPhase] = useState(0);
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    if (!active) { setPhase(0); return; }
    setPhase(0);
    const t1 = setTimeout(() => setPhase(1), d0);
    const t2 = setTimeout(() => setPhase(2), d0 + d1);
    const t3 = setTimeout(() => setCycle((c) => c + 1), d0 + d1 + d2);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [active, cycle, d0, d1, d2]);
  return phase;
}

/* ── Phase progress bar ───────────────────────────────────────────────── */
export function PhaseBar({ phase, labels }: { phase: number; labels: [string, string, string] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, width: "100%" }}>
      <span style={{
        fontSize: 9, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase",
        color: phase === 2 ? GL : phase === 1 ? BL : `${BL}60`,
        transition: "color .5s ease",
      }}>
        {labels[phase]}
      </span>
      <div style={{ display: "flex", gap: 4 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            width: i === phase ? 18 : 5, height: 3, borderRadius: 2,
            background: i === phase ? (phase === 2 ? G : B) : `${B}28`,
            transition: "all .45s ease",
          }} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── Web Development ────────────────────────── */
/* wireframe → designed → live                                             */
export function WebDevAnim({ active }: { active: boolean }) {
  const phase = usePhase(active, 1500, 1200, 1400);

  const built = phase >= 1;
  const live  = phase === 2;

  // Light-mode browser palette
  const chrome   = "#EAEAEC";   // title bar bg
  const pageBg   = "#FFFFFF";   // page area
  const wire     = "rgba(0,0,0,0.09)";  // wireframe placeholder bars
  const wireFaint = "rgba(0,0,0,0.05)";

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <svg viewBox="0 0 320 210" style={{ width: "100%", display: "block" }}>

        {/* ── Browser shell (always light) ── */}
        <rect x="0" y="0" width="320" height="210" rx="12" fill={chrome} />

        {/* Title bar */}
        <rect x="0" y="0" width="320" height="28" rx="12" fill={chrome} />
        {/* Kill bottom radius on title bar */}
        <rect x="0" y="16" width="320" height="12" fill={chrome} />

        {/* Traffic lights: gray → colour when built */}
        <circle cx="16" cy="14" r="4.5"
          fill={built ? "#FF5F57" : "rgba(0,0,0,0.15)"}
          style={{ transition: "fill .4s ease" }}
        />
        <circle cx="29" cy="14" r="4.5"
          fill={built ? "#FFBD2E" : "rgba(0,0,0,0.15)"}
          style={{ transition: "fill .4s ease .05s" }}
        />
        <circle cx="42" cy="14" r="4.5"
          fill={built ? "#28C840" : "rgba(0,0,0,0.15)"}
          style={{ transition: "fill .4s ease .10s" }}
        />

        {/* URL bar */}
        <rect x="58" y="7" width="160" height="14" rx="7"
          fill={built ? "#FFFFFF" : "rgba(0,0,0,0.10)"}
          style={{ transition: "fill .4s ease" }}
        />
        {/* URL text — live only */}
        <text x="138" y="17" textAnchor="middle" fontSize="7.5"
          fill={live ? "rgba(0,0,0,0.55)" : "transparent"}
          fontFamily="monospace"
          style={{ transition: "fill .4s ease .15s" }}>
          yourclient.com
        </text>

        {/* LIVE badge */}
        <rect x="232" y="7" width="36" height="14" rx="7"
          fill={live ? "rgba(40,200,64,0.15)" : "transparent"}
          stroke={live ? "#28C840" : "transparent"}
          strokeWidth="0.8"
          style={{ transition: "all .35s ease .2s" }}
        />
        <circle cx="240" cy="14" r="2.8"
          fill={live ? "#28C840" : "transparent"}
          style={{ transition: "fill .35s ease .25s" }}
        />
        <text x="252" y="17.5" textAnchor="middle" fontSize="6.5" fontWeight="700"
          fontFamily="Inter, sans-serif"
          fill={live ? "#28C840" : "transparent"}
          style={{ transition: "fill .35s ease .25s" }}>
          LIVE
        </text>

        {/* ── Page area: always white ── */}
        <rect x="0" y="28" width="320" height="182" fill={pageBg} />

        {/* ── NAV BAR ── */}
        <rect x="0" y="28" width="320" height="26"
          fill={built ? B + "12" : "rgba(0,0,0,0.025)"}
          style={{ transition: "fill .45s ease" }}
        />
        {/* Logo pill */}
        <rect x="12" y="34" width="28" height="14" rx="4"
          fill={built ? B + "30" : wire}
          style={{ transition: "fill .45s ease" }}
        />
        <text x="26" y="43.5" textAnchor="middle" fontSize="6" fontWeight="700"
          fontFamily="Inter, sans-serif"
          fill={built ? B : "transparent"}
          style={{ transition: "fill .45s ease" }}>
          LOGO
        </text>
        {/* Nav links */}
        {[200, 225, 250].map((x, i) => (
          <rect key={i} x={x} y="37" width="20" height="5" rx="2.5"
            fill={built ? "rgba(0,0,0,0.18)" : wire}
            style={{ transition: `fill .45s ease ${i * 0.06}s` }}
          />
        ))}
        {/* Nav CTA */}
        <rect x="278" y="33" width="30" height="14" rx="7"
          fill={built ? B : wire}
          style={{ transition: "fill .45s ease" }}
        />

        {/* ── HERO SECTION ── */}
        <rect x="0" y="54" width="320" height="72"
          fill={built ? B + "0c" : "rgba(0,0,0,0.02)"}
          style={{ transition: "fill .45s ease" }}
        />
        {/* Headline */}
        <rect x="20" y="66" width="155" height="10" rx="4"
          fill={built ? "rgba(0,0,0,0.75)" : wire}
          style={{ transition: "fill .45s ease" }}
        />
        <rect x="20" y="80" width="110" height="7" rx="3"
          fill={built ? "rgba(0,0,0,0.40)" : wireFaint}
          style={{ transition: "fill .45s ease" }}
        />
        {/* Hero CTA button */}
        <rect x="20" y="94" width="60" height="18" rx="9"
          fill={built ? B : wire}
          style={{ transition: "fill .45s ease" }}
        />
        <text x="50" y="106" textAnchor="middle" fontSize="6.5" fontWeight="600"
          fontFamily="Inter, sans-serif"
          fill={built ? "#FFFFFF" : "transparent"}
          style={{ transition: "fill .45s ease" }}>
          Get started
        </text>
        {/* Hero image placeholder (right side of hero) */}
        <rect x="210" y="58" width="96" height="60" rx="8"
          fill={built ? B + "18" : wireFaint}
          stroke={built ? B + "28" : "rgba(0,0,0,0.07)"}
          strokeWidth="1"
          style={{ transition: "all .45s ease" }}
        />

        {/* ── 3-COLUMN FEATURE CARDS ── */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={12 + i * 102} y="138" width="90" height="54" rx="8"
              fill={built ? "#FAFAFA" : "#F7F7F8"}
              stroke={built ? B + "28" : "rgba(0,0,0,0.08)"}
              strokeWidth="1"
              style={{ transition: `all .45s ease ${i * 0.08}s` }}
            />
            {/* Card icon dot */}
            <circle cx={24 + i * 102} cy="152" r="5"
              fill={built ? B + "22" : "rgba(0,0,0,0.07)"}
              style={{ transition: `fill .45s ease ${i * 0.08}s` }}
            />
            {/* Card title bar */}
            <rect x={33 + i * 102} y="148" width="52" height="6" rx="3"
              fill={built ? "rgba(0,0,0,0.65)" : wire}
              style={{ transition: `fill .45s ease ${i * 0.08}s` }}
            />
            {/* Card body lines */}
            <rect x={20 + i * 102} y="162" width="66" height="4" rx="2"
              fill={built ? "rgba(0,0,0,0.20)" : wireFaint}
              style={{ transition: `fill .45s ease ${i * 0.08 + 0.06}s` }}
            />
            <rect x={20 + i * 102} y="170" width="50" height="4" rx="2"
              fill={built ? "rgba(0,0,0,0.13)" : wireFaint}
              style={{ transition: `fill .45s ease ${i * 0.08 + 0.10}s` }}
            />
            <rect x={20 + i * 102} y="178" width="38" height="4" rx="2"
              fill={built ? "rgba(0,0,0,0.08)" : wireFaint}
              style={{ transition: `fill .45s ease ${i * 0.08 + 0.14}s` }}
            />
          </g>
        ))}

        {/* Bottom separator */}
        <rect x="0" y="208" width="320" height="2" rx="1" fill="rgba(0,0,0,0.06)" />
      </svg>

      <div style={{ marginTop: 8 }}>
        <PhaseBar phase={phase} labels={["Wireframe", "Designed", "Live"]} />
      </div>
    </div>
  );
}

/* ─────────────────────────── Systems Integration ────────────────────── */
/* Scattered tools → Connected → Data flowing                              */
export function IntegrationAnim({ active }: { active: boolean }) {
  const phase = usePhase(active, 1000, 1100, 1400);  // ~2× faster

  const nodes = [
    { label: "CRM",       cx: 150, cy: 24,  icon: "crm"      },
    { label: "Website",   cx: 258, cy: 85,  icon: "website"  },
    { label: "Forms",     cx: 258, cy: 140, icon: "forms"    },
    { label: "Email",     cx: 150, cy: 178, icon: "email"    },
    { label: "Analytics", cx: 42,  cy: 140, icon: "analytics"},
    { label: "Calendar",  cx: 42,  cy: 85,  icon: "calendar" },
  ];

  const edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]];

  const pathD = (a: typeof nodes[0], b: typeof nodes[0]) =>
    `M ${a.cx} ${a.cy} L ${b.cx} ${b.cy}`;

  const edgeLen = (a: typeof nodes[0], b: typeof nodes[0]) => {
    const dx = b.cx - a.cx, dy = b.cy - a.cy;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const connected = phase >= 1;
  const flowing   = phase === 2;
  const NR = 25;  // node radius (up from 18, ~40% larger)

  return (
    <div style={{ width: "100%", maxWidth: 310 }}>
      <svg viewBox="0 0 300 202" style={{ width: "100%", display: "block", overflow: "visible" }}>

        {/* ── Connection lines ── */}
        {edges.map(([ai, bi], i) => {
          const a = nodes[ai], b = nodes[bi];
          const len = edgeLen(a, b);
          return (
            <line key={i}
              x1={a.cx} y1={a.cy} x2={b.cx} y2={b.cy}
              stroke={flowing ? G : B}
              strokeWidth="1.5"
              strokeDasharray={len}
              strokeDashoffset={connected ? 0 : len}
              strokeOpacity={connected ? 0.5 : 0}
              style={{ transition: `stroke-dashoffset .3s ease ${i * 0.06}s, stroke-opacity .25s ease ${i * 0.06}s, stroke .2s ease` }}
            />
          );
        })}

        {/* ── Data dots — phase 2 ── */}
        {flowing && edges.map(([ai, bi], i) => {
          const a = nodes[ai], b = nodes[bi];
          return (
            <circle key={i} r="3.5" fill={BL}>
              <animateMotion dur="1.2s" begin={`${i * 0.2}s`} repeatCount="indefinite" path={pathD(a, b)} />
              <animate attributeName="opacity" values="0;1;1;0" dur="1.2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            </circle>
          );
        })}

        {/* ── Nodes ── */}
        {nodes.map((n, i) => {
          const ix = n.cx;
          const iy = n.cy - 7;   // icon centre (upper half of circle)
          const ty = n.cy + 16;  // text baseline (lower half, clear of icon)

          // Shared icon colour + transition helpers
          const ic  = connected ? BL : "rgba(255,255,255,0.32)";
          const icS: React.CSSProperties = { transition: `stroke .25s ease ${i * 0.05}s` };
          const icF: React.CSSProperties = { transition: `fill   .25s ease ${i * 0.05}s` };

          return (
            <g key={n.label}>

              {/* Node circle — no glow ring, clean edge */}
              <circle cx={n.cx} cy={n.cy} r={NR}
                fill={connected ? B + "18" : "rgba(255,255,255,0.05)"}
                stroke={connected ? B : "rgba(255,255,255,0.18)"}
                strokeWidth="1.2"
                style={{ transition: `all .25s ease ${i * 0.05}s` }}
              />

              {/* ── Icon (14px tall, centred at iy) ── */}
              {n.icon === "crm" && (
                <g fill="none" stroke={ic} strokeWidth="1.4" strokeLinecap="round" style={icS}>
                  <ellipse cx={ix} cy={iy - 3} rx="6.5" ry="2.2" />
                  <line x1={ix - 6.5} y1={iy - 3} x2={ix - 6.5} y2={iy + 3} />
                  <line x1={ix + 6.5} y1={iy - 3} x2={ix + 6.5} y2={iy + 3} />
                  <ellipse cx={ix} cy={iy + 3} rx="6.5" ry="2.2" />
                </g>
              )}
              {n.icon === "website" && (
                <g fill="none" stroke={ic} strokeWidth="1.4" strokeLinecap="round" style={icS}>
                  <rect x={ix - 8} y={iy - 6} width="16" height="12" rx="2" />
                  <line x1={ix - 8} y1={iy - 2} x2={ix + 8} y2={iy - 2} />
                  {/* Traffic-light dot in title bar */}
                  <circle cx={ix - 5} cy={iy - 4} r="1.3" fill={ic} stroke="none" />
                </g>
              )}
              {n.icon === "forms" && (
                <g fill="none" stroke={ic} strokeWidth="1.4" strokeLinecap="round" style={icS}>
                  <rect x={ix - 7} y={iy - 6} width="14" height="12" rx="2" />
                  <line x1={ix - 4} y1={iy - 2} x2={ix + 4} y2={iy - 2} />
                  <line x1={ix - 4} y1={iy + 2} x2={ix + 1.5} y2={iy + 2} />
                </g>
              )}
              {n.icon === "email" && (
                <g fill="none" stroke={ic} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={icS}>
                  <rect x={ix - 7.5} y={iy - 5} width="15" height="10" rx="1.5" />
                  <path d={`M ${ix - 7.5} ${iy - 5} L ${ix} ${iy + 1} L ${ix + 7.5} ${iy - 5}`} />
                </g>
              )}
              {n.icon === "analytics" && (
                <g fill={ic} style={icF}>
                  <rect x={ix - 7} y={iy + 1} width="4" height="5" rx="1" />
                  <rect x={ix - 2} y={iy - 3} width="4" height="9" rx="1" />
                  <rect x={ix + 3} y={iy - 7} width="4" height="13" rx="1" />
                </g>
              )}
              {n.icon === "calendar" && (
                <g fill="none" stroke={ic} strokeWidth="1.4" strokeLinecap="round" style={icS}>
                  <rect x={ix - 7} y={iy - 4} width="14" height="11" rx="2" />
                  <line x1={ix - 7} y1={iy} x2={ix + 7} y2={iy} />
                  <line x1={ix - 3} y1={iy - 6} x2={ix - 3} y2={iy - 2} />
                  <line x1={ix + 3} y1={iy - 6} x2={ix + 3} y2={iy - 2} />
                </g>
              )}

              {/* ── Label — single text element, no duplicates ── */}
              <text x={n.cx} y={ty} textAnchor="middle"
                fontSize="7.5" fontFamily="Inter, sans-serif" fontWeight="600"
                fill={flowing ? "rgba(255,255,255,0.92)" : connected ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.28)"}
                style={{ transition: `fill .25s ease ${i * 0.05}s` }}>
                {n.label}
              </text>

            </g>
          );
        })}

      </svg>

      <div style={{ marginTop: 6 }}>
        <PhaseBar phase={phase} labels={["Scattered", "Connected", "Flowing"]} />
      </div>
    </div>
  );
}

/* ─────────────────────────── AI Integration ─────────────────────────── */
/* Input docs → AI processing → Output results                             */
export function AIAnim({ active }: { active: boolean }) {
  const phase = usePhase(active, 2000, 2200, 2400);

  const inputDocs = [
    { y: 38, label: "Data" },
    { y: 72, label: "Logs" },
    { y: 106, label: "Reports" },
  ];

  const outputItems = [
    { y: 38, label: "Insight A" },
    { y: 72, label: "Insight B" },
    { y: 106, label: "Insight C" },
  ];

  // Hexagon points for center shape (cx=160, cy=90, r=28)
  const hex = (cx: number, cy: number, r: number) => {
    return Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    }).join(" ");
  };

  return (
    <div style={{ width: "100%", maxWidth: 320 }}>
      <svg viewBox="0 0 320 180" style={{ width: "100%", display: "block", overflow: "visible" }}>
        {/* ── INPUT DOCS (left, x~40) ── */}
        {inputDocs.map((doc, i) => (
          <g key={i} style={{ opacity: 1 }}>
            <rect x="8" y={doc.y} width="68" height="26" rx="6"
              fill="rgba(255,255,255,0.04)"
              stroke={phase >= 1 ? B + "50" : "rgba(255,255,255,0.10)"}
              strokeWidth="1"
              style={{ transition: `stroke .5s ease ${i * 0.1}s` }}
            />
            {/* Text lines */}
            <rect x="14" y={doc.y + 6} width="40" height="4" rx="2"
              fill={phase >= 1 ? BL + "44" : "rgba(255,255,255,0.10)"}
              style={{ transition: `fill .5s ease ${i * 0.1}s` }}
            />
            <rect x="14" y={doc.y + 13} width="32" height="3" rx="1.5"
              fill={phase >= 1 ? BL + "28" : "rgba(255,255,255,0.06)"}
              style={{ transition: `fill .5s ease ${i * 0.1 + 0.05}s` }}
            />
            <rect x="14" y={doc.y + 19} width="44" height="3" rx="1.5"
              fill={phase >= 1 ? BL + "1a" : "rgba(255,255,255,0.04)"}
              style={{ transition: `fill .5s ease ${i * 0.1 + 0.1}s` }}
            />
          </g>
        ))}

        {/* Arrow left → center */}
        <path d="M 78 90 L 116 90" fill="none"
          stroke={phase >= 1 ? B : "rgba(255,255,255,0.12)"}
          strokeWidth="1.5"
          strokeDasharray="40"
          strokeDashoffset={phase >= 1 ? 0 : 40}
          markerEnd="url(#arrow-ai)"
          style={{ transition: "stroke-dashoffset .5s ease, stroke .4s ease" }}
        />

        {/* Arrow center → right */}
        <path d="M 204 90 L 238 90" fill="none"
          stroke={phase === 2 ? G : phase >= 1 ? B : "rgba(255,255,255,0.12)"}
          strokeWidth="1.5"
          strokeDasharray="36"
          strokeDashoffset={phase === 2 ? 0 : 36}
          markerEnd="url(#arrow-ai-out)"
          style={{ transition: "stroke-dashoffset .5s ease .2s, stroke .4s ease" }}
        />

        {/* Arrow markers */}
        <defs>
          <marker id="arrow-ai" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill={phase >= 1 ? B : "rgba(255,255,255,0.12)"} />
          </marker>
          <marker id="arrow-ai-out" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill={phase === 2 ? G : phase >= 1 ? B : "rgba(255,255,255,0.12)"} />
          </marker>
        </defs>

        {/* ── CENTER HEXAGON (cx=160, cy=90) ── */}
        {/* Pulse ring — phase 1 */}
        <circle cx="160" cy="90" r="42"
          fill="none"
          stroke={B}
          strokeWidth="1"
          strokeOpacity={phase === 1 ? 0.3 : 0}
          style={{ transition: "stroke-opacity .4s ease" }}
        >
          {phase === 1 && (
            <animate attributeName="r" values="34;48;34" dur="1.6s" repeatCount="indefinite" />
          )}
          {phase === 1 && (
            <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur="1.6s" repeatCount="indefinite" />
          )}
        </circle>

        <polygon
          points={hex(160, 90, 28)}
          fill={phase >= 1 ? B + "20" : "rgba(255,255,255,0.04)"}
          stroke={phase >= 1 ? B : "rgba(255,255,255,0.15)"}
          strokeWidth="1.5"
          style={{ transition: "fill .5s ease, stroke .5s ease" }}
        />
        <text x="160" y="87" textAnchor="middle" fontSize="11" fontWeight="700"
          fontFamily="Inter, sans-serif"
          fill={phase >= 1 ? BL : "rgba(255,255,255,0.35)"}
          style={{ transition: "fill .5s ease" }}>
          AI
        </text>
        <text x="160" y="99" textAnchor="middle" fontSize="7"
          fontFamily="Inter, sans-serif"
          fill={phase >= 1 ? BL + "88" : "rgba(255,255,255,0.20)"}
          style={{ transition: "fill .5s ease" }}>
          {phase === 1 ? "processing" : phase === 2 ? "complete" : "idle"}
        </text>

        {/* Particles left → center — phase 1 */}
        {phase === 1 && [0, 1, 2].map((i) => (
          <circle key={i} r="3" fill={BL}>
            <animateMotion dur="1.2s" begin={`${i * 0.4}s`} repeatCount="indefinite"
              path="M 78 90 L 132 90" />
            <animate attributeName="opacity" values="0;1;1;0" dur="1.2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* ── OUTPUT ITEMS (right, x~280) ── */}
        {outputItems.map((item, i) => (
          <g key={i} style={{
            opacity: phase === 2 ? 1 : 0,
            transition: `opacity .4s ease ${i * 0.15 + 0.2}s`,
          }}>
            <rect x="244" y={item.y} width="68" height="26" rx="6"
              fill={G + "12"}
              stroke={G + "50"}
              strokeWidth="1"
            />
            {/* Checkmark */}
            <circle cx="257" cy={item.y + 13} r="7"
              fill={G + "25"}
              stroke={G}
              strokeWidth="1"
            />
            <path d={`M ${253} ${item.y + 13} L ${256} ${item.y + 16} L ${261} ${item.y + 10}`}
              fill="none" stroke={GL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Label */}
            <text x="268" y={item.y + 10} fontSize="7" fontWeight="600"
              fontFamily="Inter, sans-serif" fill={BL + "bb"}>
              {item.label}
            </text>
          </g>
        ))}

        {/* "3.5h saved/day" label — phase 2 */}
        <g style={{ opacity: phase === 2 ? 1 : 0, transition: "opacity .5s ease .5s" }}>
          <rect x="214" y="136" width="100" height="20" rx="10"
            fill={G + "18"}
            stroke={G + "50"}
            strokeWidth="1"
          />
          <text x="264" y="149" textAnchor="middle" fontSize="8.5" fontWeight="700"
            fontFamily="Inter, sans-serif" fill={GL}>
            3.5h saved/day
          </text>
        </g>
      </svg>

      <div style={{ marginTop: 6 }}>
        <PhaseBar phase={phase} labels={["Ready", "Processing", "Done"]} />
      </div>
    </div>
  );
}

/* ─────────────────────────── Process Automation ─────────────────────── */
/* n8n dark canvas: Idle → Wiring Up → Running (6-node branching workflow) */
export function AutomationAnim({ active }: { active: boolean }) {
  const phase = usePhase(active, 1400, 1000, 1700);

  const built   = phase >= 1;
  const running = phase === 2;

  const NW = 108; // node width
  const NH = 44;  // node height

  // 6-node branching layout:
  //   [Webhook] → [IF/Else] → [AI Enrich] → [HubSpot]
  //                        ↘  [Slack]     → [Dashboard]
  const nodes = [
    { id: "webhook",   x: 4,   y: 88,  label: "Webhook",      sub: "Trigger",    color: "#E8504A", icon: "bolt"    },
    { id: "ifelse",    x: 134, y: 88,  label: "IF Condition",  sub: "Logic",      color: B,         icon: "fork"    },
    { id: "enrich",    x: 264, y: 26,  label: "AI Enrich",     sub: "Process",    color: "#A78BFA", icon: "sparkle" },
    { id: "hubspot",   x: 392, y: 16,  label: "HubSpot",       sub: "Update CRM", color: "#FF7A59", icon: "crm"     },
    { id: "slack",     x: 264, y: 150, label: "Slack",         sub: "Notify",     color: "#7B5EA7", icon: "bell"    },
    { id: "dashboard", x: 392, y: 150, label: "Dashboard",     sub: "Log Result", color: G,         icon: "chart"   },
  ];

  const cy = (n: typeof nodes[0]) => n.y + NH / 2;
  const rx = (n: typeof nodes[0]) => n.x + NW;

  const [wh, ife, en, hs, sl, db] = nodes;

  const conns = [
    { id: "w-if",  d: `M ${rx(wh)}  ${cy(wh)}  C ${rx(wh)  + 11} ${cy(wh)}  ${ife.x - 11} ${cy(ife)} ${ife.x} ${cy(ife)}`, len: 25,  delay: 0    },
    { id: "if-en", d: `M ${rx(ife)} ${cy(ife)} C ${rx(ife) + 14} ${cy(ife)} ${en.x  - 14} ${cy(en)}  ${en.x}  ${cy(en)}`,  len: 100, delay: 0.10 },
    { id: "if-sl", d: `M ${rx(ife)} ${cy(ife)} C ${rx(ife) + 14} ${cy(ife)} ${sl.x  - 14} ${cy(sl)}  ${sl.x}  ${cy(sl)}`,  len: 100, delay: 0.16 },
    { id: "en-hs", d: `M ${rx(en)}  ${cy(en)}  C ${rx(en)  + 10} ${cy(en)}  ${hs.x  - 10} ${cy(hs)}  ${hs.x}  ${cy(hs)}`,  len: 25,  delay: 0.23 },
    { id: "sl-db", d: `M ${rx(sl)}  ${cy(sl)}  C ${rx(sl)  + 10} ${cy(sl)}  ${db.x  - 10} ${cy(db)}  ${db.x}  ${cy(db)}`,  len: 25,  delay: 0.29 },
  ];

  return (
    <div style={{ width: "100%", maxWidth: 560 }}>
      {/* Dark n8n canvas — site primary blue with muted-blue dot grid */}
      <div style={{
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid rgba(80,120,255,0.20)",
        background: "var(--why-bg)",
        backgroundImage: "radial-gradient(circle, rgba(80,120,255,0.16) 1px, transparent 1px)",
        backgroundSize: "14px 14px",
        padding: "14px 8px 16px",
      }}>
        <svg viewBox="0 0 510 218" style={{ width: "100%", display: "block" }}>

          {/* ── Bezier connections ── */}
          {conns.map((c) => (
            <g key={c.id}>
              {/* Track */}
              <path d={c.d} fill="none"
                stroke="rgba(255,255,255,0.06)" strokeWidth="2" strokeLinecap="round" />
              {/* Animated draw */}
              <path d={c.d} fill="none"
                stroke={running ? G : B}
                strokeWidth="2" strokeLinecap="round"
                strokeDasharray={c.len}
                strokeDashoffset={built ? 0 : c.len}
                style={{ transition: `stroke-dashoffset .42s ease ${c.delay}s, stroke .3s ease` }}
              />
            </g>
          ))}

          {/* ── Flowing data dots — phase 2 ── */}
          {running && conns.map((c, i) => (
            <circle key={c.id + "d"} r="3.5" fill={GL} opacity="0.9">
              <animateMotion
                dur={`${0.75 + i * 0.08}s`}
                begin={`${i * 0.22}s`}
                repeatCount="indefinite"
                path={c.d}
              />
              <animate attributeName="opacity"
                values="0;1;1;0" keyTimes="0;0.08;0.88;1"
                dur={`${0.75 + i * 0.08}s`}
                begin={`${i * 0.22}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          {/* ── Nodes ── */}
          {nodes.map((n, i) => {
            const icx = n.x + 16;
            const icy = n.y + NH / 2;
            const rhx = n.x + NW;
            const hcy = n.y + NH / 2;

            return (
              <g key={n.id}>

                {/* Dark-glass card */}
                <rect x={n.x} y={n.y} width={NW} height={NH} rx="9"
                  fill={built ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)"}
                  stroke={built ? n.color + "55" : "rgba(255,255,255,0.08)"}
                  strokeWidth="1.5"
                  style={{ transition: `fill .35s ease ${i * 0.07}s, stroke .35s ease ${i * 0.07}s` }}
                />

                {/* Icon strip — rounded-left, square-right */}
                <rect x={n.x} y={n.y} width={32} height={NH} rx="9"
                  fill={built ? n.color + "22" : "rgba(255,255,255,0.04)"}
                  style={{ transition: `fill .35s ease ${i * 0.07}s` }}
                />
                <rect x={n.x + 22} y={n.y} width={10} height={NH}
                  fill={built ? n.color + "22" : "rgba(255,255,255,0.04)"}
                  style={{ transition: `fill .35s ease ${i * 0.07}s` }}
                />
                <line x1={n.x + 32} y1={n.y + 7} x2={n.x + 32} y2={n.y + NH - 7}
                  stroke={built ? n.color + "35" : "rgba(255,255,255,0.07)"}
                  strokeWidth="1"
                  style={{ transition: `stroke .35s ease ${i * 0.07}s` }}
                />

                {/* ── Icons ── */}
                {n.icon === "bolt" && (
                  <path
                    d={`M ${icx+3} ${icy-8} L ${icx-3} ${icy+1} L ${icx+1} ${icy+1} L ${icx-2} ${icy+8} L ${icx+5} ${icy-1} L ${icx} ${icy-1} Z`}
                    fill={built ? n.color : "rgba(255,255,255,0.18)"}
                    style={{ transition: `fill .35s ease ${i * 0.07}s` }}
                  />
                )}
                {n.icon === "fork" && (
                  <g stroke={built ? n.color : "rgba(255,255,255,0.18)"} strokeWidth="1.8"
                    fill="none" strokeLinecap="round"
                    style={{ transition: `stroke .35s ease ${i * 0.07}s` }}>
                    <line x1={icx - 5} y1={icy} x2={icx} y2={icy} />
                    <line x1={icx} y1={icy} x2={icx + 5} y2={icy - 5} />
                    <line x1={icx} y1={icy} x2={icx + 5} y2={icy + 5} />
                  </g>
                )}
                {n.icon === "sparkle" && (
                  <g stroke={built ? n.color : "rgba(255,255,255,0.18)"} strokeWidth="1.6"
                    fill="none" strokeLinecap="round"
                    style={{ transition: `stroke .35s ease ${i * 0.07}s` }}>
                    <line x1={icx} y1={icy - 8} x2={icx} y2={icy + 8} />
                    <line x1={icx - 8} y1={icy} x2={icx + 8} y2={icy} />
                    <line x1={icx - 5.5} y1={icy - 5.5} x2={icx + 5.5} y2={icy + 5.5} />
                    <line x1={icx + 5.5} y1={icy - 5.5} x2={icx - 5.5} y2={icy + 5.5} />
                  </g>
                )}
                {n.icon === "crm" && (
                  <>
                    <circle cx={icx} cy={icy} r="7.5"
                      fill={built ? n.color + "25" : "rgba(255,255,255,0.05)"}
                      style={{ transition: `fill .35s ease ${i * 0.07}s` }}
                    />
                    <text x={icx} y={icy + 3.5} textAnchor="middle"
                      fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif"
                      fill={built ? n.color : "rgba(255,255,255,0.18)"}
                      style={{ transition: `fill .35s ease ${i * 0.07}s` }}>
                      H
                    </text>
                  </>
                )}
                {n.icon === "bell" && (
                  <g fill={built ? n.color : "rgba(255,255,255,0.18)"}
                    style={{ transition: `fill .35s ease ${i * 0.07}s` }}>
                    <path d={`M ${icx} ${icy-8} C ${icx-6} ${icy-8} ${icx-6} ${icy+2} ${icx-6} ${icy+2} L ${icx+6} ${icy+2} C ${icx+6} ${icy+2} ${icx+6} ${icy-8} ${icx} ${icy-8} Z`} />
                    <rect x={icx - 2} y={icy + 2} width={4} height={2.5} rx="1" />
                    <rect x={icx - 1.2} y={icy + 4.5} width={2.4} height={2} rx="1" />
                  </g>
                )}
                {n.icon === "chart" && (
                  <g fill={built ? n.color : "rgba(255,255,255,0.18)"}
                    style={{ transition: `fill .35s ease ${i * 0.07}s` }}>
                    <rect x={icx - 7} y={icy + 1} width={4} height={6} rx="1" />
                    <rect x={icx - 1.5} y={icy - 3} width={4} height={10} rx="1" />
                    <rect x={icx + 4} y={icy - 7} width={4} height={14} rx="1" />
                  </g>
                )}

                {/* Node name */}
                <text x={n.x + 38} y={n.y + 17} fontSize="8" fontWeight="600"
                  fontFamily="Inter, sans-serif"
                  fill={built ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.22)"}
                  style={{ transition: `fill .35s ease ${i * 0.07}s` }}>
                  {n.label}
                </text>
                {/* Sub label */}
                <text x={n.x + 38} y={n.y + 30} fontSize="7" fontWeight="500"
                  fontFamily="Inter, sans-serif"
                  fill={built ? n.color : "rgba(255,255,255,0.18)"}
                  style={{ transition: `fill .35s ease ${i * 0.07}s` }}>
                  {n.sub}
                </text>

                {/* Connection handles */}
                <circle cx={n.x} cy={hcy} r="3.5"
                  stroke={built ? n.color : "rgba(255,255,255,0.16)"} strokeWidth="1.5"
                  style={{ fill: "var(--why-bg)", transition: `stroke .35s ease ${i * 0.07}s` }}
                />
                <circle cx={rhx} cy={hcy} r="3.5"
                  stroke={built ? n.color : "rgba(255,255,255,0.16)"} strokeWidth="1.5"
                  style={{ fill: "var(--why-bg)", transition: `stroke .35s ease ${i * 0.07}s` }}
                />

                {/* Execution badge — running */}
                <g style={{ opacity: running ? 1 : 0, transition: `opacity .3s ease ${i * 0.08}s` }}>
                  <rect x={rhx - 10} y={n.y - 14} width="20" height="13" rx="6.5" fill={G} />
                  <text x={rhx} y={n.y - 5} textAnchor="middle" fontSize="8" fontWeight="700"
                    fontFamily="Inter, sans-serif" fill="white">✓</text>
                </g>

              </g>
            );
          })}

          {/* ── "Saving 6h / week" badge — phase 2 ── */}
          <g style={{ opacity: running ? 1 : 0, transition: "opacity .45s ease .35s" }}>
            <rect x="155" y="200" width="200" height="18" rx="9"
              fill={G + "20"} stroke={G + "50"} strokeWidth="1" />
            <text x="255" y="212" textAnchor="middle" fontSize="8.5" fontWeight="700"
              fontFamily="Inter, sans-serif" fill={GL}>
              Saving 6h / week · 0 errors
            </text>
          </g>

        </svg>
      </div>

      <div style={{ marginTop: 8 }}>
        <PhaseBar phase={phase} labels={["Idle", "Wiring Up", "Running"]} />
      </div>
    </div>
  );
}

/* ─────────────────────────── Meta & Google Ads ──────────────────────── */
/* Conversion funnel: Empty → Filling → Converting                          */
export function AdsAnim({ active }: { active: boolean }) {
  const phase = usePhase(active, 1400, 1600, 1800);

  const filled     = phase >= 1;
  const converting = phase === 2;

  // Funnel geometry
  const cx     = 118;  // horizontal centre
  const startY = 14;
  const tierH  = 35;

  // Each tier: top width, colour. Bottom width = next tier's top width.
  const tiers = [
    { label: "Traffic",   count: "10k",  w: 196, color: "oklch(0.54 0.24 263)" },
    { label: "Clicks",    count: "2.1k", w: 152, color: "oklch(0.52 0.22 247)" },
    { label: "Leads",     count: "340",  w: 108, color: "oklch(0.54 0.20 225)" },
    { label: "Qualified", count: "89",   w:  72, color: "oklch(0.55 0.20 198)" },
    { label: "Customers", count: "23",   w:  48, color: "oklch(0.57 0.20 152)" },
  ];

  const funnelBottom = startY + tiers.length * tierH; // 14 + 175 = 189
  const countX = 240; // fixed right column for all count labels

  return (
    <div style={{ width: "100%", maxWidth: 252 }}>
      <svg viewBox="0 0 252 234" style={{ width: "100%", display: "block" }}>

        {/* ── Trapezoid tiers (connected, no gap) ── */}
        {tiers.map((tier, i) => {
          const topW = tier.w;
          const botW = i < tiers.length - 1 ? tiers[i + 1].w : tier.w;
          const y    = startY + i * tierH;
          const midy = y + tierH / 2;

          // Trapezoid corners
          const tlx = cx - topW / 2;
          const trx = cx + topW / 2;
          const blx = cx - botW / 2;
          const brx = cx + botW / 2;

          const points  = `${tlx},${y} ${trx},${y} ${brx},${y + tierH} ${blx},${y + tierH}`;
          const delay   = i * 0.11;
          const lblSize = topW < 58 ? 7 : topW < 85 ? 8 : 9;

          return (
            <g key={tier.label}>

              {/* Filled trapezoid */}
              <polygon points={points}
                fill={filled ? tier.color : "rgba(255,255,255,0.04)"}
                style={{ transition: `fill .4s ease ${delay}s` }}
              />

              {/* Tier divider (separates adjacent tiers cleanly) */}
              {i > 0 && (
                <line x1={tlx} y1={y} x2={trx} y2={y}
                  stroke="rgba(0,0,0,0.18)" strokeWidth="0.75"
                />
              )}

              {/* Label — centred in trapezoid, single element */}
              <text x={cx} y={midy + 3.5} textAnchor="middle"
                fontSize={lblSize} fontWeight="600" fontFamily="Inter, sans-serif"
                fill={filled ? "rgba(255,255,255,0.93)" : "rgba(255,255,255,0.14)"}
                style={{ transition: `fill .4s ease ${delay}s` }}>
                {tier.label}
              </text>

              {/* Faint tick from tier right-edge to count column */}
              <line
                x1={trx + 2} y1={midy}
                x2={countX - 26} y2={midy}
                stroke={filled ? tier.color + "40" : "rgba(255,255,255,0.05)"}
                strokeWidth="0.75"
                strokeDasharray="2 3"
                style={{ transition: `stroke .4s ease ${delay}s` }}
              />

              {/* Count — fixed right column */}
              <text x={countX} y={midy + 3.5} textAnchor="end"
                fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif"
                fill={filled ? tier.color : "rgba(255,255,255,0.12)"}
                style={{ transition: `fill .4s ease ${delay}s` }}>
                {tier.count}
              </text>

            </g>
          );
        })}

        {/* Outer funnel border — always visible, faint */}
        <path
          d={`M ${cx - tiers[0].w / 2} ${startY} L ${cx + tiers[0].w / 2} ${startY} L ${cx + tiers[tiers.length - 1].w / 2} ${funnelBottom} L ${cx - tiers[tiers.length - 1].w / 2} ${funnelBottom} Z`}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />

        {/* ── Connector from funnel bottom to ROAS badge ── */}
        <line
          x1={cx} y1={funnelBottom}
          x2={cx} y2={funnelBottom + 14}
          stroke={converting ? G : "rgba(255,255,255,0.06)"}
          strokeWidth="1.5"
          strokeDasharray="3 2"
          style={{ transition: "stroke .35s ease .1s" }}
        />

        {/* ── ROAS badge — anchored below funnel ── */}
        <g style={{ opacity: converting ? 1 : 0, transition: "opacity .4s ease .2s" }}>
          <rect
            x={cx - 58} y={funnelBottom + 14}
            width="116" height="28"
            rx="14"
            fill={G + "1C"} stroke={G + "55"} strokeWidth="1"
          />
          {/* Green pulse dot */}
          <circle cx={cx - 34} cy={funnelBottom + 28} r="4" fill={G} />
          {/* Label */}
          <text
            x={cx + 12} y={funnelBottom + 32}
            textAnchor="middle"
            fontSize="10.5" fontWeight="700"
            fontFamily="Inter, sans-serif"
            fill={GL}>
            ROAS 4.2×
          </text>
        </g>

      </svg>

      <div style={{ marginTop: 6 }}>
        <PhaseBar phase={phase} labels={["Empty funnel", "Filling", "Converting"]} />
      </div>
    </div>
  );
}

/* ─────────────────────────── GTM Engineering ────────────────────────── */
/* Hub-and-spoke: Workflow center + 6 tool nodes                           */
export function GTMAnim({ active }: { active: boolean }) {
  const phase = usePhase(active, 1800, 2200, 3000);

  const outerNodes = [
    { label: "Clay",      cx: 150, cy: 22  },
    { label: "Apollo",    cx: 258, cy: 61  },
    { label: "Instantly", cx: 258, cy: 139 },
    { label: "Lemlist",   cx: 150, cy: 178 },
    { label: "HubSpot",   cx: 42,  cy: 139 },
    { label: "LinkedIn",  cx: 42,  cy: 61  },
  ];

  const centerX = 150;
  const centerY = 100;

  const spokeLen = (n: typeof outerNodes[0]) => {
    const dx = n.cx - centerX;
    const dy = n.cy - centerY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <div style={{ width: "100%", maxWidth: 300 }}>
      <svg viewBox="0 0 300 200" style={{ width: "100%", display: "block", overflow: "visible" }}>
        {/* Spokes */}
        {outerNodes.map((n, i) => {
          const len = spokeLen(n);
          return (
            <line key={i}
              x1={centerX} y1={centerY}
              x2={n.cx} y2={n.cy}
              stroke={phase === 2 ? G : B}
              strokeWidth="1.3"
              strokeDasharray={len}
              strokeDashoffset={phase >= 1 ? 0 : len}
              strokeOpacity={phase >= 1 ? 0.45 : 0}
              style={{
                transition: `stroke-dashoffset .55s ease ${i * 0.1}s, stroke-opacity .5s ease ${i * 0.1}s, stroke .4s ease`,
              }}
            />
          );
        })}

        {/* Data dots — phase 2, bidirectional */}
        {phase === 2 && outerNodes.map((n, i) => (
          <g key={i}>
            {/* Center → tool */}
            <circle r="3" fill={BL}>
              <animateMotion dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite"
                path={`M ${centerX} ${centerY} L ${n.cx} ${n.cy}`} />
              <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
            {/* Tool → center */}
            <circle r="3" fill={GL}>
              <animateMotion dur="2s" begin={`${i * 0.5 + 1}s`} repeatCount="indefinite"
                path={`M ${n.cx} ${n.cy} L ${centerX} ${centerY}`} />
              <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin={`${i * 0.5 + 1}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {/* Outer nodes */}
        {outerNodes.map((n, i) => (
          <g key={n.label}>
            <circle cx={n.cx} cy={n.cy} r="18"
              fill={phase >= 1 ? B + "18" : "rgba(255,255,255,0.04)"}
              stroke={phase >= 1 ? B : "rgba(255,255,255,0.15)"}
              strokeWidth="1.2"
              style={{ transition: `all .5s ease ${i * 0.1}s` }}
            />
            <text x={n.cx} y={n.cy + 3.5} textAnchor="middle" fontSize="7.5"
              fontFamily="Inter, sans-serif" fontWeight="600"
              fill={phase >= 1 ? BL : "rgba(255,255,255,0.28)"}
              style={{ transition: `fill .5s ease ${i * 0.1}s` }}>
              {n.label}
            </text>
          </g>
        ))}

        {/* Center node */}
        <circle cx={centerX} cy={centerY} r="28"
          fill={phase >= 1 ? B + "22" : "rgba(255,255,255,0.04)"}
          stroke={phase >= 1 ? B : "rgba(255,255,255,0.12)"}
          strokeWidth="1.5"
          style={{ transition: "all .5s ease" }}
        />
        {/* Center pulse ring — phase 1 */}
        {phase === 1 && (
          <circle cx={centerX} cy={centerY} r="28" fill="none"
            stroke={B} strokeWidth="1" strokeOpacity="0.3">
            <animate attributeName="r" values="28;40;28" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur="1.8s" repeatCount="indefinite" />
          </circle>
        )}
        <text x={centerX} y={centerY - 3} textAnchor="middle" fontSize="9" fontWeight="700"
          fontFamily="Inter, sans-serif"
          fill={phase >= 1 ? BL : "rgba(255,255,255,0.28)"}
          style={{ transition: "fill .5s ease" }}>
          Workflow
        </text>
        <text x={centerX} y={centerY + 9} textAnchor="middle" fontSize="7"
          fontFamily="Inter, sans-serif"
          fill={phase === 2 ? GL + "bb" : phase >= 1 ? BL + "66" : "rgba(255,255,255,0.15)"}
          style={{ transition: "fill .5s ease" }}>
          {phase === 2 ? "running" : phase === 1 ? "wiring" : "idle"}
        </text>

        {/* "23 meetings/mo" — phase 2 */}
        <g style={{ opacity: phase === 2 ? 1 : 0, transition: "opacity .5s ease .4s" }}>
          <rect x="90" y="166" width="120" height="20" rx="10"
            fill={G + "18"}
            stroke={G + "55"}
            strokeWidth="1"
          />
          <text x="150" y="179" textAnchor="middle" fontSize="8.5" fontWeight="700"
            fontFamily="Inter, sans-serif" fill={GL}>
            23 meetings/mo
          </text>
        </g>
      </svg>

      <div style={{ marginTop: 6 }}>
        <PhaseBar phase={phase} labels={["Idle", "Wiring", "Running"]} />
      </div>
    </div>
  );
}
