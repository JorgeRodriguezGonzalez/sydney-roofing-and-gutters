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
    <p class="text-[#666666] leading-relaxed mb-6">Roof skylights transform Newcastle homes by introducing natural light into previously dark spaces, creating brighter, more inviting interiors while reducing reliance on artificial lighting. These innovative roof windows offer numerous benefits including improved ventilation, enhanced energy efficiency, and increased property value. In Newcastle's coastal environment, skylights help combat the challenges of limited natural light during overcast periods while providing essential ventilation to prevent moisture buildup. With proper selection and professional installation, skylights become valuable additions that brighten living spaces, reduce energy costs, and enhance the overall comfort and aesthetic appeal of homes throughout Merewether, Hamilton, and surrounding Newcastle suburbs.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Sydney Roofing & Gutters</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Best Skylight Types for Newcastle Homes</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Selecting the optimal skylight type depends on your specific needs, roof design, and desired functionality. Fixed skylights offer the most cost-effective solution for introducing natural light, featuring sealed glazing units that maximize illumination while maintaining weather resistance. These work exceptionally well in areas like hallways, stairwells, and rooms where ventilation isn't required. Ventilating skylights provide dual benefits of natural light and fresh air circulation, featuring opening mechanisms that allow homeowners to control airflow and temperature regulation throughout Newcastle's varying seasonal conditions.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Tubular skylights excel in smaller spaces or areas with limited roof access, utilizing reflective tubes to channel natural light from the roof to interior spaces. These compact solutions work perfectly for bathrooms, closets, and interior rooms in Charlestown and Bar Beach homes. Custom skylight designs accommodate unique architectural requirements, including pyramid skylights for modern aesthetics and curved units for specialty applications. Professional assessment ensures optimal skylight selection based on your home's orientation, roof pitch, and specific lighting requirements throughout Adamstown and The Junction neighbourhoods.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0;">
        <thead>
          <tr style="background: #F9FAFB;">
            <th class="text-left p-3 border-b-2 border-gray-200">Type</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Natural Light</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Ventilation</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Cost Range</th>
          </tr>
        </thead>
        <tbody style="color:#666666;">
          <tr>
            <td class="p-3 border-b border-gray-200">Fixed</td>
            <td class="p-3 border-b border-gray-200">Excellent</td>
            <td class="p-3 border-b border-gray-200">None</td>
            <td class="p-3 border-b border-gray-200">$800-2,000</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Ventilating</td>
            <td class="p-3 border-b border-gray-200">Excellent</td>
            <td class="p-3 border-b border-gray-200">Manual/Electric</td>
            <td class="p-3 border-b border-gray-200">$1,200-3,500</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Tubular</td>
            <td class="p-3 border-b border-gray-200">Good</td>
            <td class="p-3 border-b border-gray-200">Optional</td>
            <td class="p-3 border-b border-gray-200">$400-1,200</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Custom</td>
            <td class="p-3 border-b border-gray-200">Variable</td>
            <td class="p-3 border-b border-gray-200">Design Dependent</td>
            <td class="p-3 border-b border-gray-200">$2,500-8,000+</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Professional Installation Process</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Professional skylight installation begins with precise roof cutting and structural assessment to ensure proper fit and weather sealing. Expert installers create accurate openings in both the roof decking and roofing materials, maintaining structural integrity while accommodating the skylight frame. Flashing installation forms the critical waterproof barrier around the skylight perimeter, utilizing step flashing, saddle flashing, and integrated flashing systems to prevent water infiltration. Quality flashing work proves essential in Newcastle's coastal climate, where wind-driven rain and salt air exposure demand superior weather resistance.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Sealing procedures involve multiple layers of protection including underlayment integration, flashing sealants, and glazing compounds to create comprehensive weather barriers. Professional glazing installation ensures proper thermal performance and structural stability, while interior finishing work integrates skylights seamlessly with existing ceiling structures. Compliance with Australian building codes and manufacturer specifications guarantees optimal performance and warranty coverage for your New Lambton or surrounding Newcastle area home.</p>

    <div style="background: rgba(52,152,219,.08); border-left:4px solid #3498DB; padding:16px; border-radius:8px; margin: 32px 0">
      <h4 style="margin:0 0 6px 0; color:#2C3E50;">Energy Efficiency Benefits for Newcastle Climate</h4>
      <ul style="margin:0; padding-left:18px; color:#666666;">
        <li>Natural lighting reduces electricity costs by up to 15% annually</li>
        <li>Passive solar heating decreases winter energy consumption</li>
        <li>Natural ventilation minimises air conditioning requirements</li>
        <li>High-performance glazing provides excellent insulation properties</li>
        <li>Strategic placement maximises seasonal light capture and comfort</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Waterproofing & Maintenance Requirements</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Proper waterproofing ensures long-term performance and prevents costly water damage in Newcastle's challenging coastal environment. Flashing integrity requires regular inspection, particularly around step flashing joints and perimeter sealing areas where wind-driven moisture penetration commonly occurs. Professional maintenance includes seal inspection, debris removal, and glazing condition assessment to identify potential issues before they compromise interior protection.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Annual cleaning maintains optimal light transmission and extends skylight lifespan, while drainage system maintenance prevents water accumulation around skylight wells. Professional servicing of ventilating mechanisms ensures reliable operation and weather sealing, particularly important for coastal properties exposed to salt air corrosion. Preventative maintenance programs provide cost-effective protection and preserve manufacturer warranties throughout your skylight's operational life.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Costs & ROI for Newcastle Installations</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Skylight installation costs vary based on type, size, roof complexity, and accessibility factors, typically ranging from $800 to $4,000 per unit including professional installation. Energy savings from reduced artificial lighting and heating requirements provide measurable returns, with quality skylights typically recouping installation costs within 5-8 years through utility savings. Property value increases of 2-4% reflect the desirable nature of natural light features in Newcastle's competitive real estate market.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Ready to brighten your Newcastle home with professional skylight installation?</strong> Sydney Roofing & Gutters specialises in quality skylight solutions throughout the Hunter Region. Our experienced team ensures proper installation, waterproofing, and compliance with all building standards for optimal performance and longevity. Call us at <a href="tel:1300796024" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for a comprehensive consultation, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule your skylight assessment. For additional roof enhancement options, explore our <a href="/new-roof-installation" style="color: #3498DB; text-decoration: none; font-weight: 500;">new roof installation services</a> for complete roofing solutions.</p>
`;

const postData = {
  title: "Roof Skylights Newcastle: Complete Installation Guide",
  excerpt: "Expert guide to roof skylights in Newcastle. Types, installation process, benefits, and maintenance for natural light.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-29",
  category: "Features",
  tags: ["roof skylights", "skylight installation", "natural light", "roof windows"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roof-skylights",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Roof Skylights Newcastle | Complete Installation Guide"
        description="Expert guide to roof skylights in Newcastle. Learn about skylight types, professional installation, and energy efficiency benefits."
        keywords="roof skylights newcastle, skylight installation, roof windows, natural light, tubular skylights"
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
          { name: "Roof Skylights Newcastle: Complete Installation Guide", url: "https://sydneyroofingandgutters.com.au/roof-skylights" }
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
                Roof Skylights Newcastle: Complete Installation Guide
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[#666666] text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>24 December 2024</span>
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
  path: "/roof-skylights/",
  element: <RoofWaterproofingPost />,
};

export default route;