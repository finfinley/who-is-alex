type MainContentProp = {
  content: string;
};

export function MainContent({ content }: MainContentProp) {
  return (
    <div className="flex justify-center">
      <p>{content}</p>
    </div>
  );
}
