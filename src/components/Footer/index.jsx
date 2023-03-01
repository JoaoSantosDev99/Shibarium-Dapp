const Footer = () => {
  return (
    <footer className="flex justify-center w-full font-ChakraPetch">
      <div className="max-w-screen-2xl gap-3 py-8 w-full bg-green-400 flex flex-col items-center">
        <ul className="flex gap-2">
          <li>Telegram</li>
          <li>Medium</li>
          <li>Discord</li>
          <li>Twitter</li>
        </ul>
        <span className="italic">
          &trade; Shibarium 2023. All Rights Reseverd
        </span>
      </div>
    </footer>
  );
};

export default Footer;
