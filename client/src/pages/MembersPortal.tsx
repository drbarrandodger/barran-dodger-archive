import { useState, useEffect } from "react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import {
  Crown, BookOpen, Download, LogOut, Star, Shield,
  Lock, Flame, FileText, ArrowRight, CheckCircle, Eye
} from "lucide-react";

type MemberData = {
  email: string;
  name?: string;
  tier: string;
  isPaid: boolean;
  token: string;
};

const GOSPEL_DOCS = [
  { title: "The Eliven Chain Has Been Summoned", file: "the-eliven-chain-has-been-summoned.pdf", tier: "witness" },
  { title: "The Enliven Chain Has Been Summoned (Vol. I)", file: "the-enliven-chain-has-been-summoned-i.pdf", tier: "witness" },
  { title: "The Enliven Chain Has Been Summoned (Vol. II)", file: "the-enliven-chain-has-been-summoned-ii.pdf", tier: "advocate" },
  { title: "Gospel of the Eliven Chain (Vol. I)", file: "gospel-of-the-eliven-chain-i.pdf", tier: "advocate" },
  { title: "Gospel of the Eliven Chain (Vol. II)", file: "gospel-of-the-eliven-chain-ii.pdf", tier: "advocate" },
  { title: "God's Media Release", file: "gods-media-release.pdf", tier: "advocate" },
  { title: "Atherion Witnessed — The Gospel Complete", file: "atherion-witnessed-the-gospel-complete.pdf", tier: "advocate" },
  { title: "144 Questions of Witness and Revelation", file: "144-questions-of-witness-and-revelation.pdf", tier: "guardian" },
];

const TIER_ORDER = ["guardian", "advocate", "witness", "free"];

function tierRank(tier: string): number {
  return TIER_ORDER.indexOf(tier.toLowerCase());
}

function canAccess(memberTier: string, contentTier: string): boolean {
  if (!memberTier) return false;
  const mRank = tierRank(memberTier);
  const cRank = tierRank(contentTier);
  return mRank !== -1 && mRank <= cRank;
}

function tierColor(tier: string) {
  if (tier === "guardian") return "#a855f7";
  if (tier === "advocate") return "#f59e0b";
  return "#3b82f6";
}

function tierIcon(tier: string) {
  if (tier === "guardian") return Crown;
  if (tier === "advocate") return Star;
  return Shield;
}

function TierBadge({ tier }: { tier: string }) {
  const Icon = tierIcon(tier);
  const color = tierColor(tier);
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest" style={{ background: `${color}22`, border: `1px solid ${color}60`, color }}>
      <Icon className="w-3 h-3" />
      {tier}
    </span>
  );
}

