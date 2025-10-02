import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/denzel-logo-black.png"
              alt="Denzel Photo Studio"
              width={180}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-sm font-medium hover:text-[#D97757] transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-[#D97757] transition-colors">
              About Us
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-[#D97757] transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-[#D97757] transition-colors">
              Portfolio
            </Link>
          </nav>

          <Button className="bg-[#D97757] hover:bg-[#D97757]/90 text-white font-semibold">Book a Session</Button>
        </div>
      </div>
    </header>
  )
}
