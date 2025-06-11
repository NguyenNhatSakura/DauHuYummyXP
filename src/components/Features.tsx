import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Giao diện thân thiện",
    description:
      "Thiết kế hiện đại, dễ sử dụng, tối ưu trải nghiệm người dùng từ người mới đến chuyên nghiệp.",
    image: image4,
  },
  {
    title: "Tương thích mạnh mẽ",
    description:
      "Hoạt động ổn định trên Roblox PC, hỗ trợ đa dạng script LuaU, không gây crash game.",
    image: image3,
  },
  {
    title: "Bảo mật và Miễn phí",
    description:
      "Không chứa mã độc, không quảng cáo ẩn, sử dụng miễn phí 100% và cập nhật thường xuyên.",
    image: image,
  },
];

const featureList: string[] = [
  "Dark/Light UI",
  "Tích hợp Discord",
  "Hỗ trợ LuaU script",
  "Inject nhanh chóng",
  "Không quảng cáo",
  "Anti-crash",
  "Cập nhật thường xuyên",
  "Tương thích Roblox PC",
  "Giao diện tối giản",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Chức{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Năng Hiện Có
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
