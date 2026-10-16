import rawData from './portfolio_data.json';
import { PortfolioItem, CategoryKey } from './types';

// Let's type assert rawData as PortfolioItem[]
const items: PortfolioItem[] = rawData as PortfolioItem[];

// Custom high-resolution placeholder images requested by the user for subsequent pages
const PLACEHOLDERS = [
  "https://i.postimg.cc/kGTDn5vk/unnamed.jpg",
  "https://i.postimg.cc/x86q0d3h/unnamed-(1).jpg",
  "https://i.postimg.cc/QCfVXMJm/unnamed-(2).jpg",
  "https://i.postimg.cc/prsy2dJ1/unnamed-(3).jpg",
  "https://i.postimg.cc/tRksdrGs/unnamed-(4).jpg",
  "https://i.postimg.cc/05nzGt1Q/unnamed-(8).jpg"
];

// Custom high-resolution cover artwork mappings requested by the user
const COVER_IMAGES: Record<string, string[]> = {
  "Ótica": [
    "https://i.postimg.cc/QtYf186G/1.png",
    "https://i.postimg.cc/59s9T45j/unnamed.jpg",
    "https://i.postimg.cc/nrSHD2VX/unnamed-(1).jpg",
    "https://i.postimg.cc/6qb9vc6G/unnamed-(2).jpg",
    "https://i.postimg.cc/nrhFrgxz/unnamed-(3).jpg",
    "https://i.postimg.cc/rsZ8rjyr/unnamed-(4).jpg",
    "https://i.postimg.cc/T1NRD024/unnamed-(5).jpg"
  ],
  "Academia": [
    "https://i.postimg.cc/667kcgC0/10.png",
    "https://i.postimg.cc/MKyfMWKj/unnamed.jpg",
    "https://i.postimg.cc/dVwkGzL1/unnamed-(1).jpg",
    "https://i.postimg.cc/4xs7prmv/unnamed-(2).jpg",
    "https://i.postimg.cc/Z54B61C0/unnamed-(3).jpg",
    "https://i.postimg.cc/7ZwGSpfd/unnamed-(6).jpg"
  ],
  "Psicologia": [
    "https://i.postimg.cc/w38cQ7LP/11.png",
    "https://i.postimg.cc/jqMg7mKT/unnamed.jpg",
    "https://i.postimg.cc/XqYsPcfQ/unnamed-(1).jpg",
    "https://i.postimg.cc/C5rcpB7t/unnamed-(2).jpg",
    "https://i.postimg.cc/x8p6VJ5h/unnamed-(3).jpg",
    "https://i.postimg.cc/Hnv61c3W/unnamed-(4).jpg",
    "https://i.postimg.cc/fyq8Qt59/unnamed-(6).jpg"
  ],
  "Mecânica de Carros": [
    "https://i.postimg.cc/fRs1wbpX/12.png",
    "https://i.postimg.cc/br5DxJSN/unnamed.jpg",
    "https://i.postimg.cc/J0FDNnHZ/unnamed-(1).jpg",
    "https://i.postimg.cc/4429k8LM/unnamed-(2).jpg",
    "https://i.postimg.cc/KcpMS9pv/unnamed-(4).jpg",
    "https://i.postimg.cc/T2NDMkNW/unnamed-(5).jpg"
  ],
  "Experiência Militar": [
    "https://i.postimg.cc/BQ9Vg6qg/13.png",
    "https://i.postimg.cc/HW0Jv1nw/2974848989427024099-51784631452.jpg",
    "https://i.postimg.cc/MZ0c3JH3/3048905076199006989-51784631452.jpg",
    "https://i.postimg.cc/66V7bxqz/3077090888291850274-51784631452.jpg",
    "https://i.postimg.cc/ncHX6SQc/3115514544906756938-51784631452.jpg",
    "https://i.postimg.cc/Pr2Chbmm/3196180762523510091-51784631452.jpg",
    "https://i.postimg.cc/9FJDVPGD/3204030779948197832-51784631452.jpg"
  ],
  "Projetos Editoriais": [
    "https://i.postimg.cc/MK7rrSHW/14.png",
    "https://i.postimg.cc/y8s9nQn4/unnamed.png",
    "https://i.postimg.cc/vBc5f4hV/unnamed-(1).png",
    "https://i.postimg.cc/76fS059b/unnamed-(2).png",
    "https://i.postimg.cc/664dQGTk/unnamed-(4).png",
    "https://i.postimg.cc/zXmTHXg1/unnamed-(5).png"
  ],
  "Desenvolvimento WordPress": ["https://i.postimg.cc/hPL33Bvb/16.png"],
  "Flyers Esportivos": [
    "https://i.postimg.cc/ZqMfyY78/17.png",
    "https://i.postimg.cc/CLTY393S/unnamed.jpg",
    "https://i.postimg.cc/90T24Bqg/unnamed-(1).jpg",
    "https://i.postimg.cc/gjRpwK6C/unnamed-(2).jpg",
    "https://i.postimg.cc/Pf8TFdFN/unnamed-(3).jpg",
    "https://i.postimg.cc/C5D0Z4q0/unnamed-(4).jpg",
    "https://i.postimg.cc/zXZ5s499/unnamed-(5).jpg",
    "https://i.postimg.cc/rFXcB7vH/unnamed-(6).jpg",
    "https://i.postimg.cc/J4VmfSf1/unnamed-(9).jpg"
  ],
  "Comunicação Social": [
    "https://i.postimg.cc/DZRYRf12/15.png",
    "https://i.postimg.cc/R00sFQ3g/Areas-do-direito-em-alta-feed-(FAPAS)-(2).jpg",
    "https://i.postimg.cc/YCRDMySc/curso-de-direito-feedcriativo-(2).jpg",
    "https://i.postimg.cc/Z5Hs4Dq9/Diferenciais-que-tornam-o-Direito-da-FAPAS-referencia-na-regiao.jpg",
    "https://i.postimg.cc/R00sFQ31/Post-Instagram-promocao-extensao-de-cilios-chamativo-marrom-e-bege.png"
  ],
  "Loja de Carros": [
    "https://i.postimg.cc/wTmwRdLk/2.png",
    "https://i.postimg.cc/9XbhgKfs/unnamed.jpg",
    "https://i.postimg.cc/L4DpQwsr/unnamed-(1).jpg",
    "https://i.postimg.cc/RCdBpyFt/unnamed-(2).jpg",
    "https://i.postimg.cc/qM7dPwhX/unnamed-(3).jpg",
    "https://i.postimg.cc/Nf0w3D98/unnamed-(4).jpg",
    "https://i.postimg.cc/yYNzMjg9/unnamed-(5).jpg",
    "https://i.postimg.cc/9XbhgKf6/unnamed-(6).jpg",
    "https://i.postimg.cc/T206NFw8/unnamed-(7).jpg"
  ],
  "Barbearia": [
    "https://i.postimg.cc/GmnqkSxS/3.png",
    ...PLACEHOLDERS
  ],
  "Doceria": [
    "https://i.postimg.cc/6q7YhkSn/4.png",
    "https://i.postimg.cc/13T3z2hD/unnamed.jpg",
    "https://i.postimg.cc/0yrNPx3N/unnamed-(1).jpg",
    "https://i.postimg.cc/g2r0md5d/unnamed-(2).jpg",
    "https://i.postimg.cc/Bntv4syn/unnamed-(4).jpg",
    "https://i.postimg.cc/fRkbDZFT/unnamed-(3).jpg",
    "https://i.postimg.cc/P5c5q9sw/unnamed-(6).jpg"
  ],
  "Lancheria": [
    "https://i.postimg.cc/qM316dyx/5.png",
    "https://i.postimg.cc/RF8tMS7h/unnamed.jpg",
    "https://i.postimg.cc/pdWzC1VF/unnamed-(1).jpg",
    "https://i.postimg.cc/cJxwh51T/unnamed-(2).jpg",
    "https://i.postimg.cc/6QMRmLT0/unnamed-(3).jpg",
    "https://i.postimg.cc/bvmbBHdQ/unnamed-(4).jpg",
    "https://i.postimg.cc/9MzT5R7r/unnamed-(6).jpg"
  ],
  "Cervejaria": [
    "https://i.postimg.cc/V6hF57Nh/6.png",
    "https://i.postimg.cc/FsdbztwT/unnamed.jpg",
    "https://i.postimg.cc/3rbC3rfC/unnamed-(1).jpg",
    "https://i.postimg.cc/Nf98FhZH/unnamed-(2).jpg",
    "https://i.postimg.cc/NGP7QGCL/unnamed-(3).jpg",
    "https://i.postimg.cc/3J4jNMzG/unnamed-(4).jpg",
    "https://i.postimg.cc/rF0Gs67C/unnamed-(5).jpg"
  ],
  "Pizzaria": [
    "https://i.postimg.cc/Vs33VgFB/7.png",
    "https://i.postimg.cc/g0rkGfYF/unnamed.jpg",
    "https://i.postimg.cc/13m3j82F/unnamed-(1).jpg",
    "https://i.postimg.cc/BnSnVjkc/unnamed-(2).jpg",
    "https://i.postimg.cc/XYsYSV69/unnamed-(3).jpg",
    "https://i.postimg.cc/htDt5X6r/unnamed-(4).jpg",
    "https://i.postimg.cc/0yVyR81X/unnamed-(5).jpg"
  ],
  "Petshop": [
    "https://i.postimg.cc/DZ0gvV7p/8.png",
    "https://i.postimg.cc/ht1K8KGF/unnamed.jpg",
    "https://i.postimg.cc/jdNx5H05/unnamed-(1).jpg",
    "https://i.postimg.cc/65RW3rJL/unnamed-(2).jpg",
    "https://i.postimg.cc/FscrRy5y/unnamed-(3).jpg",
    "https://i.postimg.cc/y8HVSDs0/unnamed-(4).jpg",
    "https://i.postimg.cc/Vk8YbJzm/unnamed-(6).jpg"
  ],
  "Imobiliária": [
    "https://i.postimg.cc/s2wmCfCZ/9.png",
    "https://i.postimg.cc/brBtwz1D/unnamed.jpg",
    "https://i.postimg.cc/8CRMmgVF/unnamed-(1).jpg",
    "https://i.postimg.cc/pTP80c2L/unnamed-(2).jpg",
    "https://i.postimg.cc/25Qh7NNP/unnamed-(3).jpg",
    "https://i.postimg.cc/QMQ1JZrF/unnamed-(4).jpg",
    "https://i.postimg.cc/NFMXty22/unnamed-(5).jpg"
  ]
};

