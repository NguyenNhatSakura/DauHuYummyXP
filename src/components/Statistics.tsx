export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "4.7K+",
      description: "Người Dùng",
    },
    {
      quantity: "3.8K+",
      description: "Tham Gia",
    },
    {
      quantity: "5.9K+",
      description: "Tải Xuống",
    },
    {
      quantity: "1",
      description: "Quản Trị Viên",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
