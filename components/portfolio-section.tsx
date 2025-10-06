"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Heart, Bookmark, Share2 } from "lucide-react"
import Image from "next/image"

const categories = [
  { 
    name: "All", 
    icon: "/photos/wedding-couple-outdoor.jpg",
    description: "View all photos"
  },
  { 
    name: "Outdoor", 
    icon: "/photos/purple-dress-ocean.jpg",
    description: "Outdoor portrait and landscape photography"
  },
  { 
    name: "Indoor", 
    icon: "/photos/woman-pink-dress.jpg",
    description: "Indoor portrait sessions and studio work"
  },
  { 
    name: "Wedding", 
    icon: "/photos/bride-outdoor.jpg",
    description: "Wedding photography and ceremonies"
  },
  { 
    name: "Cultural", 
    icon: "/photos2/denzel_studios-6.jpg",
    description: "Cultural events and traditional ceremonies"
  },
  { 
    name: "Lifestyle", 
    icon: "/photos/wedding-couple-outdoor.jpg",
    description: "Lifestyle and candid photography"
  },
  { 
    name: "Baby Photoshoot", 
    icon: "/photos/sneakers-balloons.jpg",
    description: "Baby and children photography"
  }
]

// Type for portfolio image objects
interface PortfolioImage {
  src: string;
  category: string;
  title: string;
  date: string;
}

// Function to get all image paths from the photos2 directory
const getPhotos2Images = (): PortfolioImage[] => {
  // List of outdoor images
  const outdoorImages: string[] = [
    'denzel_studios-6.jpg',
    'denzel_studios-17.jpg',
    'denzel_studios-18.jpg',
    'denzel_studios-379.jpgd.jpg',
    'denzel_studios-383.jpgf.jpg',
    'denzel_studios-392.jpgf.jpg',
    'denzel_studios-509.jpgj.jpg',
    'denzel_studios-512.jpgy.jpg',
    'denzel_studios-513.jpgd.jpgg.jpg',
    'denzel_studios-64g.jpg',
    'denzel_studios MG-14k.jpg',
    'denzel_studios MG-173.jpg',
    'denzel_studios MG-18-Recovered-Recoveredfh.jpg',
    'denzel_studios MG-534.jpg',
    'denzel_studios MG-537.jpg',
    'denzel_studios MG-538.jpg',
    'denzel_studios MG-574s.jpg',
    'denzel_studios MG-724t.jpg',
    'denzel_studios MG-753 copy.jpg'
  ];

  // List of cultural images
  const culturalImages: string[] = [
    'IMG_0174.jpg',
    'IMG_0177.jpg',
    'IMG_0185.jpg',
    'IMG_0195.jpg',
    'denzel_studios-6.jpg',
    'denzel_studios-17.jpg',
    'denzel_studios-18.jpg'
  ];

  // All other images will be in the general portfolio
  const otherImages: string[] = [
    'Denzel_shot_it-238gg.jpg',
    'IMG-20250527-WA0019.jpg',
    'IMG_0166.jpg',
    'IMG_0167 (1).jpg',
    'IMG_0167.jpg',
    'IMG_0601-Recovered.jpg',
    'IMG_0609-Recovered.jpg',
    'IMG_0623.jpg',
    'IMG_0680.jpg',
    'IMG_0681.jpg',
    'IMG_0688.jpg',
    'IMG_0698.jpg',
    'IMG_2334i8.jpg',
    'IMG_7807.jpg',
    'IMG_9437f.jpg',
    'IMG_9442.jpg',
    'IMG_9450h.jpg',
    'IMG_9455.jpg',
    'IMG_9456.jpg',
    'IMG_9463.jpg',
    'IMG_9472.jpg',
    'IMG_9474.jpg',
    'IMG_9488.jpg',
    'IMG_9491.jpg',
    'IMG_9491s.jpg',
    'IMG_9504.jpg',
    'IMG_9511.jpg',
    'IMG_9517.jpg',
    'IMG_9897.jpg',
    '_MG_0836.jpgf.jpg',
    '_MG_4703.jpg'
  ];

  // Create photo objects with proper types
  const createPhoto = (filename: string, category: string, index: number): PortfolioImage => {
    // Ensure the filename doesn't start with a slash to avoid double slashes
    const cleanFilename = filename.startsWith('/') ? filename.slice(1) : filename;
    return {
      src: `/${cleanFilename}`,
      category,
      title: filename.split('.')[0].replace(/[-_]/g, ' ').replace('photos2/', ''),
      date: '2024'
    };
  };

  // Combine all photos with their categories
  const outdoorPhotos = outdoorImages.map((image, index) => 
    createPhoto(image, 'Outdoor', index)
  );

  const culturalPhotos = culturalImages.map((image, index) => 
    createPhoto(image, 'Cultural', index)
  );

  const portfolioPhotos = otherImages.map((image, index) => 
    createPhoto(image, 'Portfolio', index)
  );

  // Combine all photos, with cultural photos taking precedence for shared images
  const allPhotos = [...outdoorPhotos, ...culturalPhotos, ...portfolioPhotos];
  
  // Remove duplicates (in case of shared images between categories)
  const uniquePhotos: PortfolioImage[] = [];
  const seen = new Set<string>();
  
  // Process cultural photos first to ensure they take precedence
  for (const photo of [...culturalPhotos, ...outdoorPhotos, ...portfolioPhotos]) {
    if (!seen.has(photo.src)) {
      seen.add(photo.src);
      uniquePhotos.push(photo);
    }
  }
  
  return uniquePhotos;
};

