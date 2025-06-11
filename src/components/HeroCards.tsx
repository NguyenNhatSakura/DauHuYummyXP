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
import { Check } from "lucide-react";
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
              <span className="sr-only">Facebook icon</span>
              <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>
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
              <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="youtube" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><polygon id="secondary" points="10 9 10 15 15 12 10 9" style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polygon><path id="primary" d="M21,15.8a3,3,0,0,1-2.76,3c-1.49.11-3.56.21-6.24.21s-4.75-.1-6.24-.21A3,3,0,0,1,3,15.8V8.2a3,3,0,0,1,2.76-3C7.25,5.1,9.32,5,12,5s4.75.1,6.24.21A3,3,0,0,1,21,8.2Z" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>
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
              Your Gay?, You Fat?, You Ugly? You Poor? You Stupid? I Need CamTuuu!
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
