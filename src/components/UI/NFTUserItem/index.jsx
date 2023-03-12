import tag from "../../../assets/tag.png";

const NFTUserItem = () => {
  return (
    <li className="bg-[#FFECA7] shadow-lg border-2 border-[#e0b77a] rounded-xl flex flex-col gap-1 p-2">
      <div className="flex justify-center items-center w-36 h-24 sm:w-56 sm:h-44 bg-[#FFF4CE] rounded-t-xl">
        <img src={tag} alt="tag" className="w-24 md:w-44" />
      </div>
      <ul className="flex bg-[#8B6E48] text-[#FEE8CB] p-1 rounded-b-xl flex-col items-center">
        <li>Shibarium.inu</li>
        <li>
          <h3>Dogtag Id: 12</h3>
        </li>
      </ul>
    </li>
  );
};

export default NFTUserItem;
