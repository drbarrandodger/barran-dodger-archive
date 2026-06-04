import React, { useState, useEffect } from 'react';
import { getDocuments } from '../lib/db';

interface Document {
  id: string;
  title: string;
  description: string;
  blockchain_hash: string;
  category: string;
}

const ArchiveBrowser: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const data = await getDocuments();
        setDocuments(data);
      } catch (err) {
        console.error('Failed to fetch documents:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDocs();
  }, []);

  const filteredDocs = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-justice-dark min-h-screen text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 border-b border-justice-gold pb-6">
          <h1 className="text-4xl font-bold text-justice-gold mb-2 tracking-tight">Forensic Archive Browser</h1>
          <p className="text-gray-400 text-lg">35 Years of Suppressed Evidence — Blockchain Verified</p>
        </header>

        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by title, description, or category..."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-justice-gold transition-colors shadow-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-4 top-4 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-justice-gold"></div>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredDocs.length > 0 ? (
              filteredDocs.map((doc) => (
                <div key={doc.id} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-justice-gold transition-all cursor-pointer group shadow-md hover:shadow-justice-gold/10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-justice-blue text-xs font-bold uppercase tracking-widest px-2 py-1 rounded text-blue-100">
                          {doc.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-justice-gold transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-gray-400 mt-2 text-sm leading-relaxed">{doc.description}</p>
                    </div>
                    <div className="text-right md:min-w-[200px]">
                      <div className="inline-flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-gray-800">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-mono text-gray-300">Verified: {doc.blockchain_hash}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-gray-900 rounded-xl border border-dashed border-gray-700">
                <p className="text-gray-500 text-xl">No documents found matching your search.</p>
              </div>
            )}
          </div>
        )}

        <footer className="mt-16 text-center text-gray-600 text-sm">
          <p>© 2026 Barran Dodger Justice Portal — Direct Action through Verified Truth</p>
        </footer>
      </div>
    </div>
  );
};

export default ArchiveBrowser;
