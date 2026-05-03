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

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <svg viewBox="0 0 320 210" style={{ width: "100%", display: "block" }}>
        {/* Browser chrome */}
        <rect x="0" y="0" width="320" height="210" rx="12"
          fill={built ? "oklch(0.18 0.04 260)" : "oklch(0.14 0.02 260)"}
          style={{ transition: "fill .6s ease" }}
        />

        {/* Title bar */}
        <rect x="0" y="0" width="320" height="28" rx="0"
          fill={built ? "oklch(0.22 0.06 260)" : "oklch(0.17 0.02 260)"}
          style={{ transition: "fill .6s ease" }}
        />
        <rect x="0" y="0" width="320" height="12" rx="0" fill="none" />
        {/* Top rounded corners of title bar */}
        <rect x="0" y="0" width="320" height="28" rx="12" fill="none" />

        {/* Traffic lights */}
        <circle cx="16" cy="14" r="4.5"
          fill={built ? "oklch(0.65 0.22 25)" : "rgba(255,255,255,0.10)"}
          style={{ transition: "fill .5s ease" }}
        />
        <circle cx="29" cy="14" r="4.5"
          fill={built ? "oklch(0.68 0.22 80)" : "rgba(255,255,255,0.10)"}
          style={{ transition: "fill .5s ease" }}
        />
        <circle cx="42" cy="14" r="4.5"
          fill={built ? "oklch(0.68 0.22 140)" : "rgba(255,255,255,0.10)"}
          style={{ transition: "fill .5s ease" }}
        />

        {/* URL bar */}
        <rect x="58" y="7" width="160" height="14" rx="7"
          fill={built ? "oklch(0.26 0.06 260)" : "rgba(255,255,255,0.06)"}
          style={{ transition: "fill .5s ease" }}
        />
        {/* URL text — phase 2 */}
        <text x="138" y="17" textAnchor="middle" fontSize="7.5"
          fill={live ? "rgba(255,255,255,0.75)" : "transparent"}
          fontFamily="monospace"
          style={{ transition: "fill .5s ease .2s" }}>
          yourclient.com
        </text>

        {/* LIVE badge */}
        <rect x="232" y="7" width="36" height="14" rx="7"
          fill={live ? "oklch(0.62 0.20 150 / 0.25)" : "transparent"}
          stroke={live ? GL : "transparent"}
          strokeWidth="0.8"
          style={{ transition: "all .4s ease .3s" }}
        />
        <circle cx="240" cy="14" r="3"
          fill={live ? G : "transparent"}
          style={{ transition: "fill .4s ease .35s" }}
        />
        <text x="252" y="17.5" textAnchor="middle" fontSize="6.5" fontWeight="700"
          fontFamily="Inter, sans-serif"
          fill={live ? GL : "transparent"}
          style={{ transition: "fill .4s ease .35s" }}>
          LIVE
        </text>

        {/* Page area background */}
        <rect x="0" y="28" width="320" height="182" rx="0"
          fill={built ? "oklch(0.16 0.04 260)" : "oklch(0.13 0.01 260)"}
          style={{ transition: "fill .6s ease" }}
        />

        {/* ── NAV BAR ── */}
        <rect x="0" y="28" width="320" height="26"
          fill={built ? B + "1a" : "rgba(255,255,255,0.03)"}
          style={{ transition: "fill .5s ease" }}
        />
        {/* Logo box */}
        <rect x="12" y="34" width="28" height="14" rx="4"
          fill={built ? B + "55" : "rgba(255,255,255,0.06)"}
          style={{ transition: "fill .5s ease" }}
        />
        <text x="26" y="43.5" textAnchor="middle" fontSize="6" fontWeight="700"
          fontFamily="Inter, sans-serif"
          fill={built ? BL : "transparent"}
          style={{ transition: "fill .5s ease" }}>
          LOGO
        </text>
        {/* Nav links */}
        {[200, 225, 250].map((x, i) => (
          <rect key={i} x={x} y="37" width="20" height="5" rx="2.5"
            fill={built ? BL + "33" : "rgba(255,255,255,0.06)"}
            style={{ transition: `fill .5s ease ${i * 0.07}s` }}
          />
        ))}
        {/* CTA button in nav */}
        <rect x="278" y="33" width="30" height="14" rx="7"
          fill={built ? B : "rgba(255,255,255,0.05)"}
          style={{ transition: "fill .5s ease" }}
        />

        {/* ── HERO BANNER ── */}
        <rect x="0" y="54" width="320" height="72"
          fill={built ? B + "0d" : "rgba(255,255,255,0.015)"}
          style={{ transition: "fill .5s ease" }}
        />
        {/* Headline bars */}
        <rect x="20" y="66" width="160" height="10" rx="4"
          fill={built ? "rgba(255,255,255,0.42)" : "rgba(255,255,255,0.08)"}
          style={{ transition: "fill .5s ease" }}
        />
        <rect x="20" y="80" width="120" height="7" rx="3"
          fill={built ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.05)"}
          style={{ transition: "fill .5s ease" }}
        />
        {/* Hero CTA */}
        <rect x="20" y="94" width="64" height="20" rx="10"
          fill={built ? B : "rgba(255,255,255,0.05)"}
          style={{ transition: "fill .5s ease" }}
        />
        <text x="52" y="107" textAnchor="middle" fontSize="7" fontWeight="600"
          fontFamily="Inter, sans-serif"
          fill={built ? "rgba(255,255,255,0.9)" : "transparent"}
          style={{ transition: "fill .5s ease" }}>
          Get started
        </text>

        {/* ── CONTENT BLOCKS ── */}
        {/* 3 content cards */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={12 + i * 100} y="138" width="88" height="52" rx="8"
              fill={built ? B + "0f" : "rgba(255,255,255,0.02)"}
              stroke={built ? B + "35" : "rgba(255,255,255,0.06)"}
              strokeWidth="1"
              style={{ transition: `all .5s ease ${i * 0.1}s` }}
            />
            <rect x={20 + i * 100} y="148" width="50" height="6" rx="3"
              fill={built ? BL + "44" : "rgba(255,255,255,0.06)"}
              style={{ transition: `fill .5s ease ${i * 0.1}s` }}
            />
            <rect x={20 + i * 100} y="158" width="68" height="4" rx="2"
              fill={built ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.04)"}
              style={{ transition: `fill .5s ease ${i * 0.1 + 0.05}s` }}
            />
            <rect x={20 + i * 100} y="165" width="56" height="4" rx="2"
              fill={built ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.03)"}
              style={{ transition: `fill .5s ease ${i * 0.1 + 0.1}s` }}
            />
          </g>
        ))}

        {/* Sidebar placeholder (right side) */}
        <rect x="228" y="138" width="80" height="52" rx="8"
          fill={built ? B + "0a" : "rgba(255,255,255,0.015)"}
          stroke={built ? B + "25" : "rgba(255,255,255,0.04)"}
          strokeWidth="1"
          style={{ transition: "all .5s ease .25s" }}
        />
        <rect x="238" y="148" width="44" height="5" rx="2"
          fill={built ? BL + "33" : "rgba(255,255,255,0.04)"}
          style={{ transition: "fill .5s ease .25s" }}
        />
        <rect x="238" y="157" width="56" height="3.5" rx="1.5"
          fill={built ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.03)"}
          style={{ transition: "fill .5s ease .3s" }}
        />
        <rect x="238" y="164" width="48" height="3.5" rx="1.5"
          fill={built ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.02)"}
          style={{ transition: "fill .5s ease .35s" }}
        />
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
  const phase = usePhase(active, 2000, 2200, 2800);

  // 6 nodes in hexagonal ring
  const nodes = [
    { label: "HubSpot",   cx: 150, cy: 24  },
    { label: "Website",   cx: 258, cy: 85  },
    { label: "Forms",     cx: 258, cy: 140 },
    { label: "Email",     cx: 150, cy: 178 },
    { label: "Analytics", cx: 42,  cy: 140 },
    { label: "Calendar",  cx: 42,  cy: 85  },
  ];

  // Adjacent connections (hex ring)
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  ];

  const pathD = (a: typeof nodes[0], b: typeof nodes[0]) =>
    `M ${a.cx} ${a.cy} L ${b.cx} ${b.cy}`;

  const lineDash = (a: typeof nodes[0], b: typeof nodes[0]) => {
    const dx = b.cx - a.cx;
    const dy = b.cy - a.cy;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <div style={{ width: "100%", maxWidth: 300 }}>
      <svg viewBox="0 0 300 200" style={{ width: "100%", display: "block", overflow: "visible" }}>
        {/* Connection lines */}
        {edges.map(([ai, bi], i) => {
          const a = nodes[ai];
          const b = nodes[bi];
          const len = lineDash(a, b);
          return (
            <line key={i}
              x1={a.cx} y1={a.cy} x2={b.cx} y2={b.cy}
              stroke={phase === 2 ? G : B}
              strokeWidth="1.5"
              strokeDasharray={len}
              strokeDashoffset={phase >= 1 ? 0 : len}
              strokeOpacity={phase >= 1 ? 0.5 : 0}
              style={{
                transition: `stroke-dashoffset .6s ease ${i * 0.12}s, stroke-opacity .5s ease ${i * 0.12}s, stroke .4s ease`,
              }}
            />
          );
        })}

        {/* Data dots — phase 2 */}
        {phase === 2 && edges.map(([ai, bi], i) => {
          const a = nodes[ai];
          const b = nodes[bi];
          return (
            <circle key={i} r="3.5" fill={BL}>
              <animateMotion
                dur="2.4s"
                begin={`${i * 0.4}s`}
                repeatCount="indefinite"
                path={pathD(a, b)}
              />
              <animate attributeName="opacity" values="0;1;1;0" dur="2.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            </circle>
          );
        })}

        {/* Nodes */}
        {nodes.map((n, i) => {
          const glowing = phase === 2;
          return (
            <g key={n.label}>
              {/* Glow ring — phase 2 */}
              <circle cx={n.cx} cy={n.cy} r="22"
                fill="none"
                stroke={glowing ? B : "transparent"}
                strokeWidth="1"
                strokeOpacity={glowing ? 0.35 : 0}
                style={{ transition: `stroke-opacity .5s ease ${i * 0.1}s` }}
              />
              <circle cx={n.cx} cy={n.cy} r="18"
                fill={glowing ? B + "18" : "rgba(255,255,255,0.05)"}
                stroke={glowing ? B : "rgba(255,255,255,0.18)"}
                strokeWidth="1.2"
                style={{ transition: `all .5s ease ${i * 0.1}s` }}
              />
              <text x={n.cx} y={n.cy + 3.5} textAnchor="middle" fontSize="7.5"
                fontFamily="Inter, sans-serif" fontWeight="600"
                fill={glowing ? BL : "rgba(255,255,255,0.38)"}
                style={{ transition: `fill .5s ease ${i * 0.1}s` }}>
                {n.label}
              </text>
              {/* Label below for longer names */}
              {n.label.length > 6 && (
                <text x={n.cx} y={n.cy + 3.5} textAnchor="middle" fontSize="6.5"
                  fontFamily="Inter, sans-serif" fontWeight="600"
                  fill={glowing ? BL : "rgba(255,255,255,0.38)"}
                  style={{ transition: `fill .5s ease ${i * 0.1}s` }}>
                  {n.label}
                </text>
              )}
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
/* Manual workflow → Transitioning → Automated                             */
export function AutomationAnim({ active }: { active: boolean }) {
  const phase = usePhase(active, 2200, 1600, 2800);

  const nodes = [
    { label: "New Lead", x: 20 },
    { label: "Assign",   x: 100 },
    { label: "Follow Up", x: 180 },
    { label: "Closed",   x: 260 },
  ];

  const connectors = [
    { x1: 58, x2: 100 },
    { x1: 138, x2: 180 },
    { x1: 218, x2: 260 },
  ];

  return (
    <div style={{ width: "100%", maxWidth: 320 }}>
      <svg viewBox="0 0 320 160" style={{ width: "100%", display: "block", overflow: "visible" }}>
        {/* Connector arrows */}
        {connectors.map((c, i) => (
          <g key={i}>
            <line
              x1={c.x1} y1="80" x2={c.x2} y2="80"
              stroke={phase === 2 ? G : phase === 1 ? B : "rgba(255,255,255,0.15)"}
              strokeWidth="1.5"
              strokeDasharray="42"
              strokeDashoffset={phase === 0 ? 42 : 0}
              style={{ transition: `stroke-dashoffset .5s ease ${i * 0.1}s, stroke .4s ease` }}
            />
            {/* Arrow head */}
            <polygon
              points={`${c.x2},80 ${c.x2 - 6},76 ${c.x2 - 6},84`}
              fill={phase === 2 ? G : phase === 1 ? B : "rgba(255,255,255,0.15)"}
              style={{ transition: `fill .4s ease ${i * 0.1}s` }}
            />
          </g>
        ))}

        {/* Data dots — phase 2 */}
        {phase === 2 && connectors.map((c, i) => (
          <circle key={i} r="3.5" fill={BL}>
            <animateMotion dur="1.8s" begin={`${i * 0.6}s`} repeatCount="indefinite"
              path={`M ${c.x1} 80 L ${c.x2} 80`} />
            <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => {
          const isAuto = phase === 2;
          const isTransition = phase === 1;
          const nodeColor = isAuto ? G : isTransition ? B : "oklch(0.65 0.18 50)";
          const nodeBg = isAuto ? G + "18" : isTransition ? B + "14" : "oklch(0.65 0.18 50 / 0.12)";

          return (
            <g key={n.label}>
              {/* Pulse ring — phase 1 */}
              {isTransition && (
                <circle cx={n.x + 19} cy="80" r="22" fill="none"
                  stroke={B} strokeWidth="1" strokeOpacity="0.3">
                  <animate attributeName="r" values="20;28;20" dur={`${1.2 + i * 0.2}s`} begin={`${i * 0.15}s`} repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur={`${1.2 + i * 0.2}s`} begin={`${i * 0.15}s`} repeatCount="indefinite" />
                </circle>
              )}

              <rect x={n.x} y="62" width="38" height="36" rx="10"
                fill={nodeBg}
                stroke={nodeColor}
                strokeWidth="1.2"
                style={{ transition: `all .5s ease ${i * 0.1}s` }}
              />

              {/* Icon — clock (manual) or lightning (auto) */}
              {!isAuto ? (
                // Clock icon
                <g style={{ transition: `opacity .4s ease ${i * 0.1}s` }}>
                  <circle cx={n.x + 19} cy="75" r="6"
                    fill="none" stroke={nodeColor} strokeWidth="1.2" strokeOpacity="0.7" />
                  <line x1={n.x + 19} y1="75" x2={n.x + 19} y2="71"
                    stroke={nodeColor} strokeWidth="1.2" strokeOpacity="0.7" />
                  <line x1={n.x + 19} y1="75" x2={n.x + 22} y2="75"
                    stroke={nodeColor} strokeWidth="1.2" strokeOpacity="0.7" />
                </g>
              ) : (
                // Lightning icon
                <g style={{ transition: `opacity .4s ease ${i * 0.1}s` }}>
                  <path
                    d={`M ${n.x + 21} 68 L ${n.x + 16} 76 L ${n.x + 20} 76 L ${n.x + 17} 83 L ${n.x + 24} 73 L ${n.x + 19} 73 Z`}
                    fill={GL} fillOpacity="0.9" stroke="none"
                  />
                </g>
              )}

              {/* Node label */}
              <text x={n.x + 19} y="104" textAnchor="middle" fontSize="7.5"
                fontFamily="Inter, sans-serif" fontWeight="600"
                fill={isAuto ? GL : isTransition ? BL : "oklch(0.70 0.15 50)"}
                style={{ transition: `fill .4s ease ${i * 0.1}s` }}>
                {n.label}
              </text>

              {/* Sublabel */}
              <text x={n.x + 19} y="113" textAnchor="middle" fontSize="6.5"
                fontFamily="Inter, sans-serif"
                fill={isAuto ? GL + "88" : "rgba(255,255,255,0.30)"}
                style={{ transition: `fill .4s ease ${i * 0.1}s` }}>
                {isAuto ? "auto" : "manual"}
              </text>
            </g>
          );
        })}

        {/* "Saving 6h/week" — phase 2 */}
        <g style={{ opacity: phase === 2 ? 1 : 0, transition: "opacity .5s ease .4s" }}>
          <rect x="100" y="130" width="120" height="20" rx="10"
            fill={G + "18"}
            stroke={G + "50"}
            strokeWidth="1"
          />
          <text x="160" y="143" textAnchor="middle" fontSize="8.5" fontWeight="700"
            fontFamily="Inter, sans-serif" fill={GL}>
            Saving 6h/week
          </text>
        </g>
      </svg>

      <div style={{ marginTop: 6 }}>
        <PhaseBar phase={phase} labels={["Manual", "Transitioning", "Automated"]} />
      </div>
    </div>
  );
}

/* ─────────────────────────── Meta & Google Ads ──────────────────────── */
/* Conversion funnel                                                         */
export function AdsAnim({ active }: { active: boolean }) {
  const phase = usePhase(active, 1800, 2400, 2200);

  const tiers = [
    { label: "Traffic",   count: "10k",  widthPct: 1.00 },
    { label: "Clicks",    count: "2.1k", widthPct: 0.75 },
    { label: "Leads",     count: "340",  widthPct: 0.52 },
    { label: "Qualified", count: "89",   widthPct: 0.34 },
    { label: "Customers", count: "23",   widthPct: 0.20 },
  ];

  const totalW = 200;
  const tierH  = 30;
  const startY = 16;
  const gap    = 4;

  return (
    <div style={{ width: "100%", maxWidth: 240 }}>
      <svg viewBox="0 0 240 260" style={{ width: "100%", display: "block", overflow: "visible" }}>
        {tiers.map((tier, i) => {
          const w = totalW * tier.widthPct;
          const x = (totalW - w) / 2 + 20;
          const y = startY + i * (tierH + gap);
          const filled = phase >= 1;
          const delay = i * 0.12;

          return (
            <g key={tier.label}>
              {/* Tier rect */}
              <rect x={x} y={y} width={w} height={tierH} rx="6"
                fill={filled ? `oklch(${0.52 + i * 0.03} 0.22 260 / 0.65)` : "rgba(255,255,255,0.05)"}
                stroke={filled ? B + "55" : "rgba(255,255,255,0.08)"}
                strokeWidth="1"
                style={{
                  transition: `fill .5s ease ${delay}s, stroke .5s ease ${delay}s`,
                }}
              />
              {/* Label inside */}
              <text x={x + w / 2} y={y + tierH / 2 + 1} textAnchor="middle" fontSize="9"
                fontWeight="600" fontFamily="Inter, sans-serif"
                fill={filled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.20)"}
                style={{ transition: `fill .5s ease ${delay}s` }}>
                {tier.label}
              </text>
              {/* Count beside */}
              <text x={x + w + 8} y={y + tierH / 2 + 1} fontSize="9"
                fontWeight="700" fontFamily="Inter, sans-serif"
                fill={filled ? BL : "rgba(255,255,255,0.15)"}
                style={{ transition: `fill .5s ease ${delay}s` }}>
                {tier.count}
              </text>
            </g>
          );
        })}

        {/* ROAS badge — phase 2 */}
        <g style={{ opacity: phase === 2 ? 1 : 0, transition: "opacity .5s ease .35s" }}>
          <rect x="60" y="194" width="120" height="24" rx="12"
            fill={G + "20"}
            stroke={G + "60"}
            strokeWidth="1"
          />
          <circle cx="80" cy="206" r="4" fill={G} />
          <text x="126" y="210" textAnchor="middle" fontSize="10" fontWeight="700"
            fontFamily="Inter, sans-serif" fill={GL}>
            ROAS 4.2x
          </text>
        </g>

        {/* Small upward chart — phase 2 */}
        <g style={{ opacity: phase === 2 ? 1 : 0, transition: "opacity .5s ease .5s" }}>
          <polyline
            points="70,240 90,232 110,225 130,218 150,210 170,204"
            fill="none"
            stroke={G}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="170" cy="204" r="3.5" fill={G} />
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
