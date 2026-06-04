import { useState } from 'react';
import { Check, Shield, Star, Award, Zap } from 'lucide-react';
import { createCheckoutSession } from '../lib/db';

const TIERS = [
  {
    name: 'Bronze',
    price: '$15',
    description: 'Support the cause and stay informed with essential updates.',
    icon: <Zap className="w-8 h-8 text-orange-400" />,
    features: [
      'Weekly Truth Package updates',
      'Access to basic forensic archive',
      'Monthly newsletter',
      'Community forum access'
    ],
    color: 'border-orange-900/50',
    buttonColor: 'bg-orange-600 hover:bg-orange-700'
  },
  {
    name: 'Silver',
    price: '$50',
    description: 'Deeper involvement with advanced forensic insights.',
    icon: <Star className="w-8 h-8 text-gray-300" />,
    features: [
      'All Bronze features',
      'Full Forensic Archive access',
      'AI-ready data exports',
      'Priority "Action Alerts"',
      'Direct evidentiary requests'
    ],
    color: 'border-justice-gold/50',
    buttonColor: 'bg-justice-gold text-black hover:bg-yellow-500 font-bold',
    popular: true
  },
  {
    name: 'Gold',
    price: '$100',
    description: 'Maximum impact. Directly fund major legal and investigative milestones.',
    icon: <Award className="w-8 h-8 text-yellow-300" />,
    features: [
      'All Silver features',
      'Exclusive investigative webinars',
      'Early access to major dossiers',
      'Automated Advocacy Bursts (2/mo)',
      'Direct line to research team'
    ],
    color: 'border-yellow-400/50',
    buttonColor: 'bg-yellow-400 text-black hover:bg-yellow-500 font-bold'
  }
];

const MembershipPricing = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (tierName: string) => {
    setSelectedTier(tierName);
    setIsSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTier) return;

    setIsSubmitting(true);
    try {
      const session = await createCheckoutSession({
        type: 'membership',
        email: formData.email,
        tier: selectedTier
      });
      
      if (session.url) {
        window.location.href = session.url;
      } else {
        throw new Error('Failed to create checkout session');
      }
    } catch (err) {
      console.error('Membership failed:', err);
      alert('Subscription failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <div className="bg-gray-900 border border-justice-gold rounded-2xl p-12 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="bg-justice-gold p-4 rounded-full">
              <Shield className="w-12 h-12 text-black" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Vindication Secured</h2>
          <p className="text-gray-400 text-lg mb-8">
            Thank you for joining the mission. Your contribution directly fuels the engine of justice. 
            Check your inbox for your first Action Alert.
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="text-justice-gold hover:underline font-semibold"
          >
            Back to Memberships
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
          Justice <span className="text-justice-gold">Memberships</span>
        </h2>
        <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
          Choose your level of commitment to transparency. Every membership funds Dr. McLean's ongoing fight for truth and lifelong prosperity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {TIERS.map((tier) => (
          <div 
            key={tier.name}
            className={`relative bg-gray-900 border ${tier.color} rounded-2xl p-8 flex flex-col transition-transform hover:scale-105 ${tier.popular ? 'ring-2 ring-justice-gold' : ''}`}
          >
            {tier.popular && (
              <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-justice-gold text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Effective
              </div>
            )}
            <div className="mb-6">
              <div className="mb-4">{tier.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-gray-400 text-sm h-12">{tier.description}</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">{tier.price}</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-justice-gold flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleSubscribe(tier.name)}
              className={`w-full py-3 rounded-xl transition-all ${tier.buttonColor}`}
            >
              Join the Fight
            </button>
          </div>
        ))}
      </div>

      {selectedTier && (
        <div className="max-w-md mx-auto bg-black border border-gray-800 rounded-2xl p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Subscribe to {selectedTier}</h3>
            <button onClick={() => setSelectedTier(null)} className="text-gray-500 hover:text-white">✕</button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:border-justice-gold outline-none"
                placeholder="Dr. Richard McLean"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:border-justice-gold outline-none"
                placeholder="mclean@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-dashed border-gray-700 mb-6 text-center">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                Secure Stripe Checkout
              </p>
              <p className="text-sm font-bold text-justice-gold mt-1">
                Amount: {TIERS.find(t => t.name === selectedTier)?.price}/mo
              </p>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-justice-gold text-black font-bold py-4 rounded-xl hover:bg-yellow-500 transition-all flex justify-center items-center gap-2"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  Initialize Membership
                </>
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MembershipPricing;
