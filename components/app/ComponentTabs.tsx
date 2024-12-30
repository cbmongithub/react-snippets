
type ComponentTabsProps = {
    tabs: string[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const ComponentTabs = ({ tabs, activeTab, setActiveTab }: ComponentTabsProps) => {
    return (
        <div className="font-light flex flex-row w-96 py-4 mx-auto justify-between items-start overflow-x-scroll">
            {tabs.map((tab: string) => (
                <button
                    type="button"
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`cursor-pointer hover:bg-neutral-800 px-3 py-2 ${activeTab === tab ? 'text-blue-500' : 'text-neutral-400'}`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default ComponentTabs;