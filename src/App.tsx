import React, { useState } from 'react';
import PortraitSection from './components/PortraitSection';
import ContentSection from './components/ContentSection';
import Homepage from './components/Homepage';

function App() {
  const [showHomepage, setShowHomepage] = useState(false);

  return (
    <>
      {!showHomepage ? (
        <main className="flex flex-col md:flex-row min-h-screen bg-black text-white">
          <PortraitSection />
          <ContentSection onViewHomepage={() => setShowHomepage(true)} />
        </main>
      ) : (
        <Homepage onBack={() => setShowHomepage(false)} />
      )}
    </>
  );
}

export default App;