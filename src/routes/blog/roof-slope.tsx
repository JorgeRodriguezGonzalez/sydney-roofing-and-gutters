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
    <p class="text-[#666666] leading-relaxed mb-6">Roof slope plays a fundamental role in Newcastle home design, directly influencing drainage performance, weather resistance, and material selection for optimal protection against the region's challenging coastal conditions. Proper pitch ensures effective rainwater runoff during Newcastle's intense storm seasons while providing structural stability against high winds and weather extremes. Understanding roof slope requirements becomes essential for homeowners planning renovations, repairs, or new construction, as incorrect pitch can lead to water pooling, premature material failure, and costly structural damage. With Newcastle's variable weather patterns including heavy rainfall, strong coastal winds, and occasional severe storms, optimal roof slope design ensures long-term performance and protection throughout Merewether, Hamilton, and surrounding suburbs.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Leading Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Understanding Roof Slope Classifications</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Low slope roofs feature pitches between 1/4:12 and 4:12, providing minimal drainage fall suitable for specific roofing materials and architectural styles. These designs require specialised waterproofing systems and materials like modified bitumen, single-ply membranes, or built-up roofing to prevent water infiltration. Medium slope roofs range from 4:12 to 9:12 pitch, offering balanced drainage and material compatibility with most traditional roofing options including tiles, shingles, and metal roofing systems common throughout Newcastle homes.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Steep slope roofs exceed 9:12 pitch, providing excellent drainage and weather resistance while accommodating virtually all roofing materials with minimal waterproofing concerns. Pitch measurements express the vertical rise over horizontal run, with 6:12 meaning 6 inches of vertical rise for every 12 inches of horizontal distance. Professional assessment determines optimal pitch for your specific situation, considering factors like architectural style, material preferences, and Newcastle's climate requirements throughout Charlestown, Bar Beach, and surrounding areas where proper drainage prevents costly water damage.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0;">
        <thead>
          <tr style="background: #F9FAFB;">
            <th class="text-left p-3 border-b-2 border-gray-200">Slope Type</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Pitch Range</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Drainage</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Best Materials</th>
          </tr>
        </thead>
        <tbody style="color:#666666;">
          <tr>
            <td class="p-3 border-b border-gray-200">Low</td>
            <td class="p-3 border-b border-gray-200">1/4:12 to 4:12</td>
            <td class="p-3 border-b border-gray-200">Limited</td>
            <td class="p-3 border-b border-gray-200">Membrane, Built-up</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Medium</td>
            <td class="p-3 border-b border-gray-200">4:12 to 9:12</td>
            <td class="p-3 border-b border-gray-200">Good</td>
            <td class="p-3 border-b border-gray-200">Tiles, Metal, Shingles</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Steep</td>
            <td class="p-3 border-b border-gray-200">9:12+</td>
            <td class="p-3 border-b border-gray-200">Excellent</td>
            <td class="p-3 border-b border-gray-200">All Materials</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Best Slopes for Newcastle Climate</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Newcastle's coastal climate demands roof slopes that effectively handle intense rainfall events while resisting strong wind forces common during storm seasons. Minimum pitches of 22.5 degrees (approximately 5:12) provide adequate drainage for most roofing materials while ensuring rapid water runoff during heavy downpours. Wind resistance considerations favour moderate slopes that balance weather protection with structural efficiency, as extremely steep pitches can create excessive wind uplift forces during coastal storms affecting Adamstown and The Junction neighbourhoods.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Material suitability varies significantly with slope requirements, with concrete tiles performing optimally at pitches above 17.5 degrees while metal roofing systems function effectively at lower slopes with appropriate underlayment. Professional design ensures slope selection accommodates both drainage requirements and material limitations while considering Newcastle's specific weather patterns including saltwater exposure, thermal cycling, and storm intensity. Climate-appropriate slopes enhance both performance and longevity for roofing systems throughout New Lambton and surrounding coastal areas.</p>

    <div style="background: rgba(52,152,219,.08); border-left:4px solid #3498DB; padding:16px; border-radius:8px; margin: 32px 0">
      <h4 style="margin:0 0 6px 0; color:#2C3E50;">Critical Slope Considerations for Newcastle Rainfall and Winds</h4>
      <ul style="margin:0; padding-left:18px; color:#666666;">
        <li>Minimum 22.5° pitch ensures effective drainage during storm events</li>
        <li>Wind resistance optimised with moderate slopes reducing uplift forces</li>
        <li>Material compatibility prevents installation failures and water ingress</li>
        <li>Thermal expansion accommodation prevents material stress and cracking</li>
        <li>Maintenance access balanced with safety and weather protection needs</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Slope Impact on Material Selection</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Tile installation requires minimum slopes to prevent water infiltration and ensure proper overlap performance, with concrete tiles typically requiring 17.5-degree minimum pitch while clay tiles may function at slightly lower slopes with additional waterproofing measures. Metal roofing offers greater slope flexibility, performing effectively from 5-degree minimum pitch with appropriate seaming and underlayment systems, making it suitable for various architectural applications throughout Newcastle's diverse housing stock.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Waterproofing requirements increase dramatically as slope decreases, with low-slope applications demanding complete membrane systems while steep slopes rely primarily on gravity drainage and material overlap for weather protection. Professional evaluation ensures material selection aligns with slope limitations while meeting Newcastle's demanding weather resistance requirements. Proper slope-material matching prevents premature failure while optimising both performance and cost-effectiveness for your roofing investment throughout the region's challenging coastal environment.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Changing Roof Slope Considerations</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Structural requirements for slope modifications involve comprehensive engineering assessment to ensure existing framing can support altered loads and stresses associated with pitch changes. Council approvals typically require development applications for significant slope modifications, particularly when affecting building height, setbacks, or heritage considerations common in Newcastle's established neighbourhoods. Cost considerations include structural modifications, material changes, and potential interior alterations required to accommodate new roof geometries.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Need expert advice on roof slope design or modifications?</strong> Sydney Roofing & Gutters provides comprehensive slope assessment and modification services throughout the Hunter Region. Our experienced team evaluates existing conditions, recommends optimal slope solutions, and manages all aspects of implementation including council approvals and structural requirements. Call us at <a href="tel:0240894613" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for professional consultation, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to discuss your slope requirements. Learn more about complete roofing solutions through our <a href="/roof-replacement" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof replacement services</a> for comprehensive design and installation expertise.</p>
`;

const postData = {
  title: "Roof Slope Newcastle: Complete Design & Drainage Guide",
  excerpt: "Essential guide to roof slope in Newcastle. Pitch classifications, drainage requirements, and material selection for optimal performance.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-30",
  category: "Design",
  tags: ["roof slope", "roof pitch", "roof drainage", "roof design"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roof-slope",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Roof Slope Newcastle | Complete Design & Drainage Guide"
        description="Essential guide to roof slope in Newcastle. Learn about pitch classifications, drainage requirements, and material selection."
        keywords="roof slope newcastle, roof pitch, roof angle, drainage design, roof gradient"
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
          { name: "Roof Slope Newcastle: Complete Design & Drainage Guide", url: "https://sydneyroofingandgutters.com.au/roof-slope" }
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
                Roof Slope Newcastle: Complete Design & Drainage Guide
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
  path: "/roof-slope/",
  element: <RoofWaterproofingPost />,
};

export default route;