import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Đậu Hủ Yummy có miễn phí không?",
    answer: "Có. Đây là phiên bản miễn phí, bạn có thể tải và sử dụng thoải mái.",
    value: "item-1",
  },
  {
    question: "Có cần key để sử dụng không?",
    answer:
      "Có. Sau khi mở phần mềm, bạn sẽ cần nhập key để sử dụng. Key có thể được lấy miễn phí trên trang chủ hoặc nhóm Discord chính thức.",
    value: "item-2",
  },
  {
    question: "Đậu Hủ Yummy hỗ trợ những game nào?",
    answer:
      "Hiện tại Đậu Hủ Yummy hỗ trợ hầu hết các game phổ biến trên Roblox như Blox Fruits, Pet Simulator, King Legacy và nhiều game khác.",
    value: "item-3",
  },
  {
    question: "Key có giới hạn thời gian không?",
    answer: "Có. Mỗi key chỉ hoạt động trong một khoảng thời gian nhất định. Bạn có thể lấy key mới nếu key cũ hết hạn.",
    value: "item-4",
  },
  {
    question: "Làm sao để liên hệ hỗ trợ khi gặp lỗi?",
    answer:
      "Bạn có thể liên hệ qua Discord hoặc fanpage chính thức của Đậu Hủ Yummy để được hỗ trợ nhanh nhất.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Câu Hỏi{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Thường Gặp
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Bạn vẫn còn thắc mắc?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Liên hệ với chúng tôi
        </a>
      </h3>
    </section>
  );
};