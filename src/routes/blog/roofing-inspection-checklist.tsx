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
    <p class="text-[#666666] leading-relaxed mb-6">Regular roof inspections are essential for maintaining your Newcastle home's most valuable protection system, helping identify potential issues before they escalate into costly repairs. Newcastle's challenging coastal climate, with its combination of high humidity, salt air exposure, frequent rainfall, and seasonal storms, places unique demands on roofing systems across suburbs like Merewether, Hamilton, and Charlestown. A comprehensive inspection checklist ensures no critical area is overlooked, from structural integrity to weatherproofing effectiveness. Professional assessment combined with systematic DIY checks provides Newcastle homeowners with complete peace of mind and early warning of maintenance needs.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Sydney Roofing & Gutters</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Complete Roof Inspection Checklist</h2>

    <p class="text-[#666666] leading-relaxed mb-6">A thorough roof inspection encompasses multiple critical areas that work together to protect your Newcastle home. Exterior inspection begins with examining roof coverings for loose, cracked, or missing tiles, particularly after storms that frequently impact the Hunter Region. Check for signs of sagging, which indicates structural issues requiring immediate professional attention. Inspect flashings around chimneys, vents, and skylights for rust, separation, or damaged sealing that could allow water infiltration.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Interior inspection focuses on ceiling stains, mould growth, or dampness in areas like Bar Beach and New Lambton homes prone to humidity issues. Examine attic spaces for adequate ventilation, proper insulation, and signs of pest intrusion. Gutters require assessment for blockages, proper drainage, and secure attachment to fascias. Each inspection point provides crucial information about your roof's condition and helps prioritise maintenance needs based on urgency and potential impact.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0;">
        <thead>
          <tr style="background: #F9FAFB;">
            <th class="text-left p-3 border-b-2 border-gray-200">Item</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Check For</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Frequency</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Priority</th>
          </tr>
        </thead>
        <tbody style="color:#666666;">
          <tr>
            <td class="p-3 border-b border-gray-200">Roof Tiles/Sheets</td>
            <td class="p-3 border-b border-gray-200">Cracks, displacement, missing pieces</td>
            <td class="p-3 border-b border-gray-200">Quarterly</td>
            <td class="p-3 border-b border-gray-200">High</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Gutters & Downpipes</td>
            <td class="p-3 border-b border-gray-200">Blockages, rust, loose brackets</td>
            <td class="p-3 border-b border-gray-200">Bi-annually</td>
            <td class="p-3 border-b border-gray-200">High</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Flashings</td>
            <td class="p-3 border-b border-gray-200">Rust, gaps, loose sealing</td>
            <td class="p-3 border-b border-gray-200">Annually</td>
            <td class="p-3 border-b border-gray-200">Medium</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Interior Ceiling</td>
            <td class="p-3 border-b border-gray-200">Stains, mould, sagging</td>
            <td class="p-3 border-b border-gray-200">Monthly</td>
            <td class="p-3 border-b border-gray-200">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="background: rgba(52,152,219,.08); border-left:4px solid #3498DB; padding:16px; border-radius:8px; margin: 32px 0;">
      <h4 style="margin:0 0 6px 0; color:#2C3E50;">Critical Warning Signs Requiring Immediate Professional Inspection</h4>
      <ul style="margin:0; padding-left:18px; color:#666666;">
        <li>Multiple missing tiles or extensive cracking across roof sections</li>
        <li>Sagging rooflines or visible structural deformation</li>
        <li>Active leaks during rainfall or persistent ceiling stains</li>
        <li>Extensive rust or corrosion on metal roofing components</li>
        <li>Damaged or missing flashings around critical penetrations</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">When to Inspect Your Newcastle Roof</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Newcastle's seasonal weather patterns dictate optimal inspection timing to maximise protection and catch issues early. Spring inspections, typically in September and October, assess winter storm damage and prepare for summer heat expansion. Autumn checks in March and April evaluate summer weathering and ready your roof for winter rainfall. Post-storm inspections within 48 hours of severe weather events help identify immediate damage requiring urgent attention.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Pre-purchase inspections prove invaluable for Adamstown and Jesmond property buyers, potentially saving thousands in unexpected roof repairs. Annual professional inspections complement regular homeowner checks, providing expert assessment of structural integrity and component longevity. Emergency inspections after events like hail damage or fallen tree branches ensure immediate safety and prevent secondary damage from delayed repairs.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">DIY Inspection vs Professional Assessment</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Safe DIY inspection focuses on ground-level observations and interior assessments that don't require roof access. Homeowners can effectively check gutters from ladders, examine ceilings for stains, and assess exterior flashings using binoculars. However, comprehensive roof surface inspection requires professional expertise and safety equipment to avoid dangerous falls or missed critical issues. Professional roofers identify subtle problems like micro-cracks, improper installations, and structural weaknesses invisible to untrained eyes.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Licensed professionals bring specialised knowledge of Newcastle's building codes, appropriate materials for coastal conditions, and insurance compliance requirements. They can safely access steep or complex roof configurations while providing detailed reports for insurance claims or property transactions. Professional assessment ensures nothing is overlooked and provides peace of mind that your roof inspection meets industry standards.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Pre-Purchase Inspection Importance</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Pre-purchase roof inspections protect Newcastle property buyers from unexpected expenses and provide negotiation leverage during sales processes. Professional assessment reveals hidden issues like poor previous repairs, inadequate ventilation, or approaching end-of-life components that may not be apparent during casual viewing. Detailed inspection reports help buyers understand future maintenance costs and make informed decisions about purchase prices or required seller repairs.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Investment protection through thorough pre-purchase inspection can save buyers significant money and prevent post-settlement disputes. Understanding a roof's true condition helps plan maintenance budgets and avoid surprises that could impact property enjoyment or resale value.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Need professional roof inspection services?</strong> Sydney Roofing & Gutters provides comprehensive inspection services throughout the Hunter Region. Our qualified team understands Newcastle's unique coastal challenges and provides detailed reports for maintenance planning or property purchases. Call us at <a href="tel:0240894613" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for expert assessment, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule your inspection. For more information about our inspection services, visit our <a href="/roof-inspections" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof inspections page</a> to learn about our comprehensive assessment process.</p>
`;

const postData = {
  title: "Roofing Inspection Checklist Newcastle: Complete Guide",
  excerpt: "Essential roofing inspection checklist for Newcastle homes. DIY checks, professional assessments, and seasonal inspection guide.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-26",
  category: "Maintenance",
  tags: ["roof inspection", "inspection checklist", "roof assessment", "pre-purchase inspection"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roofing-inspection-checklist",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Roofing Inspection Checklist Newcastle | Complete Guide"
        description="Essential roofing inspection checklist for Newcastle homes. Learn what to check, when to inspect, and when to call professionals."
        keywords="roof inspection checklist, roof inspection newcastle, pre-purchase inspection, roof assessment, inspection guide"
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
          { name: "Roofing Inspection Checklist Newcastle: Complete Guide", url: "https://sydneyroofingandgutters.com.au/roofing-inspection-checklist" }
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
                Roofing Inspection Checklist Newcastle: Complete Guide
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
  path: "/roofing-inspection-checklist/",
  element: <RoofWaterproofingPost />,
};

export default route;