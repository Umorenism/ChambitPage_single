const dummyData = [
  {
    id: 1,
    imgSrc: "https://via.placeholder.com/40",
    name: "Chamb",
    role: "cham",
    amount: "$0.11000948",
  },
  {
    id: 2,
    imgSrc: "https://via.placeholder.com/40",
    name: "Bnb ",
    role: "bnb",
    amount: "$0.22001948",
  },
  {
    id: 3,
    imgSrc: "https://via.placeholder.com/40",
    name: "Dot",
    role: "coins",
    amount: "$0.33002948",
  },
  {
    id: 4,
    imgSrc: "https://via.placeholder.com/40",
    name: "Ton",
    role: "ton",
    amount: "$0.44003948",
  },
];

const Card = () => {
  return (
    <div className=" w-full min-h-[50px] flex items-center justify-center py-8 mt-2 p-2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-6xl">
        {dummyData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg py-4 rounded-md p-4 flex flex-col text-black"
          >
            <div className="flex justify-between items-center text-black">
              <div className="flex items-center space-x-2 text-black">
                <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center">
                  <img
                    src={item.imgSrc}
                    alt="logo"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="text-sm text-black">
                  <h1 className="font-semibold">{item.name}</h1>
                  <p>{item.role}</p>
                </div>
              </div>
              <button className="px-3 py-1 bg-green-700 rounded-md text-white text-xs">
                New
              </button>
            </div>
            <p className="text-start mt-4 text-black">{item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
