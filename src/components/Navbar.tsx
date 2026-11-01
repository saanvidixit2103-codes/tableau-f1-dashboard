import { useEffect, useState } from "react";
import { Menu, X, Gauge } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Project", href: "#project" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Story", href: "#story" },
  { label: "Insights", href: "#insights" },
  { label: "Drivers", href: "#drivers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-track-950/90 shadow-lg backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
        <a href="#home" className="flex items-center gap-2 rounded-md" onClick={closeMenu}>
          <Gauge className="h-6 w-6 text-accent" aria-hidden="true" />
          <span className="font-display text-sm font-bold uppercase tracking-widest text-white">
            F1<span className="text-accent">Intel</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-neutral-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a href="#contact" className="btn-primary px-5 py-2 text-sm">
              Contact
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-track-950/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-neutral-200 hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#contact" onClick={closeMenu} className="btn-primary w-full">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
