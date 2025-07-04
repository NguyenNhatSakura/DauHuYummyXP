import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Về{" "}
                </span>
                Chúng Tôi
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Chúng tôi là KhuongDua Studio – một nhóm lập trình viên trẻ, đam mê Roblox và luôn mong muốn mang đến những công cụ hỗ trợ tốt nhất cho cộng đồng game thủ Việt. Với mục tiêu xây dựng một môi trường chơi game tự do, sáng tạo và an toàn, chúng tôi đã phát triển GodsWave – một phần mềm Executor cho Roblox trên PC dễ dùng, hiệu quả và bảo mật.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
