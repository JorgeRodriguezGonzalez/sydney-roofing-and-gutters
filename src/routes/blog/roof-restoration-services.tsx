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
    <p class="text-[#666666] leading-relaxed mb-6">Roof restoration services in Newcastle provide comprehensive solutions to extend roof lifespan, improve performance, and enhance property value through professional cleaning, repair, and rejuvenation processes. Newcastle's coastal environment with salt air, UV exposure, and variable weather conditions creates unique challenges that require specialised restoration techniques and materials. Professional restoration addresses common issues including tile deterioration, colour fading, minor leaks, and surface degradation while maintaining structural integrity. Expert restoration services deliver cost-effective alternatives to complete replacement, offering significant savings while improving roof aesthetics and functionality across Merewether, Hamilton, The Junction, and surrounding Hunter Region areas.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Top Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Complete Roof Restoration Process</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Professional roof restoration begins with comprehensive inspection to assess structural condition, identify damage, and determine restoration requirements specific to Newcastle's coastal conditions. High-pressure cleaning removes accumulated dirt, moss, algae, and salt deposits that compromise roof performance and appearance. Damaged tiles receive professional repair or replacement using compatible materials that match existing roof systems. Surface preparation includes filling cracks, sealing joints, and addressing minor structural issues before coating application.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Premium coating systems provide protective barriers against UV radiation, moisture penetration, and coastal corrosion while enhancing colour and finish durability. Professional application ensures uniform coverage, proper adhesion, and optimal performance throughout Newcastle's challenging weather conditions. Quality restoration includes ridge capping repair, pointing renewal, and gutter maintenance to deliver comprehensive roof rejuvenation. Final inspection confirms completion standards and provides documentation for warranty coverage and maintenance scheduling.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Benefits of Professional Restoration</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Extended roof lifespan represents the primary benefit of professional restoration, with quality services adding 10-15 years to roof performance when properly maintained. Improved energy efficiency results from reflective coating systems that reduce heat absorption and cooling costs during Newcastle's warm summer months. Enhanced curb appeal significantly increases property value through restored colour, improved appearance, and professional finish quality. Cost savings compared to complete replacement typically range from 40-60%, providing excellent return on investment for Newcastle homeowners.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Weather protection improves through sealed surfaces that prevent water penetration, reduce maintenance requirements, and protect structural elements from coastal corrosion. Professional restoration addresses minor issues before they develop into major problems requiring expensive repairs or premature replacement. Quality workmanship includes comprehensive warranties that provide long-term protection and peace of mind for significant investments in roof restoration.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0">
        <thead>
          <tr style="background: #F9FAFB">
            <th class="text-left p-3 border-b-2 border-gray-200">Service</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Purpose</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Duration</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Cost Range</th>
          </tr>
        </thead>
        <tbody style="color: #666666">
          <tr>
            <td class="p-3 border-b border-gray-200">High-Pressure Cleaning</td>
            <td class="p-3 border-b border-gray-200">Remove dirt & algae</td>
            <td class="p-3 border-b border-gray-200">1-2 days</td>
            <td class="p-3 border-b border-gray-200">$15-25/m²</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Tile Repair & Replacement</td>
            <td class="p-3 border-b border-gray-200">Fix damaged sections</td>
            <td class="p-3 border-b border-gray-200">2-3 days</td>
            <td class="p-3 border-b border-gray-200">$35-55/m²</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Protective Coating</td>
            <td class="p-3 border-b border-gray-200">Seal & colour restoration</td>
            <td class="p-3 border-b border-gray-200">3-5 days</td>
            <td class="p-3 border-b border-gray-200">$25-40/m²</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Complete Restoration</td>
            <td class="p-3 border-b border-gray-200">Full roof rejuvenation</td>
            <td class="p-3 border-b border-gray-200">5-10 days</td>
            <td class="p-3 border-b border-gray-200">$45-75/m²</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="background: rgba(52,152,219,.08); border-left: 4px solid #3498DB; padding: 16px; border-radius: 8px; margin: 32px 0">
      <h4 style="margin: 0 0 6px 0; color: #2C3E50">Restoration Benefits for Newcastle's Coastal Climate</h4>
      <ul style="margin: 0; padding-left: 18px; color: #666666">
        <li>Salt-resistant coatings protect against coastal corrosion and deterioration</li>
        <li>UV-reflective systems reduce heat absorption and cooling costs</li>
        <li>Professional cleaning removes moss and algae common in humid conditions</li>
        <li>Waterproof sealing prevents damage from frequent rainfall and storms</li>
        <li>Regular maintenance schedules preserve restoration benefits long-term</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">When to Restore vs Replace Your Roof</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Roof age significantly influences restoration suitability, with roofs under 20 years typically benefiting from restoration while older systems may require replacement consideration. Structural integrity assessment determines whether underlying framework supports restoration investment or requires complete replacement for safety and performance. Damage extent evaluation considers repair costs versus replacement benefits, with minor to moderate issues favouring restoration approaches.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Professional inspection identifies structural problems, water damage, or safety concerns that necessitate replacement rather than restoration services. Cost-benefit analysis compares restoration expenses against replacement costs, considering long-term performance expectations and warranty coverage. Expert assessment ensures appropriate decision-making based on specific roof conditions, homeowner goals, and budget considerations for optimal outcomes.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Restoration Costs & Timeline</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Restoration costs vary based on roof size, condition, materials, and access requirements, with typical Newcastle projects ranging from $8,000-15,000 for average homes. Premium coating systems and extensive repairs increase costs while delivering superior performance and extended warranties. Weather conditions affect project timelines, with optimal scheduling during Newcastle's drier months ensuring proper curing and application conditions for long-lasting results.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Ready to restore your Newcastle roof with professional expertise?</strong> Sydney Roofing & Gutters provides comprehensive restoration services throughout the Hunter Region, combining quality materials with expert craftsmanship for exceptional results. Our experienced team understands Newcastle's unique coastal challenges and delivers restoration solutions that extend roof life and enhance property value. Call us at <a href="tel:1300796024" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for a detailed restoration assessment, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule your consultation. Explore our comprehensive <a href="/roof-restoration" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof restoration services</a> to discover how we can transform your roof's performance and appearance.</p>
`;

const postData = {
  title: "Roof Restoration Services Newcastle: Complete Guide",
  excerpt: "Professional roof restoration services in Newcastle. Process, benefits, costs, and when to restore vs replace your roof.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-31",
  category: "Services",
  tags: ["roof restoration", "restoration services", "roof cleaning", "roof painting"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roof-restoration-services",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Roof Restoration Services Newcastle | Complete Guide"
        description="Professional roof restoration services in Newcastle. Learn about the restoration process, benefits, costs, and when to restore your roof."
        keywords="roof restoration newcastle, restoration services, roof cleaning, roof painting, roof rejuvenation"
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
          { name: "Roof Restoration Services Newcastle: Complete Guide", url: "https://sydneyroofingandgutters.com.au/roof-restoration-services" }
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
                Roof Restoration Services Newcastle: Complete Guide
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[#666666] text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>31 December 2024</span>
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
  path: "/roof-restoration-services/",
  element: <RoofWaterproofingPost />,
};

export default route;