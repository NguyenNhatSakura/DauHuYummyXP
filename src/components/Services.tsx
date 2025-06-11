import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Inject Script Mượt Mà",
    description:
      "Tốc độ inject cực nhanh, không giật lag, tương thích tốt với đa số script LuaU hiện nay trên Roblox.",
    icon: <ChartIcon />,
  },
  {
    title: "Quản Lý Script Dễ Dàng",
    description:
      "Tổ chức, lưu trữ và chạy nhiều script trong cùng một giao diện đơn giản nhưng hiện đại.",
    icon: <WalletIcon />,
  },
  {
    title: "Tự Động Hóa & Auto Execute",
    description:
      "Hỗ trợ auto-execute cho script yêu thích và tự động khởi chạy khi mở Roblox.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Dịch Vụ{" "}</span>Nổi Bật Của Yummy Executor
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Trải nghiệm hệ thống executor hiện đại, đầy đủ tính năng cần thiết để bạn làm chủ Roblox và tối ưu hoá việc sử dụng script.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
