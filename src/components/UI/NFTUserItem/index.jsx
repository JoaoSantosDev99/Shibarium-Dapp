const NFTUserItem = () => {
  return (
    <li className="bg-[#a75252d4] border-2 border-[#e79c2b] rounded-xl flex flex-col gap-1 p-2">
      <div className="w-36 h-24 sm:w-56 sm:h-44 bg-white rounded-t-xl"></div>
      <ul className="flex bg-[#623535] p-1 rounded-b-xl flex-col items-center">
        <li>Shibarium.inu</li>
        <li>
          <h3>Dogtag Id: 12</h3>
        </li>
      </ul>
    </li>
  );
};

export default NFTUserItem;
