import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.ibb.co/TMmB41sH/image.png",
    name: "Nguyễn Văn Nam",
    userName: "@nguyenvanamn",
    comment: "Giao diện rất đẹp và dễ sử dụng. Mình cực kỳ ấn tượng!",
  },
  {
    image: "https://i.ibb.co/TMmB41sH/image.png",
    name: "Trần Thị Bích",
    userName: "@tranthibich",
    comment: "Website hoạt động ổn định, tính năng đầy đủ và hỗ trợ tốt.",
  },
  {
    image: "https://i.ibb.co/TMmB41sH/image.png",
    name: "Lê Văn Nhất",
    userName: "@lenhat",
    comment: "Mình đã thử nhiều công cụ khác, nhưng cái này là ổn nhất!",
  },
  {
    image: "https://i.ibb.co/TMmB41sH/image.png",
    name: "Phạm Duy Dũng",
    userName: "@phamduydung",
    comment: "Tốc độ load nhanh, thiết kế đẹp mắt và hiện đại.",
  },
  {
    image: "https://i.ibb.co/TMmB41sH/image.png",
    name: "Hoàng Thị Thiện",
    userName: "@hoangthien",
    comment: "Cảm ơn team dev đã tạo ra một sản phẩm chất lượng như vậy!",
  },
  {
    image: "https://i.ibb.co/TMmB41sH/image.png",
    name: "Vũ Minh Hưng",
    userName: "@vuminh",
    comment: "Dễ sử dụng, tài liệu rõ ràng, rất phù hợp cho người mới.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
  Khám Phá Lý Do
  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
    {" "} Người Dùng Yêu Thích {" "}
  </span>
  Trang Web Này
</h2>

<p className="text-xl text-muted-foreground pt-4 pb-8">
  Những đánh giá chân thực từ người dùng đã từng trải nghiệm sản phẩm của chúng tôi.
</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
