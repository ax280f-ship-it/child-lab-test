import "./header.scss"
export const Header = () => {
  return (
    <nav id="my-id" className="headerlist">
      <ul>
        {" "}
        <li className="page_item page-item-2 current_page_item">
          <a href="http://localhost/childlab/" aria-current="page">
            Главная страница 2
          </a>
        </li>{" "}
        <li className="page_item page-item-15">
          <a href="http://localhost/childlab/%d0%ba%d0%be%d0%bd%d1%82%d0%b0%d0%ba%d1%82%d1%8b/">
            Контакты
          </a>
        </li>{" "}
        <li className="page_item page-item-17">
          <a href="http://localhost/childlab/%d0%bc%d0%b5%d1%82%d0%be%d0%b4%d0%be%d0%bb%d0%be%d0%b3%d0%b8%d1%8f/">
            Методология
          </a>
        </li>{" "}
        <li className="page_item page-item-42">
          <a href="http://localhost/childlab/%d0%bf%d1%80%d0%be%d0%bc%d0%b5%d0%b6%d1%83%d1%82%d0%be%d1%87%d0%bd%d0%b0%d1%8f-%d1%81%d1%82%d1%80%d0%b0%d0%bd%d0%b8%d1%86%d0%b0/">
            Промежуточная страница 1
          </a>
        </li>{" "}
        <li className="page_item page-item-13">
          <a href="http://localhost/childlab/%d1%81%d1%82%d0%b0%d1%82%d1%8c%d0%b8/">
            Статьи2
          </a>
        </li>{" "}
      </ul>
    </nav>
  );
};
