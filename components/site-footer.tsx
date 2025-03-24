import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t py-6 md:py-12">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 YourBrand. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Terms
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Privacy
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

