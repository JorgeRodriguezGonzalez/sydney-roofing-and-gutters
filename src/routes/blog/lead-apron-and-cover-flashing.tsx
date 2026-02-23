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
    <p class="text-[#666666] leading-relaxed mb-6">Lead apron and cover flashing represent essential heritage roofing components that provide superior waterproofing protection at critical junctions between roof surfaces and walls, chimneys, and parapets in Newcastle properties. These traditional lead working techniques have been refined over centuries to create durable, compliant flashing solutions that protect against water infiltration while maintaining architectural integrity in heritage buildings across Merewether, Hamilton, and The Junction. Professional installation of lead flashing requires specialist knowledge of traditional techniques, Australian building standards, and Newcastle City Council conservation requirements.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Professional Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Understanding Lead Apron & Cover Flashing</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Lead flashing systems consist of two distinct components designed to provide comprehensive waterproofing protection at roof-to-wall junctions and other vulnerable areas. Apron flashing is the horizontal lead flashing that extends from beneath roof coverings to create water-shedding protection, typically installed along walls where roof pitches meet vertical surfaces. Cover flashing, also known as counter-flashing, is the vertical lead component that covers and protects the top edge of apron flashing, preventing water ingress behind the lead work.</p>

    <p class="text-[#666666] leading-relaxed mb-6">The sophisticated design of lead flashing systems creates multiple protection layers that direct water away from vulnerable junctions through superior mouldability, durability, and self-healing properties. Lead flashing develops a protective patina over time that enhances weather resistance while maintaining flexibility to accommodate thermal movement and structural settlement. Professional lead workers in Newcastle understand the critical importance of proper design, lead code selection, and installation techniques to ensure long-lasting waterproofing protection for your heritage or premium property.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Professional Installation Techniques</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Expert lead flashing installation requires careful selection of appropriate lead code thickness based on application requirements, with heavier codes providing increased durability for exposed areas and lighter codes offering flexibility for complex detailing. Traditional lead working techniques involve skillful forming, cutting, and dressing of lead sheets using specialist tools and centuries-old techniques. Proper overlap requirements typically involve minimum 100mm overlap at joints, with stepped installation creating continuous water-flow paths that prevent infiltration.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Professional fixings must accommodate thermal expansion and contraction without creating stress points that could lead to material failure. Lead patination strips protect the exposed lead flashing from early-stage weathering while forming protective surfaces, while proper counter-flashing ensures complete enclosure of vulnerable junctions. Our experienced Newcastle lead workers combine traditional craftsmanship with modern building science to deliver compliant, durable flashing installations throughout Merewether heritage precincts and premium residential developments.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0;">
        <thead>
          <tr style="background: #F9FAFB;">
            <th class="text-left p-3 border-b-2 border-gray-200">Flashing Type</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Lead Code</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Application</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Expected Life</th>
          </tr>
        </thead>
        <tbody style="color:#666666;">
          <tr>
            <td class="p-3 border-b border-gray-200">Apron Flashing</td>
            <td class="p-3 border-b border-gray-200">Code 5-6</td>
            <td class="p-3 border-b border-gray-200">Standard wall junctions</td>
            <td class="p-3 border-b border-gray-200">40-60 years</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Cover Flashing</td>
            <td class="p-3 border-b border-gray-200">Code 4-5</td>
            <td class="p-3 border-b border-gray-200">Counter-flashing protection</td>
            <td class="p-3 border-b border-gray-200">50-70 years</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Heritage Installations</td>
            <td class="p-3 border-b border-gray-200">Code 6-7</td>
            <td class="p-3 border-b border-gray-200">Exposed conservation work</td>
            <td class="p-3 border-b border-gray-200">80-100 years</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="background: rgba(52,152,219,.08); border-left:4px solid #3498DB; padding:16px; border-radius:8px; margin: 32px 0;">
      <h4 style="margin:0 0 6px 0; color:#2C3E50;">Critical Installation Standards for Newcastle Heritage Buildings</h4>
      <ul style="margin:0; padding-left:18px; color:#666666;">
        <li>Compliance with Australian Standard AS 1562 for lead sheet flashings</li>
        <li>Newcastle City Council conservation area requirements for heritage properties</li>
        <li>Traditional lead working techniques for architectural authenticity</li>
        <li>Proper patination protection for exposed lead surfaces</li>
        <li>Minimum 100mm overlap requirements for continuous waterproofing</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Heritage Building Compliance</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Newcastle's heritage precincts including The Hill, Wickham conservation areas, and Merewether heritage zones require specialist consideration when installing lead flashing to meet council conservation standards. Newcastle City Council maintains strict guidelines for roofing work on heritage-listed properties, requiring traditional materials and techniques that maintain architectural integrity. Professional assessment and council consultation ensure compliance with heritage regulations while delivering effective waterproofing protection.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Traditional lead working techniques including hand-forming, stepped overlaps, and specialist fixing methods preserve heritage character while providing modern performance standards. Our experienced team understands the balance between conservation requirements and functional requirements, delivering compliant lead flashing installations that enhance rather than compromise heritage values. Professional heritage assessment and council approval coordination ensure smooth project delivery for conservation-sensitive Newcastle properties.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Maintenance & Inspection Requirements</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Regular inspection every 12-24 months helps identify developing issues with lead flashing before significant problems develop. Common issues include theft of lead materials, mechanical damage from maintenance activities, and corrosion from incompatible metals. Early identification allows for repair rather than replacement, while professional assessment determines whether spot repairs or full replacement provides the most cost-effective solution.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Need expert lead flashing installation or repair services?</strong> Sydney Roofing & Gutters provides comprehensive lead flashing services throughout Newcastle heritage areas including Wickham, The Junction, and Merewether. Our experienced team understands traditional techniques and modern compliance requirements. Call us at <a href="tel:1300796024" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for a free consultation, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule an inspection. For more information about our specialist flashing services, visit our <a href="/roof-flashing-installation" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof flashing installation page</a>.</p>
`;

const postData = {
  title: "Lead Apron & Cover Flashing Newcastle: Heritage Installation Guide",
  excerpt: "Expert guide to lead apron and cover flashing in Newcastle. Professional installation, heritage compliance, and maintenance for premium roofing.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2025-01-03",
  category: "Heritage",
  tags: ["lead flashing", "apron flashing", "cover flashing", "heritage roofing"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "lead-apron-and-cover-flashing",
  content: generatePostContent()
};

const LeadApronPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Lead Apron & Cover Flashing Newcastle | Heritage Installation Guide"
        description="Expert guide to lead apron and cover flashing in Newcastle. Learn about professional installation, heritage compliance, and maintenance techniques."
        keywords="lead apron flashing newcastle, lead cover flashing, heritage roofing, lead installation, traditional flashing"
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
          { name: "Lead Apron & Cover Flashing Newcastle: Heritage Installation Guide", url: "https://sydneyroofingandgutters.com.au/lead-apron-and-cover-flashing" }
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
                Lead Apron & Cover Flashing Newcastle: Heritage Installation Guide
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[#666666] text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>3 January 2025</span>
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
  path: "/lead-apron-and-cover-flashing/",
  element: <LeadApronPost />,
};

export default route;