import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Download, Users, Mail, Phone, MapPin, Calendar, Shield, RefreshCw, CreditCard, TrendingUp, Star } from "lucide-react";
import { SEO } from "@/components/SEO";

interface Subscriber {
  id: number;
  email: string;
  name: string | null;
  phone: string | null;
  address: string | null;
  source: string | null;
  createdAt: string | null;
  isActive: boolean | null;
  isPaid: boolean | null;
  tierName: string | null;
  subscriptionStatus: string | null;
}

interface AdminData {
  total: number;
  subscribers: Subscriber[];
}

const TIER_AMOUNTS: Record<string, number> = {
  witness: 5,
  advocate: 15,
  guardian: 33,
};

const TIER_COLORS: Record<string, string> = {
  witness: "#3b82f6",
  advocate: "#f59e0b",
  guardian: "#a855f7",
};

export default function AdminSubscribers() {
  const [adminToken, setAdminToken] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [search, setSearch] = useState("");
  const [showPaidOnly, setShowPaidOnly] = useState(false);

  const { data, isLoading, error, refetch } = useQuery<AdminData>({
    queryKey: ["/api/admin/subscribers", submitted, adminToken],
    enabled: submitted && !!adminToken,
    queryFn: async () => {
      const res = await fetch("/api/admin/subscribers", {
        headers: { "x-admin-token": adminToken },
      });
      if (!res.ok) throw new Error("Unauthorized or server error");
      return res.json();
    },
    retry: false,
  });

  const downloadCSV = () => {
    const url = `/api/admin/subscribers?format=csv&adminToken=${encodeURIComponent(adminToken)}`;
    const a = document.createElement("a");
    a.href = url;
    a.download = "subscribers.csv";
    a.click();
  };

  const filtered = data?.subscribers?.filter(s => {
    if (showPaidOnly && !s.isPaid) return false;
    if (!search) return true;
    const q = search.toLowerCase();
    return (s.email?.toLowerCase().includes(q) || s.name?.toLowerCase()?.includes(q) || s.phone?.includes(q));
  }) ?? [];

  const paidSubs = data?.subscribers?.filter(s => s.isPaid && s.subscriptionStatus === "active") ?? [];
  const monthlyRevenue = paidSubs.reduce((sum, s) => sum + (TIER_AMOUNTS[s.tierName || ""] || 0), 0);
  const annualRevenue = monthlyRevenue * 12;

  if (!submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "#060d18" }}>
        <SEO title="Admin — Subscribers | Barran Dodger Archive" description="Admin subscriber list" path="/admin/subscribers" />
        <div className="w-full max-w-sm rounded-2xl border p-8 space-y-4" style={{ background: "#0a1628", borderColor: "#1e3a5f" }}>
          <div className="text-center space-y-1">
            <Shield className="h-10 w-10 mx-auto mb-2" style={{ color: "#3b82f6" }} />
            <h1 className="text-xl font-bold text-white">Admin Access</h1>
            <p className="text-sm" style={{ color: "#6b7280" }}>Barran Dodger · Subscriber List</p>
          </div>
          <input
            type="password"
            placeholder="Admin token"
            value={adminToken}
            onChange={(e) => setAdminToken(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") setSubmitted(true); }}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
            style={{ background: "#0d1b2e", border: "1px solid #1e3a5f", color: "#e5e7eb" }}
            data-testid="input-admin-token"
          />
          <button
            onClick={() => setSubmitted(true)}
            className="w-full py-3 rounded-xl font-bold text-sm text-black"
            style={{ background: "#3b82f6" }}
            data-testid="button-admin-login"
          >
            View Subscribers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ background: "#060d18" }}>
      <SEO title="Admin — Subscribers | Barran Dodger Archive" description="Admin subscriber list" path="/admin/subscribers" />

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Users className="h-6 w-6 text-blue-400" /> Subscriber List
            </h1>
            <p className="text-sm mt-0.5" style={{ color: "#6b7280" }}>
              Barran Dodger Legal & Ethical Trust Fund · ABN 78 833 496 164
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => refetch()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium"
              style={{ background: "#1e3a5f", color: "#93c5fd" }}
              data-testid="button-refresh"
            >
              <RefreshCw className="h-3.5 w-3.5" /> Refresh
            </button>
            <button
              onClick={downloadCSV}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold"
              style={{ background: "#3b82f6", color: "#fff" }}
              data-testid="button-export-csv"
            >
              <Download className="h-3.5 w-3.5" /> Export CSV
            </button>
          </div>
        </div>

        {/* Stats */}
        {data && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="rounded-xl p-4 border" style={{ background: "#0a1628", borderColor: "#1e3a5f" }}>
              <p className="text-2xl font-bold text-white">{data.total.toLocaleString()}</p>
              <p className="text-xs mt-0.5 flex items-center gap-1" style={{ color: "#6b7280" }}>
                <Users className="h-3 w-3" /> Total subscribers
              </p>
            </div>
            <div className="rounded-xl p-4 border" style={{ background: "#0a1628", borderColor: "#065f46" }}>
              <p className="text-2xl font-bold text-green-400">{paidSubs.length}</p>
              <p className="text-xs mt-0.5 flex items-center gap-1" style={{ color: "#6b7280" }}>
                <CreditCard className="h-3 w-3" /> Active paid subscribers
              </p>
            </div>
            <div className="rounded-xl p-4 border" style={{ background: "#0a1628", borderColor: "#065f46" }}>
              <p className="text-2xl font-bold text-green-400">${monthlyRevenue}</p>
              <p className="text-xs mt-0.5 flex items-center gap-1" style={{ color: "#6b7280" }}>
                <TrendingUp className="h-3 w-3" /> Monthly revenue (AUD)
              </p>
            </div>
            <div className="rounded-xl p-4 border" style={{ background: "#0a1628", borderColor: "#065f46" }}>
              <p className="text-2xl font-bold text-green-400">${annualRevenue.toLocaleString()}</p>
              <p className="text-xs mt-0.5 flex items-center gap-1" style={{ color: "#6b7280" }}>
                <Star className="h-3 w-3" /> Projected annual (AUD)
              </p>
            </div>
          </div>
        )}

        {/* Tier breakdown */}
        {data && paidSubs.length > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {["witness", "advocate", "guardian"].map(tier => {
              const count = paidSubs.filter(s => s.tierName === tier).length;
              return (
                <div key={tier} className="rounded-xl p-4 border" style={{ background: "#0a1628", borderColor: TIER_COLORS[tier] + "44" }}>
                  <p className="text-lg font-bold text-white">{count}</p>
                  <p className="text-xs capitalize mt-0.5" style={{ color: TIER_COLORS[tier] }}>{tier}s · ${TIER_AMOUNTS[tier]}/mo each</p>
                  <p className="text-xs mt-0.5" style={{ color: "#4b5563" }}>${count * TIER_AMOUNTS[tier]}/mo</p>
                </div>
              );
            })}
          </div>
        )}

        {/* Filters */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search by name, email or phone…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
            style={{ background: "#0a1628", border: "1px solid #1e3a5f", color: "#e5e7eb" }}
            data-testid="input-search-subscribers"
          />
          <button
            onClick={() => setShowPaidOnly(!showPaidOnly)}
            className="px-4 py-3 rounded-xl text-sm font-medium shrink-0"
            style={{
              background: showPaidOnly ? "#065f46" : "#0a1628",
              border: `1px solid ${showPaidOnly ? "#065f46" : "#1e3a5f"}`,
              color: showPaidOnly ? "#34d399" : "#6b7280",
            }}
            data-testid="button-filter-paid"
          >
            <CreditCard className="h-4 w-4 inline mr-1.5" />
            Paid only
          </button>
        </div>

        {/* Content */}
        {isLoading && (
          <div className="text-center py-16" style={{ color: "#4b5563" }}>Loading subscribers…</div>
        )}
        {error && (
          <div className="text-center py-16 space-y-2">
            <p className="text-red-400 font-medium">Unauthorized — check your admin token</p>
            <button onClick={() => setSubmitted(false)} className="text-blue-400 text-sm underline">Try again</button>
          </div>
        )}
        {data && filtered.length === 0 && (
          <div className="text-center py-16" style={{ color: "#4b5563" }}>
            {search ? "No subscribers match your search." : "No subscribers yet."}
          </div>
        )}
        {data && filtered.length > 0 && (
          <div className="rounded-xl border overflow-hidden" style={{ borderColor: "#1e3a5f" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#0d1b2e" }}>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#6b7280" }}>Name</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#6b7280" }}>Email</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider hidden md:table-cell" style={{ color: "#6b7280" }}>Tier</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider hidden md:table-cell" style={{ color: "#6b7280" }}>Phone</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider hidden lg:table-cell" style={{ color: "#6b7280" }}>Address</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider hidden md:table-cell" style={{ color: "#6b7280" }}>Source</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#6b7280" }}>Joined</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, i) => (
                  <tr
                    key={s.id}
                    style={{ background: i % 2 === 0 ? "#0a1628" : "#060d18", borderTop: "1px solid #1e3a5f" }}
                    data-testid={`row-subscriber-${s.id}`}
                  >
                    <td className="px-4 py-3 font-medium text-white">
                      <span>{s.name || <span style={{ color: "#4b5563" }}>—</span>}</span>
                      {s.isPaid && (
                        <span className="ml-1.5 text-xs px-1.5 py-0.5 rounded-full" style={{ background: "#065f46", color: "#34d399" }}>paid</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <a href={`mailto:${s.email}`} className="flex items-center gap-1 hover:underline" style={{ color: "#93c5fd" }}>
                        <Mail className="h-3 w-3 shrink-0" />{s.email}
                      </a>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      {s.tierName ? (
                        <span className="px-2 py-0.5 rounded-full text-xs capitalize font-medium" style={{ background: (TIER_COLORS[s.tierName] || "#6b7280") + "22", color: TIER_COLORS[s.tierName] || "#6b7280" }}>
                          {s.tierName} · ${TIER_AMOUNTS[s.tierName] || 0}/mo
                        </span>
                      ) : (
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "#1e3a5f", color: "#93c5fd" }}>free</span>
                      )}
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell" style={{ color: "#9ca3af" }}>
                      {s.phone ? <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{s.phone}</span> : <span style={{ color: "#374151" }}>—</span>}
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell" style={{ color: "#9ca3af" }}>
                      {s.address ? <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{s.address}</span> : <span style={{ color: "#374151" }}>—</span>}
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: "#1e3a5f", color: "#93c5fd" }}>
                        {s.source || "—"}
                      </span>
                    </td>
                    <td className="px-4 py-3" style={{ color: "#6b7280" }}>
                      <span className="flex items-center gap-1 text-xs">
                        <Calendar className="h-3 w-3" />
                        {s.createdAt ? new Date(s.createdAt).toLocaleDateString("en-AU") : "—"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-4 py-3 border-t text-xs" style={{ background: "#0d1b2e", borderColor: "#1e3a5f", color: "#4b5563" }}>
              Showing {filtered.length} of {data.total} subscribers · {paidSubs.length} paid · ${monthlyRevenue}/month AUD · Export CSV for all fields
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
