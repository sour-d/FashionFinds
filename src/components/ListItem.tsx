export default (props: any) => {
  return (
    <li>
      <a href={props.href}>{props.children}</a>
    </li>
  );
};
