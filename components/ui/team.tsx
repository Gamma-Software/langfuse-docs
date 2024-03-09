
export const Team = ({
    items,
  }: {
    items: {
      id: number;
      name: string;
      designation: string;
      image: string;
      description: string;
    }[];
  }) => {
    return (
      <section className="bg-backgroud">
        {items.map((item, idx) => (
        <div
        className="-mr-2 relative group"
        key={item.name}
        >
          <h2 className="text-2xl font-extrabold dark:text-white">{item.name}</h2>
          <h3 className="text-lg text-gray-400">{item.designation}</h3>
          <p className="my-4 mx-4 mb-10 text-lg text-gray-400">{item.description}</p>
        </div>
        ))}
      </section>
    );
  };