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
    <p class="text-[#666666] leading-relaxed mb-6">Roof replacement costs in Newcastle vary significantly based on materials, roof size, complexity, and specific installation requirements for coastal environments. Understanding comprehensive pricing factors helps homeowners make informed decisions about this major investment, with costs typically ranging from $15,000-35,000 for standard Newcastle homes. Professional assessment considers structural requirements, material suitability for salt air exposure, and labour complexity to provide accurate budgeting guidance. Expert evaluation ensures appropriate material selection, competitive pricing, and quality installation that maximises investment value across Merewether, Hamilton, The Junction, and surrounding Hunter Region areas for long-term roof performance.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Best Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Newcastle Roof Replacement Cost Breakdown</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Material costs represent 40-50% of total roof replacement expenses, with premium options like Colorbond steel commanding higher prices but offering superior coastal performance. Labour costs account for 35-40% of project expenses, reflecting skilled installation requirements and safety protocols essential for Newcastle's elevated coastal properties. Disposal fees for existing materials add $2,000-4,000 to project costs, particularly when asbestos removal requires specialised handling and certified disposal processes.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Permit fees and council approvals typically cost $500-1,500 depending on project complexity and heritage considerations in established Newcastle suburbs. Additional structural work including timber repairs, insulation upgrades, or ventilation improvements can increase costs by $3,000-8,000 based on specific requirements. Access challenges for multi-storey homes or complex roof designs may require scaffolding or specialised equipment, adding 10-20% to labour costs for safe and efficient installation.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Cost Factors for Different Roof Types</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Metal roofing systems including Colorbond steel provide excellent coastal performance with costs ranging $180-280 per square metre installed, depending on profile complexity and colour selection. Concrete tile installations cost $120-200 per square metre, offering durability and thermal performance suitable for Newcastle's climate conditions. Terracotta tiles command premium pricing at $200-350 per square metre but deliver exceptional longevity and aesthetic appeal for heritage properties.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Roof complexity significantly impacts pricing, with simple gable designs costing 20-30% less than complex configurations featuring multiple valleys, dormers, or architectural details. Steep pitch roofs require additional safety measures and specialised installation techniques, increasing labour costs by 15-25%. Premium materials with enhanced warranties and coastal-specific treatments add 10-40% to base material costs but provide superior long-term value for Newcastle properties.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0">
        <thead>
          <tr style="background: #F9FAFB">
            <th class="text-left p-3 border-b-2 border-gray-200">Roof Type</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Material Cost</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Labour Cost</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Total Range</th>
          </tr>
        </thead>
        <tbody style="color: #666666">
          <tr>
            <td class="p-3 border-b border-gray-200">Colorbond Steel</td>
            <td class="p-3 border-b border-gray-200">$95-140/m²</td>
            <td class="p-3 border-b border-gray-200">$85-140/m²</td>
            <td class="p-3 border-b border-gray-200">$180-280/m²</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Concrete Tiles</td>
            <td class="p-3 border-b border-gray-200">$65-105/m²</td>
            <td class="p-3 border-b border-gray-200">$55-95/m²</td>
            <td class="p-3 border-b border-gray-200">$120-200/m²</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Terracotta Tiles</td>
            <td class="p-3 border-b border-gray-200">$120-220/m²</td>
            <td class="p-3 border-b border-gray-200">$80-130/m²</td>
            <td class="p-3 border-b border-gray-200">$200-350/m²</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Slate Natural</td>
            <td class="p-3 border-b border-gray-200">$180-280/m²</td>
            <td class="p-3 border-b border-gray-200">$120-180/m²</td>
            <td class="p-3 border-b border-gray-200">$300-460/m²</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="background: rgba(52,152,219,.08); border-left: 4px solid #3498DB; padding: 16px; border-radius: 8px; margin: 32px 0">
      <h4 style="margin: 0 0 6px 0; color: #2C3E50">Cost-Saving Tips for Newcastle Roof Replacement</h4>
      <ul style="margin: 0; padding-left: 18px; color: #666666">
        <li>Schedule replacement during off-peak seasons for potential labour discounts</li>
        <li>Compare multiple quotes from licensed Newcastle contractors for competitive pricing</li>
        <li>Consider insurance claims for storm damage to offset replacement costs</li>
        <li>Invest in quality materials to reduce long-term maintenance and replacement frequency</li>
        <li>Bundle additional work like gutters or insulation for project efficiency savings</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Hidden Costs to Consider</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Structural repairs often emerge during roof removal, with timber replacement, rafter reinforcement, or sarking installation adding $3,000-10,000 to project costs depending on damage extent. Asbestos removal in older Newcastle homes requires certified contractors and specialised disposal, adding $5,000-15,000 for comprehensive abatement services. Scaffolding requirements for safe access on multi-storey or complex roofs can cost $2,000-6,000 depending on duration and site complexity.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Council fees and building permits vary by suburb and project scope, with heritage areas requiring additional approvals that increase costs and timeline requirements. Temporary accommodation costs may apply if extensive work prevents home occupation during installation phases. Insurance excess payments and premium adjustments should be factored into total project budgeting for comprehensive financial planning.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Financing Options & ROI</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Payment plans offered by quality contractors enable manageable project financing with staged payments aligned to completion milestones rather than large upfront costs. Insurance claims for storm damage can significantly offset replacement costs, with comprehensive policies covering materials and labour for approved claims. Home improvement loans provide competitive interest rates for major roof replacement projects, spreading costs over manageable monthly payments.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Planning your Newcastle roof replacement investment?</strong> Sydney Roofing & Gutters provides transparent pricing, competitive quotes, and flexible payment options for comprehensive roof replacement services throughout the Hunter Region. Our experienced team delivers detailed cost breakdowns, quality material selections, and professional installation that maximises your investment value. Call us at <a href="tel:0240894613" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for accurate cost assessment, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule your consultation. Explore our comprehensive <a href="/roof-replacement" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof replacement services</a> to understand how we deliver exceptional value for Newcastle homeowners.</p>
`;

const postData = {
  title: "Roof Replacement Cost Newcastle: Complete Price Guide 2024",
  excerpt: "Complete guide to roof replacement costs in Newcastle. Material prices, labour costs, and budget planning for your project.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-31",
  category: "Costs",
  tags: ["roof replacement cost", "roofing prices", "replacement budget", "roof costs"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roof-replacement-cost",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Roof Replacement Cost Newcastle | Complete Price Guide 2024"
        description="Complete guide to roof replacement costs in Newcastle. Learn about material prices, labour costs, hidden expenses, and budget planning."
        keywords="roof replacement cost newcastle, roofing prices, roof cost calculator, replacement budget, colorbond costs"
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
          { name: "Roof Replacement Cost Newcastle: Complete Price Guide 2024", url: "https://sydneyroofingandgutters.com.au/roof-replacement-cost" }
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
                Roof Replacement Cost Newcastle: Complete Price Guide 2024
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
  path: "/roof-replacement-cost/",
  element: <RoofWaterproofingPost />,
};

export default route;