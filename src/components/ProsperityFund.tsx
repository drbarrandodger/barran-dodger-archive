import { Heart, ShieldCheck, Wallet, ExternalLink } from 'lucide-react';

const ProsperityFund = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-justice-gold/20 to-black border border-justice-gold/30 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-justice-gold/20 rounded-full">
              <Heart className="w-8 h-8 text-justice-gold animate-pulse" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter uppercase">
              Prosperity <span className="text-justice-gold">Fund</span>
            </h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The Prosperity Fund is a dedicated pool for Dr Richard McLean's compensation, security, and lifelong prosperity after 35 years of systematic persecution by 35+ Australian government agencies.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-black/40 border border-gray-800 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-justice-gold" />
                  <h3 className="text-lg font-bold text-white m-0 uppercase tracking-wider">Why it exists</h3>
                </div>
                <ul className="text-sm text-gray-400 space-y-3 list-none p-0">
                  <li className="flex gap-2">
                    <span className="text-justice-gold">•</span>
                    Zero compensation has ever been paid for 35 years of persecution
                  </li>
                  <li className="flex gap-2">
                    <span className="text-justice-gold">•</span>
                    14 forced psychiatric hospitalisations, clinical death, homelessness — with no restitution
                  </li>
                  <li className="flex gap-2">
                    <span className="text-justice-gold">•</span>
                    Legal aid refused. Justice connect refused. Zero legal help across the entire 35-year campaign.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-justice-gold">•</span>
                    Current PayID donations go to operational costs; the Prosperity Fund is ring-fenced for Dr McLean
                  </li>
                </ul>
              </div>

              <div className="bg-black/40 border border-gray-800 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Wallet className="w-5 h-5 text-justice-gold" />
                  <h3 className="text-lg font-bold text-white m-0 uppercase tracking-wider">How it works</h3>
                </div>
                <ul className="text-sm text-gray-400 space-y-3 list-none p-0">
                  <li className="flex gap-2">
                    <span className="text-justice-gold">•</span>
                    100% of Prosperity Fund contributions go directly to Dr McLean's compensation and security
                  </li>
                  <li className="flex gap-2">
                    <span className="text-justice-gold">•</span>
                    Funds are held separately from operational donations
                  </li>
                  <li className="flex gap-2">
                    <span className="text-justice-gold">•</span>
                    Transparency: every contribution is logged and can be verified
                  </li>
                  <li className="flex gap-2">
                    <span className="text-justice-gold">•</span>
                    Target: sufficient to provide lifelong security and fund international legal advocacy
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-justice-gold/10 border-2 border-justice-gold/50 p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-black text-white mb-6 uppercase">Contribute to the Fund</h2>
              
              <div className="flex flex-col items-center gap-4">
                <div className="bg-black border border-justice-gold/30 px-6 py-4 rounded-lg w-full max-w-md">
                  <span className="text-gray-500 text-xs uppercase block mb-1">Australian PayID</span>
                  <code className="text-xl text-justice-gold font-mono break-all select-all">rich@richmclean.com.au</code>
                </div>

                <div className="bg-black border border-justice-gold/30 px-6 py-2 rounded-lg w-full max-w-md">
                  <span className="text-gray-500 text-xs uppercase block mb-1">Reference</span>
                  <code className="text-lg text-white font-mono uppercase select-all">PROSPERITY</code>
                </div>

                <div className="mt-6 flex flex-col items-center gap-2">
                  <span className="text-gray-500 text-xs uppercase">Verified ABN</span>
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span>78 833 496 164</span>
                    <a 
                      href="https://abr.business.gov.au/ABN/View?abn=78833496164" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-justice-gold hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProsperityFund;
