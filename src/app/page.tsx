import { GitHubIcon, GoogleIcon, TwitterIcon } from "@/components";
import Image from "next/image";
import Link from "next/link";
import config from "../../tailwind.config";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen px-10">
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
          <ul className="flex flex-col gap-y-4 mt-10">
            <li>
              <button className="bg-white px-12 py-[6px] rounded-full flex gap-x-4 items-center">
                <figure>
                  <GoogleIcon />
                </figure>
                <span className="text-gray-600 font-semibold text-sm">
                  Registrarse con google
                </span>
              </button>
            </li>
            <li>
              <button className="bg-white px-12 py-[6px] rounded-full flex gap-x-4 items-center">
                <figure>
                  <GitHubIcon />
                </figure>
                <span className="text-gray-600 font-semibold text-sm">
                  Registrarse con github
                </span>
              </button>
            </li>
          </ul>
          <div className="flex items-center gap-x-2 mt-3">
            <div className="h-[.5px] w-32 bg-gray-500" />
            <span className="2xl:-mt-1">o</span>
            <div className="h-[.5px] w-32 bg-gray-500" />
          </div>
          <div className="flex flex-col">
            <button className="bg-twitter 2xl:w-72 rounded-full py-2 mt-2 hover:bg-opacity-95 transition-colors duration-300 ease-in-out">
              <span className=" text-[14px] font-bold">Crear Cuenta</span>
            </button>
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
            <button className="w-72 border-[1px] border-gray-700 px-10 py-1 rounded-full mt-4 hover:bg-twitter hover:bg-opacity-10 transition-colors duration-300 ease-in-out">
              <span className="text-[14px] font-bold text-twitter">
                Iniciar sesión
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
