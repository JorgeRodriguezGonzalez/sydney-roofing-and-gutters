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
    <p class="text-[#666666] leading-relaxed mb-6">Roof dormers enhance Newcastle homes by adding valuable interior space, natural light, and architectural character while maximising attic potential for functional living areas. These projecting roof structures create usable space from previously cramped attic areas, transforming them into bedrooms, home offices, or storage spaces that add significant value to residential properties. In Newcastle's competitive real estate market, dormers represent smart investments that increase both living space and property value while addressing the growing need for functional home expansions. With proper design and professional installation, dormers provide lasting benefits including improved natural light, enhanced ventilation, and distinctive architectural appeal throughout Merewether, Hamilton, and surrounding Newcastle suburbs.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Expert Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Popular Dormer Types for Newcastle</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Gable dormers represent the most common and versatile option, featuring triangular front faces that complement traditional architectural styles while providing maximum interior height and space utilisation. These classic designs work exceptionally well with colonial and federation-style homes common throughout Charlestown and Bar Beach, offering excellent proportions and weather resistance. Shed dormers provide maximum interior space and contemporary aesthetics, featuring flat or low-pitched roofs that create substantial floor area and ceiling height for functional room conversions.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Hipped dormers offer sophisticated design with sloped sides that integrate seamlessly with complex rooflines, particularly suitable for heritage homes in Newcastle's established neighbourhoods. Eyebrow dormers create subtle space additions with curved profiles that maintain roof aesthetics while adding limited but strategic natural light. Wall dormers extend from vertical wall sections rather than roof planes, providing unique design opportunities for challenging architectural situations throughout Adamstown and The Junction areas where creative solutions enhance both function and visual appeal.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0;">
        <thead>
          <tr style="background: #F9FAFB;">
            <th class="text-left p-3 border-b-2 border-gray-200">Type</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Space Added</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Complexity</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Cost Range</th>
          </tr>
        </thead>
        <tbody style="color:#666666;">
          <tr>
            <td class="p-3 border-b border-gray-200">Gable</td>
            <td class="p-3 border-b border-gray-200">Moderate</td>
            <td class="p-3 border-b border-gray-200">Medium</td>
            <td class="p-3 border-b border-gray-200">$15,000-40,000</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Shed</td>
            <td class="p-3 border-b border-gray-200">Maximum</td>
            <td class="p-3 border-b border-gray-200">High</td>
            <td class="p-3 border-b border-gray-200">$25,000-60,000</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Hipped</td>
            <td class="p-3 border-b border-gray-200">Good</td>
            <td class="p-3 border-b border-gray-200">High</td>
            <td class="p-3 border-b border-gray-200">$20,000-50,000</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Eyebrow</td>
            <td class="p-3 border-b border-gray-200">Minimal</td>
            <td class="p-3 border-b border-gray-200">Very High</td>
            <td class="p-3 border-b border-gray-200">$8,000-20,000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Benefits & Design Considerations</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Space addition through dormers provides cost-effective alternatives to ground-level extensions, utilising existing roof areas to create functional rooms without reducing outdoor space or requiring extensive foundation work. Natural light enhancement transforms dark attic spaces into bright, welcoming areas suitable for bedrooms, offices, or creative studios. Property value increases typically range from 15-25% of construction costs, making dormers attractive investments for Newcastle homeowners planning long-term residence or eventual resale.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Architectural style compatibility ensures dormers complement existing home designs rather than appearing as afterthoughts, requiring careful consideration of proportions, materials, and design elements. Professional design assessment evaluates structural feasibility, planning requirements, and integration opportunities to maximise both functional and aesthetic benefits. Climate considerations for Newcastle conditions include orientation for natural light optimisation, ventilation planning, and weather resistance to handle coastal storms and salt air exposure throughout New Lambton and surrounding areas.</p>

    <div style="background: rgba(52,152,219,.08); border-left:4px solid #3498DB; padding:16px; border-radius:8px; margin: 32px 0">
      <h4 style="margin:0 0 6px 0; color:#2C3E50;">Essential Dormer Planning Tips for Newcastle Homes</h4>
      <ul style="margin:0; padding-left:18px; color:#666666;">
        <li>Structural assessment ensures existing roof can support dormer loads</li>
        <li>Council approval requirements vary by dormer size and design complexity</li>
        <li>Orientation planning maximises natural light while minimising heat gain</li>
        <li>Waterproofing design prevents leaks in Newcastle's challenging weather</li>
        <li>Integration planning maintains architectural harmony and curb appeal</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Professional Installation Requirements</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Council approvals represent the first critical step, with development applications required for most dormer installations depending on size, setbacks, and heritage considerations. Professional structural engineering ensures existing roof structures can support additional loads while maintaining safety and code compliance. Design development involves architectural planning that integrates dormers seamlessly with existing rooflines while maximising interior functionality and natural light benefits.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Waterproofing requirements demand expert attention in Newcastle's coastal environment, with complex flashing systems, valley construction, and membrane installation essential for long-term weather resistance. Quality construction includes proper framing, insulation, and finishing work that creates comfortable, energy-efficient spaces meeting modern building standards. Professional installation ensures compliance with Australian building codes while delivering dormers that enhance both functionality and value for your Newcastle home investment.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Costs & Timeline Expectations</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Budget planning for dormer construction varies significantly based on type, size, complexity, and finishing requirements, typically ranging from $15,000 for simple gable dormers to $60,000+ for large shed dormers with premium finishes. Construction duration depends on weather conditions, complexity, and permit processing, with typical projects requiring 3-8 weeks from commencement to completion. Return on investment calculations demonstrate strong value proposition, with quality dormers often recouping 70-85% of construction costs in immediate property value increases.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Ready to enhance your Newcastle home with professional dormer installation?</strong> Sydney Roofing & Gutters specialises in quality dormer design and construction throughout the Hunter Region. Our experienced team manages every aspect from initial design through council approvals to final construction, ensuring seamless project delivery and exceptional results. Call us at <a href="tel:0240894613" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for comprehensive consultation, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to discuss your dormer project requirements. Explore our complete roofing services through our <a href="/new-roof-installation" style="color: #3498DB; text-decoration: none; font-weight: 500;">new roof installation page</a> for comprehensive roof enhancement and expansion solutions.</p>
`;

const postData = {
  title: "Roof Dormers Newcastle: Complete Design & Installation Guide",
  excerpt: "Complete guide to roof dormers in Newcastle. Types, benefits, design considerations, and professional installation process.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-30",
  category: "Features",
  tags: ["roof dormers", "dormer installation", "roof extension", "attic conversion"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roof-dormers",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Roof Dormers Newcastle | Complete Design & Installation Guide"
        description="Complete guide to roof dormers in Newcastle. Learn about dormer types, design considerations, and professional installation requirements."
        keywords="roof dormers newcastle, dormer installation, roof extension, attic conversion, dormer windows"
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
          { name: "Roof Dormers Newcastle: Complete Design & Installation Guide", url: "https://sydneyroofingandgutters.com.au/roof-dormers" }
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
                Roof Dormers Newcastle: Complete Design & Installation Guide
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
  path: "/roof-dormers/",
  element: <RoofWaterproofingPost />,
};

export default route;