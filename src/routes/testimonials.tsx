import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";
import Testimonials from "@/components/Testimonials";
import type { Testimonial } from "@/components/Testimonials";

const DEFAULTS = {
  businessName: "Sydney Roofing & Gutters",
};

const allReviews: Testimonial[] = [
  {
    name: "Cathrine",
    text: "We engaged Sydney Roofing & Gutters to re-roof our tiled roof to a new colorbond roof. They did a great job and we were so happy with the way it came out. Very professional and hard working team.",
    imageSrc: "/images/roof-restoration-project-after.jpg",
  },
  {
    name: "Wayne",
    text: "Excellent eye for detail. Quality workmanship, they built a magnificent pergola around our pool. Perfect for entertaining our Guests \u2014 we are extremely happy with their work!!",
    imageSrc: "/images/complete-roof-replacement-after.jpg",
  },
  {
    name: "Sonia",
    text: "The boys changed all our old rusted gutters to new quad gutters and pressure washed our roof. Good job.",
    imageSrc: "/images/roof-repair-and-restoration-1.jpg",
  },
  {
    name: "Craig Carter",
    text: "I had a new gutter system installed and the workmanship was spot on. The crew arrived on time, explained what they were doing, and didn\u2019t cut corners. They used quality materials and the water now drains properly even in heavy rain. Honest, professional, and very reliable roofing team.",
  },
  {
    name: "Eli Carmody",
    text: "We noticed a small water leak coming through the ceiling and called these guys in for roof repairs. Turns out we had cracked tiles and overflowing gutters. They replaced broken tiles, cleaned out the guttering, and sealed the area.",
  },
  {
    name: "Michael Leong",
    text: "We had our old, cracking tile roof and rusted gutters replaced with Colorbond. Ethan and his team provided friendly, punctual and high-quality service. We love the work they\u2019ve done.",
  },
  {
    name: "Carol Lan",
    text: "I was impressed with the way Sydney Roofing and Gutters came out and gave me a quote. I had a lot of questions and they answered them all very professionally. They were also less expensive than most other companies in the area. We got our roof leak fixed and it hasn\u2019t come back since.",
  },
  {
    name: "Karina Aguilera",
    text: "Sydney Roofing & Gutters has just completed our new Colorbond Roof! Excellent job. Couldn\u2019t be happier with the results and the service.",
  },
  {
    name: "Simon Pitt",
    text: "Ethan and the team did a great job \u2014 prompt, professional and friendly service. Would use again.",
  },
  {
    name: "Rahul B",
    text: "Got new gutters and guards from these guys. Team was friendly and did a great job. Really improved the look of the place and gave me peace of mind as my old gutters were rusty and well in need of replacing. Very happy!",
  },
  {
    name: "Kevin",
    text: "Our gutters were rusted and leaking and Sydney Roofing & Gutters did an excellent job replacing them with new Quad Gutters. Highly recommend!",
  },
  {
    name: "Sarpong Kwakwa",
    text: "Professional and polite team. They really fixed all my roof guttering problems and installed brand new downpipes on our property. 5 stars!",
  },
  {
    name: "Sandra Korkise",
    text: "Would highly recommend Sydney Roofing and Gutters. So glad I chose them, they were highly professional and delivered everything I had asked for.",
  },
  {
    name: "Joel Jose",
    text: "Cleaned out our gutters which had years of backlog. Finally have proper water flow and no more leaks in our house.",
  },
  {
    name: "Tom S",
    text: "Very happy with their service, their banter and their price. Good blokes, good job.",
  },
  {
    name: "Farnam Aghataher",
    text: "These guys did a metal re-roof for me and did an amazing job. Very good pricing and honest people.",
  },
  {
    name: "Luke Bergs",
    text: "Really happy with the service I received \u2014 great quality and value for money. Would use again. Highly recommended.",
  },
  {
    name: "Rebecca Melacrinis",
    text: "Great job and amazing group that completed the job! Couldn\u2019t recommend more enough.",
  },
];

function TestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`Customer Testimonials | ${DEFAULTS.businessName}`}
        description="Read what our customers say about Sydney Roofing & Gutters. Real reviews from Sydney homeowners about our roofing and guttering services."
        keywords="sydney roofing reviews, roofing testimonials, guttering reviews sydney, customer feedback roofer"
        ogTitle={`Customer Testimonials | ${DEFAULTS.businessName}`}
        ogDescription="Real reviews from Sydney homeowners about our roofing and guttering services."
        schemaType="RoofingContractor"
        customName={DEFAULTS.businessName}
        customDescription="Customer testimonials for Sydney Roofing & Gutters."
      />
      <Header />

      <section className="bg-[#179DC2] text-white py-12">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <h1 className="text-3xl md:text-4xl font-extrabold">Customer Testimonials</h1>
          <p className="text-lg opacity-90 mt-2">
            Real reviews from Sydney homeowners
          </p>
        </div>
      </section>

      <Testimonials reviews={allReviews} heading="What Our Clients Say" />

      <Footer />
      <FloatingBanner />
    </div>
  );
}

const Page = TestimonialsPage;
export const route = {
  path: "/testimonials/",
  element: <Page />,
  handle: { scrollToTop: true },
};
export default Page;
