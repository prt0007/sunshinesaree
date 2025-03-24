import { SearchIcon, ShoppingBag, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#f9f5f0] py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-serif font-bold text-[#3a3226]">SUNSINE</h1>
            <h2 className="hidden md:block text-xl font-serif text-[#3a3226]">SUNSINE</h2>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#3a3226] font-medium uppercase tracking-wide">
              Home
            </a>
            <a href="#" className="text-[#3a3226] font-medium uppercase tracking-wide">
              Shop
            </a>
            <a href="#" className="text-[#3a3226] font-medium uppercase tracking-wide">
              About
            </a>
            <a href="#" className="text-[#3a3226] font-medium uppercase tracking-wide">
              Contact
            </a>
            <a href="#" className="text-[#3a3226] font-medium uppercase tracking-wide">
              Terms
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex items-center">
              <Input
                className="w-48 rounded-full border-[#d4b978] bg-[#f9f5f0] pl-4 pr-10 focus-visible:ring-[#d4b978]"
                placeholder="Search..."
              />
              <SearchIcon className="absolute right-3 h-4 w-4 text-[#d4b978]" />
            </div>
            <Button variant="ghost" size="icon" className="text-[#d4b978]">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#d4b978]">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4 uppercase tracking-wider">Shop The Latest</h2>
          <p className="text-xl md:text-2xl text-white mb-8 uppercase tracking-widest">Shop The Latest Collection</p>

          <div className="flex gap-4">
            <Button className="bg-[#d4b978] hover:bg-[#c4a968] text-white border-none rounded-none px-8 uppercase">
              Shop Now
            </Button>
            <Button
              variant="outline"
              className="bg-transparent text-white border-[#d4b978] rounded-none px-8 uppercase hover:bg-[#d4b978]/20"
            >
              Explore
            </Button>
          </div>

          <div className="flex mt-6">
            {[1, 2, 3, 4].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#d4b978"
                className="mx-1"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </section>

      {/* Product Thumbnails */}
      <section className="w-full bg-[#f9f5f0] py-4 border-t border-b border-[#d4b978]/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {["HOME", "SHOP", "COTTON", "DESIGN", "BRDIGNT", "BRDACT"].map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full aspect-square rounded-lg overflow-hidden border-2 border-[#d4b978] mb-2">
                  <div className="w-full h-full bg-[#e9dfc7]"></div>
                </div>
                <span className="text-xs md:text-sm uppercase text-[#3a3226] tracking-wider">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-16 bg-[#f9f5f0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-[#3a3226] mb-12 uppercase tracking-wider">
            Featured Collection
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((product) => (
              <div key={product} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-[#e9dfc7]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#d4b978]">Product Image</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#d4b978]/80 py-2 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center gap-4">
                      <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-[#c4a968]/20">
                        Quick View
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-[#c4a968]/20">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#3a3226]">Luxury Saree</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#d4b978] font-medium">$299.99</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={star <= 4 ? "#d4b978" : "none"}
                        stroke={star > 4 ? "#d4b978" : "none"}
                        strokeWidth="2"
                        className="mx-0.5"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-[#3a3226] text-[#f9f5f0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">SUNSINE</h3>
              <p className="text-sm text-[#f9f5f0]/80">
                Luxury fashion for the modern woman. Elegant designs with traditional craftsmanship.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4 uppercase tracking-wider">Shop</h4>
              <ul className="space-y-2 text-sm text-[#f9f5f0]/80">
                <li>
                  <a href="#" className="hover:text-[#d4b978]">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4b978]">
                    Bestsellers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4b978]">
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4b978]">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 uppercase tracking-wider">Help</h4>
              <ul className="space-y-2 text-sm text-[#f9f5f0]/80">
                <li>
                  <a href="#" className="hover:text-[#d4b978]">
                    Customer Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4b978]">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4b978]">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4b978]">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-sm text-[#f9f5f0]/80">
                <li>Email: info@sunsine.com</li>
                <li>Phone: +1 (800) 123-4567</li>
                <li>Address: 123 Fashion Ave, New York, NY 10001</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#f9f5f0]/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#f9f5f0]/60">© 2025 SUNSINE. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-[#f9f5f0]/60 hover:text-[#d4b978]">
                Privacy Policy
              </a>
              <a href="#" className="text-[#f9f5f0]/60 hover:text-[#d4b978]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

