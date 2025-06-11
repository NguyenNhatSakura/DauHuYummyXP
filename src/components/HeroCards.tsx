import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt="Ảnh Đại Diện"
              src="https://github.com/NguyenNhatSakura.png"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Nguyễn Nhật Sakura</CardTitle>
            <CardDescription>@NguyenNhatSakura</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Nên Sử Dụng Vì Hỗ Trợ Tiếng Việt, Giao Diện Đẹp, Dễ Dùng, Hỗ Trợ 24/24!</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://github.com/KhuongDua-Studio.png"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Nguyễn Minh Nhật</CardTitle>
          <CardDescription className="font-normal text-primary">
            I Love CamTuuu ❤️
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Có những thứ luôn quẩn quanh cuộc đời và đôi lúc không có lời giải thích, liệu đó có phải duyên số?!
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/nguyenhatsakura"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://fb.com/nguyennhat.dev"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>F</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.youtube.com/@dauhuyummychannel"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Youtube icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Miễn Phí
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Đang Phổ Biến
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">Miễn Phí</span>
            <span className="text-muted-foreground"> /Tháng</span>
          </div>

          <CardDescription>
            Hỗ Trợ 100% UNC/Sunc, Custom UI, Custom API, UI Desginer,...
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Xem Thêm...</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["100% UNC/Sunc", "Custom API", "Custom UI/UX"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Gợi Ý:</CardTitle>
            <CardDescription className="text-md mt-2">
              Bật Lên, Attach Vào Roblox, Sau Đó Chọn Script Muốn Chạy, Nhấn Nút Chạy Là Xong! Và Lên Giường Trải Nghiệm 1 Giắc Ngủ Ngon!
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
