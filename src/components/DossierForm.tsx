import { useState, useEffect } from 'react';
import { FileText, CreditCard, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { createCheckoutSession, getDocuments, saveDossierRequest } from '../lib/db';

interface Document {
  id: string;
  title: string;
  agency?: string;
  category?: string;
}

const DossierForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [selectedDocId, setSelectedDocId] = useState('');
  const [customAgency, setCustomAgency] = useState('');
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loadingDocs, setLoadingDocs] = useState(true);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const data = await getDocuments();
        // Sort documents by title to make selection easier
        const sorted = [...data].sort((a, b) => a.title.localeCompare(b.title));
        setDocuments(sorted);
      } catch (err) {
        console.error('Failed to fetch documents:', err);
      } finally {
        setLoadingDocs(false);
      }
    };
    fetchDocs();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') === 'success' && params.get('type') === 'dossier') {
      setStatus('processing'); 
      const finalizeRequest = async () => {
        try {
          const storedEmail = localStorage.getItem('pending_dossier_email') || 'verified@supporter.org';
          const storedTitle = localStorage.getItem('pending_dossier_title') || 'Verified Forensic Dossier Request';
          
          await saveDossierRequest({
            id: `dossier-${Date.now()}`,
            title: storedTitle,
            email: storedEmail
          });
          
          setStatus('success');
          
          // Clear storage
          localStorage.removeItem('pending_dossier_email');
          localStorage.removeItem('pending_dossier_title');
          localStorage.removeItem('pending_dossier_docId');

          // Clear query params
          window.history.replaceState({}, '', window.location.pathname);
        } catch (err) {
          console.error('Failed to finalize dossier request:', err);
          setStatus('error');
          setErrorMessage('Payment succeeded but failed to record the request.');
        }
      };
      finalizeRequest();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDocId) return;
    setStatus('processing');
    try {
      const docTitle = documents.find(d => d.id === selectedDocId)?.title || customAgency;
      
      // Save details to localStorage before redirect
      localStorage.setItem('pending_dossier_email', email);
      localStorage.setItem('pending_dossier_title', docTitle);
      localStorage.setItem('pending_dossier_docId', selectedDocId);

      const session = await createCheckoutSession({
        type: 'dossier',
        email: email,
        docId: selectedDocId,
        title: docTitle
      });
      if (session.url) {
        window.location.href = session.url;
      } else {
        throw new Error('Failed to create checkout session');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Failed to process request. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-gray-900 border border-justice-gold/30 p-8 rounded-xl text-center max-w-2xl mx-auto my-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Dossier Request Received!</h2>
        <p className="text-gray-400 mb-6">
          Our forensic engine is now synthesizing the evidence.
          You will receive the report at <strong>{localStorage.getItem('pending_dossier_email') || email || 'your email'}</strong> within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="bg-justice-gold hover:bg-justice-gold/80 text-black font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Request Another Dossier
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-12 p-8 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-justice-gold/10 p-3 rounded-lg">
          <FileText className="w-8 h-8 text-justice-gold" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">AI Forensic Dossier</h1>
          <p className="text-gray-400">On-demand synthesis of evidence for justice and accountability.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Requestor Email</label>
          <input
            type="email"
            required
            className="w-full bg-black border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-justice-gold transition-colors"
            placeholder="investigator@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Select Target Document or Agency</label>
          <select
            className="w-full bg-black border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-justice-gold transition-colors"
            value={selectedDocId}
            onChange={(e) => setSelectedDocId(e.target.value)}
            disabled={loadingDocs}
          >
            <option value="">{loadingDocs ? 'Loading archive...' : '-- Choose from archive --'}</option>
            {documents.map(doc => (
              <option key={doc.id} value={doc.id}>{doc.title} {doc.agency ? `(${doc.agency})` : ''}</option>
            ))}
            {!loadingDocs && <option value="custom">Other / Specific Agency...</option>}
          </select>
        </div>
        {selectedDocId === 'custom' && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Specify Agency or Inquiry Details</label>
            <textarea
              required
              className="w-full bg-black border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-justice-gold transition-colors h-32"
              placeholder="e.g. Detailed synthesis of all evidence related to the 1989 Treasury audit suppression..."
              value={customAgency}
              onChange={(e) => setCustomAgency(e.target.value)}
            />
          </div>
        )}
        <div className="bg-justice-blue/10 border border-justice-blue/30 p-4 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-justice-blue shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300">
            <strong>Fee: $49.00 per report.</strong> This fee covers the high-density AI compute required to cross-reference
            788+ blockchain-verified documents and generate an actionable forensic dossier.
          </p>
        </div>
        <button
          type="submit"
          disabled={status === 'processing' || (loadingDocs && !selectedDocId)}
          className="w-full bg-justice-gold hover:bg-justice-gold/80 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]"
        >
          {status === 'processing' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              {new URLSearchParams(window.location.search).get('payment') === 'success' ? 'Synthesizing Forensic Dossier...' : 'Processing Secure Payment...'}
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5" />
              Pay $49.00 & Generate Dossier
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

export default DossierForm;
