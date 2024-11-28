const WormholeConnectLoading = () => {
  return (
    <div className="flex justify-center">
      <span className="relative flex h-16 w-16">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-50 opacity-75"></span>
        <span className="relative inline-flex h-16 w-16 rounded-full bg-gray-200"></span>
      </span>
    </div>
  );
};
