'use client';
import React, { useState } from 'react';
import { Header } from "./header";
import { SignIn } from "./SignIn";

export function ClientLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openSignInModal = () => setIsSignInModalOpen(true);
  const closeSignInModal = () => setIsSignInModalOpen(false);

  return (
    <div>
      <Header 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        openSignInModal={openSignInModal}
      />
      <main>
        {children}
      </main>
      <SignIn isOpen={isSignInModalOpen} onClose={closeSignInModal} />
    </div>
  );
}