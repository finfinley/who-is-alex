type HeaderProps = {
    Subheader: string;
  };
  
  export function Subheader({ Subheader }: HeaderProps) {
    return (
      <div className="grid justify-center justify-items-center ">
        <h2>{Subheader}</h2>
      </div>
    );
  }