import type { Route } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import ContactCTA from "@/components/ContactCTA";
import BlogPost from "@/components/blog/BlogPost";
import SEOHead from "@/components/SEOHead";
import { SchemaArticle, SchemaBreadcrumb } from '@/components/schema';
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";

// Función para generar el HTML string del contenido
const generatePostContent = () => `
    <p class="text-[#666666] leading-relaxed mb-6">Roofing tiles installation represents one of the most critical aspects of Newcastle home construction, providing durable weather protection that can last decades when professionally installed. Quality tile installation combines traditional craftsmanship with modern techniques to ensure optimal performance against Newcastle's coastal winds, heavy rainfall, and salt air exposure. From heritage homes in Hamilton's established streets to modern developments in Charlestown, proper tiles installation determines long-term roof performance and property value preservation throughout the Hunter Region's diverse architectural landscape.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Leading Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Top Roofing Tile Types for Newcastle</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Concrete tiles dominate Newcastle's roofing landscape due to their exceptional durability, cost-effectiveness, and proven performance in coastal conditions. These engineered tiles resist salt air corrosion, maintain colour stability under intense UV exposure, and provide excellent thermal performance for energy efficiency. Available in diverse profiles including flat, curved, and interlocking designs, concrete tiles suit both traditional and contemporary architectural styles prevalent throughout Merewether and Bar Beach properties.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Terracotta tiles offer timeless aesthetic appeal and superior longevity, with many installations lasting over 100 years when properly maintained. Natural clay composition provides excellent thermal mass properties, helping regulate indoor temperatures while maintaining distinctive colour characteristics that complement Newcastle's heritage architecture. Slate tiles represent the premium option, delivering unmatched durability and sophisticated appearance, particularly suitable for prestigious properties requiring long-term performance and architectural distinction throughout Adamstown's established neighbourhoods.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Professional Installation Process</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Professional tiles installation begins with comprehensive roof structure assessment, ensuring adequate load-bearing capacity and proper ventilation design for Newcastle's climate requirements. Structural preparation includes installing quality sarking, positioning timber battens at precise spacing, and establishing proper drainage systems to handle coastal rainfall patterns. This foundational work determines installation success and long-term performance reliability.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Tile laying follows systematic patterns starting from bottom courses and progressing systematically to ridge installations. Professional techniques include precise alignment, appropriate overlap specifications, and proper fastening methods that account for wind loading requirements specific to Newcastle's coastal exposure. Quality installation ensures consistent appearance, optimal weather sealing, and structural integrity that withstands decades of service in challenging environmental conditions.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0;">
        <thead>
          <tr style="background: #F9FAFB;">
            <th class="text-left p-3 border-b-2 border-gray-200">Tile Type</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Lifespan</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Cost per m²</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Best For</th>
          </tr>
        </thead>
        <tbody style="color:#666666;">
          <tr>
            <td class="p-3 border-b border-gray-200">Concrete</td>
            <td class="p-3 border-b border-gray-200">50+ years</td>
            <td class="p-3 border-b border-gray-200">$45-85</td>
            <td class="p-3 border-b border-gray-200">Modern homes</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Terracotta</td>
            <td class="p-3 border-b border-gray-200">100+ years</td>
            <td class="p-3 border-b border-gray-200">$80-150</td>
            <td class="p-3 border-b border-gray-200">Heritage style</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Slate</td>
            <td class="p-3 border-b border-gray-200">100+ years</td>
            <td class="p-3 border-b border-gray-200">$150-300</td>
            <td class="p-3 border-b border-gray-200">Premium homes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="background: rgba(52,152,219,.08); border-left:4px solid #3498DB; padding:16px; border-radius:8px; margin: 32px 0;">
      <h4 style="margin:0 0 6px 0; color:#2C3E50;">Quality Installation Benefits for Newcastle Climate</h4>
      <ul style="margin:0; padding-left:18px; color:#666666;">
        <li>Superior wind resistance designed for coastal exposure patterns</li>
        <li>Enhanced water drainage preventing salt air moisture accumulation</li>
        <li>Proper ventilation maintaining optimal roof cavity conditions</li>
        <li>Professional sealing preventing leak development at vulnerable points</li>
        <li>Long-term performance reducing maintenance costs across decades</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Newcastle Climate Considerations</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Newcastle's coastal environment demands specific installation considerations to ensure optimal tile performance and longevity. High wind exposure requires enhanced fastening systems and careful attention to edge detailing, particularly important for properties exposed to easterly coastal winds. Salt air necessitates corrosion-resistant fasteners and flashing materials that maintain integrity despite constant exposure to marine conditions.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Thermal cycling from Newcastle's variable climate requires expansion joint planning and flexible installation techniques that accommodate material movement without compromising weatherproof integrity. Professional installers understand these local challenges and implement appropriate solutions that ensure reliable performance throughout Newcastle's diverse weather patterns, from summer heat waves to winter storm systems affecting the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Installation Costs & Timeline</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Professional tiles installation costs vary significantly depending on tile selection, roof complexity, and site accessibility, with typical projects ranging from $12,000-35,000 for average Newcastle homes. Premium materials and complex architectural features increase costs, while straightforward installations on accessible properties achieve more economical pricing. Professional assessment provides accurate cost estimates based on specific project requirements and material selections.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Installation timelines typically span 3-7 days for standard residential projects, depending on roof size, weather conditions, and material availability. Professional scheduling accounts for Newcastle's weather patterns, ensuring optimal installation conditions that maximise quality outcomes. Proper project planning minimises disruption while delivering superior installation results that provide decades of reliable service throughout challenging coastal conditions.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Ready for professional tiles installation for your Newcastle home?</strong> Sydney Roofing & Gutters provides comprehensive installation services using premium materials and proven techniques throughout the Hunter Region. Our experienced team understands Newcastle's unique requirements and delivers superior installations backed by comprehensive warranties. Call us at <a href="tel:1300796024" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for a detailed consultation, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule an assessment. For comprehensive installation information, visit our <a href="/new-roof-installation" style="color: #3498DB; text-decoration: none; font-weight: 500;">new roof installation page</a> to explore our professional services.</p>
`;

