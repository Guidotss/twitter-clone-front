import { TwitterIcon } from "@/components";
import { LoginButton, RegisterMethods, RegisterModal } from "@/components/auth";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen ">
      <section className="flex 2xl:w-full 2xl:h-full 2xl:items-center justify-between gap-x-40">
        <div className="w-full flex items-center justify-center">
          <figure className="2xl:w-[400px]">
            <TwitterIcon />
          </figure>
        </div>
        <div className="flex flex-col w-full justify-center">
          <h1 className="text-6xl text-gray-200 font-extrabold 2xl:w-[500px] leading-normal">
            Lo que está pasando ahora
          </h1>
          <h2 className="text-3xl font-extrabold mt-14">Únete Hoy</h2>
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
          <div className="flex flex-col mt-10 text-lg font-semibold">
            <h4>¿Ya tienes una cuenta?</h4>
            <LoginButton />
          </div>
        </div>
      </section>
        <RegisterModal/>
    </main>
  );
}
