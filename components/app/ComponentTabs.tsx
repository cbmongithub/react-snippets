
type ComponentTabsProps = {
    tabs: string[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const ComponentTabs = ({ tabs, activeTab, setActiveTab }: ComponentTabsProps) => {
    return (
        <div className="font-light flex flex-row w-96 pb-8 mb-4 mx-auto justify-between items-start overflow-x-auto border border-b-neutral-900" >
            {tabs.map((tab: string) => (
                <button
                    type="button"
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`cursor-pointer ${activeTab === tab ? 'text-blue-500' : 'text-neutral-400'}`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default ComponentTabs;