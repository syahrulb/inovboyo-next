import Image from "next/image";
import MainLayout from "./landing/main-layout";
import Swiper from "./landing/swiper";
import ActiveTask from "./landing/active-task";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import admin from "@/public/images/carousell-depan/Netralitas-ASN-980x1067.webp";
import UpcomingDeadline from "./landing/upcoming-deadlines";
import Link from "next/link";
import { Alert2, Note3 } from "@/components/svg";

export default function Home() {
  return (
    <MainLayout>
      <div className="space-6">
        <div className="grid grid-cols-12 gap-6  ">
          <div className="col-span-12 md:col-span-6 mt-10 md:mt-0">
            <div className="w-full h-full bg-white rounded-md flex p-6 relative bg-inovboyo-card bg-cover bg-right-bottom bg-no-repeat">
              <div className="flex-1 ">
                <div class="text-lg md:text-2xl font-semibold text-primary mb-6">
                  Selamat Datang di INOVBOYO
                </div>
                <div class=" flex flex-col gap-4 sm:flex-row ">
                  <Link
                    href="auth/register"
                    className="inline-block flex items-center w-full max-w-[130px] p-3 rounded bg-primary/90 shadow backdrop-blur-sm"
                  >
                    <div class="flex-1">
                      <div class="text-sm md:text-lg font-bold text-dark">
                        Buat Akun
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="auth/login"
                    className="inline-block flex items-center w-full max-w-[130px] p-3 rounded bg-info/90 shadow backdrop-blur-sm"
                  >
                    <div class="flex-1">
                      <div class="text-sm md:text-lg font-bold text-dark">
                        Login
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block absolute bottom-0 w-[100px] md:w-[150px]">
                <Image
                  src={admin}
                  alt="user"
                  className="w-full h-full object-cover"
                  style={{
                    "-moz-transform": "scaleX(-1)",
                    "-o-transform": "scaleX(-1)",
                    "-webkit-transform": "scaleX(-1)",
                    transform: "scaleX(-1)",
                    filter: "FlipH",
                    "-ms-filter": "FlipH",
                  }}
                />
              </div>
            </div>
          </div>
          <Card className="col-span-12 md:col-span-6 ">
            <CardContent className="p-0">
              <Swiper></Swiper>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center flex-wrap justify-center gap-4 my-4">
          <div className="text-2xl font-medium text-primary-800 flex items-center">
            <Alert2 className="h-10 w-10" />
            Informasi Penting
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 xl:col-span-7">
            <Card>
              <CardHeader className="border-none pt-6">
                <CardTitle className="text-primary-800">
                  Timeline Inovboyo
                </CardTitle>
              </CardHeader>
              <CardContent className="px-3">
                <ActiveTask />
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-5">
            <UpcomingDeadline />
          </div>
        </div>
      </div>

      <div className="flex items-center flex-wrap justify-center gap-4 my-4">
        <div className="text-2xl font-medium text-primary-800 flex item-center">
          <Note3 className="h-10 w-10" /> Didukung oleh :
        </div>
      </div>
      <div className="py-5 px-15 grid grid-cols-12 gap-6 px-20">
        <div className="col-span-3 justify-center items-center">
          <Image
            src="/images/logo/logo-kemendagri.webp"
            alt="user"
            width={100}
            height={100}
          />
        </div>
        <div className="col-span-3 justify-center items-center">
          <Image
            src="/images/logo/jatim.webp"
            alt="user"
            width={100}
            height={100}
          />
        </div>
        <div className="col-span-3 justify-center items-center">
          <Image
            src="/images/logo/pemkot.webp"
            alt="user"
            width={100}
            height={100}
          />
        </div>
        <div className="col-span-3 justify-center items-center">
          <Image
            src="/images/logo/its.webp"
            alt="user"
            width={220}
            height={220}
          />
        </div>
      </div>
    </MainLayout>
  );
}
