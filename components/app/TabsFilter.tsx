"use client";
import { useState } from 'react';
import { COMPONENTS } from '@/data/components';
import Link from 'next/link';
import Card from './Card';

type TabsProps = {
    tabs: string[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
    return (
        <div className="font-light flex flex-row w-96 pb-8 mb-4 mx-auto justify-between items-start overflow-x-auto border border-b-neutral-900" >
            {tabs.map((tab: string) => (
                <Link
                    key={tab}
                    href="#"
                    onClick={() => setActiveTab(tab)}
                    className={activeTab === tab ? 'text-blue-500' : 'text-neutral-400'}
                >
                    {tab}
                </Link>
            ))}
        </div>
    );
};

const TabsFilter = () => {
    const [activeTab, setActiveTab] = useState('All');
    const filteredItems = COMPONENTS.filter(({ categories }) => categories.find((category) => category === activeTab));
    return (
        <>
            <Tabs tabs={['All', 'Badges', 'Buttons', 'Cards', 'Inputs', 'Text']} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='w-full py-10'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                    {filteredItems ? filteredItems.map((item, index) => (
                        <Card key={index} slug={item.slug} name={item.name}>
                            <item.component />
                        </Card>
                    )) : COMPONENTS.map((item, index) => (
                        <Card key={index} slug={item.slug} name={item.name}>
                            <item.component />
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TabsFilter;