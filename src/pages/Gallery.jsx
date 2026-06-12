import { useState } from "react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "health", name: "Medical Camps" },
    { id: "agriculture", name: "Agriculture" },
    { id: "community", name: "Community Welfare" },
  ];

  const galleryItems = [
    { id: 1, image: "/images/stage_event.jpg", title: "Health Camp Assembly", description: "Sri C.V. Chandrashekar and trust medical volunteers addressing the village attendees.", category: "health" },
    { id: 2, image: "/images/oxen_plowing.jpg", title: "Traditional Plowing Guidance", description: "Supporting traditional plowing techniques alongside soil testing methodologies.", category: "agriculture" },
    { id: 3, image: "/images/stage_empty.jpg", title: "Medical Camp Backdrop Banner", description: "Pre-event arrangements showing the collaboration with Srinivasa Hospital Mangalore.", category: "health" },
    { id: 4, image: "/images/farmers_illustration.jpg", title: "Paddy Crop Management", description: "Educational graphic utilized for biological crop protection training.", category: "agriculture" },
    { id: 5, image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop", title: "Afforestation Drive", description: "Sponsoring fruit saplings for school children to promote local soil retention.", category: "community" },
    { id: 6, image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop", title: "Rural Primary School Support", description: "Distributing notebooks and stationary bags to rural children from low-income families.", category: "community" },
    { id: 7, image: "https://images.unsplash.com/photo-1605000797439-75a150088d44?q=80&w=800&auto=format&fit=crop", title: "Bio-Fertilizer Distribution", description: "Educating farmers on chemical-free biological sprays to increase yield safely.", category: "agriculture" },
    { id: 8, image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop", title: "Youth Health Checkup Campaign", description: "Pediatricians and general physicians addressing primary health concerns for students.", category: "health" },
  ];

  const filteredItems = activeFilter === "all" ? galleryItems : galleryItems.filter((i) => i.category === activeFilter);
  const categoryLabel = { health: "Medical Camp", agriculture: "Agriculture", community: "Community" };

  return (
    <div className="font-sans text-charcoal bg-primary-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-green bg-accent-green/10 px-3 py-1 rounded-full">Our Gallery</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl leading-tight">
            Moments in the <span className="text-accent-green">Community</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">A visual documentation of health checkup drives, organic farming workshops, and rural developmental actions.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-2.5 rounded-full font-display font-bold text-xs sm:text-sm transition-all duration-300 ${activeFilter === cat.id ? "bg-charcoal text-white shadow-md" : "bg-white text-gray-500 hover:bg-accent-green/10 hover:text-accent-green border border-accent-green/10"}`}>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} onClick={() => setSelectedImage(item)}
              className="bg-white rounded-3xl overflow-hidden border border-accent-green/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="w-10 h-10 rounded-full bg-white text-charcoal flex items-center justify-center text-lg shadow-lg font-bold">⤢</span>
                </div>
              </div>
              <div className="p-5 text-left">
                <span className="text-[10px] font-bold text-accent-green uppercase tracking-wider">{categoryLabel[item.category]}</span>
                <h3 className="font-display font-bold text-base text-charcoal leading-snug mt-1 group-hover:text-accent-green transition-colors">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <span className="text-4xl">📷</span>
            <p className="mt-2 text-sm">No photos found in this category.</p>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/90 backdrop-blur-md">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full border border-accent-green/20 flex flex-col md:flex-row">
              <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 bg-charcoal/50 hover:bg-charcoal text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm z-30 transition-colors">✕</button>
              <div className="md:w-2/3 bg-black flex items-center justify-center aspect-[4/3] md:aspect-auto">
                <img src={selectedImage.image} alt={selectedImage.title} className="max-h-[80vh] md:max-h-full object-contain" />
              </div>
              <div className="md:w-1/3 p-8 flex flex-col justify-between text-left space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-accent-green bg-accent-green/15 px-3 py-1 rounded-full uppercase tracking-wider">{categoryLabel[selectedImage.category]}</span>
                  <h3 className="font-display font-black text-2xl text-charcoal leading-tight">{selectedImage.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{selectedImage.description}</p>
                </div>
                <button onClick={() => setSelectedImage(null)} className="w-full bg-charcoal hover:bg-accent-green text-white py-3 rounded-xl font-display font-bold text-sm tracking-wider transition-colors duration-300">
                  Back to Gallery
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
