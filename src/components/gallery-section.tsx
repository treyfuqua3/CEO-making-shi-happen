"use client"

import Image from "next/image"

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop",
    alt: "Modern bathroom with marble porcelain walls",
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    alt: "Contemporary glass shower enclosure",
  },
  {
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    alt: "Premium porcelain bathroom interior",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    alt: "Luxury residential bathroom renovation",
  },
  {
    url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop",
    alt: "Clean modern bathroom with natural light",
  },
  {
    url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
    alt: "Elegant bathroom vanity with stone countertop",
  },
]

export function GallerySection() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.15em] text-accent font-medium mb-3">
            Gallery
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            See the Quality
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Premium porcelain bathroom installations that showcase the beauty and
            precision of the system.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Representative project imagery. Your project photos will be featured here as the gallery grows.
        </p>
      </div>
    </section>
  )
}
