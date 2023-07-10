import List from "./ListItem";

export default () => {
  const data = [
    {
      href: "/not-found",
      item: "Man",
    },
    {
      href: "/not-found",
      item: "Woman",
    },
    {
      href: "/not-found",
      item: "Kids",
    },
  ];

  return (
    <header>
      <div className="header__site-name">Fashion Finds</div>
      <nav className="header__nav">
        <ul className="header__nav__ul">
          {data.map((listItem, index) => {
            return (
              <List href={listItem.href} key={index}>
                {listItem.item}
              </List>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
