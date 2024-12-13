import { architectPackages } from "./package-data";

const PackageList = () => (
  <section className="bg-white dark:bg-gray-900">
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Paket Layanan Desain Arsitek
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Kami menyediakan layanan desain arsitektur dengan tiga pilihan paket
          yang disesuaikan dengan kebutuhan dan anggaran Anda. Setiap paket
          mencakup berbagai layanan yang semakin lengkap di tingkat yang lebih
          tinggi.
        </p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        {architectPackages.map((architectPackage) => (
          <div
            key={architectPackage.id}
            className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
          >
            <h3 className="mb-4 text-2xl font-semibold">
              {architectPackage.name}
            </h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              {architectPackage.description}
            </p>
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-4xl font-extrabold">
                {architectPackage.pricePerSquareMeter.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </span>
              <span className="text-gray-500 dark:text-gray-400">/m2</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              {architectPackage.features.map((item) => (
                <li key={item.feature} className="flex items-center space-x-3">
                  {item.included ? (
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-x text-red-500"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  )}
                  <span>{item.feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="text-white bg-primary text-primary-foreground shadow hover:bg-primary/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Pesan
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PackageList;
