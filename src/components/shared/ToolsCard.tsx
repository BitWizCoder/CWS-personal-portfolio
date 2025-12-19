function ToolsCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="border border-gray-500 py-6 px-18 rounded-sm text-center flex flex-col items-center w-64 h-full">
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

export default ToolsCard;
