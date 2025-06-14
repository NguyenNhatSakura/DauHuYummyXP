import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
  id="cta"
  className="bg-muted/50 py-16 my-24 sm:my-32"
>
  <div className="container lg:grid lg:grid-cols-2 place-items-center">
    <div className="lg:col-start-1">
      <h2 className="text-3xl md:text-4xl font-bold">
        Trải Nghiệm{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          GodsWave
        </span>
        Ngay Hôm Nay
      </h2>
      <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
        Inject script mượt mà, giao diện dễ dùng, không quảng cáo, hỗ trợ LuaU tối ưu cho Roblox PC. Sẵn sàng để bạn phá đảo mọi game!
      </p>
    </div>

    <div className="space-y-4 lg:col-start-2">
      <a href="https://oklink.cfd/gdq">
      <Button className="w-full md:mr-4 md:w-auto">Tải xuống miễn phí</Button>
      </a>
      <Button
        variant="outline"
        className="w-full md:w-auto"
      >
        Xem tính năng
      </Button>
    </div>
  </div>
</section>
  );
};
