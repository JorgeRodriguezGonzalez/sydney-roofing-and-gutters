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
    <p class="text-[#666666] leading-relaxed mb-6">Roof soffits play a crucial role in Newcastle homes by providing essential ventilation, weather protection, and aesthetic finishing to roof eaves and overhangs. These often-overlooked components serve as the visible underside of roof projections, bridging the gap between exterior walls and the roofline while facilitating proper attic airflow. In Newcastle's coastal climate with high humidity, frequent rainfall, and salt air exposure, quality soffits become indispensable for preventing moisture buildup, mould growth, and structural deterioration. Proper soffit installation and maintenance protect your home's most vulnerable areas while enhancing curb appeal and energy efficiency throughout Charlestown, Bar Beach, and surrounding Newcastle areas.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Best Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Essential Soffit Functions & Types</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Understanding soffit types helps Newcastle homeowners select optimal solutions for their ventilation and aesthetic requirements. Ventilated soffits feature perforated panels or integrated vents that promote continuous airflow from eaves to ridge vents, preventing moisture accumulation and temperature extremes in roof spaces. Solid soffits provide weather protection and finished appearance without ventilation features, suitable for areas where airflow isn't required or alternative ventilation systems exist.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Material selection significantly impacts durability and maintenance requirements in Newcastle's challenging environment. Aluminium soffits offer excellent corrosion resistance and minimal maintenance, while vinyl soffits provide cost-effective solutions with good weather resistance. Timber soffits deliver natural aesthetics but require regular maintenance in coastal conditions. Fibre cement soffits combine durability with fire resistance, making them increasingly popular for modern Newcastle homes in Adamstown and The Junction neighbourhoods where building standards demand superior performance.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0;">
        <thead>
          <tr style="background: #F9FAFB;">
            <th class="text-left p-3 border-b-2 border-gray-200">Material</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Durability</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Maintenance</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Cost</th>
          </tr>
        </thead>
        <tbody style="color:#666666;">
          <tr>
            <td class="p-3 border-b border-gray-200">Aluminium</td>
            <td class="p-3 border-b border-gray-200">25-30 years</td>
            <td class="p-3 border-b border-gray-200">Minimal</td>
            <td class="p-3 border-b border-gray-200">$$</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Vinyl</td>
            <td class="p-3 border-b border-gray-200">20-25 years</td>
            <td class="p-3 border-b border-gray-200">Low</td>
            <td class="p-3 border-b border-gray-200">$</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Timber</td>
            <td class="p-3 border-b border-gray-200">15-20 years</td>
            <td class="p-3 border-b border-gray-200">High</td>
            <td class="p-3 border-b border-gray-200">$$$</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Fibre Cement</td>
            <td class="p-3 border-b border-gray-200">30+ years</td>
            <td class="p-3 border-b border-gray-200">Low</td>
            <td class="p-3 border-b border-gray-200">$$$$</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Ventilation Benefits for Newcastle Climate</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Proper soffit ventilation proves essential in Newcastle's coastal environment where high humidity and temperature fluctuations create challenging conditions for roof systems. Continuous ventilation through soffit vents facilitates natural airflow that removes excess moisture, prevents condensation buildup, and regulates attic temperatures throughout seasonal changes. This airflow reduces cooling costs during hot summers while preventing ice dam formation during occasional winter cold snaps experienced in Merewether and Hamilton areas.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Moisture control through ventilated soffits prevents mould growth, timber rot, and insulation degradation that commonly affect Newcastle homes without adequate airflow. Temperature regulation maintains comfortable interior conditions while protecting roofing materials from thermal stress and premature ageing. Professional soffit ventilation design ensures optimal airflow patterns that maximise benefits while maintaining weather resistance against salt air and storm conditions typical in New Lambton and surrounding coastal suburbs.</p>

    <div style="background: rgba(52,152,219,.08); border-left:4px solid #3498DB; padding:16px; border-radius:8px; margin: 32px 0">
      <h4 style="margin:0 0 6px 0; color:#2C3E50;">Proper Soffit Ventilation Benefits for Coastal Homes</h4>
      <ul style="margin:0; padding-left:18px; color:#666666;">
        <li>Continuous moisture removal prevents condensation and mould growth</li>
        <li>Temperature regulation reduces cooling costs and thermal stress</li>
        <li>Enhanced air quality prevents stagnant conditions and odours</li>
        <li>Insulation protection maintains energy efficiency performance</li>
        <li>Structural preservation prevents moisture-related deterioration</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Installation & Repair Process</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Professional soffit installation begins with comprehensive assessment of existing eave structures, ventilation requirements, and design considerations to ensure optimal performance and aesthetic integration. Replacement procedures involve careful removal of deteriorated materials, structural inspection, and preparation of mounting surfaces to accommodate new soffit systems. Ventilation calculations determine appropriate vent sizing and spacing to achieve recommended airflow rates for your specific roof design and Newcastle climate conditions.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Professional fitting ensures proper alignment, secure fastening, and weather sealing that withstands Newcastle's coastal environment challenges. Quality installation includes integration with existing fascia boards, proper flashing installation, and seamless connections that prevent water infiltration and pest intrusion. Compliance with Australian building standards and manufacturer specifications guarantees optimal performance and warranty coverage for your investment in superior soffit protection.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Maintenance & Common Problems</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Regular soffit maintenance prevents common problems while extending system lifespan and performance. Recommended inspection schedules include biannual assessments of ventilation function, material condition, and mounting integrity, with particular attention to salt air damage and storm-related impacts. Common issues include blocked ventilation openings, loose or damaged panels, and pest intrusion that compromise system effectiveness and require prompt professional attention.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Need professional soffit installation or repair services?</strong> Sydney Roofing & Gutters delivers comprehensive soffit solutions throughout the Hunter Region. Our experienced team understands Newcastle's unique climate challenges and provides quality materials and installation for optimal ventilation and protection. Call us at <a href="tel:0240894613" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for expert consultation, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule your soffit assessment. Learn more about our complete eave solutions through our <a href="/roof-repairs" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof repair services</a> for comprehensive roof system maintenance and enhancement.</p>
`;

const postData = {
  title: "Roof Soffits Newcastle: Complete Installation & Repair Guide",
  excerpt: "Complete guide to roof soffits in Newcastle. Types, ventilation benefits, installation, and maintenance for optimal performance.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-29",
  category: "Components",
  tags: ["roof soffits", "soffit installation", "roof ventilation", "eaves"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roof-soffits",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Roof Soffits Newcastle | Complete Installation & Repair Guide"
        description="Complete guide to roof soffits in Newcastle. Learn about soffit types, ventilation benefits, professional installation, and maintenance."
        keywords="roof soffits newcastle, soffit installation, eaves repair, roof ventilation, soffit replacement"
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
          { name: "Roof Soffits Newcastle: Complete Installation & Repair Guide", url: "https://sydneyroofingandgutters.com.au/roof-soffits" }
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
                Roof Soffits Newcastle: Complete Installation & Repair Guide
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
  path: "/roof-soffits/",
  element: <RoofWaterproofingPost />,
};

export default route;