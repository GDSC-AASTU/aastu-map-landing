"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

interface IosWaitlistDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function IosWaitlistDialog({ isOpen, onClose }: IosWaitlistDialogProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only run animations after component is mounted to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Log the email collection
      console.log("[LOG email_collection] ========= iOS waitlist signup:", email);
    }, 1000);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          
          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
          >
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Dialog content */}
            <div className="p-6">
              <div className="flex items-center justify-center mb-5">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <svg className="w-9 h-9 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.03 9.78a.75.75 0 00-1.06-1.06l-5.47 5.47-2.47-2.47a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l6-6z" />
                    <path fillRule="evenodd" d="M14.136 1.2a3.61 3.61 0 00-4.272 0L8.489 2.21a2.11 2.11 0 01-.929.384l-1.686.259a3.61 3.61 0 00-3.021 3.02L2.594 7.56a2.11 2.11 0 01-.384.929L1.2 9.864a3.61 3.61 0 000 4.272l1.01 1.375c.2.274.333.593.384.929l.259 1.686a3.61 3.61 0 003.02 3.021l1.687.259c.336.051.655.183.929.384l1.375 1.01a3.61 3.61 0 004.272 0l1.375-1.01a2.11 2.11 0 01.929-.384l1.686-.259a3.61 3.61 0 003.021-3.02l.259-1.687a2.11 2.11 0 01.384-.929l1.01-1.375a3.61 3.61 0 000-4.272l-1.01-1.375a2.11 2.11 0 01-.384-.929l-.259-1.686a3.61 3.61 0 00-3.02-3.021l-1.687-.259a2.11 2.11 0 01-.929-.384L14.136 1.2zm-3.384 1.209a2.11 2.11 0 012.496 0l1.376 1.01a3.61 3.61 0 001.589.658l1.686.258a2.11 2.11 0 011.765 1.766l.26 1.686a3.61 3.61 0 00.657 1.59l1.01 1.375a2.11 2.11 0 010 2.496l-1.01 1.376a3.61 3.61 0 00-.658 1.589l-.258 1.686a2.11 2.11 0 01-1.766 1.765l-1.686.26a3.61 3.61 0 00-1.59.657l-1.375 1.01a2.11 2.11 0 01-2.496 0l-1.376-1.01a3.61 3.61 0 00-1.589-.658l-1.686-.258a2.11 2.11 0 01-1.765-1.766l-.26-1.686a3.61 3.61 0 00-.657-1.59l-1.01-1.375a2.11 2.11 0 010-2.496l1.01-1.376a3.61 3.61 0 00.658-1.589l.258-1.686a2.11 2.11 0 011.766-1.765l1.686-.26a3.61 3.61 0 001.59-.657l1.375-1.01z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            
              <h3 
                id="dialog-title" 
                className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2"
              >
                iOS Waitlist
              </h3>
              
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                AASTU Map is coming soon to iOS. Join our waitlist to get early access when it launches.
              </p>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : "Join Waitlist"}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-4">
                  <div className="flex items-center justify-center text-green-600 mb-4">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <p className="text-center text-green-600 font-medium text-lg mb-1">
                    You&apos;re on the list!
                  </p>
                  <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                    We&apos;ll notify you when AASTU Map is available for iOS.
                  </p>
                </div>
              )}
              
              <div className="mt-6 text-center">
                <button
                  onClick={onClose}
                  className="inline-block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium underline"
                >
                  Close this dialog
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 