import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/denzel-logo-black.png"
              alt="Denzel Photo Studio"
              width={150}
              height={30}
              className="h-6 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional photography services capturing your most precious moments with creativity and precision.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#home" className="text-sm text-muted-foreground hover:text-[#D97757] transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-[#D97757] transition-colors">
                About Us
              </Link>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-[#D97757] transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-[#D97757] transition-colors">
                Portfolio
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:giftmulele@gmail.com" className="hover:text-[#D97757] transition-colors">
                Email: giftmulele@gmail.com
              </a>
              <a href="tel:+260770933543" className="hover:text-[#D97757] transition-colors">
                Phone: +260 770 933 543
              </a>
              <p>Location: Lusaka, Zambia</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Denzel Photography. All Rights Reserved</p>
          <p className="text-sm text-muted-foreground">
            Designed By <span className="text-[#D97757] font-semibold">Joshua Muhali</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
