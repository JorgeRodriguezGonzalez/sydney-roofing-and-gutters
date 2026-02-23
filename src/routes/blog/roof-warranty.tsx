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
    <p class="text-[#666666] leading-relaxed mb-6">Roof warranties provide essential protection for Newcastle homeowners, offering financial security and peace of mind regarding one of your property's most critical investments. Understanding warranty types, coverage limitations, and maintenance requirements ensures maximum protection value while preventing costly surprises that could void coverage. In Newcastle's challenging coastal environment with salt air exposure, intense UV radiation, and variable weather patterns, comprehensive warranty coverage becomes particularly valuable for protecting against premature failure and ensuring long-term roof performance throughout Merewether, Hamilton, and surrounding Hunter Region areas.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Best Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Types of Roof Warranties Explained</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Understanding different warranty types enables Newcastle homeowners to make informed decisions about coverage options and protection levels for their roofing investments. Manufacturer warranties cover material defects and performance failures under normal conditions, providing protection against premature deterioration or structural failure caused by manufacturing defects. These warranties typically range from 10-50 years depending on material quality and manufacturer reputation, with premium materials offering extended coverage periods that reflect superior performance expectations throughout Charlestown and Wickham properties.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Workmanship warranties protect against installation errors, improper techniques, and construction defects that could compromise roof performance or longevity. Professional contractors provide these warranties ranging from 1-10 years, covering labour costs and correction of installation-related issues. Material warranties focus specifically on product performance including weather resistance, structural integrity, and colour retention throughout specified coverage periods. Extended warranties combine manufacturer and contractor coverage, providing comprehensive protection that addresses both material and installation concerns for complete peace of mind throughout Adamstown and Mayfield installations.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0">
        <thead>
          <tr style="background: #F9FAFB">
            <th class="text-left p-3 border-b-2 border-gray-200">Warranty Type</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Duration</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Coverage</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Transferable?</th>
          </tr>
        </thead>
        <tbody style="color: #666666">
          <tr>
            <td class="p-3 border-b border-gray-200">Manufacturer</td>
            <td class="p-3 border-b border-gray-200">10-50 years</td>
            <td class="p-3 border-b border-gray-200">Material defects</td>
            <td class="p-3 border-b border-gray-200">Yes - with restrictions</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Workmanship</td>
            <td class="p-3 border-b border-gray-200">1-10 years</td>
            <td class="p-3 border-b border-gray-200">Installation errors</td>
            <td class="p-3 border-b border-gray-200">Usually not</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Extended System</td>
            <td class="p-3 border-b border-gray-200">15-30 years</td>
            <td class="p-3 border-b border-gray-200">Comprehensive</td>
            <td class="p-3 border-b border-gray-200">Yes - full terms</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Weather Protection</td>
            <td class="p-3 border-b border-gray-200">5-15 years</td>
            <td class="p-3 border-b border-gray-200">Storm damage</td>
            <td class="p-3 border-b border-gray-200">Limited transfer</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">What Newcastle Warranties Typically Cover</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Newcastle roof warranties typically cover material defects, installation failures, and performance issues that occur under normal weather conditions and proper maintenance practices. Coverage includes material deterioration beyond expected wear rates, structural failures caused by defective components, and waterproof integrity failures that allow moisture infiltration. Most warranties cover replacement materials and labour costs for covered defects, though coverage limitations may apply for secondary damage or consequential losses resulting from warranty failures.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Installation-related coverage addresses improper fastening, inadequate sealing, incorrect material application, and construction techniques that fail to meet manufacturer specifications or industry standards. Performance warranties guarantee specific levels of weather resistance, wind uplift capacity, and water penetration resistance appropriate for Newcastle's coastal exposure conditions. Understanding coverage exclusions including normal wear, storm damage, and maintenance-related issues helps homeowners maintain realistic expectations while ensuring proper care maintains warranty validity throughout the coverage period.</p>

    <div style="background: rgba(52,152,219,.08); border-left: 4px solid #3498DB; padding: 16px; border-radius: 8px; margin: 32px 0">
      <h4 style="margin: 0 0 6px 0; color: #2C3E50">Essential Warranty Tips for Newcastle Homeowners</h4>
      <ul style="margin: 0; padding-left: 18px; color: #666666">
        <li>Register warranties immediately after installation to ensure coverage activation</li>
        <li>Maintain detailed records of all inspections, maintenance, and repairs</li>
        <li>Use only approved contractors and materials for warranty-covered work</li>
        <li>Schedule regular professional inspections to identify issues early</li>
        <li>Understand transferability requirements before selling your property</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Maintaining Your Warranty Validity</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Maintaining warranty validity requires adherence to manufacturer specifications, regular professional inspections, and prompt attention to maintenance requirements that prevent minor issues from becoming major problems. Regular inspections every 6-12 months identify potential issues before they compromise warranty coverage, while professional maintenance ensures compliance with warranty terms and conditions. Using approved materials and contractors for any repairs or modifications prevents warranty voidance that could eliminate coverage for future issues.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Documentation requirements include maintaining service records, inspection reports, and repair documentation that demonstrate proper care and maintenance throughout the warranty period. Professional maintenance programs provide systematic care that meets warranty requirements while maximising roof lifespan and performance. Understanding warranty terms including maintenance schedules, approved materials, and reporting requirements ensures compliance that maintains full coverage protection throughout Newcastle's challenging coastal environment.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Making Warranty Claims</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Making successful warranty claims requires understanding the claims process, providing proper documentation, and following manufacturer procedures that ensure prompt resolution of covered issues. The claims process typically begins with professional assessment that identifies warranty-covered defects and determines appropriate remediation methods. Documentation requirements include photographic evidence, professional inspection reports, and maintenance records that demonstrate proper care and establish coverage eligibility for the reported issues.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Need professional roofing services with comprehensive warranty protection?</strong> Sydney Roofing & Gutters provides industry-leading warranty coverage throughout the Hunter Region. Our experienced team offers manufacturer-backed warranties combined with our own workmanship guarantees that provide complete protection for your roofing investment. Call us at <a href="tel:0240894613" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for a free consultation about warranty options, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule a professional assessment. For comprehensive information about our roofing services, visit our <a href="/roof-replacement" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof replacement page</a> to discover how our warranty-backed solutions protect Newcastle homes with premium coverage and professional service that ensures long-term satisfaction.</p>
`;

const postData = {
  title: "Roof Warranty Newcastle: Complete Warranty Guide",
  excerpt: "Essential guide to roof warranties in Newcastle. Types, coverage, maintenance requirements, and claims process.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-29",
  category: "Information",
  tags: ["roof warranty", "warranty coverage", "workmanship warranty", "manufacturer warranty"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roof-warranty",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Roof Warranty Newcastle | Complete Warranty Guide"
        description="Essential guide to roof warranties in Newcastle. Learn about warranty types, coverage, maintenance requirements, and claims."
        keywords="roof warranty newcastle, warranty coverage, workmanship warranty, manufacturer warranty, roof guarantee"
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
          { name: "Roof Warranty Newcastle: Complete Warranty Guide", url: "https://sydneyroofingandgutters.com.au/roof-warranty" }
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
                Roof Warranty Newcastle: Complete Warranty Guide
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[#666666] text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>29 December 2024</span>
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
  path: "/roof-warranty/",
  element: <RoofWaterproofingPost />,
};

export default route;