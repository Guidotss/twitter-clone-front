import { TwitterIcon } from "@/components";
import {
  LoginButton,
  LoginModal,
  RegisterMethods,
  RegisterModal,
} from "@/components/auth";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen ">
      <section className="flex 2xl:w-full 2xl:h-full 2xl:items-center justify-between gap-x-40">
        <div className="w-full flex items-center justify-center">
          <figure className="2xl:w-[400px] md:hidden lg:block">
            <TwitterIcon />
          </figure>
        </div>
        <div className="flex flex-col w-full justify-center">
          <h1 className="2xl:text-6xl lg:text-5xl text-gray-200 font-extrabold 2xl:w-[500px] lg:w-[450px] leading-normal lg:mt-5 2xl:mt-0">
            Lo que está pasando ahora
          </h1>
          <h2 className="text-3xl font-extrabold 2xl:mt-14 lg:mt-10">Únete Hoy</h2>
          <RegisterMethods />
          <div className="flex flex-col">
            <div className="w-80 mt-3 font-extralight text-[11px]">
              <span>Al registrarte, aceptas los </span>
              <Link
                href={"https://twitter.com/es/tos"}
                className="text-twitter"
              >
                Términos de servicio{" "}
              </Link>
              <span>y la </span>
              <Link
                href={"https://twitter.com/es/privacy"}
                className="text-twitter"
              >
                Política de privacidad
              </Link>
              <span>, incluida la </span>
              <Link
                href={
                  "https://help.twitter.com/es/rules-and-policies/x-cookies"
                }
                className="text-twitter"
              >
                política de Uso de Cookies.
              </Link>
            </div>
          </div>
          <div className="flex flex-col 2xl:mt-10 lg:mt-5 text-lg font-semibold">
            <h4>¿Ya tienes una cuenta?</h4>
            <LoginButton />
          </div>
        </div>
      </section>
      <RegisterModal />
      <LoginModal />
    </main>
  );
}
