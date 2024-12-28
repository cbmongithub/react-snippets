"use client";
import { useState } from 'react';
import { COMPONENTS } from '@/data/components';
import Card from './Card';
import ComponentTabs from './ComponentTabs';

const ComponentFilter = () => {
    const [activeTab, setActiveTab] = useState('All');
    const filteredComponents = COMPONENTS.filter(({ categories }) => categories.find((category) => category === activeTab));
    return (
        <>
            <ComponentTabs tabs={['All', 'Badges', 'Buttons', 'Cards', 'Inputs', 'Text']} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='w-full py-10'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                    {filteredComponents ? filteredComponents.map((comp) => (
                        <Card key={comp.name} slug={comp.slug} name={comp.name}>
                            <comp.component />
                        </Card>
                    )) : COMPONENTS.map((comp) => (
                        <Card key={comp.name} slug={comp.slug} name={comp.name}>
                            <comp.component />
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ComponentFilter;