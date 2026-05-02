import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { SectionHead } from "./SectionHead";

type Service = {
  title: string;
  desc: string;
  icon: ReactNode;
  tag: string;
  back: (active: boolean) => ReactNode;
};

const stroke = {
  fill: "none" as const, stroke: "currentColor", strokeWidth: 1.6,
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const B  = "oklch(0.62 0.22 260)";
const BL = "oklch(0.72 0.18 260)";
const G  = "oklch(0.62 0.20 150)";
const GL = "oklch(0.72 0.18 150)";

/* ── Phase cycling: 0 = before · 1 = process · 2 = result ───────────── */
function usePhase(active: boolean, d0 = 2200, d1 = 1800, d2 = 2400): number {
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
function PhaseBar({ phase, labels }: { phase: number; labels: [string, string, string] }) {
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

/* ── Phase panel container (fixed height, panels cross-fade) ─────────── */
function PhasePanel({ phase, target, children, style = {} }: {
  phase: number; target: number; children: ReactNode; style?: React.CSSProperties;
}) {
  return (
    <div style={{
      position: "absolute", inset: 0,
      opacity: phase === target ? 1 : 0,
      transition: "opacity .45s ease",
      pointerEvents: phase === target ? "auto" : "none",
      display: "flex", flexDirection: "column", justifyContent: "center",
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─────────────────────────── 1. Web Development ────────────────────── */
/* wireframe → building → live site                                       */
function WebDevBack({ active }: { active: boolean }) {
  const phase = usePhase(active, 2200, 1800, 2400);

  const built = phase >= 1;
  const live  = phase === 2;

  const barBg = (opWire: number, opBuilt: number) =>
    built
      ? `oklch(0.62 0.22 260 / ${opBuilt})`
      : `rgba(255,255,255,${opWire})`;

  return (
    <div style={{ width: "100%", maxWidth: 172, display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Mini browser */}
      <div style={{
        border: `1px solid ${live ? B + "60" : built ? B + "30" : "rgba(255,255,255,0.10)"}`,
        borderRadius: 10, overflow: "hidden",
        boxShadow: live ? `0 0 20px ${B}22` : "none",
        transition: "border-color .6s ease, box-shadow .6s ease",
      }}>
        {/* Chrome bar */}
        <div style={{
          background: built ? `${B}16` : "rgba(255,255,255,0.04)",
          padding: "5px 8px", display: "flex", alignItems: "center", gap: 4,
          borderBottom: `1px solid ${built ? B + "28" : "rgba(255,255,255,0.07)"}`,
          transition: "background .6s ease",
        }}>
          {[`${B}80`, `${B}50`, `${B}30`].map((c, i) => (
            <div key={i} style={{
              width: 6, height: 6, borderRadius: "50%",
              background: built ? c : "rgba(255,255,255,0.10)",
              transition: "background .5s ease",
            }} />
          ))}
          <div style={{
            flex: 1, height: 4, borderRadius: 3, margin: "0 4px",
            background: built ? `${B}18` : "rgba(255,255,255,0.05)",
            transition: "background .5s ease",
          }} />
          {/* Live badge */}
          <div style={{
            display: "flex", alignItems: "center", gap: 3,
            opacity: live ? 1 : 0, transition: "opacity .4s ease",
          }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: G, animation: live ? "live-pulse 1.2s ease infinite" : "none" }} />
            <span style={{ fontSize: 7, fontWeight: 700, color: GL, letterSpacing: ".05em" }}>LIVE</span>
          </div>
        </div>

        {/* Page area */}
        <div style={{ padding: 8, background: built ? `${B}05` : "rgba(255,255,255,0.02)", transition: "background .6s ease" }}>
          {/* Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 7 }}>
            <div style={{ width: 22, height: 6, borderRadius: 3, background: barBg(0.06, 0.5), transition: "background .5s ease" }} />
            <div style={{ flex: 1 }} />
            {[0, 1].map((i) => (
              <div key={i} style={{ width: 16, height: 5, borderRadius: 3, background: barBg(0.05, 0.22), transition: `background .5s ease ${i * .08}s` }} />
            ))}
            <div style={{ width: 28, height: 14, borderRadius: 6, background: live ? B : built ? `${B}50` : "rgba(255,255,255,0.06)", transition: "background .5s ease" }} />
          </div>

          {/* Hero */}
          <div style={{
            background: built ? `${B}10` : "rgba(255,255,255,0.03)",
            borderRadius: 6, padding: 7, marginBottom: 6, transition: "background .5s ease",
          }}>
            <div style={{ height: 9, width: "62%", borderRadius: 3, background: barBg(0.07, 0.42), marginBottom: 5, transition: "background .5s ease" }} />
            <div style={{ height: 5, width: "44%", borderRadius: 3, background: barBg(0.04, 0.20), marginBottom: 8, transition: "background .5s ease" }} />
            <div style={{
              display: "inline-flex", alignItems: "center", height: 14, padding: "0 8px", borderRadius: 6,
              background: live ? B : built ? `${B}38` : "rgba(255,255,255,0.05)",
              transition: "background .5s ease",
            }}>
              <span style={{ fontSize: 7, fontWeight: 700, color: BL, opacity: built ? 1 : 0, transition: "opacity .5s ease" }}>
                Get started →
              </span>
            </div>
          </div>

          {/* Content cards */}
          <div style={{ display: "flex", gap: 4 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{
                flex: 1, height: 26, borderRadius: 5,
                border: `1px solid ${built ? B + "35" : "rgba(255,255,255,0.07)"}`,
                background: built ? `${B}12` : "rgba(255,255,255,0.02)",
                transition: `all .5s ease ${i * .1}s`,
                display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 3,
              }}>
                <div style={{ width: "55%", height: 4, borderRadius: 2, background: barBg(0.06, 0.38), transition: "background .5s ease" }} />
                <div style={{ width: "75%", height: 3, borderRadius: 2, background: barBg(0.04, 0.18), transition: "background .5s ease" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <PhaseBar phase={phase} labels={["Wireframe", "Building", "Live"]} />
    </div>
  );
}

/* ─────────────────────────── 2. AI Integration ─────────────────────── */
/* raw support ticket → analysing → structured resolution                 */
function AIBack({ active }: { active: boolean }) {
  const phase = usePhase(active, 2000, 1800, 2400);

  return (
    <div style={{ width: "100%", maxWidth: 172, display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ position: "relative", height: 112 }}>
        {/* Phase 0 — raw ticket */}
        <PhasePanel phase={phase} target={0} style={{ gap: 6 }}>
          <div style={{ fontSize: 8, color: `${BL}55`, fontWeight: 600, letterSpacing: ".07em", textTransform: "uppercase", marginBottom: 2 }}>
            Support ticket
          </div>
          <div style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: 8, padding: "7px 10px",
          }}>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.50)", lineHeight: 1.65 }}>
              "My invoice is wrong. Charged twice and nobody is responding to my emails."
            </div>
          </div>
          <div style={{ display: "flex", gap: 4, marginTop: 2 }}>
            {["Billing", "Urgent", "Open"].map((t) => (
              <span key={t} style={{
                fontSize: 8, padding: "2px 6px", borderRadius: 4,
                background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.30)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}>{t}</span>
            ))}
          </div>
        </PhasePanel>

        {/* Phase 1 — processing */}
        <PhasePanel phase={phase} target={1} style={{ alignItems: "center", gap: 10 }}>
          <div style={{
            width: 26, height: 26, borderRadius: "50%",
            border: `2px solid ${B}35`, borderTopColor: B,
            animation: "spin-cw 0.75s linear infinite",
          }} />
          <div style={{ fontSize: 10, color: BL, fontWeight: 600 }}>Analysing...</div>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 5 }}>
            {[
              { label: "Category", pct: "72%" },
              { label: "Sentiment", pct: "88%" },
              { label: "Priority",  pct: "60%" },
            ].map(({ label, pct }, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ fontSize: 8, color: `${BL}60`, width: 46 }}>{label}</div>
                <div style={{ flex: 1, height: 4, borderRadius: 2, background: `${B}15` }}>
                  <div style={{
                    height: "100%", width: pct, borderRadius: 2, background: B,
                    animation: `card-bar-rise .55s ease ${i * .12}s both`,
                  }} />
                </div>
              </div>
            ))}
          </div>
        </PhasePanel>

        {/* Phase 2 — resolved */}
        <PhasePanel phase={phase} target={2} style={{ gap: 6 }}>
          <div style={{
            background: `${B}10`, border: `1px solid ${B}35`,
            borderRadius: 8, padding: "8px 10px",
          }}>
            {[
              { label: "Category", val: "Billing",      color: BL },
              { label: "Action",   val: "Auto-refund",  color: BL },
              { label: "Status",   val: "Resolved ✓",   color: GL },
            ].map(({ label, val, color }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.38)" }}>{label}</span>
                <span style={{ fontSize: 9, fontWeight: 700, color }}>{val}</span>
              </div>
            ))}
          </div>
          <div style={{
            textAlign: "center", fontSize: 9, fontWeight: 700, color: GL,
            background: `${G}10`, border: `1px solid ${G}30`,
            borderRadius: 6, padding: "4px 8px",
          }}>
            3.2 hrs saved per day
          </div>
        </PhasePanel>
      </div>
      <PhaseBar phase={phase} labels={["Raw input", "Analysing", "Resolved"]} />
    </div>
  );
}

/* ─────────────────────────── 3. Process Automation ─────────────────── */
/* manual tasks → automating → automated with time saved                  */
function AutomationBack({ active }: { active: boolean }) {
  const phase = usePhase(active, 2200, 1600, 2400);

  const tasks = [
    { label: "Email client",  icon: "✉" },
    { label: "Update CRM",    icon: "📋" },
    { label: "Send report",   icon: "📄" },
  ];

  return (
    <div style={{ width: "100%", maxWidth: 172, display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {tasks.map(({ label, icon }, i) => {
          const processing = phase === 1;
          const done       = phase === 2;
          return (
            <div key={label} style={{
              display: "flex", alignItems: "center", gap: 7, padding: "6px 8px", borderRadius: 7,
              border: `1px solid ${done ? G + "45" : processing ? B + "35" : "rgba(255,255,255,0.09)"}`,
              background: done ? `${G}07` : processing ? `${B}07` : "rgba(255,255,255,0.025)",
              transition: `all .5s ease ${i * .1}s`,
            }}>
              {/* Status ring */}
              <div style={{
                width: 15, height: 15, borderRadius: "50%", flexShrink: 0,
                border: `1.5px solid ${done ? G : processing ? B : "rgba(255,255,255,0.18)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: done ? `${G}18` : "transparent",
                transition: `all .4s ease ${i * .1}s`,
              }}>
                {done      && <span style={{ fontSize: 7, color: GL, lineHeight: 1 }}>✓</span>}
                {processing && <div style={{ width: 5, height: 5, borderRadius: "50%", background: B, animation: "live-pulse 1s ease infinite" }} />}
              </div>

              <span style={{
                fontSize: 10, flex: 1,
                color: done ? GL : processing ? BL : "rgba(255,255,255,0.42)",
                transition: `color .4s ease ${i * .1}s`,
              }}>{label}</span>

              {/* Badge */}
              {phase === 0 && (
                <span style={{ fontSize: 7, color: "rgba(255,255,255,0.22)", background: "rgba(255,255,255,0.05)", padding: "1px 5px", borderRadius: 3, border: "1px solid rgba(255,255,255,0.08)" }}>
                  manual
                </span>
              )}
              {done && (
                <span style={{ fontSize: 7, color: GL, background: `${G}14`, padding: "1px 5px", borderRadius: 3, border: `1px solid ${G}30`, animation: "card-fade-up .3s ease both" }}>
                  auto ⚡
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Time saved */}
      <div style={{
        textAlign: "center", fontSize: 10, fontWeight: 700, color: GL,
        background: `${G}10`, border: `1px solid ${G}32`,
        borderRadius: 8, padding: "5px 10px",
        opacity: phase === 2 ? 1 : 0,
        transform: phase === 2 ? "none" : "translateY(5px)",
        transition: "all .5s ease .25s",
      }}>
        6.4 hrs saved every week
      </div>

      <PhaseBar phase={phase} labels={["Manual", "Automating", "Automated"]} />
    </div>
  );
}

/* ─────────────────────────── 4. Systems Integration ────────────────── */
/* disconnected tools (red) → lines drawing → all green, synced hub       */
function IntegrationBack({ active }: { active: boolean }) {
  const phase = usePhase(active, 2000, 1800, 2400);

  const tools = [
    { label: "CRM",   cx: 18,  cy: 16 },
    { label: "Email", cx: 142, cy: 16 },
    { label: "Data",  cx: 18,  cy: 64 },
    { label: "Slack", cx: 142, cy: 64 },
  ];

  return (
    <div style={{ width: "100%", maxWidth: 172, display: "flex", flexDirection: "column", gap: 10 }}>
      <svg viewBox="0 0 160 82" style={{ width: "100%", overflow: "visible" }}>
        {/* Connection lines */}
        {tools.map((t, i) => (
          <line key={t.label}
            x1={t.cx} y1={t.cy} x2="80" y2="40"
            stroke={phase === 2 ? G : B}
            strokeWidth="1.2"
            strokeDasharray="70"
            strokeDashoffset={phase >= 1 ? 0 : 70}
            strokeOpacity={phase >= 1 ? 0.45 : 0}
            style={{ transition: `stroke-dashoffset .55s ease ${i * .12}s, stroke-opacity .55s ease ${i * .12}s, stroke .4s ease` }}
          />
        ))}

        {/* Travelling data pulses — phase 1 only */}
        {phase === 1 && tools.map((t, i) => (
          <circle key={t.label} r="2.5" fill={BL} opacity=".85">
            <animateMotion dur="1.3s" begin={`${i * .32}s`} repeatCount="indefinite"
              path={`M ${t.cx} ${t.cy} L 80 40`} />
            <animate attributeName="opacity" values="0;1;1;0" dur="1.3s" begin={`${i * .32}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Tool nodes */}
        {tools.map((t, i) => (
          <g key={t.label}>
            <circle cx={t.cx} cy={t.cy} r="13"
              fill={phase === 2 ? `${G}12` : `${B}11`}
              stroke={phase === 2 ? G : B}
              strokeWidth="1" strokeOpacity={phase >= 1 ? ".6" : ".3"}
              style={{ transition: "all .5s ease" }}
            />
            {/* Status indicator dot */}
            <circle cx={t.cx + 7} cy={t.cy - 7} r="3.5"
              fill={phase === 2 ? G : phase === 1 ? B : "oklch(0.55 0.22 25)"}
              style={{ transition: `fill .4s ease ${i * .1}s` }}
            />
            <text x={t.cx} y={t.cy + 3.5} textAnchor="middle" fontSize="6"
              fill={phase === 2 ? GL : BL} fontFamily="Inter, sans-serif" fontWeight="600"
              style={{ transition: "fill .4s ease" }}>
              {t.label}
            </text>
          </g>
        ))}

        {/* Hub */}
        <circle cx="80" cy="40" r="18"
          fill={phase === 2 ? `${G}16` : `${B}16`}
          stroke={phase === 2 ? G : B}
          strokeWidth="1.5" strokeOpacity=".6"
          style={{ transition: "all .5s ease" }}
        />
        {phase === 2 && (
          <circle cx="80" cy="40" r="18" fill="none" stroke={GL} strokeWidth="1" strokeOpacity=".3"
            style={{ animation: "ai-pulse-ring 2s ease infinite" }} />
        )}
        <text x="80" y="37.5" textAnchor="middle" fontSize="6" fontFamily="Inter, sans-serif" fontWeight="700"
          fill={phase === 2 ? GL : BL} style={{ transition: "fill .4s ease" }}>
          {phase === 2 ? "SYNCED" : phase === 1 ? "LINKING" : "IDLE"}
        </text>
        <text x="80" y="45.5" textAnchor="middle" fontSize="5" fontFamily="Inter, sans-serif"
          fill={phase === 2 ? GL + "aa" : BL + "70"} style={{ transition: "fill .4s ease" }}>
          {phase === 2 ? "✓ 4 tools" : phase === 1 ? "..." : "disconnected"}
        </text>
      </svg>
      <PhaseBar phase={phase} labels={["Disconnected", "Connecting", "Synced"]} />
    </div>
  );
}

/* ─────────────────────────── 5. Meta & Google Ads ──────────────────── */
/* ad draft → published live → rising results                             */
function AdsBack({ active }: { active: boolean }) {
  const phase = usePhase(active, 2000, 1800, 2400);
  const bars   = [22, 38, 30, 54, 44, 72];

  return (
    <div style={{ width: "100%", maxWidth: 172, display: "flex", flexDirection: "column", gap: 9 }}>
      {/* Status row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.32)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".07em" }}>
          Campaign
        </span>
        {phase === 0 && (
          <span style={{ fontSize: 9, padding: "2px 7px", borderRadius: 4, fontWeight: 600, color: "rgba(255,255,255,0.28)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
            Draft
          </span>
        )}
        {phase >= 1 && (
          <div style={{ display: "flex", alignItems: "center", gap: 4, animation: "card-fade-up .3s ease both" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: G, animation: "live-pulse 1.2s ease infinite" }} />
            <span style={{ fontSize: 9, fontWeight: 700, color: GL, letterSpacing: ".05em" }}>LIVE</span>
          </div>
        )}
      </div>

      {/* Ad creative */}
      <div style={{
        borderRadius: 7, padding: "6px 8px",
        border: `1px solid ${phase >= 1 ? B + "40" : "rgba(255,255,255,0.09)"}`,
        background: phase >= 1 ? `${B}08` : "rgba(255,255,255,0.025)",
        display: "flex", alignItems: "center", gap: 7, transition: "all .5s ease",
      }}>
        <div style={{ width: 28, height: 28, borderRadius: 5, background: phase >= 1 ? `${B}28` : "rgba(255,255,255,0.06)", transition: "background .5s ease", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ height: 5, width: "80%", borderRadius: 2, marginBottom: 4, background: phase >= 1 ? `${B}48` : "rgba(255,255,255,0.07)", transition: "background .5s ease" }} />
          <div style={{ height: 4, width: "55%", borderRadius: 2, background: phase >= 1 ? `${B}26` : "rgba(255,255,255,0.04)", transition: "background .5s ease" }} />
        </div>
      </div>

      {/* Phase 1 — deploying */}
      <div style={{ opacity: phase === 1 ? 1 : 0, transition: "opacity .4s ease", display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ fontSize: 9, color: BL, fontWeight: 600 }}>Publishing to Meta + Google...</div>
        {["Meta Ads", "Google Ads"].map((p, i) => (
          <div key={p} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ fontSize: 8, color: `${BL}65`, width: 52 }}>{p}</div>
            <div style={{ flex: 1, height: 4, borderRadius: 2, background: `${B}15` }}>
              <div style={{ height: "100%", width: "100%", borderRadius: 2, background: B, animation: phase === 1 ? `card-bar-rise .7s ease ${i * .2}s both` : "none" }} />
            </div>
            <span style={{ fontSize: 8, color: GL }}>✓</span>
          </div>
        ))}
      </div>

      {/* Phase 2 — results */}
      <div style={{ opacity: phase === 2 ? 1 : 0, transition: "opacity .4s ease .1s" }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 38, marginBottom: 4 }}>
          {bars.map((h, i) => (
            <div key={i} style={{
              flex: 1, borderRadius: "2px 2px 0 0",
              height: `${h}%`,
              background: `oklch(${.52 + i * .025} 0.22 260 / .65)`,
              transformOrigin: "bottom",
              animation: phase === 2 ? `card-bar-rise .4s cubic-bezier(.34,1.56,.64,1) ${i * .06}s both` : "none",
            }} />
          ))}
        </div>
        <div style={{ height: 1, background: `${B}20`, marginBottom: 6 }} />
        <div style={{ display: "flex", gap: 4 }}>
          {[{ l: "ROAS", v: "4.2×" }, { l: "Clicks", v: "+38%" }, { l: "CPA", v: "−22%" }].map(({ l, v }) => (
            <div key={l} style={{
              flex: 1, padding: "3px 5px", borderRadius: 5, textAlign: "center",
              border: `1px solid ${B}22`, background: `${B}08`,
            }}>
              <div style={{ fontSize: 8, color: `${BL}65`, marginBottom: 2 }}>{l}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: BL }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <PhaseBar phase={phase} labels={["Draft", "Launched", "Results"]} />
    </div>
  );
}

/* ─────────────────────────── 6. GTM Engineering ────────────────────── */
/* user actions untracked → tags fire → data lands in dashboard           */
function GTMBack({ active }: { active: boolean }) {
  const phase = usePhase(active, 2200, 1600, 2400);

  const events = [
    { label: "Page view",    x: 28,  y: 22 },
    { label: "CTA click",   x: 80,  y: 42 },
    { label: "Form submit",  x: 134, y: 60 },
  ];

  return (
    <div style={{ width: "100%", maxWidth: 172, display: "flex", flexDirection: "column", gap: 10 }}>
      <svg viewBox="0 0 160 80" style={{ width: "100%" }}>
        {/* Page background */}
        <rect x="4" y="4" width="152" height="72" rx="5"
          fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.07)" strokeWidth=".8" />

        {/* Attribution path — phase 2 */}
        <polyline
          points={events.map((e) => `${e.x},${e.y}`).join(" ")}
          fill="none" stroke={G} strokeWidth="1.2" strokeOpacity=".55"
          strokeDasharray="120" strokeDashoffset={phase === 2 ? 0 : 120}
          style={{ transition: "stroke-dashoffset .7s ease .15s" }}
        />

        {/* Event dots */}
        {events.map((ev, i) => (
          <g key={ev.label}>
            <circle cx={ev.x} cy={ev.y} r="5"
              fill={phase === 2 ? `${G}25` : phase === 1 ? `${B}25` : "rgba(255,255,255,0.07)"}
              stroke={phase === 2 ? G : phase === 1 ? B : "rgba(255,255,255,0.18)"}
              strokeWidth="1"
              style={{ transition: `all .4s ease ${i * .15}s` }}
            />
            {/* Tag fire pulse ring */}
            {phase === 1 && (
              <circle cx={ev.x} cy={ev.y} r="5" fill="none"
                stroke={BL} strokeWidth=".8"
                style={{ animation: `ai-pulse-ring 1.1s ease ${i * .28}s infinite` }}
              />
            )}
            {/* Lightning on fire */}
            {phase === 1 && (
              <text x={ev.x + 6} y={ev.y - 4} fontSize="7"
                style={{ animation: `card-fade-up .3s ease ${i * .28}s both` }}>
                ⚡
              </text>
            )}
            <text x={ev.x} y={ev.y + 12} textAnchor="middle" fontSize="5"
              fill={phase === 2 ? GL : "rgba(255,255,255,0.28)"}
              fontFamily="Inter, sans-serif"
              style={{ transition: "fill .4s ease" }}>
              {ev.label}
            </text>
          </g>
        ))}

        {/* Dashboard chip — phase 2 */}
        <g style={{ opacity: phase === 2 ? 1 : 0, transition: "opacity .4s ease .35s" }}>
          <rect x="96" y="54" width="56" height="18" rx="4"
            fill={`${G}14`} stroke={G} strokeWidth=".7" strokeOpacity=".5" />
          <text x="124" y="61" textAnchor="middle" fontSize="5" fill={GL} fontFamily="Inter, sans-serif" fontWeight="700">
            Dashboard
          </text>
          <text x="124" y="68" textAnchor="middle" fontSize="5" fill={GL} fontFamily="Inter, sans-serif">
            ✓ 3 events logged
          </text>
        </g>

        {/* Untracked label — phase 0 */}
        <g style={{ opacity: phase === 0 ? 1 : 0, transition: "opacity .4s ease" }}>
          <rect x="26" y="58" width="48" height="12" rx="3"
            fill="oklch(0.55 0.22 25 / 0.12)" stroke="oklch(0.55 0.22 25 / 0.35)" strokeWidth=".7" />
          <text x="50" y="66.5" textAnchor="middle" fontSize="5.5"
            fill="oklch(0.70 0.18 25)" fontFamily="Inter, sans-serif" fontWeight="600">
            Untracked
          </text>
        </g>
      </svg>
      <PhaseBar phase={phase} labels={["Untracked", "Tags fire", "Captured"]} />
    </div>
  );
}

/* ─────────────────────────── Service data ──────────────────────────── */

const services: Service[] = [
  {
    title: "Web Development",
    tag: "Build",
    desc: "High-converting websites and platforms built for performance, not appearances.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></svg>),
    back: (active) => <WebDevBack active={active} />,
  },
  {
    title: "AI Integration",
    tag: "Intelligent",
    desc: "Practical AI for the areas where it creates real value: support, ops, and content.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.6-3 6l-.5 4h-7L8 15c-1.7-1.4-3-3.5-3-6a7 7 0 0 1 7-7zM9 21h6" /></svg>),
    back: (active) => <AIBack active={active} />,
  },
  {
    title: "Process Automation",
    tag: "Automate",
    desc: "We remove repetitive tasks and streamline your operations, saving your team hours every week.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>),
    back: (active) => <AutomationBack active={active} />,
  },
  {
    title: "Systems Integration",
    tag: "Connect",
    desc: "Your tools, data, and CRM connected and working as one unified system.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>),
    back: (active) => <IntegrationBack active={active} />,
  },
  {
    title: "Meta & Google Ads",
    tag: "Growth",
    desc: "Paid campaigns built around measurable return, not vanity metrics.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M3 3v18h18M7 14l4-4 4 4 5-5" /></svg>),
    back: (active) => <AdsBack active={active} />,
  },
  {
    title: "GTM Engineering",
    tag: "Scale",
    desc: "Tracking, attribution, and outbound systems that give you full control over growth.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18M5.64 5.64l12.72 12.72M5.64 18.36L18.36 5.64" /></svg>),
    back: (active) => <GTMBack active={active} />,
  },
];

/* ─────────────────────────── Card ──────────────────────────────────── */

function ServiceCard({ s, index }: { s: Service; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (flipped) return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--gx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--gy", `${e.clientY - r.top}px`);
  };
  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--gx", "-600px");
    e.currentTarget.style.setProperty("--gy", "-600px");
    setHovered(false);
  };

  return (
    <div
      ref={wrapRef}
      onClick={() => setFlipped((f) => !f)}
      className="cursor-pointer"
      style={{
        perspective: "1200px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(36px) scale(0.97)",
        transition: `opacity 0.55s ease ${index * 80}ms, transform 0.55s ease ${index * 80}ms`,
      }}
    >
      <div style={{
        transformStyle: "preserve-3d",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
      }}>
        {/* ── Front ── */}
        <article
          onMouseMove={onMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={onLeave}
          className="group relative overflow-hidden rounded-[22px] border border-border-soft bg-background p-8 transition-shadow duration-300 hover:border-[color-mix(in_oklab,var(--blue)_30%,transparent)] hover:shadow-[0_24px_56px_color-mix(in_oklab,var(--navy)_8%,transparent)]"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", "--gx": "-600px", "--gy": "-600px" } as React.CSSProperties}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: "radial-gradient(circle 280px at var(--gx) var(--gy), color-mix(in oklab, var(--blue) 7%, transparent), transparent)" }} />
          <span aria-hidden="true" className="pointer-events-none absolute right-5 top-2 select-none font-display font-bold leading-none text-text-base/[0.06] transition-colors duration-300 group-hover:text-text-base/[0.10]" style={{ fontSize: 96 }}>{num}</span>

          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-text-light transition-colors duration-300 group-hover:border-[color-mix(in_oklab,var(--blue)_25%,transparent)] group-hover:text-blue">
              <span className="h-1 w-1 rounded-full bg-current" />{s.tag}
            </span>
          </div>

          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-soft text-blue ring-1 ring-[color-mix(in_oklab,var(--blue)_15%,transparent)] transition-all duration-300 group-hover:shadow-[0_4px_16px_color-mix(in_oklab,var(--blue)_20%,transparent)]">
            {s.icon}
          </div>

          <h3 className="mb-3 text-[20px] font-semibold leading-snug tracking-tight text-text-base transition-colors duration-200 group-hover:text-blue">{s.title}</h3>
          <p className="relative z-10 text-[14px] leading-[1.8] text-text-muted">{s.desc}</p>

          {/* Hover preview hint */}
          <div className="mt-5 flex items-center gap-2 text-[11px]" style={{ color: "var(--text-light)", opacity: 0.55 }}>
            {hovered ? (
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                {(["Before", "Process", "Result"] as const).map((label, i) => (
                  <span key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <span style={{ animation: `card-fade-up .25s ease ${i * .07}s both`, fontSize: 11 }}>{label}</span>
                    {i < 2 && <span style={{ opacity: 0.35, fontSize: 10 }}>→</span>}
                  </span>
                ))}
              </div>
            ) : (
              <span className="flex items-center gap-1.5">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16" />
                </svg>
                Click to see how it works
              </span>
            )}
          </div>

          <div aria-hidden="true" className="absolute bottom-0 left-8 right-8 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-blue to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
        </article>

        {/* ── Back ── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-between rounded-[22px] p-7"
          style={{
            backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "var(--why-card)", border: "1px solid var(--why-card-border)",
          }}
        >
          <div className="flex w-full items-center justify-between">
            <p className="text-[13px] font-semibold text-white/70">{s.title}</p>
            <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/30">tap to close</span>
          </div>
          <div className="flex flex-1 items-center justify-center py-3 w-full">
            {flipped && s.back(flipped)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── Section ───────────────────────────────── */

export function Services() {
  return (
    <section id="services" className="bg-background px-6 py-28 md:px-[72px]">
      <SectionHead
        tag="What we do"
        title="Six services."
        accent="One team."
        sub="No handoffs between agencies. Everything working together to drive leads, cut waste, and scale what works."
      />
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => <ServiceCard key={s.title} s={s} index={i} />)}
      </div>
    </section>
  );
}
