import React from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'SAV', href: '/sav' },
    { label: 'Service Financier', href: '/service-financier' },
    { label: 'Service Commercial', href: '/service-commercial' },
    { label: 'Reprise de Véhicule', href: '/reprise' },
    { label: 'Essai Routier', href: '/essai-routier' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose}>
      <div 
        className="fixed inset-y-0 right-0 w-64 bg-black text-white shadow-lg transform transition-transform duration-300"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <span className="font-bold">Menu</span>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="py-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 hover:bg-white/10 transition"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu; 