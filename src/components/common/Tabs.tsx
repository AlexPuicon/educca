import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="flex border-b border-gray-300 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 font-medium text-lg ${
              activeTab === tab.id 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-600 hover:text-primary'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {tabs.find(tab => tab.id === activeTab)?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Tabs;