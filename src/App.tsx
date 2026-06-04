import { useState, useEffect } from 'react';
import ArchiveBrowser from './components/ArchiveBrowser';
import DossierForm from './components/DossierForm';
import MembershipPricing from './components/MembershipPricing';
import AdvocacyBurst from './components/AdvocacyBurst';
import ProsperityFund from './components/ProsperityFund';
import { Shield, BookOpen, FileSearch, Users, Star, CheckCircle, Send, Heart } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState<'browser' | 'dossier' | 'membership' | 'advocacy' | 'prosperity'>('browser');
  const [userMembership, setUserMembership] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<'success' | 'cancel' | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const payment = urlParams.get('payment');
    const type = urlParams.get('type');
    
    if (payment === 'success') {
      setPaymentStatus('success');
      if (type === 'membership') {
        // In production, this would be verified by the backend
        setUserMembership('Pro'); 
      }
    } else if (payment === 'cancel') {
      setPaymentStatus('cancel');
    }
  }, []);


  return (
    <div className="min-h-screen bg-black font-sans selection:bg-justice-gold/30">
      {paymentStatus === 'success' && (
        <div className="bg-green-600 text-white py-2 px-4 text-center flex items-center justify-center gap-2 animate-in fade-in slide-in-from-top duration-500">
          <CheckCircle className="w-5 h-5" />
          <span>Payment Successful! Your request is being processed.</span>
          <button onClick={() => setPaymentStatus(null)} className="ml-4 underline text-sm">Dismiss</button>
        </div>
      )}
      {paymentStatus === 'cancel' && (
        <div className="bg-red-600 text-white py-2 px-4 text-center animate-in fade-in slide-in-from-top duration-500">
          <span>Payment Cancelled. If you have questions, please contact support.</span>
          <button onClick={() => setPaymentStatus(null)} className="ml-4 underline text-sm">Dismiss</button>
        </div>
      )}
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between md:h-16 items-center py-4 md:py-0">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Shield className="w-8 h-8 text-justice-gold" />
              <span className="text-xl font-bold text-white tracking-tighter uppercase">BARRAN DODGER <span className="text-justice-gold">PORTAL</span></span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {userMembership && (
                <div className="flex items-center gap-2 px-3 py-1 bg-justice-blue/20 border border-justice-blue rounded-full text-justice-blue text-xs font-bold uppercase tracking-widest animate-pulse">
                  <Star className="w-3 h-3 fill-current" />
                  {userMembership} Member
                </div>
              )}
              <button
                onClick={() => setActiveTab('browser')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all text-sm md:text-base ${
                  activeTab === 'browser' 
                  ? 'bg-justice-gold text-black font-bold shadow-[0_0_15px_rgba(255,215,0,0.3)]' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Archive
              </button>
              <button
                onClick={() => setActiveTab('dossier')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all text-sm md:text-base ${
                  activeTab === 'dossier' 
                  ? 'bg-justice-gold text-black font-bold shadow-[0_0_15px_rgba(255,215,0,0.3)]' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                <FileSearch className="w-4 h-4" />
                AI Dossier
              </button>
              <button
                onClick={() => setActiveTab('membership')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all text-sm md:text-base ${
                  activeTab === 'membership'
                  ? 'bg-justice-gold text-black font-bold shadow-[0_0_15px_rgba(255,215,0,0.3)]'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                <Users className="w-4 h-4" />
                Membership
              </button>
              <button
                onClick={() => setActiveTab('advocacy')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all text-sm md:text-base ${
                  activeTab === 'advocacy'
                  ? 'bg-justice-gold text-black font-bold shadow-[0_0_15px_rgba(255,215,0,0.3)]'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                <Send className="w-4 h-4" />
                Advocacy
              </button>
              <button
                onClick={() => setActiveTab('prosperity')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all text-sm md:text-base ${
                  activeTab === 'prosperity'
                  ? 'bg-justice-gold text-black font-bold shadow-[0_0_15px_rgba(255,215,0,0.3)]'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                <Heart className="w-4 h-4" />
                Prosperity
              </button>
              </div>

              </div>
              </div>
              </nav>

      {/* Main Content */}
      <main className="py-8 min-h-[calc(100vh-128px)]">
        {activeTab === 'browser' && <ArchiveBrowser />}
        {activeTab === 'dossier' && <DossierForm />}
        {activeTab === 'membership' && <MembershipPricing />}
        {activeTab === 'advocacy' && <AdvocacyBurst />}
        {activeTab === 'prosperity' && <ProsperityFund />}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Shield className="w-6 h-6 text-justice-gold" />
              <span className="font-bold text-white tracking-tighter">BARRAN DODGER <span className="text-justice-gold">JUSTICE</span></span>
            </div>
            <p className="text-gray-500 text-sm max-w-md mx-auto md:mx-0">
              The Barran Dodger Justice Portal is a productized evidence archive dedicated to the vindication of Dr. Richard McLean through transparency and collective action.
            </p>
          </div>
          <div className="text-center md:text-right text-gray-600 text-xs">
            <p className="mb-2 uppercase tracking-widest text-gray-500 font-bold">Secure Access Only</p>
            <p>© 2026 Forensic Advocacy Group. All rights reserved.</p>
            <p className="mt-1">Metadata verified via BTC Block #840,321</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
