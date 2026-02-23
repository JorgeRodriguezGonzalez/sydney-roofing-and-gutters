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
    <p class="text-[#666666] leading-relaxed mb-6">Lead parapet wall roofing represents an essential heritage construction technique preserving the architectural integrity of Newcastle's historic buildings throughout neighbourhoods including Cooks Hill, The Junction, Hamilton, Merewether, and other heritage-protected areas. Traditional lead sheet parapet capping provides superior weatherproofing for these elevated wall structures that extend above roof level, protecting historic facades from water infiltration while maintaining authentic character. This specialist work demands expert craftsmanship using traditional materials and techniques that ensure compliance with Newcastle's strict heritage preservation requirements while delivering long-term performance in coastal climate conditions.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Best Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Professional Lead Parapet Wall Installation</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Professional lead parapet wall installation requires meticulous attention to traditional techniques ensuring optimal weather protection and heritage compliance for Newcastle's period buildings. Lead sheet selection follows established codes typically 3mm to 4mm thickness depending on application requirements, with Code 4 lead providing superior durability for parapet capping exposed to Newcastle's coastal weather extremes. Installation begins with precise surface preparation, ensuring sound substrate free from debris and properly primed with appropriate bonding agents that enhance lead adhesion to underlying masonry or timber substrates.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Fixation methods include both traditional mechanical fixing using copper clips and modern adhesive bonding techniques that accommodate thermal movement while preventing water infiltration. Weatherproofing requires comprehensive lead dressing around all joints, overlaps, and penetrations using traditional soldering techniques that create seamless protection. Expansion joints strategically positioned accommodate thermal movement preventing stress cracking that compromises parapet wall integrity over decades of Newcastle's seasonal temperature variations.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0;">
        <thead>
          <tr style="background: #F9FAFB;">
            <th class="text-left p-3 border-b-2 border-gray-200">Application</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Lead Code</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Fixing Method</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Maintenance</th>
          </tr>
        </thead>
        <tbody style="color:#666666;">
          <tr>
            <td class="p-3 border-b border-gray-200">Parapet Capping</td>
            <td class="p-3 border-b border-gray-200">Code 4</td>
            <td class="p-3 border-b border-gray-200">Copper Clips/Adhesive</td>
            <td class="p-3 border-b border-gray-200">10-15 years</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Stepped Flashing</td>
            <td class="p-3 border-b border-gray-200">Code 3</td>
            <td class="p-3 border-b border-gray-200">Traditional Welded</td>
            <td class="p-3 border-b border-gray-200">15-20 years</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Expansion Joints</td>
            <td class="p-3 border-b border-gray-200">Code 4</td>
            <td class="p-3 border-b border-gray-200">Mastic/Lead Strips</td>
            <td class="p-3 border-b border-gray-200">5-10 years</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Heritage Compliance for Newcastle Buildings</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Heritage compliance for Newcastle's period buildings requires strict adherence to traditional materials and techniques preserving authentic character while ensuring modern weather protection standards. Council heritage approval typically demands traditional lead sheet materials, period-appropriate fixing methods, and preservation of original architectural details during parapet wall refurbishment projects. Specialist contractors understand Newcastle's heritage regulations, maintaining traditional craftsmanship skills including lead burning, welding, and geometric cutting that create seamless weather protection matching original construction methods.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Preservation standards require careful documentation, material sampling for matching original specifications, and respectful integration with existing architectural elements. Traditional techniques including lead welding without soldering and stepped flashing patterns preserve heritage aesthetics while ensuring compliance with modern building code requirements for wind resistance and weather sealing. Expert heritage work balances preservation priorities with performance requirements, creating parapet wall solutions that protect Newcastle's architectural heritage for future generations.</p>

    <div style="background: rgba(52,152,219,.08); border-left:4px solid #3498DB; padding:16px; border-radius:8px; margin: 20px 0;">
      <h4 style="margin:0 0 6px 0; color:#2C3E50;">Lead Parapet Benefits for Newcastle's Heritage Architecture</h4>
      <ul style="margin:0; padding-left:18px; color:#666666;">
        <li>Traditional material preserves authentic heritage character</li>
        <li>Superior durability withstands Newcastle's coastal climate challenges</li>
        <li>Self-healing properties minimise maintenance requirements</li>
        <li>Malleable nature accommodates complex parapet configurations</li>
        <li>Timeless aesthetic suits period architecture throughout Newcastle</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Maintenance & Longevity Requirements</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Lead parapet wall maintenance requires periodic inspection intervals typically annually, assessing lead sheet condition, joint integrity, and expansion accommodation to prevent water infiltration. Inspection frequency increases for exposed parapets in coastal zones experiencing accelerated weathering from salt air and moisture exposure. Professional assessment identifies early deterioration signs including cracking, lifting, granulation loss, or corrosion staining that indicates required maintenance intervention before significant failure occurs.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Patina care maintains lead's natural protective coating through careful cleaning avoiding abrasive methods that compromise surface integrity. Natural patina development provides additional weather protection over decades, with appropriate maintenance ensuring consistent coverage. Expansion joint monitoring becomes critical, checking sealant integrity and lead strip condition to prevent thermal movement from creating gaps that permit water infiltration into wall structures. Quality maintenance preserves parapet wall protection for Newcastle heritage buildings throughout expected lifespans exceeding seventy years with proper care.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Specialist Installation Costs</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Lead parapet wall installation represents specialist work with premium pricing reflecting heritage requirements and traditional craftsmanship skills. Premium materials including Code 4 lead sheet cost approximately $80-120 per square metre, while project labour expenses typically range from $150-250 per square metre depending on complexity, accessibility, and heritage compliance requirements. Heritage certification, specialist tools, and traditional techniques contribute to elevated costs compared with standard parapet wall work.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Heritage compliance costs include approval applications, documentation requirements, material sampling, and specialist consultation ensuring regulatory compliance throughout the project. While initial investment appears significant, quality lead parapet wall installation provides exceptional longevity exceeding seventy years when properly maintained, representing excellent value considering heritage preservation and long-term protection for Newcastle's historic architecture.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Need expert lead parapet wall installation for your heritage property?</strong> Sydney Roofing & Gutters provides specialist lead work throughout Newcastle and the Hunter Region. Our experienced team understands heritage compliance requirements and traditional techniques ensuring authentic preservation. Call us at <a href="tel:0240894613" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for a free consultation, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule an inspection. For more information about our heritage services, visit our <a href="/roof-restoration" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof restoration page</a> to learn about our comprehensive preservation solutions. Let us help protect your heritage property with professional lead parapet installation.</p>
`;

const postData = {
  title: "Roof with Lead Parapet Walls Newcastle: Heritage Guide",
  excerpt: "Expert guide to lead parapet wall roofing in Newcastle. Heritage installation, compliance, maintenance, and specialist services.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2025-01-01",
  category: "Heritage",
  tags: ["lead parapet walls", "heritage roofing", "lead roofing", "parapet walls"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roof-with-lead-parapet-walls",
  content: generatePostContent()
};

const RoofWithLeadParapetWallsPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Roof with Lead Parapet Walls Newcastle | Heritage Guide"
        description="Expert guide to lead parapet wall roofing in Newcastle heritage buildings. Learn about professional installation, compliance, and maintenance."
        keywords="lead parapet walls newcastle, heritage roofing, lead roofing, parapet wall installation, heritage buildings"
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
          { name: "Roof with Lead Parapet Walls Newcastle: Heritage Guide", url: "https://sydneyroofingandgutters.com.au/roof-with-lead-parapet-walls" }
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
                Roof with Lead Parapet Walls Newcastle: Heritage Guide
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
  path: "/roof-with-lead-parapet-walls/",
  element: <RoofWithLeadParapetWallsPost />,
};

export default route;