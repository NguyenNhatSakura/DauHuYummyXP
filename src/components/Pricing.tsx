import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Miễn phí",
    popular: 0,
    price: 0,
    description:
      "Trải nghiệm cơ bản các tính năng của Yummy Executor mà không cần trả phí.",
    buttonText: "Dùng thử ngay",
    benefitList: [
      "Inject nhanh",
      "Không cần key",
      "Giao diện đơn giản",
      "Hỗ trợ cộng đồng",
      "Cập nhật định kỳ",
    ],
  },
  {
    title: "Pro",
    popular: 1,
    price: 49,
    description:
      "Bản đầy đủ tính năng, tối ưu hiệu suất và hỗ trợ cao nhất cho người dùng chuyên nghiệp.",
    buttonText: "Nâng cấp ngay",
    benefitList: [
      "Tốc độ inject tối đa",
      "Tự động chạy script",
      "Tùy chỉnh UI nâng cao",
      "Hỗ trợ trực tiếp",
      "Update sớm & ổn định",
    ],
  },
  {
    title: "Developer",
    popular: 0,
    price: 199,
    description:
      "Dành cho dev hoặc nhóm phát triển: build riêng executor theo yêu cầu.",
    buttonText: "Liên hệ ngay",
    benefitList: [
      "Executor riêng thương hiệu",
      "Đầy đủ tính năng nâng cao",
      "Không giới hạn thiết bị",
      "Tích hợp key system riêng",
      "Hỗ trợ kỹ thuật cá nhân",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Chọn Gói
  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
    {" "}
    Phù Hợp{" "}
  </span>
  Với Bạn
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Trải nghiệm miễn phí hoặc nâng cấp để khai thác toàn bộ sức mạnh của Executor.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
