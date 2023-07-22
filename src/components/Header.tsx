import List from "./ListItem";

const Header = (props: { added_cart_count: number }) => {
  const data = [
    {
      href: "/not-found",
      displayName: "Man",
    },
    {
      href: "/not-found",
      displayName: "Woman",
    },
    {
      href: "/not-found",
      displayName: "Kids",
    },
    {
      href: "/not-found",
      displayName: "Cart " + props.added_cart_count.toString(),
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
                {listItem.displayName}
              </List>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;