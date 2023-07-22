const ListItem = (props: { href: string; children: string }) => {
  return (
    <li>
      <a href={props.href}>{props.children}</a>
    </li>
  );
};

export default ListItem;
