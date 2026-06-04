import React, { useState } from 'react';
import { Send, CreditCard, CheckCircle, AlertCircle, Loader2, Target, Mail } from 'lucide-react';
import { createCheckoutSession } from '../lib/db';

const BURST_PACKAGES = [
  {
    id: 'parliamentary',
    name: 'Parliamentary Truth Package',
    description: 'Direct transmission to State and Federal MPs highlighting systemic persecution.',
    targets: '50+ Key Political Representatives',
    fee: 2500, // in cents
    displayFee: '$25.00'
  },
  {
    id: 'media',
    name: 'Investigative Media Package',
    description: 'Exclusive investigation offer sent to major news outlets and independent journalists.',
    targets: '100+ Investigative Journalists',
    fee: 2500,
    displayFee: '$25.00'
  },
  {
    id: 'nacc',
    name: 'NACC Corruption Submission',
    description: 'Formal evidence submission to the National Anti-Corruption Commission.',
    targets: 'NACC & Oversight Bodies',
    fee: 2500,
    displayFee: '$25.00'
  },
  {
    id: 'human_rights',
    name: 'Human Rights Alert',
    description: 'Urgent submission detailing forced psychiatric hospitalisation and torture.',
    targets: 'International Human Rights Watchdogs',
    fee: 2500,
    displayFee: '$25.00'
  }
];

const AdvocacyBurst: React.FC = () => {
  const [email, setEmail] = useState('');
  const [selectedPackageId, setSelectedPackageId] = useState('');
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPackageId) return;

    setStatus('processing');
    setErrorMessage('');

    try {
      const selectedPackage = BURST_PACKAGES.find(p => p.id === selectedPackageId);
      const session = await createCheckoutSession({
        type: 'burst',
        email,
        title: selectedPackage?.name,
        docId: selectedPackageId
      });

      if (session.url) {
        window.location.href = session.url;
      } else {
        throw new Error('Failed to initialize checkout session');
      }
    } catch (error: any) {
      console.error('Advocacy Burst Error:', error);
      setStatus('error');
      setErrorMessage(error.response?.data?.error || error.message || 'An unexpected error occurred');
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto my-12 p-12 bg-gray-900 border border-justice-gold/50 rounded-2xl text-center shadow-2xl">
        <CheckCircle className="w-20 h-20 text-justice-gold mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">Advocacy Burst Triggered!</h2>
        <p className="text-gray-400 mb-8 text-lg">
          The transmission is being sequenced. You will receive a confirmation log via email once the burst is complete.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="bg-justice-gold hover:bg-justice-gold/80 text-black font-bold py-3 px-8 rounded-xl transition-all"
        >
          New Advocacy Burst
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-12 p-8 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-justice-gold/10 p-3 rounded-lg">
          <Send className="w-8 h-8 text-justice-gold" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">Automated Advocacy Burst</h1>
          <p className="text-gray-400">Force the evidence into the hands of those who cannot ignore it.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {BURST_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => setSelectedPackageId(pkg.id)}
            className={`cursor-pointer p-6 rounded-xl border transition-all duration-200 ${
              selectedPackageId === pkg.id
                ? 'bg-justice-gold/5 border-justice-gold ring-1 ring-justice-gold'
                : 'bg-black border-gray-800 hover:border-gray-600'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className={`font-bold text-lg ${selectedPackageId === pkg.id ? 'text-justice-gold' : 'text-white'}`}>
                {pkg.name}
              </h3>
              {selectedPackageId === pkg.id && <div className="w-4 h-4 bg-justice-gold rounded-full" />}
            </div>
            <p className="text-sm text-gray-400 mb-4 h-12">{pkg.description}</p>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <Target className="w-4 h-4" />
              Targets: {pkg.targets}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-black/40 p-8 rounded-xl border border-gray-800">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Sponsor Email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="email"
              required
              className="w-full bg-black border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-justice-gold transition-colors"
              placeholder="advocate@justice.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-justice-blue/10 border border-justice-blue/30 p-4 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-justice-blue shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300">
            <strong>Transmission Fee: $25.00.</strong> This fee covers the secure sequencing and high-deliverability transmission of blockchain-verified documents to selected targets.
          </p>
        </div>

        <button
          type="submit"
          disabled={status === 'processing' || !selectedPackageId}
          className="w-full bg-justice-gold hover:bg-justice-gold/80 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]"
        >
          {status === 'processing' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sequencing Burst...
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5" />
              Pay $25.00 & Trigger Burst
            </>
          )}
        </button>

        {status === 'error' && (
          <p className="text-red-500 text-sm text-center mt-4">{errorMessage}</p>
        )}
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
          Secure Stripe Checkout
        </p>
      </div>
    </div>
  );
};

export default AdvocacyBurst;