const postData = {
  title: "Roofing Tiles Installation Newcastle: Expert Guide & Costs",
  excerpt: "Complete guide to roofing tiles installation in Newcastle. Types, process, costs, and professional installation.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-20",
  category: "Installation",
  tags: ["roofing tiles", "tile installation", "concrete tiles", "terracotta tiles"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roofing-tiles-installation",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Roofing Tiles Installation Newcastle | Expert Guide & Costs"
        description="Complete guide to roofing tiles installation in Newcastle. Learn about the best tile types, professional installation process, and costs."
        keywords="roofing tiles newcastle, tile installation, concrete tiles, terracotta tiles, slate roofing, roof tile installation"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Sydney Roofing & Gutters"
        customDescription="Professional roofing services in Newcastle with 24/7 emergency response"
      />
      
      <SchemaArticle 
        headline={postData.title}
        description={postData.excerpt}
        datePublished={postData.publishDate}
        dateModified={postData.publishDate}
        url={`https://sydneyroofingandgutters.com.au/${postData.slug}`}
        image={`https://sydneyroofingandgutters.com.au${postData.featuredImage}`}
      />
      
      <SchemaBreadcrumb 
        items={[
          { name: "Home", url: "https://sydneyroofingandgutters.com.au/" },
          { name: "Blog", url: "https://sydneyroofingandgutters.com.au/blog" },
          { name: "Roofing Tiles Installation Newcastle: Expert Guide & Costs", url: "https://sydneyroofingandgutters.com.au/roofing-tiles-installation" }
        ]}
      />
      
      <Header />
      
      {/* Featured Image - MANTENER fuera del BlogPost */}
      <div className="w-full">
        <div className="w-full overflow-hidden" style={{height: '350px'}}>
          <img 
            src={postData.featuredImage} 
            alt={postData.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Post Header - MANTENER fuera del BlogPost */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <Badge className="mb-4" style={{backgroundColor: '#3498DB', color: '#FFFFFF'}}>
                {postData.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6 leading-tight">
                Roofing Tiles Installation Newcastle: Expert Guide & Costs
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[#666666] text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>20 December 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{postData.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{postData.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BlogPost post={{ content: postData.content, tags: postData.tags }} />
      <ContactCTA />
      <Footer />
      <FloatingBanner />
    </div>
  );
};

export const route = {
  path: "/roofing-tiles-installation/",
  element: <RoofWaterproofingPost />,
};

export default route;