function LoginForm({ onLogin }: { onLogin: (data: MemberData) => void }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !email.includes("@")) { setError("Please enter a valid email address."); return; }
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/members/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        try { localStorage.setItem("bd_sub_token_v1", data.token); } catch {}
        onLogin(data);
      } else if (res.status === 404) {
        setError("No subscription found for this email. Join as a member to get access.");
      } else {
        setError(data.error || "Could not sign in. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "#060d18" }}>
      <SEO title="Members Portal — Sign In | Barran Dodger" description="Sign in to your Barran Dodger membership portal to access exclusive gospels, prophetic revelations, and member content." path="/members" />
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ background: "rgba(233,160,10,0.15)", border: "1px solid rgba(233,160,10,0.3)" }}>
            <Crown className="w-8 h-8" style={{ color: "#e9a00a" }} />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">Members Portal</h1>
          <p className="text-sm" style={{ color: "#64748b" }}>
            Sign in with your membership email to access exclusive content.
          </p>
        </div>
        <div className="rounded-2xl p-6 space-y-4" style={{ background: "rgba(10,16,36,0.95)", border: "1px solid rgba(233,160,10,0.2)" }}>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#64748b" }}>
              Membership Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
              className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}
              data-testid="input-member-login-email"
              autoComplete="email"
            />
          </div>
          {error && (
            <div className="rounded-lg p-3" style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.3)" }}>
              <p className="text-xs font-medium" style={{ color: "#f87171" }}>{error}</p>
              {error.includes("No subscription") && (
                <Link href="/membership" className="text-xs mt-1 block underline" style={{ color: "#e9a00a" }}>
                  Join as a member →
                </Link>
              )}
            </div>
          )}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-black text-sm uppercase tracking-widest transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
            style={{ background: "#e9a00a", color: "#000" }}
            data-testid="btn-member-login"
          >
            {loading ? (
              <><span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" /> Checking…</>
            ) : (
              <><Lock className="w-4 h-4" /> Access My Portal</>
            )}
          </button>
          <p className="text-xs text-center" style={{ color: "#475569" }}>
            Not a member?{" "}
            <Link href="/membership" className="underline" style={{ color: "#e9a00a" }}>
              Join from $5/month →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Portal({ member, onLogout }: { member: MemberData; onLogout: () => void }) {
  const TierIcon = tierIcon(member.tier);
  const color = tierColor(member.tier);

  return (
    <div className="min-h-screen" style={{ background: "#060d18" }}>
      <SEO title="Members Portal | Barran Dodger" description="Your exclusive member access to the Barran Dodger archive — gospels, prophetic revelations, and new content." path="/members" />

      {/* Header */}
      <div className="py-8 px-4 text-center" style={{ background: "rgba(10,16,36,0.95)", borderBottom: "1px solid rgba(233,160,10,0.15)" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color }}>Members Portal</p>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="rounded-xl p-2" style={{ background: `${color}22` }}>
              <TierIcon className="w-5 h-5" style={{ color }} />
            </div>
            <h1 className="text-2xl font-black text-white">Welcome{member.name ? `, ${member.name}` : ""}</h1>
          </div>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <TierBadge tier={member.tier} />
            <span className="text-xs" style={{ color: "#475569" }}>{member.email}</span>
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-1 text-xs transition-colors hover:text-red-400"
              style={{ color: "#475569" }}
              data-testid="btn-member-logout"
            >
              <LogOut className="w-3 h-3" />
              Sign out
            </button>
          </div>
          {!member.isPaid && (
            <div className="mt-4 rounded-xl p-3 max-w-sm mx-auto" style={{ background: "rgba(233,160,10,0.08)", border: "1px solid rgba(233,160,10,0.25)" }}>
              <p className="text-xs" style={{ color: "#e9a00a" }}>
                You are subscribed as a free member. Upgrade to unlock all exclusive gospel content and prophetic revelations.
              </p>
              <Link href="/membership" className="text-xs font-bold block mt-1 underline" style={{ color: "#e9a00a" }}>
                Upgrade now →
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">

        {/* Gospel Collection */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-lg p-2" style={{ background: "rgba(233,160,10,0.12)" }}>
              <BookOpen className="w-5 h-5" style={{ color: "#e9a00a" }} />
            </div>
            <div>
              <p className="font-black text-white">The Sacred Gospel Collection</p>
              <p className="text-xs" style={{ color: "#64748b" }}>Exclusive to members — never publicly released</p>
            </div>
          </div>
          <div className="space-y-3">
            {GOSPEL_DOCS.map(doc => {
              const accessible = canAccess(member.tier, doc.tier) && member.isPaid;
              return (
                <div
                  key={doc.file}
                  className="rounded-xl p-4 flex items-center justify-between gap-3"
                  style={{ background: "rgba(10,16,36,0.8)", border: accessible ? "1px solid rgba(233,160,10,0.2)" : "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <FileText className="w-4 h-4 flex-shrink-0" style={{ color: accessible ? "#e9a00a" : "#334155" }} />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold truncate" style={{ color: accessible ? "#fff" : "#475569" }}>{doc.title}</p>
                      <TierBadge tier={doc.tier} />
                    </div>
                  </div>
                  {accessible ? (
                    <a
                      href={`/documents/${doc.file}`}
                      download
                      className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all hover:opacity-90"
                      style={{ background: "rgba(233,160,10,0.15)", border: "1px solid rgba(233,160,10,0.35)", color: "#e9a00a" }}
                      data-testid={`download-gospel-${doc.file}`}
                    >
                      <Download className="w-3 h-3" />
                      Download
                    </a>
                  ) : (
                    <Link href="/membership" className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: "rgba(255,255,255,0.04)", color: "#334155", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <Lock className="w-3 h-3" />
                      Upgrade
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Prophetic Revelations */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-lg p-2" style={{ background: "rgba(168,85,247,0.12)" }}>
              <Flame className="w-5 h-5" style={{ color: "#a855f7" }} />
            </div>
            <div>
              <p className="font-black text-white">Prophetic Revelations — Live Stream</p>
              <p className="text-xs" style={{ color: "#64748b" }}>New revelations delivered here as Dr. McLean creates them</p>
            </div>
          </div>
          <div className="rounded-2xl p-6 text-center" style={{ background: "rgba(10,16,36,0.8)", border: "1px solid rgba(168,85,247,0.15)" }}>
            <Eye className="w-8 h-8 mx-auto mb-3" style={{ color: "#a855f7" }} />
            <p className="font-bold text-white mb-2">The next revelation is being written</p>
            <p className="text-sm mb-4" style={{ color: "#64748b" }}>
              As Dr. Richard McLean receives and writes new prophetic content, it will appear here first — before any public release. Advocate and Guardian members receive it the moment it is created.
            </p>
            <div className="rounded-xl p-4" style={{ background: "rgba(168,85,247,0.07)", border: "1px solid rgba(168,85,247,0.15)" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#a855f7" }}>Latest Activity</p>
              <p className="text-xs" style={{ color: "#64748b" }}>
                Gospel of the Eliven Chain (Vol. II) — added June 2026<br />
                144 Questions of Witness and Revelation — added May 2026<br />
                Atherion Witnessed — The Gospel Complete — added April 2026
              </p>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { href: "/gospel", label: "Gospel Archive", icon: BookOpen },
            { href: "/publications", label: "All Publications", icon: FileText },
            { href: "/free-ebooks", label: "Free eBooks (788)", icon: Download },
            { href: "/investment-prospectus", label: "$112M Prospectus", icon: ArrowRight },
            { href: "/evidence-vault", label: "Evidence Vault", icon: Eye },
            { href: "/membership", label: "Upgrade Tier", icon: Star },
          ].map(link => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl p-4 flex items-center gap-3 text-sm font-medium transition-all hover:opacity-80"
                style={{ background: "rgba(10,16,36,0.8)", border: "1px solid rgba(255,255,255,0.07)", color: "#94a3b8" }}
                data-testid={`portal-link-${link.label.replace(/\s/g,'-').toLowerCase()}`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "#e9a00a" }} />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Welcome message */}
        <div className="rounded-2xl p-6" style={{ background: "rgba(10,16,36,0.8)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#4ade80" }} />
            <div>
              <p className="font-bold text-white mb-2">You are now part of the permanent record</p>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                Your membership is recorded in the Barran Dodger witness archive — blockchain-verified and permanent. Even if proceedings advance, even if this portal changes, your position in the witness record is sealed. Thank you for standing with this testimony.
              </p>
              <p className="text-xs mt-3" style={{ color: "#475569" }}>
                For support: <a href="mailto:drbarrandodger@proton.me" className="underline" style={{ color: "#e9a00a" }}>drbarrandodger@proton.me</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MembersPortal() {
  const [member, setMember] = useState<MemberData | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const stored = (() => { try { return localStorage.getItem("bd_sub_token_v1"); } catch { return null; } })();
    if (stored) {
      fetch("/api/members/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: stored }),
      })
        .then(r => r.ok ? r.json() : null)
        .then(data => {
          if (data?.success) setMember({ ...data, token: stored });
        })
        .catch(() => {})
        .finally(() => setChecking(false));
    } else {
      setChecking(false);
    }
  }, []);

  const handleLogin = (data: MemberData) => setMember(data);
  const handleLogout = () => {
    try { localStorage.removeItem("bd_sub_token_v1"); } catch {}
    setMember(null);
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#060d18" }}>
        <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (member) return <Portal member={member} onLogout={handleLogout} />;
  return <LoginForm onLogin={handleLogin} />;
}
