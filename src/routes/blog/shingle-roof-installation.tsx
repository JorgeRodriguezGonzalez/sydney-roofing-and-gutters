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
    <p class="text-[#666666] leading-relaxed mb-6">Shingle roof installation represents one of the most popular roofing choices for Newcastle homeowners, offering exceptional versatility, aesthetic appeal, and reliable performance across diverse architectural styles. Asphalt composition shingles provide homeowners in Merewether, Hamilton, The Junction, Bar Beach, and throughout Newcastle with an outstanding balance of affordability, durability, and design flexibility. The professional installation process ensures optimal protection against Newcastle's coastal climate challenges, including high humidity, frequent rainfall, salt air exposure, and temperature variations that can compromise roof integrity over time.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Sydney Roofing & Gutters</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Professional Shingle Installation Process</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Professional shingle roof installation in Newcastle follows systematic procedures that ensure long-lasting protection and superior performance. The process begins with comprehensive surface preparation, requiring thorough deck inspection, replacement of damaged sections, and installation of quality underlayment to provide secondary waterproofing protection. Starter course installation establishes the foundation for proper shingle alignment and wind resistance, followed by systematic field shingle installation using precise nailing patterns and overlap requirements. Ridge cap installation completes the system with specialized hip and ridge shingles that provide enhanced weather protection at critical roof transitions.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Expert installers understand Newcastle's specific challenges, including coastal wind exposure, high humidity, and potential cyclonic conditions that demand superior installation techniques. Proper ventilation integration during installation prevents moisture accumulation that accelerates deterioration, while proper flashing installation around roof penetrations ensures comprehensive weather protection for skylights, chimneys, and vent pipes that are common in Newcastle residential architecture.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0;">
        <thead>
          <tr style="background: #F9FAFB;">
            <th class="text-left p-3 border-b-2 border-gray-200">Shingle Type</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Installation Time</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Lifespan</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Weather Performance</th>
          </tr>
        </thead>
        <tbody style="color:#666666;">
          <tr>
            <td class="p-3 border-b border-gray-200">3-Tab</td>
            <td class="p-3 border-b border-gray-200">1-2 days</td>
            <td class="p-3 border-b border-gray-200">20-25 years</td>
            <td class="p-3 border-b border-gray-200">Good</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Architectural</td>
            <td class="p-3 border-b border-gray-200">2-3 days</td>
            <td class="p-3 border-b border-gray-200">30-40 years</td>
            <td class="p-3 border-b border-gray-200">Excellent</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Designer</td>
            <td class="p-3 border-b border-gray-200">3-4 days</td>
            <td class="p-3 border-b border-gray-200">30-50 years</td>
            <td class="p-3 border-b border-gray-200">Premium</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Best Shingle Types for Newcastle Climate</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Newcastle homeowners benefit from selecting shingle types specifically designed to withstand coastal climate challenges. Asphalt composition shingles with fibreglass reinforcement offer superior resistance to moisture absorption, making them ideal for Newcastle's high humidity conditions. Architectural shingles feature multi-dimensional profiles that enhance wind resistance through increased surface friction and improved mechanical fastening characteristics, providing superior performance during the region's occasional severe weather events.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Designer shingles represent premium options with advanced weather-resistant characteristics, enhanced thickness, and superior granule adhesion that provide exceptional protection against UV radiation and thermal cycling common in Newcastle's climate. These premium shingles incorporate advanced polymer-modified asphalt formulations that resist cracking, lifting, and granule loss, ensuring long-term performance despite exposure to salt air and coastal moisture that can accelerate deterioration in standard shingle formulations.</p>

    <div style="background: rgba(52,152,219,.08); border-left:4px solid #3498DB; padding:16px; border-radius:8px; margin: 20px 0;">
      <h4 style="margin:0 0 6px 0; color:#2C3E50;">Essential Installation Quality Factors for Newcastle</h4>
      <ul style="margin:0; padding-left:18px; color:#666666;">
        <li>Proper underlayment prevents moisture penetration from coastal humidity</li>
        <li>Correct nailing patterns ensure wind resistance during severe storms</li>
        <li>Adequate roof ventilation prevents condensation and mould growth</li>
        <li>Professional flashing installation protects roof penetrations</li>
        <li>Quality installation maximizes shingle lifespan and performance</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Installation Standards & Best Practices</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Professional shingle installation in Newcastle adheres to stringent Australian building standards and manufacturer specifications that ensure optimal performance and compliance. Nailing patterns follow precise spacing requirements typically four to six nails per shingle depending on wind exposure zones, with proper placement relative to shingle tabs and adequate penetration into roof decking material. Overlap requirements ensure minimum coverage of underlying courses, typically 150mm horizontal and approximately 100mm vertical, creating effective weather barriers that prevent water infiltration during heavy rainfall.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Proper ventilation integration during installation proves critical for Newcastle homes, preventing moisture accumulation that accelerates shingle deterioration and promotes mould growth in roof spaces. Professional installers ensure adequate intake and exhaust ventilation balanced to maintain healthy airflow, preventing thermal cycling stresses that can compromise shingle integrity over time. Quality installation techniques combined with proper material selection create shingle roof systems capable of protecting Newcastle homes for decades despite challenging coastal climate conditions.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Installation Timeline & Costs</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Shingle roof installation timelines vary based on roof size, complexity, and shingle type selected. Standard 3-tab shingle installation typically requires 1-2 days for average residential homes, while architectural shingles require 2-3 days due to increased dimensional profile complexity. Designer shingles demand 3-4 days installation time for proper alignment and premium finishing standards that enhance aesthetic appeal and maximize performance characteristics throughout the roof system.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Installation costs encompass labour requirements, material expenses, and project complexity factors. Labour costs typically range from $60-100 per square metre depending on roof accessibility and complexity, while material costs vary from $20-40 per square metre for standard shingles up to $80-120 per square metre for premium designer options. Professional assessment ensures accurate cost estimation considering Newcastle's specific climate requirements and long-term performance expectations that justify investment in quality installation.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Need expert shingle roof installation services?</strong> Sydney Roofing & Gutters provides professional shingle installation throughout Newcastle and the Hunter Region. Our skilled team understands Newcastle's climate challenges and delivers superior installations that protect your investment. Call us at <a href="tel:1300796024" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for a free consultation, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule an inspection. For more information about our installation services, visit our <a href="/new-roof-installation" style="color: #3498DB; text-decoration: none; font-weight: 500;">new roof installation page</a> to learn about our comprehensive roofing solutions. Let us help you protect your home with professional shingle installation.</p>
`;

const postData = {
  title: "Shingle Roof Installation Newcastle: Professional Guide",
  excerpt: "Expert guide to shingle roof installation in Newcastle. Process, materials, best practices, and professional installation standards.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2025-01-01",
  category: "Installation",
  tags: ["shingle installation", "asphalt shingles", "roof installation", "shingle roofing"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "shingle-roof-installation",
  content: generatePostContent()
};

const ShingleRoofInstallationPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Shingle Roof Installation Newcastle | Professional Guide"
        description="Expert guide to shingle roof installation in Newcastle. Learn about the professional process, shingle types, and installation standards."
        keywords="shingle roof installation newcastle, asphalt shingles, shingle installation process, roofing installation"
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
          { name: "Shingle Roof Installation Newcastle: Professional Guide", url: "https://sydneyroofingandgutters.com.au/shingle-roof-installation" }
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
                Shingle Roof Installation Newcastle: Professional Guide
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[#666666] text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>01 January 2025</span>
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
  path: "/shingle-roof-installation/",
  element: <ShingleRoofInstallationPost />,
};

export default route;