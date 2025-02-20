interface NavigationLink {
  href: string;
  label: string;
}

interface NavigationLinks {
  [key: string]: NavigationLink[];
}

export const navigationLinks: NavigationLinks = {
  main: [
    {
      href: "/catalogue",
      label: "Véhicules",
    },
    {
      href: "/services",
      label: "Services",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ],
  nosVoitures: [
    { href: "/catalogue/tous", label: "Tous nos véhicules" },
    { href: "/catalogue/diesel", label: "Diesel" },
    { href: "/catalogue/essence", label: "Essence" },
    { href: "/catalogue/hybride", label: "Hybride" },
    { href: "/catalogue/electrique", label: "Électrique" },
  ],
  acheter: [
    { href: "/services#essai", label: "Réserver un essai" },
    { href: "/services#reprise", label: "Reprise de Véhicule" },
    { href: "/services#financement", label: "Financement" },
  ],
  serviceInterne: [
    { href: "/admin/support", label: "IT / Support technique" },
    { href: "/admin/recrutement", label: "Recrutement" },
    { href: "/admin/employes", label: "Gestion des employés" },
  ],
  contact: [
    { href: "/contact", label: "Nous contacter" },
    { href: "/contact#agences", label: "Nos agences" },
  ],
  experience: [
    { href: "/a-propos", label: "Notre entreprise" },
    { href: "/a-propos#histoire", label: "Notre histoire" },
    { href: "/a-propos#innovations", label: "Nos innovations" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions Légales" },
    {
      href: "/politique-confidentialite",
      label: "Politique de confidentialité",
    },
    { href: "/cookies", label: "Consentement cookies" },
    { href: "/cgu", label: "CGU" },
  ],
};

export default navigationLinks;
