"use client";

import { useState } from 'react';
import { COMPONENTS } from '@/data/components';
import { Card } from '@/components/Card';
import ComponentTabs from '@/components/ComponentTabs';
import { motion, AnimatePresence } from "framer-motion";

const ComponentFilter = () => {
    const [activeTab, setActiveTab] = useState('All');
    const filteredComponents = activeTab === 'All'
        ? COMPONENTS
        : COMPONENTS.filter(({ categories }) => categories.includes(activeTab));

    return (
        <>
            <ComponentTabs tabs={['All', 'Badges', 'Buttons', 'Cards', 'Inputs', 'Text']} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='min-h-screen w-full p-6 border border-y-neutral-900 border-x-0'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <AnimatePresence>
                        {filteredComponents.map((comp) => (
                            <motion.div
                                key={comp.name}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card key={comp.name} slug={comp.slug} name={comp.name}>
                                    <comp.component />
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};

export default ComponentFilter;