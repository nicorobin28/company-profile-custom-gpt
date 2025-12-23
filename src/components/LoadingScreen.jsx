const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background z-[100] flex items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-t-4 border-primary rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-r-4 border-secondary-purple rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <div className="absolute inset-4 border-b-4 border-secondary-cyan rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
