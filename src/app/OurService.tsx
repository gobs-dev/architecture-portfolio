import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ourServices = [
  {
    title: "Desain Rumah Custom",
    icon: "🏠",
    description:
      "Wujudkan rumah impian Anda dengan desain yang personal dan fungsional. Kami memadukan estetika modern dengan kebutuhan gaya hidup Anda.",
  },
  {
    title: "Perencanaan Gedung Komersial",
    icon: "🏢",
    description:
      "Perencanaan bangunan komersial yang optimal untuk bisnis Anda. Fokus pada efisiensi ruang, aksesibilitas, dan nilai investasi jangka panjang.",
  },
  {
    title: "Desain Interior",
    icon: "🛋️",
    description:
      "Ciptakan ruang interior yang nyaman dan berkelas. Kombinasi sempurna antara fungsi, estetika, dan harmoni dalam setiap sudut ruangan.",
  },
  {
    title: "Visualisasi 3D",
    icon: "🖥️",
    description:
      "Lihat proyeksi desain Anda sebelum konstruksi dimulai. Visualisasi 3D fotorealistik membantu Anda memahami setiap detail dengan lebih baik.",
  },
];

const OurService = () => (
  <section className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
        Layanan Kami
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {ourServices.map((service, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="text-4xl mb-2">{service.icon}</div>
              <CardTitle className="text-foreground">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default OurService;
