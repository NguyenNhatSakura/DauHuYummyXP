import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <>
      <footer id="footer">
        <hr className="w-11/12 mx-auto" />

        <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <a
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-xl flex"
            >
              <LogoIcon />
              GodsWave
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Follow US</h3>
            <a
              rel="noreferrer noopener"
              href="https://github.com/NguyenNhatSakura/GodsWave"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
            <a
              rel="noreferrer noopener"
              href="//fb.com/nguyennhat.dev"
              className="opacity-60 hover:opacity-100"
            >
              Facebook
            </a>
            <a
              rel="noreferrer noopener"
              href="https://www.youtube.com/@dauhuyummychannel"
              className="opacity-60 hover:opacity-100"
            >
              YouTube
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
            <a href="#" className="opacity-60 hover:opacity-100">Web</a>
            <a href="#" className="opacity-60 hover:opacity-100">Mobile</a>
            <a href="#" className="opacity-60 hover:opacity-100">Desktop</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">About</h3>
            <a href="#" className="opacity-60 hover:opacity-100">Features</a>
            <a href="#" className="opacity-60 hover:opacity-100">Pricing</a>
            <a href="#" className="opacity-60 hover:opacity-100">FAQ</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Community</h3>
            <a href="#" className="opacity-60 hover:opacity-100">Youtube</a>
            <a
              rel="noreferrer noopener"
              href="https://discord.gg/VM7ESrzccs"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
            <a href="#" className="opacity-60 hover:opacity-100">Twitch</a>
          </div>
        </section>

        <section className="container pb-14 text-center">
          <h3>
            &copy; 2025 GodsWave – Designed by{" "}
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://facebook.com/nguyennhat.dev"
              className="text-primary transition-all border-primary hover:border-b-2"
            >
              Nguyễn Minh Nhật
            </a>
          </h3>
        </section>
      </footer>

      {/* GTranslate Wrapper */}
      <div className="gtranslate_wrapper"></div>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.gtranslateSettings = {"default_language":"en","wrapper_selector":".gtranslate_wrapper"};`,
        }}
      />
      <script
        src="https://cdn.gtranslate.net/widgets/latest/float.js"
        defer
      ></script>
    </>
  );
};
