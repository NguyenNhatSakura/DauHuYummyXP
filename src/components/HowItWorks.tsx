import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Dễ sử dụng",
    description:
      "Giao diện thân thiện, inject nhanh chóng chỉ với vài cú nhấp chuột – phù hợp cho cả người mới và pro.",
  },
  {
    icon: <MapIcon />,
    title: "Cộng đồng hỗ trợ",
    description:
      "Tham gia cộng đồng Discord sôi động, nhận hỗ trợ trực tiếp và chia sẻ script cùng bạn bè.",
  },
  {
    icon: <PlaneIcon />,
    title: "Tối ưu hiệu suất",
    description:
      "Hoạt động mượt mà trên mọi cấu hình PC, không gây lag hoặc crash khi sử dụng lâu dài.",
  },
  {
    icon: <GiftIcon />,
    title: "Miễn phí & Không quảng cáo",
    description:
      "Sử dụng hoàn toàn miễn phí, không dính quảng cáo gây phiền toái – trải nghiệm sạch sẽ và gọn gàng.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Những Gì{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Mà{" "}
        </span>
        Chúng Tối Có
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Tất Cả Những Gì Bạn Cần Để Tận Hưởng Trải Nghiệm Tốt Nhất Với Executor Của Chúng Tôi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
