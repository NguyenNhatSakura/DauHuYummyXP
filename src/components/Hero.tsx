import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Đậu
            </span>{" "}
            Hủ
          </h1>{" "}
          Yummy{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              XP
            </span>{" "}
            Executor Roblox
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Tạo Nên Sự Lười Biến Cho Bạn, Và Sự Giàu Có Cho Tôi Và Bạn, Trình Thực Thi Script Roblox PC Miễn Phí, Đến Từ Việt Nam.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Bắt đầu nút */}
          <a href="https://oklink.cfd/gdq" className="w-full md:w-1/3">
            <Button className="w-full">Bắt Đầu</Button>
          </a>

          {/* Discord link */}
          <a
            rel="noreferrer noopener"
            href="https://discord.gg/VM7ESrzccs"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Tham Gia Discord
          </a>
        </div>
      </div>

      {/* Hero cards section */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
