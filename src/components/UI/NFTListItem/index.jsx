const NFTListItem = () => {
  return (
    <li className="bg-[#a75252d4] border-2 border-[#e79c2b] rounded-xl flex flex-col gap-1 p-2">
      <div className="w-56 h-44 bg-white rounded-t-xl"></div>
      <ul className="flex bg-[#623535] p-1 rounded-b-xl flex-col items-center">
        <li>Shibarium.inu</li>
        <li>
          <h3>Owner: 0xad ... 1F69</h3>
        </li>
        <li>
          <h3>Dogtag Id: 12</h3>
        </li>
      </ul>
    </li>
  );
};

export default NFTListItem;
