type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <div className="grid justify-center justify-items-center">
      <h1>{title}</h1>
    </div>
  );
}