// Get all photos from the photos2 directory
const photos2Images = getPhotos2Images();

// Use only the photos from the photos2 directory
const allPhotos = photos2Images.map(photo => ({
  ...photo,
  src: `/photos2/${photo.src.startsWith('/') ? photo.src.slice(1) : photo.src}`
}));

// Portfolio section metadata
const portfolioMetadata = {
  title: "Portfolio | Denzel Studios - Professional Photography",
  description: "Explore our stunning photography portfolio featuring weddings, portraits, and cultural events. Capturing life's precious moments with artistic excellence.",
  keywords: "photography portfolio, wedding photography, portrait photography, cultural events, professional photographer, Denzel Studios",
  author: "Denzel Studios",
  openGraph: {
    type: "website",
    url: "https://denzelstudios.com/portfolio",
    title: "Portfolio | Denzel Studios - Professional Photography",
    description: "Explore our stunning photography portfolio featuring weddings, portraits, and cultural events.",
    images: [{
      url: photos2Images[0]?.src ? `/photos2/${photos2Images[0].src}` : "/photos2/denzel_studios-6.jpg",
      width: 1200,
      height: 800,
      alt: "Photography by Denzel Studios"
    }]
  }
};

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number>(-1);
  const [displayedPhotos, setDisplayedPhotos] = useState(16);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Set page metadata when component mounts
  useEffect(() => {
    document.title = portfolioMetadata.title;
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', portfolioMetadata.description);
    
    // Add meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', portfolioMetadata.keywords);
    
    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: portfolioMetadata.openGraph.title },
      { property: 'og:description', content: portfolioMetadata.openGraph.description },
      { property: 'og:type', content: portfolioMetadata.openGraph.type },
      { property: 'og:url', content: portfolioMetadata.openGraph.url },
      { property: 'og:image', content: portfolioMetadata.openGraph.images[0].url },
      { property: 'og:image:width', content: String(portfolioMetadata.openGraph.images[0].width) },
      { property: 'og:image:height', content: String(portfolioMetadata.openGraph.images[0].height) },
      { property: 'og:image:alt', content: portfolioMetadata.openGraph.images[0].alt }
    ];
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });
    
    // Cleanup function to remove meta tags when component unmounts
    return () => {
      document.title = 'Denzel Studios';
    };
  }, []);

  const filteredPhotos = selectedCategory === "All" 
    ? allPhotos 
    : allPhotos.filter(photo => photo.category === selectedCategory);
  
  const visiblePhotos = filteredPhotos.slice(0, displayedPhotos);
  const hasMorePhotos = displayedPhotos < filteredPhotos.length;

  const loadMorePhotos = () => {
    if (isLoading || !hasMorePhotos) return;
    
    setIsLoading(true);
    
    // Load more photos in multiples of 16 for better performance
    const nextBatchSize = Math.min(16, filteredPhotos.length - displayedPhotos);
    
    // Use requestAnimationFrame for smoother loading
    const loadBatch = () => {
      setDisplayedPhotos(prev => {
        const newCount = prev + nextBatchSize;
        // Preload next batch of images
        for (let i = prev; i < newCount && i < filteredPhotos.length; i++) {
          const img = new window.Image();
          img.src = filteredPhotos[i].src;
        }
        return newCount;
      });
      setIsLoading(false);
    };
    
    // Small delay to prevent UI freeze
    const timer = setTimeout(loadBatch, 150);
    
    return () => clearTimeout(timer);
  };

  // Auto-load more photos when scrolling (throttled)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (isLoading || !hasMorePhotos) return;
      
      const scrollPosition = window.innerHeight + window.scrollY;
      const bottomPosition = document.documentElement.offsetHeight - 500;
      
      if (scrollPosition >= bottomPosition) {
        // Throttle the scroll events
        if (!timeoutId) {
          timeoutId = setTimeout(() => {
            loadMorePhotos();
            timeoutId = undefined as unknown as NodeJS.Timeout;
          }, 200);
        }
      }
    };

    // Add passive: true for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isLoading, hasMorePhotos, filteredPhotos.length, displayedPhotos]);

  const handlePrevious = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
      setIsLiked(false);
      setIsBookmarked(false);
    }
  }

  const handleNext = () => {
    if (selectedImage < filteredPhotos.length - 1) {
      setSelectedImage(selectedImage + 1);
      setIsLiked(false);
      setIsBookmarked(false);
    }
  }

  return (
    <section className="py-16 px-6 bg-white" id="portfolio">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-[#D97757]">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of photography work across different categories
          </p>
        </div>
        {/* Mobile-optimized category filters with touch scrolling */}
        <div className="flex items-center gap-4 mb-8 pb-3 overflow-x-auto snap-x snap-mandatory px-4 -mx-4 md:mx-0 md:px-0">
          <div className="flex gap-4 px-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all ${
                selectedCategory === category.name
                  ? "bg-black/5 ring-2 ring-black/20"
                  : "hover:bg-gray-100"
              }`}
              title={category.description}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-2 border-2 border-gray-200">
                <Image 
                  src={category.icon} 
                  alt={category.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 64px, 80px"
                />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">
                {category.name}
              </span>
            </button>
          ))}
          </div>
        </div>

        {/* Responsive grid - 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePhotos.map((photo, index) => (
            <motion.div
              key={`${photo.src}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(visiblePhotos.indexOf(photo))}
            >
              <div className="w-full h-full relative">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={index < 6 ? 'eager' : 'lazy'}
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-sm sm:text-base">{photo.title}</h3>
                <p className="text-white/80 text-xs sm:text-sm">{photo.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMorePhotos && (
          <div className="mt-12 text-center">
            {hasMorePhotos ? (
              <button
                onClick={loadMorePhotos}
                disabled={isLoading}
                className="px-6 py-3 bg-[#D97757] text-white rounded-full hover:bg-[#c06a4d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="ml-2">Loading...</span>
                  </>
                ) : 'Load More'}
              </button>
            ) : (
              <p className="text-gray-500">You've reached the end of the gallery</p>
            )}
          </div>
        )}

        {/* Mobile-optimized Lightbox Modal */}
        {selectedImage >= 0 && (
          <div 
            className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center touch-none md:touch-auto"
            onClick={() => setSelectedImage(-1)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-[#D97757] transition-colors z-10"
              onClick={() => setSelectedImage(-1)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Mobile-optimized Navigation arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-2 z-10">
              <button
                className={`p-2 rounded-full bg-black/50 text-white ${selectedImage <= 0 ? 'invisible' : ''}`}
                disabled={selectedImage <= 0}
                onClick={(e) => {
                  e.stopPropagation()
                  if (selectedImage > 0) handlePrevious()
                }}
              >
                <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
              </button>
              
              <button
                className={`p-2 rounded-full bg-black/50 text-white ${selectedImage >= filteredPhotos.length - 1 ? 'invisible' : ''}`}
                disabled={selectedImage >= filteredPhotos.length - 1}
                onClick={(e) => {
                  e.stopPropagation()
                  if (selectedImage < filteredPhotos.length - 1) handleNext()
                }}
              >
                <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
              </button>
            </div>

            {/* Mobile-optimized Image container */}
            <div className="w-full h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="flex-1 flex items-center justify-center p-2">
                {selectedImage >= 0 && selectedImage < filteredPhotos.length ? (
                  <img
                    src={filteredPhotos[selectedImage].src || "/placeholder.svg"}
                    alt={filteredPhotos[selectedImage].title || 'Portfolio image'}
                    className="max-w-full max-h-[70vh] md:max-h-[80vh] w-auto h-auto object-contain"
                  />
                ) : null}
              </div>

              {/* Mobile-optimized interaction bar */}
              <div className="bg-black/80 text-white p-3 md:p-4 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsLiked(!isLiked);
                      }} 
                      className="p-2 -ml-2 active:scale-95 transition-transform"
                      aria-label={isLiked ? 'Unlike' : 'Like'}
                    >
                      <Heart className={`w-5 h-5 md:w-6 md:h-6 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                    </button>
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 -mr-2 active:scale-95 transition-transform"
                      aria-label="Share"
                    >
                      <Share2 className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsBookmarked(!isBookmarked);
                    }} 
                    className="p-2 active:scale-95 transition-transform"
                  >
                    <Bookmark className={`w-5 h-5 md:w-6 md:h-6 ${isBookmarked ? "fill-current" : ""}`} />
                  </button>
                </div>
                <div className="mt-2 px-1">
                  <h3 className="font-bold text-base md:text-lg">
                    {selectedImage >= 0 && selectedImage < filteredPhotos.length ? filteredPhotos[selectedImage].title : ''}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300">
                    {selectedImage >= 0 && selectedImage < filteredPhotos.length ? 
                      `${filteredPhotos[selectedImage].category} • ${filteredPhotos[selectedImage].date}` : ''}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
