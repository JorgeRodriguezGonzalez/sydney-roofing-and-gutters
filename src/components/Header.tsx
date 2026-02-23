import { useMemo, useState } from "react";
import { Link } from "react-router";
import { Menu, Phone, Headphones, ChevronDown } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

type MenuLink = { label: string; href: string };

type MenuSection = {
  key: string;
  label: string;
  href?: string;
  children?: Array<MenuLink | MenuSection>;
};

const PHONE_NUMBER = "1300796024";
const PHONE_TEL = `tel:${PHONE_NUMBER}`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const menuTree = useMemo<MenuSection[]>(
    () => [
      { key: "home", label: "Home", href: "/" },
      {
        key: "roofing",
        label: "Roofing Service",
        href: "/roofing-service/",
        children: [
          { label: "Residential Roofing", href: "/residential-roofing/" },
          { label: "Commercial Roofing service", href: "/commercial-roofing-service/" },
          {
            key: "metal",
            label: "Metal Roofing",
            href: "/metal-roofing/",
            children: [
              { label: "Metal Residential Roofing", href: "/residential-metal-roofing/" },
              { label: "Commercial Metal Roofing", href: "/commercial-metal-roofing/" },
              { label: "Downpipe Installation", href: "/downpipe-installation/" },
              { label: "Colorbond Installation", href: "/colorbond-installation/" },
            ],
          },
          { label: "Roof Restoration", href: "/roof-restoration/" },
          { label: "Roof Cleaning Services", href: "/roof-cleaning-services/" },
          { label: "Re-roofing Sydney", href: "/re-roofing-sydney/" },
          { label: "Roof Painting Sydney", href: "/roof-painting-sydney/" },
          { label: "Roof Flashing", href: "/roof-flashing/" },
          { label: "Slate Roofing", href: "/slate-roofing/" },
          {
            label: "Roof Leak Detection and Repair Sydney",
            href: "/roof-leak-detection-and-repair-sydney/",
          },
          { label: "Re-roofing Sydney", href: "/re-roofing-sydney/" },
          { label: "Roof Painting Sydney", href: "/roof-painting-sydney/" },
        ],
      },
      {
        key: "guttering",
        label: "Guttering Services",
        href: "/guttering-services/",
        children: [
          { label: "Gutter Installation", href: "/gutter-installation/" },
          { label: "Gutter Replacement", href: "/gutter-replacement/" },
          { label: "Gutter Repairs", href: "/gutter-repairs/" },
          { label: "Gutter Cleaning", href: "/gutter-cleaning/" },
          { label: "Corrugated Roofing Sydney", href: "/corrugated-roofing-sydney/" },
          { label: "Gutter Protection", href: "/gutter-protection/" },
          { label: "Aluminium Gutter Installation", href: "/aluminium-gutter-installation/" },
        ],
      },
      {
        key: "areas",
        label: "Service Areas",
        // parent "#"
        children: [
          { label: "Roofing Services Eastern Suburbs", href: "/roofing-eastern-suburbs/" },
          { label: "Roofing Services North Shore", href: "/roofing-north-shore/" },
          { label: "Roofing Services Sydney CBD", href: "/roofing-sydney-cbd/" },
          { label: "Roofing Services Northern Beaches", href: "/roofing-northern-beaches/" },
          { label: "Roofing Services St George Area", href: "/roofing-st-george-area/" },
          { label: "Roofing Services Sutherland Shire", href: "/roofing-sutherland-shire/" },
          { label: "Roofing Services South West Sydney", href: "/roofing-south-west-sydney/" },
          { label: "Roofing Services Western Sydney", href: "/roofing-western-sydney/" },
          { label: "Roofing Services Inner West Sydney", href: "/roofing-inner-west-sydney/" },
          { label: "Roofing Services Hills District", href: "/roofing-hills-district/" },
        ],
      },
      {
        key: "guides",
        label: "Guides",
        href: "/guides/",
        children: [],
      },
      { key: "calculators", label: "Calculators", href: "/calculator/" },
    ],
    []
  );

  const closeMenu = () => setMenuOpen(false);

  // Menu hover: text black, hover text white, hover bg green (#16c31f)
  const linkBase =
    "block w-full rounded-md px-3 py-2 font-montserrat text-[15px] font-medium text-[#000000] transition-colors hover:bg-[#16c31f] hover:text-[#ffffff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16c31f]/50";

  const toggleKey = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderNode = (node: MenuLink | MenuSection, depth = 0) => {
    // Leaf
    if (!("children" in node) || !node.children?.length) {
      if (!("href" in node)) return null;
      return (
        <SheetClose asChild key={`${node.label}-${node.href}`}>
          <Link
            to={node.href}
            onClick={closeMenu}
            className={cn(linkBase, depth > 0 && "text-[14px]")}
          >
            {node.label}
          </Link>
        </SheetClose>
      );
    }

    const section = node as MenuSection;
    const isOpen = !!openSections[section.key];

    return (
      <Collapsible open={isOpen} key={section.key}>
        <div className="flex items-center gap-2">
          {section.href ? (
            <SheetClose asChild>
              <Link to={section.href} onClick={closeMenu} className={cn(linkBase, "flex-1")}>
                {section.label}
              </Link>
            </SheetClose>
          ) : (
            <button
              type="button"
              onClick={() => toggleKey(section.key)}
              className={cn(linkBase, "flex-1 text-left")}
            >
              {section.label}
            </button>
          )}

          <button
            type="button"
            aria-label={isOpen ? `Collapse ${section.label}` : `Expand ${section.label}`}
            onClick={() => toggleKey(section.key)}
            className="grid h-9 w-9 place-items-center rounded-md text-[#000000] transition-colors hover:bg-[#16c31f] hover:text-[#ffffff]"
          >
            <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
          </button>
        </div>

        <CollapsibleContent>
          <div className={cn("mt-2 space-y-1 border-l border-black/10 pl-3", depth === 0 && "ml-2")}>
            {section.children.map((child) => renderNode(child as any, depth + 1))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top bar */}
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex items-center justify-between gap-3 py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src="/images/Sydney-Roofing-and-Gutters.webp"
              alt="Sydney Roofing and Gutters"
              className="h-12 w-auto sm:h-14 lg:h-16"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Center icons banner (desktop) */}
          <div className="hidden lg:flex flex-1 justify-center px-6">
            <img
              src="/images/icons-banner.webp"
              alt="Sydney Roofing and Gutters services icons"
              className="h-16 w-auto max-w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Phone (desktop) */}
            <div className="hidden md:flex flex-col items-start">
              <a
                href={PHONE_TEL}
                className="group inline-flex items-center gap-2"
                aria-label={`Call ${PHONE_NUMBER}`}
              >
                <Phone className="h-6 w-6 text-[#ff1616]" aria-hidden="true" />
                <span className="font-exo text-[28px] font-bold leading-none text-[#000000] transition-colors group-hover:text-[#ff1616]">
                  {PHONE_NUMBER}
                </span>
              </a>
              <a href={PHONE_TEL} className="font-montserrat text-sm font-medium text-[#000000]">
                Call for a FREE Quote Now!
              </a>
            </div>

            {/* Phone (mobile icon) */}
            <a
              href={PHONE_TEL}
              className="md:hidden grid h-10 w-10 place-items-center rounded-md border border-black/10"
              aria-label={`Call ${PHONE_NUMBER}`}
            >
              <Phone className="h-5 w-5 text-[#ff1616]" aria-hidden="true" />
            </a>

            {/* CTA */}
            <a
              href="#quote"
              className="inline-flex h-11 items-center justify-center rounded-sm bg-[#169fc3] px-5 font-montserrat text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#ff1616] sm:h-12 sm:px-7 lg:h-14 lg:px-10 lg:text-base"
            >
              GET QUOTE
            </a>

            {/* Hamburger */}
            <Sheet
              open={menuOpen}
              onOpenChange={(next) => {
                setMenuOpen(next);
                if (!next) setOpenSections({});
              }}
            >
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="grid h-11 w-11 place-items-center rounded-md border border-black/10 text-[#000000] sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[320px] p-0 sm:w-[420px]">
                <div className="h-full overflow-auto p-6">
                  <div className="mb-4">
                    <div className="text-lg font-semibold">Menu</div>
                    <div className="mt-1 text-sm text-muted-foreground">Navigate the site</div>
                  </div>

                  <nav className="space-y-2">{menuTree.map((node) => renderNode(node))}</nav>

                  <div className="mt-6 border-t border-black/10 pt-6">
                    <a
                      href={PHONE_TEL}
                      className="group inline-flex items-center gap-2"
                      aria-label={`Call ${PHONE_NUMBER}`}
                    >
                      <Phone className="h-5 w-5 text-[#ff1616]" aria-hidden="true" />
                      <span className="font-exo text-xl font-bold text-[#000000] transition-colors group-hover:text-[#ff1616]">
                        {PHONE_NUMBER}
                      </span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Teal callout bar */}
      <div className="bg-[#169fc3]">
        <div className="mx-auto max-w-[1200px] px-4">
          <a
            href="#quote"
            className="flex items-center justify-center gap-2 py-3 text-center font-montserrat text-sm font-medium text-white sm:text-base"
          >
            <Headphones className="h-4 w-4" aria-hidden="true" />
            Sydneys Roofing &amp; Guttering Experts. Click Here For a Free Quote!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;