import Image from "next/image";

const AboutUs = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="https://placehold.co/300.webp"
            alt="Architect headshot"
            width={300}
            height={300}
            className="mx-auto rounded-full"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Tentang Kami
          </h2>
          <p className="mb-4 text-muted-foreground text-black">
            Arsitek Berpengalaman dengan Spesialisasi Perencanaan Proyek Besar
            dan Desain Terintegrasi Alam.
          </p>
          <p className="text-muted-foreground">
            Profesional arsitektur dengan lebih dari 20 tahun pengalaman dalam
            merancang dan mengelola lebih dari 800 proyek di berbagai sektor,
            termasuk komersial, perumahan, fasilitas publik, dan proyek berskala
            besar. Terampil dalam perencanaan dan desain visual 2D dan 3D,
            Rencana Anggaran Biaya (RAB), dan pengawasan lapangan untuk
            memastikan kualitas serta kepatuhan standar. Ahli dalam software
            arsitektur seperti AutoCAD, SketchUp, Lumion, dan Revit, dengan
            kemampuan untuk menyatukan elemen desain yang estetis dan fungsional
            sesuai kebutuhan proyek.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