// Identify universal background assets that appear on almost all pages (e.g. general headers, profile backgrounds)
// We will filter these out of individual project sliders to ensure galleries remain project-specific.
export function getCleanedProjects() {
  const imageCount: Record<string, number> = {};
  
  // Count image occurrences
  items.forEach(item => {
    item.images.forEach(img => {
      imageCount[img] = (imageCount[img] || 0) + 1;
    });
  });

  // Any image appearing in more than 3 pages is considered a "global asset"
  const globalAssets = new Set(
    Object.keys(imageCount).filter(img => imageCount[img] > 3)
  );

  return items.map(item => {
    // Filter out global assets, blank/empty image urls
    const filteredImages = item.images.filter(img => !globalAssets.has(img) && img.length > 5);
    
    // Determine Category Key based on name/path
    let category: CategoryKey = 'social';
    if (item.name === 'Desenvolvimento WordPress') {
      category = 'wordpress';
    } else if (item.name === 'Flyers Esportivos') {
      category = 'sports';
    } else if (item.name === 'Projetos Editoriais') {
      category = 'editorial';
    } else if (item.name === 'Experiência Militar') {
      category = 'military';
    } else if (item.name === 'Página Inicial' || item.name === 'Sobre mim') {
      // These are core sections in the landing page
      category = 'all';
    }

    // Set brief description and default mock metadata if needed
    let shortDesc = '';
    if (item.paragraphs.length > 0) {
      // Pick first paragraph that isn't the project name itself
      const firstValidPara = item.paragraphs.find(p => p !== item.name && p.length > 10);
      shortDesc = firstValidPara || item.paragraphs[0] || '';
    }

    // Use high resolution project images explicitly provided by the user
    const mappedCovers = COVER_IMAGES[item.name];
    let finalImages: string[] = [];

    if (mappedCovers && mappedCovers.length > 0) {
      // Use the exact custom photos configured for this project
      finalImages = mappedCovers;
    } else {
      // Fallback: exclude any expired or forbidden googleusercontent links
      const validImages = filteredImages.filter(img => !img.includes('googleusercontent.com'));
      finalImages = validImages.length > 0 ? validImages : (item.images.filter(img => !img.includes('googleusercontent.com')).length > 0 ? item.images.filter(img => !img.includes('googleusercontent.com')) : PLACEHOLDERS);
    }

    return {
      ...item,
      category,
      shortDesc,
      images: finalImages
    };
  }).filter(item => item.name !== 'Página Inicial' && item.name !== 'Sobre mim'); // we use landing page data manually
}

export function getBiographyData() {
  const home = items.find(i => i.name === 'Página Inicial');
  const about = items.find(i => i.name === 'Sobre mim');
  
  const bioParagraphs = about ? about.paragraphs : (home ? home.paragraphs : []);
  const email = about?.paragraphs.find(p => p.includes('@')) || 'photoshopeditores@gmail.com';
  const phone = about?.paragraphs.find(p => p.replace(/\s/g, '').includes('99664')) || '55 55 99664-9651';

  return {
    name: 'Igor Lopes',
    tagline: 'Designer Gráfico & Criador WordPress',
    subtagline: 'Criando soluções visuais inovadoras há mais de 8 anos!',
    email,
    phone,
    bioParagraphs: bioParagraphs.filter(p => !p.includes('@') && !p.replace(/\s/g, '').includes('99664') && p.length > 15),
    avatar: 'https://i.postimg.cc/KjnHvK2q/Gemini-Generated-Image-3r9o4h3r9o4h3r9o.jpg'
  };
}
