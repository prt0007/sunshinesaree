import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            YourBrand
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Log in
          </Button>
          <Button size="sm">Sign up</Button>
        </div>
      </div>
    </header>
  )
}

